import { MorphinChanges } from './morphin-changes.js';
import { MorphinBeastShape } from './morphin-beast-shape.js';
import { MorphinElementalBody } from './morphin-elemental-body.js';
import { MorphinPlantShape } from './morphin-plant-shape.js';
import DirectoryPicker from './DirectoryPicker.js';

/**
 * Class for functions exposed to users of pf1 system and helpers
 */
export class MightyMorphinApp {

    /**
     * Applies Enlarge Person buff and effects to selected actor
     */
    static async enlargePerson() {
        let shifter = MightyMorphinApp.getSingleActor(); // Ensure only a single actor is being processed
        let changeData = MorphinChanges.changes.enlargePerson; // get buff data

        // Only continue if a single actor and it is not already under any effects provided by this module
        if (!!shifter && !shifter.data.flags.mightyMorphin) {
            let buff = shifter.items.find(o => o.type === 'buff' && o.name === 'Enlarge Person');
            let shifterSize = shifter.data.data.traits.size;

            // Create the buff if it doesn't exist, otherwise toggle it on
            if (!buff) {
                // Create template buff Item
                let buffData = duplicate(game.data.system.template.Item.buff);
                for (let t of buffData.templates) {
                    mergeObject(buffData, duplicate(game.system.template.Item.templates[t]));
                }
                delete buffData.templates;
                buff = await Item.create({ name: 'Enlarge Person', type: 'buff', data: buffData }, { temporary: true });

                // Create the buff on the actor, change the icon, populate the changes, turn it on
                let buffAdded = await shifter.createEmbeddedDocuments('Item', [buff.data]);
                await buffAdded[0].update({ 'img': 'systems/pf1/icons/skills/yellow_14.jpg', 'data.changes': changeData.changes, 'data.active': true });
            }
            else {
                buff.update({ 'data.active': true });
            }

            // Find the size the number of steps away from current, number of steps provided by changeData
            let newSize = MightyMorphinApp.getNewSize(shifterSize, changeData.size);

            let armorChangeFlag = [];
            let armorToChange = [];
            // Double armor and shield AC when moving from tiny to small (tiny and below armor AC is half normal)
            if (shifterSize === 'tiny') {
                let armorAndShields = shifter.items.filter(o => o.data.type === 'equipment' && (o.data.data.equipmentType === 'armor' || o.data.data.equipmentType === 'shield'));

                for (let item of armorAndShields) {
                    armorChangeFlag.push({ _id: item.id, data: { armor: { value: item.data.data.armor.value } } }); // store original armor data in flags
                    armorToChange.push({ _id: item.id, data: { armor: { value: (item.data.data.armor.value * 2) } } }); // change to push to actor's item
                }
            }

            // Update all items that were found to need updates
            if (!!armorToChange.length) {
                await shifter.updateEmbeddedDocuments('Item', armorToChange);
            }

            // Update the actor size and store flags
            await shifter.update({ 'data.traits.size': newSize, 'flags.mightyMorphin': { source: 'Enlarge Person', buffName: 'Enlarge Person', size: shifterSize, armor: armorChangeFlag } });
        }
        else if (!!shifter?.data.flags.mightyMorphin) {
            ui.notifications.warn(shifter.name + ' is already under the effects of a change from ' + shifter.data.flags.mightyMorphin.source);
        }
    }

