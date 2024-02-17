import { MightyMorphinApp } from './mighty-morphin.js';
import { MorphinChanges } from './morphin-changes.js';
import { MorphinOptions } from './morphin-options.js';
import { MorphinPolymorphDialog } from './morphin-polymorph-dialog.js';

/**
 * Application for selecting a shape from the Beast Shape spell to change into and then applying that shape to an actor
 */
export class MorphinShifterShape extends MorphinPolymorphDialog {
    /**
     * @inheritdoc
     * @param {number} level The level of beast shape to use 1 - 4
     * @param {string} actorId The id of the actor that will change shape
     * @param {string} source The source of the beast shape effect
     */
    constructor(durationLevel, actorId, source, {planarType = null, energizedTypes = null, mutatedType = null} = {}) {
        super(1, 1, actorId, source, {planarType: planarType, energizedTypes: energizedTypes, mutatedType: mutatedType});

        this.spell = 'shifterWildShape';

        // Find options to shapeshift into based on the valid size choices above and sort them alphabetically
        this.shapeOptions.shifterWildShape = MorphinOptions.shifterWildShape;
    }

    /** @inheritdoc */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ['mightyMorphinDialog'],
            popOut: true,
            template: 'modules/pf1-mighty-morphin/templates/beastShapeDialog.html',
            id: 'mighty-morphin-shifterWildShape',
            title: game.i18n.localize('MMMOD.UI.BeastDialogName'),
            resizable: false,
            width: 550
        });
    }

    /** @inheritdoc */
    async getData() {
        const data = await super.getData();

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
        let newOptions = this.shapeOptions[typeSelect].filter(o => o.size === event.target.value);

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
     * @param {string} chosenAspect The name of the form chosen in the dropdown
     * @param {string} chosenForm The form of the aspect chosen, major or minor
     * @param {string} chosenType The type of creature (animal or magical beast)
     * @returns {string} HTML containing preview of all the changes to be made to the actor
     */
    async buildPreviewTemplate(chosenAspect, chosenForm, chosenType) {
        let data = {};
        this.chosenAspect = this.shapeOptions[chosenType].find(o => o.name === chosenAspect);

        if (chosenForm === 'major') {
            // Process stat changes for polymorphing smaller than small or larger than medium
            data.polymorphBase = this.processPolymorphChanges();


            // Process stat changes from the spell based on spell level
            if (this.chosenAspect.source === 'beastShape') this.changes = duplicate(MorphinChanges.changes[this.chosenAspect.source].animal[this.chosenAspect.size].changes);
            else if (this.chosenAspect.source === 'verminShape') this.changes = duplicate(MorphinChanges.changes[this.chosenAspect.source].vermin[this.chosenAspect.size].changes);
            data.scoreChanges = this.processScoreChanges();
        }
        else {
            this.changes = [];
        }

        this.formData = {};
        const formData = duplicate(MorphinChanges.changes.shifterWildShape[this.chosenAspect.name][chosenForm]);
        const shifter = fromUuidSync(this.actorId);

        for (const level of Object.keys(formData)) {
            if (shifter.classes.shifter.level >= level) mergeObject(this.formData, formData[level]);
        }

        this.clawsData = {};
        for (const level of Object.keys(MorphinChanges.changes.shifterWildShape.claws)) {
            if (shifter.classes.shifter.level >= level) mergeObject(this.clawsData, MorphinChanges.changes.shifterWildShape.claws[level]);
        }
        if (shifter.system.traits.size != 'med') {
            const size = Object.keys(pf1.config.actorSizes).indexOf(shifter.system.traits.size);
            const dice = Roll.fromTerms(pf1.utils.rollPreProcess.sizeRoll(this.clawsData.diceCount, this.clawsData.diceSize, size)).formula.split('d');
            this.clawsData.diceCount = dice[0];
            this.clawsData.diceSize = dice[1];
        }

        if (!!this.formData.conditionals) {
            for (const conditional of this.formData.conditionals) {
                conditional._id = randomID();
            }
        }

        // Process changes to speed, limited by maximum the spell level allows
        data.speedChanges = '';
        this.speeds = this.formData.speed || {};
        for (let i = 0; i < Object.keys(this.speeds).length; i++) {
            const speedName = Object.keys(this.speeds)[i];

            if (data.speedChanges.length > 1) data.speedChanges += ', ';
            data.speedChanges += `${ game.i18n.localize('MMMOD.UI.' + speedName) } ${ speedName === 'fly' ? this.speeds[speedName].base : this.speeds[speedName] }
                ${ game.i18n.localize('MMMOD.UI.ft') }${ speedName === 'fly' ? ' (' + game.i18n.localize('MMMOD.UI.' + this.speeds[speedName].maneuverability) + ')' : '' }`;
        }

        // Process the natural attacks
        data.attacks = '';
        let attackList = this.formData.attacks || [];
        for (let i = 0; i < attackList.length; i++) {
            const attack = attackList[i];

            let attackSpecial = '';
            if (!!attack.special) { // process any specials associated with the attack
                for (let j = 0; j < attack.special.length; j++) {
                    const specialName = attack.special[j];
                    if (attackSpecial.length > 0) attackSpecial += ', ';
                    attackSpecial += game.i18n.localize('MMMOD.Attacks.' + specialName);
                }
            }

            if (attack.claw || (attack.claw === undefined && globalThis.pf1.config.sizeDie.indexOf(`${ attack.diceCount }d${ attack.diceSize }`) < globalThis.pf1.config.sizeDie.indexOf(`${ this.clawsData.diceCount }d${ this.clawsData.diceSize }`))) {
                attack.diceCount = this.clawsData.diceCount;
                attack.diceSize = this.clawsData.diceSize;
                attack.usedClaws = true;
            }

            if (!!attack.improved) {
                const newDamage = Roll.fromTerms(pf1.utils.rollPreProcess.sizeRoll(attack.diceCount, attack.diceSize, 5, 4)).formula.split('d');
                attack.diceCount = newDamage[0];
                attack.diceSize = newDamage[1];
            }

            let damageDice = attack.diceSize === 0 ? '' : `${ attack.diceCount }d${ attack.diceSize }`;
            if (attack.nonCrit) damageDice += (!!damageDice.length ? ` ${ game.i18n.localize('MMMOD.UI.Plus') } ` : '') + `${ attack.nonCrit.formula } ${!!attack.nonCrit.type.values.toString() ?
                game.i18n.localize('MMMOD.DamageTypes.' + attack.nonCrit.type.values.toString()) : game.i18n.localize('MMMOD.DamageTypes.' + attack.nonCrit.type.custom)}`;
            if (data.attacks.length > 0) data.attacks += ', ';
            data.attacks += `${ attack.count > 1 ? attack.count + ' ' : '' }${ game.i18n.localize('MMMOD.Attacks.' + attack.name) } (${ !!damageDice ? damageDice : '0' }${ !!attackSpecial ? ` ${ game.i18n.localize('MMMOD.UI.Plus') } ` + attackSpecial : '' })`;
        }
        if (!data.attacks.length) data.attacks = game.i18n.localize('MMMOD.UI.None');

        // Process special attacks
        data.specialAttacks = '';
        let specialAttackList = this.formData.specialAttack || [];
        for (let i = 0; i < specialAttackList.length; i++) {
            const specialAttack = specialAttackList[i];

            let attackSpecial = '';
            if (!!specialAttack.special) {
                for (let j = 0; j < specialAttack.special.length; j++) {
                    const specialName = specialAttack.special[j];
                    if (attackSpecial.length > 0) attackSpecial += ', ';
                    attackSpecial += game.i18n.localize('MMMOD.Attacks.' + specialName);
                }
            }
            if (specialAttack.claw || (specialAttack.claw === undefined && globalThis.pf1.config.sizeDie.indexOf(`${ specialAttack.diceCount }d${ specialAttack.diceSize }`) < globalThis.pf1.config.sizeDie.indexOf(`${ this.clawsData.diceCount }d${ this.clawsData.diceSize }`))) {
                specialAttack.diceCount = this.clawsData.diceCount;
                specialAttack.diceSize = this.clawsData.diceSize;
                specialAttack.usedClaws = true;
            }
            let damageDice = specialAttack.diceSize === 0 ? '' : `${ specialAttack.diceCount }d${ specialAttack.diceSize }`;
            if (specialAttack.nonCrit) damageDice += (!!damageDice.length ? ` ${ game.i18n.localize('MMMOD.UI.Plus') } ` : '') + `${ specialAttack.nonCrit.formula } ${!!specialAttack.nonCrit.type.values.toString() ? 
                game.i18n.localize('MMMOD.DamageTypes.' + specialAttack.nonCrit.type.values.toString()) : game.i18n.localize('MMMOD.DamageTypes.' + specialAttack.nonCrit.type.custom)}`;
            if (data.specialAttacks.length > 0) data.attacks += ', ';
            data.specialAttacks += `${ specialAttack.count > 1 ? specialAttack.count + ' ' : '' }${ game.i18n.localize('MMMOD.Attacks.' + specialAttack.name) } (${ !!damageDice ? damageDice : '0' }${ !!attackSpecial ? ` ${ game.i18n.localize('MMMOD.UI.Plus') } ` + attackSpecial : '' })`;
        }
        if (!data.specialAttacks.length) data.specialAttacks = game.i18n.localize('MMMOD.UI.None');

        // Process changes in senses limited by the spell level
        this.senses = this.formData.senses || {};
        data.senses = !!this.senses.length ? '' : game.i18n.localize('MMMOD.UI.None');
        for (let i = 0; i < this.senses.length; i++) {
            const senseEnumValue = this.senses[i];
            
            if (!!senseEnumValue) {
                if (data.senses.length > 0) data.senses += ', ';
                data.senses += `${ game.i18n.localize('MMMOD.Senses.' + MorphinChanges.SENSES[Object.keys(MorphinChanges.SENSES)[senseEnumValue - 1]].name) }`; // enum value 1 = SENSES[0] = LOWLIGHT
            }
        }
        if (!data.senses.length) data.senses = game.i18n.localize('MMMOD.UI.None');

        // Process special qualities
        data.special = game.i18n.localize('MMMOD.UI.None');
        this.special = this.formData.special || [];
        for (let i = 0; i < this.special.length; i++) {
            const specialName = this.special[i];

            if (data.special === game.i18n.localize('MMMOD.UI.None')) data.special = '';
            if (data.special.length > 0) data.special += ', ';
            data.special += game.i18n.localize('MMMOD.Attacks.' + specialName);
        }

        this.processAttributes();

        // Build the html preview
        let newHtml = `${ !!data.polymorphBase ? '<p><span class="previewLabel">' + game.i18n.localize('MMMOD.UI.BaseSizeAdjust') + ': </span><span id="polymorphScores">' + data.polymorphBase + '</span></p>' : '' }
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.AbilityScores') }: </span><span id="abilityScores">${ data.scoreChanges }</span></p>
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.Attacks') }: </span><span id="attacks">${ data.attacks }</span></p>
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.SpecialAttacks') }: </span><span id="specialAttacks">${ data.specialAttacks }</span></p>
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.Speeds') }: </span><span id="speeds">${ data.speedChanges }</span></p>
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.Senses') }: </span><span id="senses">${ data.senses }</span></p>
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.SpecialAbilities') }: </span><span id="specials">${ data.special }</span></p>
            ${this.level === 4 ? '<p><span class="previewLabel">' + game.i18n.localize('MMMOD.UI.EnergyResistances') + ': </span><span id="eres">' + data.eres + '</span></p>' +
                '<p><span class="previewLabel">' + game.i18n.localize('MMMOD.UI.Vulnerabilities') + ': </span><span id="dv">' + data.dv + '</span></p>' : ''}`;

        return newHtml;
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
