import { MorphinChanges } from './morphin-changes.js';
import { MorphinBeastShape } from './morphin-beast-shape.js';
import { MorphinMagicalBeastShape } from './morphin-magical-beast-shape.js';
import { MorphinElementalBody } from './morphin-elemental-body.js';
import { MorphinPlantShape } from './morphin-plant-shape.js';
import { MorphinVerminShape } from './morphin-vermin-shape.js';
import { MorphinShifterShape } from './morphin-shifter-shape.js';
import { MorphinGiantForm } from './morphin-giant-form.js';
import DirectoryPicker from './DirectoryPicker.js';
import { MorphinOptions } from './morphin-options.js';
import { MorphinAlterSelf } from './morphin-alter-self.js';
import { MorphinFormOfTheDragon } from './morphin-form-of-the-dragon.js';

/**
 * Class for functions exposed to users of pf1 system and helpers
 */
export class MightyMorphinApp {

    /**
     * Applies Enlarge Person buff and effects to selected actor
     * 
     * @param {number} [durationLevel=0] The level to be used in the duration calculation for the buff if desired
     * @param {string} [image = null] The file name for a custom image file without the file extension
     */
    static async enlargePerson({ durationLevel = 0, image = null } = { }) {
        let shifter = MightyMorphinApp.getSingleActor(); // Ensure only a single actor is being processed
        let changeData = MorphinChanges.changes.enlargePerson; // get buff data
        const flagSlug = game.i18n.localize('MMMOD.Buffs.EnlargePerson.Name').slugify();

        let existing;
        if (!!shifter.flags['pf1-mighty-morphin']) {
            for (const change of Object.keys(shifter.flags['pf1-mighty-morphin'])) {
                if (MightyMorphinApp.shapeSpells.includes(change) || MightyMorphinApp.otherTransmutations.includes(change)) {
                    existing = change;
                    break;
                }
            }
        }

        if (!!existing) {
            return ui.notifications.warn(`${ shifter.name } ${ game.i18n.localize('MMMOD.EffectWarning') } ${ shifter.flags['pf1-mighty-morphin'][existing].source }`);
        }

        let buff = shifter.items.find(o => o.type === 'buff' && o.name === game.i18n.localize('MMMOD.Buffs.EnlargePerson.Name'));
        let shifterSize = shifter.system.traits.size;

        // Find the size the number of steps away from current, number of steps provided by changeData
        let newSize = MightyMorphinApp.getNewSize(shifterSize, changeData.size);

        let durationData = { };
        if (!!durationLevel) {
            let duration = durationLevel;
            durationData = { value: duration.toString(), units: 'minute' };
        }

        // Create the buff if it doesn't exist, otherwise toggle it on
        if (!buff) {
            // Create template buff Item
            let buffData = duplicate(game.system.template.Item.buff);
            for (let t of buffData.templates) {
                mergeObject(buffData, duplicate(game.system.template.Item.templates[t]));
            }
            delete buffData.templates;
            if (game.settings.get('pf1-mighty-morphin', 'createScriptCall')) {
                let scriptCall = duplicate(globalThis.pf1.components.ItemScriptCall.defaultData);
                scriptCall.category = 'toggle';
                scriptCall.name = game.i18n.localize('MMMOD.DeactivateScriptCallName');
                scriptCall.value = 'if (!state && !!actor.flags["pf1-mighty-morphin"][item.name.slugify()]) game.mightyMorphin.revert({actor: actor, buff: item.name});';
                buffData.scriptCalls.push(scriptCall);
            }

            buff = await Item.create({ img: 'systems/pf1/icons/skills/yellow_14.jpg', name: game.i18n.localize('MMMOD.Buffs.EnlargePerson.Name'), type: 'buff', system: buffData }, { temporary: true });

            let strChange = 0;
            for (let i = 0; i < changeData.changes.length; i++) {
                const change = changeData.changes[i];

                if (!!change.target && change.target === 'str') strChange += parseInt(change.formula);
            }

            let carryBonusChanges = MightyMorphinApp.generateCapacityChange(shifter, newSize, strChange);
            let changes = changeData.changes.concat(carryBonusChanges);

            // Create the buff on the actor, change the icon, populate the changes, turn it on
            let buffAdded = await shifter.createEmbeddedDocuments('Item', [buff]);
            await pf1.components.ItemChange.create(changes, {parent: buffAdded[0]});
            await buffAdded[0].update({ 'system.duration': durationData });
            await buffAdded[0].setActive(true);

        }
        else {
            let strChange = 0;
            for (let i = 0; i < changeData.changes.length; i++) {
                const change = changeData.changes[i];

                if (!!change.target && change.target === 'str') strChange += parseInt(change.formula);
            }

            let carryBonusChanges = MightyMorphinApp.generateCapacityChange(shifter, newSize, strChange);
            let changes = changeData.changes.concat(carryBonusChanges);
            
            await buff.update({ 'system.duration': durationData, 'system.changes': [] });
            await pf1.components.ItemChange.create(changes, {parent: buff});
            await buff.setActive(true);

        }

        let armorChangeFlag = [];
        let armorToChange = [];
        // Double armor and shield AC when moving from tiny to small (tiny and below armor AC is half normal)
        if (shifterSize === 'tiny') {
            let armorAndShields = shifter.items.filter(o => o.type === 'equipment' && (o.system.subType === 'armor' || o.system.subType === 'shield'));

            for (let item of armorAndShields) {
                armorChangeFlag.push({ _id: item.id, system: { armor: { value: item.system.armor.value } } }); // store original armor data in flags
                armorToChange.push({ _id: item.id, system: { armor: { value: (item.system.armor.value * 2) } } }); // change to push to actor's item
            }
        }

        // Update all items that were found to need updates
        if (!!armorToChange.length) {
            await shifter.updateEmbeddedDocuments('Item', armorToChange);
        }

        let imageChangedAlready = (!!shifter.flags['pf1-mighty-morphin'] && MightyMorphinApp.nonPolymorphs.includes(Object.keys(shifter.flags['pf1-mighty-morphin'])[0]) && !!Object.values(shifter.flags['pf1-mighty-morphin'])[0].tokenImg);
        let otherSource;
        if (imageChangedAlready) otherSource = Object.keys(shifter.flags['pf1-mighty-morphin'])[0];

        let oldImage, oldProtoImage, newImage, protoImageChange;

        if (!!image) {
            // Find image to change token to if it exists
            newImage = await MightyMorphinApp.findImage(image, true);

            // Prepare data for image change
            if (!!newImage) {
                protoImageChange = !!newImage ? { 'prototypeToken.texture.src': newImage } : { };
                let oldData = await MightyMorphinApp.changeTokenImage(newImage, shifter);
                oldImage = oldData.oldImage;
                oldProtoImage = oldData.oldProtoImage;
                oldProtoImage.token.img = shifter.prototypeToken.texture.src;
            }
        }

        // Update the actor size and store flags
        let updates = { 'system.traits.size': newSize, 'flags.pf1-mighty-morphin': { [flagSlug]: { source: game.i18n.localize('MMMOD.Buffs.EnlargePerson.Name'), buffName: game.i18n.localize('MMMOD.Buffs.EnlargePerson.Name'), size: shifterSize, armor: armorChangeFlag } } };
        if (!!newImage) {
            if (imageChangedAlready) mergeObject(mergeObject(updates, protoImageChange), { ['flags.pf1-mighty-morphin']: { [flagSlug]: { tokenImg: oldImage, protoImg: oldProtoImage }, [otherSource]: { ['tokenImg.img']: newImage, ['protoImg.token.img']: newImage }, originalImage: { tokenImg: shifter.flags['pf1-mighty-morphin'][otherSource].tokenImg, protoImg: shifter.flags['pf1-mighty-morphin'][otherSource].protoImg } } });
            else mergeObject(mergeObject(updates, protoImageChange), { 'flags.pf1-mighty-morphin': { [flagSlug]: { tokenImg: oldImage, protoImg: oldProtoImage } } });
        }
        await shifter.update(updates);
    }

    /**
     * Applies Animal Growth buff and effects to selected actor
     * 
     * @param {number} [durationLevel=0] The level to be used in the duration calculation for the buff if desired
     * @param {string} [image = null] The file name for a custom image file without the file extension
     */
    static async animalGrowth({ durationLevel = 0, image = null } = { }) {
        let shifter = MightyMorphinApp.getSingleActor(); // Ensure only a single actor is being processed
        let changeData = MorphinChanges.changes.animalGrowth; // get buff data
        const flagSlug = game.i18n.localize('MMMOD.Buffs.AnimalGrowth.Name').slugify();

        let existing;
        if (!!shifter.flags['pf1-mighty-morphin']) {
            for (const change of Object.keys(shifter.flags['pf1-mighty-morphin'])) {
                if (MightyMorphinApp.shapeSpells.includes(change) || MightyMorphinApp.otherTransmutations.includes(change)) {
                    existing = change;
                    break;
                }
            }
        }

        if (!!existing) {
            return ui.notifications.warn(`${ shifter.name } ${ game.i18n.localize('MMMOD.EffectWarning') } ${ shifter.flags['pf1-mighty-morphin'][existing].source }`);
        }

        let buff = shifter.items.find(o => o.type === 'buff' && o.name === game.i18n.localize('MMMOD.Buffs.AnimalGrowth.Name'));
        let shifterSize = shifter.system.traits.size;

        // Find the size the number of steps away from current, number of steps provided by changeData
        let newSize = MightyMorphinApp.getNewSize(shifterSize, changeData.size);

        let durationData = { };
        if (!!durationLevel) {
            let duration = durationLevel;
            durationData = { value: duration.toString(), units: 'minute' };
        }


        // Create the buff if it doesn't exist, otherwise toggle it on
        if (!buff) {
            // Create template buff Item
            let buffData = duplicate(game.system.template.Item.buff);
            for (let t of buffData.templates) {
                mergeObject(buffData, duplicate(game.system.template.Item.templates[t]));
            }
            delete buffData.templates;
            if (game.settings.get('pf1-mighty-morphin', 'createScriptCall')) {
                let scriptCall = duplicate(globalThis.pf1.components.ItemScriptCall.defaultData);
                scriptCall.category = 'toggle';
                scriptCall.name = game.i18n.localize('MMMOD.DeactivateScriptCallName');
                scriptCall.value = 'if (!state && !!actor.flags["pf1-mighty-morphin"][item.name.slugify()]) game.mightyMorphin.revert({actor: actor, buff: item.name});';
                buffData.scriptCalls.push(scriptCall);
            }

            buff = await Item.create({ img: 'systems/pf1/icons/spells/wild-orange-3.jpg', name: game.i18n.localize('MMMOD.Buffs.AnimalGrowth.Name'), type: 'buff', system: buffData }, { temporary: true });

            let strChange = 0;
            for (let i = 0; i < changeData.changes.length; i++) {
                const change = changeData.changes[i];

                if (!!change.target && change.target === 'str') strChange += parseInt(change.formula);
            }

            let carryBonusChanges = MightyMorphinApp.generateCapacityChange(shifter, newSize, strChange);
            let changes = changeData.changes.concat(carryBonusChanges);

            // Create the buff on the actor, change the icon, populate the changes, turn it on
            let buffAdded = await shifter.createEmbeddedDocuments('Item', [buff]);
            await pf1.components.ItemChange.create(changes, {parent: buffAdded[0]});
            await buffAdded[0].update({ 'system.duration': durationData });
            await buffAdded[0].setActive(true);

        }
        else {
            let strChange = 0;
            for (let i = 0; i < changeData.changes.length; i++) {
                const change = changeData.changes[i];

                if (!!change.target && change.target === 'str') strChange += parseInt(change.formula);
            }

            let carryBonusChanges = MightyMorphinApp.generateCapacityChange(shifter, newSize, strChange);
            let changes = changeData.changes.concat(carryBonusChanges);
            
            await buff.update({ 'system.duration': durationData, 'system.changes': [] });
            await pf1.components.ItemChange.create(changes, {parent: buff});
            await buff.setActive(true);

        }

        let armorChangeFlag = [];
        let armorToChange = [];
        // Double armor and shield AC when moving from tiny to small (tiny and below armor AC is half normal)
        if (shifterSize === 'tiny') {
            let armorAndShields = shifter.items.filter(o => o.type === 'equipment' && (o.system.subType === 'armor' || o.system.subType === 'shield'));

            for (let item of armorAndShields) {
                armorChangeFlag.push({ _id: item.id, system: { armor: { value: item.system.armor.value } } }); // store original armor data in flags
                armorToChange.push({ _id: item.id, system: { armor: { value: (item.system.armor.value * 2) } } }); // change to push to actor's item
            }
        }

        let imageChangedAlready = (!!shifter.flags['pf1-mighty-morphin'] && MightyMorphinApp.nonPolymorphs.includes(Object.keys(shifter.flags['pf1-mighty-morphin'])[0]) && !!Object.values(shifter.flags['pf1-mighty-morphin'])[0].tokenImg);
        let otherSource;
        if (imageChangedAlready) otherSource = Object.keys(shifter.flags['pf1-mighty-morphin'])[0];

        let oldImage, oldProtoImage, newImage, protoImageChange;

        if (!!image) {
            // Find image to change token to if it exists
            newImage = await MightyMorphinApp.findImage(image, true);

            // Prepare data for image change
            if (!!newImage) {
                protoImageChange = !!newImage ? { 'prototypeToken.texture.src': newImage } : { };
                let oldData = await MightyMorphinApp.changeTokenImage(newImage, shifter);
                oldImage = oldData.oldImage;
                oldProtoImage = oldData.oldProtoImage;
                oldProtoImage.token.img = shifter.prototypeToken.texture.src;
            }
        }

        // Update all items that were found to need updates
        if (!!armorToChange.length) {
            await shifter.updateEmbeddedDocuments('Item', armorToChange);
        }

        // Update the actor size and store flags
        let updates = { 'system.traits.size': newSize, 'flags.pf1-mighty-morphin': { [flagSlug]: { source: game.i18n.localize('MMMOD.Buffs.AnimalGrowth.Name'), buffName: game.i18n.localize('MMMOD.Buffs.AnimalGrowth.Name'), size: shifterSize, armor: armorChangeFlag } } };
        if (!!newImage) {
            if (imageChangedAlready) mergeObject(mergeObject(updates, protoImageChange), { ['flags.pf1-mighty-morphin']: { [flagSlug]: { tokenImg: oldImage, protoImg: oldProtoImage }, [otherSource]: { ['tokenImg.img']: newImage, ['protoImg.token.img']: newImage }, originalImage: { tokenImg: shifter.flags['pf1-mighty-morphin'][otherSource].tokenImg, protoImg: shifter.flags['pf1-mighty-morphin'][otherSource].protoImg } } });
            else mergeObject(mergeObject(updates, protoImageChange), { 'flags.pf1-mighty-morphin': { [flagSlug]: { tokenImg: oldImage, protoImg: oldProtoImage } } });
        }
        await shifter.update(updates);
    }