    /**
     * Applies Animal Growth buff and effects to selected actor
     */
    static async animalGrowth() {
        let shifter = MightyMorphinApp.getSingleActor(); // Ensure only a single actor is being processed
        let changeData = MorphinChanges.changes.animalGrowth; // get buff data

        // Only continue if a single actor and it is not already under any effects provided by this module
        if (!!shifter && !shifter.data.flags.mightyMorphin) {
            let buff = shifter.items.find(o => o.type === 'buff' && o.name === 'Animal Growth');
            let shifterSize = shifter.data.data.traits.size;

            // Create the buff if it doesn't exist, otherwise toggle it on
            if (!buff) {
                // Create template buff Item
                let buffData = duplicate(game.data.system.template.Item.buff);
                for (let t of buffData.templates) {
                    mergeObject(buffData, duplicate(game.system.template.Item.templates[t]));
                }
                delete buffData.templates;
                buff = await Item.create({ name: 'Animal Growth', type: 'buff', data: buffData }, { temporary: true });

                // Create the buff on the actor, change the icon, populate the changes, turn it on
                let buffAdded = await shifter.createEmbeddedDocuments('Item', [buff.data]);
                await buffAdded[0].update({ 'img': 'systems/pf1/icons/spells/wild-orange-3.jpg', 'data.changes': changeData.changes, 'data.active': true });
            }
            else {
                buff.update({ 'data.active': true });
            }

            // Find the size the number of steps away from current, number of steps provided by changeData
            let newSize = MightyMorphinApp.getNewSize(shifterSize, changeData.size);

            let armorChangeFlag = [];
            let armorToChange = [];
            // Double armor and shield AC when moving from tiny to small (tiny and below armor AC is half normal)
            if (shifterSize === 'tiny') {
                let armorAndShields = shifter.items.filter(o => o.data.type === 'equipment' && (o.data.data.equipmentType === 'armor' || o.data.data.equipmentType === 'shield'));

                for (let item of armorAndShields) {
                    armorChangeFlag.push({ _id: item.id, data: { armor: { value: item.data.data.armor.value } } }); // store original armor data in flags
                    armorToChange.push({ _id: item.id, data: { armor: { value: (item.data.data.armor.value * 2) } } }); // change to push to actor's item
                }
            }

            // Update all items that were found to need updates
            if (!!armorToChange.length) {
                await shifter.updateEmbeddedDocuments('Item', armorToChange);
            }

            // Update the actor size and store flags
            await shifter.update({ 'data.traits.size': newSize, 'flags.mightyMorphin': { source: 'Animal Growth', buffName: 'Animal Growth', size: shifterSize, armor: armorChangeFlag } });
        }
        else if (!!shifter?.data.flags.mightyMorphin) {
            ui.notifications.warn(shifter.name + ' is already under the effects of a change from ' + shifter.data.flags.mightyMorphin.source);
        }
    }

    /**
     * Applies Legendary Proportions buff and effects to selected actor
     */
    static async legendaryProportions() {
        let shifter = MightyMorphinApp.getSingleActor(); // Ensure only a single actor is being processed
        let changeData = MorphinChanges.changes.legendaryProportions; // get buff data

        // Only continue if a single actor and it is not already under any effects provided by this module
        if (!!shifter && !shifter.data.flags.mightyMorphin) {
            let buff = shifter.items.find(o => o.type === 'buff' && o.name === 'Legendary Proportions');
            let shifterSize = shifter.data.data.traits.size;

            // Create the buff if it doesn't exist, otherwise toggle it on
            if (!buff) {
                // Create template buff Item
                let buffData = duplicate(game.data.system.template.Item.buff);
                for (let t of buffData.templates) {
                    mergeObject(buffData, duplicate(game.system.template.Item.templates[t]));
                }
                delete buffData.templates;
                buff = await Item.create({ name: 'Legendary Proportions', type: 'buff', data: buffData }, { temporary: true });

                // Create the buff on the actor, change the icon, populate the changes, turn it on
                let buffAdded = await shifter.createEmbeddedDocuments('Item', [buff.data]);
                await buffAdded[0].update({ 'img': 'systems/pf1/icons/skills/yellow_14.jpg', 'data.changes': changeData.changes, 'data.active': true });
            }
            else {
                buff.update({ 'data.active': true });
            }

            let newSize = MightyMorphinApp.getNewSize(shifterSize, changeData.size);

            let armorChangeFlag = [];
            let armorToChange = [];
            // Double armor and shield AC when moving from tiny to small (tiny and below armor AC is half normal)
            if (shifterSize === 'tiny') {
                let armorAndShields = shifter.items.filter(o => o.data.type === 'equipment' && (o.data.data.equipmentType === 'armor' || o.data.data.equipmentType === 'shield'));

                for (let item of armorAndShields) {
                    armorChangeFlag.push({ _id: item.id, data: { armor: { value: item.data.data.armor.value } } }); // store original armor data in flags
                    armorToChange.push({ _id: item.id, data: { armor: { value: (item.data.data.armor.value * 2) } } }); // change to push to actor's item
                }
            }

            // Update all items that were found to need updates
            if (!!armorToChange.length) {
                await shifter.updateEmbeddedDocuments('Item', armorToChange);
            }

            let oldDR = shifter.data.data.traits.dr;
            let newDR = (!!oldDR ? oldDR + '; ' : '') + '10/adamantine';

            // Update the actor size and store flags
            await shifter.update({ 'data.traits.size': newSize, 'data.traits.dr': newDR, 'flags.mightyMorphin': { source: 'Legendary Proportions', buffName: 'Legendary Proportions', size: shifterSize, armor: armorChangeFlag, data: { traits: { dr: oldDR } } } });
        }
        else if (!!shifter?.data.flags.mightyMorphin) {
            ui.notifications.warn(shifter.name + ' is already under the effects of a change from ' + shifter.data.flags.mightyMorphin.source);
        }
    }

