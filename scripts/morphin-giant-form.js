import { MightyMorphinApp } from './mighty-morphin.js';
import { MorphinChanges } from './morphin-changes.js';
import { MorphinOptions } from './morphin-options.js';
import { MorphinPolymorphDialog } from './morphin-polymorph-dialog.js';

/**
 * Application for selecting a shape from the Elemental Body spell to change into and then applying that shape to an actor
 */
export class MorphinGiantForm extends MorphinPolymorphDialog {
    /**
     * @inheritdoc
     * @param {number} level The level of elemental body to use 1 - 4
     * @param {string} actorId The id of the actor that will change shape
     * @param {string} source The source of the elemental body effect
     */
    constructor(level, durationLevel, actorId, source, {planarType = null, energizedTypes = null, mutatedType = null} = {}) {
        super(level, durationLevel, actorId, source, {planarType: planarType, energizedTypes: energizedTypes, mutatedType: mutatedType});
        this.spell = level === 1 ? 'giantForm' : 'giantFormII';

        // Add all possible sizes for the given spell level
        switch (level) {
            case 2:
                this.sizes.giant = ['lg', 'huge'];
                break;
            case 1:
                this.sizes.giant = ['lg'];
                break;
        }

        this.shapeOptions = {};
        // Find options to shapeshift into based on the valid size choices above and sort them alphabetically
        this.shapeOptions.giant = MorphinOptions.giant.filter(o => this.sizes.giant.includes(o.size));
        this.shapeOptions.giant.sort((a, b) => { return a.name > b.name ? 1 : -1; });

        this.keepArmor = true;
    }

