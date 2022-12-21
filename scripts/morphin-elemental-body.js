import { MightyMorphinApp } from './mighty-morphin.js';
import { MorphinChanges } from './morphin-changes.js';
import { MorphinOptions } from './morphin-options.js';

/**
 * Application for selecting a shape from the Elemental Body spell to change into and then applying that shape to an actor
 */
export class MorphinElementalBody extends FormApplication {
    /**
     * @inheritdoc
     * @param {number} level The level of elemental body to use 1 - 4
     * @param {string} actorId The id of the actor that will change shape
     * @param {string} source The source of the elemental body effect
     */
    constructor(level, actorId, source) {
        super();
        this.level = level;
        this.actorId = actorId;
        this.actorSize = game.actors.get(actorId).system.traits.size;
        this.sizes = {};
        this.source = source;

        // Add all possible sizes for the given spell level
        switch (level) {
            case 4:
                this.sizes.elemental = ['sm', 'med', 'lg', 'huge'];
                break;
            case 3:
                this.sizes.elemental = ['sm', 'med', 'lg'];
                break;
            case 2:
                this.sizes.elemental = ['sm', 'med'];
                break;
            case 1:
                this.sizes.elemental = ['sm'];
                break;
        }

        this.shapeOptions = {};
        // Find options to shapeshift into based on the valid size choices above and sort them alphabetically
        this.shapeOptions.elemental = MorphinOptions.elemental.filter(o => this.sizes.elemental.includes(o.size));
        this.shapeOptions.elemental.sort((a, b) => { return a.name > b.name ? 1 : -1; });
    }

