import { MightyMorphinApp } from './mighty-morphin.js';
import { MorphinChanges } from './morphin-changes.js';
import { MorphinOptions } from './morphin-options.js';
import { MorphinPolymorphDialog } from './morphin-polymorph-dialog.js';

/**
 * Application for selecting a shape from the Beast Shape spell to change into and then applying that shape to an actor
 */
export class MorphinMagicalBeastShape extends MorphinPolymorphDialog {
    /**
     * @inheritdoc
     * @param {number} level The level of beast shape to use 1 - 4
     * @param {string} actorId The id of the actor that will change shape
     * @param {string} source The source of the beast shape effect
     */
    constructor(level, durationLevel, actorId, source, {planarType = null, energizedTypes = null, mutatedType = null} = {}) {
        super(level, durationLevel, actorId, source, {planarType: planarType, energizedTypes: energizedTypes, mutatedType: mutatedType});

        this.spell = 'magicalBeastShape';

        // Add all possible sizes for the given spell level
        switch (level) {
            case 1:
                this.sizes.magicalBeast = ['dim','tiny', 'sm', 'med', 'lg','huge'];
                break;
        }

        // Find options to shapeshift into based on the valid size choices above and sort them alphabetically
        this.shapeOptions.magicalBeast = MorphinOptions.magicalBeast.filter(o => this.sizes.magicalBeast.includes(o.size));
        this.shapeOptions.magicalBeast.sort((a, b) => { return a.name > b.name ? 1 : -1; });
    }