    /**
     * Applies Legendary Proportions buff and effects to selected actor
     * 
     * @param {number} [durationLevel=0] The level to be used in the duration calculation for the buff if desired
     * @param {string} [image = null] The file name for a custom image file without the file extension
     */
    static async legendaryProportions({ durationLevel = 0, image = null } = { }) {
        let shifter = MightyMorphinApp.getSingleActor(); // Ensure only a single actor is being processed
        let changeData = MorphinChanges.changes.legendaryProportions; // get buff data
        const flagSlug = game.i18n.localize('MMMOD.Buffs.LegendaryProportions.Name').slugify();

        let existing;
        if (!!shifter.flags['pf1-mighty-morphin']) {
            for (const change of Object.keys(shifter.flags['pf1-mighty-morphin'])) {
                if (MightyMorphinApp.shapeSpells.includes(change) || MightyMorphinApp.otherTransmutations.includes(change)) {
                    existing = change;
                    break;
                }
            }
        }

        if (!!existing) {
            return ui.notifications.warn(`${ shifter.name } ${ game.i18n.localize('MMMOD.EffectWarning') } ${ shifter.flags['pf1-mighty-morphin'][existing].source }`);
        }

        let buff = shifter.items.find(o => o.type === 'buff' && o.name === game.i18n.localize('MMMOD.Buffs.LegendaryProportions.Name'));
        let shifterSize = shifter.system.traits.size;
        
        let newSize = MightyMorphinApp.getNewSize(shifterSize, changeData.size);

        let durationData = { };
        if (!!durationLevel) {
            let duration = durationLevel;
            durationData = { value: duration.toString(), units: 'minute' };
        }

        // Create the buff if it doesn't exist, otherwise toggle it on
        if (!buff) {
            // Create template buff Item
            let buffData = duplicate(game.system.template.Item.buff);
            for (let t of buffData.templates) {
                mergeObject(buffData, duplicate(game.system.template.Item.templates[t]));
            }
            delete buffData.templates;
            if (game.settings.get('pf1-mighty-morphin', 'createScriptCall')) {
                let scriptCall = duplicate(globalThis.pf1.components.ItemScriptCall.defaultData);
                scriptCall.category = 'toggle';
                scriptCall.name = game.i18n.localize('MMMOD.DeactivateScriptCallName');
                scriptCall.value = 'if (!state && !!actor.flags["pf1-mighty-morphin"][item.name.slugify()]) game.mightyMorphin.revert({actor: actor, buff: item.name});';
                buffData.scriptCalls.push(scriptCall);
            }

            buff = await Item.create({ img: 'systems/pf1/icons/skills/yellow_14.jpg', name: game.i18n.localize('MMMOD.Buffs.LegendaryProportions.Name'), type: 'buff', system: buffData }, { temporary: true });
            
            let strChange = 0;
            for (let i = 0; i < changeData.changes.length; i++) {
                const change = changeData.changes[i];

                if (!!change.target && change.target === 'str') strChange += parseInt(change.formula);
            }

            let carryBonusChanges = MightyMorphinApp.generateCapacityChange(shifter, newSize, strChange);
            let changes = changeData.changes.concat(carryBonusChanges);

            // Create the buff on the actor, change the icon, populate the changes, turn it on
            let buffAdded = await shifter.createEmbeddedDocuments('Item', [buff]);
            await pf1.components.ItemChange.create(changes, {parent: buffAdded[0]});
            await buffAdded[0].update({ 'system.duration': durationData });
            await buffAdded[0].setActive(true);

        }
        else {
            let strChange = 0;
            for (let i = 0; i < changeData.changes.length; i++) {
                const change = changeData.changes[i];

                if (!!change.target && change.target === 'str') strChange += parseInt(change.formula);
            }

            let carryBonusChanges = MightyMorphinApp.generateCapacityChange(shifter, newSize, strChange);
            let changes = changeData.changes.concat(carryBonusChanges);
            
            await buff.update({ 'system.duration': durationData, 'system.changes': [] });
            await pf1.components.ItemChange.create(changes, {parent: buff});
            await buff.setActive(true);

        }

        let armorChangeFlag = [];
        let armorToChange = [];
        // Double armor and shield AC when moving from tiny to small (tiny and below armor AC is half normal)
        if (shifterSize === 'tiny') {
            let armorAndShields = shifter.items.filter(o => o.type === 'equipment' && (o.system.subType === 'armor' || o.system.subType === 'shield'));

            for (let item of armorAndShields) {
                armorChangeFlag.push({ _id: item.id, system: { armor: { value: item.system.armor.value } } }); // store original armor data in flags
                armorToChange.push({ _id: item.id, system: { armor: { value: (item.system.armor.value * 2) } } }); // change to push to actor's item
            }
        }

        // Update all items that were found to need updates
        if (!!armorToChange.length) {
            await shifter.updateEmbeddedDocuments('Item', armorToChange);
        }

        let oldDR = shifter.system.traits.dr.custom;
        let newDR = (!!oldDR ? oldDR + '; ' : '') + '10/adamantine';

        let imageChangedAlready = (!!shifter.flags['pf1-mighty-morphin'] && MightyMorphinApp.nonPolymorphs.includes(Object.keys(shifter.flags['pf1-mighty-morphin'])[0]) && !!Object.values(shifter.flags['pf1-mighty-morphin'])[0].tokenImg);
        let otherSource;
        if (imageChangedAlready) otherSource = Object.keys(shifter.flags['pf1-mighty-morphin'])[0];

        let oldImage, oldProtoImage, newImage, protoImageChange;

        if (!!image) {
            // Find image to change token to if it exists
            newImage = await MightyMorphinApp.findImage(image, true);

            // Prepare data for image change
            if (!!newImage) {
                protoImageChange = !!newImage ? { 'prototypeToken.texture.src': newImage } : { };
                let oldData = await MightyMorphinApp.changeTokenImage(newImage, shifter);
                oldImage = oldData.oldImage;
                oldProtoImage = oldData.oldProtoImage;
                oldProtoImage.token.img = shifter.prototypeToken.texture.src;
            }
        }

        // Update the actor size and store flags
        let updates = { 'system.traits.size': newSize, 'system.traits.dr.custom': newDR, 'flags.pf1-mighty-morphin': { [flagSlug]: { source: game.i18n.localize('MMMOD.Buffs.LegendaryProportions.Name'), buffName: game.i18n.localize('MMMOD.Buffs.LegendaryProportions.Name'), size: shifterSize, armor: armorChangeFlag, data: { traits: { dr: { custom: oldDR } } } } } };
        if (!!newImage) {
            if (imageChangedAlready) mergeObject(mergeObject(updates, protoImageChange), { ['flags.pf1-mighty-morphin']: { [flagSlug]: { tokenImg: oldImage, protoImg: oldProtoImage }, [otherSource]: { ['tokenImg.img']: newImage, ['protoImg.token.img']: newImage }, originalImage: { tokenImg: shifter.flags['pf1-mighty-morphin'][otherSource].tokenImg, protoImg: shifter.flags['pf1-mighty-morphin'][otherSource].protoImg } } });
            else mergeObject(mergeObject(updates, protoImageChange), { 'flags.pf1-mighty-morphin': { [flagSlug]: { tokenImg: oldImage, protoImg: oldProtoImage } } });
        }
        await shifter.update(updates);
    }

    /**
     * Applies Frightful Aspect buff and effects to selected actor
     * 
     * @param {number} [durationLevel=0] The level to be used in the duration calculation for the buff if desired
     * @param {number} [cl=0] The caster level of the spell effect used for scaling
     * @param {string} [image = null] The file name for a custom image file without the file extension
     */
    static async frightfulAspect({ cl = 0, durationLevel = 0, image = null } = { }) {
        let shifter = MightyMorphinApp.getSingleActor(); // Ensure only a single actor is being processed
        let changeData = duplicate(MorphinChanges.changes.frightfulAspect); // get buff data
        const flagSlug = game.i18n.localize('MMMOD.Buffs.FrightfulAspect.Name').slugify();

        let existing;
        if (!!shifter.flags['pf1-mighty-morphin']) {
            for (const change of Object.keys(shifter.flags['pf1-mighty-morphin'])) {
                if (MightyMorphinApp.shapeSpells.includes(change) || MightyMorphinApp.otherTransmutations.includes(change)) {
                    existing = change;
                    break;
                }
            }
        }

        if (!!existing) {
            return ui.notifications.warn(`${ shifter.name } ${ game.i18n.localize('MMMOD.EffectWarning') } ${ shifter.flags['pf1-mighty-morphin'][existing].source }`);
        }

        let buff = shifter.items.find(o => o.type === 'buff' && o.name === game.i18n.localize('MMMOD.Buffs.FrightfulAspect.Name'));
        let shifterSize = shifter.system.traits.size;

        let newSize = changeData.size;

        const polymorphChanges = MorphinChanges.changes.polymorphSize[shifterSize] || null;
        if (!!polymorphChanges) changeData.changes.push(...polymorphChanges);

        let durationData = { };
        if (!!durationLevel) {
            let duration = durationLevel;
            durationData = { value: duration.toString(), units: 'minute' };
        }

        // Get caster level from user for effect scaling
        let casterLevel = cl === 0 ? await Dialog.prompt({
            content: `<label>${ game.i18n.localize('MMMOD.InputCasterLevel') }</label><input type="number">`,
            callback: (html) => html.find('input').val()
        }) : cl;

        // Create the buff if it doesn't exist, otherwise toggle it on
        if (!buff) {
            // Create template buff Item
            let buffData = duplicate(game.system.template.Item.buff);
            for (let t of buffData.templates) {
                mergeObject(buffData, duplicate(game.system.template.Item.templates[t]));
            }
            delete buffData.templates;
            if (game.settings.get('pf1-mighty-morphin', 'createScriptCall')) {
                let scriptCall = duplicate(globalThis.pf1.components.ItemScriptCall.defaultData);
                scriptCall.category = 'toggle';
                scriptCall.name = game.i18n.localize('MMMOD.DeactivateScriptCallName');
                scriptCall.value = 'if (!state && !!actor.flags["pf1-mighty-morphin"][item.name.slugify()]) game.mightyMorphin.revert({actor: actor, buff: item.name});';
                buffData.scriptCalls.push(scriptCall);
            }

            buff = await Item.create({ img: 'systems/pf1/icons/skills/affliction_08.jpg', name: game.i18n.localize('MMMOD.Buffs.FrightfulAspect.Name'), type: 'buff', system: buffData }, { temporary: true });
            
            let strChange = 0;
            for (let i = 0; i < changeData.changes.length; i++) {
                const change = changeData.changes[i];

                if (!!change.target && change.target === 'str') strChange += parseInt(change.formula);
            }

            let carryBonusChanges = MightyMorphinApp.generateCapacityChange(shifter, newSize, strChange);
            let changes = changeData.changes.concat(carryBonusChanges);

            // Create the buff on the actor, change the icon, populate the changes, turn it on
            let buffAdded = await shifter.createEmbeddedDocuments('Item', [buff]);
            await pf1.components.ItemChange.create(changes, {parent: buffAdded[0]});
            await buffAdded[0].update({ 'system.duration': durationData });
            await buffAdded[0].setActive(true);

        }
        else {
            let strChange = 0;
            for (let i = 0; i < changeData.changes.length; i++) {
                const change = changeData.changes[i];

                if (!!change.target && change.target === 'str') strChange += parseInt(change.formula);
            }

            let carryBonusChanges = MightyMorphinApp.generateCapacityChange(shifter, newSize, strChange);
            let changes = changeData.changes.concat(carryBonusChanges);
            
            await buff.update({ 'system.duration': durationData, 'system.changes': [] });
            await pf1.components.ItemChange.create(changes, {parent: buff});
            await buff.setActive(true);

        }


        let armorChangeFlag = [];
        let armorToChange = [];
        // Double armor and shield AC when moving from tiny or smaller (tiny and below armor AC is half normal)
        if (MightyMorphinApp.sizes.indexOf(shifterSize) < 3) {
            let armorAndShields = shifter.items.filter(o => o.type === 'equipment' && (o.system.subType === 'armor' || o.system.subType === 'shield'));

            for (let item of armorAndShields) {
                armorChangeFlag.push({ _id: item.id, system: { armor: { value: item.system.armor.value } } }); // store original armor data in flags
                armorToChange.push({ _id: item.id, system: { armor: { value: (item.system.armor.value * 2) } } }); // change to push to actor's item
            }
        }

        // Update all items that were found to need updates
        if (!!armorToChange.length) {
            await shifter.updateEmbeddedDocuments('Item', armorToChange);
        }

        // Add effect DR to existing (if any), and store old DR
        let oldDR = shifter.system.traits.dr.custom;
        let newDR = (!!oldDR ? oldDR + '; ' : '') + '10/magic';

        // Replace old spell resistance if new is higher, store old
        let oldSR = shifter.system.attributes.sr.formula;
        let faSR = 10 + Math.floor(parseInt(casterLevel) / 2);
        let newSR = shifter.system.attributes.sr.total > faSR ? oldSR : faSR;

        let imageChangedAlready = (!!shifter.flags['pf1-mighty-morphin'] && MightyMorphinApp.nonPolymorphs.includes(Object.keys(shifter.flags['pf1-mighty-morphin'])[0]) && !!Object.values(shifter.flags['pf1-mighty-morphin'])[0].tokenImg);
        let otherSource;
        if (imageChangedAlready) otherSource = Object.keys(shifter.flags['pf1-mighty-morphin'])[0];

        let oldImage, oldProtoImage, newImage, protoImageChange;

        if (!!image) {
            // Find image to change token to if it exists
            newImage = await MightyMorphinApp.findImage(image, true);

            // Prepare data for image change
            if (!!newImage) {
                protoImageChange = !!newImage ? { 'prototypeToken.texture.src': newImage } : { };
                let oldData = await MightyMorphinApp.changeTokenImage(newImage, shifter);
                oldImage = oldData.oldImage;
                oldProtoImage = oldData.oldProtoImage;
                oldProtoImage.token.img = shifter.prototypeToken.texture.src;
            }
        }


        // Update the actor data and store flags
        let updates = { 'system.traits.size': newSize, 'system.traits.dr.custom': newDR, 'system.attributes.sr.formula': `${ newSR }`, 'flags.pf1-mighty-morphin': { [flagSlug]: { source: game.i18n.localize('MMMOD.Buffs.FrightfulAspect.Name'), buffName: game.i18n.localize('MMMOD.Buffs.FrightfulAspect.Name'), size: shifterSize, armor: armorChangeFlag, data: { traits: { dr: { custom: oldDR } }, attributes: { sr: { formula: oldSR } } } } } };
        if (!!newImage) {
            if (imageChangedAlready) mergeObject(mergeObject(updates, protoImageChange), { ['flags.pf1-mighty-morphin']: { [flagSlug]: { tokenImg: oldImage, protoImg: oldProtoImage }, [otherSource]: { ['tokenImg.img']: newImage, ['protoImg.token.img']: newImage }, originalImage: { tokenImg: shifter.flags['pf1-mighty-morphin'][otherSource].tokenImg, protoImg: shifter.flags['pf1-mighty-morphin'][otherSource].protoImg } } });
            else mergeObject(mergeObject(updates, protoImageChange), { 'flags.pf1-mighty-morphin': { [flagSlug]: { tokenImg: oldImage, protoImg: oldProtoImage } } });
        }
        await shifter.update(updates);
    }

