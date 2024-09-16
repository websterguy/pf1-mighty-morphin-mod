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
    constructor(level, durationLevel, actorId, source, nameOverride, {planarType = null, energizedTypes = null, mutatedType = null} = {}) {
        super(level, durationLevel, actorId, source, nameOverride, {planarType: planarType, energizedTypes: energizedTypes, mutatedType: mutatedType});
        this.spell = 'giantForm';

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
        
        this.formData = duplicate(MorphinChanges.changes[this.chosenForm.name]);

        // Process stat changes for polymorphing smaller than small or larger than medium
        data.polymorphBase = this.processPolymorphChanges();

        // Process stat changes from the spell based on spell level
        this.changes = duplicate(MorphinChanges.changes[this.spell].giant[this.level].changes);
        data.scoreChanges = this.processScoreChanges();        

        // Process changes to speed, limited by maximum the spell level allows
        const speeds = this.formData.speed;
        data.speedChanges = this.processSpeeds(speeds);

        // Process the natural attacks
        let rendEffect = !!this.formData.effect ? this.formData.effect['Rend'] || null : null;

        if (!!rendEffect) {
            const damageRoll = rendEffect.note.match(/sizeRoll\((?<dice>\d+), (?<faces>\d+)/);
            let diceCount = parseInt(damageRoll.groups['dice']);
            let diceSize = parseInt(damageRoll.groups['faces']);
            let limited = false;
            if (parseInt(diceCount) >= 2) {
                diceCount = '2';
                limited = true;
            }
            if (limited && this.level === 1 && parseInt(diceSize) > 6) {
                diceSize = '6';
            }
            else if (limited && this.level === 2 && parseInt(diceSize) > 8) {
                diceSize = '8';
            }

            if (limited) rendEffect.note = rendEffect.note.replace(/sizeRoll\(\d+, \d+,/, `sizeRoll(${diceCount}, ${diceSize},`);
        }

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