    /** @inheritdoc */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ['mightyMorphinDialog'],
            popOut: true,
            template: 'modules/pf1-mighty-morphin/templates/magicalBeastShapeDialog.html',
            id: 'mighty-morphin-magicalBeastShape',
            title: game.i18n.localize('MMMOD.UI.MagicalBeastDialogName'),
            resizable: false,
            width: 575
        });
    }

    /** @inheritdoc */
    async getData() {
        const data = await super.getData();

        // Set the default size to the largest available animal (default type)
        let defaultSize = this.sizes.magicalBeast[this.sizes.magicalBeast.length - 1];
        data.mBeastOptions = this.shapeOptions.magicalBeast.filter(o => o.size === defaultSize);

        // Create radio button data for animal sizes, set the one for the default size as the default checked button
        data.mBeastSizes = this.sizes.magicalBeast.map(o => { return o === defaultSize ? { label: o, size: CONFIG.PF1.actorSizes[o], default: true } : { label: o, size: CONFIG.PF1.actorSizes[o] }; });

        // Get the animal that will be the first shown in the form dropdown and build the preview of the changes the form will provide
        data.defaultChoice = data.mBeastOptions[0];
        data.previewHtml = await this.buildPreviewTemplate(data.defaultChoice.name, 'magicalBeast');

        return data;
    }

    /** @inheritdoc */
    async applyChanges(event, chosenForm) {
        super.applyChanges(event, chosenForm);
    }

    /**
     * Updates the options in the formSelect select input based on the type radio and the size clicked by the user in the event
     * 
     * @param {object} event listener event from sizeSelect radio buttons
     * @param {object} formSelect The select html object
     * @param {string} typeSelect Selected form type (animal or magical beast)
     */
    async updateFormChoices(event, formSelect, typeSelect) {
        let newOptions = this.shapeOptions.magicalBeast.filter(o => o.size === event.target.value);

        let newHtml = newOptions.map(o => `<option value="${ o.name }">${ o.name }</option>`);
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

        let newOptionsHtml = `<legend>${ game.i18n.localize('MMMOD.UI.Select' + (event.target.value === 'animal' ? 'Animal' : 'MagicalBeast') + 'Size') }</legend>`;

        // Create the radio buttons html
        for (let i = 0; i < newOptions.length; i++) {
            const element = newOptions[i];
            newOptionsHtml += `<input type="radio" name="sizeSelect" id="${ element.size }Select" value="${ element.label }" ${ element.default ? 'checked' : '' }><label for="${ element.size }Select">${ game.i18n.localize('MMMOD.Sizes.' + element.size) }</label>`;
        }

        // Replace the html
        sizeSelectDiv.innerHTML = newOptionsHtml;
    }

    /**
     * Processes the changes from the selected beast form into a readable preview display html. In the process it validates the changes based on the level of the spell
     * 
     * @param {string} chosenForm The name of the form chosen in the dropdown
     * @returns {string} HTML containing preview of all the changes to be made to the actor
     */
    async buildPreviewTemplate(chosenForm) {
        let data = {};
        this.chosenForm = this.shapeOptions.magicalBeast.find(o => o.name === chosenForm);

        // Process stat changes for polymorphing smaller than small or larger than medium
        data.polymorphBase = '';
        this.polymorphChanges = MorphinChanges.changes.polymorphSize[this.actorSize] || {};
        if (!!this.polymorphChanges) {
            for (let i = 0; i < this.polymorphChanges.length; i++) {
                const change = this.polymorphChanges[i];
                if (!!change.target && change.target === 'ability') {
                    if (data.polymorphBase.length > 0) data.polymorphBase += ', '; // comma between entries
                    // text output of the stat (capitalized), and a + in front of positive numbers
                    data.polymorphBase += `${ game.i18n.localize('MMMOD.UI.' + change.subTarget.charAt(0).toUpperCase() + change.subTarget.slice(1)) } ${ (change.value > 0 ? '+' : '') }${ change.value }`;
                }
            }
        }

        // Process stat changes from the spell based on spell level
        data.scoreChanges = '';
        this.changes = duplicate(MorphinChanges.changes.magicalBeastShape.magicalBeast[this.chosenForm.size].changes);
        for (let i = 0; i < this.changes.length; i++) {
            const change = this.changes[i];

            if (!!change.target && change.target === 'ability') { // stat change
                if (data.scoreChanges.length > 0) data.scoreChanges += ', ';
                data.scoreChanges += `${ game.i18n.localize('MMMOD.UI.' + change.subTarget.charAt(0).toUpperCase() + change.subTarget.slice(1)) } ${ (change.value > 0 ? '+' : '') }${ change.value }`;
            }
            else if (!change.target && change.subTarget == 'nac') { // natural AC change
                if (data.scoreChanges.length > 0) data.scoreChanges += ', ';
                data.scoreChanges += `${ game.i18n.localize('MMMOD.UI.NaturalAC') } ${ (change.value > 0 ? '+' : '') }${ change.value }`;
            }
        }

        // Process changes to speed, limited by maximum the spell level allows
        data.speedChanges = '';
        this.speeds = duplicate(MorphinChanges.changes[this.chosenForm.name].speed);
        for (let i = 0; i < Object.keys(this.speeds).length; i++) {
            const speedName = Object.keys(this.speeds)[i];

            if (speedName === 'swim') {
                this.speeds[speedName] = Math.min(120, this.speeds[speedName]);
            }

            if (speedName === 'fly') {
                    this.speeds[speedName].base = Math.min(120, this.speeds[speedName].base);
                    if (MorphinChanges.flightManeuverability.indexOf('good') < MorphinChanges.flightManeuverability.indexOf(this.speeds[speedName].maneuverability)) this.speeds[speedName].maneuverability = 'good';
            }

            if (speedName === 'climb') {
                    this.speeds[speedName] = Math.min(90, this.speeds[speedName]);
            }

            if (speedName === 'burrow') {
                    this.speeds[speedName] = Math.min(60, this.speeds[speedName]);
            }

            if (data.speedChanges.length > 1) data.speedChanges += ', ';
            data.speedChanges += `${ game.i18n.localize('MMMOD.UI.' + speedName) } ${ speedName === 'fly' ? this.speeds[speedName].base : this.speeds[speedName] }
                ${ game.i18n.localize('MMMOD.UI.ft') }${ speedName === 'fly' ? ' (' + game.i18n.localize('MMMOD.UI.' + this.speeds[speedName].maneuverability) + ')' : '' }`;
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
                    if (MorphinChanges.allowedSpecials[this.spell][this.level].includes(specialName)) { // ignore specials the spell doesn't allow
                        if (attackSpecial.length > 0) attackSpecial += ', ';
                        attackSpecial += game.i18n.localize('MMMOD.Attacks.' + specialName);
                    }
                }
            }
            let damageDice = attack.diceSize === 0 ? '' : `${ attack.diceCount }d${ attack.diceSize }`;
            if (attack.nonCrit) damageDice += (!!damageDice.length ? ` ${ game.i18n.localize('MMMOD.UI.Plus') } ` : '') + `${ attack.nonCrit.formula } ${!!attack.nonCrit.type.values.toString() ?
                game.i18n.localize('MMMOD.DamageTypes.' + attack.nonCrit.type.values.toString()) : game.i18n.localize('MMMOD.DamageTypes.' + attack.nonCrit.type.custom)}`;
            if (data.attacks.length > 0) data.attacks += ', ';
            data.attacks += `${ attack.count > 1 ? attack.count + ' ' : '' }${ game.i18n.localize('MMMOD.Attacks.' + attack.name) } (${ !!damageDice ? damageDice : '0' }${ !!attackSpecial ? ` ${game.i18n.localize('MMMOD.UI.Plus') } ` + attackSpecial : ''})`;
        }
        if (!data.attacks.length) data.attacks = game.i18n.localize('MMMOD.UI.None');

        // Process special attacks
        data.specialAttacks = '';
        let specialAttackList = MorphinChanges.changes[this.chosenForm.name].specialAttack || [];
        for (let i = 0; i < specialAttackList.length; i++) {
            const specialAttack = duplicate(specialAttackList[i]);

            // Make sure the special attack is allowed at this level of spell before processing it
            let valid = true;
            for (let j = 0; j < (specialAttack.special?.length || 0); j++) {
                const special = specialAttack.special[j];

                if (!MorphinChanges.allowedSpecials[this.spell][this.level].includes(special)) valid = false;
            }

            if (valid) {
                let attackSpecial = '';
                if (!!specialAttack.special) {
                    for (let j = 0; j < specialAttack.special.length; j++) {
                        const specialName = specialAttack.special[j];
                        if (MorphinChanges.allowedSpecials[this.spell][this.level].includes(specialName)) {
                            if (attackSpecial.length > 0) attackSpecial += ', ';
                            attackSpecial += game.i18n.localize('MMMOD.Attacks.' + specialName);
                        }
                    }
                }
                
                if (specialAttack.name.includes('BreathWeapon') && !!specialAttack.nonCrit) {
                    const breathDamage = specialAttack.nonCrit.formula.split('d');
                    let limited = false;
                    if (parseInt(breathDamage[0]) >= 12) {
                        breathDamage[0] = '12';
                        limited = true;
                    }
                    if (limited && parseInt(breathDamage[1]) > 6) {
                        breathDamage[1] = '6';
                    }
                    if (limited) specialAttack.nonCrit.formula = breathDamage.join('d');
                }

                let damageDice = specialAttack.diceSize === 0 ? '' : `${ specialAttack.diceCount }d${ specialAttack.diceSize }`;
                if (specialAttack.nonCrit) damageDice += (!!damageDice.length ? ` ${ game.i18n.localize('MMMOD.UI.Plus') } ` : '') + `${ specialAttack.nonCrit.formula } ${!!specialAttack.nonCrit.type.values.toString() ? 
                    game.i18n.localize('MMMOD.DamageTypes.' + specialAttack.nonCrit.type.values.toString()) : game.i18n.localize('MMMOD.DamageTypes.' + specialAttack.nonCrit.type.custom)}`;
                if (data.specialAttacks.length > 0) data.attacks += ', ';
                data.specialAttacks += `${ specialAttack.count > 1 ? specialAttack.count + ' ' : '' }${ game.i18n.localize('MMMOD.Attacks.' + specialAttack.name) } (${ !!damageDice ? damageDice : '0' }${ !!attackSpecial ? ` ${game.i18n.localize('MMMOD.UI.Plus') } ` + attackSpecial : ''})`;
            }
        }
        if (!data.specialAttacks.length) data.specialAttacks = game.i18n.localize('MMMOD.UI.None');

        // Process changes in senses limited by the spell level
        const formSenses = duplicate(MorphinChanges.changes[this.chosenForm.name].senses);
        this.senses = [];
        data.senses = !!formSenses.length ? '' : game.i18n.localize('MMMOD.UI.None');
        for (let i = 0; i < formSenses.length; i++) {
            let senseEnumValue = formSenses[i];
            const senseKey = Object.keys(MorphinChanges.SENSES[Object.keys(MorphinChanges.SENSES)[senseEnumValue - 1]].setting)[0];
            const senseValue = MorphinChanges.SENSES[Object.keys(MorphinChanges.SENSES)[senseEnumValue - 1]].setting[senseKey];
            
            const allowedSenses = MorphinChanges.allowedSenses[this.spell][this.level];
            if (!allowedSenses[senseKey]) continue;

            if (senseValue > allowedSenses[senseKey].value) {
                senseEnumValue = MorphinChanges.SENSES[allowedSenses[senseKey].static + allowedSenses[senseKey].value].value;
            }
            this.senses.push(senseEnumValue);
            
            if (!!senseEnumValue && !!MorphinChanges.allowedSenses[this.spell][this.level][senseKey]) {
                if (data.senses.length > 0) data.senses += ', ';
                data.senses += `${ game.i18n.localize('MMMOD.Senses.' + MorphinChanges.SENSES[Object.keys(MorphinChanges.SENSES)[senseEnumValue - 1]].name) }`; // enum value 1 = SENSES[0] = LOWLIGHT
            }
        }
        if (!data.senses.length) data.senses = game.i18n.localize('MMMOD.UI.None');

        // Process special qualities
        data.special = game.i18n.localize('MMMOD.UI.None');
        this.special = !!MorphinChanges.changes[this.chosenForm.name].special ? duplicate(MorphinChanges.changes[this.chosenForm.name].special) : [];
        for (let i = 0; i < this.special.length; i++) {
            const specialName = this.special[i];

            // Check just the first word of the special text, so something like 'jet 200ft' matches 'jet'
            if (!MorphinChanges.allowedSpecials[this.spell][this.level].includes(specialName.split(' ')[0])) {
                delete (this.special[i]);
                continue;
            }
            else {
                if (data.special === game.i18n.localize('MMMOD.UI.None')) data.special = '';
                if (data.special.length > 0) data.special += ', ';
                data.special += game.i18n.localize('MMMOD.Attacks.' + specialName);
            }
        }

        // Process energy resistances and vulnerabilities
        const elementTypes = ['acid', 'cold', 'electricity', 'fire', 'sonic', 'positive', 'negative'];
        const eres = MorphinChanges.changes[this.chosenForm.name].eres?.filter(o => elementTypes.includes(o.types[0])) || [];
        data.eres = '';
        
        const di = MorphinChanges.changes[this.chosenForm.name].di?.filter(o => elementTypes.includes(o)) || [];
        for (const entry of di) {
            eres.push({ amount: 20, operator: true, types: [entry, ''] });
        }

        for (const entry of eres) {
            if (data.eres.length > 0) data.eres += ', ';
            if (typeof(entry) === 'string') {
                data.eres += entry;
            }
            else {
                data.eres += game.i18n.localize('MMMOD.DamageTypes.' + entry.types[0].charAt(0).toUpperCase() + entry.types[0].slice(1)) + ' ' + 20;
            }
        }
        if (data.eres.length === 0) data.eres = game.i18n.localize('MMMOD.UI.None');
        this.eres = eres;

        const dv = MorphinChanges.changes[this.chosenForm.name].dv?.filter(o => elementTypes.includes(o)) || [];
        data.dv = dv.map(o => game.i18n.localize('MMMOD.DamageTypes.' + o)).join(', ') || game.i18n.localize('MMMOD.UI.None');
        this.dv = dv;

        if (MorphinChanges.changes[this.chosenForm.name].di?.includes('poison')) {
            data.saves = '+[[8]] ' + game.i18n.localize('MMMOD.UI.ResistanceVPoison');
            this.contextNotes = [{ text: '+[[8]] ' + game.i18n.localize('MMMOD.UI.ResistanceVPoison'), subTarget: 'allSavingThrows' }];
        }
        else {
            data.saves = game.i18n.localize('MMMOD.UI.None');
        }

        if (!!MorphinChanges.changes[this.chosenForm.name].fastHealing) {
            data.fastHealing = Math.min(5, MorphinChanges.changes[this.chosenForm.name].fastHealing);
            this.fastHealing = data.fastHealing;
        }
        else {
            data.fastHealing = game.i18n.localize('MMMOD.UI.None');
        }

        // Build the html preview
        let newHtml = `${ !!data.polymorphBase ? '<p><span class="previewLabel">' + game.i18n.localize('MMMOD.UI.BaseSizeAdjust') + ': </span><span id="polymorphScores">' + data.polymorphBase + '</span></p>' : '' }
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.AbilityScores') }: </span><span id="abilityScores">${ data.scoreChanges }</span></p>
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.Attacks') }: </span><span id="attacks">${ data.attacks }</span></p>
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.SpecialAttacks') }: </span><span id="specialAttacks">${ data.specialAttacks }</span></p>
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.Speeds') }: </span><span id="speeds">${ data.speedChanges }</span></p>
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.Senses') }: </span><span id="senses">${ data.senses }</span></p>
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.SpecialAbilities') }: </span><span id="specials">${ data.special }</span></p>
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.EnergyResistances') }: </span><span id="eres">${ data.eres }</span></p>
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.Vulnerabilities') }: </span><span id="dv">${ data.dv }</span></p>
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.FastHealing') }: </span><span id="dv">${ data.fastHealing }</span></p>
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.SaveBonuses') }: </span><span id="dv">${ data.saves }</span></p>`;

        return newHtml;
    }

    /** @inheritdoc */
    processDr(dr) {
        return { value: [], custom: '' };
    }

    /** @inheritdoc */
    processEres(eres) {
        return super.processEres(eres);
    }

    /** @inheritdoc */
    processDv(dv) {
        return dv;
    }
    
    /** @inheritdoc */
    processDi(di) {
        return { value: [], custom: '' };
    }

    /** @inheritdoc */
    processRegen(regen) {
        return '';
    }

    /** @inheritdoc */
    processFastHealing(fastHealing) {
        return fastHealing;
    }

    /** @inheritdoc */
    activateListeners(html) {
        super.activateListeners(html);
    }
}

// The allowed special properties and attacks for beast shape I-IV
// MorphinBeastShape.allowedSpecials = {
//     '1': ['Touch'],
//     '2': ['Touch', 'Grab', 'Pounce', 'Trip'],
//     '3': ['Touch', 'Grab', 'Pounce', 'Trip', 'Constrict', 'Ferocity', 'Jet', 'Poison', 'Rake', 'Trample', 'Web'],
//     '4': ['Touch', 'Grab', 'Pounce', 'Trip', 'Constrict', 'Ferocity', 'Jet', 'Poison', 'Rake', 'Trample', 'Web', 'Breath Weapon', 'Rend', 'Roar', 'Spikes']
// };
