import { MorphinChanges } from './morphin-changes.js';
import { MorphinOptions } from './morphin-options.js';
import { MorphinPolymorphDialog } from './morphin-polymorph-dialog.js';

/**
 * Application for selecting a shape from the Elemental Body spell to change into and then applying that shape to an actor
 */
export class MorphinFormOfTheDragon extends MorphinPolymorphDialog {
    /**
     * @inheritdoc
     * @param {number} level The level of elemental body to use 1 - 4
     * @param {string} actorId The id of the actor that will change shape
     * @param {string} source The source of the elemental body effect
     */
    constructor(level, durationLevel, actorId, source, {planarType = null, energizedTypes = null, mutatedType = null} = {}) {
        super(level, durationLevel, actorId, source, {planarType: planarType, energizedTypes: energizedTypes, mutatedType: mutatedType});
        this.spell = 'formOfTheDragon';

        // Add all possible sizes for the given spell level
        switch (level) {
            case 3:
                this.sizes.dragon = ['med', 'lg', 'huge'];
                break;
            case 2:
                this.sizes.dragon = ['med', 'lg'];
                break;
            case 1:
                this.sizes.dragon = ['med'];
                break;
        }

        this.shapeOptions = {};
        // Find options to shapeshift into based on the valid size choices above and sort them alphabetically
        this.shapeOptions.dragon = MorphinOptions.dragon.filter(o => this.sizes.dragon.includes(o.size));
        this.shapeOptions.dragon.sort((a, b) => { return a.name > b.name ? 1 : -1; });
    }

    /** @inheritdoc */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ['mightyMorphinDialog'],
            popOut: true,
            template: 'modules/pf1-mighty-morphin/templates/dragonFormDialog.html',
            id: 'mighty-morphin-dragonForm',
            title: game.i18n.localize('MMMOD.UI.DragonDialogName'),
            resizable: false,
            width: 550
        });
    }

    /** @inheritdoc */
    async getData() {
        const data = await super.getData();

        // Set the default size to the largest available animal (default type)
        let defaultSize = this.sizes.dragon[this.sizes.dragon.length - 1];
        data.dragonOptions = this.shapeOptions.dragon.filter(o => o.size === defaultSize);
        // Create radio button data for elemental sizes, set the one for the default size as the default checked button
        data.dragonSizes = this.sizes.dragon.map(o => { return o === defaultSize ? { label: o, size: CONFIG.PF1.actorSizes[o], default: true } : { label: o, size: CONFIG.PF1.actorSizes[o] }; });

        // Get the elemental that will be the first shown in the form dropdown and build the preview of the changes the form will provide
        data.defaultChoice = data.dragonOptions[0];
        data.previewHtml = await this.buildPreviewTemplate(data.defaultChoice.name, 'dragon');

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
        let newOptions = this.shapeOptions.dragon.filter(o => o.size === event.target.value);

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
        this.chosenForm = this.shapeOptions.dragon.find(o => o.name === chosenForm);
        
        this.formData = duplicate(MorphinChanges.changes[this.chosenForm.name]);

        // Process stat changes for polymorphing smaller than small or larger than medium
        data.polymorphBase = this.processPolymorphChanges();

        // Process stat changes from the spell based on spell level
        this.changes = duplicate(MorphinChanges.changes[this.spell].dragon[this.level].changes);
        data.scoreChanges = this.processScoreChanges();        

        // Process changes to speed, limited by maximum the spell level allows
        const speeds = this.formData.speed;
        data.speedChanges = this.processSpeeds(speeds);

        /**
         * change damage of natural attacks for level 1 and 2
         * change damage, charges, and ranges of breath for 1 and 2
         * add DR for 2 and 3
         */
        if (this.level === 1) {
            this.formData.attacks = [
                { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
                { name: 'Claw', diceCount: 1, diceSize: 6, count: 2 },
                { name: 'Wing', diceCount: 1, diceSize: 4, count: 2 }
            ];

            const newBreath = { };
            const oldBreath = this.formData.specialAttack.find(o => o.name === 'BreathWeapon');
            if (oldBreath.templateShape === 'cone') {
                oldBreath.nonCrit.formula = '6d8';
                oldBreath.area = '30-ft cone';
                oldBreath.templateSize = '30';
                oldBreath['charges'] = 1;
                this.formData.effect['Breath'].note.replace(/50/, '30');
            }
            else if (oldBreath.templateShape === 'ray') {
                oldBreath.nonCrit.formula = '6d8';
                oldBreath.area = '60-ft cone';
                oldBreath.templateSize = '60';
                oldBreath['charges'] = 1;
                this.formData.effect['Breath'].note = this.formData.effect['Breath'].note.replace(/100/, '60');
            }
        }
        else if (this.level === 2) {
            this.formData.attacks = [
                { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
                { name: 'Claw', diceCount: 1, diceSize: 8, count: 2 },
                { name: 'Wing', diceCount: 1, diceSize: 6, count: 2 },
                { name: 'TailSlap', diceCount: 1, diceSize: 8, count: 1 }
            ];

            const newBreath = { };
            const oldBreath = this.formData.specialAttack.find(o => o.name === 'BreathWeapon');
            if (oldBreath.templateShape === 'cone') {
                oldBreath.nonCrit.formula = '8d8';
                oldBreath.area = '40-ft cone';
                oldBreath.templateSize = '40';
                oldBreath['charges'] = 2;
                this.formData.effect['Breath'].note.replace(/50/, '40');
            }
            else if (oldBreath.templateShape === 'ray') {
                oldBreath.nonCrit.formula = '8d8';
                oldBreath.area = '80-ft cone';
                oldBreath.templateSize = '80';
                oldBreath['charges'] = 2;
                this.formData.effect['Breath'].note = this.formData.effect['Breath'].note.replace(/100/, '80');
            }

            this.formData.dr = [
                '5/Magic'
            ];
        }
        else if (this.level === 3) {
            this.formData.dr = [
                '10/Magic'
            ];
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