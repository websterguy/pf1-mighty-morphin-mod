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
    constructor(level, durationLevel, actorId, source, nameOverride, {planarType = null, energizedTypes = null, mutatedType = null} = {}) {
        super(level, durationLevel, actorId, source, nameOverride, {planarType: planarType, energizedTypes: energizedTypes, mutatedType: mutatedType});

        this.spell = 'beastShape';

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
     * @param {string} chosenForm The name of the form chosen in the dropdown
     * @param {string} chosenType The type of creature (animal or magical beast)
     * @returns {string} HTML containing preview of all the changes to be made to the actor
     */
    async buildPreviewTemplate(chosenForm, chosenType) {
        let data = {};
        this.chosenForm = this.shapeOptions[chosenType].find(o => o.name === chosenForm);
        this.formData = foundry.utils.duplicate(MorphinChanges.changes[this.chosenForm.name]);

        // Process stat changes for polymorphing smaller than small or larger than medium
        data.polymorphBase = this.processPolymorphChanges();

        // Process stat changes from the spell based on spell level
        this.changes = foundry.utils.duplicate(MorphinChanges.changes[this.spell][chosenType][this.chosenForm.size].changes);
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

        mergeObject(data, this.processAttributes());

        // Build the html preview
        return this.buildHtml(data);
    }

    /** @inheritdoc */
    activateListeners(html) {
        super.activateListeners(html);
    }
}