    /**
     * Applies Righteous Might buff and effects to selected actor
     * 
     * @param {number} [durationLevel=0] The level to be used in the duration calculation for the buff if desired
     * @param {number} [cl=0] The caster level of the spell effect used for scaling
     * @param {boolean} [drEvil=true] Setting for making the DR evil (true) or good (false)
     * @param {string} [image = null] The file name for a custom image file without the file extension
     */
    static async righteousMight({ cl = 0, durationLevel = 0, drEvil = true, image = null } = { }) {
        let shifter = MightyMorphinApp.getSingleActor(); // Ensure only a single actor is being processed
        let changeData = MorphinChanges.changes.righteousMight; // get buff data
        const flagSlug = game.i18n.localize('MMMOD.Buffs.RighteousMight.Name').slugify();

        let existing;
        if (!!shifter.flags['pf1-mighty-morphin']) {
            for (const change of Object.keys(shifter.flags['pf1-mighty-morphin'])) {
                if (MightyMorphinApp.shapeSpells.includes(change) || MightyMorphinApp.otherTransmutations.includes(change)) {
                    existing = change;
                    break;
                }
            }
        }

        if (!!existing) {
            return ui.notifications.warn(`${ shifter.name } ${ game.i18n.localize('MMMOD.EffectWarning') } ${ shifter.flags['pf1-mighty-morphin'][existing].source }`);
        }

        let buff = shifter.items.find(o => o.type === 'buff' && o.name === game.i18n.localize('MMMOD.Buffs.RighteousMight.Name'));
        let shifterSize = shifter.system.traits.size;

        let newSize = MightyMorphinApp.getNewSize(shifterSize, changeData.size);

        let durationData = { };
        if (!!durationLevel) {
            let duration = durationLevel;
            durationData = { value: duration.toString(), units: 'round' };
        }

        // Get caster level from user for effect scaling
        let casterLevel = cl === 0 ? await Dialog.prompt({
            content: `<label>${ game.i18n.localize('MMMOD.InputCasterLevel') }</label><input type="number">`,
            callback: (html) => html.find('input').val()
        }) : cl;

        // Create the buff if it doesn't exist, otherwise toggle it on
        if (!buff) {
            // Create template buff Item
            let buffData = duplicate(game.system.template.Item.buff);
            for (let t of buffData.templates) {
                mergeObject(buffData, duplicate(game.system.template.Item.templates[t]));
            }
            delete buffData.templates;
            if (game.settings.get('pf1-mighty-morphin', 'createScriptCall')) {
                let scriptCall = duplicate(globalThis.pf1.components.ItemScriptCall.defaultData);
                scriptCall.category = 'toggle';
                scriptCall.name = game.i18n.localize('MMMOD.DeactivateScriptCallName');
                scriptCall.value = 'if (!state && !!actor.flags["pf1-mighty-morphin"][item.name.slugify()]) game.mightyMorphin.revert({actor: actor, buff: item.name});';
                buffData.scriptCalls.push(scriptCall);
            }

            buff = await Item.create({ img: 'systems/pf1/icons/skills/light_05.jpg', name: game.i18n.localize('MMMOD.Buffs.RighteousMight.Name'), type: 'buff', system: buffData }, { temporary: true });
            
            let strChange = 0;
            for (let i = 0; i < changeData.changes.length; i++) {
                const change = changeData.changes[i];

                if (!!change.target && change.target === 'str') strChange += parseInt(change.formula);
            }

            let carryBonusChanges = MightyMorphinApp.generateCapacityChange(shifter, newSize, strChange);
            let changes = changeData.changes.concat(carryBonusChanges);

            // Create the buff on the actor, change the icon, populate the changes, turn it on
            let buffAdded = await shifter.createEmbeddedDocuments('Item', [buff]);
            await pf1.components.ItemChange.create(changes, {parent: buffAdded[0]});
            await buffAdded[0].update({ 'system.duration': durationData });
            await buffAdded[0].setActive(true);

        }
        else {
            let strChange = 0;
            for (let i = 0; i < changeData.changes.length; i++) {
                const change = changeData.changes[i];

                if (!!change.target && change.target === 'str') strChange += parseInt(change.formula);
            }

            let carryBonusChanges = MightyMorphinApp.generateCapacityChange(shifter, newSize, strChange);
            let changes = changeData.changes.concat(carryBonusChanges);
            
            await buff.update({ 'system.duration': durationData, 'system.changes': [] });
            await pf1.components.ItemChange.create(changes, {parent: buff});
            await buff.setActive(true);

        }

        let armorChangeFlag = [];
        let armorToChange = [];
        // Double armor and shield AC when moving from tiny or smaller (tiny and below armor AC is half normal)
        if (MightyMorphinApp.sizes.indexOf(shifterSize) < 3) {
            let armorAndShields = shifter.items.filter(o => o.type === 'equipment' && (o.system.subType === 'armor' || o.system.subType === 'shield'));

            for (let item of armorAndShields) {
                armorChangeFlag.push({ _id: item.id, system: { armor: { value: item.system.armor.value } } }); // store original armor data in flags
                armorToChange.push({ _id: item.id, system: { armor: { value: (item.system.armor.value * 2) } } }); // change to push to actor's item
            }
        }

        // Update all items that were found to need updates
        if (!!armorToChange.length) {
            await shifter.updateEmbeddedDocuments('Item', armorToChange);
        }

        // Add effect DR to existing (if any), and store old DR
        let oldDR = shifter.system.traits.dr.custom;
        let newDR = `${ (!!oldDR ? oldDR + '; ' : '') + (cl >= 15 ? 10 : 5) }/${ drEvil ? 'evil' : 'good' }`;

        let imageChangedAlready = (!!shifter.flags['pf1-mighty-morphin'] && MightyMorphinApp.nonPolymorphs.includes(Object.keys(shifter.flags['pf1-mighty-morphin'])[0]) && !!Object.values(shifter.flags['pf1-mighty-morphin'])[0].tokenImg);
        let otherSource;
        if (imageChangedAlready) otherSource = Object.keys(shifter.flags['pf1-mighty-morphin'])[0];

        let oldImage, oldProtoImage, newImage, protoImageChange;

        if (!!image) {
            // Find image to change token to if it exists
            newImage = await MightyMorphinApp.findImage(image, true);

            // Prepare data for image change
            if (!!newImage) {
                protoImageChange = !!newImage ? { 'prototypeToken.texture.src': newImage } : { };
                let oldData = await MightyMorphinApp.changeTokenImage(newImage, shifter);
                oldImage = oldData.oldImage;
                oldProtoImage = oldData.oldProtoImage;
                oldProtoImage.token.img = shifter.prototypeToken.texture.src;
            }
        }

        // Update the actor data and store flags
        let updates = { 'system.traits.size': newSize, 'system.traits.dr.custom': newDR, 'flags.pf1-mighty-morphin': { [flagSlug]: { source: game.i18n.localize('MMMOD.Buffs.RighteousMight.Name'), buffName: game.i18n.localize('MMMOD.Buffs.RighteousMight.Name'), size: shifterSize, armor: armorChangeFlag, data: { traits: { dr: { custom: oldDR } } } } } };
        if (!!newImage) {
            if (imageChangedAlready) mergeObject(mergeObject(updates, protoImageChange), { ['flags.pf1-mighty-morphin']: { [flagSlug]: { tokenImg: oldImage, protoImg: oldProtoImage }, [otherSource]: { ['tokenImg.img']: newImage, ['protoImg.token.img']: newImage }, originalImage: { tokenImg: shifter.flags['pf1-mighty-morphin'][otherSource].tokenImg, protoImg: shifter.flags['pf1-mighty-morphin'][otherSource].protoImg } } });
            else mergeObject(mergeObject(updates, protoImageChange), { 'flags.pf1-mighty-morphin': { [flagSlug]: { tokenImg: oldImage, protoImg: oldProtoImage } } });
        }
        await shifter.update(updates);
    }

    /**
     * Applies Reduce Person buff and effects to selected actor
     * 
     * @param {number} [durationLevel=0] The level to be used in the duration calculation for the buff if desired
     * @param {string} [image = null] The file name for a custom image file without the file extension
     */
    static async reducePerson({ durationLevel = 0, image = null } = { }) {
        let shifter = MightyMorphinApp.getSingleActor(); // Ensure only a single actor is being processed
        let changeData = MorphinChanges.changes.reducePerson; // get buff data
        const flagSlug = game.i18n.localize('MMMOD.Buffs.ReducePerson.Name').slugify();

        let existing;
        if (!!shifter.flags['pf1-mighty-morphin']) {
            for (const change of Object.keys(shifter.flags['pf1-mighty-morphin'])) {
                if (MightyMorphinApp.shapeSpells.includes(change) || MightyMorphinApp.otherTransmutations.includes(change)) {
                    existing = change;
                    break;
                }
            }
        }

        if (!!existing) {
            return ui.notifications.warn(`${ shifter.name } ${ game.i18n.localize('MMMOD.EffectWarning') } ${ shifter.flags['pf1-mighty-morphin'][existing].source }`);
        }
        
        let buff = shifter.items.find(o => o.type === 'buff' && o.name === game.i18n.localize('MMMOD.Buffs.ReducePerson.Name'));
        let shifterSize = shifter.system.traits.size;

        // Find the size the number of steps away from current, number of steps provided by changeData
        let newSize = MightyMorphinApp.getNewSize(shifterSize, changeData.size);

        let durationData = { };
        if (!!durationLevel) {
            let duration = durationLevel;
            durationData = { value: duration.toString(), units: 'minute' };
        }

        // Create the buff if it doesn't exist, otherwise toggle it on
        if (!buff) {
            // Create template buff Item
            let buffData = duplicate(game.system.template.Item.buff);
            for (let t of buffData.templates) {
                mergeObject(buffData, duplicate(game.system.template.Item.templates[t]));
            }
            delete buffData.templates;
            if (game.settings.get('pf1-mighty-morphin', 'createScriptCall')) {
                let scriptCall = duplicate(globalThis.pf1.components.ItemScriptCall.defaultData);
                scriptCall.category = 'toggle';
                scriptCall.name = game.i18n.localize('MMMOD.DeactivateScriptCallName');
                scriptCall.value = 'if (!state && !!actor.flags["pf1-mighty-morphin"][item.name.slugify()]) game.mightyMorphin.revert({actor: actor, buff: item.name});';
                buffData.scriptCalls.push(scriptCall);
            }

            buff = await Item.create({ img: 'systems/pf1/icons/races/ratfolk.png', name: game.i18n.localize('MMMOD.Buffs.ReducePerson.Name'), type: 'buff', system: buffData }, { temporary: true });
            
            let strChange = 0;
            for (let i = 0; i < changeData.changes.length; i++) {
                const change = changeData.changes[i];

                if (!!change.target && change.target === 'str') strChange += parseInt(change.formula);
            }

            let carryBonusChanges = MightyMorphinApp.generateCapacityChange(shifter, newSize, strChange);
            let changes = changeData.changes.concat(carryBonusChanges);

            // Create the buff on the actor, change the icon, populate the changes, turn it on
            let buffAdded = await shifter.createEmbeddedDocuments('Item', [buff]);
            await pf1.components.ItemChange.create(changes, {parent: buffAdded[0]});
            await buffAdded[0].update({ 'system.duration': durationData });
            await buffAdded[0].setActive(true);

        }
        else {
            let strChange = 0;
            for (let i = 0; i < changeData.changes.length; i++) {
                const change = changeData.changes[i];

                if (!!change.target && change.target === 'str') strChange += parseInt(change.formula);
            }

            let carryBonusChanges = MightyMorphinApp.generateCapacityChange(shifter, newSize, strChange);
            let changes = changeData.changes.concat(carryBonusChanges);
            
            await buff.update({ 'system.duration': durationData, 'system.changes': [] });
            await pf1.components.ItemChange.create(changes, {parent: buff});
            await buff.setActive(true);

        }

        let armorChangeFlag = [];
        let armorToChange = [];
        // Halve armor and shield AC when moving from small to tiny (tiny and below armor AC is half normal)
        if (shifterSize === 'sm') {
            let armorAndShields = shifter.items.filter(o => o.type === 'equipment' && (o.system.subType === 'armor' || o.system.subType === 'shield'));

            for (let item of armorAndShields) {
                armorChangeFlag.push({ _id: item.id, system: { armor: { value: item.system.armor.value } } }); // store original armor data in flags
                armorToChange.push({ _id: item.id, system: { armor: { value: Math.floor(item.system.armor.value / 2) } } }); // change to push to actor's item
            }
        }

        // Update all items that were found to need updates
        if (!!armorToChange.length) {
            await shifter.updateEmbeddedDocuments('Item', armorToChange);
        }

        let imageChangedAlready = (!!shifter.flags['pf1-mighty-morphin'] && MightyMorphinApp.nonPolymorphs.includes(Object.keys(shifter.flags['pf1-mighty-morphin'])[0]) && !!Object.values(shifter.flags['pf1-mighty-morphin'])[0].tokenImg);
        let otherSource;
        if (imageChangedAlready) otherSource = Object.keys(shifter.flags['pf1-mighty-morphin'])[0];

        let oldImage, oldProtoImage, newImage, protoImageChange;

        if (!!image) {
            // Find image to change token to if it exists
            newImage = await MightyMorphinApp.findImage(image, true);

            // Prepare data for image change
            if (!!newImage) {
                protoImageChange = !!newImage ? { 'prototypeToken.texture.src': newImage } : { };
                let oldData = await MightyMorphinApp.changeTokenImage(newImage, shifter);
                oldImage = oldData.oldImage;
                oldProtoImage = oldData.oldProtoImage;
                oldProtoImage.token.img = shifter.prototypeToken.texture.src;
            }
        }

        // Update the actor size and store flags
        let updates = { 'system.traits.size': newSize, 'flags.pf1-mighty-morphin': { [flagSlug]: { source: game.i18n.localize('MMMOD.Buffs.ReducePerson.Name'), buffName: game.i18n.localize('MMMOD.Buffs.ReducePerson.Name'), size: shifterSize, armor: armorChangeFlag } } };
        if (!!newImage) {
            if (imageChangedAlready) mergeObject(mergeObject(updates, protoImageChange), { ['flags.pf1-mighty-morphin']: { [flagSlug]: { tokenImg: oldImage, protoImg: oldProtoImage }, [otherSource]: { ['tokenImg.img']: newImage, ['protoImg.token.img']: newImage }, originalImage: { tokenImg: shifter.flags['pf1-mighty-morphin'][otherSource].tokenImg, protoImg: shifter.flags['pf1-mighty-morphin'][otherSource].protoImg } } });
            else mergeObject(mergeObject(updates, protoImageChange), { 'flags.pf1-mighty-morphin': { [flagSlug]: { tokenImg: oldImage, protoImg: oldProtoImage } } });
        }
        await shifter.update(updates);
    }

