import { MightyMorphinApp } from './mighty-morphin.js';
import { MorphinChanges } from './morphin-changes.js';
import { MorphinOptions } from './morphin-options.js';
import { MorphinPolymorphDialog } from './morphin-polymorph-dialog.js';

/**
 * Application for selecting a shape from the Vermin Shape spell to change into and then applying that shape to an actor
 */
export class MorphinVerminShape extends MorphinPolymorphDialog {
    /**
     * @inheritdoc
     * @param {number} level The level of vermin shape to use 1 - 2
     * @param {string} actorId The id of the actor that will change shape
     * @param {string} source The source of the vermin shape effect
     */
    constructor(level, durationLevel, actorId, source, {planarType = null} = {}) {
        super(level, durationLevel, actorId, source, {planarType: planarType});

        this.spell = 'verminShape';

        // Add all possible sizes for the given spell level
        switch (level) {
            case 2:
                this.sizes.vermin = ['tiny', 'sm', 'med', 'lg'];
                break;
            case 1:
                this.sizes.vermin = ['sm', 'med'];
                break;
        }

        // Find options to shapeshift into based on the valid size choices above and sort them alphabetically
        this.shapeOptions.vermin = MorphinOptions.vermin.filter(o => this.sizes.vermin.includes(o.size));
        this.shapeOptions.vermin.sort((a, b) => { return a.name > b.name ? 1 : -1; });
    }