    /**
     * Applies Frightful Aspect buff and effects to selected actor
     */
    static async frightfulAspect() {
        let shifter = MightyMorphinApp.getSingleActor(); // Ensure only a single actor is being processed
        let changeData = MorphinChanges.changes.frightfulAspect; // get buff data

        // Only continue if a single actor and it is not already under any effects provided by this module
        if (!!shifter && !shifter.data.flags.mightyMorphin) {
            let buff = shifter.items.find(o => o.type === 'buff' && o.name === 'Frightful Aspect');
            let shifterSize = shifter.data.data.traits.size;

            // Get caster level from user for effect scaling
            let casterLevel = await Dialog.prompt({
                content: '<label>Input Caster Level</label><input type="number">',
                callback: (html) => html.find('input').val()
            });

            // Create the buff if it doesn't exist, otherwise toggle it on
            if (!buff) {
                // Create template buff Item
                let buffData = duplicate(game.data.system.template.Item.buff);
                for (let t of buffData.templates) {
                    mergeObject(buffData, duplicate(game.system.template.Item.templates[t]));
                }
                delete buffData.templates;
                buff = await Item.create({ name: 'Frightful Aspect', type: 'buff', data: buffData }, { temporary: true });

                // Create the buff on the actor, change the icon, populate the changes, turn it on
                let buffAdded = await shifter.createEmbeddedDocuments('Item', [buff.data]);
                await buffAdded[0].update({ 'img': 'systems/pf1/icons/skills/affliction_08.jpg', 'data.changes': changeData.changes, 'data.active': true });
                console.log(buffAdded);
            }
            else {
                buff.update({ 'data.active': true });
            }

            let newSize = changeData.size;

            let armorChangeFlag = [];
            let armorToChange = [];
            // Double armor and shield AC when moving from tiny or smaller (tiny and below armor AC is half normal)
            if (MightyMorphinApp.sizes.indexOf(shifterSize) < 3) {
                let armorAndShields = shifter.items.filter(o => o.data.type === 'equipment' && (o.data.data.equipmentType === 'armor' || o.data.data.equipmentType === 'shield'));

                for (let item of armorAndShields) {
                    armorChangeFlag.push({ _id: item.id, data: { armor: { value: item.data.data.armor.value } } }); // store original armor data in flags
                    armorToChange.push({ _id: item.id, data: { armor: { value: (item.data.data.armor.value * 2) } } }); // change to push to actor's item
                }
            }

            // Update all items that were found to need updates
            if (!!armorToChange.length) {
                await shifter.updateEmbeddedDocuments('Item', armorToChange);
            }

            // Add effect DR to existing (if any), and store old DR
            let oldDR = shifter.data.data.traits.dr;
            let newDR = (!!oldDR ? oldDR + '; ' : '') + '10/magic';

            // Replace old spell resistance if new is higher, store old
            let oldSR = shifter.data.data.attributes.sr.formula;
            let newSR = shifter.data.data.attributes.sr.total > (10 + parseInt(casterLevel)) ? oldSR : (10 + parseInt(casterLevel));

            // Update the actor data and store flags
            await shifter.update({ 'data.traits.size': newSize, 'data.traits.dr': newDR, 'data.attributes.sr.formula': `${newSR}`, 'flags.mightyMorphin': { source: 'Frightful Aspect', buffName: 'Frightful Aspect', size: shifterSize, armor: armorChangeFlag, data: { traits: { dr: oldDR }, attributes: { sr: { formula: oldSR } } } } });
        }
        else if (!!shifter?.data.flags.mightyMorphin) {
            ui.notifications.warn(shifter.name + ' is already under the effects of a change from ' + shifter.data.flags.mightyMorphin.source);
        }
    }

