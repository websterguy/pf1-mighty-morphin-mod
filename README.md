# Mighty Morphin Mod
## Installation

https://github.com/websterguy/pf1-mighty-morphin-mod/releases/latest/download/module.json

## Usage

This mod works through functions exposed in game.mightymorphin. You can find sample macros for usage in the included macro compendium.

## Description

This mod provides functions to help automate polymorph spell effects and size change spells for the PF1e system for Foundry VTT.

Currently supports buff generation and application of effects of the following spells:
* Enlarge Person
* Reduce Person
* Animal Growth
* Legendary Proportions
* Frightful Aspect
* Beast Shape I-IV
* Elemental Body I-IV
* Plant Shape I-III
* Druid Wild Shape (As Beast Shape, Elemental Body, and Plant Shape)

Effects such as Beast Shape include creating attacks, replacing speeds, replacing senses, etc.

## Future Plans

* Implementing other form changes, such as Alter Self, Monstrous Physique, etc.
* Possibly make options for replacing token images with form name matching

## Known Issues

* System sometimes throws errors when toggling buffs off (It's unclear if this is a PF1 system issue or a Foundry core issue, but it's not this mod). If it happens and the buff icon gets stuck, the only real solution is to refresh the program/browser window.