    /**
     * Applies Mauler Familiar archetype's Battle Form buff and effects to selected actor
     * 
     * @param {number} [durationLevel=0] The level to be used in the duration calculation for the buff if desired
     * @param {string} [image = null] The file name for a custom image file without the file extension
     */
    static async maulerBattleForm({ durationLevel = 0, image = null } = { }) {
        let shifter = MightyMorphinApp.getSingleActor(); // Ensure only a single actor is being processed
        let changeData = duplicate(MorphinChanges.changes.maulerBattleForm); // get buff data
        const flagSlug = game.i18n.localize('MMMOD.Buffs.MaulerBattleForm.Name').slugify();

        let existing;
        if (!!shifter.flags['pf1-mighty-morphin']) {
            for (const change of Object.keys(shifter.flags['pf1-mighty-morphin'])) {
                if (MightyMorphinApp.shapeSpells.includes(change) || MightyMorphinApp.otherTransmutations.includes(change)) {
                    existing = change;
                    break;
                }
            }
        }

        if (!!existing) {
            return ui.notifications.warn(`${ shifter.name } ${ game.i18n.localize('MMMOD.EffectWarning') } ${ shifter.flags['pf1-mighty-morphin'][existing].source }`);
        }
        
        let buff = shifter.items.find(o => o.type === 'buff' && o.name === game.i18n.localize('MMMOD.Buffs.MaulerBattleForm.Name'));
        let shifterSize = shifter.system.traits.size;

        // Find the size the number of steps away from current, number of steps provided by changeData
        let newSize = changeData.size;

        const polymorphChanges = MorphinChanges.changes.polymorphSize[shifterSize] || null;
        if (!!polymorphChanges) changeData.changes.push(...polymorphChanges);

        let durationData = { };
        if (!!durationLevel) {
            let duration = durationLevel;
            durationData = { value: duration.toString(), units: 'minute' };
        }


        // Create the buff if it doesn't exist, otherwise toggle it on
        if (!buff) {
            // Create template buff Item
            let buffData = duplicate(game.system.template.Item.buff);
            for (let t of buffData.templates) {
                mergeObject(buffData, duplicate(game.system.template.Item.templates[t]));
            }
            delete buffData.templates;
            if (game.settings.get('pf1-mighty-morphin', 'createScriptCall')) {
                let scriptCall = duplicate(globalThis.pf1.components.ItemScriptCall.defaultData);
                scriptCall.category = 'toggle';
                scriptCall.name = game.i18n.localize('MMMOD.DeactivateScriptCallName');
                scriptCall.value = 'if (!state && !!actor.flags["pf1-mighty-morphin"][item.name.slugify()]) game.mightyMorphin.revert({actor: actor, buff: item.name});';
                buffData.scriptCalls.push(scriptCall);
            }

            buff = await Item.create({ img: 'systems/pf1/icons/spells/wild-orange-3.jpg', name: game.i18n.localize('MMMOD.Buffs.MaulerBattleForm.Name'), type: 'buff', system: buffData }, { temporary: true });

            let strChange = 0;
            for (let i = 0; i < changeData.changes.length; i++) {
                const change = changeData.changes[i];

                if (!!change.target && change.target === 'str') strChange += parseInt(change.formula);
            }

            let carryBonusChanges = MightyMorphinApp.generateCapacityChange(shifter, newSize, strChange);
            let changes = changeData.changes.concat(carryBonusChanges);

            // Create the buff on the actor, change the icon, populate the changes, turn it on
            let buffAdded = await shifter.createEmbeddedDocuments('Item', [buff]);
            await pf1.components.ItemChange.create(changes, {parent: buffAdded[0]});
            await buffAdded[0].update({ 'system.duration': durationData });
            await buffAdded[0].setActive(true);

        }
        else {
            let strChange = 0;
            for (let i = 0; i < changeData.changes.length; i++) {
                const change = changeData.changes[i];

                if (!!change.target && change.target === 'str') strChange += parseInt(change.formula);
            }

            let carryBonusChanges = MightyMorphinApp.generateCapacityChange(shifter, newSize, strChange);
            let changes = changeData.changes.concat(carryBonusChanges);
            
            await buff.update({ 'system.duration': durationData, 'system.changes': [] });
            await pf1.components.ItemChange.create(changes, {parent: buff});
            await buff.setActive(true);

        }

        let armorChangeFlag = [];
        let armorToChange = [];
        // Double armor and shield AC when moving from tiny to small (tiny and below armor AC is half normal)
        if (shifterSize === 'tiny') {
            let armorAndShields = shifter.items.filter(o => o.type === 'equipment' && (o.system.subType === 'armor' || o.system.subType === 'shield'));

            for (let item of armorAndShields) {
                armorChangeFlag.push({ _id: item.id, system: { armor: { value: item.system.armor.value } } }); // store original armor data in flags
                armorToChange.push({ _id: item.id, system: { armor: { value: (item.system.armor.value * 2) } } }); // change to push to actor's item
            }
        }

        let imageChangedAlready = (!!shifter.flags['pf1-mighty-morphin'] && MightyMorphinApp.nonPolymorphs.includes(Object.keys(shifter.flags['pf1-mighty-morphin'])[0]) && !!Object.values(shifter.flags['pf1-mighty-morphin'])[0].tokenImg);
        let otherSource;
        if (imageChangedAlready) otherSource = Object.keys(shifter.flags['pf1-mighty-morphin'])[0];

        let oldImage, oldProtoImage, newImage, protoImageChange;

        if (!!image) {
            // Find image to change token to if it exists
            newImage = await MightyMorphinApp.findImage(image, true);

            // Prepare data for image change
            if (!!newImage) {
                protoImageChange = !!newImage ? { 'prototypeToken.texture.src': newImage } : { };
                let oldData = await MightyMorphinApp.changeTokenImage(newImage, shifter);
                oldImage = oldData.oldImage;
                oldProtoImage = oldData.oldProtoImage;
                oldProtoImage.token.img = shifter.prototypeToken.texture.src;
            }
        }

        // Update all items that were found to need updates
        if (!!armorToChange.length) {
            await shifter.updateEmbeddedDocuments('Item', armorToChange);
        }

        // Update the actor size and store flags
        let updates = { 'system.traits.size': newSize, 'flags.pf1-mighty-morphin': { [flagSlug]: { source: game.i18n.localize('MMMOD.Buffs.MaulerBattleForm.Name'), buffName: game.i18n.localize('MMMOD.Buffs.MaulerBattleForm.Name'), size: shifterSize, armor: armorChangeFlag } } };
        if (!!newImage) {
            if (imageChangedAlready) mergeObject(mergeObject(updates, protoImageChange), { ['flags.pf1-mighty-morphin']: { [flagSlug]: { tokenImg: oldImage, protoImg: oldProtoImage }, [otherSource]: { ['tokenImg.img']: newImage, ['protoImg.token.img']: newImage }, originalImage: { tokenImg: shifter.flags['pf1-mighty-morphin'][otherSource].tokenImg, protoImg: shifter.flags['pf1-mighty-morphin'][otherSource].protoImg } } });
            else mergeObject(mergeObject(updates, protoImageChange), { 'flags.pf1-mighty-morphin': { [flagSlug]: { tokenImg: oldImage, protoImg: oldProtoImage } } });
        }
        await shifter.update(updates);
    }
    
    /**
     * Applies Shifter Aspect minor form buff and effects to selected actor
     * 
     * @param {number} [durationLevel=0] The level to be used in the duration calculation for the buff if desired
     * @param {string} [image = null] The file name for a custom image file without the file extension
     */
    static async shifterAspect({ aspect, source = game.i18n.localize('MMMOD.Buffs.ShifterAspect.Name'), image, type, durationLevel } = { }) {
        let shifter = MightyMorphinApp.getSingleActor(); // Ensure only a single actor is being processed
        const totalChanges = { };

        // Only continue if a single actor. Aspects can be used while under the effects of other polymorph effects.
        if (!!shifter?.flags['pf1-mighty-morphin']?.minorAspect) {
            return ui.notifications.warn(`${ shifter.name } ${ game.i18n.localize('MMMOD.EffectWarning') } ${ shifter.flags['pf1-mighty-morphin'].source }`);
        }
        if (!shifter) {
            return;
        }
        
        let senseUpgradeUsed = [];
        // get buff data
        if (aspect instanceof Array) {
            for (const singleAspect of aspect) {
                const changeData = { };
                const aspectData = duplicate(MorphinChanges.changes.shifterWildShape[singleAspect].minor);
                for (const level of Object.keys(aspectData)) {
                    if (shifter.classes.shifter.level >= level) mergeObject(changeData, aspectData[level]);
                }
                
                for (const changeType of Object.keys(changeData)) {
                    if (!!totalChanges[changeType]) {
                        totalChanges[changeType].push(...changeData[changeType]);
                    }
                    else {
                        totalChanges[changeType] = changeData[changeType];
                    }
                }
            }
        }
        else {
            const aspectData = duplicate(MorphinChanges.changes.shifterWildShape[aspect].minor);
            for (const level of Object.keys(aspectData)) {
                if (shifter.classes.shifter.level >= level) mergeObject(totalChanges, aspectData[level]);
            }
        }

        let polymorphedWithSenses = (!!shifter.flags['pf1-mighty-morphin'] && (MightyMorphinApp.shapeSpells.includes(Object.keys(shifter.flags['pf1-mighty-morphin'])[0]) || MightyMorphinApp.otherTransmutations.includes(Object.keys(shifter.flags['pf1-mighty-morphin'])[0])) && !!Object.values(shifter.flags['pf1-mighty-morphin'])[0].data?.system?.traits?.senses);
        let imageChangedAlready = (!!shifter.flags['pf1-mighty-morphin'] && (MightyMorphinApp.shapeSpells.includes(Object.keys(shifter.flags['pf1-mighty-morphin'])[0]) || MightyMorphinApp.otherTransmutations.includes(Object.keys(shifter.flags['pf1-mighty-morphin'])[0])) && !!Object.values(shifter.flags['pf1-mighty-morphin'])[0].tokenImg);

        const changes = [], contextNotes = [], itemsToEmbed = [], durationData = {};
        
        if (!!totalChanges.changes) changes.push(...totalChanges.changes);

        if (!!totalChanges.feats) {
            for (const feat of totalChanges.feats) {
                let featData = await fromUuid(feat.uuid);
                if (!featData) {
                    featData = await Item.create({ name: feat.name, type: 'feat' }, { temporary: true });
                }
                featData = featData.toObject();
                featData.name += ` (${ source })`;
                itemsToEmbed.push(featData);
            }
        }

        if (!!totalChanges.contextNotes) contextNotes.push(...totalChanges.contextNotes);

        // Process senses changes
        let originalSenses, senseObject, sensesChanges, actualOriginalSenses;
        if (!!totalChanges.senses) {
            originalSenses = { 'system.traits.senses': shifter.system.traits.senses };
            senseObject = { 'dv': 0, 'ts': 0, 'bs': 0, 'bse': 0, 'll': { 'enabled': false, 'multiplier': { 'dim': 2, 'bright': 2 } }, 'sid': false, 'tr': false, 'si': false, 'sc': 0, 'custom': '' };
            for (let i = 0; i < totalChanges.senses.length; i++) {
                const sensesEnumValue = totalChanges.senses[i];
                if (!!sensesEnumValue) {
                    const newSense = MorphinChanges.SENSES[Object.keys(MorphinChanges.SENSES)[sensesEnumValue - 1]];
                    const settingKey = Object.keys(newSense.setting)[0];
                    if ((typeof(senseObject[settingKey]) === 'number' && senseObject[settingKey] < newSense.setting[settingKey]) || typeof(senseObject[settingKey]) !== 'number') senseObject = mergeObject(senseObject, newSense.setting); // element 1 = SENSES[0] = LOWLIGHT
                }
            }
        }
        if (!!senseObject) sensesChanges = { 'system.traits.senses': duplicate(senseObject) };

        let otherSource;

        if (polymorphedWithSenses || imageChangedAlready) otherSource = Object.keys(shifter.flags['pf1-mighty-morphin'])[0];

        if (polymorphedWithSenses && !!totalChanges.senses) {
            const senseData = Object.values(shifter.flags['pf1-mighty-morphin'])[0].data.system.traits.senses;
            actualOriginalSenses = duplicate(senseData); // store original actor sense
            // process what combined senses should be
            for (const senseKey of Object.keys(sensesChanges['system.traits.senses'])) {
                if (typeof(sensesChanges['system.traits.senses'][senseKey]) === 'number' && sensesChanges['system.traits.senses'][senseKey] < originalSenses['system.traits.senses'][senseKey]) sensesChanges['system.traits.senses'][senseKey] = originalSenses['system.traits.senses'][senseKey];
                else if (typeof(sensesChanges['system.traits.senses'][senseKey]) === 'boolean') sensesChanges['system.traits.senses'][senseKey] = sensesChanges['system.traits.senses'][senseKey] || originalSenses['system.traits.senses'][senseKey];
                else if (senseKey === 'll') sensesChanges['system.traits.senses'][senseKey].enabled = sensesChanges['system.traits.senses'][senseKey].enabled || originalSenses['system.traits.senses'][senseKey].enabled;
                else if (senseKey === 'custom') sensesChanges['system.traits.senses'][senseKey] = sensesChanges['system.traits.senses'][senseKey] === originalSenses['system.traits.senses'][senseKey] ? sensesChanges['system.traits.senses'][senseKey] : sensesChanges[senseKey] + (sensesChanges['system.traits.senses'][senseKey].length > 0 ? ', ' : '' ) + originalSenses['system.traits.senses'][senseKey];
            }
        }

        let buff = shifter.items.find(o => o.type === 'buff' && o.name === source);

        if (!!durationLevel) {
            durationData = { value: durationLevel.toString(), units: 'minute' };
        }

        // Create the buff if it doesn't exist, otherwise toggle it on
        if (!buff) {
            // Create template buff Item
            let buffData = duplicate(game.system.template.Item.buff);
            for (let t of buffData.templates) {
                mergeObject(buffData, duplicate(game.system.template.Item.templates[t]));
            }
            delete buffData.templates;
            if (game.settings.get('pf1-mighty-morphin', 'createScriptCall')) {
                let scriptCall = duplicate(globalThis.pf1.components.ItemScriptCall.defaultData);
                scriptCall.category = 'toggle';
                scriptCall.name = game.i18n.localize('MMMOD.DeactivateScriptCallName');
                scriptCall.value = 'if (!state && !!actor.flags["pf1-mighty-morphin"][item.name.slugify()]) game.mightyMorphin.revert({actor: actor, buff: item.name});';
                buffData.scriptCalls.push(scriptCall);
            }

            buff = await Item.create({ name: source, type: 'buff', system: buffData, img: MorphinChanges.buffIcons.shifterWildShape }, { temporary: true });
            //buff.system.changes = changes;
            //buff.system.contextNotes = contextNotes;

            itemsToEmbed.push(buff);
        }

        let oldImage, oldProtoImage, newImage, protoImageChange;

        if (!!image) {
            // Find image to change token to if it exists
            newImage = await MightyMorphinApp.findImage(image, true);

            // Prepare data for image change
            if (!!newImage) {
                protoImageChange = !!newImage ? { 'prototypeToken.texture.src': newImage } : { };
                let oldData = await MightyMorphinApp.changeTokenImage((!imageChangedAlready ? newImage : null), shifter); // only change image if not already transmuted with an image. Other spell images take priority
                oldImage = oldData.oldImage;
                oldProtoImage = oldData.oldProtoImage;
                oldProtoImage.token.img = shifter.prototypeToken.texture.src;
            }
        }

        
        const itemsAdded = await shifter.createEmbeddedDocuments('Item', itemsToEmbed);
        buff = shifter.items.find(o => o.type === 'buff' && o.name === source);        
        await pf1.components.ItemChange.create(changes, {parent: buff});
        await buff.update({ 'system.duration': durationData, 'system.contextNotes': contextNotes, 'system.active': true });

        // Update the actor size and store flags
        let updates = { 'flags.pf1-mighty-morphin': { } };
        updates['flags.pf1-mighty-morphin'][game.i18n.localize('MMMOD.Buffs.ShifterAspect.Name').slugify()] = { source: game.i18n.localize('MMMOD.Buffs.ShifterAspect.Name'), buffName: game.i18n.localize('MMMOD.Buffs.ShifterAspect.Name'), itemsCreated: itemsAdded.map(p => p.id) };
        if (!!senseObject) mergeObject(updates, mergeObject(sensesChanges, { ['flags.pf1-mighty-morphin']: { [game.i18n.localize('MMMOD.Buffs.ShifterAspect.Name').slugify()]: { ['data']: originalSenses } } }));
        if (polymorphedWithSenses && !!totalChanges.senses) mergeObject(updates, { ['flags.pf1-mighty-morphin']: { originalSenses: actualOriginalSenses, [otherSource]: { data: { system: { traits: { senses: mergeObject(shifter.flags['pf1-mighty-morphin'][otherSource].data.system.traits.senses, senseObject) } } } } } });
        if (!!newImage) {
            if (imageChangedAlready) mergeObject(updates, { ['flags.pf1-mighty-morphin']: { [otherSource]: { ['tokenImg.img']: newImage, ['protoImg.token.img']: newImage }, originalImage: { tokenImg: shifter.flags['pf1-mighty-morphin'][otherSource].tokenImg, protoImg: shifter.flags['pf1-mighty-morphin'][otherSource].protoImg } } });
            else mergeObject(mergeObject(updates, protoImageChange), { 'flags.pf1-mighty-morphin': { [game.i18n.localize('MMMOD.Buffs.ShifterAspect.Name').slugify()]: { tokenImg: oldImage, protoImg: oldProtoImage } } });
        }
        await shifter.update(updates);
    }
    