    /** @inheritdoc */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ['mightyMorphinDialog'],
            popOut: true,
            template: 'modules/pf1-mighty-morphin/templates/verminShapeDialog.html',
            id: 'mighty-morphin-verminShape',
            title: game.i18n.localize('MMMOD.UI.VerminDialogName'),
            resizable: false,
            width: 550
        });
    }

    /** @inheritdoc */
    async getData() {
        const data = await super.getData();

        // Set the default size to the largest available vermin (default type)
        let defaultSize = this.sizes.vermin[this.sizes.vermin.length - 1];
        data.verminOptions = this.shapeOptions.vermin.filter(o => o.size === defaultSize);

        // Create radio button data for vermin sizes, set the one for the default size as the default checked button
        data.verminSizes = this.sizes.vermin.map(o => { return o === defaultSize ? { label: o, size: CONFIG.PF1.actorSizes[o], default: true } : { label: o, size: CONFIG.PF1.actorSizes[o] }; });

        // Get the vermin that will be the first shown in the form dropdown and build the preview of the changes the form will provide
        data.defaultChoice = data.verminOptions[0];
        data.previewHtml = await this.buildPreviewTemplate(data.defaultChoice.name, 'vermin');

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
     */
    async updateFormChoices(event, formSelect) {
        let newOptions = this.shapeOptions.vermin.filter(o => o.size === event.target.value);

        let newHtml = newOptions.map(o => `<option value="${o.name}">${o.name}</option>`);
        formSelect.innerHTML = newHtml;
    }

    /**
     * Processes the changes from the selected vermin form into a readable preview display html. In the process it validates the changes based on the level of the spell
     * 
     * @param {string} chosenForm The name of the form chosen in the dropdown
     * @returns {string} HTML containing preview of all the changes to be made to the actor
     */
    async buildPreviewTemplate(chosenForm) {
        let data = {};
        this.chosenForm = this.shapeOptions.vermin.find(o => o.name === chosenForm);

        // Process stat changes for polymorphing smaller than small or larger than medium
        data.polymorphBase = '';
        this.polymorphChanges = MorphinChanges.changes.polymorphSize[this.actorSize] || {};
        if (!!this.polymorphChanges) {
            for (let i = 0; i < this.polymorphChanges.length; i++) {
                const change = this.polymorphChanges[i];
                if (!!change.target && change.target === 'ability') {
                    if (data.polymorphBase.length > 0) data.polymorphBase += ', '; // comma between entries
                    // text output of the stat (capitalized), and a + in front of positive numbers
                    data.polymorphBase += `${game.i18n.localize('MMMOD.UI.' + change.subTarget.charAt(0).toUpperCase() + change.subTarget.slice(1))} ${(change.value > 0 ? '+' : '')}${change.value}`;
                }
            }
        }

        // Process stat changes from the spell based on spell level
        data.scoreChanges = '';
        this.changes = duplicate(MorphinChanges.changes.verminShape.vermin[this.chosenForm.size].changes);
        for (let i = 0; i < this.changes.length; i++) {
            const change = this.changes[i];

            if (!!change.target && change.target === 'ability') { // stat change
                if (data.scoreChanges.length > 0) data.scoreChanges += ', ';
                data.scoreChanges += `${game.i18n.localize('MMMOD.UI.' + change.subTarget.charAt(0).toUpperCase() + change.subTarget.slice(1))} ${(change.value > 0 ? '+' : '')}${change.value}`;
            }
            else if (!change.target && change.subTarget == 'nac') { // natural AC change
                if (data.scoreChanges.length > 0) data.scoreChanges += ', ';
                data.scoreChanges += `${game.i18n.localize('MMMOD.UI.NaturalAC')} ${(change.value > 0 ? '+' : '')}${change.value}`;
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
                }
            }

            if (speedName === 'fly') {
                switch (this.level) {
                    case 1:
                        this.speeds[speedName].base = Math.min(30, this.speeds[speedName].base);
                        if (MorphinChanges.flightManeuverability.indexOf('average') < MorphinChanges.flightManeuverability.indexOf(this.speeds[speedName].maneuverability)) this.speeds[speedName].maneuverability = 'average';
                        break;
                    case 2:
                        this.speeds[speedName].base = Math.min(60, this.speeds[speedName].base);
                        if (MorphinChanges.flightManeuverability.indexOf('good') < MorphinChanges.flightManeuverability.indexOf(this.speeds[speedName].maneuverability)) this.speeds[speedName].maneuverability = 'average';
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
                }
            }

            if (speedName === 'burrow') {
                switch (this.level) {
                    case 1:
                        delete (this.speeds[speedName]);
                        i--;
                        continue;
                    case 2:
                        this.speeds[speedName] = Math.min(30, this.speeds[speedName]);
                        break;
                }
            }

            if (data.speedChanges.length > 1) data.speedChanges += ', ';
            data.speedChanges += `${game.i18n.localize('MMMOD.UI.' + speedName)} ${speedName === 'fly' ? this.speeds[speedName].base : this.speeds[speedName]}
                ${game.i18n.localize('MMMOD.UI.ft')}${speedName === 'fly' ? ' (' + game.i18n.localize('MMMOD.UI.' + this.speeds[speedName].maneuverability) + ')' : ''}`;
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
            let damageDice = attack.diceSize === 0 ? '' : `${attack.diceCount}d${attack.diceSize}`;
            if (attack.nonCrit) damageDice += (!!damageDice.length ? ` ${game.i18n.localize('MMMOD.UI.Plus')} ` : '') + `${attack.nonCrit.formula} ${!!attack.nonCrit.type.values.toString() ?
                game.i18n.localize('MMMOD.DamageTypes.' + attack.nonCrit.type.values.toString()) : game.i18n.localize('MMMOD.DamageTypes.' + attack.nonCrit.type.custom)}`;
            if (data.attacks.length > 0) data.attacks += ', ';
            data.attacks += `${attack.count > 1 ? attack.count + ' ' : ''}${game.i18n.localize('MMMOD.Attacks.' + attack.name)} (${!!damageDice ? damageDice : '0'}${!!attackSpecial ? ` ${game.i18n.localize('MMMOD.UI.Plus')} ` + attackSpecial : ''})`;
        }
        if (!data.attacks.length) data.attacks = game.i18n.localize('MMMOD.UI.None');

        // Process special attacks
        data.specialAttacks = '';
        let specialAttackList = MorphinChanges.changes[this.chosenForm.name].specialAttack || [];
        for (let i = 0; i < specialAttackList.length; i++) {
            const specialAttack = specialAttackList[i];

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
                let damageDice = specialAttack.diceSize === 0 ? '' : `${specialAttack.diceCount}d${specialAttack.diceSize}`;
                if (specialAttack.nonCrit) damageDice += (!!damageDice.length ? ` ${game.i18n.localize('MMMOD.UI.Plus')} ` : '') + `${specialAttack.nonCrit.formula} ${!!specialAttack.nonCrit.type.values.toString() ? 
                    game.i18n.localize('MMMOD.DamageTypes.' + specialAttack.nonCrit.type.values.toString()) : game.i18n.localize('MMMOD.DamageTypes.' + specialAttack.nonCrit.type.custom)}`;
                data.specialAttacks += `${specialAttack.count > 1 ? specialAttack.count + ' ' : ''}${game.i18n.localize('MMMOD.Attacks.' + specialAttack.name)} (${!!damageDice ? damageDice : '0'}${!!attackSpecial ? ` ${game.i18n.localize('MMMOD.UI.Plus')} ` + attackSpecial : ''})`;
            }
        }
        if (!data.specialAttacks.length) data.specialAttacks = game.i18n.localize('MMMOD.UI.None');

        // Process changes in senses limited by the spell level
        this.senses = duplicate(MorphinChanges.changes[this.chosenForm.name].senses);
        data.senses = !!this.senses.length ? '' : game.i18n.localize('MMMOD.UI.None');
        for (let i = 0; i < this.senses.length; i++) {
            const senseEnumValue = this.senses[i];
            // limit darkvision above 60
            if (senseEnumValue >= MorphinChanges.SENSES.DARKVISION70.value && senseEnumValue <= MorphinChanges.SENSES.DARKVISION90.value) {
                this.senses[i] = Math.min(senseEnumValue, MorphinChanges.SENSES.DARKVISION60.value);
            }

            // limit tremorsense
            if (senseEnumValue >= MorphinChanges.SENSES.TREMORSENSE10.value && senseEnumValue <= MorphinChanges.SENSES.TREMORSENSE60.value) {
                if (this.level < 2) {
                    delete (this.senses[i]);
                    continue;
                }
                else if (this.level === 2) this.senses[i] = Math.min(senseEnumValue, MorphinChanges.SENSES.TREMORSENSE30.value);
            }

            if (!!senseEnumValue) {
                if (data.senses.length > 0) data.senses += ', ';
                data.senses += `${game.i18n.localize('MMMOD.Senses.' + MorphinChanges.SENSES[Object.keys(MorphinChanges.SENSES)[senseEnumValue - 1]].name)}`; // enum value 1 = SENSES[0] = LOWLIGHT
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
        
        // Extra bonuses
        data.bonuses = `+${this.level === 1 ? '2' : '4'} ${game.i18n.localize('MMMOD.Bonuses.Resistance')} ${game.i18n.localize('MMMOD.Bonuses.SavesVsMind')}`;
        this.contextNotes.push({text: `+[[${this.level === 1 ? '2' : '4'}]] ${game.i18n.localize('MMMOD.Bonuses.Resistance')} ${game.i18n.localize('MMMOD.Bonuses.SavesVsMind')}`, subTarget: 'allSavingThrows'});

        // Build the html preview
        let newHtml = `${!!data.polymorphBase ? '<p><span class="previewLabel">' + game.i18n.localize('MMMOD.UI.BaseSizeAdjust') + ': </span><span id="polymorphScores">' + data.polymorphBase + '</span></p>' : ''}
            <p><span class="previewLabel">${game.i18n.localize('MMMOD.UI.AbilityScores')}: </span><span id="abilityScores">${data.scoreChanges}</span></p>
            <p><span class="previewLabel">${game.i18n.localize('MMMOD.UI.Attacks')}: </span><span id="attacks">${data.attacks}</span></p>
            <p><span class="previewLabel">${game.i18n.localize('MMMOD.UI.SpecialAttacks')}: </span><span id="specialAttacks">${data.specialAttacks}</span></p>
            <p><span class="previewLabel">${game.i18n.localize('MMMOD.UI.Speeds')}: </span><span id="speeds">${data.speedChanges}</span></p>
            <p><span class="previewLabel">${game.i18n.localize('MMMOD.UI.Senses')}: </span><span id="senses">${data.senses}</span></p>
            <p><span class="previewLabel">${game.i18n.localize('MMMOD.UI.SpecialAbilities')}: </span><span id="specials">${data.special}</span></p>
            <p><span class="previewLabel">${game.i18n.localize('MMMOD.UI.OtherBonuses')}: </span><span id="specials">${data.bonuses}</span></p>`;

        return newHtml;
    }

    /** @inheritdoc */
    processDr(dr) {
        return { value: [], custom: '' };
    }

    /** @inheritdoc */
    processEres(eres) {
        return { value: [], custom: '' };
    }

    /** @inheritdoc */
    processDv(dv) {
        return { value: [], custom: '' };
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
    activateListeners(html) {
        super.activateListeners(html);
    }
}