    /** @inheritdoc */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ['mightyMorphinDialog'],
            popOut: true,
            template: 'modules/pf1-mighty-morphin/templates/giantFormDialog.html',
            id: 'mighty-morphin-giantForm',
            title: game.i18n.localize('MMMOD.UI.GiantDialogName'),
            resizable: false,
            width: 550
        });
    }

    /** @inheritdoc */
    async getData() {
        const data = await super.getData();

        // Set the default size to the largest available animal (default type)
        let defaultSize = this.sizes.giant[this.sizes.giant.length - 1];
        data.giantOptions = this.shapeOptions.giant.filter(o => o.size === defaultSize);
        // Create radio button data for elemental sizes, set the one for the default size as the default checked button
        data.giantSizes = this.sizes.giant.map(o => { return o === defaultSize ? { label: o, size: CONFIG.PF1.actorSizes[o], default: true } : { label: o, size: CONFIG.PF1.actorSizes[o] }; });

        // Get the elemental that will be the first shown in the form dropdown and build the preview of the changes the form will provide
        data.defaultChoice = data.giantOptions[0];
        data.previewHtml = await this.buildPreviewTemplate(data.defaultChoice.name, 'giant');

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
        let newOptions = this.shapeOptions.giant.filter(o => o.size === event.target.value);

        let newHtml = newOptions.map(o => `<option value="${ o.name }">${ o.name }</option>`);
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
        this.chosenForm = this.shapeOptions.giant.find(o => o.name === chosenForm);

        // Process stat changes for polymorphing smaller than small or larger than medium
        data.polymorphBase = '';
        this.polymorphChanges = duplicate(MorphinChanges.changes.polymorphSize[this.actorSize] || {});
        if (!!this.polymorphChanges) {
            for (let i = 0; i < this.polymorphChanges.length; i++) {
                const change = this.polymorphChanges[i];
                if (!!change.target && change.target === 'ability') {
                    if (data.polymorphBase.length > 0) data.polymorphBase += ', ';// comma between entries
                    // text output of the stat (capitalized), and a + in front of positive numbers
                    data.polymorphBase += `${ game.i18n.localize('MMMOD.UI.' + change.subTarget.charAt(0).toUpperCase() + change.subTarget.slice(1)) } ${ (change.value > 0 ? '+' : '') }${ change.value }`;
                }
            }
        }

        // Process stat changes from the spell based on spell level
        data.scoreChanges = '';
        this.changes = duplicate(MorphinChanges.changes[this.spell].giant[this.chosenForm.size].changes);
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
            const element = Object.keys(this.speeds)[i];

            if (this.level === 2 && element === 'swim') {
                this.speeds[element] = Math.min(60, this.speeds[element]);
            }

            if (element === 'fly' || element === 'climb' || element === 'burrow' || (element === 'swim' && this.level ===1)) {
                delete (this.speeds[element]);
                i--;
                continue; // skip this speed
            }

            if (data.speedChanges.length > 1) data.speedChanges += ', ';
            data.speedChanges += `${ game.i18n.localize('MMMOD.UI.' + element) } ${ element === 'fly' ? this.speeds[element].base : this.speeds[element] } ${ game.i18n.localize('MMMOD.UI.ft') }${ element === 'fly' ? ' (' + game.i18n.localize('MMMOD.UI.' + this.speeds[element].maneuverability) + ')' : '' }`;
        }

        // Process the natural attacks
        data.attacks = '';
        let attackList = duplicate(MorphinChanges.changes[this.chosenForm.name].attacks);
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

            let damageDice = attack.diceSize === 0 ? '' : `${ attack.diceCount }d${ attack.diceSize }`;
            if (attack.nonCrit) damageDice += (!!damageDice.length ? ` ${ game.i18n.localize('MMMOD.UI.Plus') } ` : '') + `${ attack.nonCrit.formula } ${!!attack.nonCrit.type.values.toString() ? 
                game.i18n.localize('MMMOD.DamageTypes.' + attack.nonCrit.type.values.toString()) : game.i18n.localize('MMMOD.DamageTypes.' + attack.nonCrit.type.custom)}`;
            if (data.attacks.length > 0) data.attacks += ', ';
            data.attacks += `${ attack.count > 1 ? attack.count + ' ' : '' }${ game.i18n.localize('MMMOD.Attacks.' + attack.name) } (${ !!damageDice ? damageDice : '0' }${ !!attackSpecial ? ` ${ game.i18n.localize('MMMOD.UI.Plus') } ` + attackSpecial : '' })`;
        }
        if (!data.attacks.length) data.attacks = game.i18n.localize('MMMOD.UI.None');

        // Process special attacks
        data.specialAttacks = '';
        let specialAttackList = duplicate(MorphinChanges.changes[this.chosenForm.name].specialAttack || []);
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

            let damageDice = specialAttack.diceSize === 0 ? '' : `${ specialAttack.diceCount }d${ specialAttack.diceSize }`;
            if (specialAttack.nonCrit) damageDice += (!!damageDice.length ? ` ${ game.i18n.localize('MMMOD.UI.Plus') } ` : '') + `${ specialAttack.nonCrit.formula } ${!!specialAttack.nonCrit.type.values.toString() ?
                game.i18n.localize('MMMOD.DamageTypes.' + specialAttack.nonCrit.type.values.toString()) : game.i18n.localize('MMMOD.DamageTypes.' + specialAttack.nonCrit.type.custom)}`;
            if (data.specialAttacks.length > 0) data.specialAttacks += ', ';
            data.specialAttacks += `${ specialAttack.count > 1 ? specialAttack.count + ' ' : '' }${ game.i18n.localize('MMMOD.Attacks.' + specialAttack.name) } (${ !!damageDice ? damageDice : '0' }${ !!attackSpecial ? ` ${ game.i18n.localize('MMMOD.UI.Plus') } ` + attackSpecial : '' })`;
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
            const element = this.special[i];

            if (data.special === game.i18n.localize('MMMOD.UI.None')) data.special = '';
            if (data.special.length > 0) data.special += ', ';
            data.special += game.i18n.localize('MMMOD.Attacks.' + element);
        }

        const eres = duplicate(MorphinChanges.changes[this.chosenForm.name].eres || []);
        data.eres = '';
        for (const entry of eres) {
            if (data.eres.length > 0) data.eres += ', ';
            if (typeof(entry) === 'string') {
                data.eres += entry;
            }
            else {
                if (this.level === 1) entry.amount = Math.min(20, entry.amount);
                data.eres += entry.types[0].charAt(0).toUpperCase() + entry.types[0].slice(1) + ' ' + entry.amount;
            }
        }
        this.eres = eres;

        const di = duplicate(MorphinChanges.changes[this.chosenForm.name].di || []);
        if (this.level === 1) {
            for (const immunity of di) {
                if (data.eres.length > 0) data.eres += ', ';
                data.eres += immunity.charAt(0).toUpperCase() + immunity.slice(1) + ' 20';
                this.eres.push({ amount: 20, operator: true, types: [immunity, ''] });
            }
        }
        else {
            data.di = di.map(o => game.i18n.localize('MMMOD.DamageTypes.' + o.replace(/[^A-Za-z0-9]+/g, ''))).join(', ') || game.i18n.localize('MMMOD.UI.None');
            this.di = di;
        }
        if (data.eres.length === 0) data.eres = game.i18n.localize('MMMOD.UI.None');

        const dv = duplicate(MorphinChanges.changes[this.chosenForm.name].dv || []);
        data.dv = dv.map(o => game.i18n.localize('MMMOD.DamageTypes.' + o.replace(/[^A-Za-z0-9]+/g, ''))).join(', ') || game.i18n.localize('MMMOD.UI.None');
        this.dv = dv;

        const regen = duplicate(MorphinChanges.changes[this.chosenForm.name].regen || []);
        data.regen = regen.map(o => '' + Math.min(5, o.value) + ' (' + o.counter.map(c => game.i18n.localize('MMMOD.DamageTypes.' + c)).join(' ' + game.i18n.localize('MMMOD.UI.or') + ' ') + ')').join(', ') || game.i18n.localize('MMMOD.UI.None');
        this.regen = regen.map(o => '' + Math.min(5, o.value) + ' (' + o.counter.map(c => game.i18n.localize('MMMOD.DamageTypes.' + c)).join(' ' + game.i18n.localize('MMMOD.UI.or') + ' ') + ')').join('; ') || '';

        let newHtml = `${ !!data.polymorphBase ? '<p><span class="previewLabel">' + game.i18n.localize('MMMOD.UI.BaseSizeAdjust') + ': </span><span id="polymorphScores">' + data.polymorphBase + '</span></p>' : '' }
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.AbilityScores') }: </span><span id="abilityScores">${ data.scoreChanges }</span></p>
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.Attacks') }: </span><span id="attacks">${ data.attacks }</span></p>
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.SpecialAttacks') }: </span><span id="specialAttacks">${ data.specialAttacks }</span></p>
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.Speeds') }: </span><span id="speeds">${ data.speedChanges }</span></p>
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.Senses') }: </span><span id="senses">${ data.senses }</span></p>
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.SpecialAbilities') }: </span><span id="specials">${ data.special }</span></p>
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.EnergyResistances') }: </span><span id="eres">${ data.eres }</span></p>
            ${ this.level === 2 ? `<p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.DamageImmunities') }: </span><span id="di">${ data.di }</span></p>` : '' }
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.Vulnerabilities') }: </span><span id="dv">${ data.dv }</span></p>
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.Regeneration') }: </span><span id="dr">${ data.regen }</span></p>`;
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
        if (this.level === 2) return di;
        else return { value: [], custom: '' };
    }

    /** @inheritdoc */
    processRegen(regen) {
        return regen;
    }

    /** @inheritdoc */
    activateListeners(html) {
        super.activateListeners(html);
    }
}