    /**
     * Reverts changes applied by this module to the selected actor
     * 
     * @param {object} [actor=null] The specific actor to revert changes on
     */
    static async revert({ actor = null, buff = null } = { }) {
        let shifter = actor ?? MightyMorphinApp.getSingleActor(); // Use the provided actor or ensure only a single actor is being processed

        if (Object.keys(shifter.flags['pf1-mighty-morphin']).length === 0) {
            this.currentlyReverting = false;
            return ui.notifications.warn(`${ shifter.name } ${ game.i18n.localize('MMMOD.NoEffectWarning') }`);
        }

        if (!!buff && !shifter.flags['pf1-mighty-morphin'][buff.slugify()]) {
            this.currentlyReverting = false;
            return ui.notifications.warn(`${ shifter.name } ${ game.i18n.localize('MMMOD.NoEffectWarning') } ${ game.i18n.localize('MMMOD.From') } ${ buff }`);
        }

        // Get flags from the actor with the changes applied to it
        let changes = duplicate(shifter.flags['pf1-mighty-morphin']);
        
        if (!!buff) changes = { [buff.slugify()]: changes[buff.slugify()] };

        const sources = Object.keys(changes).filter(o => o !== 'originalSenses' && o !== 'originalImage');
        let source, nonPolymorphSource, shape = false;
        
        if (sources.length > 1) {
            const choice  = await MightyMorphinApp.chooseEffectToRevert(sources.map(o => ({ label: changes[o].source, slug: o }))).catch(() => { return; });
            changes = { [choice]: changes[choice] };
        }
        
        const key = Object.keys(changes)[0];
        if (MightyMorphinApp.shapeSpells.includes(key)) {
            source = key;
            shape = true;
        }
        else if (MightyMorphinApp.otherTransmutations.includes(key)) {
            source = key;
        }
        else if (MightyMorphinApp.nonPolymorphs.includes(key)) {
            nonPolymorphSource = key;
        }
        
        // Undo listed buffs
        if (!!source && !shape) {
            // Revert all armor changes that exist
                if (!!changes[source].armor.length) {
                let armorFlag = changes[source].armor;
                let armorExisting = [];
                let armorItem;
                armorFlag.forEach(a => {
                    armorItem = shifter.items.get(a._id);
                    if (!!armorItem) armorExisting.push(a);
                });
                await shifter.updateEmbeddedDocuments('Item', armorExisting);
            }

            if (!!changes[source].tokenImg) {
                let token = shifter.token || canvas.tokens.ownedTokens.filter(o => o.actor.id === shifter.id);
                if (Array.isArray(token) && token.length > 1) {
                    let tokenUpdates = token.map(o => ({ _id: o.id, 'texture.src': changes[source].tokenImg.img }));
                    await canvas.scene.updateEmbeddedDocuments('Token', tokenUpdates);
                }
                else {
                    if (Array.isArray(token)) token = token[0].document;
                    await token.update({ 'texture.src': changes[source].tokenImg.img });
                }
            }

            let updates;
            // Revert all actor data to its original and remove the flags
            if (!!changes[source].data) {
                updates = { 'system': changes[source].data, 'system.traits.size': changes[source].size, 'flags.pf1-mighty-morphin': { ['-=' + source]: null } };
            }
            else {
                updates = { 'system.traits.size': changes[source].size, 'flags.pf1-mighty-morphin': { ['-=' + source]: null }};
            }

            if (!!shifter.flags['pf1-mighty-morphin'].originalSenses) {
                const otherEffect = Object.keys(shifter.flags['pf1-mighty-morphin']).find(o => o !== source && o !== 'originalSenses');
                updates['flags.pf1-mighty-morphin'][otherEffect] = { ['data.system.traits.senses']: shifter.flags['pf1-mighty-morphin'].originalSenses };
                mergeObject(updates, { ['flags.pf1-mighty-morphin']: { ['-=originalSenses']: null } });
            }

            
            if (!shifter.flags['pf1-mighty-morphin'].originalImage) {
                updates['prototypeToken.texture.src'] = (!!changes[source].protoImg ? changes[source].protoImg.token.img : shifter.prototypeToken.texture.src);
            }
            else {
                const otherEffect = Object.keys(shifter.flags['pf1-mighty-morphin']).find(o => o !== source && o !== 'originalSenses' && o !== 'originalImage');
                mergeObject(updates, { ['flags.pf1-mighty-morphin.' + otherEffect]: shifter.flags['pf1-mighty-morphin'].originalImage, ['flags.pf1-mighty-morphin.-=originalImage']: null });
            }

            await shifter.update(updates);
            // Turn off the buff
            await shifter.items.find(o => o.type === 'buff' && o.name === changes[source].buffName).update({ 'system.active': false });
        }
        // Undo listed buffs
        else if (!!source && shape) {
            // Reverse any changes to armor
            if (!!changes[source].armor.length) {
                let armorFlag = changes[source].armor;
                let armorExisting = [];
                let armorItem;
                armorFlag.forEach(a => {
                    armorItem = shifter.items.get(a._id);
                    if (!!armorItem) armorExisting.push(a);
                });
                await shifter.updateEmbeddedDocuments('Item', armorExisting);
            }

            if (!!changes[source].tokenImg) {
                let token = shifter.token || canvas.tokens.ownedTokens.filter(o => o.actor.id === shifter.id);
                if (Array.isArray(token) && token.length > 1) {
                    let tokenUpdates = token.map(o => ({ _id: o.id, 'texture.src': changes[source].tokenImg.img }));
                    await canvas.scene.updateEmbeddedDocuments('Token', tokenUpdates);
                }
                else {
                    if (Array.isArray(token)) token = token[0].document;
                    await token.update({ 'texture.src': changes[source].tokenImg.img });
                }
            }

            if (!!changes[source].macroCreatedId) game.macros.get(changes[source].macroCreatedId).delete();

            // Revert all data that was replaced to its original and remove the flags
            let updates = { };
            if (!!changes[source].data.token) {
                updates = { system: changes[source].data.system, prototypeToken: changes[source].data.token, 'flags.pf1-mighty-morphin': { ['-=' + source]: null } };
            }
            else {
                updates = { system: changes[source].data.system, 'flags.pf1-mighty-morphin': { ['-=' + source]: null } };
            }

            if (!!shifter.flags['pf1-mighty-morphin'].originalSenses) {
                const otherEffect = Object.keys(shifter.flags['pf1-mighty-morphin']).find(o => o !== source && o !== 'originalSenses');
                updates['flags.pf1-mighty-morphin'][otherEffect] = { ['data.system.traits.senses']: shifter.flags['pf1-mighty-morphin'].originalSenses };
                mergeObject(updates, { ['flags.pf1-mighty-morphin']: { ['-=originalSenses']: null } });
            }

            if (!shifter.flags['pf1-mighty-morphin'].originalImage) {
                updates['prototypeToken.texture.src'] = (!!changes[source].protoImg ? changes[source].protoImg.token.img : shifter.prototypeToken.texture.src);
            }
            else {
                const otherEffect = Object.keys(shifter.flags['pf1-mighty-morphin']).find(o => o !== source && o !== 'originalSenses' && o !== 'originalImage');
                mergeObject(updates, { ['flags.pf1-mighty-morphin.' + otherEffect]: shifter.flags['pf1-mighty-morphin'].originalImage, ['flags.pf1-mighty-morphin.-=originalImage']: null });
            }

            await shifter.update(updates);

            // Remove any attacks or other features created by the effect
            let itemsOnActor = shifter.items.filter(o => changes[source].itemsCreated.includes(o.id)).map(o => o.id);
            await shifter.deleteEmbeddedDocuments('Item', itemsOnActor);
            
            canvas.tokens.releaseAll();
            if (!!shifter.token) shifter.token.object.control();
            else canvas.tokens.ownedTokens.find(o => o.actor.id === fromUuidSync(shifter.uuid).id).control();
        }
        else if (!!nonPolymorphSource) {
            const updates = { 'flags.pf1-mighty-morphin': { ['-=' + nonPolymorphSource]: null } };
            
            if (!!changes[nonPolymorphSource].data) mergeObject(updates, changes[nonPolymorphSource].data);

            if (!!shifter.flags['pf1-mighty-morphin'].originalSenses) {
                const otherEffect = Object.keys(shifter.flags['pf1-mighty-morphin']).find(o => o !== nonPolymorphSource && o !== 'originalSenses' && o !== 'originalImage');
                mergeObject(updates, { ['flags.pf1-mighty-morphin']: { ['-=originalSenses']: null, [otherEffect]: { ['data.system.traits.senses']: shifter.flags['pf1-mighty-morphin'].originalSenses } } });
            }

            if (!!changes[nonPolymorphSource].tokenImg && !shifter.flags['pf1-mighty-morphin'].originalImage) {
                let token = shifter.token || canvas.tokens.ownedTokens.filter(o => o.actor.id === shifter.id);
                if (Array.isArray(token) && token.length > 1) {
                    let tokenUpdates = token.map(o => ({ _id: o.id, 'texture.src': changes[nonPolymorphSource].tokenImg.img }));
                    await canvas.scene.updateEmbeddedDocuments('Token', tokenUpdates);
                }
                else {
                    if (Array.isArray(token)) token = token[0].document;
                    await token.update({ 'texture.src': changes[nonPolymorphSource].tokenImg.img });
                }
            }

            if (!shifter.flags['pf1-mighty-morphin'].originalImage) {
                updates['prototypeToken.texture.src'] = (!!changes[nonPolymorphSource].protoImg ? changes[nonPolymorphSource].protoImg.token.img : shifter.prototypeToken.texture.src);
            }
            else {
                const otherEffect = Object.keys(shifter.flags['pf1-mighty-morphin']).find(o => o !== nonPolymorphSource && o !== 'originalSenses' && o !== 'originalImage');
                mergeObject(updates, { ['flags.pf1-mighty-morphin.' + otherEffect]: shifter.flags['pf1-mighty-morphin'].originalImage, ['flags.pf1-mighty-morphin.-=originalImage']: null });
            }

            await shifter.update(updates);
            
            let itemsOnActor = shifter.items.filter(o => changes[nonPolymorphSource].itemsCreated.includes(o.id)).map(o => o.id);
            await shifter.deleteEmbeddedDocuments('Item', itemsOnActor);
            
            canvas.tokens.releaseAll();
            if (!!shifter.token) shifter.token.object.control();
            else canvas.tokens.ownedTokens.find(o => o.actor.id === fromUuidSync(shifter.uuid).id).control();
        }
    }

    /**
     * Calculates the size to change the actor to based on current size and number of steps to change it
     * 
     * @param {string} currentSize The actor's current size
     * @param {number} mod The number of steps to change size, positive for up in size, negative for down in size
     * @returns {string} size in the pf1 system for use in data.traits.size
     */
    static getNewSize(currentSize, mod) {
        let sizeIndex = MightyMorphinApp.sizes.indexOf(currentSize);

        // limit size change to minimum fine (0) and maximum colossal (7)
        let newSizeIndex = mod < 0 ? Math.max(0, sizeIndex + mod) : Math.min(MightyMorphinApp.sizes.length - 1, sizeIndex + mod);

        return MightyMorphinApp.sizes[newSizeIndex];
    }

    /**
     * Gets selected actors or the actor owned by the player
     * 
     * @returns {Array.Actor} The list of actors chosen
     */
    static getActors() {
        const tokens = canvas.tokens.controlled;
        let actors = tokens.map(o => o.actor);
        if (!actors.length) actors = game.actors.contents.filter(o => o.hasPlayerOwner && o.testUserPermission(game.user, 'OWNER'));
        return actors.filter(o => o.testUserPermission(game.user, 'OWNER'));
    }

    /**
     * Verifies that only a single actor is chosen and returns it. Warns user if anything but a single actor is chosen
     * 
     * @returns {Actor} A single actor, or null if the number of actors was not exactly 1
     */
    static getSingleActor() {
        let actors = MightyMorphinApp.getActors();
        if (!actors.length) {
            ui.notifications.warn(game.i18n.localize('MMMOD.NoTokenWarning'));
            return new Error(game.i18n.localize('MMMOD.NoTokenWarning'));
        }
        else if (actors.length > 1) {
            ui.notifications.warn(game.i18n.localize('MMMOD.ManyTokensWarning'));
            return new Error(game.i18n.localize('MMMOD.NoTokenWarning'));
        }
        return actors[0];
    }
    