    /**
     * Applies Reduce Person buff and effects to selected actor
     */
    static async reducePerson() {
        let shifter = MightyMorphinApp.getSingleActor(); // Ensure only a single actor is being processed
        let changeData = MorphinChanges.changes.reducePerson; // get buff data

        // Only continue if a single actor and it is not already under any effects provided by this module
        if (!!shifter && !shifter.data.flags.mightyMorphin) {
            let buff = shifter.items.find(o => o.type === 'buff' && o.name === 'Reduce Person');
            let shifterSize = shifter.data.data.traits.size;

            // Create the buff if it doesn't exist, otherwise toggle it on
            if (!buff) {
                // Create template buff Item
                let buffData = duplicate(game.data.system.template.Item.buff);
                for (let t of buffData.templates) {
                    mergeObject(buffData, duplicate(game.system.template.Item.templates[t]));
                }
                delete buffData.templates;
                buff = await Item.create({ name: 'Reduce Person', type: 'buff', data: buffData }, { temporary: true });

                // Create the buff on the actor, change the icon, populate the changes, turn it on
                let buffAdded = await shifter.createEmbeddedDocuments('Item', [buff.data]);
                await buffAdded[0].update({ 'img': 'systems/pf1/icons/races/ratfolk.png', 'data.changes': changeData.changes, 'data.active': true });
            }
            else {
                buff.update({ 'data.active': true });
            }

            // Find the size the number of steps away from current, number of steps provided by changeData
            let newSize = MightyMorphinApp.getNewSize(shifterSize, changeData.size);

            let armorChangeFlag = [];
            let armorToChange = [];
            // Halve armor and shield AC when moving from small to tiny (tiny and below armor AC is half normal)
            if (shifterSize === 'sm') {
                let armorAndShields = shifter.items.filter(o => o.data.type === 'equipment' && (o.data.data.equipmentType === 'armor' || o.data.data.equipmentType === 'shield'));

                for (let item of armorAndShields) {
                    armorChangeFlag.push({ _id: item.id, data: { armor: { value: item.data.data.armor.value } } }); // store original armor data in flags
                    armorToChange.push({ _id: item.id, data: { armor: { value: Math.floor(item.data.data.armor.value / 2) } } }); // change to push to actor's item
                }
            }

            // Update all items that were found to need updates
            if (!!armorToChange.length) {
                await shifter.updateEmbeddedDocuments('Item', armorToChange);
            }

            // Update the actor size and store flags
            await shifter.update({ 'data.traits.size': newSize, 'flags.mightyMorphin': { source: 'Reduce Person', buffName: 'Reduce Person', size: shifterSize, armor: armorChangeFlag } });
        }
        else if (!!shifter?.data.flags.mightyMorphin) {
            ui.notifications.warn(shifter.name + ' is already under the effects of a change from ' + shifter.data.flags.mightyMorphin.source);
        }
    }

