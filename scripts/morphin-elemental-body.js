import { MightyMorphinApp } from './mighty-morphin.js';
import { MorphinChanges } from './morphin-changes.js';
import { MorphinOptions } from './morphin-options.js';
import { MorphinPolymorphDialog } from './morphin-polymorph-dialog.js';

/**
 * Application for selecting a shape from the Elemental Body spell to change into and then applying that shape to an actor
 */
export class MorphinElementalBody extends MorphinPolymorphDialog {
    /**
     * @inheritdoc
     * @param {number} level The level of elemental body to use 1 - 4
     * @param {string} actorId The id of the actor that will change shape
     * @param {string} source The source of the elemental body effect
     */
    constructor(level, durationLevel, actorId, source) {
        super(level, durationLevel, actorId, source);
        this.spell = 'elementalBody';

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
        super.applyChanges(event, chosenForm);
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
            if (attack.nonCrit) damageDice += (!!damageDice.length ? ' plus ' : '') + `${attack.nonCrit.formula} ${!!attack.nonCrit.type.values.toString() ? attack.nonCrit.type.values.toString() : attack.nonCrit.type.custom}`;
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
            if (specialAttack.nonCrit) damageDice += (!!damageDice.length ? ' plus ' : '') + `${specialAttack.nonCrit.formula} ${!!specialAttack.nonCrit.type.values.toString() ? specialAttack.nonCrit.type.values.toString() : specialAttack.nonCrit.type.custom}`;
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
                data.senses += `${game.i18n.localize('MMMOD.Senses.' + MorphinChanges.SENSES[Object.keys(MorphinChanges.SENSES)[senseEnumValue - 1]].name)}`; // element 1 = SENSES[0] = LOWLIGHT
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

        const eres = MorphinChanges.changes[this.chosenForm.name].eres || [];
        data.eres = '';
        for (const entry of eres) {
            if (data.eres.length > 0) data.eres += ', ';
            if (typeof(entry) === 'string') {
                data.eres += entry;
            }
            else {
                data.eres += entry.types[0].charAt(0).toUpperCase() + entry.types[0].slice(1) + ' ' + entry.amount;
            }
        }
        if (data.eres.length === 0) data.eres = 'None';
        this.eres = eres;

        data.dv = MorphinChanges.changes[this.chosenForm.name].dv?.join(', ') || 'None';
        this.dv = MorphinChanges.changes[this.chosenForm.name].dv || [];

        if (this.level >= 3) {
            data.di = MorphinChanges.changes[this.chosenForm.name].di?.join(', ') || 'None';
            this.di = MorphinChanges.changes[this.chosenForm.name].di || [];
        }

        if (this.level === 4) {
            const dr = MorphinChanges.changes[this.chosenForm.name].dr || [];
            data.dr = '';
            for (const entry of dr) {
                if (data.dr.length > 0) data.dr += ', ';
                if (typeof(entry) === 'string') {
                    data.dr += entry;
                }
                else {
                    data.dr += entry.amount + '/';
                    if (entry.types[0].length === 0) {
                        data.dr += '-';
                    }
                    else {
                        data.dr += entry.types[0].charAt(0).toUpperCase() + entry.types[0].slice(1);
                    }
                    if (entry.types[1].length > 0) data.dr += (entry.operator ? ' or ' : ' and ') + entry.types[1].charAt(0).toUpperCase() + entry.types[1].slice(1);
                }
            }
            if (data.dr.length === 0) data.dr = 'None';
            this.dr = dr;
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
     processDr(dr) {
        if (this.level === 4) return super.processDr(dr);
        else return { value: [], custom: '' };
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
        if (this.level >= 3) return di;
        else return { value: [], custom: '' };
    }

    /** @inheritdoc */
    processRegen(regen) {
        return '';
    }

    /** @inheritdoc */
    activateListeners(html) {
        super.activateListeners(html);
    }
}