    /**
     * Calculates encumbrance bonus/penalty needed to maintain current encumbrance when size changes
     * 
     * @param {Object} shifter The actor that is changing sizes
     * @param {string} newSize The system-defined abbreviation of the size the actor is changing to
     * @param {number} strChange The amount of strength the actor is gaining (negative number is strength loss)
     * @returns {Array.Object} Array of Changes targeting carry strength bonus and carry multiplier
     */
    static generateCapacityChange(shifter, newSize, strChange) {
        // Set up adjustments to strength carry bonus and carry multiplier so actor's encumbrance doesn't change
        // Subtract the buff strength change from current carry bonus, decreasing carry strength if buff adds or increasing carry strength if buff subtracts
        console.log(strChange);
        let carryBonusChange = (!!shifter.system.details.carryCapacity.bonus.total ? shifter.system.details.carryCapacity.bonus.total : 0) - strChange;
        // Counteract the size change's natural increase or decrease to carry multiplier
        let carryMultChange = (shifter.system.details.carryCapacity.multiplier.total * CONFIG.PF1.encumbranceMultipliers.normal[shifter.system.traits.size] / CONFIG.PF1.encumbranceMultipliers.normal[newSize]) - shifter.system.details.carryCapacity.multiplier.total;
        let changes = [
            { formula: carryBonusChange.toString(), operator: 'set', target: 'carryStr', modifier: 'untyped', priority: 0, value: carryBonusChange },
            { formula: carryMultChange.toString(), operator: 'add', target: 'carryMult', modifier: 'untyped', priority: 0, value: carryMultChange }
        ];
        return changes;
    }

    /**
     * Creates an attack and returns it
     * 
     * @param {string} actorId id of the actor that is changing shape
     * @param {string} formSize The size of the form being changed to in the format matching data.traits.size
     * @param {Object} attack Attack object containing name, dice details, attack count, and associated special (e.g. trip) if there is one
     * @param {boolean} onlyAttack True if this will be the only natural attack (providing 1.5x stat to damage)
     * @param {Object} [effects={ }] Object containing data for effects that may be associated with special properties of this attack
     * @param {string} [source=''] The source of the attack to add to the name
     * @param {string} [type='natural'] The type of attack for categorization on the sheet
     * @returns {Item} natural attack item
     */
    static createAttack(actorId, formSize, attack, onlyAttack, effects = { }, source = '', type = 'natural') {
        let attackData = { system: { } };
        
        const actorData = fromUuidSync(actorId); // get actor's data for reference

        // Create attack Item template
        for (const template of game.system.template.Item.attack.templates) {
            mergeObject(attackData.system, duplicate(game.system.template.Item.templates[template]));
        }
        mergeObject(attackData.system, duplicate(game.system.template.Item.attack));
        delete attackData.system.templates;

        // Begin filling in data
        attackData['name'] = game.i18n.localize('MMMOD.Attacks.' + attack.name) + (!!source ? ` (${ source })` : ''); // Add source to the attack name if there is a source
        attackData['type'] = 'attack';

        // If attack is labeled as a a primary attack or that attack type is usually primary, or it is the only attack, it is primary
        attackData['system']['enh'] = attack.enh || null;
        attackData['system']['primaryAttack'] = ((attack.primaryAttack || (!!MightyMorphinApp.naturalAttacks[attack.name] && MightyMorphinApp.naturalAttacks[attack.name].primaryAttack)) || onlyAttack);
        attackData['system']['subType'] = type; // weapon, natural, misc, class ability, etc
        if (!!attack.notes) attackData['system']['attackNotes'].push(attack.notes);

        let subAction = duplicate(globalThis.pf1.components.ItemAction.defaultData);


        subAction['naturalAttack']['primaryAttack'] = ((attack.primaryAttack || (MightyMorphinApp.naturalAttacks[attack.name]?.primaryAttack)) || onlyAttack);
        subAction['actionType'] = attack.attackType || 'mwak'; // melee, ranged, save, combat man., etc
        subAction['activation']['type'] = 'attack';
        subAction['activation']['unchained'] = { 'cost': 1, 'type': 'action' };
        if (!!attack.attackBonus) {
            const labels = attack.attackBonus.match(/\[([a-zA-Z]*?)\]/g);
            for (const label of labels) {
                let strippedLabel = label.substring(1, label.length - 1);
                let translatedLabel = game.i18n.localize('MMMOD.Attacks.' + strippedLabel);
                attack.attackBonus = attack.attackBonus.replace(label, `[${ translatedLabel }]`);
            }
        }
        subAction['attackBonus'] = attack.attackBonus || '';
        subAction['duration']['units'] = 'inst';
        subAction['range']['value'] = '' + (attack.range ?? '');
        subAction['range']['units'] = attack.attackType === 'none' ? 'none' : attack.attackType === 'rwak' ? 'ft' : 'melee'; // if ranged attack, range in feet. Else melee
        subAction['ability']['critRange'] = attack.crit || 20;
        subAction['ability']['critMult'] = attack.critMult || 2;
        subAction['range']['maxIncrements'] = attack.increment || '';
        attackData['system']['uses']['per'] = attack.charges ? 'day' : '';
        attackData['system']['uses']['maxFormula'] = '' + (attack.charges ?? '');
        attackData['system']['uses']['value'] = ((!!attack.charges && typeof(attack.charges) === 'string') ? RollPF.safeRoll(attack.charges, actorData.getRollData()).total : attack.charges) || 0;
        subAction['name'] = game.i18n.localize('MMMOD.Attacks.' + attack.name);
        subAction['measureTemplate']['type'] = attack.templateShape || '';
        subAction['measureTemplate']['size'] = attack.templateSize || '';
        subAction['spellArea'] = attack.area || '';


        // Create extra attacks if the attack count is over 1, label the extras starting at 2 (Claw 2)
        let extraAttacks = [];
        for (let i = 1; i < attack.count; i++) {
            extraAttacks = extraAttacks.concat([['', `${ game.i18n.localize('MMMOD.Attacks.' + attack.name) } ${ i + 1 }`]]);
        }
        if (!!extraAttacks.length) {
            subAction['attackParts'] = extraAttacks;
            subAction['attackName'] = `${ game.i18n.localize('MMMOD.Attacks.' + attack.name) } 1`;
        }

        // set attack notes for each special
        if (!!attack.special) {
            for (let i = 0; i < attack.special.length; i++) {
                const specialName = attack.special[i];

                // Make sure the special hasn't been deleted (if it was invalid for this level of the spell)
                if (!!specialName) {
                    // If there's details about this special in the effects object, process it. Otherwise the note is just the special name
                    if (!!effects[specialName]) {
                        subAction.effectNotes.push(effects[specialName].note);
                        // Set the save if it exists
                        if (effects[specialName].saveDesc) {
                            subAction.save.type = effects[specialName].type;
                            subAction.save.dc = effects[specialName].dc || '10';
                            subAction.save.description = effects[specialName].saveDesc;
                        }
                    }
                    else {
                        subAction.effectNotes.push(specialName);
                    }

                    // Set the description for the whole attack if there is a description
                    attackData.system.description.value = effects[specialName]?.description || '';
                }
            }
        }

        // Set attack ability to dex if weapon finesse feat and dex >= str or it's a ranged attack. Otherwise it's the actor's normal melee stat or strength
        if (!!attack.attackAbility) subAction['ability']['attack'] = attack.attackAbility;
        else if ((!!actorData.items.find(o => o.type === 'feat' && o.name === game.i18n.localize('MMMOD.WeaponFinesse')) && actorData.system.abilities.dex.total >= actorData.system.abilities.str.total) || attack.attackType === 'rwak') subAction['ability']['attack'] = 'dex';
        else subAction['ability']['attack'] = getProperty(actorData, 'system.attributes.attack.meleeAbility') || 'str';

        // ability damage is strength unless it's a ranged attack
        subAction['ability']['damage'] = (attack.type === 'rwak' || attack.damageAbility === '') ? '' : 'str';


        // ability damage multiplier is the passed multiplier or 1.5 for an only attack, 1 for a primary attack, .5 secondary
        subAction['ability']['damageMult'] = attack.mult || (onlyAttack ? 1.5 : 1);

        // Create attack sizeRoll with the passed dice stats, the actor's size, and the attack type's damage type (or '' if attack name not in naturalAttacks)
        if (attack.diceSize !== 0) {
            subAction['damage']['parts'] = [{ formula: `sizeRoll(${ attack.diceCount }, ${ attack.diceSize }, @size, ${ attack.usedClaws ? MightyMorphinApp.sizes.indexOf(actorData.system.traits.size) : MightyMorphinApp.sizes.indexOf(formSize) })`, type: {values: ((attack.type || MightyMorphinApp.naturalAttacks[attack.name]?.type) || []), custom: ''} }];

            // Create non-crit bonus damage
            if (attack.nonCrit) subAction['damage']['nonCritParts'] = [attack.nonCrit];
        }
        else {
            // use the data from nonCrit as the primary damage when diceSize is 0, because it's damage that doesn't scale from size
            if (attack.nonCrit) subAction['damage']['parts'] = [attack.nonCrit];
        }

        // Get the image for this attack name
        attackData['img'] = MightyMorphinApp.naturalAttacks[attack.name]?.img || 'systems/pf1/icons/items/inventory/monster-paw-bear.jpg';
        subAction['img'] = MightyMorphinApp.naturalAttacks[attack.name]?.img || 'systems/pf1/icons/items/inventory/monster-paw-bear.jpg';

        attackData['system']['actions'] = [subAction];
        //attackData['system']['unchainedAction'] = { 'activation': { 'cost': 1, 'type': 'action' } };


        return attackData;
    }

    /**
     * Creates the Beast Shape buff and effects on the actor using the MorphinBeastShape class
     * 
     * @param {number} [level=1] The level of beast shape spell being cast (1-4)
     * @param {number} [durationLevel=0] The level to be used in the duration calculation for the buff if desired
     * @param {string} [source='Beast Shape'] The source of the beast shape spell effect
     * @param {string} [form=null] The name of the form to change into. Must match option from morphin-options exactly.
     * @param {string} [image = null] The file name for a custom image file without the file extension
     */
    static async beastShape({ level = 1, durationLevel = 0, source = game.i18n.localize('MMMOD.Buffs.BeastShape.Name'), form = null, image = null, planarType = null, energizedTypes = null, mutatedType = null } = { }) {
        let shifter = MightyMorphinApp.getSingleActor();

        // Create beast shape form if a single actor chosen not already under effects from this mod
        let existing;
        if (!!shifter.flags['pf1-mighty-morphin']) {
            for (const change of Object.keys(shifter.flags['pf1-mighty-morphin'])) {
                if (MightyMorphinApp.shapeSpells.includes(change) || MightyMorphinApp.otherTransmutations.includes(change)) {
                    existing = change;
                    break;
                }
            }
        }

        if (!!existing) {
            return ui.notifications.warn(`${ shifter.name } ${ game.i18n.localize('MMMOD.EffectWarning') } ${ shifter.flags['pf1-mighty-morphin'][existing].source }`);
        }

        let dia = new MorphinBeastShape(level, durationLevel, shifter.uuid, source, { planarType: planarType, energizedTypes: energizedTypes, mutatedType: mutatedType });

        if (!!image) {
            dia.customImage = image;
        }
        
        if (!!form) {
            let type;
            let foundForm = MorphinOptions.animal.find(o => o.name === form);
            if (foundForm) type = 'animal';
            else {
                foundForm = MorphinOptions.magicalBeast.find(o => o.name === form);
                if (foundForm) type = 'magicalBeast';
            }
            
            if (!foundForm) {
                ui.notifications.error(form + ' ' + game.i18n.localize('MMMOD.BeastInvalidWarning'));
                return;
            }
            
            if (!dia.shapeOptions[type].some(o => o.name === form)) {
                ui.notifications.error(form + ' ' + game.i18n.localize('MMMOD.BeastInvalidWarning') + ' ' + level);
                return;
            }

            dia.buildPreviewTemplate(form, type);
            dia.applyChanges(null, form);
        }
        else dia.render(true);
    }

    /**
     * Creates the Beast Shape buff and effects on the actor using the MorphinBeastShape class
     * 
     * @param {number} [level=1] The level of beast shape spell being cast (1-4)
     * @param {number} [durationLevel=0] The level to be used in the duration calculation for the buff if desired
     * @param {string} [source='Magical Beast Shape'] The source of the beast shape spell effect
     * @param {string} [form=null] The name of the form to change into. Must match option from morphin-options exactly.
     * @param {string} [image = null] The file name for a custom image file without the file extension
     */
    static async magicalBeastShape({ level = 1, durationLevel = 0, source = game.i18n.localize('MMMOD.Buffs.MagicalBeastShape.Name'), form = null, image = null, planarType = null, energizedTypes = null, mutatedType = null } = { }) {
        let shifter = MightyMorphinApp.getSingleActor();

        // Create beast shape form if a single actor chosen not already under effects from this mod
        let existing;
        if (!!shifter.flags['pf1-mighty-morphin']) {
            for (const change of Object.keys(shifter.flags['pf1-mighty-morphin'])) {
                if (MightyMorphinApp.shapeSpells.includes(change) || MightyMorphinApp.otherTransmutations.includes(change)) {
                    existing = change;
                    break;
                }
            }
        }

        if (!!existing) {
            return ui.notifications.warn(`${ shifter.name } ${ game.i18n.localize('MMMOD.EffectWarning') } ${ shifter.flags['pf1-mighty-morphin'][existing].source }`);
        }

        let dia = new MorphinMagicalBeastShape(level, durationLevel, shifter.uuid, source, { planarType: planarType, energizedTypes: energizedTypes, mutatedType: mutatedType });

        if (!!image) {
            dia.customImage = image;
        }
        
        if (!!form) {
            let type;
            let foundForm = MorphinOptions.magicalBeast.find(o => o.name === form);
            if (foundForm) type = 'magicalBeast';
            
            if (!foundForm) {
                ui.notifications.error(form + ' ' + game.i18n.localize('MMMOD.MagicalBeastInvalidWarning'));
                return;
            }
            
            if (!dia.shapeOptions[type].some(o => o.name === form)) {
                ui.notifications.error(form + ' ' + game.i18n.localize('MMMOD.MagicalBeastInvalidWarning') + ' ' + level);
                return;
            }

            dia.buildPreviewTemplate(form, type);
            dia.applyChanges(null, form);
        }
        else dia.render(true);
    }

