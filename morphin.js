import { MightyMorphinApp } from './scripts/mighty-morphin.js';
import DirectoryPicker from './scripts/DirectoryPicker.js';

// Expose functions to users
Hooks.once('init', () => {
  game.mightyMorphin = game.mightyMorphin || {};

  game.mightyMorphin.enlargePerson = MightyMorphinApp.enlargePerson;
  game.mightyMorphin.animalGrowth = MightyMorphinApp.animalGrowth;
  game.mightyMorphin.legendaryProportions = MightyMorphinApp.legendaryProportions;
  game.mightyMorphin.frightfulAspect = MightyMorphinApp.frightfulAspect;
  game.mightyMorphin.reducePerson = MightyMorphinApp.reducePerson;
  game.mightyMorphin.revert = MightyMorphinApp.revert;
  game.mightyMorphin.beastShape = MightyMorphinApp.beastShape;
  game.mightyMorphin.elementalBody = MightyMorphinApp.elementalBody;
  game.mightyMorphin.plantShape = MightyMorphinApp.plantShape;
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
    name: 'Form Token Image Path',
    hint: 'Set path to a folder to search for form token images to change to. Images must be an exact match to form name with only letters (no spaces or non-letter/number characters, case sensitive)',
    default: '[data]',
    scope: 'world',
    type: DirectoryPicker.Directory,
    config: true
  });
};

/**
 * Initializes module settings from values in menu
 */
export const initializeSettings = function () {
  MightyMorphinApp.imageFolder = game.settings.get('pf1-mighty-morphin', 'imagePath');
};