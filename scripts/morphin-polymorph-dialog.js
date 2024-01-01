import { MightyMorphinApp } from './mighty-morphin.js';
import { MorphinChanges } from './morphin-changes.js';
import { MorphinOptions } from './morphin-options.js';

/**
 * Application shared function with all polymorph effect dialogs
 */
export class MorphinPolymorphDialog extends FormApplication {
    /**
     * @inheritdoc
     * @param {number} level The level of shape spell to use 1 - 4
     * @param {string} actorId The id of the actor that will change shape
     * @param {string} source The source of the polymorph effect
     */
    constructor(level, durationLevel, actorId, source) {
        super();
        this.level = level;
        this.durationLevel = durationLevel;
        this.actorId = actorId;
        this.actorSize = fromUuidSync(actorId).system.traits.size;
        this.sizes = {};
        this.source = source;
        this.shapeOptions = {};
    }

    /** @inheritdoc */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ['mightyMorphinDialog'],
            popOut: true,
            resizable: false,
            width: 550
        });
    }

    /** @inheritdoc */
    async getData() {
    }

    /**
     * Processes and applies all changes from the passed form to the actor
     * 
     * @param {object} event The clicked button event
     * @param {string} chosenForm The name of the form chosen
     */
    async applyChanges(event, chosenForm) {
        let shifter = fromUuidSync(this.actorId);
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

                    if (!MorphinChanges.allowedSpecials[this.spell][this.level].includes(specialElement)) {
                        delete (attack.special[i]);
                    }
                }
            }

            // console.log(MightyMorphinApp.createAttack(this.actorId, newSize, attack, oneAttack, MorphinChanges.changes[chosenForm].effect, this.source, 'natural'));
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
                        // console.log(this.source, this.level, MorphinChanges.allowedSpecials[this.source]);
                        if (!MorphinChanges.allowedSpecials[this.spell][this.level].includes(specialElement)) {
                            delete (attack.special[i]);
                        }
                    }
                }

                // console.log(MightyMorphinApp.createAttack(this.actorId, newSize, attack, false, MorphinChanges.changes[chosenForm].effect, this.source, 'misc'));
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
            buffData.img = MorphinChanges.buffIcons[this.spell];

            if (game.settings.get('pf1-mighty-morphin', 'createScriptCall')) {
                let scriptCall = duplicate(globalThis.pf1.components.ItemScriptCall.defaultData);
                scriptCall.category = 'toggle';
                scriptCall.name = 'Revert Mighty Morphin Changes on Deactivation';
                scriptCall.value = 'if (!state && !!actor.flags["pf1-mighty-morphin"]) game.mightyMorphin.revert({actor: actor});';
                buffData.system.scriptCalls.push(scriptCall);
            }

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

        let armorAndShields = shifter.items.filter(o => o.type === 'equipment' && (o.system.subType === 'armor' || o.system.subType === 'shield'));

        // Cycle through all armor and shield items to process them
        for (let item of armorAndShields) {
            let originalArmor = armorChangeNeeded ? { armor: { value: item.system.armor.value } } : {};
            // If this is not Wild Shape or it is Wild Shape but the armor isn't Wild enchanted, armor must be removed
            let armorIsWild = item.name.includes(game.i18n.localize('Wild'));
            let originalEquipped = (armorIsWild && this.source === game.i18n.localize('WildShape')) ? {} : { equipped: item.system.equipped };
            originalArmor = mergeObject(originalArmor, originalEquipped);

            if (!!originalArmor) {
                armorChangeFlag.push({ _id: item.id, data: originalArmor });
                // take off armor if it's not wild armor or this is not from wild shape
                let equipChange = (armorIsWild && this.source === game.i18n.localize('WildShape')) ? {} : { equipped: false };
                let armorChange = armorChangeNeeded ? (smallSizes.includes(this.actorSize) ? { armor: { value: item.system.armor.value * 2 } } : { armor: { value: Math.floor(item.system.armor.value / 2) } }) : {};
                equipChange = mergeObject(equipChange, armorChange);
                armorToChange.push({ _id: item.id, system: equipChange });
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

        // Process DR changes
        let originalDr = { 'system.traits.dr': shifter.system.traits.dr };
        let drObject = this.processDr(this.dr) || { value: [], custom: '' };

        // Process resistances changes
        let originalEres = { 'system.traits.eres': shifter.system.traits.eres };
        let eresString = this.processEres(this.eres) || '';

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

        newDv = this.processDv(newDv);

        // Process immunities changes        
        let originalDi = { 'system.traits.di': shifter.system.traits.di };
        let newDi = { value: [], custom: '' };
        if (this.level === 3)
        if (!!this.di) {
            for (let i = 0; i < this.di.length; i++) {
                const immunity = this.di[i];

                // If it's a system known damage type, can toggle its setting. Otherwise add it as a custom
                if (!!CONFIG.PF1.damageTypes[immunity]) newDi.value.push(immunity);
                else newDi.custom += (newDi.custom.length > 0 ? '; ' : '') + immunity;
            }
        }

        newDi = this.processDi(newDi);

        // Process regen changes
        let originalRegen = { 'system.traits.regen': shifter.system.traits.regen };
        let regenString = this.processRegen(this.regen) || '';

        originalSenses = mergeObject(originalSenses, mergeObject(originalDi, mergeObject(originalDr, mergeObject(originalRegen, mergeObject(originalEres, originalDv)))));
        sensesChanges = mergeObject(sensesChanges, mergeObject({ 'system.traits.di': newDi }, mergeObject({ 'system.traits.dr': drObject }, mergeObject({ 'system.traits.regen': regenString }, mergeObject({ 'system.traits.eres': eresString }, { 'system.traits.dv': newDv })))));

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
        let newImage = await MightyMorphinApp.findImage(this.customImage || chosenForm, !! this.customImage);

        // Prepare data for image change
        let oldImage = { img: '' };
        let oldProtoImage = { token: { img: '' } };
        let protoImageChange = !!newImage ? { 'prototypeToken.texture.src': newImage } : {};
        if (!!newImage) {
            let token = shifter.token || canvas.tokens.ownedTokens.filter(o => o.actor.id === fromUuidSync(this.actorId).id);
            if (!!token) {
                if (Array.isArray(token) && token.length > 1) {
                    oldImage.img = token[0].document.texture.src;
                    let tokenUpdates = token.map(o => ({_id: o.id, 'texture.src': newImage}));
                    await canvas.scene.updateEmbeddedDocuments('Token', tokenUpdates);
                }
                else {
                    if (Array.isArray(token)) token = token[0].document;
                    oldImage.img = token.texture.src;
                    await token.update({ 'texture.src': newImage });
                }
            }
            oldProtoImage.token.img = shifter.prototypeToken.texture.src;
        }

        // Create the items on the actor, then create an array of their ids to delete them later
        let itemsCreated = await shifter.createEmbeddedDocuments('Item', itemsToEmbed);
        itemsCreated = itemsCreated.map(o => o.id);

        // Turn on the buff created
        buff = shifter.items.find(o => o.type === 'buff' && o.name === this.source);
        
        let durationData = {};
        if (!!this.durationLevel) {
            durationData = {value: this.durationLevel.toString(), units: (this.source === 'Wild Shape' ? 'hour' : 'minute')};
        }

        let buffUpdate = [{ _id: buff.id, 'system.duration': durationData, 'system.changes': this.changes, 'system.active': true }];

        // Set the flags for all changes made
        let dataFlag = mergeObject({ 'system.traits.size': this.actorSize }, mergeObject(originalSkillMod, mergeObject(originalManeuverability, originalSenses)));
        if (!!newImage) { dataFlag = mergeObject(dataFlag, oldProtoImage); };
        let flags = { source: this.source, buffName: this.source, data: dataFlag, armor: armorChangeFlag, itemsCreated: itemsCreated };
        if (!!newImage) { flags = mergeObject(flags, { tokenImg: oldImage }); };
        await shifter.update(mergeObject({ 'system.traits.size': newSize, 'flags.pf1-mighty-morphin': flags }, mergeObject(skillModChange, mergeObject(maneuverabilityChange, mergeObject(sensesChanges, protoImageChange)))));

        // update items on the actor
        if (!!armorToChange.length) await shifter.updateEmbeddedDocuments('Item', armorToChange.concat(buffUpdate));
        else await shifter.updateEmbeddedDocuments('Item', buffUpdate);
        canvas.tokens.releaseAll();
        if (!!shifter.token) shifter.token.object.control();
        else canvas.tokens.ownedTokens.find(o => o.actor.id === fromUuidSync(this.actorId).id).control();
        await this.close();
    }

    /**
     * Validates that this specific spell gives the resistances passed
     * 
     * @param {object[]} dr The damage resistance from the chosen form
     * @returns The damage resistance applicable for this spell
     */
    processDr(dr) {
        let drObject = { value: [], custom: '' };
        for (const entry of dr) {
            if (typeof(entry) === 'string') {
                if (drObject.custom.length > 0) drObject.custom += '; ';
                drObject.custom += entry;
            }
            else {
                drObject.value.push(entry);
            }
        }
        return drObject;
    }

    /**
     * Validates that this specific spell gives the resistances passed
     * 
     * @param {object[]} eres The energy resistance from the chosen form
     * @returns The energy resistance applicable for this spell
     */
    processEres(eres) {        
        let eresObject = { value: [], custom: '' };
        for (const entry of eres) {
            if (typeof(entry) === 'string') {
                if (eresObject.custom.length > 0) eresObject.custom += '; ';
                eresObject.custom += entry;
            }
            else {
                eresObject.value.push(entry);
            }
        }
        return eresObject;
    }

    /**
     * Validates that this specific spell gives the vulnerabilities passed
     * 
     * @param {string[]} dv The damage vulnerability from the chosen form
     * @returns The damage vulnerability applicable for this spell
     */
    processDv(dv) { }
    
    /**
     * Validates that this specific spell gives the immunities passed
     * 
     * @param {string[]} di The damage immunities from the chosen form
     * @returns The damage immunities applicable for this spell
     */
    processDi(di) { }

    /**
     * Validates that this specific spell gives the regen passed
     * 
     * @param {string} regen The regen from the chosen form
     * @returns The regen applicable for this spell
     */
    processRegen(regen) { }

    /**
     * Updates the options in the formSelect select input based on the type radio and the size clicked by the user in the event
     */
    async updateFormChoices() { }

    /**
     * Updates the radio buttons for size selection based on the available sizes for the form selected by user in the event
     */
    async updateSizeChoices() { }

    /**
     * Processes the changes from the selected beast form into a readable preview display html. In the process it validates the changes based on the level of the spell
     * 
     * @param {string} chosenForm The name of the form chosen in the dropdown
     * @param {string} chosenType The type of creature (animal or magical beast)
     * @returns {string} HTML containing preview of all the changes to be made to the actor
     */
    async buildPreviewTemplate(chosenForm, chosenType) { }

    /** @inheritdoc */
    activateListeners(html) {
        super.activateListeners(html);

        // size radio button changed, update the form choices for the new size, then update the preview to the first form in the list
        $('#sizeSelect').on('change', async (event) => {
            await this.updateFormChoices(event, $('#formSelect')[0], $('input[name="typeSelect"]:checked')[0]?.value);
            $('#changePreview')[0].innerHTML = await this.buildPreviewTemplate($('#formSelect')[0].value, $('input[name="typeSelect"]:checked')[0]?.value);
        });

        // form type radio button changed (animal/magical beast). Update allowed sizes for this spell level, update the form choices, update preview
        $('#typeSelect').on('change', async (event) => {
            await this.updateSizeChoices(event, $('#sizeSelect')[0]);
            await this.updateFormChoices({ target: { value: 'med' } }, $('#formSelect')[0], $('input[name="typeSelect"]:checked')[0]?.value);
            $('#changePreview')[0].innerHTML = await this.buildPreviewTemplate($('#formSelect')[0].value, $('input[name="typeSelect"]:checked')[0]?.value);
        });

        // selected form changed, update the preview
        $('#formSelect').on('change', async (event) => {
            $('#changePreview')[0].innerHTML = await this.buildPreviewTemplate($('#formSelect')[0].value, $('input[name="typeSelect"]:checked')[0]?.value);
        });

        // Submit clicked, apply to the actor
        $('#submitButton').on('click', async (event) => await this.applyChanges(event, $('#formSelect')[0].value, $('input[name="typeSelect"]:checked')[0]?.value));
    }
}