    /**
     * Creates the Elemental Body buff and effects on the actor using the MorphinElementalBody class
     * 
     * @param {number} [level=1] The level of elemental body spell being cast (1-4)
     * @param {number} [durationLevel=0] The level to be used in the duration calculation for the buff if desired
     * @param {string} [source='Elemental Body'] The source of the elemental body spell effect
     * @param {string} [form=null] The name of the form to change into. Must match option from morphin-options exactly.
     * @param {string} [image = null] The file name for a custom image file without the file extension
     */
    static async elementalBody({ level = 1, durationLevel = 0, source = game.i18n.localize('MMMOD.Buffs.ElementalBody.Name'), form = null, image = null, planarType = null, energizedTypes = null, mutatedType = null } = { }) {
        let shifter = MightyMorphinApp.getSingleActor();

        // Create elemental body form if a single actor chosen not already under effects from this mod
        let existing;
        if (!!shifter.flags['pf1-mighty-morphin']) {
            for (const change of Object.keys(shifter.flags['pf1-mighty-morphin'])) {
                if (MightyMorphinApp.shapeSpells.includes(change) || MightyMorphinApp.otherTransmutations.includes(change)) {
                    existing = change;
                    break;
                }
            }
        }

        if (!!existing) {
            return ui.notifications.warn(`${ shifter.name } ${ game.i18n.localize('MMMOD.EffectWarning') } ${ shifter.flags['pf1-mighty-morphin'][existing].source }`);
        }

        let dia = new MorphinElementalBody(level, durationLevel, shifter.uuid, source, { planarType: planarType, energizedTypes: energizedTypes, mutatedType: mutatedType });

        if (!!image) {
            dia.customImage = image;
        }

        if (!!form) {
            let type;
            let foundForm = MorphinOptions.elemental.find(o => o.name === form);
            if (foundForm) type = 'elemental';
            
            if (!foundForm) {
                ui.notifications.error(form + ' ' + game.i18n.localize('MMMOD.ElementalInvalidWarning'));
                return;
            }
            
            if (!dia.shapeOptions[type].some(o => o.name === form)) {
                ui.notifications.error(form + ' ' + game.i18n.localize('MMMOD.ElementalInvalidWarning') + ' ' + level);
                return;
            }

            dia.buildPreviewTemplate(form, type);
            dia.applyChanges(null, form);
        }
        else dia.render(true);
    }

    /**
     * Creates the Plant Shape buff and effects on the actor using the MorphinElementalBody class
     * 
     * @param {number} [level=1] The level of plant shape spell being cast (1-3)
     * @param {number} [durationLevel=0] The level to be used in the duration calculation for the buff if desired
     * @param {string} [source='Plant Shape'] The source of the splant shape spell effect
     * @param {string} [form=null] The name of the form to change into. Must match option from morphin-options exactly.
     * @param {string} [image = null] The file name for a custom image file without the file extension
     */
    static async plantShape({ level = 1, durationLevel = 0, source = game.i18n.localize('MMMOD.Buffs.PlantShape.Name'), form = null, image = null, planarType = null, energizedTypes = null, mutatedType = null } = { }) {
        let shifter = MightyMorphinApp.getSingleActor();

        // Create plant shape form if a single actor chosen not already under effects from this mod
        let existing;
        if (!!shifter.flags['pf1-mighty-morphin']) {
            for (const change of Object.keys(shifter.flags['pf1-mighty-morphin'])) {
                if (MightyMorphinApp.shapeSpells.includes(change) || MightyMorphinApp.otherTransmutations.includes(change)) {
                    existing = change;
                    break;
                }
            }
        }

        if (!!existing) {
            return ui.notifications.warn(`${ shifter.name } ${ game.i18n.localize('MMMOD.EffectWarning') } ${ shifter.flags['pf1-mighty-morphin'][existing].source }`);
        }
        
        let dia = new MorphinPlantShape(level, durationLevel, shifter.uuid, source, { planarType: planarType, energizedTypes: energizedTypes, mutatedType: mutatedType });

        if (!!image) {
            dia.customImage = image;
        }

        if (!!form) {
            let type;
            let foundForm = MorphinOptions.plant.find(o => o.name === form);
            if (foundForm) type = 'plant';
            
            if (!foundForm) {
                ui.notifications.error(form + ' ' + game.i18n.localize('MMMOD.PlantInvalidWarning'));
                return;
            }
            
            if (!dia.shapeOptions[type].some(o => o.name === form)) {
                ui.notifications.error(form + ' ' + game.i18n.localize('MMMOD.PlantInvalidWarning') + ' ' + level);
                return;
            }

            dia.buildPreviewTemplate(form, type);
            dia.applyChanges(null, form);
        }
        else dia.render(true);
    }
    
    /**
     * Creates the Vermin Shape buff and effects on the actor using the MorphinElementalBody class
     * 
     * @param {number} [level=1] The level of plant shape spell being cast (1-3)
     * @param {number} [durationLevel=0] The level to be used in the duration calculation for the buff if desired
     * @param {string} [source='Vermin Shape'] The source of the splant shape spell effect
     * @param {string} [form=null] The name of the form to change into. Must match option from morphin-options exactly.
     * @param {string} [image = null] The file name for a custom image file without the file extension
     */
    static async verminShape({ level = 1, durationLevel = 0, source = game.i18n.localize('MMMOD.Buffs.VerminShape.Name'), form = null, image = null, planarType = null, energizedTypes = null, mutatedType = null } = { }) {
        let shifter = MightyMorphinApp.getSingleActor();

        // Create plant shape form if a single actor chosen not already under effects from this mod
        let existing;
        if (!!shifter.flags['pf1-mighty-morphin']) {
            for (const change of Object.keys(shifter.flags['pf1-mighty-morphin'])) {
                if (MightyMorphinApp.shapeSpells.includes(change) || MightyMorphinApp.otherTransmutations.includes(change)) {
                    existing = change;
                    break;
                }
            }
        }

        if (!!existing) {
            return ui.notifications.warn(`${ shifter.name } ${ game.i18n.localize('MMMOD.EffectWarning') } ${ shifter.flags['pf1-mighty-morphin'][existing].source }`);
        }

        let dia = new MorphinVerminShape(level, durationLevel, shifter.uuid, source, { planarType: planarType, energizedTypes: energizedTypes, mutatedType: mutatedType });

        if (!!image) {
            dia.customImage = image;
        }

        if (!!form) {
            let type;
            let foundForm = MorphinOptions.vermin.find(o => o.name === form);
            if (foundForm) type = 'vermin';
            
            if (!foundForm) {
                ui.notifications.error(form + ' ' + game.i18n.localize('MMMOD.VerminInvalidWarning'));
                return;
            }
            
            if (!dia.shapeOptions[type].some(o => o.name === form)) {
                ui.notifications.error(form + ' ' + game.i18n.localize('MMMOD.VerminInvalidWarning') + ' ' + level);
                return;
            }

            dia.buildPreviewTemplate(form, type);
            dia.applyChanges(null, form);
        }
        else dia.render(true);
    }
    
    /**
     * Creates the Giant Form buff and effects on the actor using the MorphinElementalBody class
     * 
     * @param {number} [level=1] The level of plant shape spell being cast (1-3)
     * @param {number} [durationLevel=0] The level to be used in the duration calculation for the buff if desired
     * @param {string} [source='Giant Form'] The source of the splant shape spell effect
     * @param {string} [form=null] The name of the form to change into. Must match option from morphin-options exactly.
     * @param {string} [image = null] The file name for a custom image file without the file extension
     */
    static async giantForm({ level = 1, durationLevel = 0, source = game.i18n.localize('MMMOD.Buffs.GiantForm.Name'), form = null, image = null, planarType = null, energizedTypes = null, mutatedType = null } = { }) {
        let shifter = MightyMorphinApp.getSingleActor();

        // Create plant shape form if a single actor chosen not already under effects from this mod
        let existing;
        if (!!shifter.flags['pf1-mighty-morphin']) {
            for (const change of Object.keys(shifter.flags['pf1-mighty-morphin'])) {
                if (MightyMorphinApp.shapeSpells.includes(change) || MightyMorphinApp.otherTransmutations.includes(change)) {
                    existing = change;
                    break;
                }
            }
        }

        if (!!existing) {
            return ui.notifications.warn(`${ shifter.name } ${ game.i18n.localize('MMMOD.EffectWarning') } ${ shifter.flags['pf1-mighty-morphin'][existing].source }`);
        }

        let dia = new MorphinGiantForm(level, durationLevel, shifter.uuid, source, { planarType: planarType, energizedTypes: energizedTypes, mutatedType: mutatedType });

        if (!!image) {
            dia.customImage = image;
        }

        if (!!form) {
            let type;
            let foundForm = MorphinOptions.giant.find(o => o.name === form);
            if (foundForm) type = 'giant';
            
            if (!foundForm) {
                ui.notifications.error(form + ' ' + game.i18n.localize('MMMOD.GiantInvalidWarning'));
                return;
            }
            
            if (!dia.shapeOptions[type].some(o => o.name === form)) {
                ui.notifications.error(form + ' ' + game.i18n.localize('MMMOD.GiantInvalidWarning') + ' ' + level);
                return;
            }

            dia.buildPreviewTemplate(form, type);
            dia.applyChanges(null, form);
        }
        else dia.render(true);
    }
    
    /**
     * Creates the Giant Form buff and effects on the actor using the MorphinElementalBody class
     * 
     * @param {number} [level=1] The level of plant shape spell being cast (1-3)
     * @param {number} [durationLevel=0] The level to be used in the duration calculation for the buff if desired
     * @param {string} [source='Alter Self'] The source of the splant shape spell effect
     * @param {string} [form=null] The name of the form to change into. Must match option from morphin-options exactly.
     * @param {string} [image = null] The file name for a custom image file without the file extension
     */
    static async alterSelf({ level = 1, durationLevel = 0, source = game.i18n.localize('MMMOD.Buffs.AlterSelf.Name'), form = null, image = null, planarType = null, energizedTypes = null, mutatedType = null } = { }) {
        let shifter = MightyMorphinApp.getSingleActor();

        // Create plant shape form if a single actor chosen not already under effects from this mod
        let existing;
        if (!!shifter.flags['pf1-mighty-morphin']) {
            for (const change of Object.keys(shifter.flags['pf1-mighty-morphin'])) {
                if (MightyMorphinApp.shapeSpells.includes(change) || MightyMorphinApp.otherTransmutations.includes(change)) {
                    existing = change;
                    break;
                }
            }
        }

        if (!!existing) {
            return ui.notifications.warn(`${ shifter.name } ${ game.i18n.localize('MMMOD.EffectWarning') } ${ shifter.flags['pf1-mighty-morphin'][existing].source }`);
        }

        let dia = new MorphinAlterSelf(level, durationLevel, shifter.uuid, source, { planarType: planarType, energizedTypes: energizedTypes, mutatedType: mutatedType });

        if (!!image) {
            dia.customImage = image;
        }

        if (!!form) {
            let type;
            let foundForm = MorphinOptions.humanoid.find(o => o.name === form);
            if (foundForm) type = 'humanoid';
            
            if (!foundForm) {
                ui.notifications.error(form + ' ' + game.i18n.localize('MMMOD.AlterInvalidWarning'));
                return;
            }
            
            if (!dia.shapeOptions[type].some(o => o.name === form)) {
                ui.notifications.error(form + ' ' + game.i18n.localize('MMMOD.AlterInvalidWarning') + ' ' + level);
                return;
            }

            dia.buildPreviewTemplate(form, type);
            dia.applyChanges(null, form);
        }
        else dia.render(true);
    }

    
    /**
     * Creates the Giant Form buff and effects on the actor using the MorphinElementalBody class
     * 
     * @param {number} [level=1] The level of plant shape spell being cast (1-3)
     * @param {number} [durationLevel=0] The level to be used in the duration calculation for the buff if desired
     * @param {string} [source='Form of the Dragon'] The source of the splant shape spell effect
     * @param {string} [form=null] The name of the form to change into. Must match option from morphin-options exactly.
     * @param {string} [image = null] The file name for a custom image file without the file extension
     */
    static async formOfTheDragon({ level = 1, durationLevel = 0, source = game.i18n.localize('MMMOD.Buffs.FormOfTheDragon.Name'), form = null, image = null, planarType = null, energizedTypes = null, mutatedType = null } = { }) {
        let shifter = MightyMorphinApp.getSingleActor();

        // Create plant shape form if a single actor chosen not already under effects from this mod
        let existing;
        if (!!shifter.flags['pf1-mighty-morphin']) {
            for (const change of Object.keys(shifter.flags['pf1-mighty-morphin'])) {
                if (MightyMorphinApp.shapeSpells.includes(change) || MightyMorphinApp.otherTransmutations.includes(change)) {
                    existing = change;
                    break;
                }
            }
        }

        if (!!existing) {
            return ui.notifications.warn(`${ shifter.name } ${ game.i18n.localize('MMMOD.EffectWarning') } ${ shifter.flags['pf1-mighty-morphin'][existing].source }`);
        }

        let dia = new MorphinFormOfTheDragon(level, durationLevel, shifter.uuid, source, { planarType: planarType, energizedTypes: energizedTypes, mutatedType: mutatedType });

        if (!!image) {
            dia.customImage = image;
        }

        if (!!form) {
            let type;
            let foundForm = MorphinOptions.dragon.find(o => o.name === form);
            if (foundForm) type = 'dragon';
            
            if (!foundForm) {
                ui.notifications.error(form + ' ' + game.i18n.localize('MMMOD.DragonInvalidWarning'));
                return;
            }
            
            if (!dia.shapeOptions[type].some(o => o.name === form)) {
                ui.notifications.error(form + ' ' + game.i18n.localize('MMMOD.DragonInvalidWarning') + ' ' + level);
                return;
            }

            dia.buildPreviewTemplate(form, type);
            dia.applyChanges(null, form);
        }
        else dia.render(true);
    }

    /**
     * Creates the Beast Shape buff and effects on the actor using the MorphinBeastShape class
     * 
     * @param {number} [level=1] The level of beast shape spell being cast (1-4)
     * @param {number} [durationLevel=0] The level to be used in the duration calculation for the buff if desired
     * @param {string} [source='Shifter Wild Shape'] The source of the beast shape spell effect
     * @param {string} [form=null] The name of the form to change into. Must match option from morphin-options exactly.
     * @param {string} [image = null] The file name for a custom image file without the file extension
     */
    static async shifterWildShape({ durationLevel = 0, source = game.i18n.localize('MMMOD.Buffs.ShifterWildShape.Name'), aspect = null, form = null, image = null, planarType = null, energizedTypes = null, mutatedType = null } = { }) {
        let shifter = MightyMorphinApp.getSingleActor();

        if (!aspect) return ui.notifications.error(game.i18n.localize('MMMOD.MustSpecifyAspect'));
        if (!form || !['major','minor'].includes(form)) return ui.notifications.error(game.i18n.localize('MMMOD.MustSpecifyForm'));

        // Create beast shape form if a single actor chosen not already under effects from this mod
        let existing;
        if (!!shifter.flags['pf1-mighty-morphin']) {
            for (const change of Object.keys(shifter.flags['pf1-mighty-morphin'])) {
                if (form === 'major' && (MightyMorphinApp.shapeSpells.includes(change) || MightyMorphinApp.otherTransmutations.includes(change))) {
                    existing = change;
                    break;
                }
                if (form === 'minor' && change === 'shifter-aspect') {
                    existing = change;
                    break;
                }
            }
        }

        if (!!existing) {
            return ui.notifications.warn(`${ shifter.name } ${ game.i18n.localize('MMMOD.EffectWarning') } ${ shifter.flags['pf1-mighty-morphin'][existing].source }`);
        }

        if (!shifter.classes.shifter) return ui.notifications.error('You must have the Shifter class to use this.');
    
        let dia = new MorphinShifterShape( durationLevel, shifter.uuid, source, { planarType: planarType, energizedTypes: energizedTypes, mutatedType: mutatedType });

        if (!!image) {
            dia.customImage = image;
        }
        
        let type;
        let foundForm = true;
        
        if (aspect instanceof Array) {
            for (const singleAspect of aspect) {
                const found = MorphinOptions.shifterWildShape.some(o => o.name === singleAspect);
                if (!found) {
                    foundForm = false;
                    aspect = singleAspect;
                    break;
                }
            }
        }
        else {
            foundForm = MorphinOptions.shifterWildShape.some(o => o.name === aspect);
        }
        
        if (foundForm) type = 'shifterWildShape';
        
        if (!foundForm) {
            ui.notifications.error(aspect + ' ' + game.i18n.localize('MMMOD.ShifterInvalidWarning'));
            return;
        }

        if (form === 'minor') {
            MightyMorphinApp.shifterAspect({ aspect: aspect, source: game.i18n.localize('MMMOD.Buffs.ShifterAspect.Name'), image: image, type: type, durationLevel: durationLevel });
        }
        else {
            dia.buildPreviewTemplate(aspect, form, type);
            dia.applyChanges(null, aspect);
        }
    }

