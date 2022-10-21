import { MightyMorphinApp } from './mighty-morphin.js';
import { MorphinChanges } from './morphin-changes.js';
import { MorphinOptions } from './morphin-options.js';
import { MorphinPolymorphDialog } from './morphin-polymorph-dialog.js';

/**
 * Application for selecting a shape from the Beast Shape spell to change into and then applying that shape to an actor
 */
export class MorphinBeastShape extends MorphinPolymorphDialog {
    /**
     * @inheritdoc
     * @param {number} level The level of beast shape to use 1 - 4
     * @param {string} actorId The id of the actor that will change shape
     * @param {string} source The source of the beast shape effect
     */
    constructor(level, actorId, source) {
        super(level, actorId, source);

        // Add all possible sizes for the given spell level
        switch (level) {
            case 4:
                this.sizes.magicalBeast = ['tiny', 'sm', 'med', 'lg'];
                this.sizes.animal = ['dim', 'tiny', 'sm', 'med', 'lg', 'huge'];
                break;
            case 3:
                this.sizes.magicalBeast = ['sm', 'med'];
                this.sizes.animal = ['dim', 'tiny', 'sm', 'med', 'lg', 'huge'];
                break;
            case 2:
                this.sizes.magicalBeast = [];
                this.sizes.animal = ['tiny', 'sm', 'med', 'lg'];
                break;
            case 1:
                this.sizes.magicalBeast = [];
                this.sizes.animal = ['sm', 'med'];
                break;
        }

        // Find options to shapeshift into based on the valid size choices above and sort them alphabetically
        this.shapeOptions.animal = MorphinOptions.animal.filter(o => this.sizes.animal.includes(o.size));
        this.shapeOptions.animal.sort((a, b) => { return a.name > b.name ? 1 : -1; });
        this.shapeOptions.magicalBeast = MorphinOptions.magicalBeast.filter(o => this.sizes.magicalBeast.includes(o.size));
        this.shapeOptions.magicalBeast.sort((a, b) => { return a.name > b.name ? 1 : -1; });
    }

