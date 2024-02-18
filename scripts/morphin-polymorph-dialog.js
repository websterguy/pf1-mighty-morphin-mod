import { MightyMorphinApp } from './mighty-morphin.js';
import { MorphinChanges } from './morphin-changes.js';

/**
 * Application shared function with all polymorph effect dialogs
 */
export class MorphinPolymorphDialog extends FormApplication {
    /**
     * @inheritdoc
     * @param {number} level The level of shape spell to use 1 - 4
     * @param {string} actorId The id of the actor that will change shape
     * @param {string} source The source of the polymorph effect
     */
    constructor(level, durationLevel, actorId, source, {planarType = null, energizedTypes = null, mutatedType = null}) {
        super();
        this.level = level;
        this.durationLevel = durationLevel;
        this.actorId = actorId;
        this.actorSize = fromUuidSync(actorId).system.traits.size;
        this.sizes = {};
        this.source = source;
        this.shapeOptions = {};
        this.contextNotes = [];
        this.wildShape = (this.source === game.i18n.localize('MMMOD.WildShape'));
        this.shifterWildShape = (this.source === game.i18n.localize('MMMOD.Buffs.ShifterWildShape.Name'));
        this.planar = (!!fromUuidSync(actorId).items.getName(game.i18n.localize('MMMOD.PlanarWildShape')));
        this.planarType = planarType;
        this.energized = (!!fromUuidSync(actorId).items.getName(game.i18n.localize('MMMOD.EnergizedWildShape')));
        if (!!energizedTypes && !(energizedTypes instanceof Array)) {
            throw new Error('Energized Types property must be an array');
        }
        this.energizedTypes = energizedTypes;
        this.mutated = (!!fromUuidSync(actorId).items.getName(game.i18n.localize('MMMOD.MutatedShape')));
        this.mutatedType = mutatedType;
        this.keepArmor = false;
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
        const data = {};
        
        data.wildShape = this.wildShape;
        data.planar = this.planar;
        data.planarType = this.planarType;
        data.defaultCelestial = !fromUuidSync(this.actorId).system.details.alignment.includes('e');
        data.defaultFiendish = !data.defaultCelestial;
        data.energized = this.energized;
        data.energizedTypes = this.energizedTypes;
        data.mutated = this.mutated;
        data.mutatedType = this.mutatedType;
        data.mutatedTypes = MorphinChanges.changes.wildShape.mutated.types;

        return data;
    }

