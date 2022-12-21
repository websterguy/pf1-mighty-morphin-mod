import { MightyMorphinApp } from './mighty-morphin.js';
import { MorphinChanges } from './morphin-changes.js';
import { MorphinOptions } from './morphin-options.js';

/**
 * Application shared function with all polymorph effect dialogs
 */
export class MorphinPolymorphDialog extends FormApplication {
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
        this.actorSize = game.actors.get(actorId).system.traits.size;
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
     */
    async applyChanges() { }

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
            await this.updateFormChoices(event, $('#formSelect')[0], $('input[name="typeSelect"]:checked')[0].value);
            $('#changePreview')[0].innerHTML = await this.buildPreviewTemplate($('#formSelect')[0].value, $('input[name="typeSelect"]:checked')[0].value);
        });

        // form type radio button changed (animal/magical beast). Update allowed sizes for this spell level, update the form choices, update preview
        $('#typeSelect').on('change', async (event) => {
            await this.updateSizeChoices(event, $('#sizeSelect')[0]);
            await this.updateFormChoices({ target: { value: 'med' } }, $('#formSelect')[0], $('input[name="typeSelect"]:checked')[0].value);
            $('#changePreview')[0].innerHTML = await this.buildPreviewTemplate($('#formSelect')[0].value, $('input[name="typeSelect"]:checked')[0].value);
        });

        // selected form changed, update the preview
        $('#formSelect').on('change', async (event) => {
            $('#changePreview')[0].innerHTML = await this.buildPreviewTemplate($('#formSelect')[0].value, $('input[name="typeSelect"]:checked')[0].value);
        });

        // Submit clicked, apply to the actor
        $('#submitButton').on('click', async (event) => await this.applyChanges(event, $('#formSelect')[0].value, $('input[name="typeSelect"]:checked')[0].value));
    }
}