    /**
     * Reverts changes applied by this module to the selected actor
     */
    static async revert() {
        let shifter = MightyMorphinApp.getSingleActor(); // Ensure only a single actor is being processed

        // Only continue if a single actor and it is already under any effects provided by this module
        if (!!shifter && !!shifter.data.flags.mightyMorphin) {
            // Get flags from the actor with the changes applied to it
            let changes = duplicate(shifter.data.flags.mightyMorphin);

            // Undo listed buffs
            if (['Enlarge Person', 'Reduce Person', 'Legendary Proportions', 'Frightful Aspect', 'Animal Growth'].includes(changes.source)) {
                // Revert all armor changes that exist
                if (!!shifter.data.flags.mightyMorphin.armor.length) {
                    await shifter.updateEmbeddedDocuments('Item', shifter.data.flags.mightyMorphin.armor);
                }

                // Revert all actor data to its original and remove the flags
                if (!!changes.data) {
                    await shifter.update({ 'data.traits.size': changes.size, 'data': changes.data, 'flags.-=mightyMorphin': null });
                }
                else {
                    await shifter.update({ 'data.traits.size': changes.size, 'flags.-=mightyMorphin': null });
                }
                // Turn off the buff
                await shifter.items.find(o => o.type === 'buff' && o.name === changes.buffName).update({ 'data.active': false });
            }
            // Undo listed buffs
            else if (['Beast Shape', 'Elemental Body', 'Plant Shape', 'Wild Shape'].includes(changes.source)) {
                // Reverse any changes to armor
                if (!!shifter.data.flags.mightyMorphin.armor.length) {
                    await shifter.updateEmbeddedDocuments('Item', shifter.data.flags.mightyMorphin.armor);
                }

                if (!!shifter.data.flags.mightyMorphin.tokenImg) {
                    let token = canvas.tokens.ownedTokens.find(o => o.data.actorId === shifter.id);
                    await token.document.update(shifter.data.flags.mightyMorphin.tokenImg);
                }

                // Revert all data that was replaced to its original and remove the flags
                let updates = {};
                if (!!changes.data.token) {
                    updates = { data: changes.data.data, token: changes.data.token, 'flags.-=mightyMorphin': null };
                }
                else {
                    updates = { data: changes.data.data, 'flags.-=mightyMorphin': null };
                }

                await shifter.update(updates);

                // Remove any attacks or other features created by the effect
                let itemsOnActor = shifter.items.filter(o => changes.itemsCreated.includes(o.id)).map(o => o.id);
                await shifter.deleteEmbeddedDocuments('Item', itemsOnActor);
            }
        }
        else if (!!shifter && !shifter.data.flags.mightyMorphin) {
            ui.notifications.warn(shifter.name + ' is not under any change effects');
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
            ui.notifications.warn('No token selected');
            return null;
        }
        else if (actors.length > 1) {
            ui.notifications.warn('Too many actors selected. Choose one token.');
            return null;
        }
        return actors[0];
    }