    /**
     * Processes and applies all changes from the passed form to the actor
     * 
     * @param {object} event The clicked button event
     * @param {string} chosenForm The name of the form chosen
     */
    async applyChanges(event, chosenForm) {
        let shifter = fromUuidSync(this.actorId);
        let newSize = this.shifterWildShape ? this.formData.size || shifter.system.traits.size : this.formData.size;
        let flagSlug = this.source.slugify();

        let itemsToEmbed = [];
        // Find out if this is the only natural attack the form has
        let oneAttack = this.formData.attacks?.length === 1;

        // Loop over the attacks and create the items
        const amuletItem = shifter.items.find(o => o.name.toLowerCase().includes(game.i18n.localize('MMMOD.AmuletOfMightyFists').toLowerCase()) && o.system.equipped);
        let bonusSearch = /\+(\d+)/.exec(amuletItem?.name);
        let amuletBonus = !!bonusSearch ? bonusSearch[1] : null;
        this.attacks = this.shifterWildShape ? this.formData.attacks || [] : duplicate(this.formData.attacks || []);
        for (let i = 0; i < this.attacks.length; i++) {
            let attack = this.attacks[i]; // get the attack data
            attack.enh = parseInt(amuletBonus);
            // Remove any special property if it's no allowed at this level
            if (!!attack.special) {
                for (let j = 0; j < attack.special.length; j++) {
                    const specialElement = attack.special[j];

                    if (!this.shifterWildShape && !MorphinChanges.allowedSpecials[this.spell][this.level].includes(specialElement)) {
                        delete (attack.special[j]);
                    }
                }
            }
            
            let usedClaws = false;
            if (this.shifterWildShape) {
                // if (attack.claw || (attack.claw === undefined && globalThis.pf1.config.sizeDie.indexOf(`${attack.diceCount}d${attack.diceSize}`) < globalThis.pf1.config.sizeDie.indexOf(`${this.clawsData.diceCount}d${this.clawsData.diceSize}`))) {
                //     attack.diceCount = this.clawsData.diceCount;
                //     attack.diceSize = this.clawsData.diceSize;
                //     usedClaws = true;
                // }
                // if (!!attack.improved) {
                //     const newDamage = Roll.fromTerms(pf1.utils.rollPreProcess.sizeRoll(attack.diceCount, attack.diceSize, 5, 4)).formula.split('d');
                //     attack.diceCount = newDamage[0];
                //     attack.diceSize = newDamage[1];
                // }
                if (!!this.clawsData.notes) attack.notes = this.clawsData.notes;
                if (!!this.clawsData.critMult) attack.critMult = Math.min(4, attack.critMult + this.clawsData.critMult - 2);
                if (attack.usedClaws && attack.special?.includes('Rend')) this.formData.effect['Rend'].note = this.formData.effect['Rend'].note.replace(/sizeRoll\([0-9]+, [0-9]+/g, `sizeRoll(${attack.diceCount}, ${attack.diceSize}`);
            }

            const createdAttack = MightyMorphinApp.createAttack(this.actorId, newSize, attack, oneAttack, this.formData.effect, this.source, 'natural');
            if (!!attack.usedClaws) createdAttack.name += ` (${game.i18n.localize('Shifter Claws')})`;
            if (!!this.shifterWildShape && !!this.formData.conditionals) createdAttack.system.actions[0]?.conditionals.push(...this.formData.conditionals);
            itemsToEmbed.push(createdAttack);

        }

        // Loop over special attacks and create the items
        if ((this.shifterWildShape && this.formData.specialAttack) || !!this.formData?.specialAttack) {
            this.specialAttack = this.shifterWildShape ? this.formData.specialAttack || [] : this.formData.specialAttack;
            for (let i = 0; i < this.specialAttack.length; i++) {
                let attack = this.specialAttack[i];

                // Remove any special property if it's no allowed at this level
                if (!!attack.special) {
                    for (let j = 0; j < attack.special.length; j++) {
                        const specialElement = attack.special[j];
                        if (!this.shifterWildShape && !MorphinChanges.allowedSpecials[this.spell][this.level].includes(specialElement)) {
                            delete (attack.special[j]);
                        }
                    }
                }
                
                let usedClaws = false;
                if (this.shifterWildShape) {
                    // if (attack.claw || (attack.claw === undefined && globalThis.pf1.config.sizeDie.indexOf(`${attack.diceCount}d${attack.diceSize}`) < globalThis.pf1.config.sizeDie.indexOf(`${this.clawsData.diceCount}d${this.clawsData.diceSize}`))) {
                    //     attack.diceCount = this.clawsData.diceCount;
                    //     attack.diceSize = this.clawsData.diceSize;
                    //     usedClaws = true;
                    // }
                    // if (!!attack.improved) {
                    //     const newDamage = Roll.fromTerms(pf1.utils.rollPreProcess.sizeRoll(attack.diceCount, attack.diceSize, 5, 4)).formula.split('d');
                    //     attack.diceCount = newDamage[0];
                    //     attack.diceSize = newDamage[1];
                    // }
                    if (!!this.clawsData.notes) attack.notes = this.clawsData.notes;
                    if (!!this.clawsData.critMult) attack.critMult = Math.min(4, attack.critMult + this.clawsData.critMult - 2);
                }

                // if (this.spell === 'magicalBeastShape' && attack.name.includes('BreathWeapon') && !!attack.nonCrit) {
                //     const breathDamage = attack.nonCrit.formula.split('d');
                //     let limited = false;
                //     if (parseInt(breathDamage[0]) >= 12) {
                //         breathDamage[0] = '12';
                //         limited = true;
                //     }
                //     if (limited && parseInt(breathDamage[1]) > 6) {
                //         breathDamage[1] = '6';
                //     }
                //     if (limited) attack.nonCrit.formula = breathDamage.join('d');
                // }

                const createdAttack = MightyMorphinApp.createAttack(this.actorId, newSize, attack, false, this.formData.effect, this.source, 'misc');
                if (!!attack.usedClaws) createdAttack.name += ` (${game.i18n.localize('Shifter Claws')})`;
                itemsToEmbed.push(createdAttack);
            }
        }

        // Add base polymorph size stat changes to the spell's normal changes if necessary
        if (!!this.polymorphChanges?.length) this.changes = this.changes.push(...this.polymorphChanges);

        let buff = shifter.items.find(o => o.type === 'buff' && o.name === this.source);
        // If the buff doesn't already exist on the actor, create it
        if (!buff) {
            // Create buff Item template
            let buffData = { system: {} };
            buffData.system = duplicate(game.system.template.Item.buff);
            for (let t of buffData.system.templates) {
                mergeObject(buffData.system, duplicate(game.system.template.Item.templates[t]));
            }
            delete buffData.system.templates;

            // Populate needed data
            this.buffName = buffData.name = `${ this.source } (${ chosenForm })`;
            buffData.type = 'buff';
            buffData.img = MorphinChanges.buffIcons[this.spell];

            if (game.settings.get('pf1-mighty-morphin', 'createScriptCall')) {
                let scriptCall = duplicate(globalThis.pf1.components.ItemScriptCall.defaultData);
                scriptCall.category = 'toggle';
                scriptCall.name = 'Revert Mighty Morphin Changes on Deactivation';
                scriptCall.value = 'if (!state && !!actor.flags["pf1-mighty-morphin"][item.name.slugify()]) game.mightyMorphin.revert({actor: actor, buff: item.name});';
                buffData.system.scriptCalls.push(scriptCall);
            }

            itemsToEmbed.push(buffData);
        }

        // Calculate the amount of strength the actor is gaining or losing 
        let strChange = 0;
        for (let i = 0; i < this.changes.length; i++) {
            const change = this.changes[i];

            if (!!change.target && change.target === 'ability' && change.subTarget === 'str') strChange += parseInt(change.formula);
        }

        // Set up adjustments to strength carry bonus and carry multiplier so actor's encumbrance doesn't change
        let carryBonusChanges = MightyMorphinApp.generateCapacityChange(shifter, newSize, strChange);
        this.changes.push(...carryBonusChanges);

        if (!!this.shifterWildShape && !!this.formData.changes) this.changes.push(...this.formData.changes);

        if (!!this.shifterWildShape && !!this.formData.feats) {
            for (const feat of this.formData.feats) {
                let featData = await fromUuid(feat.uuid);
                if (!featData) {
                    featData = await Item.create({ name: feat.name, type: 'feat' }, { temporary: true });
                }
                featData = featData.toObject();
                featData.name += ` (${game.i18n.localize('MMMOD.Buffs.ShifterWildShape.Name')})`;
                itemsToEmbed.push(featData);
            }
        }

        if (!!this.shifterWildShape && !!this.formData.contextNotes) this.contextNotes.push(...this.formData.contextNotes);

        

        let armorChangeFlag = [];
        let armorToChange = [];
        // Double armor and shield AC when moving from tiny or below to small or above, halve it if the other way
        let smallSizes = ['fine', 'dim', 'tiny']; // sizes with half armor AC, also use dex for climb and swim instead of str
        let armorChangeNeeded = (smallSizes.includes(newSize) && !smallSizes.includes(this.actorSize)) || (!smallSizes.includes(newSize) && smallSizes.includes(this.actorSize));

        let armorAndShields = shifter.items.filter(o => o.type === 'equipment' && (o.system.subType === 'armor' || o.system.subType === 'shield'));

        // Cycle through all armor and shield items to process them
        for (let item of armorAndShields) {
            let originalArmor = armorChangeNeeded ? { armor: { value: item.system.armor.value } } : {};
            // If this is not Wild Shape or it is Wild Shape but the armor isn't Wild enchanted, armor must be removed
            let armorIsWild = item.name.includes(game.i18n.localize('MMMOD.Wild'));
            let originalEquipped = (armorIsWild && this.wildShape) ? {} : { equipped: item.system.equipped };
            originalArmor = mergeObject(originalArmor, originalEquipped);

            if (!!originalArmor) {
                armorChangeFlag.push({ _id: item.id, data: originalArmor });
                // take off armor if it's not wild armor or this is not from wild shape
                let equipChange = ((armorIsWild && this.wildShape) || this.keepArmor) ? {} : { equipped: false };
                let armorChange = armorChangeNeeded ? (smallSizes.includes(this.actorSize) ? { armor: { value: item.system.armor.value * 2 } } : { armor: { value: Math.floor(item.system.armor.value / 2) } }) : {};
                equipChange = mergeObject(equipChange, armorChange);
                armorToChange.push({ _id: item.id, system: equipChange });
            }
        }

        // change ability mods for climb and swim to str if moving from tiny or below to small or above, change to dex if moving the other way
        let originalSkillMod = {};
        let skillModChange = {};
        if (armorChangeNeeded) {
            originalSkillMod = { 'system.skills.clm.ability': shifter.system.skills.clm.ability, 'system.skills.swm.ability': shifter.system.skills.swm.ability };
            skillModChange = { 'system.skills.clm.ability': (smallSizes.includes(this.actorSize) ? 'str' : 'dex'), 'system.skills.swm.ability': (smallSizes.includes(this.actorSize) ? 'str' : 'dex') };
        }

        // Process speed changes
        let originalManeuverability = { 'system.attributes.speed.fly.maneuverability': shifter.system.attributes.speed.fly.maneuverability };
        let newSpeeds = duplicate(shifter.system.attributes.speed);
        let speedTypes = Object.keys(newSpeeds);
        let maneuverabilityChange = {};
        for (let i = 0; i < speedTypes.length; i++) {
            // Find the speed the form gives for the type
            let speed = this.speeds[speedTypes[i]];
            let speedChange = {formula: '0', operator: 'set', subTarget: speedTypes[i] + 'Speed', modifier: 'base', priority: 100, value: 0};
            if (!!speed) { // if the form has this speed add it
                if (speedTypes[i] === 'fly') {
                    maneuverabilityChange = {'system.attributes.speed.fly.maneuverability': speed.maneuverability};
                    speedChange.formula = speed.base.toString();
                    speedChange.value = speed.base;
                }
                else {
                    speedChange.formula = speed.toString();
                    speedChange.value = speed;
                }
            }
            this.changes.push(speedChange);
        }

        // Process senses changes
        let originalSenses = { 'system.traits.senses': shifter.system.traits.senses };
        let senseObject = { 'dv': 0, 'ts': 0, 'bs': 0, 'bse': 0, 'll': { 'enabled': false, 'multiplier': { 'dim': 2, 'bright': 2 } }, 'sid': false, 'tr': false, 'si': false, 'sc': 0, 'custom': '' };
        for (let i = 0; i < this.senses.length; i++) {
            const sensesEnumValue = this.senses[i];
            if (!!sensesEnumValue) {
                senseObject = mergeObject(senseObject, MorphinChanges.SENSES[Object.keys(MorphinChanges.SENSES)[sensesEnumValue - 1]].setting); // element 1 = SENSES[0] = LOWLIGHT
            }
        }
        let sensesChanges = { 'system.traits.senses': duplicate(senseObject) };

        let sensesChangedAlready = (!!shifter.flags['pf1-mighty-morphin'] && MightyMorphinApp.nonPolymorphs.includes(Object.keys(shifter.flags['pf1-mighty-morphin'])[0]) && !!Object.values(shifter.flags['pf1-mighty-morphin'])[0].data?.system?.traits?.senses);
        let imageChangedAlready = (!!shifter.flags['pf1-mighty-morphin'] && MightyMorphinApp.nonPolymorphs.includes(Object.keys(shifter.flags['pf1-mighty-morphin'])[0]) && !!Object.values(shifter.flags['pf1-mighty-morphin'])[0].tokenImg);

        let otherSource, actualOriginalSenses;

        if (sensesChangedAlready || imageChangedAlready) otherSource = Object.keys(shifter.flags['pf1-mighty-morphin'])[0];

        if (sensesChangedAlready) {
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

        // Process DR changes
        let originalDr = { 'system.traits.dr': shifter.system.traits.dr };
        let drObject = this.dr;

        // Process resistances changes
        let originalEres = { 'system.traits.eres': shifter.system.traits.eres };
        let newEres = { value: this.eres || [], custom: '' };

        // Process vulnerabilities changes
        let originalDv = { 'system.traits.dv': shifter.system.traits.dv };
        let newDv = { value: this.dv || [], custom: '' };

        // Process immunities changes        
        let originalDi = { 'system.traits.di': shifter.system.traits.di };
        let newDi = { value: this.di || [], custom: '' };

        // Process regen changes
        let originalRegen = { 'system.traits.regen': shifter.system.traits.regen };
        let regenString = this.regen || '';

        let originalFastHealing = { 'system.traits.fastHealing': shifter.system.traits.fastHealing };
        let fastHealingString = this.fastHealing || '';

        let originalCi = { 'system.traits.ci': shifter.system.traits.ci };
        let newCi = this.ci || { value: [], custom: '' };

        originalSenses = mergeObject(originalSenses, mergeObject(originalDi, mergeObject(originalDr, mergeObject(originalRegen, mergeObject(originalFastHealing, mergeObject(originalEres, mergeObject(originalCi, originalDv)))))));
        sensesChanges = mergeObject(sensesChanges, mergeObject({ 'system.traits.di': newDi }, mergeObject({ 'system.traits.dr': drObject }, mergeObject({ 'system.traits.regen': regenString }, mergeObject({ 'system.traits.fastHealing': fastHealingString }, mergeObject({ 'system.traits.eres': newEres }, mergeObject({ 'system.traits.ci': newCi }, { 'system.traits.dv': newDv })))))));

        // Create special ability features
        if (!!this.special) {
            // create blank template for misc feature
            let specialData = { system: {} };
            specialData.system = duplicate(game.system.template.Item.feat);
            for (let t of specialData.system.templates) {
                mergeObject(specialData.system, duplicate(game.system.template.Item.templates[t]));
            }
            delete specialData.system.templates;
            specialData.type = 'feat';
            specialData.system.featType = 'misc';

            for (let i = 0; i < this.special.length; i++) {
                const specialName = `${game.i18n.localize('MMMOD.Attacks.' + this.special[i])} (${this.source})` ;
                let compendiumData = await fromUuid(MightyMorphinApp.specialUUIDs[this.special[i]]);

                if (!!compendiumData) {
                    compendiumData = compendiumData.toObject();
                    compendiumData.name = specialName;
                    itemsToEmbed.push(compendiumData);
                }
                else if (!!specialName) { // make sure it wasn't deleted for being invalid at this spell level
                    let specialToCreate = duplicate(specialData);
                    specialToCreate.name = specialName;
                    itemsToEmbed.push(specialToCreate);
                }
            }
        }

        // Find image to change token to if it exists
        let newImage = await MightyMorphinApp.findImage(this.customImage || chosenForm, !! this.customImage);

        // Prepare data for image change
        let oldImage = { img: '' };
        let oldProtoImage = { token: { img: '' } };
        let protoImageChange = !!newImage ? { 'prototypeToken.texture.src': newImage } : {};
        if (!!newImage) {
            let token = shifter.token || canvas.tokens.ownedTokens.filter(o => o.actor.id === fromUuidSync(this.actorId).id);
            if (!!token) {
                if (Array.isArray(token) && token.length > 1) {
                    oldImage.img = token[0].document.texture.src;
                    let tokenUpdates = token.map(o => ({_id: o.id, 'texture.src': newImage}));
                    await canvas.scene.updateEmbeddedDocuments('Token', tokenUpdates);
                }
                else {
                    if (Array.isArray(token)) token = token[0].document;
                    oldImage.img = token.texture.src;
                    await token.update({ 'texture.src': newImage });
                }
            }
            oldProtoImage.token.img = shifter.prototypeToken.texture.src;
        }

        if (this.wildShape) {
            // Energized Wild Shape eres
            if (!!this.energized && !!this.energizedTypes) {
                for (const energy of this.energizedTypes) {
                    let exists = false;
                    for (const existingResData of sensesChanges.system.traits.eres.value) {
                        if (existingResData.types.includes(energy)) {
                            existingResData.amount += 5;
                            exists = true;
                        }
                    }
                    if (!exists) {
                        const resData = duplicate(MorphinChanges.changes.wildShape.energized.eres[0]);
                        resData.types[0] = energy;
                        sensesChanges.system.traits.eres.value.push(resData);
                    }
                }
            }

            // Planar Wild Shape
            let planarObject;
            if (!!this.planar && !!this.planarType) {
                planarObject = duplicate(MorphinChanges.changes.wildShape.planar[this.planarType] || null);
                if (!!planarObject) {
                    this.changes.push(...planarObject.changes);

                    for (const sense of planarObject.senses) {
                        if (sense !== 1 && sense !== 11) {
                            const senseData = MorphinChanges.SENSES[Object.keys(MorphinChanges.SENSES)[sense - 1]];
                            const senseKey = Object.keys(senseData.setting)[0];
                            if (sensesChanges.system.traits.senses[senseKey] < senseData.setting[senseKey]) sensesChanges.system.traits.senses[senseKey] = senseData.setting[senseKey];
                        }
                    }

                    const resLevel = shifter.system.attributes.hd.total >= 11 ? '11' : '5';
                    for (const resData of planarObject.dr[resLevel]) {
                        if (sensesChanges.system.traits.dr?.custom.length > 0) sensesChanges.system.traits.dr.custom += '; ';
                        if (!sensesChanges.system.traits.dr?.custom) sensesChanges.system.traits['dr'] = { value: [], custom: ''};
                        sensesChanges.system.traits.dr.custom += `${resData.amount}/${!!resData.types[0] ? resData.types[0] : '-'}${!!resData.types[1] ? (resData.operator ? ' or ' : ' and ') : resData.types[1]}`;
                        /* to avoid duplicates
                        for (const resType of resData.types) {
                            for (const existingResData of sensesChanges.system.traits.dr) {
                                if (existingResData.types.includes(resType) {
                                    
                                }
                            }
                        } */
                    }

                    const implementedEnergies = ['acid', 'cold', 'electric', 'fire', 'force', 'negative', 'positive', 'sonic'];

                    for (const resData of planarObject.eres[resLevel]) {
                        for (const resType of resData.types) {
                            if (!!resType && !implementedEnergies.includes(resType)) {
                                if (sensesChanges.system.traits.eres?.custom.length > 0) sensesChanges.system.traits.eres.custom += '; ';
                                if (!sensesChanges.system.traits.eres?.custom) sensesChanges.system.traits['eres'] = { value: [], custom: ''};
                                sensesChanges.system.traits.eres.custom += `${game.i18n.localize('MMMOD.DamageTypes.' + resType)} ${resData.amount}`;
                            }
                            else if (!!resType) {
                                let exists = false;
                                for (const existingResData of sensesChanges.system.traits.eres.value) {
                                    if (existingResData.types.includes(resType)) {
                                        if (existingResData.amount < resData.amount) {
                                            existingResData.amount = resData.amount;
                                        }
                                        exists = true;
                                    }
                                }
                                if (!exists) sensesChanges.system.traits.eres.value.push(resData);
                            }
                        }
                    }

                    this.contextNotes.push(...planarObject.contextNotes);
                }
            }

            const energizedConditionals = [];

            if (!!this.energized && !!this.energizedTypes) {
                for (const energy of this.energizedTypes) {
                    let conditional = duplicate(MorphinChanges.changes.wildShape.energized.conditionals)[0];
                    conditional.name += ` (${game.i18n.localize('MMMOD.DamageTypes.' + energy)})`;
                    conditional.modifiers[0].damageType.values = [energy];
                    conditional.modifiers[0]._id = randomID();
                    conditional._id = randomID();
                    energizedConditionals.push(conditional);
                }
            }

            // Mutated shape
            if (!!this.mutated && !!this.mutatedType) {
                let attack = MorphinChanges.changes.wildShape.mutated[newSize].find(o => o.name === this.mutatedType);
                attack.enh = parseInt(amuletBonus);
                itemsToEmbed.push(MightyMorphinApp.createAttack(this.actorId, newSize, attack, false, {}, this.source, 'natural'));
            }

            // Process changes to attacks
            for (const attack of itemsToEmbed.filter(o => o.type === 'attack')) {
                for (const action of attack.system.actions) {
                    if (!!this.planar && !!this.planarType && !!planarObject) {
                        action.conditionals.push(...planarObject.conditionals.map(o => {
                            o._id = randomID();
                            o.modifiers.forEach(m => {
                                if (m.target === 'damage') m._id = randomID();
                            });
                            return o;
                        }));
                    }

                    if (shifter.items.getName(game.i18n.localize('MMMOD.ElementalClaws'))) {
                        action.conditionals.push(...MorphinChanges.changes.wildShape.elementalClaws.conditionals.map(o => {
                            o._id = randomID();
                            o.modifiers.forEach(m => {
                                if (m.target === 'damage') m._id = randomID();
                            });
                            return o;
                        }));
                    }

                    if (!!this.energized && !!this.energizedTypes) {
                        action.conditionals.push(...energizedConditionals);
                        const allDamage = [];
                        allDamage.push(...action.damage.parts, ...action.damage.critParts, ...action.damage.nonCritParts);
                        for (const damagePart of allDamage) {
                            if (damagePart.type.values.some(o => this.energizedTypes.includes(o))) {
                                if (damagePart.formula.includes('sizeRoll')) {
                                    let sizeFormulas = damagePart.formula.match(/sizeRoll\(.*?\)/g);
                                    let sizeFormulaSet = new Set;
                                    sizeFormulas.forEach(o => sizeFormulaSet.add(o));
                                    for (const sizeFormula of sizeFormulaSet) {
                                        let parameters = sizeFormula.match(/[0-9]+/g);
                                        const sizeDie = globalThis.pf1.config.sizeDie;
                                        let formulaIndex = sizeDie.indexOf(parameters[0].toString() + 'd' + parameters[1].toString());
                                        if (formulaIndex < 0 || formulaIndex === (sizeDie.length - 1)) {
                                            let sizeRollUpgrade = Roll.fromTerms(pf1.utils.rollPreProcess.sizeRoll(parameters[0], parameters[1], 5, 4)).formula;
                                            formulaIndex = sizeDie.indexOf(sizeRollUpgrade);
                                            if (formulaIndex < 0 || sizeRollUpgrade === (parameters[0].toString() + 'd' + parameters[1].toString())) {
                                                ui.notifications.warn('Mighty Morphin Mod: ' + game.i18n.localize('MMMOD.UI.EnergizedUpgradeError') + attack.name + ', ' + formula);
                                                continue;
                                            }
                                            let newFormula = sizeDie[formulaIndex - 1];
                                            let diceTerms = newFormula.split('d');
                                            damagePart.formula = damagePart.formula.replace(new RegExp(`sizeRoll\\(${parameters[0]}, ${parameters[1]}`), `sizeRoll(${diceTerms[0]}, ${diceTerms[1]}`);
                                        }
                                        else {
                                            let newFormula = sizeDie[formulaIndex + 1];
                                            let diceTerms = newFormula.split('d');
                                            damagePart.formula = damagePart.formula.replace(new RegExp(`sizeRoll\\(${parameters[0]}, ${parameters[1]}`), `sizeRoll(${diceTerms[0]}, ${diceTerms[1]}`);
                                        }
                                    }
                                }
                                else {
                                    let formulas = damagePart.formula.match(/[0-9]+d[0-9]+/g);
                                    let formulaSet = new Set;
                                    formulas.forEach(o => formulaSet.add(o));
                                    for (const formula of formulaSet) {
                                        const sizeDie = globalThis.pf1.config.sizeDie;
                                        let formulaIndex = sizeDie.indexOf(formula);
                                        if (formulaIndex < 0 || formulaIndex === (sizeDie.length - 1)) {
                                            ui.notifications.warn('Mighty Morphin Mod: ' + game.i18n.localize('MMMOD.UI.EnergizedUpgradeError') + attack.name + ', ' + formula);
                                            continue;
                                        }
                                        else {
                                            let newFormula = sizeDie[formulaIndex + 1];
                                            damagePart.formula = damagePart.formula.replace(formula, newFormula);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            // frightful
            if (shifter.items.getName(game.i18n.localize('MMMOD.FrightfulShape'))) {
                for (let i = 0; i < MorphinChanges.changes.wildShape.frightful.specialAttack.length; i++) {
                    let attack = duplicate(MorphinChanges.changes.wildShape.frightful.specialAttack[i]);

                    itemsToEmbed.push(MightyMorphinApp.createAttack(this.actorId, newSize, attack, false, MorphinChanges.changes.wildShape.frightful.effect, this.source, 'misc'));
                }

                const macroToCreate = duplicate(MorphinChanges.changes.wildShape.frightful.macro);
                macroToCreate.name = game.i18n.localize('MMMOD.FrightfulShape');
                macroToCreate.command = macroToCreate.command.replace(/ACTORUUIDHERE/g, this.actorId).replace(/FRIGHTFULSHAPE/g, game.i18n.localize('MMMOD.FrightfulShapeAttackSuccess') + (!!this.source ? ` (${this.source})` : ''));
                macroToCreate.ownership = shifter.ownership;
                const createdMacro = await Macro.createDocuments([macroToCreate]);
                const contextNote = duplicate(MorphinChanges.changes.wildShape.frightful.contextNotes[0]);
                contextNote.text = contextNote.text.replace(/MACROIDHERE/g, createdMacro[0].id);
                this.contextNotes.push(contextNote);
                this.macroCreatedId = createdMacro[0].id;
            }
        }

        // Create the items on the actor, then create an array of their ids to delete them later
        let itemsCreated = await shifter.createEmbeddedDocuments('Item', itemsToEmbed);
        itemsCreated = itemsCreated.map(o => o.id);

        // Turn on the buff created
        buff = shifter.items.find(o => o.type === 'buff' && o.name === this.buffName);
        
        let durationData = {};
        if (!!this.durationLevel) {
            durationData = {value: this.durationLevel.toString(), units: (this.source === game.i18n.localize('MMMOD.Buffs.WildShape.Name') || this.source === game.i18n.localize('MMMOD.Buffs.ShifterWildShape.Name') ? 'hour' : 'minute')};
        }
        
        let buffUpdate = [{ _id: buff.id, 'system.duration': durationData, 'system.changes': this.changes, 'system.contextNotes': this.contextNotes,'system.active': true }];

        // Set the flags for all changes made
        let dataFlag = mergeObject({ 'system.traits.size': this.actorSize }, mergeObject(originalSkillMod, mergeObject(originalManeuverability, originalSenses)));
        let flags = { source: this.source, buffName: this.source, data: dataFlag, armor: armorChangeFlag, itemsCreated: itemsCreated };
        if (!!this.macroCreatedId) flags.macroCreatedId = this.macroCreatedId;
        if (!!newImage) { dataFlag = mergeObject(dataFlag, oldProtoImage); };
        if (!!newImage) { flags = mergeObject(flags, { tokenImg: oldImage }); };
        const updates = mergeObject({ 'system.traits.size': newSize, 'flags.pf1-mighty-morphin': { [flagSlug]: flags } }, mergeObject(skillModChange, mergeObject(maneuverabilityChange, sensesChanges)));     
        if (!!newImage) {
            if (imageChangedAlready) mergeObject(mergeObject(updates, protoImageChange), { ['flags.pf1-mighty-morphin']: { [flagSlug]: { tokenImg: oldImage, protoImg: oldProtoImage }, [otherSource]: { ['tokenImg.img']: newImage, ['protoImg.token.img']: newImage }, originalImage: { tokenImg: shifter.flags['pf1-mighty-morphin'][otherSource].tokenImg, protoImg: shifter.flags['pf1-mighty-morphin'][otherSource].protoImg } } });
            else mergeObject(mergeObject(updates, protoImageChange), { 'flags.pf1-mighty-morphin': { [flagSlug]: { tokenImg: oldImage, protoImg: oldProtoImage } } });
        }
        if (sensesChangedAlready) mergeObject(updates, { ['flags.pf1-mighty-morphin']: { originalSenses: actualOriginalSenses, [otherSource]: { data: { system: { traits: { senses: mergeObject(shifter.flags['pf1-mighty-morphin'][otherSource].data.system.traits.senses, senseObject) } } } } } });
        await shifter.update(updates);

        // update items on the actor
        if (!!armorToChange.length) {
            armorToChange.push(...buffUpdate);
            await shifter.updateEmbeddedDocuments('Item', armorToChange);
        }
        else await shifter.updateEmbeddedDocuments('Item', buffUpdate);
        canvas.tokens.releaseAll();
        if (!!shifter.token) shifter.token.object.control();
        else canvas.tokens.ownedTokens.find(o => o.actor.id === fromUuidSync(this.actorId).id).control();
        await this.close();
    }

    /**
     * Builds a string of html that shows all the changes that will be done
     * 
     * @param {String} data the object containing the data of all changes to be done
     * @returns string of html to display all changes to be done
     */
    buildHtml(data) {
        return `${ !!data.polymorphBase ? '<p><span class="previewLabel">' + game.i18n.localize('MMMOD.UI.BaseSizeAdjust') + ': </span><span id="polymorphScores">' + data.polymorphBase + '</span></p>' : '' }
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.AbilityScores') }: </span><span id="abilityScores">${ data.scoreChanges }</span></p>
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.Attacks') }: </span><span id="attacks">${ data.attacks }</span></p>
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.SpecialAttacks') }: </span><span id="specialAttacks">${ data.specialAttacks }</span></p>
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.Speeds') }: </span><span id="speeds">${ data.speedChanges }</span></p>
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.Senses') }: </span><span id="senses">${ data.senses }</span></p>
            <p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.SpecialAbilities') }: </span><span id="specials">${ data.special }</span></p>
            ${!!data.eres ? `<p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.EnergyResistances') }: </span><span id="eres">${ data.eres }</span></p>` : ''}
            ${!!data.di ? `<p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.DamageImmunities') }: </span><span id="di">${ data.di }</span></p>` : ''}
            ${!!data.dv ? `<p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.Vulnerabilities') }: </span><span id="dv">${ data.dv }</span></p>` : ''}
            ${!!data.dr ? `<p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.DamageResistances') }: </span><span id="dr">${ data.dr }</span></p>` : ''}
            ${!!data.ci ? `<p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.OtherImmunities') }: </span><span id="ci">${ data.ci }</span></p>` : ''}
            ${!!data.fastHealing ? `<p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.FastHealing') }: </span><span id="fastHealing">${ data.fastHealing }</span></p>` : ''}
            ${!!data.regen ? `<p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.Regeneration') }: </span><span id="regen">${ data.regen }</span></p>` : ''}
            ${!!data.saves ? `<p><span class="previewLabel">${ game.i18n.localize('MMMOD.UI.SaveBonuses') }: </span><span id="saves">${ data.saves }</span></p>` : ''}`;
    }

    /**
     * Processes attribute changes for the form and spell. DR, energy res, weakness, damage immunity, condition immunity, fast healing, regen.
     * 
     * @returns object containing strings that show the applicable changes to attributes for this spell and form. Only contains keys for allowed changes.
     */
    processAttributes() {
        const data = {};
        
        const eres = []; // allows holding eres and di converted to eres before deciding if there's any eres to push to data or if it's None
        delete this.eres;
        if (MorphinChanges.allowedAttributes[this.spell][this.level].di) {
            this.di = [];
            const di = this.processDi();
            eres.push(...di.resistances);
            data.di = di.immunities.length > 0 ? di.immunities.join(', ') : game.i18n.localize('MMMOD.UI.None');
        }
        
        if (!!MorphinChanges.allowedAttributes[this.spell][this.level].eres) {
            this.eres = this.eres || [];
            eres.push(...this.processEres());
            data.eres = eres.length > 0 ? eres.toSorted().join(', ') : game.i18n.localize('MMMOD.UI.None');
        }

        if (!!MorphinChanges.allowedAttributes[this.spell][this.level].dv) {
            const dv = this.processDv();
            data.dv = dv.length > 0 ? dv.toSorted().join(', ') : game.i18n.localize('MMMOD.UI.None');
        }
        
        if (!!MorphinChanges.allowedAttributes[this.spell][this.level].regen) {
            const regen = this.processRegen();
            data.regen = regen.length > 0 ? regen.toSorted().join(', ') : game.i18n.localize('MMMOD.UI.None');
        }

        if (!!MorphinChanges.allowedAttributes[this.spell][this.level].dr) {
            const dr = this.processDr();
            data.dr = dr.length > 0 ? dr.toSorted().join(', ') : game.i18n.localize('MMMOD.UI.None');
        }

        if (!!MorphinChanges.allowedAttributes[this.spell][this.level].fastHealing) {
            data.fastHealing = this.processFastHealing();
        }

        if (!!MorphinChanges.allowedAttributes[this.spell][this.level].ci) {
            const ci = this.processCi();
            data.ci = ci.length > 0 ? ci.toSorted().join(', ') : game.i18n.localize('MMMOD.UI.None');
        }

        return data;
    }

    /**
     * Validates that this specific spell gives the resistances the form contains
     * 
     * @returns Array of the damage resistances applicable for this spell
     */
    processDr() {
        this.dr = { value: [], custom: '' };
        const allowedDr = MorphinChanges.allowedAttributes[this.spell][this.level].dr;
        const resistances = [];
        const customResistances = [];
        if (!!this.formData.dr && !!allowedDr) {            
            for (const resistance of this.formData.dr) {
                if (typeof resistance === 'string') {
                    customResistances.push(resistance);
                    resistances.push(resistance);
                }
                else {
                    if (!!allowedDr.max) {
                        resistance.amount = Math.min(resistance.amount, allowedDr.max);
                    }
                    this.dr.value.push(resistance);
                    resistances.push(`${ resistance.amount }/${ resistance.types[0].length === 0 ? '-' : game.i18n.localize('MMMOD.DamageTypes.' + resistance.types[0].capitalize()) }${ resistance.types[1].length > 0 ? ' ' + (resistance.operator ? game.i18n.localize('MMMOD.UI.or') : game.i18n.localize('MMMOD.UI.and')) + ' ' + game.i18n.localize('MMMOD.DamageTypes.' + resistance.types[1].capitalize()) : '' }`);
                }
            }
            this.dr.custom = customResistances.toSorted().join(';');
        }
        return resistances;
    }

    /**
     * Validates that this specific spell gives the resistances the form contains
     * 
     * @returns Array of energy resistance applicable for this spell
     */
    processEres() {
        const allowedEres = MorphinChanges.allowedAttributes[this.spell][this.level].eres;
        const resistances = [];
        if (!!this.formData.eres && !!allowedEres) {            
            for (const resistance of this.formData.eres) {
                if (allowedEres.elements.includes(resistance.types[0])) {
                    if (!!allowedEres.max) {
                        resistance.amount = Math.min(allowedEres.max, resistance.amount);
                    }

                    this.eres.push(resistance);
                    resistances.push(game.i18n.localize('MMMOD.DamageTypes.' + resistance.types[0].capitalize()) + ' ' + resistance.amount);
                }
            }
        }
        return resistances;
    }

    /**
     * Validates that this specific spell gives the vulnerabilities the form contains
     * 
     * @returns Array containing the damage vulnerability applicable for this spell
     */
    processDv() {
        const allowedDv = MorphinChanges.allowedAttributes[this.spell][this.level].dv;
        this.dv = [];
        const weaknesses = [];
        if (!!this.formData.dv && !!allowedDv) {            
            for (const weakness of this.formData.dv) {
                if (allowedDv.elements.includes(weakness)) {
                    this.dv.push(weakness);
                    weaknesses.push(game.i18n.localize('MMMOD.DamageTypes.' + weakness.capitalize()));
                }
            }
        }
        return weaknesses;
    }
    
    /**
     * Validates that this specific spell gives the immunities the form contains. Converts them to limited resistances if that's what the spell provides.
     * 
     * @returns Object containing arrays of the damage immunities and converted resistances applicable for this spell
     */
    processDi() {
        const allowedDi = MorphinChanges.allowedAttributes[this.spell][this.level].di;
        const immunities = [];
        const resistances = [];
        this.eres = [];
        if (!!this.formData.di && !!allowedDi) {
            for (const immunity of this.formData.di) {
                if (allowedDi.elements.includes(immunity)) {
                    if (!!allowedDi.max) {
                        resistances.push(game.i18n.localize('MMMOD.DamageTypes.' + immunity.capitalize()) + ' ' + 20);
                        this.eres.push({ amount: 20, operator: true, types: [immunity, ''] });
                    }
                    else {
                        immunities.push(immunity.capitalize());
                        this.di.push(immunity);
                    }
                }
            }
        }
        return { immunities: immunities, resistances: resistances };
    }
    
    /**
     * Validates that this specific spell gives the immunities the form contains.
     * 
     * @returns Object containing array of the condition immunities applicable for the spell
     */
    processCi() {
        const allowedCi = MorphinChanges.allowedAttributes[this.spell][this.level].ci;
        const immunities = [];
        const customImmunities = [];
        this.ci = { value: [], custom: ''};
        if (!!this.formData.ci && !!allowedCi) {
            for (const immunity of this.formData.ci) {
                if (allowedCi.elements.includes(immunity)) {
                    if (!!pf1.config.conditionTypes[immunity]) this.ci.value.push(immunity);
                    else customImmunities.push(game.i18n.localize('MMMOD.DamageTypes.' + immunity.capitalize()));
                }
                immunities.push(game.i18n.localize('MMMOD.DamageTypes.' + immunity.capitalize()));
            }
            this.ci.custom = customImmunities.join(';');
        }
        return immunities;
    }

    /**
     * Validates that this specific spell gives the regen the form has
     * 
     * @returns Array of the regen applicable for this spell
     */
    processRegen() {
        const regens = [];
        const allowedRegen = !!MorphinChanges.allowedAttributes[this.spell][this.level].regen;
        if (!!this.formData.regen && allowedRegen) {
            for (const regen of this.formData.regen) {
                if (!!allowedRegen.max) {
                    regen.value = Math.min(allowedRegen.max, regen.value);
                }
                regens.push(`${ regen.value } (${regen.counter.map(c => game.i18n.localize('MMMOD.DamageTypes.' + c).capitalize()).join(` ${ game.i18n.localize('MMMOD.UI.or') } `) })`);
            }
        }
        this.regen = regens.join(';');
        return regens;
    }

    /**
     * Validates that this specific spell gives the fast healing this form has
     * 
     * @returns String of fast healing applicable for this spell
     */
    processFastHealing() {
        const allowedFastHealing = !!MorphinChanges.allowedAttributes[this.spell][this.level].fastHealing;
        if (!!this.formData.fastHealing && allowedFastHealing) {
            if (!!allowedFastHealing.max) {
                this.formData.fastHealing = Math.min(allowedFastHealing.max, this.formData.fastHealing.max);
            }
            this.fastHealing = this.formData.fastHealing;
            return this.formData.fastHealing;
        }
        return game.i18n.localize('MMMOD.UI.None');
    }

    /**
     * Limits all speeds based on spell and spell level
     * 
     * @param {Object} speeds
     * @returns The string representing the speed changes to be applied
     */
    processSpeeds(speeds) {
        let speedChanges = '';
        this.speeds = { };

        for (const speed in speeds) {
            if (!!MorphinChanges.allowedSpeeds[this.spell][this.level][speed] || speed === 'land') {
                if (speed === 'land') {
                    this.speeds[speed] = speeds[speed];
                }
                else if (speed === 'fly') {
                    this.speeds[speed] = { };
                    this.speeds[speed].base = Math.min(MorphinChanges.allowedSpeeds[this.spell][this.level][speed].base, speeds[speed].base);
                    if (MorphinChanges.flightManeuverability.indexOf(MorphinChanges.allowedSpeeds[this.spell][this.level][speed].maneuverability) < MorphinChanges.flightManeuverability.indexOf(speeds[speed].maneuverability)) {
                        this.speeds[speed].maneuverability = MorphinChanges.allowedSpeeds[this.spell][this.level][speed].maneuverability;
                    }
                    else {
                        this.speeds[speed].maneuverability = speeds[speed].maneuverability;
                    }
                }
                else {
                    this.speeds[speed] = Math.min(MorphinChanges.allowedSpeeds[this.spell][this.level][speed], speeds[speed]);
                }
    
                if (speedChanges.length > 1) speedChanges += ', ';
                speedChanges += `${ game.i18n.localize('MMMOD.UI.' + speed) } ${ speed === 'fly' ? this.speeds[speed].base : this.speeds[speed] }
                    ${ game.i18n.localize('MMMOD.UI.ft') }${ speed === 'fly' ? ' (' + game.i18n.localize('MMMOD.UI.' + this.speeds[speed].maneuverability) + ')' : '' }`;
            }
        }

        return speedChanges;
    }

    /**
     * Processes what changes will be applied if changing size from something other than small or medium as per base polymorph effect rules
     * 
     * @returns String showing the base polymorph size stat changes to be applied
     */
    processPolymorphChanges() {
        let polymorphBase = '';
        this.polymorphChanges = duplicate(MorphinChanges.changes.polymorphSize[this.actorSize] || {});
        if (!!this.polymorphChanges) {
            for (let i = 0; i < this.polymorphChanges.length; i++) {
                const change = this.polymorphChanges[i];
                if (!!change.target && change.target === 'ability') {
                    if (polymorphBase.length > 0) polymorphBase += ', '; // comma between entries
                    // text output of the stat (capitalized), and a + in front of positive numbers
                    polymorphBase += `${ game.i18n.localize('MMMOD.UI.' + change.subTarget.capitalize()) } ${ (change.value > 0 ? '+' : '') }${ change.value }`;
                }
            }
        }
        return polymorphBase;
    }
    
    /**
     * Processes what changes will be applied to stats from the spell regardless of form
     * 
     * @returns String showing the stats to be changed
     */
    processScoreChanges() {
        let scoreChanges = [];
        for (let i = 0; i < this.changes.length; i++) {
            const change = this.changes[i];

            if (!!change.target && change.target === 'ability') { // stat change
                scoreChanges.push(`${ game.i18n.localize('MMMOD.UI.' + change.subTarget.capitalize()) } ${ (change.value > 0 ? '+' : '') }${ change.value }`);
            }
            else if (!change.target && change.subTarget == 'nac') { // natural AC change
                scoreChanges.push(`${ game.i18n.localize('MMMOD.UI.NaturalAC') } ${ (change.value > 0 ? '+' : '') }${ change.value }`);
            }
            else if (!change.target && change.subTarget === 'landSpeed') {
                scoreChanges.push(`${ game.i18n.localize('MMMOD.UI.LandSpeed') } ${ (change.value > 0 ? '+' : '') }${ change.value }`);
            }
        }
        return scoreChanges.join(', ');
    }
    
    /**
     * Processes what attacks will be created for form to show to the user
     * 
     * @returns String showing the summary of attacks to be created
    */
   processAttacks() {
       const attackList = this.formData.attacks || [];
       const attacks = [];
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
        let damageDice = attack.diceSize === 0 ? '' : `${ attack.diceCount }d${ attack.diceSize }`;
        if (attack.nonCrit) damageDice += (!!damageDice.length ? ` ${ game.i18n.localize('MMMOD.UI.Plus') } ` : '') + `${ attack.nonCrit.formula } ${!!attack.nonCrit.type.values.toString() ?
            game.i18n.localize('MMMOD.DamageTypes.' + attack.nonCrit.type.values.toString()).capitalize() : game.i18n.localize('MMMOD.DamageTypes.' + attack.nonCrit.type.custom).capitalize()}`;
            attacks.push(`${ attack.count > 1 ? attack.count + ' ' : '' }${ game.i18n.localize('MMMOD.Attacks.' + attack.name) } (${ !!damageDice ? damageDice : '0' }${ !!attackSpecial ? ` ${game.i18n.localize('MMMOD.UI.Plus') } ` + attackSpecial : ''})`);
        }
        
        if (attacks.length === 0) return game.i18n.localize('MMMOD.UI.None');
        return attacks.join(', ');
    }
    
    /**
     * Processes what special attacks will be created for form to show to the user
     * 
     * @returns String showing the summary of special attacks to be created
    */
   processSpecialAttacks() {
       const specialAttackList = this.formData.specialAttack;
       const specialAttacks = [];
       
       for (let i = 0; i < specialAttackList.length; i++) {
           const specialAttack = specialAttackList[i];
           
           // // Make sure the special attack is allowed at this level of spell before processing it
           // let valid = true;
           // for (let j = 0; j < (specialAttack.special?.length || 0); j++) {
               //     const special = specialAttack.special[j];

            //     if (!MorphinChanges.allowedSpecials[this.spell][this.level].includes(special)) valid = false;
            // }
            
            // if (valid) {
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
            let damageDice = specialAttack.diceSize === 0 ? '' : `${ specialAttack.diceCount }d${ specialAttack.diceSize }`;
            if (specialAttack.nonCrit) damageDice += (!!damageDice.length ? ` ${ game.i18n.localize('MMMOD.UI.Plus') } ` : '') + `${ specialAttack.nonCrit.formula } ${!!specialAttack.nonCrit.type.values.toString() ? 
                game.i18n.localize('MMMOD.DamageTypes.' + specialAttack.nonCrit.type.values.toString()).capitalize() : game.i18n.localize('MMMOD.DamageTypes.' + specialAttack.nonCrit.type.custom).capitalize()}`;
                
                specialAttacks.push(`${ specialAttack.count > 1 ? specialAttack.count + ' ' : '' }${ game.i18n.localize('MMMOD.Attacks.' + specialAttack.name) } (${ !!damageDice ? damageDice : '0' }${ !!attackSpecial ? ` ${game.i18n.localize('MMMOD.UI.Plus') } ` + attackSpecial : ''})`);
            }
            // }
            
            if (specialAttacks.length === 0) return game.i18n.localize('MMMOD.UI.None');
            return specialAttacks.join(', ');
        }
        
    /**
     * Processes what senses will be applied for form to show to the user
     * 
     * @returns String showing the summary of senses the form will have
     */
    processSenses() {
        this.senses = [];
        const senseList = [];
        for (let i = 0; i < this.formData.senses.length; i++) {
            let senseEnumValue = this.formData.senses[i];
            const senseEnums = Object.keys(MorphinChanges.SENSES);
            const senseKey = Object.keys(MorphinChanges.SENSES[senseEnums[senseEnumValue - 1]].setting)[0];
            const senseValue = MorphinChanges.SENSES[senseEnums[senseEnumValue - 1]].setting[senseKey];
            
            const allowedSenses = MorphinChanges.allowedSenses[this.spell][this.level];
            if (!allowedSenses[senseKey]) continue;
            
            if (senseValue > allowedSenses[senseKey].value) {
                senseEnumValue = MorphinChanges.SENSES[allowedSenses[senseKey].static + allowedSenses[senseKey].value].value;
            }
            this.senses.push(senseEnumValue);
            
            if (!!senseEnumValue && !!MorphinChanges.allowedSenses[this.spell][this.level][senseKey]) {
                senseList.push(`${ game.i18n.localize('MMMOD.Senses.' + MorphinChanges.SENSES[senseEnums[senseEnumValue - 1]].name) }`); // enum value 1 = SENSES[0] = LOWLIGHT
            }
        }
        
        if (senseList.length === 0) return game.i18n.localize('MMMOD.UI.None');
        return senseList.join(', ');
    }
    
    /**
     * Processes display of what special abilities are going to be added to the sheet
     * 
     * @returns String showing the summary of special abilities the form will have
     */
    processSpecials() {
        this.special = this.formData.special?.filter(o => MorphinChanges.allowedSpecials[this.spell][this.level].some(p => o === p)) || [];
        const specials = [];

        if (this.special.length === 0) return game.i18n.localize('MMMOD.UI.None');

        for (const special of this.special) {
            specials.push(game.i18n.localize('MMMOD.Attacks.' + special));
        }

        return specials.join(', ');
    }

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
            await this.updateFormChoices(event, $('#formSelect')[0], $('input[name="typeSelect"]:checked')[0]?.value);
            $('#changePreview')[0].innerHTML = await this.buildPreviewTemplate($('#formSelect')[0].value, $('input[name="typeSelect"]:checked')[0]?.value);
        });

        // form type radio button changed (animal/magical beast). Update allowed sizes for this spell level, update the form choices, update preview
        $('#typeSelect').on('change', async (event) => {
            await this.updateSizeChoices(event, $('#sizeSelect')[0]);
            await this.updateFormChoices({ target: { value: 'med' } }, $('#formSelect')[0], $('input[name="typeSelect"]:checked')[0]?.value);
            $('#changePreview')[0].innerHTML = await this.buildPreviewTemplate($('#formSelect')[0].value, $('input[name="typeSelect"]:checked')[0]?.value);
        });

        // selected form changed, update the preview
        $('#formSelect').on('change', async (event) => {
            $('#changePreview')[0].innerHTML = await this.buildPreviewTemplate($('#formSelect')[0].value, $('input[name="typeSelect"]:checked')[0]?.value);
        });

        // Submit clicked, apply to the actor
        $('#submitButton').on('click', async (event) => {
            if (this.planar && !this.planarType) {
                const planarValue = $('input[name="planarSelect"]:checked')[0]?.value;
                this.planarType = (planarValue === 'none' ? null : planarValue);
            }
            if (this.energized && !this.energizedTypes) {
                const energies = ['acid', 'cold', 'electric', 'fire'];
                this.energizedTypes = [];
                for (const energy of energies) {
                    if ($(`input[name=${energy + 'Energized'}]`).prop('checked')) this.energizedTypes.push(energy);
                }
            }
            if (this.mutated && !this.mutatedType) {
                this.mutatedType = $('#mutatedSelect').val();
            }
            await this.applyChanges(event, $('#formSelect')[0].value, $('input[name="typeSelect"]:checked')[0]?.value);
        });
    }
}