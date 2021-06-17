import { MightyMorphinApp } from './mighty-morphin.js';
import { MorphinChanges } from './morphin-changes.js';
import { MorphinOptions } from './morphin-options.js';

/**
 * Application for selecting a shape from the Plant Shape spell to change into and then applying that shape to an actor
 */
export class MorphinPlantShape extends FormApplication {
    /**
     * @inheritdoc
     * @param {number} level The level of beast shape to use 1 - 4
     * @param {string} actorId The id of the actor that will change shape
     * @param {string} source The source of the beast shape effect
     */
    constructor(level, actorId, source) {
        super();
        this.level = level;
        this.actorId = actorId;
        this.actorSize = game.actors.get(actorId).data.data.traits.size;
        this.sizes = {};
        this.sizes.animal = [];
        this.sizes.magicalBeast = [];
        this.source = source;

        // Add all possible sizes for the given spell level
        switch (level) {
            case 3:
                this.sizes.plant = ['sm', 'med', 'lg', 'huge'];
                break;
            case 2:
                this.sizes.plant = ['sm', 'med', 'lg'];
                break;
            case 1:
                this.sizes.plant = ['sm', 'med'];
                break;
        }

        this.shapeOptions = {};
        // Find options to shapeshift into based on the valid size choices above and sort them alphabetically
        this.shapeOptions.plant = MorphinOptions.plant.filter(o => this.sizes.plant.includes(o.size));
        this.shapeOptions.plant.sort((a, b) => { return a.name > b.name ? 1 : -1; });
    }

