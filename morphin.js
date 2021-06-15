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
Hooks.once('ready', () => {
  MightyMorphinApp.sizes = Object.keys(CONFIG.PF1.actorSizes);
});
