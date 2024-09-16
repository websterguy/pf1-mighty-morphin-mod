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
    constructor(level, durationLevel, actorId, source, nameOverride, {planarType = null, energizedTypes = null, mutatedType = null} = {}) {
        super(level, durationLevel, actorId, source, nameOverride, {planarType: planarType, energizedTypes: energizedTypes, mutatedType: mutatedType});

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

        this.formData = duplicate(MorphinChanges.changes[this.chosenForm.name]);

        // Process stat changes for polymorphing smaller than small or larger than medium
        data.polymorphBase = this.processPolymorphChanges();

        // Process stat changes from the spell based on spell level
        this.changes = duplicate(MorphinChanges.changes[this.spell].magicalBeast[this.chosenForm.size].changes);
        data.scoreChanges = this.processScoreChanges();    

        // Process changes to speed, limited by maximum the spell level allows
        const speeds = this.formData.speed;
        data.speedChanges = this.processSpeeds(speeds);

        // Process the natural attacks
        data.attacks = this.processAttacks();

        // Process special attacks
        this.formData.specialAttack = this.formData.specialAttack?.filter(o => MorphinChanges.allowedSpecials[this.spell][this.level].some(p => o.name === p || o.special?.includes(p))) || [];
        
        this.formData.specialAttack.filter(o => o.name.includes('BreathWeapon') && !!o.nonCrit).forEach(o => {
            const breathDamage = o.nonCrit.formula.split('d');
            let limited = false;
            if (parseInt(breathDamage[0]) >= 12) {
                breathDamage[0] = '12';
                limited = true;
            }
            if (limited && parseInt(breathDamage[1]) > 6) {
                breathDamage[1] = '6';
            }
            if (limited) o.nonCrit.formula = breathDamage.join('d');
        });
        
        data.specialAttacks = this.processSpecialAttacks();

        // Process changes in senses limited by the spell level
        data.senses = this.processSenses();

        // Process special qualities
        data.special = this.processSpecials();

        mergeObject(data, this.processAttributes());
        
        if (this.formData.ci?.includes('poison')) {
            data.saves = '+[[8]] ' + game.i18n.localize('MMMOD.UI.ResistanceVPoison');
            this.contextNotes = [{ text: '+[[8]] ' + game.i18n.localize('MMMOD.UI.ResistanceVPoison'), subTarget: 'allSavingThrows' }];
        }
        else {
            data.saves = game.i18n.localize('MMMOD.UI.None');
        }

        // Build the html preview
        return this.buildHtml(data);
    }

    /** @inheritdoc */
    activateListeners(html) {
        super.activateListeners(html);
    }
}