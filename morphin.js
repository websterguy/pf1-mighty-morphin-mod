import { MightyMorphinApp } from './scripts/mighty-morphin.js';
import DirectoryPicker from './scripts/DirectoryPicker.js';

// Expose functions to users
Hooks.once('init', () => {
  game.mightyMorphin = game.mightyMorphin || {};

  game.mightyMorphin.enlargePerson = MightyMorphinApp.enlargePerson;
  game.mightyMorphin.animalGrowth = MightyMorphinApp.animalGrowth;
  game.mightyMorphin.legendaryProportions = MightyMorphinApp.legendaryProportions;
  game.mightyMorphin.frightfulAspect = MightyMorphinApp.frightfulAspect;
  game.mightyMorphin.righteousMight = MightyMorphinApp.righteousMight;
  game.mightyMorphin.reducePerson = MightyMorphinApp.reducePerson;
  game.mightyMorphin.revert = MightyMorphinApp.revert;
  game.mightyMorphin.beastShape = MightyMorphinApp.beastShape;
  game.mightyMorphin.magicalBeastShape = MightyMorphinApp.magicalBeastShape;
  game.mightyMorphin.elementalBody = MightyMorphinApp.elementalBody;
  game.mightyMorphin.plantShape = MightyMorphinApp.plantShape;
  game.mightyMorphin.verminShape = MightyMorphinApp.verminShape;
  game.mightyMorphin.giantForm = MightyMorphinApp.giantForm;
  game.mightyMorphin.alterSelf = MightyMorphinApp.alterSelf;
  game.mightyMorphin.formOfTheDragon = MightyMorphinApp.formOfTheDragon;
  game.mightyMorphin.shifterWildShape = MightyMorphinApp.shifterWildShape;
  game.mightyMorphin.maulerBattleForm = MightyMorphinApp.maulerBattleForm;
  game.mightyMorphin.shifterClawsOn = MightyMorphinApp.shifterClawsOn;
});

// Set up static sizes from the system's info
Hooks.once('ready', async () => {
  MightyMorphinApp.sizes = Object.keys(CONFIG.PF1.actorSizes);
  
  MightyMorphinApp.shapeSpells = [
    game.i18n.localize('MMMOD.Buffs.AlterSelf.Name').slugify(),
    game.i18n.localize('MMMOD.Buffs.BeastShape.Name').slugify(),
    game.i18n.localize('MMMOD.Buffs.FormOfTheDragon.Name').slugify(),
    game.i18n.localize('MMMOD.Buffs.ElementalBody.Name').slugify(),
    game.i18n.localize('MMMOD.Buffs.GiantForm.Name').slugify(),
    game.i18n.localize('MMMOD.Buffs.MagicalBeastShape.Name').slugify(),
    game.i18n.localize('MMMOD.Buffs.PlantShape.Name').slugify(),
    game.i18n.localize('MMMOD.Buffs.ShifterWildShape.Name').slugify(),
    game.i18n.localize('MMMOD.Buffs.VerminShape.Name').slugify(),
    game.i18n.localize('MMMOD.Buffs.WildShape.Name').slugify()
  ];

  MightyMorphinApp.otherTransmutations = [
    game.i18n.localize('MMMOD.Buffs.EnlargePerson.Name').slugify(),
    game.i18n.localize('MMMOD.Buffs.ReducePerson.Name').slugify(),
    game.i18n.localize('MMMOD.Buffs.LegendaryProportions.Name').slugify(),
    game.i18n.localize('MMMOD.Buffs.FrightfulAspect.Name').slugify(),
    game.i18n.localize('MMMOD.Buffs.AnimalGrowth.Name').slugify(),
    game.i18n.localize('MMMOD.Buffs.RighteousMight.Name').slugify(),
    game.i18n.localize('MMMOD.Buffs.MaulerBattleForm.Name').slugify()
  ];

  MightyMorphinApp.nonPolymorphs = [
    game.i18n.localize('MMMOD.Buffs.ShifterAspect.Name').slugify()
  ];

  initializeSettings();
});

Hooks.once('init', function () {
  registerSettings();
});

/**
 * Registers module settings with Foundry menu
 */
export const registerSettings = function () {
  game.settings.register('pf1-mighty-morphin', 'imagePath', {
    name: 'MMMOD.Settings.Image.Name',
    hint: 'MMMOD.Settings.Image.Hint',
    default: '[data]',
    scope: 'world',
    type: DirectoryPicker.Directory,
    config: true,
    onChange: value => {
      MightyMorphinApp.imageFolder = DirectoryPicker.parse(value);
    }
  });
  game.settings.register('pf1-mighty-morphin', 'createScriptCall', {
    name: 'MMMOD.Settings.ScriptCall.Name',
    hint: 'MMMOD.Settings.ScriptCall.Hint',
    default: false,
    scope: 'world',
    type: Boolean,
    config: true
  });
};

/**
 * Initializes module settings from values in menu
 */
export const initializeSettings = function () {
  DirectoryPicker.verifyPath(DirectoryPicker.parse(game.settings.get('pf1-mighty-morphin', 'imagePath')));
  MightyMorphinApp.imageFolder = DirectoryPicker.parse(game.settings.get('pf1-mighty-morphin', 'imagePath'));
};