    /**
     * Creates an attack and returns it
     * 
     * @param {string} actorId id of the actor that is changing shape
     * @param {string} formSize The size of the form being changed to in the format matching data.traits.size
     * @param {Object} attack Attack object containing name, dice details, attack count, and associated special (e.g. trip) if there is one
     * @param {boolean} onlyAttack True if this will be the only natural attack (providing 1.5x stat to damage)
     * @param {Object} [effects={}] Object containing data for effects that may be associated with special properties of this attack
     * @param {string} [source=''] The source of the attack to add to the name
     * @param {string} [type='natural'] The type of attack for categorization on the sheet
     * @returns {Item} natural attack item
     */
    static createAttack(actorId, formSize, attack, onlyAttack, effects = {}, source = '', type = 'natural') {
        let attackData = { data: {} };
        const actorData = game.actors.get(actorId).data; // get actor's data for reference

        // Create attack Item template
        for (const template of game.data.system.template.Item.attack.templates) {
            mergeObject(attackData.data, game.data.system.template.Item.templates[template]);
        }
        mergeObject(attackData.data, duplicate(game.data.system.template.Item.attack));
        delete attackData.data.templates;

        // Begin filling in data
        attackData['name'] = attack.name + (!!source ? ` (${source})` : ''); // Add source to the attack name if there is a source
        attackData['type'] = 'attack';

        // If attack is labeled as a a primary attack or that attack type is usually primary, or it is the only attack, it is primary
        attackData['data.primaryAttack'] = ((attack.primaryAttack || (!!MightyMorphinApp.naturalAttacks[attack.name] && MightyMorphinApp.naturalAttacks[attack.name].primaryAttack)) || onlyAttack);
        attackData['data.attackType'] = type; // weapon, natural, misc, class ability, etc
        attackData['data.actionType'] = attack.attackType || 'mwak'; // melee, ranged, save, combat man., etc
        attackData['data.activation.type'] = 'attack';
        attackData['data.duration.units'] = 'inst';
        attackData['data.range.value'] = '' + attack.range;
        attackData['data.range.units'] = attack.attackType === 'rwak' ? 'ft' : 'melee'; // if ranged attack, range in feet. Else melee
        attackData['data.ability.critRange'] = attack.crit || 20;
        attackData['data.ability.critMult'] = attack.critMult || 2;
        attackData['data.range.maxIncrements'] = attack.increment || '';
        attackData['data.uses.per'] = attack.charges ? 'day' : '';
        attackData['data.uses.maxFormula'] = '' + attack.charges;
        attackData['data.uses.value'] = attack.charges || 0;

        // Create extra attacks if the attack count is over 1, label the extras starting at 2 (Claw 2)
        let extraAttacks = [];
        for (let i = 1; i < attack.count; i++) {
            extraAttacks = extraAttacks.concat([['', `${attack.name} ${i + 1}`]]);
        }
        if (!!extraAttacks.length) {
            attackData['data.attackParts'] = extraAttacks;
            attackData['data.attackName'] = `${attack.name} 1`;
        }

        // set attack notes for each special
        if (!!attack.special) {
            for (let i = 0; i < attack.special.length; i++) {
                const specialName = attack.special[i];

                // Make sure the special hasn't been deleted (if it was invalid for this level of the spell)
                if (!!specialName) {
                    // If there's details about this special in the effects object, process it. Otherwise the note is just the special name
                    if (!!effects[specialName]) {
                        attackData.data.effectNotes.push(effects[specialName].note);
                        // Set the save if it exists
                        if (effects[specialName].saveDesc) {
                            attackData.data.save.type = effects[specialName].type;
                            attackData.data.save.dc = 10;
                            attackData.data.save.description = effects[specialName].saveDesc;
                        }
                    }
                    else {
                        attackData.data.effectNotes.push(specialName);
                    }

                    // Set the description for the whole attack if there is a description
                    attackData.data.description.value = effects[specialName]?.description || '';
                }
            }
        }

        // Set attack ability to dex if weapon finesse feat and dex >= str or it's a ranged attack. Otherwise it's the actor's normal melee stat or strength
        if (!!attack.attackAbility) attackData['data.ability.attack'] = attack.attackAbility;
        else if ((!!actorData.items.find(o => o.type === 'feat' && o.name === 'Weapon Finesse') && actorData.data.abilities.dex.total >= actorData.data.abilities.str.total) || attack.attackType === 'rwak')
            attackData['data.ability.attack'] = 'dex';
        else attackData['data.ability.attack'] = getProperty(actorData, 'data.attributes.attack.meleeAbility') || 'str';

        // ability damage is strength unless it's a ranged attack
        attackData['data.ability.damage'] = attack.type === 'rwak' ? '' : 'str';

        // ability damage multiplier is the passed multiplier or 1.5 for an only attack, 1 for a primary attack, .5 secondary
        attackData['data.ability.damageMult'] = attack.mult || (onlyAttack ? 1.5 : (attackData.data.primaryAttack) ? 1 : 0.5);

        // Create attack sizeRoll with the passed dice stats, the actor's size, and the attack type's damage type (or '' if attack name not in naturalAttacks)
        if (attack.diceSize !== 0) {
            attackData['data.damage.parts'] = [[`sizeRoll(${attack.diceCount}, ${attack.diceSize}, @size, ${MightyMorphinApp.sizes.indexOf(formSize)})`, (attack.type || MightyMorphinApp.naturalAttacks[attack.name]?.type) || '']];

            // Create non-crit bonus damage
            if (attack.nonCrit) attackData['data.damage.nonCritParts'] = [attack.nonCrit];
        }
        else {
            // use the data from nonCrit as the primary damage when diceSize is 0, because it's damage that doesn't scale from size
            if (attack.nonCrit) attackData['data.damage.parts'] = [attack.nonCrit];
        }

        // Get the image for this attack name
        attackData['img'] = MightyMorphinApp.naturalAttacks[attack.name]?.img || 'systems/pf1/icons/items/inventory/monster-paw-bear.jpg';

        return attackData;
    }

    /**
     * Creates the Beast Shape buff and effects on the actor using the MorphinBeastShape class
     * 
     * @param {number} level The level of beast shape spell being cast (1-4)
     * @param {string} [source='Beast Shape'] The source of the beast shape spell effect
     */
    static async beastShape(level, source = 'Beast Shape') {
        let shifter = MightyMorphinApp.getSingleActor();

        // Create beast shape form if a single actor chosen not already under effects from this mod
        if (!!shifter && !shifter.data.flags.mightyMorphin) {
            let dia = new MorphinBeastShape(level, shifter.id, source).render(true);
        }
        else if (!!shifter?.data.flags.mightyMorphin) {
            ui.notifications.warn(shifter.name + ' is already under the effects of a change from ' + shifter.data.flags.mightyMorphin.source);
        }

    }

