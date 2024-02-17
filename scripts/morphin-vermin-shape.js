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
    constructor(level, durationLevel, actorId, source, {planarType = null, energizedTypes = null, mutatedType = null} = {}) {
        super(level, durationLevel, actorId, source, {planarType: planarType, energizedTypes: energizedTypes, mutatedType: mutatedType});

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

        let newHtml = newOptions.map(o => `<option value="${ o.name }">${ o.name }</option>`);
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

        this.formData = duplicate(MorphinChanges.changes[this.chosenForm.name]);

        // Process stat changes for polymorphing smaller than small or larger than medium
        data.polymorphBase = this.processPolymorphChanges();

        // Process stat changes from the spell based on spell level
        this.changes = duplicate(MorphinChanges.changes[this.spell].vermin[this.chosenForm.size].changes);
        data.scoreChanges = this.processScoreChanges();

        // Process changes to speed, limited by maximum the spell level allows
        const speeds = this.formData.speed;
        data.speedChanges = this.processSpeeds(speeds);

        // Process the natural attacks
        data.attacks = this.processAttacks();

        // Process special attacks
        this.formData.specialAttack = this.formData.specialAttack?.filter(o => MorphinChanges.allowedSpecials[this.spell][this.level].some(p => o.name === p || o.special?.includes(p))) || [];
        data.specialAttacks = this.processSpecialAttacks();

        // Process changes in senses limited by the spell level
        data.senses = this.processSenses();

        // Process special qualities
        data.special = this.processSpecials();
        
        // Extra bonuses
        data.saves = `+${ this.level === 1 ? '2' : '4' } ${ game.i18n.localize('MMMOD.Bonuses.Resistance') } ${ game.i18n.localize('MMMOD.Bonuses.SavesVsMind') }`;
        this.contextNotes.push({ text: `+[[${ this.level === 1 ? '2' : '4' }]] ${ game.i18n.localize('MMMOD.Bonuses.Resistance') } ${ game.i18n.localize('MMMOD.Bonuses.SavesVsMind') }`, subTarget: 'allSavingThrows' });

        mergeObject(data, this.processAttributes());

        // Build the html preview
        return this.buildHtml(data);
    }

    /** @inheritdoc */
    activateListeners(html) {
        super.activateListeners(html);
    }
}