    /** @inheritdoc */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ['mightyMorphinDialog'],
            popOut: true,
            template: 'modules/pf1-mighty-morphin/templates/plantShapeDialog.html',
            id: 'mighty-morphin-plantShape',
            title: 'Mighty Morphin Plant Shape',
            resizable: false,
            width: 550
        });
    }

    /** @inheritdoc */
    async getData() {
        const data = {};

        // Set the default size to the largest available plant
        let defaultSize = this.sizes.plant[this.sizes.plant.length - 1];
        data.plantOptions = this.shapeOptions.plant.filter(o => o.size === defaultSize);

        // Create radio button data for plant sizes, set the one for the default size as the default checked button
        data.plantSizes = this.sizes.plant.map(o => { return o === defaultSize ? { label: o, size: CONFIG.PF1.actorSizes[o], default: true } : { label: o, size: CONFIG.PF1.actorSizes[o] }; });

        // Get the plant that will be the first shown in the form dropdown and build the preview of the changes the form will provide
        data.defaultChoice = data.plantOptions[0];
        data.previewHtml = await this.buildPreviewTemplate(data.defaultChoice.name, 'plant');

        return data;
    }

    /**
     * Processes and applies all changes from the passed form to the actor
     * 
     * @param {object} event The clicked button event
     * @param {string} chosenForm The name of the form chosen
     */
    async applyChanges(event, chosenForm) {
        let newSize = MorphinChanges.changes[chosenForm].size;

        let itemsToEmbed = [];
        // Find out if this is the only natural attack the form has
        let oneAttack = MorphinChanges.changes[chosenForm].attacks.length === 1;

        // Loop over the attacks and create the items
        for (let i = 0; i < MorphinChanges.changes[chosenForm].attacks.length; i++) {
            let attack = duplicate(MorphinChanges.changes[chosenForm].attacks[i]);

            // Remove the special if it's no allowed at this level
            if (!!attack.special) {
                for (let j = 0; j < attack.special.length; j++) {
                    const specialElement = attack.special[j];

                    if (!MorphinPlantShape.allowedSpecials[this.level].includes(specialElement)) {
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

                        if (!MorphinPlantShape.allowedSpecials[this.level].includes(specialElement)) {
                            delete (attack.special[i]);
                        }
                    }
                }

                itemsToEmbed.push(MightyMorphinApp.createAttack(this.actorId, newSize, attack, false, MorphinChanges.changes[chosenForm].effect, this.source, 'misc'));
            }
        }

        let shifter = game.actors.get(this.actorId);

        // Add base polymorph size stat changes to the spell's normal changes if necessary
        if (!!this.polymorphChanges.length) this.changes = this.changes.concat(this.polymorphChanges);

        let buff = shifter.items.find(o => o.type === 'buff' && o.name === this.source);
        // If the buff doesn't already exist on the actor, create it
        if (!buff) {
            // Create buff Item template
            let buffData = { data: {} };
            buffData.data = duplicate(game.data.system.template.Item.buff);
            for (let t of buffData.data.templates) {
                mergeObject(buffData.data, duplicate(game.system.template.Item.templates[t]));
            }
            delete buffData.data.templates;

            // Populate needed data
            buffData.name = this.source;
            buffData.type = 'buff';
            buffData.img = (this.source === 'Wild Shape' ? 'systems/pf1/icons/skills/green_21.jpg' : 'systems/pf1/icons/spells/vines-plain-2.jpg');

            itemsToEmbed.push(buffData);
        }

        // Calculate the amount of strength the actor is gaining or losing 
        let strChange = 0;
        for (let i = 0; i < this.changes.length; i++) {
            const change = this.changes[i];

            if (!!change.target && change.target === 'ability' && change.subTarget === 'str') strChange += parseInt(change.formula);
        }

        // Set up adjustments to strength carry bonus and carry multiplier so actor's encumbrance doesn't change
        // Store the current values
        let carryBonusFlag = { 'data.abilities.str.carryBonus': shifter.data.data.abilities.str.carryBonus, 'data.abilities.str.carryMultiplier': shifter.data.data.abilities.str.carryMultiplier };
        // Subtract the buff strength change from current carry bonus, decreasing carry strength if buff adds or increasing carry strength if buff subtracts
        let carryBonusChange = { 'data.abilities.str.carryBonus': (!!shifter.data.data.abilities.str.carryBonus ? shifter.data.data.abilities.str.carryBonus : 0) - strChange };
        // Counteract the size change's natural increase or decrease to carry multiplier
        let carryMult = shifter.data.data.abilities.str.carryMultiplier * CONFIG.PF1.encumbranceMultipliers.normal[this.actorSize] / CONFIG.PF1.encumbranceMultipliers.normal[newSize];
        carryBonusChange = mergeObject(carryBonusChange, { 'data.abilities.str.carryMultiplier': carryMult });

        let armorChangeFlag = [];
        let armorToChange = [];
        // Double armor and shield AC when moving from tiny or below to small or above, halve it if the other way
        let smallSizes = ['fine', 'dim', 'tiny']; // sizes with half armor AC, also use dex for climb and swim instead of str
        let armorChangeNeeded = (smallSizes.includes(newSize) && !smallSizes.includes(this.actorSize)) || (!smallSizes.includes(newSize) && smallSizes.includes(this.actorSize));

        let armorAndShields = shifter.items.filter(o => o.data.type === 'equipment' && (o.data.data.equipmentType === 'armor' || o.data.data.equipmentType === 'shield'));

        for (let item of armorAndShields) {
            let armorIsWild = item.name.includes('Wild');
            let originalArmor = armorChangeNeeded ? { armor: { value: item.data.data.armor.value } } : {};
            let originalEquipped = (armorIsWild && this.source === 'Wild Shape') ? {} : { equipped: item.data.data.equipped };
            originalArmor = mergeObject(originalArmor, originalEquipped);

            if (!!originalArmor) {
                armorChangeFlag.push({ _id: item.id, data: originalArmor });
                // take off armor if it's not wild armor or this is not plant shape from wild shape
                let equipChange = (armorIsWild && this.source === 'Wild Shape') ? {} : { equipped: false };
                let armorChange = armorChangeNeeded ? (smallSizes.includes(this.actorSize) ? { armor: { value: item.data.data.armor.value * 2 } } : { armor: { value: Math.floor(item.data.data.armor.value / 2) } }) : {};
                equipChange = mergeObject(equipChange, armorChange);
                armorToChange.push({ _id: item.id, data: equipChange });
            }
        }

        // change ability mods for climb and swim to str if moving from tiny or below to small or above, change to dex if moving the other way
        let originalSkillMod = {};
        let skillModChange = {};
        if (armorChangeNeeded) {
            originalSkillMod = { 'data.skills.clm.ability': shifter.data.data.skills.clm.ability, 'data.skills.swm.ability': shifter.data.data.skills.swm.ability };
            skillModChange = { 'data.skills.clm.ability': (smallSizes.includes(this.actorSize) ? 'str' : 'dex'), 'data.skills.swm.ability': (smallSizes.includes(this.actorSize) ? 'str' : 'dex') };
        }

        // Process speed changes
        let originalSpeed = { 'data.attributes.speed': shifter.data.data.attributes.speed };
        let newSpeeds = duplicate(shifter.data.data.attributes.speed);
        let speedTypes = Object.keys(newSpeeds);
        for (let i = 0; i < speedTypes.length; i++) {
            // Find the speed the form gives for the type
            let speed = this.speeds[speedTypes[i]];
            if (!!speed) { // if the form has this speed add it
                newSpeeds[speedTypes[i]].base = speed;
                if (speedTypes[i] === 'fly') newSpeeds['fly'].maneuverability = this.level === 1 ? 'average' : 'good';
            }
            else { // if the form doesn't have the speed, the shifter doesn't get it
                newSpeeds[speedTypes[i]].base = 0;
            }
        }
        let speedChanges = { 'data.attributes.speed': newSpeeds };

        // Process senses changes
        let originalSenses = { 'data.traits.senses': shifter.data.data.traits.senses };
        let sensesString = '';
        for (let i = 0; i < this.senses.length; i++) {
            const sensesEnumValue = this.senses[i];
            if (sensesString.length > 0) sensesString += '; ';
            sensesString += `${MorphinChanges.SENSES[Object.keys(MorphinChanges.SENSES)[sensesEnumValue - 1]].name}`; // element 1 = SENSES[0] = LOWLIGHT
        }
        let sensesChanges = { 'data.traits.senses': sensesString };

        // Process resistances changes
        let originalEres = { 'data.traits.eres': shifter.data.data.traits.eres };
        let eresString = this.eres || '';

        // Process vulnerabilities changes
        let originalDv = { 'data.traits.dv': shifter.data.data.traits.dv };
        let newDv = { value: [], custom: '' };
        if (!!this.dv) {
            for (let i = 0; i < this.dv.length; i++) {
                const element = this.dv[i];

                if (!!CONFIG.PF1.damageTypes[element]) newDv.value.push(element);
                else newDv.custom += (newDv.custom.length > 0 ? '; ' : '') + element;
            }
        }

        // Process DR changes
        let originalDr = { 'data.traits.dr': shifter.data.data.traits.dr };
        let drString = this.dr || '';

        // Process regen changes
        let originalRegen = { 'data.traits.regen': shifter.data.data.traits.regen };
        let regenString = this.regen || '';

        originalSenses = mergeObject(originalSenses, originalDv);
        sensesChanges = mergeObject(sensesChanges, { 'data.traits.dv': newDv });

        if (this.level >= 2) {
            originalSenses = mergeObject(originalSenses, originalEres);
            sensesChanges = mergeObject(sensesChanges, { 'data.traits.eres': eresString });
        }

        if (this.level === 3) {
            originalSenses = mergeObject(originalSenses, originalDr);
            sensesChanges = mergeObject(sensesChanges, { 'data.traits.dr': drString });
            originalSenses = mergeObject(originalSenses, originalRegen);
            sensesChanges = mergeObject(sensesChanges, { 'data.traits.regen': regenString });
        }

        // Create special ability features
        if (!!this.special) {
            // create blank template for misc feature
            let specialData = { data: {} };
            specialData.data = duplicate(game.data.system.template.Item.feat);
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
            let token = canvas.tokens.ownedTokens.find(o => o.data.actorId === this.actorId);
            if (!!token) {
                oldImage.img = token.data.img;
                await token.update({ 'img': newImage });
            }
            oldProtoImage.token.img = shifter.data.token.img;
        }

        // Create the items on the actor, then create an array of their ids to delete them later
        let itemsCreated = await shifter.createEmbeddedDocuments('Item', itemsToEmbed);
        itemsCreated = itemsCreated.map(o => o.id);

        // Turn on the buff created
        buff = shifter.items.find(o => o.type === 'buff' && o.name === this.source);
        let buffUpdate = [{ _id: buff.id, 'data.changes': this.changes, 'data.active': true }];

        // Set the flags for all changes made
        let dataFlag = mergeObject({ 'data.traits.size': this.actorSize }, mergeObject(carryBonusFlag, mergeObject(originalSkillMod, mergeObject(originalSpeed, originalSenses))));
        if (!!newImage) { dataFlag = mergeObject(dataFlag, oldProtoImage); };
        let flags = { source: 'Beast Shape', buffName: this.source, data: dataFlag, armor: armorChangeFlag, itemsCreated: itemsCreated };
        if (!!newImage) { flags = mergeObject(flags, { tokenImg: oldImage }); };
        await shifter.update(mergeObject({ 'data.traits.size': newSize, 'flags.mightyMorphin': flags }, mergeObject(carryBonusChange, mergeObject(skillModChange, mergeObject(speedChanges, mergeObject(sensesChanges, protoImageChange))))));

        // update items on the actor
        if (!!armorToChange.length) await shifter.updateEmbeddedDocuments('Item', armorToChange.concat(buffUpdate));
        else await shifter.updateEmbeddedDocuments('Item', buffUpdate);

        await this.close();
    }

    /**
     * Updates the options in the formSelect select input based on the type radio and the size clicked by the user in the event
     * 
     * @param {object} event listener event from sizeSelect radio buttons
     * @param {object} formSelect The select html object
     */
    async updateFormChoices(event, formSelect) {
        let newOptions = this.shapeOptions.plant.filter(o => o.size === event.target.value);

        let newHtml = newOptions.map(o => `<option value="${o.name}">${o.name}</option>`);
        formSelect.innerHTML = newHtml;
    }

    /**
     * Processes the changes from the selected plant form into a readable preview display html. In the process it validates the changes based on the level of the spell
     * 
     * @param {string} chosenForm The name of the form chosen in the dropdown
     * @returns {string} HTML containing preview of all the changes to be made to the actor
     */
    async buildPreviewTemplate(chosenForm) {
        let data = {};
        this.chosenForm = this.shapeOptions.plant.find(o => o.name === chosenForm);

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
        this.changes = MorphinChanges.changes.plantShape.plant[this.chosenForm.size].changes;
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

            if (data.speedChanges.length > 1) data.speedChanges += ', ';
            data.speedChanges += `${element} ${this.speeds[element]} ft`;
        }

        // Process the natural attacks
        data.attacks = '';
        let attackList = MorphinChanges.changes[this.chosenForm.name].attacks;
        for (let i = 0; i < attackList.length; i++) {
            const element = attackList[i];

            let attackSpecial = '';
            if (!!element.special) { // process any specials associated with the attack
                for (let j = 0; j < element.special.length; j++) {
                    const specialName = element.special[j];
                    if (MorphinPlantShape.allowedSpecials[this.level].includes(specialName)) {
                        if (attackSpecial.length > 0) attackSpecial += ', ';
                        attackSpecial += specialName;
                    }
                }
            }

            let damageDice = element.diceSize === 0 ? '' : `${element.diceCount}d${element.diceSize}`;
            if (element.nonCrit) damageDice += (!!damageDice.length ? ' plus ' : '') + `${element.nonCrit[0]} ${element.nonCrit[1]}`;
            if (data.attacks.length > 0) data.attacks += ', ';
            data.attacks += `${element.count > 1 ? element.count + ' ' : ''}${element.name} (${!!damageDice ? damageDice : '0'}${!!attackSpecial ? ' plus ' + attackSpecial : ''})`;
        }

        // Process special attacks
        data.specialAttacks = '';
        let specialAttackList = MorphinChanges.changes[this.chosenForm.name].specialAttack || [];
        for (let i = 0; i < specialAttackList.length; i++) {
            const element = specialAttackList[i];

            // Make sure the special attack is allowed at this level of spell before processing it
            let valid = true;
            for (let j = 0; j < (element.special?.length || 0); j++) {
                const special = element.special[j];

                if (!MorphinPlantShape.allowedSpecials[this.level].includes(special)) valid = false;
            }

            if (valid) {
                let attackSpecial = '';
                if (!!element.special) {
                    for (let j = 0; j < element.special.length; j++) {
                        const specialName = element.special[j];
                        if (MorphinPlantShape.allowedSpecials[this.level].includes(specialName)) {
                            if (attackSpecial.length > 0) attackSpecial += ', ';
                            attackSpecial += specialName;
                        }
                    }
                }

                let damageDice = element.diceSize === 0 ? '' : `${element.diceCount}d${element.diceSize}`;
                if (element.nonCrit) damageDice += (!!damageDice.length ? ' plus ' : '') + `${element.nonCrit[0]} ${element.nonCrit[1]}`;
                if (data.specialAttacks.length > 0) data.specialAttacks += ', ';
                data.specialAttacks += `${element.count > 1 ? element.count + ' ' : ''}${element.name} (${!!damageDice ? damageDice : '0'}${!!attackSpecial ? ' plus ' + attackSpecial : ''})`;
            }
        }
        if (!data.specialAttacks.length) data.specialAttacks = 'None';

        // Process changes in senses limited by the spell level
        this.senses = duplicate(MorphinChanges.changes[this.chosenForm.name].senses);
        data.senses = !!this.senses.length ? '' : 'None';
        for (let i = 0; i < this.senses.length; i++) {
            const element = this.senses[i];

            if (data.senses.length > 0) data.senses += ', ';
            data.senses += `${MorphinChanges.SENSES[Object.keys(MorphinChanges.SENSES)[element - 1]].name}`; // element 1 = SENSES[0] = LOWLIGHT
        }

        // Process special qualities
        data.special = 'None';
        this.special = !!MorphinChanges.changes[this.chosenForm.name].special ? duplicate(MorphinChanges.changes[this.chosenForm.name].special) : [];
        for (let i = 0; i < this.special.length; i++) {
            const specialName = this.special[i];

            // Check just the first word of the special text, so something like 'jet 200ft' matches 'jet'
            if (!MorphinPlantShape.allowedSpecials[this.level].includes(specialName.split(' ')[0])) {
                delete (this.special[i]);
                continue;
            }
            else {
                if (data.special === 'None') data.special = '';
                if (data.special.length > 0) data.special += ', ';
                data.special += specialName;
            }
        }

        data.dv = MorphinChanges.changes[this.chosenForm.name].dv?.join(', ') || 'None';
        this.dv = MorphinChanges.changes[this.chosenForm.name].dv || [];

        if (this.level >= 2) {
            data.eres = MorphinChanges.changes[this.chosenForm.name].eres?.join(', ') || 'None';
            this.eres = MorphinChanges.changes[this.chosenForm.name].eres?.join('; ') || '';
        }

        if (this.level === 3) {
            data.dr = MorphinChanges.changes[this.chosenForm.name].dr?.join(', ') || 'None';
            this.dr = MorphinChanges.changes[this.chosenForm.name].dr?.join('; ') || '';
            data.regen = MorphinChanges.changes[this.chosenForm.name].regen?.join(', ') || 'None';
            this.regen = MorphinChanges.changes[this.chosenForm.name].regen?.join('; ') || '';
        }

        // Build the html preview
        let newHtml = `${!!data.polymorphBase ? '<p><span class="previewLabel">Base Size Adjust: </span><span id="polymorphScores">' + data.polymorphBase + '</span></p>' : ''}
        <p><span class="previewLabel">Ability Scores: </span><span id="abilityScores">${data.scoreChanges}</span></p>
        <p><span class="previewLabel">Attacks: </span><span id="attacks">${data.attacks}</span></p>
        <p><span class="previewLabel">Special Attacks: </span><span id="specialAttacks">${data.specialAttacks}</span></p>
        <p><span class="previewLabel">Speeds: </span><span id="speeds">${data.speedChanges}</span></p>
        <p><span class="previewLabel">Senses: </span><span id="senses">${data.senses}</span></p>
        <p><span class="previewLabel">Special Abilities: </span><span id="specials">${data.special}</span></p>
        <p><span class="previewLabel">Vulnerabilities: </span><span id="dv">${data.dv}</span></p>
        ${this.level >= 2 ? '<p><span class="previewLabel">Energy Resistances: </span><span id="di">' + data.eres + '</span></p>' : ''}
        ${this.level === 3 ? '<p><span class="previewLabel">Damage Resistances: </span><span id="dr">' + data.dr + '</span></p>' : ''}
        ${this.level === 3 ? '<p><span class="previewLabel">Regeneration: </span><span id="dr">' + data.regen + '</span></p>' : ''}`;

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

// The allowed special properties and attacks for plant shape I-III
MorphinPlantShape.allowedSpecials = {
    '1': ['Touch', 'Constrict', 'Grab', 'Poison'],
    '2': ['Touch', 'Constrict', 'Grab', 'Poison'],
    '3': ['Touch', 'Constrict', 'Grab', 'Poison', 'Trample']
};