    /** @inheritdoc */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ['mightyMorphinDialog'],
            popOut: true,
            template: 'modules/pf1-mighty-morphin/templates/beastShapeDialog.html',
            id: 'mighty-morphin-beastShape',
            title: 'Mighty Morphin Beast Shape',
            resizable: false,
            width: 550
        });
    }

    /** @inheritdoc */
    async getData() {
        const data = {};

        // Set the default size to the largest available animal (default type)
        let defaultSize = this.sizes.animal[this.sizes.animal.length - 1];
        data.animalOptions = this.shapeOptions.animal.filter(o => o.size === defaultSize);

        // Create radio button data for animal sizes, set the one for the default size as the default checked button
        data.animalSizes = this.sizes.animal.map(o => { return o === defaultSize ? { label: o, size: CONFIG.PF1.actorSizes[o], default: true } : { label: o, size: CONFIG.PF1.actorSizes[o] }; });
        data.mBeastSizes = this.sizes.magicalBeast;

        // Get the animal that will be the first shown in the form dropdown and build the preview of the changes the form will provide
        data.defaultChoice = data.animalOptions[0];
        data.previewHtml = await this.buildPreviewTemplate(data.defaultChoice.name, 'animal');

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
        const amuletItem = shifter.items.find(o => o.name.toLowerCase().includes('amulet of mighty fists') && o.system.equipped);
        let bonusSearch = /\+(\d+)/.exec(amuletItem?.name);
        let amuletBonus = !!bonusSearch ? bonusSearch[1] : null;
        for (let i = 0; i < MorphinChanges.changes[chosenForm].attacks.length; i++) {
            let attack = duplicate(MorphinChanges.changes[chosenForm].attacks[i]); // get the attack data
            attack.enh = parseInt(amuletBonus);
            // Remove any special property if it's no allowed at this level
            if (!!attack.special) {
                for (let j = 0; j < attack.special.length; j++) {
                    const specialElement = attack.special[j];

                    if (!MorphinBeastShape.allowedSpecials[this.level].includes(specialElement)) {
                        delete (attack.special[i]);
                    }
                }
            }

            itemsToEmbed.push(MightyMorphinApp.createAttack(this.actorId, newSize, attack, oneAttack, MorphinChanges.changes[chosenForm].effect, this.source, 'natural'));
        }

        // Loop over special attacks and create the items
        if (!!MorphinChanges.changes[chosenForm].specialAttack) {
            for (let i = 0; i < MorphinChanges.changes[chosenForm].specialAttack.length; i++) {
                let attack = duplicate(MorphinChanges.changes[chosenForm].specialAttack[i]);

                // Remove any special property if it's no allowed at this level
                if (!!attack.special) {
                    for (let j = 0; j < attack.special.length; j++) {
                        const specialElement = attack.special[j];

                        if (!MorphinBeastShape.allowedSpecials[this.level].includes(specialElement)) {
                            delete (attack.special[i]);
                        }
                    }
                }

                itemsToEmbed.push(MightyMorphinApp.createAttack(this.actorId, newSize, attack, false, MorphinChanges.changes[chosenForm].effect, this.source, 'misc'));
            }
        }

        // Add base polymorph size stat changes to the spell's normal changes if necessary
        if (!!this.polymorphChanges.length) this.changes = this.changes.concat(this.polymorphChanges);

        let buff = shifter.items.find(o => o.type === 'buff' && o.name === this.source);
        // If the buff doesn't already exist on the actor, create it
        if (!buff) {
            // Create buff Item template
            let buffData = { system: {} };
            buffData.system = duplicate(game.system.template.Item.buff);
            for (let t of buffData.system.templates) {
                mergeObject(buffData.system, duplicate(game.system.template.Item.templates[t]));
            }
            delete buffData.system.templates;

            // Populate needed data
            buffData.name = this.source;
            buffData.type = 'buff';
            buffData.img = (this.source === 'Wild Shape' ? 'systems/pf1/icons/skills/green_21.jpg' : 'systems/pf1/icons/spells/wild-jade-3.jpg');

            itemsToEmbed.push(buffData);
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

        let armorAndShields = shifter.items.filter(o => o.type === 'equipment' && (o.system.equipmentType === 'armor' || o.system.equipmentType === 'shield'));

        // Cycle through all armor and shield items to process them
        for (let item of armorAndShields) {
            let originalArmor = armorChangeNeeded ? { armor: { value: item.system.armor.value } } : {};
            // If this is not Wild Shape or it is Wild Shape but the armor isn't Wild enchanted, armor must be removed
            let armorIsWild = item.name.includes('Wild');
            let originalEquipped = (armorIsWild && this.source === 'Wild Shape') ? {} : { equipped: item.system.equipped };
            originalArmor = mergeObject(originalArmor, originalEquipped);

            if (!!originalArmor) {
                armorChangeFlag.push({ _id: item.id, data: originalArmor });
                // take off armor if it's not wild armor or this is not beast shape from wild shape
                let equipChange = (armorIsWild && this.source === 'Wild Shape') ? {} : { equipped: false };
                let armorChange = armorChangeNeeded ? (smallSizes.includes(this.actorSize) ? { armor: { value: item.system.armor.value * 2 } } : { armor: { value: Math.floor(item.system.armor.value / 2) } }) : {};
                equipChange = mergeObject(equipChange, armorChange);
                armorToChange.push({ _id: item.id, data: equipChange });
            }
        }

        // change ability mods for climb and swim to str if moving from tiny or below to small or above, change to dex if moving the other way
        let originalSkillMod = {};
        let skillModChange = {};
        if (armorChangeNeeded) {
            originalSkillMod = { 'system.skills.clm.ability': shifter.system.skills.clm.ability, 'system.skills.swm.ability': shifter.system.skills.swm.ability };
            skillModChange = { 'system.skills.clm.ability': (smallSizes.includes(this.actorSize) ? 'str' : 'dex'), 'system.skills.swm.ability': (smallSizes.includes(this.actorSize) ? 'str' : 'dex') };
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
        let originalSenses = { 'system.traits.senses': shifter.system.traits.senses };
        let senseObject = { 'dv': 0, 'ts': 0, 'bs': 0, 'bse': 0, 'll': { 'enabled': false, 'multiplier': { 'dim': 2, 'bright': 2 } }, 'sid': false, 'tr': false, 'si': false, 'sc': false, 'custom': '' };
        for (let i = 0; i < this.senses.length; i++) {
            const sensesEnumValue = this.senses[i];
            if (!!sensesEnumValue) {
                senseObject = mergeObject(senseObject, MorphinChanges.SENSES[Object.keys(MorphinChanges.SENSES)[sensesEnumValue - 1]].setting); // element 1 = SENSES[0] = LOWLIGHT
            }
        }
        let sensesChanges = { 'system.traits.senses': senseObject };

        // Process resistances changes
        let originalEres = { 'system.traits.eres': shifter.system.traits.eres };
        let eresString = this.eres || '';

        // Process vulnerabilities changes
        let originalDv = { 'system.traits.dv': shifter.system.traits.dv };
        let newDv = { value: [], custom: '' };
        if (!!this.dv) {
            for (let i = 0; i < this.dv.length; i++) {
                const vulnerability = this.dv[i];

                // If it's a system known damage type, can toggle its setting. Otherwise add it as a custom
                if (!!CONFIG.PF1.damageTypes[vulnerability]) newDv.value.push(vulnerability);
                else newDv.custom += (newDv.custom.length > 0 ? '; ' : '') + vulnerability;
            }
        }

        // Energy resistances and vulnerabilities are only on beast shape iv
        if (this.level === 4) {
            originalSenses = mergeObject(originalSenses, mergeObject(originalEres, originalDv));
            sensesChanges = mergeObject(sensesChanges, mergeObject({ 'system.traits.eres': eresString }, { 'system.traits.dv': newDv }));
        }

        // Create special ability features
        if (!!this.special) {
            // create blank template for misc feature
            let specialData = { system: {} };
            specialData.system = duplicate(game.system.template.Item.feat);
            for (let t of specialData.system.templates) {
                mergeObject(specialData.system, duplicate(game.system.template.Item.templates[t]));
            }
            delete specialData.system.templates;
            specialData.type = 'feat';
            specialData.system.featType = 'misc';

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
        let oldImage = { texture: { src: '' } };
        let oldProtoImage = { prototypeToken: { texture: { src: '' } } };
        let protoImageChange = !!newImage ? { 'token.texture.src': newImage } : {};
        if (!!newImage) {
            let token = canvas.tokens.ownedTokens.find(o => o.actor.id === this.actorId);
            if (!!token) {
                oldImage.texture.src = token.document.texture.src;
                await token.document.update({ 'texture.src': newImage });
            }
            oldProtoImage.prototypeToken.texture.src = shifter.prototypeToken.texture.src;
        }

        // Create the items on the actor, then create an array of their ids to delete them later
        let itemsCreated = await shifter.createEmbeddedDocuments('Item', itemsToEmbed);
        itemsCreated = itemsCreated.map(o => o.id);

        // Turn on the buff created
        buff = shifter.items.find(o => o.type === 'buff' && o.name === this.source);
        let buffUpdate = [{ _id: buff.id, 'system.changes': this.changes, 'system.active': true }];

        // Set the flags for all changes made
        let systemFlag = mergeObject({ 'system.traits.size': this.actorSize }, mergeObject(originalSkillMod, mergeObject(originalManeuverability, originalSenses)));
        if (!!newImage) { systemFlag = mergeObject(systemFlag, oldProtoImage); };
        let flags = { source: this.source, buffName: this.source, system: systemFlag.system, armor: armorChangeFlag, itemsCreated: itemsCreated };
        if (!!newImage) { flags = mergeObject(flags, { tokenImg: oldImage }); };
        await shifter.update(mergeObject({ 'system.traits.size': newSize, 'flags.mightyMorphin': flags }, mergeObject(skillModChange, mergeObject(maneuverabilityChange, mergeObject(sensesChanges, protoImageChange)))));

        // update items on the actor
        if (!!armorToChange.length) await shifter.updateEmbeddedDocuments('Item', armorToChange.concat(buffUpdate));
        else await shifter.updateEmbeddedDocuments('Item', buffUpdate);
        
        canvas.tokens.releaseAll();
        canvas.tokens.ownedTokens.find(o => o.actor.id === this.actorId).control();
        
        await this.close();
    }

    /**
     * Updates the options in the formSelect select input based on the type radio and the size clicked by the user in the event
     * 
     * @param {object} event listener event from sizeSelect radio buttons
     * @param {object} formSelect The select html object
     * @param {string} typeSelect Selected form type (animal or magical beast)
     */
    async updateFormChoices(event, formSelect, typeSelect) {
        let newOptions = this.shapeOptions[typeSelect].filter(o => o.size === event.target.value);

        let newHtml = newOptions.map(o => `<option value="${o.name}">${o.name}</option>`);
        formSelect.innerHTML = newHtml;
    }

    /**
     * Updates the radio buttons for size selection based on the available sizes for the form selected by user in the event
     * 
     * @param {object} event listener event from typeSelect radio button
     * @param {object} sizeSelectDiv The div containing the sizeSelect radio buttons
     */
    async updateSizeChoices(event, sizeSelectDiv) {
        // create options for the selected type, set medium as the default size
        let newOptions = this.sizes[event.target.value].map(o => { return o === 'med' ? { label: o, size: CONFIG.PF1.actorSizes[o], default: true } : { label: o, size: CONFIG.PF1.actorSizes[o] }; });

        let newOptionsHtml = `<legend>Select ${event.target.value === 'animal' ? 'Animal' : 'Magical Beast'} Size</legend>`;

        // Create the radio buttons html
        for (let i = 0; i < newOptions.length; i++) {
            const element = newOptions[i];
            newOptionsHtml += `<input type="radio" name="sizeSelect" id="${element.size}Select" value="${element.label}" ${element.default ? 'checked' : ''}><label for="${element.size}Select">${element.size}</label>`;
        }

        // Replace the html
        sizeSelectDiv.innerHTML = newOptionsHtml;
    }

    /**
     * Processes the changes from the selected beast form into a readable preview display html. In the process it validates the changes based on the level of the spell
     * 
     * @param {string} chosenForm The name of the form chosen in the dropdown
     * @param {string} chosenType The type of creature (animal or magical beast)
     * @returns {string} HTML containing preview of all the changes to be made to the actor
     */
    async buildPreviewTemplate(chosenForm, chosenType) {
        let data = {};
        this.chosenForm = this.shapeOptions[chosenType].find(o => o.name === chosenForm);

        // Process stat changes for polymorphing smaller than small or larger than medium
        data.polymorphBase = '';
        this.polymorphChanges = MorphinChanges.changes.polymorphSize[this.actorSize] || {};
        if (!!this.polymorphChanges) {
            for (let i = 0; i < this.polymorphChanges.length; i++) {
                const change = this.polymorphChanges[i];
                if (!!change.target && change.target === 'ability') {
                    if (data.polymorphBase.length > 0) data.polymorphBase += ', '; // comma between entries
                    // text output of the stat (capitalized), and a + in front of positive numbers
                    data.polymorphBase += `${change.subTarget.charAt(0).toUpperCase()}${change.subTarget.slice(1)} ${(change.value > 0 ? '+' : '')}${change.value}`;
                }
            }
        }

        // Process stat changes from the spell based on spell level
        data.scoreChanges = '';
        this.changes = MorphinChanges.changes.beastShape[chosenType][this.chosenForm.size].changes;
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
            const speedName = Object.keys(this.speeds)[i];

            if (speedName === 'swim') {
                switch (this.level) {
                    case 1:
                        this.speeds[speedName] = Math.min(30, this.speeds[speedName]);
                        break;
                    case 2:
                        this.speeds[speedName] = Math.min(60, this.speeds[speedName]);
                        break;
                    case 3:
                        this.speeds[speedName] = Math.min(90, this.speeds[speedName]);
                        break;
                    case 4:
                        this.speeds[speedName] = Math.min(120, this.speeds[speedName]);
                        break;
                }
            }

            if (speedName === 'fly') {
                switch (this.level) {
                    case 1:
                        this.speeds[speedName] = Math.min(30, this.speeds[speedName]);
                        break;
                    case 2:
                        this.speeds[speedName] = Math.min(60, this.speeds[speedName]);
                        break;
                    case 3:
                        this.speeds[speedName] = Math.min(90, this.speeds[speedName]);
                        break;
                    case 4:
                        this.speeds[speedName] = Math.min(120, this.speeds[speedName]);
                        break;
                }
            }

            if (speedName === 'climb') {
                switch (this.level) {
                    case 1:
                        this.speeds[speedName] = Math.min(30, this.speeds[speedName]);
                        break;
                    case 2:
                        this.speeds[speedName] = Math.min(60, this.speeds[speedName]);
                        break;
                    case 3:
                    case 4:
                        this.speeds[speedName] = Math.min(90, this.speeds[speedName]);
                        break;
                }
            }

            if (speedName === 'burrow') {
                switch (this.level) {
                    case 1:
                    case 2:
                        delete (this.speeds[speedName]);
                        i--;
                        continue; // skip this speed
                    case 3:
                        this.speeds[speedName] = Math.min(30, this.speeds[speedName]);
                        break;
                    case 4:
                        this.speeds[speedName] = Math.min(60, this.speeds[speedName]);
                        break;
                }
            }

            if (data.speedChanges.length > 1) data.speedChanges += ', ';
            data.speedChanges += `${speedName} ${this.speeds[speedName]} ft`;
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
                    if (MorphinBeastShape.allowedSpecials[this.level].includes(specialName)) { // ignore specials the spell doesn't allow
                        if (attackSpecial.length > 0) attackSpecial += ', ';
                        attackSpecial += specialName;
                    }
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

            // Make sure the special attack is allowed at this level of spell before processing it
            let valid = true;
            for (let j = 0; j < (specialAttack.special?.length || 0); j++) {
                const special = specialAttack.special[j];

                if (!MorphinBeastShape.allowedSpecials[this.level].includes(special)) valid = false;
            }

            if (valid) {
                let attackSpecial = '';
                if (!!specialAttack.special) {
                    for (let j = 0; j < specialAttack.special.length; j++) {
                        const specialName = specialAttack.special[j];
                        if (MorphinBeastShape.allowedSpecials[this.level].includes(specialName)) {
                            if (attackSpecial.length > 0) attackSpecial += ', ';
                            attackSpecial += specialName;
                        }
                    }
                }

                let damageDice = specialAttack.diceSize === 0 ? '' : `${specialAttack.diceCount}d${specialAttack.diceSize}`;
                if (specialAttack.nonCrit) damageDice += (!!damageDice.length ? ' plus ' : '') + `${specialAttack.nonCrit[0]} ${specialAttack.nonCrit[1]}`;
                if (data.specialAttacks.length > 0) data.specialAttacks += ', ';
                data.specialAttacks += `${specialAttack.count > 1 ? specialAttack.count + ' ' : ''}${specialAttack.name} (${!!damageDice ? damageDice : '0'}${!!attackSpecial ? ' plus ' + attackSpecial : ''})`;
            }
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
                data.senses += `${MorphinChanges.SENSES[Object.keys(MorphinChanges.SENSES)[senseEnumValue - 1]].name}`; // enum value 1 = SENSES[0] = LOWLIGHT
            }
        }
        if (!data.senses.length) data.senses = 'None';

        // Process special qualities
        data.special = 'None';
        this.special = !!MorphinChanges.changes[this.chosenForm.name].special ? duplicate(MorphinChanges.changes[this.chosenForm.name].special) : [];
        for (let i = 0; i < this.special.length; i++) {
            const specialName = this.special[i];

            // Check just the first word of the special text, so something like 'jet 200ft' matches 'jet'
            if (!MorphinBeastShape.allowedSpecials[this.level].includes(specialName.split(' ')[0])) {
                delete (this.special[i]);
                continue;
            }
            else {
                if (data.special === 'None') data.special = '';
                if (data.special.length > 0) data.special += ', ';
                data.special += specialName;
            }
        }

        // Process energy resistances and vulnerabilities if beast shape iv
        if (this.level === 4) {
            data.eres = MorphinChanges.changes[this.chosenForm.name].eres?.join(', ') || 'None';
            this.eres = MorphinChanges.changes[this.chosenForm.name].eres?.join('; ') || '';
            data.dv = MorphinChanges.changes[this.chosenForm.name].dv?.join(', ') || 'None';
            this.dv = MorphinChanges.changes[this.chosenForm.name].dv || [];
        }

        // Build the html preview
        let newHtml = `${!!data.polymorphBase ? '<p><span class="previewLabel">Base Size Adjust: </span><span id="polymorphScores">' + data.polymorphBase + '</span></p>' : ''}
            <p><span class="previewLabel">Ability Scores: </span><span id="abilityScores">${data.scoreChanges}</span></p>
            <p><span class="previewLabel">Attacks: </span><span id="attacks">${data.attacks}</span></p>
            <p><span class="previewLabel">Special Attacks: </span><span id="specialAttacks">${data.specialAttacks}</span></p>
            <p><span class="previewLabel">Speeds: </span><span id="speeds">${data.speedChanges}</span></p>
            <p><span class="previewLabel">Senses: </span><span id="senses">${data.senses}</span></p>
            <p><span class="previewLabel">Special Abilities: </span><span id="specials">${data.special}</span></p>
            ${this.level === 4 ? '<p><span class="previewLabel">Energy Resistances: </span><span id="eres">' + data.eres + '</span></p>' +
                '<p><span class="previewLabel">Vulnerabilities: </span><span id="dv">' + data.dv + '</span></p>' : ''}`;

        return newHtml;
    }

    /** @inheritdoc */
    activateListeners(html) {
        super.activateListeners(html);
    }
}

// The allowed special properties and attacks for beast shape I-IV
MorphinBeastShape.allowedSpecials = {
    '1': ['Touch'],
    '2': ['Touch', 'Grab', 'Pounce', 'Trip'],
    '3': ['Touch', 'Grab', 'Pounce', 'Trip', 'Constrict', 'Ferocity', 'Jet', 'Poison', 'Rake', 'Trample', 'Web'],
    '4': ['Touch', 'Grab', 'Pounce', 'Trip', 'Constrict', 'Ferocity', 'Jet', 'Poison', 'Rake', 'Trample', 'Web', 'Breath Weapon', 'Rend', 'Roar', 'Spikes']
};