    /** @inheritdoc */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ['mightyMorphinDialog'],
            popOut: true,
            template: 'modules/pf1-mighty-morphin/templates/elementalBodyDialog.html',
            id: 'mighty-morphin-elementalBody',
            title: 'Mighty Morphin Elemental Body',
            resizable: false,
            width: 550
        });
    }

    /** @inheritdoc */
    async getData() {
        const data = {};

        // Set the default size to the largest available animal (default type)
        let defaultSize = this.sizes.elemental[this.sizes.elemental.length - 1];
        data.elementalOptions = this.shapeOptions.elemental.filter(o => o.size === defaultSize);
        // Create radio button data for elemental sizes, set the one for the default size as the default checked button
        data.elementalSizes = this.sizes.elemental.map(o => { return o === defaultSize ? { label: o, size: CONFIG.PF1.actorSizes[o], default: true } : { label: o, size: CONFIG.PF1.actorSizes[o] }; });

        // Get the elemental that will be the first shown in the form dropdown and build the preview of the changes the form will provide
        data.defaultChoice = data.elementalOptions[0];
        data.previewHtml = await this.buildPreviewTemplate(data.defaultChoice.name, 'elemental');

        return data;
    }

    /**
     * Processes and applies all changes from the passed form to the actor
     * 
     * @param {object} event The clicked button event
     * @param {string} chosenForm The name of the form chosen
     */
    async applyChanges(event, chosenForm) {
        let shifter = game.actors.get(this.actorId);
        let newSize = MorphinChanges.changes[chosenForm].size;

        let itemsToEmbed = [];
        // Find out if this is the only natural attack the form has
        let oneAttack = MorphinChanges.changes[chosenForm].attacks.length === 1;

        // Loop over the attacks and create the items
        const amuletItem = shifter.items.find(o => o.name.toLowerCase().includes('amulet of mighty fists') && o.data.data.equipped);
        let bonusSearch = /\+(\d+)/.exec(amuletItem?.name);
        let amuletBonus = !!bonusSearch ? bonusSearch[1] : null;
        for (let i = 0; i < MorphinChanges.changes[chosenForm].attacks.length; i++) {
            let attack = duplicate(MorphinChanges.changes[chosenForm].attacks[i]);
            attack.enh = parseInt(amuletBonus);

            itemsToEmbed.push(MightyMorphinApp.createAttack(this.actorId, newSize, attack, oneAttack, MorphinChanges.changes[chosenForm].effect, this.source, 'natural'));
        }

        // Loop over special attacks and create the items
        if (!!MorphinChanges.changes[chosenForm].specialAttack) {
            for (let i = 0; i < MorphinChanges.changes[chosenForm].specialAttack.length; i++) {
                let attack = duplicate(MorphinChanges.changes[chosenForm].specialAttack[i]);

                itemsToEmbed.push(MightyMorphinApp.createAttack(this.actorId, newSize, attack, false, MorphinChanges.changes[chosenForm].effect, this.source, 'misc'));
            }
        }

        // Add base polymorph size stat changes to the spell's normal changes if necessary
        if (!!this.polymorphChanges.length) this.changes = this.changes.concat(this.polymorphChanges);

        let buff = shifter.items.find(o => o.type === 'buff' && o.name === this.source);
        // If the buff doesn't already exist on the actor, create it
        if (!buff) {
            // Create buff Item template
            let buffData = { data: {} };
            buffData.data = duplicate(game.system.template.Item.buff);
            for (let t of buffData.data.templates) {
                mergeObject(buffData.data, duplicate(game.system.template.Item.templates[t]));
            }
            delete buffData.data.templates;

            // Populate needed data
            buffData.name = this.source;
            buffData.type = 'buff';
            buffData.img = (this.source === 'Wild Shape' ? 'systems/pf1/icons/skills/green_21.jpg' : 'systems/pf1/icons/spells/wind-grasp-magenta-2.jpg');

            itemsToEmbed.push(buffData);
        }
        else {
            buff.update({ 'data.changes': this.changes, 'data.active': true });
        }

        // Calculate the amount of strength the actor is gaining or losing 
        let strChange = 0;
        for (let i = 0; i < this.changes.length; i++) {
            const change = this.changes[i];

            if (!!change.target && change.target === 'ability' && change.subTarget === 'str') strChange += parseInt(change.formula);
        }

        // Set up adjustments to strength carry bonus and carry multiplier so actor's encumbrance doesn't change
        let carryBonusChanges = MightyMorphinApp.generateCapacityChange(shifter, newSize, strChange);
        this.changes.concat(carryBonusChanges);

        let armorChangeFlag = [];
        let armorToChange = [];
        // Double armor and shield AC when moving from tiny or below to small or above, halve it if the other way
        let smallSizes = ['fine', 'dim', 'tiny']; // sizes with half armor AC, also use dex for climb and swim instead of str
        let armorChangeNeeded = (smallSizes.includes(newSize) && !smallSizes.includes(this.actorSize)) || (!smallSizes.includes(newSize) && smallSizes.includes(this.actorSize));

        let armorAndShields = shifter.items.filter(o => o.type === 'equipment' && (o.equipmentType === 'armor' || o.equipmentType === 'shield'));

        // Cycle through all armor and shield items to process them
        for (let item of armorAndShields) {
            let originalArmor = armorChangeNeeded ? { armor: { value: item.armor.value } } : {};
            // If this is not Wild Shape or it is Wild Shape but the armor isn't Wild enchanted, armor must be removed
            let armorIsWild = item.name.includes('Wild');
            let originalEquipped = (armorIsWild && this.source === 'Wild Shape') ? {} : { equipped: item.data.data.equipped };
            originalArmor = mergeObject(originalArmor, originalEquipped);

            if (!!originalArmor) {
                armorChangeFlag.push({ _id: item.id, data: originalArmor });
                // take off armor if it's not wild armor or this is not beast shape from wild shape
                let equipChange = (armorIsWild && this.source === 'Wild Shape') ? {} : { equipped: false };
                let armorChange = armorChangeNeeded ? (smallSizes.includes(this.actorSize) ? { armor: { value: item.armor.value * 2 } } : { armor: { value: Math.floor(item.armor.value / 2) } }) : {};
                equipChange = mergeObject(equipChange, armorChange);
                armorToChange.push({ _id: item.id, data: equipChange });
            }
        }

        // change ability mods for climb and swim to str if moving from tiny or below to small or above, change to dex if moving the other way
        let originalSkillMod = {};
        let skillModChange = {};
        if (armorChangeNeeded) {
            originalSkillMod = { 'data.skills.clm.ability': shifter.system.system.skills.clm.ability, 'data.skills.swm.ability': shifter.system.system.skills.swm.ability };
            skillModChange = { 'data.skills.clm.ability': (smallSizes.includes(this.actorSize) ? 'str' : 'dex'), 'data.skills.swm.ability': (smallSizes.includes(this.actorSize) ? 'str' : 'dex') };
        }

        // Process speed changes
        let originalManeuverability = { 'system.attributes.speed.fly.maneuverability': shifter.system.attributes.speed.fly.maneuverability };
        let newSpeeds = duplicate(shifter.system.attributes.speed);
        let speedTypes = Object.keys(newSpeeds);
        let maneuverabilityChange = {};
        for (let i = 0; i < speedTypes.length; i++) {
            // Find the speed the form gives for the type
            let speed = this.speeds[speedTypes[i]];
            let speedChange = {formula: '0', operator: 'set', subTarget: speedTypes[i] + 'Speed', modifier: 'base', priority: 100, value: 0};
            if (!!speed) { // if the form has this speed add it
                speedChange.formula = speed.toString();
                speedChange.value = speed;
                if (speedTypes[i] === 'fly') maneuverabilityChange = {'system.attributes.speed.fly.maneuverability': (this.level === 1 ? 'average' : 'good')};
            }
            this.changes.push(speedChange);
        }

        // Process senses changes
        let originalSenses = { 'data.traits.senses': shifter.system.traits.senses };
        let senseObject = { 'dv': 0, 'ts': 0, 'bs': 0, 'bse': 0, 'll': { 'enabled': false, 'multiplier': { 'dim': 2, 'bright': 2 } }, 'sid': false, 'tr': false, 'si': false, 'sc': false, 'custom': '' };
        for (let i = 0; i < this.senses.length; i++) {
            const sensesEnumValue = this.senses[i];
            if (!!sensesEnumValue) {
                senseObject = mergeObject(senseObject, MorphinChanges.SENSES[Object.keys(MorphinChanges.SENSES)[sensesEnumValue - 1]].setting); // element 1 = SENSES[0] = LOWLIGHT
            }
        }
        let sensesChanges = { 'data.traits.senses': senseObject };

        // Process resistances changes
        let originalEres = { 'data.traits.eres': shifter.system.traits.eres };
        let eresString = this.eres || '';

        // Process vulnerabilities changes
        let originalDv = { 'data.traits.dv': shifter.system.traits.dv };
        let newDv = { value: [], custom: '' };
        if (!!this.dv) {
            for (let i = 0; i < this.dv.length; i++) {
                const vulnerability = this.dv[i];

                // If it's a system known damage type, can toggle its setting. Otherwise add it as a custom
                if (!!CONFIG.PF1.damageTypes[vulnerability]) newDv.value.push(vulnerability);
                else newDv.custom += (newDv.custom.length > 0 ? '; ' : '') + vulnerability;
            }
        }

        // Process DR changes
        let originalDr = { 'data.traits.dr': shifter.system.traits.dr };
        let drString = this.dr || '';

        // Process damage immunity changes
        let originalDi = { 'data.traits.di': shifter.system.traits.di };
        let newDi = { value: [], custom: '' };
        if (!!this.di) {
            for (let i = 0; i < this.di.length; i++) {
                const immunity = this.di[i];

                // If it's a system known damage type, can toggle its setting. Otherwise add it as a custom
                if (!!CONFIG.PF1.damageTypes[immunity]) newDi.value.push(immunity);
                else newDi.custom += (newDi.custom.length > 0 ? '; ' : '') + immunity;
            }
        }

        // replace eres and dv
        originalSenses = mergeObject(originalSenses, mergeObject(originalEres, originalDv));
        sensesChanges = mergeObject(sensesChanges, mergeObject({ 'data.traits.eres': eresString }, { 'data.traits.dv': newDv }));

        // replace DR if elemental body III or IV
        if (this.level >= 3) {
            originalSenses = mergeObject(originalSenses, originalDr);
            sensesChanges = mergeObject(sensesChanges, { 'data.traits.dr': drString });
        }

        // replace immunities if ebIV
        if (this.level === 4) {
            originalSenses = mergeObject(originalSenses, originalDi);
            sensesChanges = mergeObject(sensesChanges, { 'data.traits.di': newDi });
        }

        // Create special ability features
        if (!!this.special) {
            // create blank template for misc feature
            let specialData = { data: {} };
            specialData.data = duplicate(game.system.template.Item.feat);
            for (let t of specialData.data.templates) {
                mergeObject(specialData.data, duplicate(game.system.template.Item.templates[t]));
            }
            delete specialData.data.templates;
            specialData.type = 'feat';
            specialData.data.featType = 'misc';


            for (let i = 0; i < this.special.length; i++) {
                const specialName = this.special[i];

                if (!!specialName) { // make sure it wasn't deleted for being invalid at this spell level
                    let specialToCreate = duplicate(specialData);
                    specialToCreate.name = `${specialName} (${this.source})`;
                    itemsToEmbed.push(specialToCreate);
                }
            }
        }

        // Find image to change token to if it exists
        let newImage = await MightyMorphinApp.findImage(chosenForm);

        // Prepare data for image change
        let oldImage = { img: '' };
        let oldProtoImage = { token: { img: '' } };
        let protoImageChange = !!newImage ? { 'token.img': newImage } : {};
        if (!!newImage) {
            let token = canvas.tokens.ownedTokens.find(o => o.document.actorId === this.actorId);
            if (!!token) {
                oldImage.img = token.document.texture.src;
                await token.document.update({ 'img': newImage });
            }
            oldProtoImage.token.img = shifter.prototypeToken.texture.src;
        }

        // Create the items on the actor, then create an array of their ids to delete them later
        let itemsCreated = await shifter.createEmbeddedDocuments('Item', itemsToEmbed);
        itemsCreated = itemsCreated.map(o => o.id);

        // Turn on the buff created
        buff = shifter.items.find(o => o.type === 'buff' && o.name === this.source);
        let buffUpdate = [{ _id: buff.id, 'data.changes': this.changes, 'data.active': true }];

        let dataFlag = mergeObject({ 'data.traits.size': this.actorSize }, mergeObject(originalSkillMod, mergeObject(originalManeuverability, originalSenses)));
        if (!!newImage) { dataFlag = mergeObject(dataFlag, oldProtoImage); };
        let flags = { source: 'Beast Shape', buffName: this.source, data: dataFlag, armor: armorChangeFlag, itemsCreated: itemsCreated };
        if (!!newImage) { flags = mergeObject(flags, { tokenImg: oldImage }); };
        await shifter.update(mergeObject({ 'data.traits.size': newSize, 'flags.mightyMorphin': flags }, mergeObject(skillModChange, mergeObject(maneuverabilityChange, mergeObject(sensesChanges, protoImageChange)))));

        // update items on the actor
        if (!!armorToChange.length) await shifter.updateEmbeddedDocuments('Item', armorToChange.concat(buffUpdate));
        else await shifter.updateEmbeddedDocuments('Item', buffUpdate);
        
        canvas.tokens.releaseAll();
        canvas.tokens.ownedTokens.find(o => o.document.actorId === this.actorId).control();
        
        await this.close();
    }

    /**
     * Updates the options in the formSelect select input based on the type radio and the size clicked by the user in the event
     * 
     * @param {object} event listener event from sizeSelect radio buttons
     * @param {object} formSelect The select html object
     */
    async updateFormChoices(event, formSelect) {
        let newOptions = this.shapeOptions.elemental.filter(o => o.size === event.target.value);

        let newHtml = newOptions.map(o => `<option value="${o.name}">${o.name}</option>`);
        formSelect.innerHTML = newHtml;
    }

    /**
     * Processes the changes from the selected beast form into a readable preview display html. In the process it validates the changes based on the level of the spell
     * 
     * @param {string} chosenForm The name of the form chosen in the dropdown
     * @returns {string} HTML containing preview of all the changes to be made to the actor
     */
    async buildPreviewTemplate(chosenForm) {
        let data = {};
        this.chosenForm = this.shapeOptions.elemental.find(o => o.name === chosenForm);

        // Process stat changes for polymorphing smaller than small or larger than medium
        data.polymorphBase = '';
        this.polymorphChanges = MorphinChanges.changes.polymorphSize[this.actorSize] || {};
        if (!!this.polymorphChanges) {
            for (let i = 0; i < this.polymorphChanges.length; i++) {
                const change = this.polymorphChanges[i];
                if (!!change.target && change.target === 'ability') {
                    if (data.polymorphBase.length > 0) data.polymorphBase += ', ';// comma between entries
                    // text output of the stat (capitalized), and a + in front of positive numbers
                    data.polymorphBase += `${change.subTarget.charAt(0).toUpperCase()}${change.subTarget.slice(1)} ${(change.value > 0 ? '+' : '')}${change.value}`;
                }
            }
        }

        // Process stat changes from the spell based on spell level
        let chosenElement = chosenForm.split(' ')[1].toLowerCase();
        data.scoreChanges = '';
        this.changes = MorphinChanges.changes.elementalBody[chosenElement][this.chosenForm.size].changes;
        for (let i = 0; i < this.changes.length; i++) {
            const change = this.changes[i];

            if (!!change.target && change.target === 'ability') { // stat change
                if (data.scoreChanges.length > 0) data.scoreChanges += ', ';
                data.scoreChanges += `${change.subTarget.charAt(0).toUpperCase()}${change.subTarget.slice(1)} ${(change.value > 0 ? '+' : '')}${change.value}`;
            }
            else if (!change.target && change.subTarget == 'nac') { // natural AC change
                if (data.scoreChanges.length > 0) data.scoreChanges += ', ';
                data.scoreChanges += `Natural AC ${(change.value > 0 ? '+' : '')}${change.value}`;
            }
        }

        // Process changes to speed, limited by maximum the spell level allows
        data.speedChanges = '';
        this.speeds = duplicate(MorphinChanges.changes[this.chosenForm.name].speed);
        for (let i = 0; i < Object.keys(this.speeds).length; i++) {
            const element = Object.keys(this.speeds)[i];

            if (element === 'swim') {
                switch (this.level) {
                    case 1:
                    case 2:
                    case 3:
                        this.speeds[element] = Math.min(60, this.speeds[element]);
                        break;
                    case 4:
                        this.speeds[element] = Math.min(120, this.speeds[element]);
                        break;

                }
            }

            if (element === 'fly') {
                switch (this.level) {
                    case 1:
                    case 2:
                    case 3:
                        this.speeds[element] = Math.min(60, this.speeds[element]);
                        break;
                    case 4:
                        this.speeds[element] = Math.min(120, this.speeds[element]);
                        break;

                }
            }

            if (data.speedChanges.length > 1) data.speedChanges += ', ';
            data.speedChanges += `${element} ${this.speeds[element]} ft`;
        }

        // Process the natural attacks
        data.attacks = '';
        let attackList = MorphinChanges.changes[this.chosenForm.name].attacks;
        for (let i = 0; i < attackList.length; i++) {
            const attack = attackList[i];

            let attackSpecial = '';
            if (!!attack.special) { // process any specials associated with the attack
                for (let j = 0; j < attack.special.length; j++) {
                    const specialName = attack.special[j];
                    if (attackSpecial.length > 0) attackSpecial += ', ';
                    attackSpecial += specialName;
                }
            }

            let damageDice = attack.diceSize === 0 ? '' : `${attack.diceCount}d${attack.diceSize}`;
            if (attack.nonCrit) damageDice += (!!damageDice.length ? ' plus ' : '') + `${attack.nonCrit[0]} ${attack.nonCrit[1]}`;
            if (data.attacks.length > 0) data.attacks += ', ';
            data.attacks += `${attack.count > 1 ? attack.count + ' ' : ''}${attack.name} (${!!damageDice ? damageDice : '0'}${!!attackSpecial ? ' plus ' + attackSpecial : ''})`;
        }

        // Process special attacks
        data.specialAttacks = '';
        let specialAttackList = MorphinChanges.changes[this.chosenForm.name].specialAttack || [];
        for (let i = 0; i < specialAttackList.length; i++) {
            const specialAttack = specialAttackList[i];

            let attackSpecial = '';
            if (!!specialAttack.special) {
                for (let j = 0; j < specialAttack.special.length; j++) {
                    const specialName = specialAttack.special[j];
                    if (attackSpecial.length > 0) attackSpecial += ', ';
                    attackSpecial += specialName;
                }
            }

            let damageDice = specialAttack.diceSize === 0 ? '' : `${specialAttack.diceCount}d${specialAttack.diceSize}`;
            if (specialAttack.nonCrit) damageDice += (!!damageDice.length ? ' plus ' : '') + `${specialAttack.nonCrit[0]}`;
            if (data.specialAttacks.length > 0) data.specialAttacks += ', ';
            data.specialAttacks += `${specialAttack.count > 1 ? specialAttack.count + ' ' : ''}${specialAttack.name} (${!!damageDice ? damageDice : '0'}${!!attackSpecial ? ' plus ' + attackSpecial : ''})`;
        }
        if (!data.specialAttacks.length) data.specialAttacks = 'None';

        // Process changes in senses limited by the spell level
        this.senses = duplicate(MorphinChanges.changes[this.chosenForm.name].senses);
        data.senses = !!this.senses.length ? '' : 'None';
        for (let i = 0; i < this.senses.length; i++) {
            const senseEnumValue = this.senses[i];
            // limit darkvision above 60 when not beast shape iv
            if (senseEnumValue >= MorphinChanges.SENSES.DARKVISION70.value && senseEnumValue <= MorphinChanges.SENSES.DARKVISION90.value) {
                if (this.level < 4) this.senses[i] = Math.min(senseEnumValue, MorphinChanges.SENSES.DARKVISION60.value);
            }

            // limit blindsense
            if (senseEnumValue >= MorphinChanges.SENSES.BLINDSENSE10.value && senseEnumValue <= MorphinChanges.SENSES.BLINDSENSE60.value) {
                if (this.level < 3) {
                    delete (this.senses[i]);
                    continue;
                }
                else if (this.level === 3) this.senses[i] = Math.min(senseEnumValue, MorphinChanges.SENSES.BLINDSENSE30.value);
                else if (this.level === 4) this.senses[i] = Math.min(senseEnumValue, MorphinChanges.SENSES.BLINDSENSE60.value);
            }

            // limit tremorsense
            if (senseEnumValue >= MorphinChanges.SENSES.TREMORSENSE10.value && senseEnumValue <= MorphinChanges.SENSES.TREMORSENSE60.value) {
                if (this.level < 4) {
                    delete (this.senses[i]);
                    continue;
                }
                else if (this.level === 4) this.senses[i] = Math.min(senseEnumValue, MorphinChanges.SENSES.TREMORSENSE60.value);
            }

            if (!!senseEnumValue) {
                if (data.senses.length > 0) data.senses += ', ';
                data.senses += `${MorphinChanges.SENSES[Object.keys(MorphinChanges.SENSES)[senseEnumValue - 1]].name}`; // element 1 = SENSES[0] = LOWLIGHT
            }
        }

        // Process special qualities
        data.special = 'None';
        this.special = !!MorphinChanges.changes[this.chosenForm.name].special ? duplicate(MorphinChanges.changes[this.chosenForm.name].special) : [];
        for (let i = 0; i < this.special.length; i++) {
            const element = this.special[i];

            if (data.special === 'None') data.special = '';
            if (data.special.length > 0) data.special += ', ';
            data.special += element;
        }

        data.eres = MorphinChanges.changes[this.chosenForm.name].eres?.join(', ') || 'None';
        this.eres = MorphinChanges.changes[this.chosenForm.name].eres?.join('; ') || '';


        data.dv = MorphinChanges.changes[this.chosenForm.name].dv?.join(', ') || 'None';
        this.dv = MorphinChanges.changes[this.chosenForm.name].dv || [];

        if (this.level >= 3) {
            data.di = MorphinChanges.changes[this.chosenForm.name].di?.join(', ') || 'None';
            this.di = MorphinChanges.changes[this.chosenForm.name].di || [];
        }

        if (this.level === 4) {
            data.dr = MorphinChanges.changes[this.chosenForm.name].dr?.join(', ') || 'None';
            this.dr = MorphinChanges.changes[this.chosenForm.name].dr?.join('; ') || '';
        }

        let newHtml = `${!!data.polymorphBase ? '<p><span class="previewLabel">Base Size Adjust: </span><span id="polymorphScores">' + data.polymorphBase + '</span></p>' : ''}
            <p><span class="previewLabel">Ability Scores: </span><span id="abilityScores">${data.scoreChanges}</span></p>
            <p><span class="previewLabel">Attacks: </span><span id="attacks">${data.attacks}</span></p>
            <p><span class="previewLabel">Special Attacks: </span><span id="specialAttacks">${data.specialAttacks}</span></p>
            <p><span class="previewLabel">Speeds: </span><span id="speeds">${data.speedChanges}</span></p>
            <p><span class="previewLabel">Senses: </span><span id="senses">${data.senses}</span></p>
            <p><span class="previewLabel">Special Abilities: </span><span id="specials">${data.special}</span></p>
            <p><span class="previewLabel">Energy Resistances: </span><span id="eres">${data.eres}</span></p>
            <p><span class="previewLabel">Vulnerabilities: </span><span id="dv">${data.dv}</span></p>
            ${this.level >= 3 ? '<p><span class="previewLabel">Damage Immunities: </span><span id="di">' + data.di + '</span></p>' : ''}
            ${this.level === 4 ? '<p><span class="previewLabel">Damage Resistances: </span><span id="dr">' + data.dr + '</span></p>' : ''}`;

        return newHtml;
    }

    /** @inheritdoc */
    activateListeners(html) {
        super.activateListeners(html);

        // size radio button changed, update the form choices for the new size, then update the preview to the first form in the list
        $('#sizeSelect').on('change', async (event) => {
            await this.updateFormChoices(event, $('#formSelect')[0]);
            $('#changePreview')[0].innerHTML = await this.buildPreviewTemplate($('#formSelect')[0].value);
        });

        // selected form changed, update the preview
        $('#formSelect').on('change', async (event) => {
            $('#changePreview')[0].innerHTML = await this.buildPreviewTemplate($('#formSelect')[0].value);
        });

        // Submit clicked, apply to the actor
        $('#submitButton').on('click', async (event) => await this.applyChanges(event, $('#formSelect')[0].value));
    }
}