    /**
     * Creates the Beast Shape buff and effects on the actor using the MorphinBeastShape class
     * 
     * @param {number} [level=1] The level of beast shape spell being cast (1-4)
     * @param {number} [durationLevel=0] The level to be used in the duration calculation for the buff if desired
     * @param {string} [source='Shifter Wild Shape'] The source of the beast shape spell effect
     * @param {string} [form=null] The name of the form to change into. Must match option from morphin-options exactly.
     * @param {string} [image = null] The file name for a custom image file without the file extension
     */
    static async shifterClawsOn({ aspect = null } = { }) {
        let shifter = MightyMorphinApp.getSingleActor();

        if (!shifter.classes.shifter) return ui.notifications.error('You must have the Shifter class to use this.');
    
        let foundForm = true;
        let alternates = new Set();
        
        if (!!aspect && aspect instanceof Array) {
            for (const singleAspect of aspect) {
                const found = MorphinOptions.shifterWildShape.some(o => o.name === singleAspect);
                if (!found) {
                    foundForm = false;
                    aspect = singleAspect;
                    break;
                }
                MorphinChanges.changes.shifterWildShape[singleAspect].alternates.forEach(o => alternates.add(o));
            }
        }
        else if (!!aspect) {
            foundForm = MorphinOptions.shifterWildShape.some(o => o.name === aspect);
            if (foundForm) MorphinChanges.changes.shifterWildShape[singleAspect].alternates.forEach(o => alternates.add(o));
        }
        
        if (!foundForm) {
            ui.notifications.error(aspect + ' ' + game.i18n.localize('MMMOD.ShifterInvalidWarning'));
            return;
        }

        const clawsData = {};
        for (const level of Object.keys(MorphinChanges.changes.shifterWildShape.claws)) {
            if (shifter.classes.shifter.level >= level) mergeObject(clawsData, MorphinChanges.changes.shifterWildShape.claws[level]);
        }

        clawsData.primaryAttack = true;

        const attack = MightyMorphinApp.createAttack(shifter.uuid, 'med', clawsData, false, []);

        if (alternates.size > 0) {

            const buttons = {
                claw: {
                    label: game.i18n.localize('MMMOD.Attacks.Claw'), callback: async () => await shifter.createEmbeddedDocuments('Item', [attack])
                }
            };

            for (const alternate of alternates) {
                const altData = duplicate(clawsData);
                altData['type'] = MightyMorphinApp.naturalAttacks[alternate].type;
                const altAttack = MightyMorphinApp.createAttack(shifter.uuid, 'med', altData, false, []);
                altAttack.name = altAttack.name + ` (${ game.i18n.localize('MMMOD.Attacks.' + alternate) })`;
                buttons[alternate] = { label: game.i18n.localize('MMMOD.Attacks.' + alternate), callback: async () => await shifter.createEmbeddedDocuments('Item', [altAttack]) };
            }

            const dialog = new Dialog({
                title: 'Choose an effect',
                content: 'Choose an effect to revert.',
                buttons: buttons
              });
          
              dialog.render(true);

        }
        else {
            await shifter.createEmbeddedDocuments('Item', [attack]);
        }
    }

    /**
     * Updates setting for folder containing form images
     */
    // static updateImageFolder() {
    //     let folder = game.settings.get('pf1-mighty-morphin', 'imagePath');
    //     if (!!folder.length && folder.charAt(folder.length - 1) === '/') {
    //         folder = folder.slice(0, folder.length - 1);
    //         game.settings.set('pf1-mighty-morphin', 'imagePath', folder);
    //     }

    //     MightyMorphinApp.imageFolder = folder;
    // }

    /**
     * Searches for an image matching the passed form in the configured folder
     * 
     * @param {string} formName The name of the form chosen to change into
     * @returns string containing the path to the image matching the form
     */
    static async findImage(formName, customImage) {
        let imageDir = MightyMorphinApp.imageFolder;
        let foundImage = '';
        try {
            let imageList = await FilePicker.browse(imageDir.activeSource, imageDir.current);
            let sanitizedFormName = customImage ? encodeURI(formName) : formName.replace(/[^a-zA-Z0-9]/gm, '');
            for (const image of imageList.files) {
                let imageName = image.split('/').pop();
                for (const ext of Object.keys(CONST.IMAGE_FILE_EXTENSIONS)) {
                    if (imageName === `${ sanitizedFormName }.${ ext }`) {
                        foundImage = image;
                        break;
                    }
                }
                if (!!foundImage) break;
            }
        }
        catch (e) {
            console.error(game.i18n.localize('MMMOD.Name') + ': ', e);
            console.warn(game.i18n.localize('MMMOD.Name') + ': ' + game.i18n.localize('MMMOD.FilePermissionWarning'));
        }
        
        return foundImage;
    }

    /**
     * 
     * @param {string} image The path and file name of the new image
     * @param {object} shifter The actor that is changing
     * @returns object containing the old image and old prototype image data
     */
    static async changeTokenImage(image, shifter) {
        // Prepare data for image change
        let oldImage = { img: '' };
        let oldProtoImage = { token: { img: '' } };
        
        let token = shifter.token || canvas.tokens.ownedTokens.filter(o => o.actor.id === fromUuidSync(shifter.uuid).id);
        if (!!token) {
            if (Array.isArray(token) && token.length > 1) {
                oldImage.img = token[0].document.texture.src;
                if (!!image) {
                    let tokenUpdates = token.map(o => ({ _id: o.id, 'texture.src': image }));
                    await canvas.scene.updateEmbeddedDocuments('Token', tokenUpdates);
                }
            }
            else {
                if (Array.isArray(token)) token = token[0].document;
                if (!!image) {
                    oldImage.img = token.texture.src;
                    await token.update({ 'texture.src': image });
                }
            }
        }
        oldProtoImage.token.img = shifter.prototypeToken.texture.src;

        return { oldImage: oldImage, oldProtoImage: oldProtoImage };
    }

    /**
     * Choose among the passed forms to process the revert function
     * 
     * @param {Array} choices 
     * @returns the value of the clicked button
     */
    static async chooseEffectToRevert(choices) {
        return new Promise((resolve, reject) => {

            const dialog = new Dialog({
              title: 'Choose an effect',
              content: 'Choose an effect to revert.',
              buttons: choices.filter(o => !!o.label).map(o => ({ label: o.label, callback: () => resolve(o.slug) })),
              close: () => { reject(false); }
            });
        
            dialog.render(true);
          });
    }

    /**
     * 
     */
    static async addStrongJawConditionals() {
        let shifter = MightyMorphinApp.getSingleActor();

        let appliedSpells = Object.values(shifter.flags['pf1-mighty-morphin']).map(o => o.source);
        const attacks = shifter.items.filter(o => o.type === 'attack' && o.system.subType === 'natural' && appliedSpells.some(p => o.name.includes(p)));
        const conditional = { 'default': true, 'name': game.i18n.localize('MMMOD.StrongJaw'), 'modifiers': [{ 'formula': '2', 'target': 'size', 'subTarget': '', 'type': '', 'damageType': { 'values': [], 'custom': '' }, 'critical': '' } ] };
        for (const attack of attacks) {
            for (const action of attack.actions) {
                conditional._id = randomID();
                conditional.modifiers[0]._id = randomID();
                const conditionals = action.data.conditionals;
                conditionals.push(conditional);
                action.update({'data.conditionals': conditionals});
            }
        }
        if (attacks.length > 0) ui.notifications.info('Added Strong Jaw conditional modifiers to ' + attacks.map(o => o.name.split(' (')[0]).join(', '));
        else ui.notifications.info('There were no attacks to modify');
    }
}

// Image folder
MightyMorphinApp.imageFolder = '';

// Attack data used by createAttacks function
MightyMorphinApp.naturalAttacks = {
    'Bite': { img: 'systems/pf1/icons/items/inventory/monster-head.jpg', type: ['bludgeoning','piercing','slashing'], primaryAttack: true },
    'Claw': { img: 'systems/pf1/icons/skills/blood_06.jpg', type: ['bludgeoning', 'slashing'], primaryAttack: true },
    'Gore': { img: 'systems/pf1/icons/items/inventory/monster-horn.jpg', type: ['piercing'], primaryAttack: true },
    'Hoof': { img: 'systems/pf1/icons/items/inventory/monster-hoof.jpg', type: ['bludgeoning'], primaryAttack: false },
    'Tentacle': { img: 'systems/pf1/icons/items/inventory/monster-octopus.jpg', type: ['bludgeoning'], primaryAttack: false },
    'Wing': { img: 'systems/pf1/icons/skills/blue_02.jpg', type: ['bludgeoning'], primaryAttack: false },
    'Pincers': { img: 'systems/pf1/icons/items/inventory/monster-claw.jpg', type: ['bludgeoning'], primaryAttack: false },
    'TailSlap': { img: 'systems/pf1/icons/items/inventory/monster-tail.jpg', type: ['bludgeoning'], primaryAttack: false },
    'Slam': { img: 'systems/pf1/icons/items/inventory/monster-forearm.jpg', type: ['bludgeoning'], primaryAttack: true },
    'Sting': { img: 'systems/pf1/icons/items/inventory/monster-scorpion.jpg', type: ['piercing'], primaryAttack: true },
    'Talons': { img: 'systems/pf1/icons/items/inventory/monster-talon-green.jpg', type: ['slashing'], primaryAttack: true }
};

MightyMorphinApp.specialUUIDs = {
    'BloodDrain': 'Compendium.pf-content.pf-universal-monster-rules.Item.2L7pvHVWFGzx03n7',
    'Breath': 'Compendium.pf-content.pf-universal-monster-rules.Item.w2WoppZqJOZRY4xI',
    'BreathWeapon': 'Compendium.pf-content.pf-universal-monster-rules.Item.w2WoppZqJOZRY4xI',
    'BreathWeaponBlack': 'Compendium.pf-content.pf-universal-monster-rules.Item.w2WoppZqJOZRY4xI',
    'BreathWeaponBlue': 'Compendium.pf-content.pf-universal-monster-rules.Item.w2WoppZqJOZRY4xI',
    'BreathWeaponGreen': 'Compendium.pf-content.pf-universal-monster-rules.Item.w2WoppZqJOZRY4xI',
    'BreathWeaponRed': 'Compendium.pf-content.pf-universal-monster-rules.Item.w2WoppZqJOZRY4xI',
    'BreathWeaponWhite': 'Compendium.pf-content.pf-universal-monster-rules.Item.w2WoppZqJOZRY4xI',
    'Burn': 'Compendium.pf-content.pf-universal-monster-rules.Item.pxGfnJIlADL0UpyO',
    'Constrict': 'Compendium.pf-content.pf-universal-monster-rules.Item.uiMteAicpAgqnmVr',
    'Ferocity': 'Compendium.pf-content.pf-universal-monster-rules.Item.itiLDlB5BHlUB8os',
    'FrightfulPresence300': 'Compendium.pf-content.pf-universal-monster-rules.Item.tbYOVRDBl2uywz2o',
    'Grab': 'Compendium.pf-content.pf-universal-monster-rules.Item.gliqmaokX6kcR9eU',
    'HoldBreath': 'Compendium.pf-content.pf-universal-monster-rules.Item.tO1RgCbgjBt3Kmkw',
    'Jet200': 'Compendium.pf-content.pf-universal-monster-rules.Item.qg6hgwgShcrxvT36',
    'Jet240': 'Compendium.pf-content.pf-universal-monster-rules.Item.qg6hgwgShcrxvT36',
    'Jet260': 'Compendium.pf-content.pf-universal-monster-rules.Item.qg6hgwgShcrxvT36',
    'Jet300': 'Compendium.pf-content.pf-universal-monster-rules.Item.qg6hgwgShcrxvT36',
    'Jet90': 'Compendium.pf-content.pf-universal-monster-rules.Item.qg6hgwgShcrxvT36',
    'NoBreath': 'Compendium.pf-content.pf-universal-monster-rules.Item.ja2x2DmUJp3aUzP1',
    'Poison': 'Compendium.pf-content.pf-universal-monster-rules.Item.Xo1XZAVxRo4m6ayA',
    'Pounce': 'Compendium.pf-content.pf-universal-monster-rules.Item.iPIk1grlc7ilT8iX',
    'PowerfulCharge': 'Compendium.pf-content.pf-universal-monster-rules.Item.7MyJ5teWASJfFwN6',
    'Pull': 'Compendium.pf-content.pf-universal-monster-rules.Item.mpBvgTQGi0KX13tF',
    'Rake1Claw': 'Compendium.pf-content.pf-universal-monster-rules.Item.oCNZwfsQJ8DXfOdY',
    'Rake2Claws': 'Compendium.pf-content.pf-universal-monster-rules.Item.oCNZwfsQJ8DXfOdY',
    'Rake2Talons': 'Compendium.pf-content.pf-universal-monster-rules.Item.oCNZwfsQJ8DXfOdY',
    'Rake4Claws': 'Compendium.pf-content.pf-universal-monster-rules.Item.oCNZwfsQJ8DXfOdY',
    'Rake6Claws': 'Compendium.pf-content.pf-universal-monster-rules.Item.oCNZwfsQJ8DXfOdY',
    'Rend': 'Compendium.pf-content.pf-universal-monster-rules.Item.N6x2eWgqlAtfV5bn',
    'RockCatching': 'Compendium.pf-content.pf-universal-monster-rules.Item.uyC8oF6hePVPbvP4',
    'RockThrowing': 'Compendium.pf-content.pf-universal-monster-rules.Item.JyjfSUJPBDU8V6dD',
    'Trample': 'Compendium.pf-content.pf-universal-monster-rules.Item.PEe7E2mccDX0TkTf',
    'Trip': 'Compendium.pf-content.pf-universal-monster-rules.Item.RClhBMb3VuAWhqRQ',
    'Web': 'Compendium.pf-content.pf-universal-monster-rules.Item.TsIdL0QgosZ2bcew',
    'Whirlwind': 'Compendium.pf-content.pf-universal-monster-rules.Item.AIXVFMNYu9NMvgvV'
};