    /**
     * Creates the Elemental Body buff and effects on the actor using the MorphinElementalBody class
     * 
     * @param {number} level The level of elemental body spell being cast (1-4)
     * @param {string} [source='Elemental Body'] The source of the elemental body spell effect
     */
    static async elementalBody(level, source = 'Elemental Body') {
        let shifter = MightyMorphinApp.getSingleActor();

        // Create elemental body form if a single actor chosen not already under effects from this mod
        if (!!shifter && !shifter.data.flags.mightyMorphin) {
            let dia = new MorphinElementalBody(level, shifter.id, source).render(true);
        }
        else if (!!shifter?.data.flags.mightyMorphin) {
            ui.notifications.warn(shifter.name + ' is already under the effects of a change from ' + shifter.data.flags.mightyMorphin.source);
        }
    }

    /**
     * Creates the Plant Shape buff and effects on the actor using the MorphinElementalBody class
     * 
     * @param {number} level The level of plant shape spell being cast (1-3)
     * @param {string} [source='Plant Shape'] The source of the splant shape spell effect
     */
    static async plantShape(level, source = 'Plant Shape') {
        let shifter = MightyMorphinApp.getSingleActor();

        // Create plant shape form if a single actor chosen not already under effects from this mod
        if (!!shifter && !shifter.data.flags.mightyMorphin) {
            let dia = new MorphinPlantShape(level, shifter.id, source).render(true);
        }
        else if (!!shifter?.data.flags.mightyMorphin) {
            ui.notifications.warn(shifter.name + ' is already under the effects of a change from ' + shifter.data.flags.mightyMorphin.source);
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
    static async findImage(formName) {
        let imageDir = MightyMorphinApp.imageFolder;
        let foundImage = '';
        try {
            let imageList = await FilePicker.browse(imageDir.activeSource, imageDir.current);
            let sanitizedFormName = formName.replace(/[^a-zA-Z0-9]/gm, '');
            for (const image of imageList.files) {
                let imageName = image.split('/').pop();
                for (const ext of Object.keys(CONST.IMAGE_FILE_EXTENSIONS)) {
                    if (imageName === `${sanitizedFormName}.${ext}`) {
                        foundImage = image;
                        break;
                    }
                }
                if (!!foundImage) break;
            }
        }
        catch (e) {
            error.log('Mighty Morphin Mod: ', e);
            warn.log('Mighty Morphin Mod: To enable token image switching, player must have Foundry permission to "Use File Browser"');
        }
        
        return foundImage;
    }
}

// Image folder
MightyMorphinApp.imageFolder = '';

// Attack data used by createAttacks function
MightyMorphinApp.naturalAttacks = {
    'Bite': { img: 'systems/pf1/icons/items/inventory/monster-head.jpg', type: 'B,P, and S', primaryAttack: true },
    'Claw': { img: 'systems/pf1/icons/skills/blood_06.jpg', type: 'B and S', primaryAttack: true },
    'Gore': { img: 'systems/pf1/icons/items/inventory/monster-horn.jpg', type: 'P', primaryAttack: true },
    'Hoof': { img: 'systems/pf1/icons/items/inventory/monster-hoof.jpg', type: 'B', primaryAttack: false },
    'Tentacle': { img: 'systems/pf1/icons/items/inventory/monster-octopus.jpg', type: 'B', primaryAttack: false },
    'Wing': { img: 'systems/pf1/icons/skills/blue_02.jpg', type: 'B', primaryAttack: false },
    'Pincers': { img: 'systems/pf1/icons/items/inventory/monster-claw.jpg', type: 'B', primaryAttack: false },
    'Tail Slap': { img: 'systems/pf1/icons/items/inventory/monster-tail.jpg', type: 'B', primaryAttack: false },
    'Slam': { img: 'systems/pf1/icons/items/inventory/monster-forearm.jpg', type: 'B', primaryAttack: true },
    'Sting': { img: 'systems/pf1/icons/items/inventory/monster-scorpion.jpg', type: 'P', primaryAttack: true },
    'Talons': { img: 'systems/pf1/icons/items/inventory/monster-talon-green.jpg', type: 'S', primaryAttack: true }
};
