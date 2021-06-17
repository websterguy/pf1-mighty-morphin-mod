import { MightyMorphinApp } from './scripts/mighty-morphin.js';

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
  await initializeSettings();
});

Hooks.once('setup', function () {
  registerSettings();
});

/**
 * Registers module settings with Foundry menu
 */
export const registerSettings = function () {
  game.settings.register('pf1-mighty-morphin', 'imagePath', {
    name: 'Form Token Image Path',
    hint: 'Set path to a folder to search for form token images to change to. Images must be an exact match to form name with only letters (no spaces or non-letter characters, case sensitive)',
    default: '',
    scope: 'world',
    type: String,
    config: true,
    onChange: _ => MightyMorphinApp.updateImageFolder()
  });
};

/**
 * Initializes module settings from values in menu
 */
export const initializeSettings = function () {
  MightyMorphinApp.imageFolder = game.settings.get('pf1-mighty-morphin', 'imagePath');
};