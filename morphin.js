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
  game.mightyMorphin.elementalBody = MightyMorphinApp.elementalBody;
  game.mightyMorphin.plantShape = MightyMorphinApp.plantShape;
  game.mightyMorphin.maulerBattleForm = MightyMorphinApp.maulerBattleForm;
});

// Set up static sizes from the system's info
Hooks.once('ready', async () => {
  MightyMorphinApp.sizes = Object.keys(CONFIG.PF1.actorSizes);
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
