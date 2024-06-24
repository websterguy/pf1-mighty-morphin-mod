/**
 * Class for storing all changes associated with buffs and form changes provided by this mod. Arrays of changes are for applying to a buff Item in the pf1 system.
 * 
 * Objects associated with a specific form carry data used by specific spells to populate that data onto character sheets.
 * This data includes natural attacks, special attacks, form speeds, senses, special properties (special), energy resistances (eres),
 * damage reduction (dr), vulnerabilities (dv), immunities (di), special effect info, and regen
 */
export class MorphinChanges {

}

/**
 * Static changes object with change data
 */
MorphinChanges.changes = {
    enlargePerson: {
        changes: [
            { formula: '2', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 2 },
            { formula: '-2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: -2 }
        ],
        size: 1
    },
    animalGrowth: {
        changes: [
            { formula: '8', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 8 },
            { formula: '4', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 4 },
            { formula: '-2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: -2 },
            { formula: '2', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 6 }
        ],
        size: 1
    },
    legendaryProportions: {
        changes: [
            { formula: '6', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 6 },
            { formula: '4', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 4 },
            { formula: '6', operator: 'add', subTarget: 'nac', modifier: 'size', priority: 0, value: 6 }
        ],
        size: 1
    },
    frightfulAspect: {
        changes: [
            { formula: '6', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 6 },
            { formula: '4', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 4 },
            { formula: '6', operator: 'add', subTarget: 'nac', modifier: 'size', priority: 0, value: 6 }
        ],
        size: 'lg'
    },
    righteousMight: {
        changes: [
            { formula: '4', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 4 },
            { formula: '4', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 4 },
            { formula: '-2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: -2 },
            { formula: '2', operator: 'add', subTarget: 'nac', modifier: 'enh', priority: 0, value: 2 }
        ],
        size: 1
    },
    reducePerson: {
        changes: [
            { formula: '-2', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: -2 },
            { formula: '2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 2 }
        ],
        size: -1
    },
    maulerBattleForm: {
        changes: [
            { formula: '2', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: -2 }
        ],
        size: 'med'
    },
    beastShape: {
        animal: {
            sm: {
                changes: [
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 2 },
                    { formula: '1', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 1 }
                ],
                size: 'sm'
            },
            med: {
                changes: [
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 2 },
                    { formula: '2', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 2 }
                ],
                size: 'med'
            },
            tiny: {
                changes: [
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 4 },
                    { formula: '-2', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'untyped', priority: 0, value: -2 },
                    { formula: '1', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 1 }
                ],
                size: 'tiny'
            },
            lg: {
                changes: [
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 4 },
                    { formula: '-2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'untyped', priority: 0, value: -2 },
                    { formula: '4', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 4 }
                ],
                size: 'lg'
            },
            dim: {
                changes: [
                    { formula: '6', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 6 },
                    { formula: '-4', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'untyped', priority: 0, value: -4 },
                    { formula: '1', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 1 }
                ],
                size: 'dim'
            },
            huge: {
                changes: [
                    { formula: '6', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 6 },
                    { formula: '-4', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'untyped', priority: 0, value: -4 },
                    { formula: '6', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 6 }
                ],
                size: 'huge'
            }
        },
        magicalBeast: {
            sm: {
                changes: [
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 4 },
                    { formula: '2', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 2 }
                ],
                size: 'sm'
            },
            med: {
                changes: [
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 4 },
                    { formula: '4', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 4 }
                ],
                size: 'med'
            },
            tiny: {
                changes: [
                    { formula: '8', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 8 },
                    { formula: '-2', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'untyped', priority: 0, value: -2 },
                    { formula: '3', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 3 }
                ],
                size: 'tiny'
            },
            lg: {
                changes: [
                    { formula: '6', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 6 },
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 2 },
                    { formula: '-2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'untyped', priority: 0, value: -2 },
                    { formula: '6', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 6 }
                ],
                size: 'lg'
            }
        }
    },
    magicalBeastShape: {
        magicalBeast: {
            sm: {
                changes: [
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 4 },
                    { formula: '2', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 2 }
                ],
                size: 'sm'
            },
            med: {
                changes: [
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 4 },
                    { formula: '4', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 4 }
                ],
                size: 'med'
            },
            tiny: {
                changes: [
                    { formula: '8', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 8 },
                    { formula: '-2', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'untyped', priority: 0, value: -2 },
                    { formula: '3', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 3 }
                ],
                size: 'tiny'
            },
            lg: {
                changes: [
                    { formula: '6', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 6 },
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 2 },
                    { formula: '-2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'untyped', priority: 0, value: -2 },
                    { formula: '6', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 6 }
                ],
                size: 'lg'
            },
            dim: {
                changes: [
                    { formula: '10', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 10 },
                    { formula: '-4', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'untyped', priority: 0, value: -4 }
                ],
                size: 'dim'
            },
            huge: {
                changes: [
                    { formula: '8', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 8 },
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 2 },
                    { formula: '-4', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'untyped', priority: 0, value: -4 },
                    { formula: '7', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 7 }
                ],
                size: 'huge'
            }
        }
    },
    elementalBody: {
        air: {
            1: {
                changes: [
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 2 },
                    { formula: '2', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 2 }
                ]
            },
            2: {
                changes: [
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 4 },
                    { formula: '3', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 3 }
                ]
            },
            3: {
                changes: [
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 2 },
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 4 },
                    { formula: '4', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 4 }
                ]
            },
            4: {
                changes: [
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 4 },
                    { formula: '6', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 6 },
                    { formula: '4', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 4 }
                ]
            }
        },
        earth: {
            1: {
                changes: [
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 2 },
                    { formula: '4', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 4 }
                ]
            },
            2: {
                changes: [
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 4 },
                    { formula: '5', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 5 }
                ]
            },
            3: {
                changes: [
                    { formula: '6', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 6 },
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 2 },
                    { formula: '-2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'untyped', priority: 0, value: -2 },
                    { formula: '6', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 6 }
                ]
            },
            4: {
                changes: [
                    { formula: '8', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 8 },
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 4 },
                    { formula: '-2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'untyped', priority: 0, value: -2 },
                    { formula: '6', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 6 }
                ]
            }
        },
        fire: {
            1: {
                changes: [
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 2 },
                    { formula: '2', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 2 }
                ]
            },
            2: {
                changes: [
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 4 },
                    { formula: '3', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 3 }
                ]
            },
            3: {
                changes: [
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 2 },
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 4 },
                    { formula: '4', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 4 }
                ]
            },
            4: {
                changes: [
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 4 },
                    { formula: '6', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 6 },
                    { formula: '4', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 4 }
                ]
            }
        },
        water: {
            1: {
                changes: [
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 2 },
                    { formula: '4', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 4 }
                ]
            },
            2: {
                changes: [
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 4 },
                    { formula: '5', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 5 }
                ]
            },
            3: {
                changes: [
                    { formula: '6', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 6 },
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 2 },
                    { formula: '-2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'untyped', priority: 0, value: -2 },
                    { formula: '6', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 6 }
                ]
            },
            4: {
                changes: [
                    { formula: '8', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 8 },
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 4 },
                    { formula: '-2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'untyped', priority: 0, value: -2 },
                    { formula: '6', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 6 }
                ]
            }
        }
    },
    plantShape: {
        plant: {
            sm: {
                changes: [
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 2 },
                    { formula: '2', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 2 }
                ],
                size: 'sm'
            },
            med: {
                changes: [
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 2 },
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'enh', priority: 0, value: 2 },
                    { formula: '2', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 2 }
                ],
                size: 'med'
            },
            lg: {
                changes: [
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 4 },
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 2 },
                    { formula: '4', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 4 }
                ],
                size: 'lg'
            },
            huge: {
                changes: [
                    { formula: '8', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 8 },
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 4 },
                    { formula: '-2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'untyped', priority: 0, value: -2 },
                    { formula: '6', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 6 }
                ],
                size: 'huge'
            }
        }
    },
    verminShape: {
        vermin: {
            sm: {
                changes: [
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 2 },
                    { formula: '2', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 2 }
                ],
                size: 'sm'
            },
            med: {
                changes: [
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 2 },
                    { formula: '3', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 3 }
                ],
                size: 'med'
            },
            lg: {
                changes: [
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 4 },
                    { formula: '-2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'untyped', priority: 0, value: -2 },
                    { formula: '5', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 5 }
                ],
                size: 'lg'
            },
            tiny: {
                changes: [
                    { formula: '-2', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'untyped', priority: 0, value: -2 },
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 4 },
                    { formula: '1', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 1 }
                ],
                size: 'huge'
            }
        }
    },
    giantForm: {
        giant: {
            1: {
                changes: [
                    { formula: '6', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 6 },
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 4 },
                    { formula: '-2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'untyped', priority: 0, value: -2 },
                    { formula: '4', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 4 }
                ]
            },
            2: {
                changes: [
                    { formula: '8', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 8 },
                    { formula: '6', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 6 },
                    { formula: '-2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'untyped', priority: 0, value: -2 },
                    { formula: '6', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 6 },
                    { formula: '10', operator: 'add', subTarget: 'landSpeed', modifier: 'enh', priority: 0, value: 10 }
                ]
            }
        }
    },
    formOfTheDragon: {
        dragon: {
            1: {
                changes: [
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 4 },
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 2 },
                    { formula: '4', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 4 }
                ]
            },
            2: {
                changes: [
                    { formula: '6', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 6 },
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 4 },
                    { formula: '6', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 6 }
                ]
            },
            3: {
                changes: [
                    { formula: '10', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 10 },
                    { formula: '8', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 8 },
                    { formula: '8', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 8 }
                ]
            }
        }
    },
    alterSelf: {
        humanoid: {
            sm: {
                changes: [
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 2 }
                ]
            },
            med: {
                changes: [
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 2 }
                ]
            }
        }
    },
    polymorphSize: {
        fine: [
            { formula: '6', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'untyped', priority: 0, value: 6 },
            { formula: '-6', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'untyped', priority: 0, value: -6 }
        ],
        dim: [
            { formula: '6', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'untyped', priority: 0, value: 6 },
            { formula: '-4', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'untyped', priority: 0, value: -4 }
        ],
        tiny: [
            { formula: '4', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'untyped', priority: 0, value: 4 },
            { formula: '-2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'untyped', priority: 0, value: -2 }
        ],
        lg: [
            { formula: '-4', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'untyped', priority: 0, value: -4 },
            { formula: '2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'untyped', priority: 0, value: 2 },
            { formula: '-2', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'untyped', priority: 0, value: -2 }
        ],
        huge: [
            { formula: '-8', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'untyped', priority: 0, value: -8 },
            { formula: '4', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'untyped', priority: 0, value: 4 },
            { formula: '-4', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'untyped', priority: 0, value: -4 }
        ],
        col: [
            { formula: '-16', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'untyped', priority: 0, value: -16 },
            { formula: '4', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'untyped', priority: 0, value: 4 },
            { formula: '-8', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'untyped', priority: 0, value: -8 }
        ],
        grg: [
            { formula: '-12', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'untyped', priority: 0, value: -12 },
            { formula: '4', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'untyped', priority: 0, value: 4 },
            { formula: '-6', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'untyped', priority: 0, value: -6 }
        ]
    },
    wildShape: {
        planar: {
            celestial: {
                changes: [
                    { formula: '@attributes.sr.total < (@attributes.hd.total + 5) ? (@attributes.hd.total + 5) : @attributes.sr.total', subTarget: 'spellResist', operator: 'set' }
                ],
                senses: [
                    7
                ],
                dr: {
                    5: [
                        { amount: 5, operator: true, types: ['evil', ''] }
                    ],
                    11: [
                        { amount: 10, operator: true, types: ['evil', ''] }
                    ]
                },
                eres: {
                    5: [
                        { amount: 10, operator: true, types: ['cold', ''] },
                        { amount: 10, operator: true, types: ['acid', ''] },
                        { amount: 10, operator: true, types: ['electric', ''] }
                    ],
                    11: [
                        { amount: 15, operator: true, types: ['cold', ''] },
                        { amount: 15, operator: true, types: ['acid', ''] },
                        { amount: 15, operator: true, types: ['electric', ''] }
                    ]
                },
                conditionals: [
                    { default: false, name: 'Smite Evil (1/day)', modifiers: [{ formula: 'max(0, @abilities.cha.mod)', target: 'attack', subTarget: 'allAttack', type: 'untyped', critical: 'normal' }, { formula: '@attributes.hd.total', target: 'damage', subTarget: 'allDamage', type: '', damageType: { values: ['untyped'], custom: '' }, critical: 'normal' }] }
                ],
                contextNotes: [
                    { text: '+[[2]] to critical confirmation vs evil', subTarget: 'attack' }
                ]
            },
            fiendish: {
                changes: [
                    { formula: '@attributes.sr.total < (@attributes.hd.total + 5) ? (@attributes.hd.total + 5) : @attributes.sr.total', subTarget: 'spellResist', operator: 'set' }
                ],
                senses: [
                    7
                ],
                dr: {
                    5: [
                        { amount: 5, operator: true, types: ['good', ''] }
                    ],
                    11: [
                        { amount: 10, operator: true, types: ['good', ''] }
                    ]
                },
                eres: {
                    5: [
                        { amount: 10, operator: true, types: ['cold', ''] },
                        { amount: 10, operator: true, types: ['fire', ''] }
                    ],
                    11: [
                        { amount: 15, operator: true, types: ['cold', ''] },
                        { amount: 15, operator: true, types: ['fire', ''] }
                    ]
                },
                conditionals: [
                    { default: false, name: 'Smite Good (1/day)', modifiers: [{ formula: 'max(0, @abilities.cha.mod)', target: 'attack', subTarget: 'allAttack', type: 'untyped', critical: 'normal' }, { formula: '@attributes.hd.total', target: 'damage', subTarget: 'allDamage', type: '', damageType: { values: ['untyped'], custom: '' }, critical: 'normal' }] }
                ],
                contextNotes: [
                    { text: '+[[2]] to critical confirmation vs good', subTarget: 'attack' }
                ]
            }
        },
        elementalClaws: {
            conditionals: [
                { default: false, name: 'Elemental Claws (Acid)', modifiers: [{ formula: '1d6', target: 'damage', subTarget: 'attack_0', type: '', critical: 'nonCrit', damageType: { values: ['acid'], custom: '' } }] },
                { default: false, name: 'Elemental Claws (Cold)', modifiers: [{ formula: '1d6', target: 'damage', subTarget: 'attack_0', type: '', critical: 'nonCrit', damageType: { values: ['cold'], custom: '' } }] },
                { default: false, name: 'Elemental Claws (Electricity)', modifiers: [{ formula: '1d6', target: 'damage', subTarget: 'attack_0', type: '', critical: 'nonCrit', damageType: { values: ['electric'], custom: '' } }] },
                { default: false, name: 'Elemental Claws (Fire)', modifiers: [{ formula: '1d6', target: 'damage', subTarget: 'attack_0', type: '', critical: 'nonCrit', damageType: { values: ['fire'], custom: '' } }] }
            ]
        },
        energized: {
            conditionals: [
                { default: false, name: 'Energized', modifiers: [{ formula: '1d6', target: 'damage', subTarget: 'allDamage', type: '', critical: 'nonCrit', damageType: { values: [], custom: '' } }] }
            ],
            eres: [
                { amount: 10, operator: true, types: ['', ''] }
            ]
        },
        frightful: {
            specialAttack: [
                { name: 'FrightfulShapeAttackSuccess', diceCount: 0, diceSize: 0, count: 1, special: ['Frightful'], attackType: 'save' }
            ],
            effect: {
                'Frightful': { note: 'Failure effect based on HD. Mind-affecting.', type: 'will', saveDesc: 'Success immune 24 hours', description: 'When you use wild shape, it is supernaturally ferocious and disquieting in appearance, such that when you attack a creature, you can use this ferocity to frighten observers. Opponents within 30 feet of you when you attack must succeed at a Will save (DC = 10 + half your character level + your Charisma modifier ([[@abilities.cha.mod]])) to resist being affected by your frightful shape. On a failed save, creatures with fewer Hit Dice than you ([[@attributes.hd.total]]) become @UUID[Compendium.pf1.pf1e-rules.NSqfXaj4MevUR2uJ.JournalEntryPage.XxLUswkCuXnXmA5T]{shaken}, or @UUID[Compendium.pf1.pf1e-rules.NSqfXaj4MevUR2uJ.JournalEntryPage.nGTsTfpWcJTTU3rk]{panicked} if they have 4 Hit Dice or fewer; in either case, the effect lasts for a number of rounds equal to your character level. An opponent that succeeds at its saving throw is immune to your frightful shape for 24 hours. This is a mind-affecting fear effect.' }
            },
            macro: { 
                name: '', command: 'fromUuidSync("ACTORUUIDHERE").items.getName("FRIGHTFULSHAPE").use({skipDialog: true})', type: 'script', ownership: { default: 0 }
            },
            contextNotes: [
                { text: 'On attack success: @Macro[MACROIDHERE]', subTarget: 'attack' }
            ]
        },
        mutated: {
            types: [
                'Bite', 'Claw', 'Gore', 'Slam', 'Sting', 'Talons'
            ],
            fine: [
                { name: 'Bite', diceCount: 1, diceSize: 1, count: 1 },
                { name: 'Claw', diceCount: 0, diceSize: 1, count: 1 },
                { name: 'Gore', diceCount: 1, diceSize: 1, count: 1 },
                { name: 'Slam', diceCount: 0, diceSize: 1, count: 1 },
                { name: 'Sting', diceCount: 0, diceSize: 1, count: 1 },
                { name: 'Talons', diceCount: 0, diceSize: 1, count: 1 }
            ],
            dim: [
                { name: 'Bite', diceCount: 1, diceSize: 2, count: 1 },
                { name: 'Claw', diceCount: 1, diceSize: 1, count: 1 },
                { name: 'Gore', diceCount: 1, diceSize: 2, count: 1 },
                { name: 'Slam', diceCount: 1, diceSize: 1, count: 1 },
                { name: 'Sting', diceCount: 1, diceSize: 1, count: 1 },
                { name: 'Talons', diceCount: 1, diceSize: 1, count: 1 }
            ],
            sm: [
                { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 },
                { name: 'Claw', diceCount: 1, diceSize: 3, count: 1 },
                { name: 'Gore', diceCount: 1, diceSize: 4, count: 1 },
                { name: 'Slam', diceCount: 1, diceSize: 3, count: 1 },
                { name: 'Sting', diceCount: 1, diceSize: 3, count: 1 },
                { name: 'Talons', diceCount: 1, diceSize: 3, count: 1 }
            ],
            med: [
                { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
                { name: 'Claw', diceCount: 1, diceSize: 4, count: 1 },
                { name: 'Gore', diceCount: 1, diceSize: 6, count: 1 },
                { name: 'Slam', diceCount: 1, diceSize: 4, count: 1 },
                { name: 'Sting', diceCount: 1, diceSize: 4, count: 1 },
                { name: 'Talons', diceCount: 1, diceSize: 4, count: 1 }
            ],
            lg: [
                { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
                { name: 'Claw', diceCount: 1, diceSize: 6, count: 1 },
                { name: 'Gore', diceCount: 1, diceSize: 8, count: 1 },
                { name: 'Slam', diceCount: 1, diceSize: 6, count: 1 },
                { name: 'Sting', diceCount: 1, diceSize: 6, count: 1 },
                { name: 'Talons', diceCount: 1, diceSize: 6, count: 1 }
            ],
            huge: [
                { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
                { name: 'Claw', diceCount: 1, diceSize: 8, count: 1 },
                { name: 'Gore', diceCount: 2, diceSize: 6, count: 1 },
                { name: 'Slam', diceCount: 1, diceSize: 8, count: 1 },
                { name: 'Sting', diceCount: 1, diceSize: 8, count: 1 },
                { name: 'Talons', diceCount: 1, diceSize: 8, count: 1 }
            ],
            grg: [
                { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
                { name: 'Claw', diceCount: 2, diceSize: 6, count: 1 },
                { name: 'Gore', diceCount: 2, diceSize: 8, count: 1 },
                { name: 'Slam', diceCount: 2, diceSize: 6, count: 1 },
                { name: 'Sting', diceCount: 2, diceSize: 6, count: 1 },
                { name: 'Talons', diceCount: 2, diceSize: 6, count: 1 }
            ],
            col: [
                { name: 'Bite', diceCount: 4, diceSize: 6, count: 1 },
                { name: 'Claw', diceCount: 2, diceSize: 8, count: 1 },
                { name: 'Gore', diceCount: 4, diceSize: 6, count: 1 },
                { name: 'Slam', diceCount: 2, diceSize: 8, count: 1 },
                { name: 'Sting', diceCount: 2, diceSize: 8, count: 1 },
                { name: 'Talons', diceCount: 2, diceSize: 8, count: 1 }
            ]
        }
    },
    shifterWildShape: {
        'Bat': {
            source: 'beastShape',
            minor: {
                1: {
                    senses: [
                        7
                    ]
                },
                8: {
                    senses: [
                        10
                    ]
                },
                15: {
                    senses: [
                        10, 19
                    ]
                }
            },
            major: {
                1: {
                    size: 'lg',
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 }
                    ],
                    speed: {
                        land: 30,
                        fly: {
                            base: 40,
                            maneuverability: 'clumsy'
                        },
                        senses: [
                            18
                        ]
                    }
                },
                8: {
                    senses: [
                        20
                    ],
                    feats: [
                        { name: 'Flyby Attack', uuid: 'Compendium.pf-content.pf-feats.Item.zVUcdFSgoVENjmUa' }
                    ]
                },
                15: {
                    speed: {
                        fly: {
                            base: 80,
                            maneuverability: 'good'
                        }
                    },
                    feats: [
                        { name: 'Flyby Attack', uuid: 'Compendium.pf-content.pf-feats.Item.zVUcdFSgoVENjmUa' },
                        { name: 'Hover', uuid: 'Compendium.pf-content.pf-feats.Item.6lqGh0NvprZpUUwV' }
                    ]
                }
            },
            alternates: [
                'Bite', 'Wing'
            ]
        },
        'Bear': {
            source: 'beastShape',
            minor: {
                1: {
                    changes: [
                        { formula: '2', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'enh', priority: 0, value: 2 }
                    ]
                },
                8: {
                    changes: [
                        { formula: '4', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'enh', priority: 0, value: 4 }
                    ]
                },
                15: {
                    changes: [
                        { formula: '6', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'enh', priority: 0, value: 6 }
                    ]
                }
            },
            major: {
                1: {
                    size: 'lg',
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, claw: false },
                        { name: 'Claw', diceCount: 1, diceSize: 6, count: 2, special: ['Grab'] }
                    ],
                    speed: {
                        land: 40
                    },
                    senses: [
                        1, 14
                    ]
                },
                8: {
                    feats: [
                        { name: 'Improved Natural Attack', uuid: 'Compendium.pf-content.pf-feats.Item.xz6IYXK8qfnNhior' }
                    ],
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, claw: false },
                        { name: 'Claw', diceCount: 1, diceSize: 6, count: 2, special: ['Grab'], improved: true }
                    ]
                },
                15: {
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, claw: false },
                        { name: 'Claw', diceCount: 1, diceSize: 6, count: 2, special: ['Grab'], critMult: 3, improved: true }
                    ],
                    feats: [
                        { name: 'Improved Natural Attack', uuid: 'Compendium.pf-content.pf-feats.Item.xz6IYXK8qfnNhior' },
                        { name: 'Awesome Blow', uuid: 'Compendium.pf-content.pf-feats.Item.KPaC3H6EQGG4sXLT' }
                    ]
                }
            },
            alternates: [
                'Bite'
            ]
        },
        'Boar': {
            source: 'beastShape',
            minor: {
                1: {
                    feats: [
                        { name: 'Diehard', uuid: 'Compendium.pf1.feats.Item.O0e0UCim27GPKFuW' }
                    ]
                },
                8: {

                },
                15: {

                }
            },
            major: {
                1: {
                    size: 'lg',
                    attacks: [
                        { name: 'Gore', diceCount: 1, diceSize: 8, count: 1 }
                    ],
                    speed: {
                        land: 40
                    },
                    senses: [
                        1, 14
                    ]
                },
                8: {
                    feats: [
                        { name: 'Improved Natural Attack', uuid: 'Compendium.pf-content.pf-feats.Item.xz6IYXK8qfnNhior' }
                    ],
                    attacks: [
                        { name: 'Gore', diceCount: 1, diceSize: 8, count: 1, improved: true }
                    ],
                    conditionals: [
                        { default: false, name: 'Powerful Charge', modifiers: [{ formula: '1d8', target: 'damage', subTarget: 'attack_0', type: '', critical: 'nonCrit', damageType: { values: ['piercing'], custom: '' } }] }
                    ]
                },
                15: {
                    changes: [
                        { formula: '@attributes.hd.total', operator: 'add', subTarget: 'mhp', modifier: 'untyped', priority: 0 }
                    ],
                    feats: [
                        { name: 'Improved Natural Attack', uuid: 'Compendium.pf-content.pf-feats.Item.xz6IYXK8qfnNhior' },
                        { name: 'Awesome Blow', uuid: 'Compendium.pf-content.pf-feats.Item.KPaC3H6EQGG4sXLT' }
                    ]
                }
            },
            alternates: [
                'Gore', 'Hoof'
            ]
        },
        'Bull': {
            source: 'beastShape',
            minor: {
                1: {
                    changes: [
                        { formula: '2', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'enh', priority: 0, value: 2 }
                    ]
                },
                8: {
                    changes: [
                        { formula: '4', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'enh', priority: 0, value: 4 }
                    ]
                },
                15: {
                    changes: [
                        { formula: '6', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'enh', priority: 0, value: 6 }
                    ]
                }
            },
            major: {
                1: {
                    size: 'lg',
                    attacks: [
                        { name: 'Gore', diceCount: 1, diceSize: 8, count: 1 }
                    ],
                    speed: {
                        land: 40
                    },
                    senses: [
                        1, 14
                    ],
                    conditionals: [
                        { default: false, name: 'Powerful Charge', modifiers: [{ formula: '1d8', target: 'damage', subTarget: 'attack_0', type: '', critical: 'nonCrit', damageType: { values: ['piercing'], custom: '' } }] }
                    ]
                },
                8: {
                    specialAttack: [
                        { name: 'Trample', diceCount: 1, diceSize: 8, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
                    ],
                    effect: {
                        'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
                    }
                },
                15: {
                    attacks: [
                        { name: 'Gore', diceCount: 2, diceSize: 8, count: 1 }
                    ],
                    specialAttack: [
                        { name: 'Trample', diceCount: 2, diceSize: 8, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
                    ],
                    effect: {
                        'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
                    },
                    feats: [
                        { name: 'Awesome Blow', uuid: 'Compendium.pf-content.pf-feats.Item.KPaC3H6EQGG4sXLT' }
                    ]
                }
            },
            alternates: [
                'Gore', 'Hoof', 'Slam'
            ]
        },
        'Crocodile': {
            source: 'beastShape',
            minor: {
                1: {
                    changes: [
                        { formula: '2', operator: 'add', subTarget: 'skill.swm', modifier: 'competence', priority: 0, value: 2 }
                    ],
                    contextNotes: [
                        { text: '+[[2]] to grapple', subTarget: 'cmb' }
                    ]
                },
                8: {
                    changes: [
                        { formula: '4', operator: 'add', subTarget: 'skill.swm', modifier: 'competence', priority: 0, value: 4 }
                    ],
                    contextNotes: [
                        { text: '+[[4]] to grapple', subTarget: 'cmb' }
                    ]
                },
                15: {
                    changes: [
                        { formula: '6', operator: 'add', subTarget: 'skill.swm', modifier: 'competence', priority: 0, value: 6 }
                    ],
                    contextNotes: [
                        { text: '+[[6]] to grapple', subTarget: 'cmb' }
                    ]
                }
            },
            major: {
                1: {
                    size: 'lg',
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['Grab'] },
                        { name: 'TailSlap', diceCount: 1, diceSize: 12, count: 1 }
                    ],
                    speed: {
                        land: 30
                    },
                    senses: [
                        1
                    ]
                },
                8: {
                    specialAttack: [
                        { name: 'Sprint', diceCount: 0, diceSize: 0, count: 1, special: ['Sprint'], attackType: 'other', claw: false }
                    ],
                    effect: {
                        'Sprint': { note: '+20ft 1 round', description: 'Once per minute as a free action, you can increase your land speed by 20 feet for 1 round.' }
                    }
                },
                15: {
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['Grab'], improved: true },
                        { name: 'TailSlap', diceCount: 1, diceSize: 12, count: 1 }
                    ],
                    feats: [
                        { name: 'Improved Natural Attack', uuid: 'Compendium.pf-content.pf-feats.Item.xz6IYXK8qfnNhior' }
                    ],
                    contextNotes: [
                        { text: 'On successful grapple, can knock prone', subTarget: 'cmb' }
                    ]
                }
            },
            alternates: [
                'Bite', 'TailSlap'
            ]
        },
        'Deinonychus': {
            source: 'beastShape',
            minor: {
                1: {
                    changes: [
                        { formula: '2', operator: 'add', subTarget: 'init', modifier: 'untyped', priority: 0, value: 2 }
                    ]
                },
                8: {
                    changes: [
                        { formula: '4', operator: 'add', subTarget: 'init', modifier: 'untyped', priority: 0, value: 4 }
                    ]
                },
                15: {
                    changes: [
                        { formula: '6', operator: 'add', subTarget: 'init', modifier: 'untyped', priority: 0, value: 6 }
                    ]
                }
            },
            major: {
                1: {
                    size: 'med',
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
                        { name: 'Talons', diceCount: 1, diceSize: 8, count: 2 }
                    ],
                    speed: {
                        land: 60
                    },
                    senses: [
                        1, 14
                    ],
                    special: [
                        'Pounce'
                    ]
                },
                8: {
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
                        { name: 'Talons', diceCount: 1, diceSize: 8, count: 2 },
                        { name: 'Foreclaws', diceCount: 1, diceSize: 4, count: 1, claw: false }
                    ],
                    changes: [
                        { formula: '4', operator: 'add', subTarget: 'skill.acr', modifier: 'racial', priority: 0, value: 4 }
                    ]
                },
                15: {
                    feats: [
                        { name: 'Spring Attack', uuid: 'Compendium.pf1.feats.Item.ugQyUpqPBDsqLyra' }
                    ],
                    changes: [
                        { formula: '1', operator: 'add', subTarget: 'ac', modifier: 'dodge', priority: 0, value: 1 }
                    ]
                }
            },
            alternates: [
                'Bite', 'Talons'
            ]
        },
        'Dolphin': {
            source: 'beastShape',
            minor: {
                1: {
                    contextNotes: [
                        { text: '+[[4]] competence on knowledge to identify creature abilities/weaknesses' , subTarget: 'skills' }
                    ]
                },
                8: {
                    contextNotes: [
                        { text: '+[[6]] competence on knowledge to identify creature abilities/weaknesses' , subTarget: 'skills' }
                    ]
                },
                15: {
                    contextNotes: [
                        { text: '+[[8]] competence on knowledge to identify creature abilities/weaknesses' , subTarget: 'skills' }
                    ]
                }
            },
            major: {
                1: {
                    size: 'lg',
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
                        { name: 'Slam', diceCount: 1, diceSize: 4, count: 1 }
                    ],
                    speed: {
                        land: 0,
                        swim: 60
                    },
                    senses: [
                        1, 18
                    ]
                },
                8: {
                    senses: [
                        1, 20
                    ]
                },
                15: {
                    speed: {
                        land: 0,
                        swim: 80
                    },
                    senses: [
                        1, 24
                    ]
                }
            },
            alternates: [
                'Bite', 'Slam'
            ]
        },
        'Dragonfly': {
            source: 'verminShape',
            minor: {
                1: {

                },
                8: {

                },
                15: {

                }
            },
            major: {
                1: {
                    size: 'med',
                    attacks: [
                        { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Grab'] }
                    ],
                    speed: {
                        land: 0,
                        fly: {
                            base: 60,
                            maneuverability: 'average'
                        }
                    },
                    senses: [
                        7
                    ]
                },
                8: {
                    feats: [
                        { name: 'Flyby Attack', uuid: 'Compendium.pf-content.pf-feats.Item.zVUcdFSgoVENjmUa' }
                    ],
                    speed: {
                        land: 0,
                        fly: {
                            base: 60,
                            maneuverability: 'good'
                        }
                    }
                },
                15: {
                    speed: {
                        land: 0,
                        fly: {
                            base: 80,
                            maneuverability: 'perfect'
                        }
                    },
                    contextNotes: [
                        { text: 'If charge while flying, +[[4]] to grapple for 1 round', subTarget: 'cmb' }
                    ]
                }
            },
            alternates: [
                'Bite', 'Wing'
            ]
        },
        'Electric Eel': {
            source: 'beastShape',
            minor: {
                1: {
                    contextNotes: [
                        { text: '[[/d 1[electric]]]{1 electric} damage on all attacks', subTarget: 'attack' }
                    ]
                },
                8: {
                    contextNotes: [
                        { text: '[[/d 1d3[electric]]]{1d3 electric} damage on all attacks', subTarget: 'attack' }
                    ]
                },
                15: {
                    contextNotes: [
                        { text: '[[/d 1d6[electric]]]{1d6 electric} damage on all attacks', subTarget: 'attack' }
                    ]
                }
            },
            major: {
                1: {
                    size: 'sm',
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
                        { name: 'Tail', diceCount: 1, diceSize: 6, count: 1, type: ['electric'], special: ['Touch'] }
                    ],
                    speed: {
                        land: 0,
                        swim: 30
                    },
                    senses: [
                        1
                    ],
                    eres: [
                        { amount: 5, operator: true, types: ['electric', ''] }
                    ]
                },
                8: {
                    eres: [
                        { amount: 10, operator: true, types: ['electric', ''] }
                    ],
                    changes: [
                        { formula: '4', operator: 'add', subTarget: 'skill.esc', modifier: 'racial', priority: 0, value: 1 }
                    ]
                },
                15: {
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
                        { name: 'Tail', diceCount: 1, diceSize: 6, count: 1, type: ['electric'], special: ['Touch', 'Stun'] }
                    ],
                    effect: {
                        'Stun': { note: 'On crit, fort save or stunned [[/r 1d4]] rounds', type: 'fort', saveDesc: 'Fort resists', dc: '10 + floor(@classes.shifter.level / 2) + @abilities.con.mod', description: 'on a critical hit with your tail attack, the creature struck must succeed at a Fortitude save (DC = 10 + half your shifter level + your Constitution modifier) or be stunned for [[/r 1d4]] rounds.' }
                    }
                }
            },
            alternates: [
                'Bite', 'TailSlap'
            ]
        },
        'Elephant': {
            source: 'beastShape',
            minor: {
                1: {
                    contextNotes: [
                        { text: '+[[4]] enhancement to bull rush and overrun', subTarget: 'cmb' }
                    ]
                },
                8: {
                    contextNotes: [
                        { text: '+[[6]] enhancement to bull rush and overrun', subTarget: 'cmb' }
                    ]
                },
                15: {
                    contextNotes: [
                        { text: '+[[8]] enhancement to bull rush and overrun', subTarget: 'cmb' }
                    ]
                }
            },
            major: {
                1: {
                    size: 'lg',
                    attacks: [
                        { name: 'Gore', diceCount: 1, diceSize: 6, count: 1 },
                        { name: 'Slam', diceCount: 1, diceSize: 8, count: 1 }
                    ],
                    speed: {
                        land: 40
                    },
                    senses: [
                        1, 14
                    ],
                    changes: [
                        { formula: '2', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'racial', priority: 0, value: 2 },
                        { formula: '2', operator: 'add', subTarget: 'nac', modifier: 'racial', priority: 0, value: 2 }
                    ]
                },
                8: {
                    specialAttack: [
                        { name: 'Trample', diceCount: 2, diceSize: 8, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman', claw: true }
                    ],
                    effect: {
                        'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
                    }
                },
                15: {
                    feats: [
                        { name: 'Improved Bull Rush', uuid: 'Compendium.pf1.feats.Item.dn2KgHFQRbuoNRx0' }
                    ],
                    changes: [
                        { formula: '4', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'racial', priority: 0, value: 4 },
                        { formula: '4', operator: 'add', subTarget: 'nac', modifier: 'racial', priority: 0, value: 4 }
                    ]
                }
            },
            alternates: [
                'Gore', 'Slam'
            ]
        },
        'Falcon': {
            source: 'beastShape',
            minor: {
                1: {
                    changes: [
                        { formula: '4', operator: 'add', subTarget: 'skill.per', modifier: 'competence', priority: 0, value: 4 }
                    ]
                },
                8: {
                    changes: [
                        { formula: '6', operator: 'add', subTarget: 'skill.per', modifier: 'competence', priority: 0, value: 6 }
                    ]
                },
                15: {
                    changes: [
                        { formula: '8', operator: 'add', subTarget: 'skill.per', modifier: 'competence', priority: 0, value: 8 }
                    ]
                }
            },
            major: {
                1: {
                    size: 'sm',
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 4, count: 1, claw: false },
                        { name: 'Claw', diceCount: 1, diceSize: 3, count: 2 }
                    ],
                    speed: {
                        land: 30,
                        fly: {
                            base: 60,
                            maneuverability: 'good'
                        }
                    },
                    senses: [
                        1
                    ],
                    contextNotes: [
                        { text: '+[[4]] racial to vision-based perception', subTarget: 'skill.per' }
                    ]
                },
                8: {
                    senses: [
                        1, 11
                    ],
                    contextNotes: [
                        { text: '+[[6]] racial to vision-based perception', subTarget: 'skill.per' }
                    ]
                },
                15: {
                    senses: [
                        1, 11, 24
                    ],
                    speed: {
                        land: 30,
                        fly: {
                            base: 90,
                            maneuverability: 'perfect'
                        }
                    }
                }
            },
            alternates: [
                'Gore', 'Talons'
            ]
        },
        'Frog': {
            source: 'beastShape',
            minor: {
                1: {
                    changes: [
                        { formula: '4', operator: 'add', subTarget: 'skill.swm', modifier: 'competence', priority: 0, value: 4 }
                    ],
                    contextNotes: [
                        { text: '+[[4]] competence to jump', subTarget: 'skill.acr' }
                    ]
                },
                8: {
                    changes: [
                        { formula: '6', operator: 'add', subTarget: 'skill.swm', modifier: 'competence', priority: 0, value: 6 }
                    ],
                    contextNotes: [
                        { text: '+[[6]] competence to jump', subTarget: 'skill.acr' }
                    ]
                },
                15: {
                    changes: [
                        { formula: '8', operator: 'add', subTarget: 'skill.swm', modifier: 'competence', priority: 0, value: 8 }
                    ],
                    contextNotes: [
                        { text: '+[[8]] competence to jump', subTarget: 'skill.acr' }
                    ]
                }
            },
            major: {
                1: {
                    size: 'lg',
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Grab'] }
                    ],
                    speed: {
                        land: 30,
                        swim: 30
                    },
                    senses: [
                        1, 14
                    ],
                    contextNotes: [
                        { text: 'Treat jumps as running start', subTarget: 'skill.acr' }
                    ]
                },
                8: {
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Grab'] },
                        { name: 'Tongue', diceCount: 0, diceSize: 0, count: 1, special: ['Grab'], range: 15, attackType: 'rwak', claw: false }
                    ]
                },
                15: {
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Grab'] },
                        { name: 'Tongue', diceCount: 0, diceSize: 0, count: 1, special: ['Grab'], range: 30, attackType: 'rwak', claw: true }
                    ]
                }
            },
            alternates: [
                'Bite'
            ]
        },
        'Giant Wasp': {
            source: 'verminShape',
            minor: {
                1: {
                    contextNotes: [
                        { text: '+[[4]] to will v mind-affecting', subTarget: 'will' }
                    ]
                },
                8: {
                    contextNotes: [
                        { text: '+[[6]] to will v mind-affecting', subTarget: 'will' }
                    ]
                },
                15: {
                    contextNotes: [
                        { text: '+[[8]] to will v mind-affecting', subTarget: 'will' }
                    ]
                }
            },
            major: {
                1: {
                    size: 'lg',
                    speed: {
                        fly: {
                            base: 40,
                            maneuverability: 'clumsy'
                        }
                    }
                },
                8: {
                    attacks: [
                        { name: 'Sting', diceCount: 0, diceSize: 0, count: 1, special: ['Poison'], charges: '3 + @abilities.wis.mod' }
                    ],
                    speed: {
                        fly: {
                            base: 60,
                            maneuverability: 'average'
                        }
                    },
                    effect: {
                        'Poison': { note: 'Poison (Ex) - Sting—injury; save Fort DC [[10 + floor(@classes.shifter.level / 2) + @abilities.con.mod]]; frequency 1/round for 4 rounds; effect [[/r 1d3]] Dex; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures', dc: '10 + floor(@classes.shifter.level / 2) + @abilities.con.mod' }
                    }
                },
                15: {
                    speed: {
                        fly: {
                            base: 80,
                            maneuverability: 'good'
                        }
                    },
                    specialAttack: [
                        { name: 'ControlSwarm', diceCount: 0, diceSize: 0, count: 1, special: ['Control'], attackType: 'none', claw: false }
                    ],
                    effect: {
                        'Poison': { note: 'Poison (Ex) - Sting—injury; save Fort DC [[10 + floor(@classes.shifter.level / 2) + @abilities.con.mod]]; frequency 1/round for 4 rounds; effect [[/r 1d3]] Dex; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures', dc: '10 + floor(@classes.shifter.level / 2) + @abilities.con.mod' },
                        'Control': { note: 'Charisma check vs 10 + swarm CR', description: 'You can attempt to gain control of a mindless swarm as a full-round action. To gain control of the swarm, you must succeed at a Charisma check against a DC of 10 + the swarm’s CR. You can direct the swarm to disperse, remain in a designated location, or attack an opponent. This control lasts for a number of rounds equal to half your shifter level ([[floor(@classes.shifter.level / 2)]]).' }
                    }
                }
            },
            alternates: [
                'Sting'
            ]
        },
        'Horse': {
            source: 'beastShape',
            minor: {
                1: {
                    feats: [
                        { name: 'Endurance', uuid: 'Compendium.pf1.feats.Item.ehqx8txNRGMaNOPt' }
                    ],
                    changes: [
                        { formula: '5', operator: 'add', subTarget: 'landSpeed', modifier: 'enh', priority: 0, value: 5 }
                    ]
                },
                8: {
                    feats: [
                        { name: 'Endurance', uuid: 'Compendium.pf1.feats.Item.ehqx8txNRGMaNOPt' },
                        { name: 'Run', uuid: 'Compendium.pf1.feats.Item.bXeW4kLCErPBFpNB' }
                    ]
                },
                15: {
                    changes: [
                        { formula: '15', operator: 'add', subTarget: 'landSpeed', modifier: 'enh', priority: 0, value: 15 }
                    ]
                }
            },
            major: {
                1: {
                    size: 'lg',
                    attacks: [
                        { name: 'Hoof', diceCount: 1, diceSize: 4, count: 2 }
                    ],
                    speed: {
                        land: 50
                    },
                    senses: [
                        1, 14
                    ],
                    feats: [
                        { name: 'Ride-By Attack', uuid: 'Compendium.pf1.feats.Item.liPAO5urMI9chctT' }
                    ]
                },
                8: {
                    specialAttack: [
                        { name: 'Trample', diceCount: 1, diceSize: 4, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman', claw: true }
                    ],
                    effect: {
                        'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
                    }
                },
                15: {
                    feats: [
                        { name: 'Improved Overrun', uuid: 'Compendium.pf1.feats.Item.go4xOiSUP8R1QJ5N' }
                    ]
                }
            },
            alternates: [
                'Hoof'
            ]
        },
        'Lion': {
            source: 'beastShape',
            minor: {
                1: {
                    changes: [
                        { formula: '4', operator: 'add', subTarget: 'skill.int', modifier: 'competence', priority: 0, value: 4 }
                    ]
                },
                8: {
                    changes: [
                        { formula: '6', operator: 'add', subTarget: 'skill.int', modifier: 'competence', priority: 0, value: 4 }
                    ]
                },
                15: {
                    changes: [
                        { formula: '8', operator: 'add', subTarget: 'skill.int', modifier: 'competence', priority: 0, value: 4 }
                    ]
                }
            },
            major: {
                1: {
                    size: 'lg',
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['Grab'], claw: false },
                        { name: 'Claw', diceCount: 1, diceSize: 6, count: 2 }
                    ],
                    speed: {
                        land: 40
                    },
                    senses: [
                        1, 14
                    ],
                    specialAttack: [
                        { name: 'MightyRoar', diceCount: 0, diceSize: 0, count: 1, special: ['Mighty Roar'], attackType: 'none', claw: false }
                    ],
                    effect: {
                        'Mighty Roar': { note: 'Demoralize - Intimidate with +[[5]] circumstance', description: 'You can utter a mighty roar, allowing you to attempt an Intimidate check with a +5 circumstance bonus to demoralize enemies within 30 feet. Allies gain a +[[1]] morale bonus on attack and damage rolls against creatures affected by this ability.' }
                    }
                },
                8: {
                    feats: [
                        { name: 'Outflank', uuid: 'Compendium.pf1.feats.Item.ln2Dhw97Fol1BCxU' },
                        { name: 'Pack Attack', uuid: 'Compendium.pf-content.pf-feats.Item.BVsLYVsIUSpl6Y0c' },
                        { name: 'Paired Opportunists', uuid: 'Compendium.pf-content.pf-feats.Item.wmuQjv1Jt9VennFK' },
                        { name: 'Shake It Off', uuid: 'Compendium.pf-content.pf-feats.Item.bkaK2LbauklqB8B1' }
                    ]
                },
                15: {
                    specialAttack: [
                        { name: 'MightyRoar', diceCount: 0, diceSize: 0, count: 1, special: ['Mighty Roar'], attackType: 'none', claw: false },
                        { name: 'SwapPlaces', diceCount: 0, diceSize: 0, count: 1, special: ['Mighty Roar'], attackType: 'none', claw: false }
                    ],
                    effect: {
                        'Mighty Roar': { note: 'Demoralize - Intimidate with +[[5]] circumstance', description: 'You can utter a mighty roar, allowing you to attempt an Intimidate check with a +5 circumstance bonus to demoralize enemies within 30 feet. Allies gain a +[[1]] morale bonus on attack and damage rolls against creatures affected by this ability.' },
                        'Swap Places': { note: 'Swap places with adjacent ally', description: ' Whenever you are adjacent to an ally who also has this feat, you can move into your ally’s square as part of normal movement. At the same time, your ally moves into your previous space as an immediate action. Both you and your ally must be willing and able to move to take advantage of this feat. Your ally must be the same size as you to utilize this feat. Your ally does not provoke an attack of opportunity from this movement, but you provoke as normal. This movement does not count against your ally\'s movement on his next turn.' }
                    }
                }
            },
            alternates: [
                'Bite'
            ]
        },
        'Lizard': {
            source: 'beastShape',
            minor: {
                1: {
                    changes: [
                        { formula: '4', operator: 'add', subTarget: 'skill.acr', modifier: 'competence', priority: 0, value: 4 }
                    ]
                },
                8: {
                    changes: [
                        { formula: '6', operator: 'add', subTarget: 'skill.acr', modifier: 'competence', priority: 0, value: 4 }
                    ]
                },
                15: {
                    changes: [
                        { formula: '8', operator: 'add', subTarget: 'skill.acr', modifier: 'competence', priority: 0, value: 4 }
                    ]
                }
            },
            major: {
                1: {
                    size: 'lg',
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['Grab'] },
                        { name: 'Tail', diceCount: 1, diceSize: 6, count: 1, special: ['Trip'] }
                    ],
                    speed: {
                        land: 40
                    },
                    senses: [
                        1, 14
                    ]
                },
                8: {
                    speed: {
                        land: 60,
                        climb: 30
                    }
                },
                15: {
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['Grab'], improved: true },
                        { name: 'Tail', diceCount: 1, diceSize: 6, count: 1, special: ['Trip'], improved: true }
                    ],
                    feats: [
                        { name: 'Improved Natural Attack', uuid: 'Compendium.pf-content.pf-feats.Item.xz6IYXK8qfnNhior' }
                    ]
                }
            },
            alternates: [
                'Gore', 'Hoof'
            ]
        },
        'Mantis': {
            source: 'beastShape',
            minor: {
                1: {
                    feats: [
                        { name: 'Lunge', uuid: 'Compendium.pf1.feats.Item.xq2TFr7bsYBBHOi5' }
                    ]
                },
                8: {

                },
                15: {

                }
            },
            major: {
                1: {
                    size: 'lg',
                    attacks: [
                        { name: 'Claw', diceCount: 1, diceSize: 6, count: 2, special: ['Grab'], claw: true }
                    ],
                    senses: [
                        7
                    ],
                    changes: [
                        { formula: '2', operator: 'add', subTarget: 'init', modifier: 'racial', priority: 0, value: 2 }
                    ]
                },
                8: {

                },
                15: {
                    
                }
            },
            alternates: [
                'Bite'
            ]
        },
        'Monkey': {
            source: 'beastShape',
            minor: {
                1: {
                    changes: [
                        { formula: '4', operator: 'add', subTarget: 'skill.clm', modifier: 'competence', priority: 0, value: 4 }
                    ]
                },
                8: {
                    changes: [
                        { formula: '6', operator: 'add', subTarget: 'skill.clm', modifier: 'competence', priority: 0, value: 6 }
                    ]
                },
                15: {
                    changes: [
                        { formula: '8', operator: 'add', subTarget: 'skill.clm', modifier: 'competence', priority: 0, value: 8 }
                    ]
                }
            },
            major: {
                1: {
                    size: 'lg',
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, claw: false },
                        { name: 'Claw', diceCount: 1, diceSize: 6, count: 2 }
                    ],
                    speed: {
                        land: 30,
                        climb: 30
                    },
                    senses: [
                        1, 14
                    ]
                },
                8: {
                    speed: {
                        land: 30,
                        climb: 50
                    }
                },
                15: {
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, claw: false },
                        { name: 'Claw', diceCount: 1, diceSize: 6, count: 2, special: ['Rend'] }
                    ],
                    effect: {
                        'Rend': { note: 'Rend if both claws hit, added to second claw damage. [[/d sizeRoll(1, 6, @size, 5) # Rend damage added to second claw]]{{Roll Rend Damage}}' }
                    }
                }
            },
            alternates: [
                'Bite'
            ]
        },
        'Mouse': {
            source: 'beastShape',
            minor: {
                1: {
                    feats: [
                        { name: 'Evasion', uuid: 'Compendium.pf1.class-abilities.Item.KQYCRLEdD4bGA5ak' }
                    ]
                },
                12: {
                    feats: [
                        { name: 'Improved Evasion', uuid: 'Compendium.pf1.class-abilities.Item.0Qmt3BZBOsyCtrr9' }
                    ]
                }
            },
            major: {
                1: {
                    size: 'tiny',
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 }
                    ],
                    speed: {
                        land: 40,
                        climb: 20,
                        swim: 20
                    },
                    senses: [
                        1, 14
                    ]
                },
                8: {
                    speed: {
                        land: 40,
                        climb: 40,
                        swim: 40
                    }
                },
                15: {
                    
                }
            },
            alternates: [
                'Bite'
            ]
        },
        'Octopus': {
            source: 'beastShape',
            minor: {
                1: {
                    changes: [
                        { formula: '4', operator: 'add', subTarget: 'skill.esc', modifier: 'competence', priority: 0, value: 4 }
                    ]
                },
                8: {
                    changes: [
                        { formula: '6', operator: 'add', subTarget: 'skill.esc', modifier: 'competence', priority: 0, value: 6 }
                    ]
                },
                15: {
                    changes: [
                        { formula: '8', operator: 'add', subTarget: 'skill.esc', modifier: 'competence', priority: 0, value: 8 }
                    ]
                }
            },
            major: {
                1: {
                    size: 'sm',
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 },
                        { name: 'Tentacle', diceCount: 0, diceSize: 0, count: 1, special: ['Grab'], claw: false }
                    ],
                    speed: {
                        swim: 30
                    },
                    senses: [
                        1
                    ],
                    feats: [
                        { name: 'Multiattack', uuid: 'Compendium.pf-content.pf-feats.Item.RmhtvELGu73iR8yh' }
                    ]
                },
                8: {
                    special: [
                        'Jet200'
                    ]
                },
                15: {
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 },
                        { name: 'Tentacle', diceCount: 0, diceSize: 0, count: 1, special: ['Grab'], claw: true }
                    ],
                    specialAttack: [
                        { name: 'InkCloud', diceCount: 0, diceSize: 0, count: 1, special: ['Ink'], attackType: 'none', claw: false }
                    ],
                    effect: {
                        'Ink': { note: '10-ft cloud of ink', description: 'While within water, you can emit a 10-foot-radius sphere of ink once per minute as a swift action. This ink provides total concealment and persists for 1 minute.' }
                    }
                }
            },
            alternates: [
                'Bite', 'Tentacle'
            ]
        },
        'Owl': {
            source: 'beastShape',
            minor: {
                1: {
                    changes: [
                        { formula: '4', operator: 'add', subTarget: 'skill.ste', modifier: 'competence', priority: 0, value: 4 }
                    ]
                },
                8: {
                    changes: [
                        { formula: '6', operator: 'add', subTarget: 'skill.ste', modifier: 'competence', priority: 0, value: 6 }
                    ]
                },
                15: {
                    changes: [
                        { formula: '8', operator: 'add', subTarget: 'skill.ste', modifier: 'competence', priority: 0, value: 8 }
                    ]
                }
            },
            major: {
                1: {
                    size: 'med',
                    attacks: [
                        { name: 'Talon', diceCount: 1, diceSize: 6, count: 2 }
                    ],
                    speed: {
                        land: 30,
                        fly: {
                            base: 60,
                            maneuverability: 'average'
                        }
                    },
                    senses: [
                        7
                    ],
                    changes: [
                        { formula: '2', operator: 'add', subTarget: 'skill.ste', modifier: 'racial', priority: 0, value: 2 }
                    ]
                },
                8: {
                    feats: [
                        { name: 'Flyby Attack', uuid: 'Compendium.pf-content.pf-feats.Item.zVUcdFSgoVENjmUa' }
                    ],
                    senses: [
                        11
                    ]
                },
                15: {
                    size: 'lg',
                    feats: [
                        { name: 'Snatch', uuid: 'Compendium.pf-content.pf-feats.Item.PBqk2ZYEdehWcprC' }
                    ],
                    specialAttack: [
                        { name: 'Snatch', diceCount: 0, diceSize: 0, count: 1, special: ['Snatch'], attackType: 'none', claw: false }
                    ],
                    effect: {
                        'Snatch': { note: 'Grab on talons at least one size smaller', description: 'Gain the benefits of the Snatch feat (Bestiary 316), but you can use it only to grab a creature at least one size category smaller than yourself, and you can squeeze a creature grappled with this ability no matter what size it is.' }
                    }
                }
            },
            alternates: [
                'Bite', 'Talons'
            ]
        },
        'Peafowl': {
            source: 'beastShape',
            minor: {
                1: {
                    changes: [
                        { formula: '2', operator: 'add', target: 'ability', subTarget: 'cha', modifier: 'enh', priority: 0, value: 2 },
                    ]
                },
                8: {
                    changes: [
                        { formula: '4', operator: 'add', target: 'ability', subTarget: 'cha', modifier: 'enh', priority: 0, value: 4 },
                    ]
                },
                15: {
                    changes: [
                        { formula: '6', operator: 'add', target: 'ability', subTarget: 'cha', modifier: 'enh', priority: 0, value: 6 },
                    ]
                }
            },
            major: {
                1: {
                    size: 'sm',
                    attacks: [
                        { name: 'Talons', diceCount: 1, diceSize: 3, count: 2 }
                    ],
                    specialAttack: [
                        { name: 'CaptivatingDance', diceCount: 0, diceSize: 0, count: 1, special: ['Captivating'], attackType: 'save', claw: false }
                    ],
                    effect: {
                        'Captivating': { note: 'Will save or stunned 1 round', dc: '10 + floor(@classes.shifter.level / 2) + @abilities.cha.mod', saveDesc: 'Will resists', type: 'will', description: 'A peafowl can perform a captivating dance targeting all creatures within a 15-foot cone. Each creature in the cone that can see your dance must succeed at a Will save (DC [[10 + floor(@classes.shifter.level / 2) + @abilities.cha.mod]]) or be stunned for 1 round. Whether or not it succeeds at the initial save, a creature cannot be affected by this ability again for 24 hours.', templateShape: 'cone', templateSize: '15' }
                    },
                    speed: {
                        land: 20,
                        fly: {
                            base: 40,
                            maneuverability: 'clumsy'
                        }
                    },
                    changes: [
                        { formula: '4', operator: 'add', subTarget: 'skill.ste', modifier: 'racial', priority: 0, value: 4 }
                    ]
                },
                8: {
                    effect: {
                        'Captivating': { note: 'Will save or stunned 2 rounds', dc: '10 + floor(@classes.shifter.level / 2) + @abilities.cha.mod', saveDesc: 'Will resists', type: 'will', description: 'A peafowl can perform a captivating dance targeting all creatures within a 15-foot cone. Each creature in the cone that can see your dance must succeed at a Will save (DC [[10 + floor(@classes.shifter.level / 2) + @abilities.cha.mod]]) or be stunned for 2 rounds. Whether or not it succeeds at the initial save, a creature cannot be affected by this ability again for 24 hours.', templateShape: 'cone', templateSize: '15' }
                    }
                },
                15: {
                    effect: {
                        'Captivating': { note: 'Will save or stunned 4 rounds', dc: '10 + floor(@classes.shifter.level / 2) + @abilities.cha.mod', saveDesc: 'Will resists', type: 'will', description: 'A peafowl can perform a captivating dance targeting all creatures within a 15-foot cone. Each creature in the cone that can see your dance must succeed at a Will save (DC [[10 + floor(@classes.shifter.level / 2) + @abilities.cha.mod]]) or be stunned for 4 rounds. Whether or not it succeeds at the initial save, a creature cannot be affected by this ability again for 24 hours.', templateShape: 'cone', templateSize: '15' }
                    }
                }
            },
            alternates: [
                'Bite', 'TailSlap'
            ]
        },
        'Scorpion': {
            source: 'verminShape',
            minor: {
                1: {
                    changes: [
                        { formula: '2', operator: 'add', subTarget: 'skill.ste', modifier: 'competence', priority: 0, value: 2 }
                    ],
                    contextNotes: [
                        { text: '+[[2]] to grapple', subTarget: 'cmb' }
                    ]
                },
                8: {
                    changes: [
                        { formula: '4', operator: 'add', subTarget: 'skill.ste', modifier: 'competence', priority: 0, value: 4 }
                    ],
                    contextNotes: [
                        { text: '+[[4]] to grapple', subTarget: 'cmb' }
                    ]
                },
                15: {
                    changes: [
                        { formula: '6', operator: 'add', subTarget: 'skill.ste', modifier: 'competence', priority: 0, value: 6 }
                    ],
                    contextNotes: [
                        { text: '+[[6]] to grapple', subTarget: 'cmb' }
                    ]
                }
            },
            major: {
                1: {
                    size: 'lg',
                    attacks: [
                        { name: 'Claw', diceCount: 1, diceSize: 6, count: 2, special: ['Grab'] },
                        { name: 'Sting', diceCount: 1, diceSize: 6, count: 1 }
                    ],
                    speed: {
                        land: 50
                    },
                    senses: [
            7, 26
        ]
                },
                8: {
                    senses: [
            7, 28
        ],
                    changes: [
                        { formula: '4', operator: 'add', subTarget: 'skill.clm', modifier: 'racial', priority: 0, value: 4 },
                        { formula: '4', operator: 'add', subTarget: 'skill.per', modifier: 'racial', priority: 0, value: 4 }
                    ]
                },
                15: {
                    attacks: [
                        { name: 'Claw', diceCount: 1, diceSize: 6, count: 2, special: ['Grab'] },
                        { name: 'Sting', diceCount: 1, diceSize: 6, count: 1, special: ['Poison'] }
                    ],
                    effect: {
                        'Poison': { note: 'Poison (Ex) - Sting—injury; save Fort DC [[10 + floor(@classes.shifter.level / 2) + @abilities.con.mod]]; frequency 1/round for 6 rounds; effect [[/r 1d3]] Str; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures', dc: '10 + floor(@classes.shifter.level / 2) + @abilities.con.mod', description: 'When you make an attack of opportunity with your sting attack or maintain a grapple and deal damage with your sting attack, that attack also applies the following poison.' }
                    }
                }
            },
            alternates: [
                'Pincers', 'Sting'
            ]
        },
        'Snake': {
            source: 'beastShape',
            minor: {
                1: {
                    contextNotes: [
                        { text: '+[[2]] to attacks of opportunity', subTarget: 'attack' },
                        { text: '+[[2]] vs attacks of opportunity', subTarget: 'ac' }
                    ]
                },
                8: {
                    contextNotes: [
                        { text: '+[[4]] to attacks of opportunity', subTarget: 'attack' },
                        { text: '+[[4]] vs attacks of opportunity', subTarget: 'ac' }
                    ]
                },
                15: {
                    contextNotes: [
                        { text: '+[[6]] to attacks of opportunity', subTarget: 'attack' },
                        { text: '+[[6]] vs attacks of opportunity', subTarget: 'ac' }
                    ]
                }
            },
            major: {
                1: {
                    size: 'lg',
                    attacks: [
                        { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 }
                    ],
                    speed: {
                        land: 30,
                        climb: 30,
                        swim: 30
                    },
                    senses: [
                        1, 14
                    ],
                    feats: [
                        { name: 'Combat Reflexes', uuid: 'Compendium.pf1.feats.Item.h9nHYLxXvIXBTmup' }
                    ]
                },
                8: {
                    changes: [
                        { formula: '4', operator: 'add', subTarget: 'skill.acr', modifier: 'racial', priority: 0, value: 4 },
                        { formula: '4', operator: 'add', subTarget: 'skill.ste', modifier: 'racial', priority: 0, value: 4 }
                    ]
                },
                15: {
                    attacks: [
                        { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Poison'] }
                    ],
                    effect: {
                        'Poison': { note: 'Poison (Ex) Bite—injury; save Fort DC [[10 + floor(@classes.shifter.level / 2) + @abilities.con.mod]]; frequency 1/round for 6 rounds; effect [[/r 1d3]] Con; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures', dc: '10 + floor(@classes.shifter.level / 2) + @abilities.con.mod', description: 'When you make an attack of opportunity with your bite attack, that attack also applies the following poison.' }
                    }
                }
            },
            alternates: [
                'Bite', 'TailSlap'
            ]
        },
        'Snapping Turtle': {
            source: 'beastShape',
            minor: {
                1: {
                    changes: [
                        { formula: '2', operator: 'add', target: 'ability', subTarget: 'wis', modifier: 'enh', priority: 0, value: 2 },
                    ]
                },
                8: {
                    changes: [
                        { formula: '4', operator: 'add', target: 'ability', subTarget: 'wis', modifier: 'enh', priority: 0, value: 4 },
                    ]
                },
                15: {
                    changes: [
                        { formula: '6', operator: 'add', target: 'ability', subTarget: 'wis', modifier: 'enh', priority: 0, value: 6 },
                    ]
                }
            },
            major: {
                1: {
                    size: 'lg',
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, mult: 1.5 }
                    ],
                    speed: {
                        land: 10,
                        swim: 20
                    },
                    senses: [
                        1, 14
                    ]
                },
                8: {
                    contextNotes: [
                        { text: '+[[@abilities.wis.mod]] vs bull rush, drag, overrun, reposition, and trip', subTarget: 'cmd' }
                    ]
                },
                15: {
                    dr: [
                        { amount: 5, operator: true, types: ['silver', ''] }
                    ]
                }
            },
            alternates: [
                'Bite'
            ]
        },
        'Spider': {
            source: 'verminShape',
            minor: {
                1: {
                    changes: [
                        { formula: '2', operator: 'add', subTarget: 'skill.clm', modifier: 'competence', priority: 0, value: 2 },
                        { formula: '2', operator: 'add', subTarget: 'skill.ste', modifier: 'competence', priority: 0, value: 2 }
                    ],
                    contextNotes: [
                        { text: '+[[2]] competence to saves v webs', subTarget: 'allSavingThrows' },
                        { text: '+[[2]] competence to break free from webs', subTarget: 'cmb' }
                    ]
                },
                8: {
                    changes: [
                        { formula: '4', operator: 'add', subTarget: 'skill.clm', modifier: 'competence', priority: 0, value: 4 },
                        { formula: '4', operator: 'add', subTarget: 'skill.ste', modifier: 'competence', priority: 0, value: 4 }
                    ],
                    contextNotes: [
                        { text: '+[[4]] competence to saves v webs', subTarget: 'allSavingThrows' },
                        { text: '+[[4]] competence to break free from webs', subTarget: 'cmb' }
                    ]
                },
                15: {
                    changes: [
                        { formula: '6', operator: 'add', subTarget: 'skill.clm', modifier: 'competence', priority: 0, value: 6 },
                        { formula: '6', operator: 'add', subTarget: 'skill.ste', modifier: 'competence', priority: 0, value: 6 }
                    ],
                    contextNotes: [
                        { text: '+[[6]] competence to saves v webs', subTarget: 'allSavingThrows' },
                        { text: '+[[6]] competence to break free from webs', subTarget: 'cmb' }
                    ]
                }
            },
            major: {
                1: {
                    size: 'med',
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Poison'] }
                    ],
                    specialAttack: [
                        { name: 'Web', diceCount: 0, diceSize: 0, count: 1, special: ['Touch', 'Web'], attackType: 'rwak', range: 10, increment: 5, charges: 8, claw: false }
                    ],
                    speed: {
                        land: 30,
                        climb: 30
                    },
                    senses: [
                        7, 26
                    ],
                    effect: {
                        'Poison': { note: 'Poison (Ex) - Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 4 rounds; effect 1d2 Str; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' },
                        'Web': { note: 'Web: Touch attack to entangle up to one size category higher, escaped with escape artist or burst with strength. DC 10+SL+Mod.', description: '<p>Creatures with the web ability can use webs to support themselves and up to one additional creature of the same size. In addition, such creatures can throw a web up to eight times per day. This is similar to an attack with a net but has a maximum range of 50 feet, with a range increment of 10 feet, and is effective against targets up to one size category larger than the web spinner. An entangled creature can escape with a successful Escape Artist check or burst the web with a Strength check. Both are standard actions with a DC equal to 10 + Spell Level + Caster Stat Mod. Attempts to burst a web by those caught in it take a -4 penalty.</p><p>Web spinners can create sheets of sticky webbing up to three times their size. They usually position these sheets to snare flying creatures but can also try to trap prey on the ground. Approaching creatures must succeed on a DC 20 Perception check to notice a web; otherwise they stumble into it and become trapped as though by a successful web attack. Attempts to escape or burst the webbing gain a +5 bonus if the trapped creature has something to walk on or grab while pulling free. Each 5-foot-square section of web has a number of hit points equal to the Hit Dice of the creature that created it ([[@attributes.hd.total]])and DR 5/—.</p><p>A creature can move across its own web at its climb speed and can pinpoint the location of any creature touching its web.</p>' }
                    }
                },
                8: {
                    changes: [
                        { formula: '4', operator: 'add', subTarget: 'skill.per', modifier: 'racial', priority: 0, value: 4 }
                    ],
                    senses: [
                        7, 28
                    ]
                },
                15: {
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Poison'], improved: true }
                    ],
                    senses: [
                        7, 29
                    ]
                },
                alternates: [
                    'Bite'
                ]
            },
            alternates: [
                'Bite'
            ]
        },
        'Stag': {
            source: 'beastShape',
            minor: {
                1: {
                    changes: [
                        { formula: '5', operator: 'add', subTarget: 'landSpeed', modifier: 'enh', priority: 0, value: 5 }
                    ]
                },
                8: {
                    changes: [
                        { formula: '10', operator: 'add', subTarget: 'landSpeed', modifier: 'enh', priority: 0, value: 10 }
                    ]
                },
                15: {
                    changes: [
                        { formula: '15', operator: 'add', subTarget: 'landSpeed', modifier: 'enh', priority: 0, value: 15 }
                    ]
                }
            },
            major: {
                1: {
                    size: 'lg',
                    attacks: [
                        { name: 'Gore', diceCount: 1, diceSize: 6, count: 1 },
                        { name: 'Hoof', diceCount: 1, diceSize: 4, count: 2 }
                    ],
                    speed: {
                        land: 50
                    },
                    senses: [
                        1, 14
                    ]
                },
                8: {
                    contextNotes: [
                        { text: '+[[4]] racial to jump', subTarget: 'skill.acr' }
                    ]
                },
                15: {
                    attacks: [
                        { name: 'Gore', diceCount: 1, diceSize: 6, count: 1, improved: true },
                        { name: 'Hoof', diceCount: 1, diceSize: 4, count: 2 }
                    ],
                    feats: [
                        { name: 'Improved Natural Attack', uuid: 'Compendium.pf-content.pf-feats.Item.xz6IYXK8qfnNhior' },
                        { name: 'Awesome Blow', uuid: 'Compendium.pf-content.pf-feats.Item.KPaC3H6EQGG4sXLT' }
                    ]
                }
            },
            alternates: [
                'Gore', 'Hoof'
            ]
        },
        'Tiger': {
            source: 'beastShape',
            minor: {
                1: {
                    changes: [
                        { formula: '2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 2 }
                    ]
                },
                8: {
                    changes: [
                        { formula: '4', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 4 }
                    ]
                },
                15: {
                    changes: [
                        { formula: '6', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 6 }
                    ]
                }
            },
            major: {
                1: {
                    size: 'lg',
                    attacks: [
                        { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Grab'], claw: false },
                        { name: 'Claw', diceCount: 2, diceSize: 4, count: 2, special: ['Grab'] }
                    ],
                    speed: {
                        land: 40
                    },
                    senses: [
                        1, 14
                    ],
                    special: [
                        'Pounce'
                    ]
                },
                8: {
                    changes: [
                        { formula: '4', operator: 'add', subTarget: 'skill.ste', modifier: 'racial', priority: 0, value: 4 }
                    ]
                },
                15: {
                    special: [
                        'Pounce', 'Rake2Claws'
                    ]
                }
            },
            alternates: [
                'Bite'
            ]
        },
        'Wolf': {
            source: 'beastShape',
            minor: {
                1: {
                    senses: [
                        12
                    ],
                    senseUpgrade: {
                        'sc': 10
                    }
                },
                8: {
                    senses: [
                        13
                    ],
                    senseUpgrade: {
                        'sc': 20
                    }
                },
                15: {
                    senses: [
                        14
                    ],
                    senseUpgrade: {
                        'sc': 30
                    }
                }
            },
            major: {
                1: {
                    size: 'lg',
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['Trip'] }
                    ],
                    speed: {
                        land: 50
                    },
                    senses: [
                        1, 14
                    ]
                },
                8: {
                    contextNotes: [
                        { text: '+[[4]] racial to track with scent', subTarget: 'skill.sur' }
                    ]
                },
                15: {
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['Trip'], improved: true }
                    ],
                    feats: [
                        { name: 'Improved Natural Attack', uuid: 'Compendium.pf-content.pf-feats.Item.xz6IYXK8qfnNhior' }
                    ]
                }
            },
            alternates: [
                'Bite'
            ]
        },
        'Wolverine': {
            source: 'beastShape',
            minor: {
                1: {
                    changes: [
                        { formula: '@attributes.hd.total', operator: 'add', subTarget: 'mhp', modifier: 'untyped', priority: 0 }
                    ]
                },
                8: {
                    feats: [
                        { name: 'Diehard', uuid: 'Compendium.pf1.feats.Item.O0e0UCim27GPKFuW' }
                    ]
                },
                15: {

                }
            },
            major: {
                1: {
                    size: 'lg',
                    attacks: [
                        { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, claw: false },
                        { name: 'Claw', diceCount: 1, diceSize: 8, count: 2 }
                    ],
                    speed: {
                        land: 30,
                        climb: 10
                    },
                    senses: [
                        1, 14
                    ],
                    specialAttack: [
                        { name: 'Rage', diceCount: 0, diceSize: 0, count: 1, special: ['Rage'], attackType: 'none', charges: '@classes.shifter.level', claw: false }
                    ],
                    effect: {
                        'Rage': { note: '+4 str, +4 con, -2 AC.', description: 'This ability functions as the Barbarian Rage ability. A wolverine that takes damage in combat flies into a rage on its next turn, madly clawing and biting until either it or its opponent is dead. It gains +4 to Strength, +4 to Constitution, and -2 to AC.' }
                    }
                },
                8: {
                    effect: {
                        'Rage': { note: '+4 str, +4 con, -2 AC.', description: 'This ability functions as the Barbarian Rage ability. You also gain 2 rage powers, treating shifter level as barbarian level for prerequisites. A wolverine that takes damage in combat flies into a rage on its next turn, madly clawing and biting until either it or its opponent is dead. It gains +4 to Strength, +4 to Constitution, and -2 to AC.' }
                    }
                },
                15: {
                    effect: {
                        'Rage': { note: '+4 str, +4 con, -2 AC.', description: 'This ability functions as the Barbarian Rage ability. You also gain 2 rage powers, treating shifter level as barbarian level for prerequisites. You are no longer fatigued at the end of rage. A wolverine that takes damage in combat flies into a rage on its next turn, madly clawing and biting until either it or its opponent is dead. It gains +4 to Strength, +4 to Constitution, and -2 to AC.' }
                    }
                }
            },
            alternates: [
                'Bite'
            ]
        },
        claws: {
            1: { name: 'ShifterClaws', diceCount: 1, diceSize: 4, count: 2, type: ['piercing', 'slashing'] },
            3: { notes: 'Claws ignore DR/cold iton, DR/magic, DR/silver' },
            7: { diceCount: 1, diceSize: 6 },
            11: { diceCount: 1, diceSize: 8 },
            13: { diceCount: 1, diceSize: 10 },
            17: { critMult: 3 },
            19: { notes: 'Claws ignore DR/cold iton, DR/magic, DR/silver, DR/adamantine, DR/-' }
        }
    },
    'Dire Badger': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 30,
            burrow: 10
        },
        senses: [
            1, 14
        ],
        special: [
            'Ferocity'
        ]
    },
    'Black Bear': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2, special: ['Grab'] }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ]
    },
    'Boar': {
        size: 'med',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ],
        special: [
            'Ferocity'
        ]
    },
    'Brush Thylacine': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Bull Shark': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 }
        ],
        speed: {
            swim: 30
        },
        senses: [
            1, 14, 21
        ]
    },
    'Cheetah': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Trip'] },
            { name: 'Claw', diceCount: 1, diceSize: 3, count: 2 }
        ],
        speed: {
            land: 50
        },
        senses: [
            1, 14
        ]
    },
    'Chelish Hell-Bred Dog': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Trip'] }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ]
    },
    'Constrictor Snake': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1, special: ['Constrict', 'Grab'] }
        ],
        speed: {
            land: 20,
            climb: 20,
            swim: 20
        },
        senses: [
            14
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Bite' }
        }
    },
    'Deinonychus': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Talons', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'Foreclaws', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 60
        },
        senses: [
            1, 14
        ],
        special: [
            'Pounce'
        ]
    },
    'Digmaul': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 },
            { name: 'Tail', diceCount: 1, diceSize: 4, count: 1, type: ['bludgeoning','piercing'] }
        ],
        speed: {
            land: 30,
            climb: 20
        },
        senses: [
            1, 14
        ]
    },
    'Dimorphodon': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 10,
            fly: {
                base: 30,
                maneuverability: 'average'
            }
        },
        senses: [
            1, 14
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 4 rounds; effect 1d2 Str; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Dolphin': {
        size: 'med',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 0,
            swim: 80
        },
        senses: [
            1, 24
        ]
    },
    'Elk': {
        size: 'med',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 50
        },
        senses: [
            1
        ]
    },
    'Faerie Mount': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ]
    },
    'Gar': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Grab'] }
        ],
        speed: {
            swim: 30
        },
        senses: [
            1
        ]
    },
    'Giant Frog': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Grab'] }
        ],
        speed: {
            land: 30,
            swim: 30
        },
        senses: [
            1, 14
        ]
    },
    'Giant Gecko': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 40,
            climb: 40
        },
        senses: [
            1
        ]
    },
    'Giant Owl': {
        size: 'med',
        attacks: [
            { name: 'Talons', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 10,
            fly: {
                base: 60,
                maneuverability: 'average'
            }
        },
        senses: [
            1
        ]
    },
    'Giant Porcupine': {
        size: 'med',
        attacks: [
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1
        ]
    },
    'Giant Raven': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 20,
            fly: {
                base: 50,
                maneuverability: 'average'
            }
        },
        senses: [
            1
        ]
    },
    'Giant Stargazer': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Grab'] }
        ],
        speed: {
            swim: 30
        },
        senses: [
            1
        ]
    },
    'Giant Tortoise': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 10
        },
        senses: [
            1
        ]
    },
    'Giant Weasel': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Grab'] }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ]
    },
    'Goblin Dog': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 50
        },
        senses: [
            1, 14
        ]
    },
    'Hobbe Hound': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ]
    },
    'Hyena': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Trip'] }
        ],
        speed: {
            land: 50
        },
        senses: [
            1, 14
        ]
    },
    'Jigsaw Shark': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            swim: 30
        },
        senses: [
            14, 21
        ]
    },
    'Kangaroo': {
        size: 'med',
        attacks: [
            { name: 'Kick', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 50
        },
        senses: [
            1, 14
        ]
    },
    'Leopard': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Grab'] },
            { name: 'Claw', diceCount: 1, diceSize: 3, count: 2 }
        ],
        speed: {
            land: 30,
            climb: 20
        },
        senses: [
            1, 14
        ],
        special: [
            'Pounce', 'Rake2Claws'
        ]
    },
    'Mindspin Ram': {
        size: 'med',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Hoof', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1
        ]
    },
    'Mome Rath': {
        size: 'med',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 3, count: 2, special: ['Poison'] }
        ],
        speed: {
            land: 30,
            climb: 10
        },
        senses: [
            1, 14
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Claws—injury; save Fort DC 10+SL+Mod; frequency 1/round for 3 rounds; effect sickened for 1d4 rounds; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Monitor Lizard': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['Grab', 'Poison'] }
        ],
        speed: {
            land: 30,
            swim: 30
        },
        senses: [
            1, 14
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Bite—injury; save Fort DC 10+SL+Mod; onset 1 minute; frequency 1/hour for 6 hours; effect 1d2 Dexterity damage; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Pony': {
        size: 'med',
        attacks: [
            { name: 'Hoof', diceCount: 1, diceSize: 3, count: 2 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ]
    },
    'Ram': {
        size: 'med',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ]
    },
    'Riding Dog': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Trip'] }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ]
    },
    'Ringhorn': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ]
    },
    'Sea Crawler': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Tentacle', diceCount: 1, diceSize: 4, count: 1, special: ['Grab'] }
        ],
        speed: {
            land: 10,
            climb: 30,
            swim: 10
        },
        senses: [
            1
        ]
    },
    'Squid': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 },
            { name: 'Tentacle', diceCount: 1, diceSize: 4, count: 1, special: ['Grab'] }
        ],
        speed: {
            land: 0,
            swim: 60
        },
        senses: [
            1
        ],
        special: [
            'Jet240'
        ]
    },
    'Stag': {
        size: 'med',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Hoof', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 50
        },
        senses: [
            1, 14
        ]
    },
    'Stingray': {
        size: 'med',
        attacks: [
            { name: 'Sting', diceCount: 1, diceSize: 4, count: 1, special: ['Poison'] }
        ],
        speed: {
            swim: 30
        },
        senses: [
            1, 21
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Sting—injury; save Fort DC 10+SL+Mod; frequency 1/round for 4 rounds; effect 1d2 Dex and 1 Con; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Tiger Fish': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            swim: 30
        },
        senses: [
            1
        ]
    },
    'Timber Wolf': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Trip'] }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 14
        ]
    },
    'Troodon': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ]
    },
    'Venomous Snake': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 20
        },
        senses: [
            1, 14
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Bite—injury; save Fort DC 13; frequency 1/round for 6 rounds; effect 1d2 Con; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Wolf': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Trip'] }
        ],
        speed: {
            land: 50
        },
        senses: [
            1, 14
        ]
    },
    'Wolverine': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 14
        ]
    },
    'Antelope': {
        size: 'sm',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 60
        },
        senses: [
            1
        ]
    },
    'Baboon': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Badger': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 2, count: 2 }
        ],
        speed: {
            land: 30,
            burrow: 10
        },
        senses: [
            1, 14
        ]
    },
    'Blackwisp Egret': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 10,
            fly: {
                base: 40,
                maneuverability: 'average'
            }
        },
        senses: [
            1
        ]
    },
    'Dallo': {
        size: 'sm',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 4, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 3, count: 2 },
        ],
        speed: {
            land: 20,
            burrow: 10
        },
        senses: [
            1, 4, 14
        ]
    },
    'Dire Rat': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 40,
            climb: 20,
            swim: 20
        },
        senses: [
            1, 14
        ]
    },
    'Dodo': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 20
        },
        senses: [
            1
        ]
    },
    'Dog': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ]
    },
    'Dwarf Caiman': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 10,
            swim: 30
        },
        senses: [
            1
        ]
    },
    'Eagle': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 },
            { name: 'Talons', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 10,
            fly: {
                base: 80,
                maneuverability: 'average'
            }
        },
        senses: [
            1
        ]
    },
    'Electric Eel': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Tail', diceCount: 1, diceSize: 6, count: 1, type: ['electric'], special: ['Touch'] }
        ],
        speed: {
            land: 5,
            swim: 30
        },
        senses: [
            1
        ],
        di: [
            'electric'
        ]
    },
    'Falcon': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 },
            { name: 'Talons', diceCount: 1, diceSize: 3, count: 2 }
        ],
        speed: {
            land: 10,
            fly: {
                base: 90,
                maneuverability: 'good'
            }
        },
        senses: [
            1
        ]
    },
    'Goat': {
        size: 'sm',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Great Horned Owl': {
        size: 'sm',
        attacks: [
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 10,
            fly: {
                base: 60,
                maneuverability: 'average'
            }
        },
        senses: [
            1
        ]
    },
    'Octopus': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1, special: ['Poison'] },
            { name: 'Tentacle', diceCount: 0, diceSize: 0, count: 1, special: ['Grab'] }
        ],
        speed: {
            land: 20,
            swim: 30
        },
        senses: [
            1
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1 Str; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        },
        special: [
            'Jet200'
        ]
    },
    'Peafowl': {
        size: 'sm',
        attacks: [
            { name: 'Talons', diceCount: 1, diceSize: 3, count: 2 }
        ],
        speed: {
            land: 20,
            fly: {
                base: 40,
                maneuverability: 'clumsy'
            }
        },
        senses: [
            1
        ]
    },
    'Penguin': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 10,
            swim: 40
        },
        senses: [
            1
        ]
    },
    'Pig': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 14
        ]
    },
    'Pilo': {
        size: 'sm',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 6, count: 1, special: 'Poison' },
            { name: 'TailSlap', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 14
        ]
    },
    'Quillcat': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 },
            { name: 'TailSlap', diceCount: 1, diceSize: 4, count: 1, type: ['piercing'], primaryAttack: true }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ]
    },
    'Seal': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 10,
            swim: 30
        },
        senses: [
            1
        ]
    },
    'Skittergoat': {
        size: 'sm',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Sorico': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 30,
            burrow: 10
        },
        senses: [
            1, 14
        ]
    },
    'Switchback Jackal': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 3, count: 2 },
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ]
    },
    'Thylacine': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Trumpeter Swan': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 10,
            fly: {
                base: 100,
                maneuverability: 'average'
            }
        },
        senses: [
            1
        ]
    },
    'Velociraptor': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 },
            { name: 'Talons', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 60
        },
        senses: [
            1, 14
        ]
    },
    'Vulture': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 10,
            fly: {
                base: 50,
                maneuverability: 'average'
            }
        },
        senses: [
            1, 14
        ]
    },
    'Arsinoitherium': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 4, diceSize: 8, count: 1 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 2, diceSize: 8, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 14
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Aurochs': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 8, count: 1 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 2, diceSize: 6, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Axe Beak': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1
        ]
    },
    'Bison': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 2, diceSize: 6, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Camel': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 50
        },
        senses: [
            1, 14
        ]
    },
    'Ceratosaurus': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ],
        special: [
            'Ferocity'
        ]
    },
    'Chalicotherium': {
        size: 'lg',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 2 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 14
        ]
    },
    'Crocodile': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['Grab'] },
            { name: 'TailSlap', diceCount: 1, diceSize: 12, count: 1 }
        ],
        speed: {
            land: 20,
            swim: 30
        },
        senses: [
            1
        ]
    },
    'Dimetrodon': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 14
        ]
    },
    'Dire Ape': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2, special: ['Rend'] }
        ],
        speed: {
            land: 30,
            climb: 30
        },
        senses: [
            1, 14
        ],
        effect: {
            'Rend': { note: 'Rend if both claws hit, added to second claw damage. [[/d sizeRoll(1, 6, @size, 5) # Rend damage added to second claw]]{{Roll Rend Damage}}' }
        }
    },
    'Dire Bat': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 20,
            fly: {
                base: 40,
                maneuverability: 'good'
            }
        },
        senses: [
            22
        ]
    },
    'Dire Bear': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2, special: ['Grab'] }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ]
    },
    'Dire Boar': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ],
        special: [
            'Ferocity'
        ]
    },
    'Dire Hyena': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Trip'] }
        ],
        speed: {
            land: 50
        },
        senses: [
            1, 14
        ]
    },
    'Dire Lion': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['Grab'] },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ],
        special: [
            'Pounce', 'Rake2Claws'
        ]
    },
    'Dire Polar Bear': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2, special: ['Grab'] }
        ],
        speed: {
            land: 40,
            swim: 20
        },
        senses: [
            1, 14
        ]
    },
    'Dire Tiger': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Grab'] },
            { name: 'Claw', diceCount: 2, diceSize: 4, count: 2, special: ['Grab'] }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ],
        special: [
            'Pounce', 'Rake2Claws'
        ]
    },
    'Dire Weasel': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['Grab'] }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ]
    },
    'Dire Wolf': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['Trip'] }
        ],
        speed: {
            land: 50
        },
        senses: [
            1, 14
        ]
    },
    'Dire Wolverine': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 2 }
        ],
        speed: {
            land: 30,
            climb: 10
        },
        senses: [
            1, 14
        ]
    },
    'Embolotherium': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Emperor Cobra': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 30,
            climb: 30,
            swim: 30
        },
        senses: [
            1, 14
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d3 Con; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Enchanter Heron': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['Grab'] }
        ],
        speed: {
            land: 30,
            fly: {
                base: 20,
                maneuverability: 'average'
            }
        },
        senses: [
            1, 14
        ]
    },
    'Gallerok': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Constrict', 'Grab'] }
        ],
        speed: {
            land: 30,
            climb: 20
        },
        senses: [
            1, 14
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Bite' }
        }
    },
    'Giant Blowfish': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 30,
            swim: 30
        },
        senses: [
            1
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Slam and quills—injury; save Fort DC 16; frequency 1/round for 6 rounds; effect 1d6 Dex, prevents breath holding; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Giant Chameleon': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 2, diceSize: 6, count: 1, special: ['Grab'] },
            { name: 'Tongue', diceCount: 0, diceSize: 0, count: 1, special: ['Grab', 'Touch'] }
        ],
        speed: {
            land: 40,
            climb: 40
        },
        senses: [
            1
        ]
    },
    'Giant Frilled Lizard': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Tail', diceCount: 1, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 30,
            climb: 30
        },
        senses: [
            1
        ]
    },
    'Giant Moray Eel': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Grab'] }
        ],
        speed: {
            swim: 30
        },
        senses: [
            1, 14
        ]
    },
    'Giant Octopus': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 8, count: 1, special: ['Poison'] },
            { name: 'Tentacle', diceCount: 1, diceSize: 4, count: 1, special: ['Grab'], reach: 20 }
        ],
        speed: {
            land: 20,
            swim: 30
        },
        senses: [
            1
        ],
        special: [
            'Jet200'
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Bite—injury; save Fort DC 19; frequency 1/round for 6 rounds; effect 1d3 Str; cure 2 saves.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Giant Seahorse': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            swim: 30
        },
        senses: [
            1
        ]
    },
    'Giant Skunk': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 14
        ]
    },
    'Giant Toad': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Grab'] }
        ],
        speed: {
            land: 30,
            swim: 15
        },
        senses: [
            1, 14
        ]
    },
    'Giant Vulture': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 10,
            fly: {
                base: 50,
                maneuverability: 'average'
            }
        },
        senses: [
            1, 14
        ]
    },
    'Gliding Turtle': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 10,
            swim: 20
        },
        senses: [
            1
        ]
    },
    'Goliath Frog': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Grab'] }
        ],
        speed: {
            land: 30,
            swim: 30,
            climb: 20
        },
        senses: [
            1, 14
        ]
    },
    'Gorilla': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 30,
            climb: 30
        },
        senses: [
            1, 14
        ]
    },
    'Grizzly Bear': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Grab'] },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2, special: ['Grab'] }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ]
    },
    'Gylptodon': {
        size: 'lg',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 10, count: 2 }
        ],
        speed: {
            land: 20
        },
        senses: [
            1, 14
        ]
    },
    'Hammerhead Shark': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 }
        ],
        speed: {
            swim: 60
        },
        senses: [
            15, 14
        ]
    },
    'Helicoprion': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 }
        ],
        speed: {
            swim: 60
        },
        senses: [
            15, 14
        ]
    },
    'Hippopotamus': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 1, diceSize: 8, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Horse': {
        size: 'lg',
        attacks: [
            { name: 'Hoof', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 50
        },
        senses: [
            1, 14
        ]
    },
    'Impaler Shrike': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['Grab'] }
        ],
        speed: {
            land: 10,
            fly: {
                base: 60,
                maneuverability: 'average'
            }
        },
        senses: [
            1
        ]
    },
    'Kentrosaurus': {
        size: 'lg',
        attacks: [
            { name: 'Tail', diceCount: 2, diceSize: 6, count: 1, type: ['piercing'] }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ]
    },
    'Lion': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Grab'] },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ],
        special: [
            'Pounce', 'Rake2Claws'
        ]
    },
    'Manta Ray': {
        size: 'lg',
        attacks: [
            { name: 'TailSlap', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            swim: 60
        },
        senses: [
            1, 21
        ]
    },
    'Marax': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Talon', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailBarbs', diceCount: 1, diceSize: 6, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ],
        special: [
            'Pounce'
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Tail barbs—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d4 Dex; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures' }
        },
    },
    'Marine Crocodile': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['Grab'] }
        ],
        speed: {
            land: 15,
            swim: 50
        },
        senses: [
            1
        ]
    },
    'Megaloceros': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Hoof', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 50
        },
        senses: [
            1, 14
        ]
    },
    'Moa': {
        size: 'lg',
        attacks: [
            { name: 'Talon', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Narwhal': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 }
        ],
        speed: {
            swim: 80
        },
        senses: [
            1, 24
        ]
    },
    'Nothosaur': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Tail', diceCount: 1, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 20,
            swim: 40
        },
        senses: [
            1
        ]
    },
    'Pachycephalosaurus': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ]
    },
    'Plesiosaurus': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 5,
            swim: 60
        },
        senses: [
            1, 14
        ]
    },
    'Polar Bear': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 1, special: ['Grab'] }
        ],
        speed: {
            land: 40,
            swim: 20
        },
        senses: [
            1, 14
        ]
    },
    'Pteranodon': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 10,
            fly: {
                base: 50,
                maneuverability: 'clumsy'
            }
        },
        senses: [
            1, 14
        ]
    },
    'Rhinoceros': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 40
        },
        senses: [
            14
        ]
    },
    'River Elk': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Hoof', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 50,
            swim: 30
        },
        senses: [
            1
        ]
    },
    'Shark': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 }
        ],
        speed: {
            swim: 60
        },
        senses: [
            15, 14
        ]
    },
    'Stygian Hot-Blooded Horse': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Hoof', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 50
        },
        senses: [
            1
        ]
    },
    'Styracosaurus': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 2, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ]
    },
    'Swordfish': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 8, count: 1 }
        ],
        speed: {
            swim: 70
        },
        senses: [
            1
        ]
    },
    'Tiger': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Grab'] },
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 2, special: ['Grab'] }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ],
        special: [
            'Pounce', 'Rake2Claws'
        ]
    },
    'Uintatherium': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Walrus': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 10,
            swim: 40
        },
        senses: [
            1
        ],
    },
    'Wolliped': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 8, count: 1 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 1, diceSize: 6, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 50
        },
        senses: [
            1, 14
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Woolly Rhinoceros': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 2, diceSize: 8, count: 1 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 2, diceSize: 6, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 30
        },
        senses: [
            14
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Archaeopteryx': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 40,
            fly: {
                base: 40,
                maneuverability: 'poor'
            },
            climb: 10
        },
        senses: [
            1
        ]
    },
    'Cat': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 2, count: 2 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 14
        ]
    },
    'Chicken': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 30,
            fly: {
                base: 20,
                maneuverability: 'clumsy'
            }
        },
        senses: [
            1
        ]
    },
    'Compsognathus': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 40,
            swim: 20
        },
        senses: [
            1, 14
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 4 rounds; effect 1d2 Str; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Flying Fox': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 10,
            fly: {
                base: 60,
                maneuverability: 'average'
            }
        },
        senses: [
            1, 14
        ]
    },
    'Flying Squirrel': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 20,
            fly: {
                base: 40,
                maneuverability: 'clumsy'
            }
        },
        senses: [
            1
        ]
    },
    'Fox': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ]
    },
    'Hawk': {
        size: 'tiny',
        attacks: [
            { name: 'Talon', diceCount: 1, diceSize: 3, count: 2 }
        ],
        speed: {
            land: 10,
            fly: {
                base: 60,
                maneuverability: 'average'
            }
        },
        senses: [
            1, 14
        ]
    },
    'Lich Newt': {
        size: 'tiny',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 2, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 15,
            swim: 20
        },
        senses: [
            1
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1 Str; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Lizard': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 20,
            climb: 20
        },
        senses: [
            1
        ]
    },
    'Monkey': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 30,
            climb: 30
        },
        senses: [
            1
        ]
    },
    'Otter': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 20,
            swim: 30
        },
        senses: [
            1
        ]
    },
    'Owl': {
        size: 'tiny',
        attacks: [
            { name: 'Talon', diceCount: 1, diceSize: 3, count: 2 }
        ],
        speed: {
            land: 10,
            fly: {
                base: 60,
                maneuverability: 'average'
            }
        },
        senses: [
            1
        ]
    },
    'Petromin': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 10,
            climb: 20,
            fly: {
                base: 40,
                maneuverability: 'poor'
            }
        },
        senses: [
            1
        ]
    },
    'Poison Frog': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 1, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 10,
            swim: 20
        },
        senses: [
            1
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d2 Con damage; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Porcupine': {
        size: 'tiny',
        attacks: [
            { name: 'TailSlap', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Raccoon': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 20,
            climb: 20
        },
        senses: [
            1, 14
        ]
    },
    'Rat': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 15,
            climb: 15,
            swim: 15
        },
        senses: [
            1, 14
        ]
    },
    'Raven': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 10,
            fly: {
                base: 40,
                maneuverability: 'average'
            }
        },
        senses: [
            1
        ]
    },
    'Red Panda': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 20,
            climb: 20
        },
        senses: [
            1, 14
        ]
    },
    'Rhamphorhynchus': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 10,
            fly: {
                base: 40,
                maneuverability: 'good'
            }
        },
        senses: [
            1
        ]
    },
    'Rock Tuatara': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 },
            { name: 'TailSlap', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 20,
            climb: 20
        },
        senses: [
            1, 11
        ]
    },
    'Skunk': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 2, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 14
        ]
    },
    'Sloth': {
        size: 'tiny',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 2, count: 2 }
        ],
        speed: {
            land: 5,
            climb: 5
        },
        senses: [
            1, 14
        ]
    },
    'Snapping Turtle': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 10,
            swim: 20
        },
        senses: [
            1, 14
        ]
    },
    'Tuatara': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 20,
            climb: 20
        },
        senses: [
            1, 7
        ]
    },
    'Tullimonstrum': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            swim: 30
        },
        senses: [
            1, 14
        ]
    },
    'Varisian Hagfish': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 30,
            swim: 30
        },
        senses: [
            1
        ]
    },
    'Viper': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 2, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 20,
            climb: 20,
            swim: 20
        },
        senses: [
            1, 14
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d2 Con damage; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Weasel': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 2, count: 1 }
        ],
        speed: {
            land: 20,
            climb: 20
        },
        senses: [
            1, 14
        ]
    },
    'Allosaurus': {
        size: 'huge',
        attacks: [
            { name: 'Gore', diceCount: 2, diceSize: 6, count: 1, special: ['Grab'] },
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 2 }
        ],
        speed: {
            land: 50
        },
        senses: [
            1, 14
        ],
        special: [
            'Pounce', 'Rake2Claws'
        ]
    },
    'Amargasaurus': {
        size: 'huge',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 1, diceSize: 8, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 14
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Ankylosaurus': {
        size: 'huge',
        attacks: [
            { name: 'Tail', diceCount: 3, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 14
        ]
    },
    'Archelon': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 15,
            swim: 50
        },
        senses: [
            1, 14
        ]
    },
    'Baluchitherium': {
        size: 'huge',
        attacks: [
            { name: 'Hoof', diceCount: 2, diceSize: 8, count: 2 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 2, diceSize: 8, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Behemoth Hippopotamus': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 4, diceSize: 8, count: 1 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 2, diceSize: 6, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 50
        },
        senses: [
            1
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Brontotherium': {
        size: 'huge',
        attacks: [
            { name: 'Gore', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 1, diceSize: 8, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Cameroceras': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Tentacle', diceCount: 4, diceSize: 8, count: 1, special: ['Constrict', 'Grab'] }
        ],
        speed: {
            land: 5,
            swim: 20
        },
        senses: [
            1, 14
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Tentacle' }
        },
        special: [
            'Jet90'
        ]
    },
    'Deinotherium': {
        size: 'huge',
        attacks: [
            { name: 'Gore', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 1 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 2, diceSize: 8, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 14
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Devil Monkey': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1
        ]
    },
    'Dunkleosteus': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 3, diceSize: 6, count: 1, special: ['Grab'] }
        ],
        speed: {
            swim: 60
        },
        senses: [
            1
        ]
    },
    'Elasmosaurus': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 20,
            swim: 50
        },
        senses: [
            1, 14
        ]
    },
    'Elasmotherium': {
        size: 'huge',
        attacks: [
            { name: 'Gore', diceCount: 6, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 3, diceSize: 6, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Elephant': {
        size: 'huge',
        attacks: [
            { name: 'Gore', diceCount: 2, diceSize: 8, count: 1, special: ['Grab'] },
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 2, diceSize: 8, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Frog Father': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 3, diceSize: 6, count: 1, special: ['Grab'] }
        ],
        speed: {
            land: 30,
            swim: 30
        },
        senses: [
            1, 14
        ]
    },
    'Giant Gar': {
        size: 'huge',
        attacks: [
            { name: 'Gore', diceCount: 2, diceSize: 6, count: 1, special: ['Grab'] }
        ],
        speed: {
            swim: 60
        },
        senses: [
            1
        ]
    },
    'Giant Squid': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Arm', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Tentacle', diceCount: 4, diceSize: 6, count: 1, special: ['Grab', 'Constrict'] }
        ],
        speed: {
            swim: 60
        },
        senses: [
            1
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Tentacles' }
        },
        special: [
            'Jet260'
        ]
    },
    'Giraffe': {
        size: 'huge',
        attacks: [
            { name: 'Hoof', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 2 }
        ],
        speed: {
            land: 50
        },
        senses: [
            1
        ]
    },
    'Great White Shark': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 }
        ],
        speed: {
            swim: 60
        },
        senses: [
            1, 14, 21
        ]
    },
    'Iguanodon': {
        size: 'huge',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 2 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 14
        ]
    },
    'Kaprosuchus': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1
        ]
    },
    'Killer Seahorse': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1, special: ['Grab', 'Constrict'] }
        ],
        speed: {
            swim: 40
        },
        senses: [
            1
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Bite' }
        }
    },
    'Mastodon Elephant': {
        size: 'huge',
        attacks: [
            { name: 'Gore', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 2, diceSize: 8, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Megalania': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1, special: ['Grab', 'Poison'] }
        ],
        speed: {
            land: 30,
            swim: 30
        },
        senses: [
            1, 14
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Bite; save Fort DC 10+DL+Mod; frequency 1/round for 6 rounds; effect 1d4 Dex damage; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Megatherium': {
        size: 'huge',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 2, special: ['Trip', 'Rend'] }
        ],
        speed: {
            land: 30,
            climb: 10
        },
        senses: [
            1, 14
        ],
        effect: {
            'Rend': { note: 'Rend if both claws hit, added to second claw damage. [[/d sizeRoll(1, 6, @size, 5) # Rend damage added to second claw]]{{Roll Rend Damage}}' }
        }
    },
    'Mokele-Mbembe': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 1, diceSize: 8, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 30,
            swim: 30
        },
        senses: [
            1, 14
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Orca': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            swim: 80
        },
        senses: [
            1
        ]
    },
    'Parasaurolophus': {
        size: 'huge',
        attacks: [
            { name: 'Tail', diceCount: 2, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 14
        ]
    },
    'Quetzalcoatlus': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'TailSlap', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 30,
            fly: {
                base: 50,
                maneuverability: 'clumsy'
            }
        },
        senses: [
            1, 14
        ]
    },
    'Saltwater Crocodile': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'TailSlap', diceCount: 1, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 20,
            swim: 30
        },
        senses: [
            1
        ]
    },
    'Stegosaurus': {
        size: 'huge',
        attacks: [
            { name: 'Tail', diceCount: 4, diceSize: 6, count: 1, special: ['Trip'] }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14
        ]
    },
    'Triceratops': {
        size: 'huge',
        attacks: [
            { name: 'Gore', diceCount: 2, diceSize: 10, count: 1 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 1, diceSize: 8, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 14
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Yolubilis Heron': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 30,
            fly: {
                base: 60,
                maneuverability: 'average'
            }
        },
        senses: [
            1
        ]
    },
    'Bat': {
        size: 'dim',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 5,
            fly: {
                base: 40,
                maneuverability: 'good'
            }
        },
        senses: [
            1, 20
        ]
    },
    'Snark': {
        size: 'dim',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 2, count: 2 }
        ],
        speed: {
            land: 20,
            climb: 15,
            fly: {
                base: 30,
                maneuverability: 'poor'
            }
        },
        senses: [
            1, 14
        ]
    },
    'Toad': {
        size: 'dim',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 5
        },
        senses: [
            1, 14
        ]
    },
    'Aranea': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Poison'] }
        ],
        specialAttack: [
            { name: 'Web', diceCount: 0, diceSize: 0, count: 1, special: ['Touch', 'Web'], attackType: 'rwak', range: 10, increment: 5, charges: 8 }
        ],
        speed: {
            land: 50,
            climb: 30
        },
        senses: [
            1, 7
        ],
        effect: {
            'Web': { note: 'Web: Touch attack to entangle up to one size category higher, escaped with escape artist or burst with strength. DC 10+SL+Mod.', description: '<p>Creatures with the web ability can use webs to support themselves and up to one additional creature of the same size. In addition, such creatures can throw a web up to eight times per day. This is similar to an attack with a net but has a maximum range of 50 feet, with a range increment of 10 feet, and is effective against targets up to one size category larger than the web spinner. An entangled creature can escape with a successful Escape Artist check or burst the web with a Strength check. Both are standard actions with a DC equal to 10 + Spell Level + Caster Stat Mod. Attempts to burst a web by those caught in it take a -4 penalty.</p><p>Web spinners can create sheets of sticky webbing up to three times their size. They usually position these sheets to snare flying creatures but can also try to trap prey on the ground. Approaching creatures must succeed on a DC 20 Perception check to notice a web; otherwise they stumble into it and become trapped as though by a successful web attack. Attempts to escape or burst the webbing gain a +5 bonus if the trapped creature has something to walk on or grab while pulling free. Each 5-foot-square section of web has a number of hit points equal to the Hit Dice of the creature that created it ([[@attributes.hd.total]])and DR 5/—.</p><p>A creature can move across its own web at its climb speed and can pinpoint the location of any creature touching its web.</p>' },
            'Poison': { note: 'Poison (Ex) Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d3 Strength; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Baku': {
        size: 'med',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 30,
            fly: {
                base: 60,
                maneuverability: 'perfect'
            }
        },
        senses: [
            1, 7
        ]
    },
    'Basilisk': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 20,
        },
        senses: [
            1, 7
        ]
    },
    'Blink Dog': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 40,
        },
        senses: [
            1, 7, 14
        ]
    },
    'Boreal Wolf': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, nonCrit: { formula: '1d6', type: { values: ['fire'], custom: '' } }, special: ['Trip'] }
        ],
        speed: {
            land: 50,
        },
        senses: [
            1, 14
        ],
        di: [
            'cold'
        ],
        dv: [
            'fire'
        ]
    },
    'Bunyip': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 }
        ],
        specialAttack: [
            { name: 'Roar', diceCount: 0, diceSize: 0, count: 1, special: ['Roar'], attackType: 'save', area: '100-ft circle', templateShape: 'circle',  templateSize: '100' }
        ],
        speed: {
            land: 10,
            swim: 50
        },
        senses: [
            1, 7, 17
        ],
        special: [
            'BloodFrenzy'
        ],
        effect: {
            'Roar': { note: '100-foot radius. 4HD or fewer Will or panicked 2d4 rounds', type: 'will', saveDesc: 'Will negates', description: '<p>When a bunyip roars (a standard action the creature can perform at will), all hearing creatures with 4 or fewer HD within a 100-foot spread must succeed on a Will save or become panicked for 2d4 rounds. Whether or not the save is successful, creatures in the area are immune to the roar of that bunyip for 24 hours. This is a sonic, mind-affecting fear effect.</p>' }
        }
    },
    'Delgeth': {
        size: 'med',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 8, count: 1, nonCrit: { formula: '1d6', type: { values: ['fire'], custom: '' } } },
            { name: 'Hoof', diceCount: 1, diceSize: 4, count: 2, nonCrit: { formula: '1d6', type: { values: ['fire'], custom: '' } } }
        ],
        speed: {
            land: 50,
        },
        senses: [
            1, 7, 14
        ],
        di: [
            'fire'
        ]
    },
    'Dweomercat': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 40
        },
        senses: [
            7, 14
        ]
    },
    'Galvo': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, nonCrit: { formula: '2d6', type: { values: ['electric'], custom: '' } } },
            { name: 'Slam', diceCount: 1, diceSize: 4, count: 2, nonCrit: { formula: '2d6', type: { values: ['electric'], custom: '' } } }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 7, 24
        ],
        di: [
            'electric'
        ]
    },
    'Grodair': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Tentacle', diceCount: 1, diceSize: 4, count: 2, special: ['Trip'] }
        ],
        speed: {
            land: 30,
            swim: 60
        },
        senses: [
            1, 7
        ]
    },
    'Jackalwere': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7, 14
        ]
    },
    'Juvenile Seps': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 20
        },
        senses: [
            1, 7, 14
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 10 rounds; effect 1d4 acid and 1d2 Con damage; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures' }
        },
    },
    'Kaicharek': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Grab'] },
            { name: 'Tentacle', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 20,
            burrow: 20,
            climb: 20
        },
        senses: [
            1, 7
        ]
    },
    'Krenshar': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 7, 14
        ]
    },
    'Nekomata': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 50
        },
        senses: [
            1, 7, 14
        ],
        di: [
            'negative'
        ],
        fastHealing: 5
    },
    'Pard': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 120
        },
        senses: [
            1, 7, 14
        ]
    },
    'Peryton': {
        size: 'med',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Hoof', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 30,
            fly: {
                base: 60,
                maneuverability: 'good'
            }
        },
        senses: [
            1, 7
        ]
    },
    'Peuchen': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Grab', 'Constrict', 'Poison'] }
        ],
        speed: {
            land: 30,
            fly: {
                base: 50,
                maneuverability: 'good'
            }
        },
        senses: [
            1, 7, 14
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Bite' },
            'Poison': { note: 'Poison (Ex) Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d4 Dex damage; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures' }
        },
    },
    'Ramidreju': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Grab', 'Constrict', 'BloodDrain'] }
        ],
        speed: {
            land: 40,
            burrow: 10,
            climb: 20
        },
        senses: [
            1, 7, 14
        ],
        effect: {
            'BloodDrain': { note: 'Blood Drain 1 Con', description: '<p>The creature drains blood at the end of its turn if it grapples a foe, inflicting Constitution damage.</p>' },
            'Constrict': { note: 'Constrict: Same damage as Bite' }
        },
    },
    'Serpopard': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2, special: ['Grab'] }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 7
        ],
        special: [
            'Pounce', 'Rake2Claws'
        ]
    },
    'Sha': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Trip'] }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 7
        ]
    },
    'Siren': {
        size: 'med',
        attacks: [
            { name: 'Talon', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 30,
            fly: {
                base: 60,
                maneuverability: 'good'
            }
        },
        senses: [
            1, 7
        ]
    },
    'Skeltercat': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Grab'] },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 7, 14
        ]
    },
    'Slurk': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 30,
            climb: 30
        },
        senses: [
            7
        ]
    },
    'Su': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2, special: ['Grab'] }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 7, 14
        ],
        special: [
            'Pounce', 'Rake2Claws'
        ]
    },
    'Thrushmoor Angler': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['Grab'] },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 30,
            swim: 30
        },
        senses: [
            1, 7
        ],
        fastHealing: 5,
        eres: [
            { amount: 10, operator: true, types: ['acid', ''] },
            { amount: 10, operator: true, types: ['cold', ''] }
        ]
    },
    'Trollhound': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 10, count: 1, special: ['Trip'] }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 7, 14
        ]
    },
    'Uraeus': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 2, special: ['Poison'] }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], damageAbility: '', attackType: 'none', area: '30-ft line', templateShape: 'ray',  templateSize: '30' }
        ],
        speed: {
            land: 20,
            climb: 20,
            fly: {
                base: 50,
                maneuverability: 'average'
            },
            swim: 20
        },
        senses: [
            1, 7, 14
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Bite or breath weapon—contact or injury; save Fort DC 10+SL+Mod; frequency 1/round for 2 rounds; initial effect blinded and paralyzed for 1 round; secondary effect blinded for 2d4 rounds; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures' },
            'Breath': { note: 'Breath area: 30ft line. Creatures in area blinded and save vs poison', type: 'ref', saveDesc: 'Reflex avoids both', description: '<p>Once every 1d4 rounds, as a standard action, a uraeus\'s head can expel a 30-foot line of poison. All creatures in the area are blinded for 1 round and must save against poison (Reflex DC 10 + spell level + caster stat mod negates both). As a full-round action, a uraeus can either expel two lines or bite with one head and breathe poison with the other. Each head tracks its breath weapon\'s availability separately.</p><p>Bite or breath weapon—contact or injury; save Fort DC 10+SL+Mod; frequency 1/round for 2 rounds; initial effect blinded and paralyzed for 1 round; secondary effect blinded for 2d4 rounds; cure 2 consecutive saves.</p>' }
        },
        eres: [
            { amount: 10, operator: true, types: ['fire', ''] }
        ]
    },
    'Worg': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 10, count: 1, special: ['Trip'] }
        ],
        speed: {
            land: 50
        },
        senses: [
            1, 7, 14
        ]
    },
    'Almiraj': {
        size: 'sm',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 30,
            burrow: 10
        },
        senses: [
            1, 7, 14
        ]
    },
    'Aurumvorax': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Grab'] },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 4, special: ['Grab'] }
        ],
        speed: {
            land: 30,
            burrow: 10
        },
        senses: [
            1, 7, 14
        ],
        special: [
            'Ferocity', 'Rake4Claws'
        ],
        ci: [
            'poison'
        ],
        eres: [
            { amount: 10, operator: true, types: ['fire', ''] }
        ]
    },
    'Blindheim': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 3, count: 2 }
        ],
        speed: {
            land: 30,
            climb: 20,
            swim: 20
        },
        senses: [
            1, 7
        ]
    },
    'Chupacabra': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1, special: ['Grab'] },
            { name: 'Claw', diceCount: 1, diceSize: 3, count: 2 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7
        ],
        special: [
            'Pounce'
        ]
    },
    'Clawbat': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 10,
            fly: {
                base: 50,
                maneuverability: 'average'
            }
        },
        senses: [
            1, 7
        ]
    },
    'Cockatrice': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 20,
            fly: {
                base: 60,
                maneuverability: 'poor'
            }
        },
        senses: [
            1, 7
        ]
    },
    'Darkmantle': {
        size: 'sm',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 4, count: 1, special: ['Grab', 'Constrict'] }
        ],
        speed: {
            land: 20,
            fly: {
                base: 30,
                maneuverability: 'poor'
            }
        },
        senses: [
            1, 7, 38
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Bite' }
        }
    },
    'Echeneis': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 },
            { name: 'TailSlap', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 5,
            swim: 20
        },
        senses: [
            1, 7
        ]
    },
    'Greater Witchcrow': {
        size: 'sm',
        attacks: [
            { name: 'Talon', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 20,
            fly: {
                base: 60,
                maneuverability: 'good'
            }
        },
        senses: [
            1, 7
        ]
    },
    'Gryph': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 0, diceSize: 0, count: 1, special: ['Grab'] }
        ],
        speed: {
            land: 30,
            fly: {
                base: 50,
                maneuverability: 'good'
            }
        },
        senses: [
            1, 7
        ]
    },
    'Hallowed Lynx': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 40,
            climb: 20
        },
        senses: [
            1, 7, 14
        ]
    },
    'Muckdweller': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 10,
            swim: 30
        },
        senses: [
            1, 7
        ]
    },
    'Rat King': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 5 }
        ],
        speed: {
            land: 30,
            climb: 15,
            swim: 15
        },
        senses: [
            1, 7
        ]
    },
    'Shasalqu': {
        size: 'sm',
        attacks: [
            { name: 'TailSlap', diceCount: 1, diceSize: 8, count: 1, nonCrit: { formula: '1d6', type: { values: ['cold'], custom: '' } } }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7
        ],
        di: [
            'fire'
        ],
        eres: [
            { amount: 10, operator: true, types: ['cold', ''] }
        ]
    },
    'Shocker Lizard': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 40,
            climb: 20,
            swim: 20
        },
        senses: [
            1, 7
        ],
        di: [
            'electric'
        ]
    },
    'Voonith': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Trip'] },
            { name: 'Claw', diceCount: 1, diceSize: 3, count: 4 }
        ],
        speed: {
            land: 30,
            swim: 50
        },
        senses: [
            1, 7
        ],
        special: [
            'Pounce'
        ]
    },
    'Water Leaper': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 },
            { name: 'Sting', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 20,
            fly: {
                base: 20,
                maneuverability: 'clumsy'
            },
            swim: 30
        },
        senses: [
            1, 7
        ]
    },
    'Witchcrow': {
        size: 'sm',
        attacks: [
            { name: 'Talon', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 20,
            fly: {
                base: 60,
                maneuverability: 'good'
            }
        },
        senses: [
            1, 7
        ],
        eres: [
            { amount: 5, operator: true, types: ['cold', ''] }
        ]
    },
    'Ahool': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2, special: ['Rend'] },
            { name: 'Tail', diceCount: 1, diceSize: 8, count: 2 }
        ],
        speed: {
            land: 20,
            fly: {
                base: 60,
                maneuverability: 'average'
            }
        },
        senses: [
            1, 7, 14
        ],
        special: [
            'Ferocity'
        ],
        effect: {
            'Rend': { note: 'Rend if both claws hit, added to second claw damage. [[/d sizeRoll(1, 6, @size, 5) # Rend damage added to second claw]]{{Roll Rend Damage}}' }
        }
    },
    'Ahuizotl': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2 },
            { name: 'TailClaw', diceCount: 1, diceSize: 8, count: 2, special: ['Grab'] }
        ],
        speed: {
            land: 30,
            swim: 50
        },
        senses: [
            1, 7
        ]
    },
    'Amphisbaena': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 2, special: ['Poison'] }
        ],
        speed: {
            land: 20,
            climb: 20,
            swim: 20
        },
        senses: [
            1, 7, 14
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d3 Con; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        },
        eres: [
            { amount: 10, operator: true, types: ['cold', ''] }
        ]
    },
    'Androsphinx': {
        size: 'lg',
        attacks: [
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2, special: ['Grab'] }
        ],
        specialAttack: [
            { name: 'Roar', diceCount: 0, diceSize: 0, count: 1, special: ['Roar'], charges: 3 }
        ],
        speed: {
            land: 40,
            fly: {
                base: 60,
                maneuverability: 'poor'
            }
        },
        senses: [
            1, 7
        ],
        special: [
            'Pounce', 'Rake2Claws'
        ],
        effect: {
            'Roar': { note: 'Roar 1: Frightened 2d6 rounds. Will negates\nRoar 2: Paralyzed with fear, deafened 1d4 rounds. Will negates\nRoar 3: 2d4 Str penalty for 2d4 rounds, 2d8 damage [[/d 2d8 # Sonic damage]]{Roll}. Smaller creatures knocked prone. Fort negates penalty and prone.', description: '<p>An androsphinx can roar up to three times per day as a standard action. Each progressive roar has a different effect, depending upon whether it is the first, second, or third of the androsphinx\'s roars for that day. All of these roars are sonic effects that fill a 60-foot-radius burst, centered on the androsphinx; the save DCs are 10 + spell level + caster stat mod. Sphinxes are immune to all of the effects of an androsphinx\'s roars.</p><ul><li>First Roar: Affected creatures become frightened for 2d6 rounds (Will negates). This is a mind-affecting fear effect in addition to being a sonic effect.</li><li>Second Roar: Affected creatures are paralyzed with fear and deafened for 1d4 rounds (Will negates). This is a mind-affecting fear effect in addition to being a sonic effect.</li><li>Third Roar: Affected creatures take a 2d4 penalty to Strength for 2d4 rounds and take 2d8 points of sonic damage. Creatures smaller than the androsphinx are knocked prone. A DC 19 Fortitude save negates the Strength penalty and being knocked prone.</li></ul>' }
        }
    },
    'Ankheg': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Grab'], nonCrit: { formula: '1d4', type: { values: ['acid'], custom: '' } } }
        ],
        speed: {
            land: 30,
            burrow: 20
        },
        senses: [
            1, 7, 31
        ]
    },
    'Black Shuck': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['Trip'] },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 40,
            swim: 15
        },
        senses: [
            1, 7, 14
        ]
    },
    'Burstigeit': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 8, count: 1, conditionals: ['PowerfulCharge'] }
        ],
        speed: {
            land: 30,
            climb: 20
        },
        senses: [
            1, 7, 14
        ],
        eres: [
            { amount: 5, operator: true, types: ['cold', ''] },
            { amount: 5, operator: true, types: ['fire', ''] }
        ],
        special: [
            'Ferocity'
        ],
        effect: {
            'PowerfulCharge': { default: false, name: 'PowerfulCharge', modifiers: [{ formula: '2d8', target: 'damage', subTarget: 'attack_0', type: '', critical: 'nonCrit', damageType: { values: ['piercing'], custom: '' } }] },
        }
    },
    'Camulatz': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Talon', diceCount: 1, diceSize: 6, count: 2, special: ['Rend'] }
        ],
        speed: {
            land: 10,
            fly: {
                base: 80,
                maneuverability: 'average'
            }
        },
        senses: [
            1, 7, 14
        ],
        effect: {
            'Rend': { note: 'Rend if both talons hit, added to second claw damage. [[/d sizeRoll(1, 6, @size, 5) # Rend damage added to second talon]]{{Roll Rend Damage}}' }
        }
    },
    'Catoblepas': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 3, diceSize: 6, count: 1 },
            { name: 'Gore', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Hoof', diceCount: 1, diceSize: 8, count: 2 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], damageAbility: '', attackType: 'none', area: '60-ft cone', templateShape: 'cone',  templateSize: '60' },
            { name: 'Trample', diceCount: 4, diceSize: 6, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 40,
            swim: 20
        },
        senses: [
            1, 7, 14
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' },
            'Breath': { note: 'Breath area: 60ft cone. Poison: DC 10+SL+Mod; frequency 1/ round for 6 rounds; effect 1d6 Con damage; cure 3 consecutive saves.', type: 'fort', saveDesc: 'Fort cures', description: '<p>Poison Breath (Ex)</p><p>Usable once every 1d4 rounds, as a standard action.  A catoblepas\'s horrid, stinking breath is 60-foot cone of poison gas. Breath—contact; save Fort DC 10+SL+Mod; frequency 1/ round for 6 rounds; effect 1d6 Con damage; cure 3 consecutive saves.</p>' }
        }
    },
    'Cerynitis': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 180
        },
        senses: [
            1, 7, 14
        ],
        fastHealing: 5
    },
    'Chemosit': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 40,
            climb: 40
        },
        senses: [
            1, 7, 14
        ],
        special: [
            'Pounce', 'Rake1Claw'
        ]
    },
    'Chimera': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Gore', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2 }
        ],
        specialAttack: [
            { name: 'BreathWeaponBlack', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '6d8', type: { values: ['acid'], custom: '' } }, damageAbility: '', area: '40-ft line', templateShape: 'ray',  templateSize: '40' },
            { name: 'BreathWeaponBlue', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '6d8', type: { values: ['electric'], custom: '' } }, damageAbility: '', area: '40-ft line', templateShape: 'ray',  templateSize: '40' },
            { name: 'BreathWeaponGreen', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '6d8', type: { values: ['acid'], custom: '' } }, damageAbility: '', area: '20-ft cone', templateShape: 'cone',  templateSize: '20' },
            { name: 'BreathWeaponRed', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '6d8', type: { values: ['fire'], custom: '' } }, damageAbility: '', area: '20-ft cone', templateShape: 'cone',  templateSize: '20' },
            { name: 'BreathWeaponWhite', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '6d8', type: { values: ['cold'], custom: '' } }, damageAbility: '', area: '20-ft cone', templateShape: 'cone',  templateSize: '20' }

        ],
        speed: {
            land: 30,
            fly: {
                base: 50,
                maneuverability: 'poor'
            }
        },
        senses: [
            1, 7, 14
        ],
        effect: {
            'Breath': { note: 'Breath area: see description.', type: 'ref', saveDesc: 'Reflex for half', description: '<p>A chimera\'s breath weapon depends on the color of its dragon head, as summarized on the table below. Regardless of its type, a chimera\'s breath weapon is usable once every 1d4 rounds, deals 6d8 points of damage, and allows a Reflex save for half damage, DC 10 + spell level + caster stat mod.</p><p>To determine a chimera\'s head color and breath weapon randomly, roll 1d10 and consult the table below:</p><table><thead><tr><th class="number">d10</th><th>Head Color</th><th>Breath Weapon</th></tr></thead><tbody><tr><td>1-2</td><td>Black</td><td>40-foot line of acid</td></tr><tr><td>3-4</td><td>Blue</td><td>40-foot line of lightning</td></tr><tr><td>5-6</td><td>Green</td><td>20-foot cone of acid</td></tr><tr><td>7-8</td><td>Red</td><td>20-foot cone of fire</td></tr><tr><td>9-10</td><td>White</td><td>20-foot cone of cold</td></tr></tbody></table>' }
        }
    },
    'Criosphinx': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 2, diceSize: 4, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 30,
            fly: {
                base: 60,
                maneuverability: 'poor'
            }
        },
        senses: [
            1, 7
        ]
    },
    'Cytillipede': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 40,
            climb: 40
        },
        senses: [
            1, 7
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d3 Dex, dazed, and the effects of memory lapse; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Death Dog': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 2, special: ['Trip'] }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7, 14
        ]
    },
    'Death Worm': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1, special: ['Poison'] }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '8d6', type: { values: ['acid'], custom: '' } }, damageAbility: '', attackType: 'none', area: '30-ft line', templateShape: 'ray',  templateSize: '30' }
        ],
        speed: {
            land: 20,
            burrow: 20
        },
        senses: [
            1, 7, 31
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Bite-injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d2 Con damage; cure 2 saves.', type: 'fort', saveDesc: 'Fort Cures' },
            'Breath': { note: 'Breath area: 30ft line. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        di: [
            'acid', 'electric'
        ]
    },
    'Devilfish': {
        size: 'lg',
        attacks: [
            { name: 'Tentacle', diceCount: 3, diceSize: 6, count: 1, special: ['Grab'] }
        ],
        speed: {
            land: 10,
            swim: 40
        },
        senses: [
            1
        ],
        eres: [
            { amount: 10, operator: true, types: ['cold', ''] }
        ],
        special: [
            'Jet240'
        ]
    },
    'Disenchanter': {
        size: 'lg',
        attacks: [
            { name: 'Hoof', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 50
        },
        senses: [
            1, 7
        ]
    },
    'Dragon Horse': {
        size: 'lg',
        attacks: [
            { name: 'Hoof', diceCount: 2, diceSize: 6, count: 2, nonCrit: { formula: '1d6', type: { values: ['electric'], custom: '' } } }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], damageAbility: '', attackType: 'none', area: '30-ft cone', templateShape: 'cone',  templateSize: '30' }
        ],
        speed: {
            land: 60,
            fly: {
                base: 120,
                maneuverability: 'good'
            }
        },
        senses: [
            1, 11
        ],
        effect: {
            'Breath': { note: 'Breath area: 30ft cone. Choice of: [[/d 10d6[cold]]]{10d6 cold damage}, reflex half; 1 min fog cloud in area; severe wind in area', type: 'ref', saveDesc: 'Reflex half', description: '<p>As a standard action, a dragon horse can breathe out a 30-foot cone of mist. This mist either deals 10d6 points of cold damage (DC 20 Reflex half), creates a region of fog in the area that lasts for 1 minute (similar to that created by a fog cloud spell), or creates a blast of severe wind (see the wind effects table) in the area.</p>' }
        }
    },
    'Dragonne': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2 }
        ],
        specialAttack: [
            { name: 'Roar', diceCount: 0, diceSize: 0, count: 1, special: ['Roar'], attackType: 'save', area: '120-ft circle', templateShape: 'circle',  templateSize: '120' }
        ],
        speed: {
            land: 40,
            fly: {
                base: 30,
                maneuverability: 'poor'
            }
        },
        senses: [
            1, 7, 14
        ],
        special: [
            'Pounce'
        ],
        effect: {
            'Roar': { note: '120-ft radius. Fort DC 10+SL+Mod save or fatigued. 30-ft radius also deafened 2d4 rounds', type: 'fort', saveDesc: 'Fort negates', description: '<p>A dragonne can unleash a devastating roar every 1d4 rounds as a standard action. All creatures except dragonnes within 120 feet must succeed at a DC 17 Fortitude save or become fatigued. Those within 30 feet who fail their saves are also deafened for 2d4 rounds. This is a sonic effect.</p>' }
        }
    },
    'Estuarine Worm (Shemu)': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Grab', 'Constrict'] },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 30,
            burrow: 10,
            swim: 10
        },
        senses: [
            1, 7, 29
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Bite' }
        },
        eres: [
            { amount: 10, operator: true, types: ['acid', ''] },
            { amount: 10, operator: true, types: ['fire', ''] }
        ]
    },
    'Flail Snail': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 6, count: 4 }
        ],
        speed: {
            land: 10,
            climb: 10
        },
        senses: [
            1, 7, 14, 21, 32
        ],
        ci: [
            'poison'
        ],
        eres: [
            { amount: 10, operator: true, types: ['fire', ''] }
        ]
    },
    'Gammenore': {
        size: 'lg',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Pincer', diceCount: 2, diceSize: 6, count: 1, special: ['Grab', 'Constrict'] }
        ],
        speed: {
            land: 40,
            climb: 20
        },
        senses: [
            1, 7
        ],
        di: [
            'cold'
        ],
        dv: [
            'fire'
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as pincer' }
        }
    },
    'Genghryl': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Tentacle', diceCount: 1, diceSize: 8, count: 4, special: ['Grab', 'Constrict'] }
        ],
        speed: {
            land: 20,
            burrow: 20
        },
        senses: [
            1, 7, 31
        ],
        eres: [
            { amount: 10, operator: true, types: ['acid', ''] },
            { amount: 10, operator: true, types: ['cold', ''] }
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Tentacle' }
        }
    },
    'Giant Eagle': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Talon', diceCount: 1, diceSize: 8, count: 2 }
        ],
        speed: {
            land: 10,
            fly: {
                base: 80,
                maneuverability: 'average'
            }
        },
        senses: [
            1
        ]
    },
    'Giant Muckdweller': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 20,
            swim: 60
        },
        senses: [
            1, 7
        ]
    },
    'Girallon': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 4, special: ['Rend'] }
        ],
        speed: {
            land: 40,
            climb: 40
        },
        senses: [
            1, 7, 14
        ],
        effect: {
            'Rend': { note: 'Rend if all claws hit, added to last claw damage. [[/d sizeRoll(1, 4, @size, 5) # Rend damage added to second claw]]{{Roll Rend Damage}}' }
        }
    },
    'Glacier Toad': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Grab'], nonCrit: { formula: '1d6', type: { values: ['cold'], custom: '' } } }
        ],
        speed: {
            land: 30,
            swim: 15
        },
        senses: [
            1, 14
        ],
        di: [
            'cold'
        ],
        dv: [
            'fire'
        ]
    },
    'Gnoph-Keh': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 8, count: 1, conditionals: ['PowerfulCharge'] },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 4 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 7
        ],
        di: [
            'cold'
        ],
        dv: [
            'fire'
        ],
        effect: {
            'PowerfulCharge': { default: false, name: 'PowerfulCharge', modifiers: [{ formula: '2d8', target: 'damage', subTarget: 'attack_0', type: '', critical: 'nonCrit', damageType: { values: ['piercing'], custom: '' } }] },
        }
    },
    'Goezspall': {
        size: 'lg',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 4, special: ['Rend'] }
        ],
        speed: {
            land: 40,
            climb: 10,
            swim: 20
        },
        senses: [
            1, 7
        ],
        effect: {
            'Rend': { note: 'Rend if 2 claws hit, added to second claw damage. [[/d sizeRoll(1, 8, @size, 5) # Rend damage added to second claw]]{{Roll Rend Damage}}' }
        },
        eres: [
            { amount: 15, operator: true, types: ['acid', ''] },
            { amount: 15, operator: true, types: ['electric', ''] },
            { amount: 15, operator: true, types: ['sonic', ''] }
        ],
        di: [
            'cold', 'fire'
        ],
        ci: [
            'poison'
        ],
        special: [
            'NoBreath'
        ]
    },
    'Goldpebble': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['Grab', 'Poison'] }
        ],
        speed: {
            land: 30,
            swim: 30
        },
        senses: [
            1, 7, 31
        ],
        eres: [
            { amount: 10, operator: true, types: ['cold', ''] }
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Pebblefang: Bite—injury; save Fort DC 10+SL+Mod; frequency 1/day for 8 days; effect 1d3 Con damage, and when the creature fails a save, all bleed damage it takes in the following 24 hours is doubled; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Gorgon': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Hoof', diceCount: 1, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], damageAbility: '', attackType: 'none', area: '60-ft cone', templateShape: 'cone',  templateSize: '60' },
            { name: 'Trample', diceCount: 2, diceSize: 8, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }

        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7, 14
        ],
        effect: {
            'Breath': { note: 'Breath area: 60ft cone. Creatures in area petrified. Save each round. Second breath effect while petrified makes permanent', type: 'ref', saveDesc: 'Reflex avoids both', description: '<p>A gorgon can use its breath weapon once every 1d4+1 rounds to create a 60-foot cone of green gas. Those caught in the area of the gas can attempt a DC 10 + spell level + caster stat mod Fortitude save to resist the effects, but those who fail the save are immediately petrified. This petrification is temporary—each round, a petrified creature can attempt a new Fortitude save to recover from the petrification as long as it is not caught within the area of effect of the gorgon\'s breath weapon a second time while petrified. A creature exposed to the gorgon\'s breath a second time while already petrified becomes permanently petrified, and can no longer attempt to make additional Fortitude saves to recover naturally.</p>' },
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Gray Render': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 2, special: ['Grab', 'Rend'] }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7, 14
        ],
        effect: {
            'Rend': { note: 'Rend if 2 claws hit, added to second claw damage. [[/d sizeRoll(1, 8, @size, 5) # Rend damage added to second claw]]{{Roll Rend Damage}}' }
        }
    },
    'Griffon': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Talon', diceCount: 1, diceSize: 6, count: 2, special: ['Grab'] }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7, 14
        ],
        special: [
            'Pounce', 'Rake2Talons'
        ]
    },
    'Gynosphinx': {
        size: 'lg',
        attacks: [
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 40,
            fly: {
                base: 60,
                maneuverability: 'poor'
            }
        },
        senses: [
            1, 7
        ],
        special: [
            'Pounce', 'Rake2Claws'
        ]
    },
    'Hieracosphinx': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 10, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 30,
            fly: {
                base: 60,
                maneuverability: 'poor'
            }
        },
        senses: [
            1, 7, 14
        ],
        special: [
            'Pounce'
        ]
    },
    'Hippocampus': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 },
            { name: 'TailSlap', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 5,
            swim: 60
        },
        senses: [
            1, 7, 14
        ]
    },
    'Hippogriff': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 40,
            fly: {
                base: 100,
                maneuverability: 'average'
            }
        },
        senses: [
            1, 7, 14
        ]
    },
    'Hodag': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2 },
            { name: 'TailSlap', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 30,
            burrow: 15
        },
        senses: [
            1, 7, 14
        ],
        special: [
            'Ferocity'
        ]
    },
    'Juvenile Rukh': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'Talon', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 20,
            fly: {
                base: 40,
                maneuverability: 'poor'
            }
        },
        senses: [
            1
        ]
    },
    'Kamadan': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 3, count: 2 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], damageAbility: '', attackType: 'none', area: '30-ft cone', templateShape: 'cone',  templateSize: '30' }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 7, 14
        ],
        special: [
            'Pounce'
        ],
        effect: {
            'Breath': { note: 'Breath area: 30ft cone. Creatures in area sleep for 5 minutes', type: 'fort', saveDesc: 'Fort negates', description: '<p>A kamadan can exhale a cone of gas that makes living creatures fall asleep for 5 minutes (Fortitude DC 10+SL+Mod negates). Slapping or wounding awakens a creature put to sleep by this attack, but normal noise does not. This is a sleep effect.</p>' }
        }
    },
    'Karkadann': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 8, count: 1, conditionals: ['PowerfulCharge'] },
            { name: 'Hoof', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 50
        },
        senses: [
            1, 7, 14
        ],
        ci: [
            'poison'
        ],
        eres: [
            { amount: 5, operator: true, types: ['fire', ''] }
        ],
        effect: {
            'PowerfulCharge': { default: false, name: 'PowerfulCharge', modifiers: [{ formula: '2d8', target: 'damage', subTarget: 'attack_0', type: '', critical: 'nonCrit', damageType: { values: ['piercing'], custom: '' } }] },
        }
    },
    'Kirin': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 8, count: 1, conditionals: ['PowerfulCharge'] },
            { name: 'Hoof', diceCount: 1, diceSize: 6, count: 2 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], nonCrit: { formula: '5d6', type: { values: ['fire'], custom: '' } }, damageAbility: '', attackType: 'save', area: '15-ft cone', templateShape: 'cone',  templateSize: '15' }
        ],
        speed: {
            land: 60,
            fly: {
                base: 120,
                maneuverability: 'good'
            }
        },
        senses: [
            1, 7, 14
        ],
        eres: [
            { amount: 10, operator: true, types: ['cold', ''] },
            { amount: 30, operator: true, types: ['electric', ''] },
            { amount: 10, operator: true, types: ['fire', ''] }
        ],
        effect: {
            'Breath': { note: 'Breath area: 15ft cone. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Once every 1d4 rounds. 5d6 fire damage to all creatures in 15-foot cone. Reflex save DC 10 + spell level + caster stat mod for half damage.</p>' },
            'PowerfulCharge': { default: false, name: 'PowerfulCharge', modifiers: [{ formula: '2d8', target: 'damage', subTarget: 'attack_0', type: '', critical: 'nonCrit', damageType: { values: ['piercing'], custom: '' } }] },
        }
    },
    'Kravyad': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, nonCrit: { formula: '1d6', type: { values: ['electric'], custom: '' } } },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2, nonCrit: { formula: '1d6', type: { values: ['electric'], custom: '' } } }
        ],
        speed: {
            land: 40,
            swim: 20
        },
        senses: [
            1, 7, 14
        ],
        di: [
            'electric'
        ],
        special: [
            'Ferocity'
        ]
    },
    'Lammasu': {
        size: 'lg',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'Hoof', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 30,
            fly: {
                base: 60,
                maneuverability: 'average'
            }
        },
        senses: [
            1, 7
        ],
        special: [
            'Pounce', 'Rake2Claws'
        ]
    },
    'Leucrotta': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Hoof', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 60,
            climb: 30
        },
        senses: [
            1, 7, 14
        ],
        ci: [
            'poison'
        ]
    },
    'Lion Alebrije': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 40,
            fly: {
                base: 20,
                maneuverability: 'average'
            }
        },
        senses: [
            1, 7, 14
        ],
        eres: [
            { amount: 5, operator: true, types: ['cold', ''] },
            { amount: 5, operator: true, types: ['fire', ''] }
        ],
        special: [
            'Pounce', 'Rake2Claws'
        ]
    },
    'Man-Eating Aurochs': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Gore', diceCount: 1, diceSize: 8, count: 1 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 2, diceSize: 6, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 7, 14
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Manticore': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 4, count: 2 }
        ],
        specialAttack: [
            { name: 'Spikes', diceCount: 1, diceSize: 6, count: 4, attackType: 'rwak', special: ['Spikes'], charges: 6, range: 180, increment: 1 }
        ],
        speed: {
            land: 30,
            fly: {
                base: 50,
                maneuverability: 'clumsy'
            }
        },
        senses: [
            1, 7, 14
        ]
    },
    'Mirror Serpent': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['Grab'] }
        ],
        speed: {
            land: 40,
            fly: {
                base: 60,
                maneuverability: 'good'
            },
            swim: 40
        },
        senses: [
            1, 7
        ],
        eres: [
            { amount: 5, operator: true, types: ['cold', ''] },
            { amount: 5, operator: true, types: ['electric', ''] }
        ],
        dv: [
            'sonic'
        ]
    },
    'Mngwa': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Grab'] },
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 2, special: ['Grab'] }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 7, 14
        ],
        special: [
            'Pounce', 'Rake2Claws'
        ]
    },
    'Mobat': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 20,
            fly: {
                base: 40,
                maneuverability: 'good'
            }
        },
        senses: [
            1, 25
        ]
    },
    'Muhuru': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 4, diceSize: 8, count: 1 },
            { name: 'Slam', diceCount: 2, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 40,
            swim: 20
        },
        senses: [
            1, 7
        ]
    },
    'Nue': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1, special: ['Poison'] },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7
        ],
        special: [
            'Pounce'
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d4 Strength damage; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Owlbear': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2, special: ['Grab'] }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7, 14
        ]
    },
    'Pegasus': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 },
            { name: 'Hoof', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 60,
            fly: {
                base: 120,
                maneuverability: 'average'
            }
        },
        senses: [
            1, 7, 14
        ]
    },
    'Phase Spider': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Grab', 'Poison'] }
        ],
        speed: {
            land: 40,
            climb: 20
        },
        senses: [
            1, 7
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 8 rounds; effect 1d2 Constitution damage; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Pyropiscis': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1, special: ['Grab'] }
        ],
        speed: {
            land: 10,
            burrow: 60
        },
        senses: [
            1, 7, 31
        ],
        di: [
            'fire'
        ],
        dv: [
            'cold'
        ]
    },
    'Sea Cat': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 10,
            swim: 40
        },
        senses: [
            1, 7, 14
        ],
        effect: {
            'Rend': { note: 'Rend if both claws hit, added to second claw damage. [[/d sizeRoll(1, 6, @size, 5) # Rend damage added to second claw]]{{Roll Rend Damage}}' }
        },
        special: [
            'HoldBreath'
        ]
    },
    'Seaweed Siren': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 4, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 1, diceSize: 10, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 30,
            swim: 30
        },
        senses: [
            1, 7
        ],
        eres: [
            { amount: 10, operator: true, types: ['fire', ''] },
            { amount: 10, operator: true, types: ['sonic', ''] }
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Shalkeshka': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['Grab', 'Rake'] },
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 2 }
        ],
        speed: {
            land: 30,
            burrow: 30
        },
        senses: [
            1, 7, 14, 41
        ],
        special: [
            'Rake2Claws', 'NoBreath'
        ]
    },
    'Shedu': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Hoof', diceCount: 1, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 6, count: 2 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 2, diceSize: 6, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 30,
            fly: {
                base: 60,
                maneuverability: 'good'
            }
        },
        senses: [
            1, 7
        ],
        fastHealing: 5,
        eres: [
            { amount: 10, operator: true, types: ['electric', ''] },
            { amount: 10, operator: true, types: ['fire', ''] }
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Skrik Nettle': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 10,
            fly: {
                base: 30,
                maneuverability: 'perfect'
            }
        },
        senses: [],
        effect: {
            'Poison': { note: 'Poison (Ex) Levitation poison: Bite or contact—injury; save Fort DC 10+SL+Mod; frequency 1/round for 5 rounds; effect 1 Dexterity damage + levitate (victim rises 10 feet as per the spell per failed save); cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Sleipnir': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Hoof', diceCount: 1, diceSize: 8, count: 4, conditionals: ['PowerfulCharge'] }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 1, diceSize: 8, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' },
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], charges: 3, damageAbility: '', attackType: 'none', area: '30-ft cone', templateShape: 'cone',  templateSize: '30' }
        ],
        speed: {
            land: 80
        },
        senses: [
            1, 7
        ],
        eres: [
            { amount: 10, operator: true, types: ['cold', ''] }
        ],
        di: [
            'electric'
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' },
            'Breath': { note: 'Breath area: 30ft cone. Creatures in area hit by prismatic spray spell (see spell for effect and save type)', description: '<p>As a standard action, a sleipnir can exhale a 30-foot cone of shimmering, rainbow-colored light. Every creature in the area is randomly struck by one or more beams, as a prismatic spray spell (DC 10 + spell level + caster stat mod  half or negates). The sleipnir may use this ability once every 1d6 rounds, up to 3 times per day.</p>' },
            'PowerfulCharge': { default: false, name: 'PowerfulCharge', modifiers: [{ formula: '2d8', target: 'damage', subTarget: 'attack_0', type: '', critical: 'nonCrit', damageType: { values: ['bludgeoning'], custom: '' } }] },
        }
    },
    'Spider Eater': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Sting', diceCount: 1, diceSize: 6, count: 1, special: ['Poison'] },
            { name: 'Pincer', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 30,
            fly: {
                base: 60,
                maneuverability: 'good'
            }
        },
        senses: [
            1, 7, 14
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Sting—injury; save Fort DC 10+SL+Mod; frequency 1/minute for 6 minutes; effect paralysis for 1 minute; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Stymphalidies': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Talon', diceCount: 1, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 0,
            fly: {
                base: 120,
                maneuverability: 'poor'
            }
        },
        senses: [
            1
        ],
        di: [
            'fire'
        ],
        dv: [
            'sonic'
        ]
    },
    'Taniwha': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 3, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 30,
            swim: 40
        },
        senses: [
            1, 7
        ],
        fastHealing: 5
    },
    'Tetrolimulus': {
        size: 'lg',
        attacks: [
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Sting', diceCount: 1, diceSize: 6, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 50,
            swim: 50
        },
        senses: [
            1, 7
        ],
        eres: [
            { amount: 10, operator: true, types: ['cold', ''] }
        ],
        special: [
            'Pounce'
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Tetrodotoxin: Sting—injury; save Fort DC 10+SL+Mod; frequency once; initial effect staggered for 1 round, secondary effect paralysis for 1d4 rounds; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Tizheruk': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Grab'] }
        ],
        speed: {
            land: 10,
            swim: 40
        },
        senses: [
            1, 7
        ]
    },
    'Unicorn': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 8, count: 1, conditionals: ['PowerfulCharge'] },
            { name: 'Hoof', diceCount: 1, diceSize: 3, count: 2 }
        ],
        speed: {
            land: 60
        },
        senses: [
            1, 7, 14
        ],
        ci: [
            'poison'
        ],
        effect: {
            'PowerfulCharge': { default: false, name: 'PowerfulCharge', modifiers: [{ formula: '2d8', target: 'damage', subTarget: 'attack_0', type: '', critical: 'nonCrit', damageType: { values: ['piercing'], custom: '' } }] },
        }
    },
    'Water Wraith': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['BloodDrain'] },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 4, special: ['Rend'] }
        ],
        speed: {
            land: 30,
            swim: 40
        },
        senses: [
            1, 7
        ],
        effect: {
            'BloodDrain': { note: 'Blood Drain 1d2 Con', description: '<p>The creature drains blood at the end of its turn if it grapples a foe, inflicting Constitution damage.</p>' },
            'Rend': { note: 'Rend if 2 claws hit, added to second claw damage. [[/d sizeRoll(1, 3, @size, 5) # Rend damage added to second claw]]{{Roll Rend Damage}}' }
        }
    },
    'Winter Wolf': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, nonCrit: { formula: '1d6', type: { values: ['cold'], custom: '' } }, special: ['Trip'] }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], nonCrit: { formula: '6d6', type: { values: ['cold'], custom: '' } }, damageAbility: '', attackType: 'none', area: '15-ft cone', templateShape: 'cone',  templateSize: '15' }

        ],
        speed: {
            land: 50
        },
        senses: [
            1, 7, 14
        ],
        effect: {
            'Breath': { note: 'Breath area: 15ft cone. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Once every 1d4 rounds, 15-foot cone for 6d6 cold damage (Reflex DC 10 + spell level + caster stat mod for half damage).</p>' }
        },
        di: [
            'cold'
        ],
        dv: [
            'fire'
        ]
    },
    'Black Spot': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 },
            { name: 'Spine', diceCount: 1, diceSize: 2, count: 1 }
        ],
        speed: {
            land: 20,
            swim: 20
        },
        senses: [
            1, 7, 14
        ],
        eres: [
            { amount: 5, operator: true, types: ['cold', ''] }
        ]
    },
    'Brain Mole': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 20,
            burrow: 20
        },
        senses: [
            1, 7, 14, 27
        ]
    },
    'Brain Mole Monarch': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 10,
            burrow: 20,
            fly: {
                base: 20,
                maneuverability: 'perfect'
            }
        },
        senses: [
            1, 7, 14, 29
        ]
    },
    'Carbuncle': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 2, count: 1 }
        ],
        speed: {
            land: 20
        },
        senses: [
            1
        ]
    },
    'Ceru': {
        size: 'tiny',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 3, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 20
        },
        senses: [
            1, 7
        ],
        fastHealing: 2,
        ci: [
            'poison'
        ],
        eres: [
            { amount: 5, operator: true, types: ['acid', ''] },
            { amount: 5, operator: true, types: ['electric', ''] }
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Injury—gore; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d2 con damage; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Chuspiki': {
        size: 'tiny',
        attacks: [
            { name: 'TailFan', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 30,
            fly: {
                base: 60,
                maneuverability: 'perfect'
            }
        },
        senses: [
            1, 7, 14
        ]
    },
    'Coral Capuchin': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 30,
            climb: 30,
            fly: {
                base: 40,
                maneuverability: 'good'
            },
            swim: 30
        },
        senses: [
            1, 7
        ]
    },
    'Cyphergull': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 },
            { name: 'Talon', diceCount: 1, diceSize: 3, count: 2 }
        ],
        speed: {
            land: 10,
            fly: {
                base: 50,
                maneuverability: 'good'
            },
            swim: 10
        },
        senses: [
            1, 7
        ]
    },
    'Dweomercat Cub': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 2, count: 2 }
        ],
        speed: {
            land: 20
        },
        senses: [
            1, 7
        ],
        special: [
            'Pounce', 'Rake2Claws'
        ]
    },
    'Galluvix': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 30,
            fly: {
                base: 20,
                maneuverability: 'clumsy'
            }
        },
        senses: [
            1, 7
        ]
    },
    'Nehushtan': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 30,
            climb: 15
        },
        senses: [
            1, 7
        ],
        ci: [
            'poison'
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Injury—bite; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d4 fire damage; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Ostovite': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 2, count: 1, nonCrit: { formula: '1d6', type: { values: ['acid'], custom: '' } } }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7
        ],
        di: [
            'cold'
        ]
    },
    'Ratling': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 30,
            burrow: 10,
            climb: 20,
            swim: 30
        },
        senses: [
            1, 7
        ],
        ci: [
            'poison'
        ]
    },
    'Sin Seeker': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 20,
            fly: {
                base: 50,
                maneuverability: 'average'
            }
        },
        senses: [
            1
        ]
    },
    'Skvader': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 40,
            fly: {
                base: 40,
                maneuverability: 'poor'
            }
        },
        senses: [
            1, 7
        ]
    },
    'Stirge': {
        size: 'tiny',
        attacks: [
            { name: 'Touch', diceCount: 0, diceSize: 0, count: 1, special: ['BloodDrain'] }
        ],
        speed: {
            land: 10,
            fly: {
                base: 40,
                maneuverability: 'average'
            }
        },
        senses: [
            1, 7, 14
        ],
        effect: {
            'BloodDrain': { note: 'Blood Drain 1 Con', description: '<p>The creature drains blood at the end of its turn if it grapples a foe, inflicting Constitution damage.</p>' }
        }
    },
    'Sun Falcon': {
        size: 'tiny',
        attacks: [
            { name: 'Talon', diceCount: 1, diceSize: 3, count: 2, nonCrit: { formula: '1d6', type: { values: ['fire'], custom: '' } } }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], nonCrit: { formula: '3d6', type: { values: ['fire'], custom: '' } }, damageAbility: '', attackType: 'none', area: '30-ft line', templateShape: 'ray',  templateSize: '30' }

        ],
        speed: {
            land: 10,
            fly: {
                base: 60,
                maneuverability: 'good'
            }
        },
        senses: [
            1, 7
        ],
        di: [
            'fire'
        ],
        dv: [
            'cold'
        ],
        effect: {
            'Breath': { note: 'Breath area: 30ft line. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Once every 1d4 rounds, 30-foot line for 3d6 fire damage (Reflex DC 10 + spell level + caster stat mod for half damage).</p>' }
        }

    },
    'Wolpertinger': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 },
            { name: 'Gore', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 40,
            fly: {
                base: 40,
                maneuverability: 'average'
            }
        },
        senses: [
            1, 7
        ]
    },
    'Xiao': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 },
            { name: 'Slam', diceCount: 1, diceSize: 3, count: 2 }
        ],
        speed: {
            land: 30,
            fly: {
                base: 30,
                maneuverability: 'good'
            }
        },
        senses: [
            1, 7, 14
        ]
    },
    'Zoog': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 },
            { name: 'Slam', diceCount: 1, diceSize: 2, count: 2 }
        ],
        speed: {
            land: 30,
            climb: 30
        },
        senses: [
            1, 14
        ]
    },
    'Abaia': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 3, diceSize: 6, count: 1, special: ['Constrict', 'Grab'] },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 20,
            swim: 80
        },
        senses: [
            1, 7
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Bite' }
        }
    },
    'Akhlut': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 4, diceSize: 8, count: 1, special: ['Grab'], nonCrit: { formula: '4d6', type: { values: ['cold'], custom: '' } } }
        ],
        speed: {
            land: 20,
            swim: 80
        },
        senses: [
            1, 7, 14
        ],
        di: [
            'cold'
        ],
        dv: [
            'fire'
        ],
        special: [
            'HoldBreath'
        ]
    },
    'Amarok': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 3, diceSize: 6, count: 1, special: ['Grab', 'Trip'] }
        ],
        speed: {
            land: 50
        },
        senses: [
            1, 7, 14, 40
        ]
    },
    'Ankhrav': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Grab'], nonCrit: { formula: '2d6', type: { values: ['acid'], custom: '' } } },
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 2 }
        ],
        speed: {
            land: 40,
            burrow: 30
        },
        senses: [
            1, 7
        ]
    },
    'Behir': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Constrict', 'Grab'] },
            { name: 'Rake6Claws', diceCount: 1, diceSize: 4, count: 6, img: 'systems/pf1/icons/skills/blood_06.jpg', type: ['bludgeoning', 'slashing'],  primaryAttack: true }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], nonCrit: { formula: '7d6', type: { values: ['electric'], custom: '' } }, damageAbility: '', attackType: 'none', area: '20-ft line', templateShape: 'ray',  templateSize: '20' }
        ],
        speed: {
            land: 40,
            climb: 20
        },
        senses: [
            1, 7
        ],
        di: [
            'electric'
        ],
        effect: {
            'Breath': { note: 'Breath area: 20ft line. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Once every 1d4 rounds, 20-foot line for 3d6 fire damage (Reflex DC 10 + spell level + caster stat mod for half damage).</p>' },
            'Constrict': { note: 'Constrict: Same damage as Bite' }
        },
        special: [
            'Rake6Claws'
        ]
    },
    'Bolla': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 4, diceSize: 8, count: 1, special: ['Grab'] },
            { name: 'TailSlap', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 40,
            burrow: 30
        },
        senses: [
            1, 7
        ],
        eres: [
            { amount: 20, operator: true, types: ['acid', ''] },
            { amount: 20, operator: true, types: ['electric', ''] }
        ]
    },
    'Bulette': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 40,
            burrow: 20
        },
        senses: [
            1, 7, 14, 32
        ]
    },
    'Cherufe': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 50,
            swim: 30
        },
        senses: [
            1, 7
        ],
        di: [
            'fire'
        ],
        dv: [
            'cold'
        ]
    },
    'Corbayrant': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1, special: ['Grab'] },
            { name: 'Sting', diceCount: 2, diceSize: 8, count: 1, special: ['Poison'] },
            { name: 'Spine', diceCount: 2, diceSize: 6, count: 2, },
            { name: 'Spine', diceCount: 2, diceSize: 6, count: 4, attackType: 'rwak', range: 90, increment: 1 }
        ],
        speed: {
            land: 40,
            climb: 30
        },
        senses: [
            25
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Sting—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect [[/r 1d4]] Con and nauseated for 1 round; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures' }
        },
        ci: [
            'poison'
        ],
        eres: [
            { amount: 10, operator: true, types: ['fire', ''] }
        ],
        dv: [
            'cold'
        ]
    },
    'Estuarine Worm (Ahket)': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1, special: ['Grab', 'Constrict'] },
            { name: 'TailSlap', diceCount: 2, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 30,
            burrow: 20,
            swim: 20
        },
        senses: [
            1, 7, 29
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Bite' }
        },
        eres: [
            { amount: 10, operator: true, types: ['acid', ''] },
            { amount: 10, operator: true, types: ['fire', ''] }
        ]
    },
    'Feeder in the Depths': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 0,
            swim: 80
        },
        senses: [
            1, 7, 14, 21
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Bite' }
        },
        eres: [
            { amount: 20, operator: true, types: ['cold', ''] }
        ]
    },
    'Feranth': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Gore', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 50,
            burrow: 30
        },
        senses: [
            1, 7, 33
        ],
        special: [
            'Ferocity'
        ]
    },
    'Frost Worm': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 4, diceSize: 10, count: 1, nonCrit: { formula: '4d6', type: { values: ['cold'], custom: '' } } }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '15d6', type: { values: ['cold'], custom: '' } }, damageAbility: '', area: '60-ft cone', templateShape: 'cone',  templateSize: '60' },
        ],
        speed: {
            land: 30,
            burrow: 10
        },
        senses: [
            1, 7
        ],
        di: [
            'cold'
        ],
        dv: [
            'fire'
        ],
        effect: {
            'Breath': { note: 'Breath area: 60ft cone. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once per hour.</p>' }
        }
    },
    'Furcifer': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Tongue', diceCount: 0, diceSize: 0, count: 1, special: ['Grab'], attackType: 'rwak', range: 25 }
        ],
        speed: {
            land: 40,
            climb: 40
        },
        senses: [
            1, 7, 21
        ],
        dv: [
            'cold'
        ],
        effect: {
            'Pull': { note: 'Tongue - Combat Maneuver pull 10 ft', description: '<p><strong>Pull (Ex)</strong> A creature with this ability can choose to make a free combat maneuver check with a successful attack. If successful, this check pulls a creature closer. The distance pulled is set by this ability. The type of attack that causes the pull and the distance pulled are included in the creature\'s description. This ability only works on creatures of a size equal to or smaller than the pulling creature. Creatures pulled in this way do not provoke attacks of opportunity and stop if the pull would move them into a solid object or creature.</p>' }
        }
    },
    'Gargiya': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 3, diceSize: 6, count: 1, special: ['Constrict', 'Grab'] },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '15d6', type: { values: ['cold'], custom: '' } }, damageAbility: '', area: '60-ft cone', templateShape: 'cone',  templateSize: '60' },
        ],
        speed: {
            land: 20,
            swim: 50
        },
        senses: [
            1, 7
        ],
        di: [
            'fire'
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Bite' }
        },
    },
    'Giant Owl': {
        size: 'huge',
        attacks: [
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 10,
            fly: {
                base: 60,
                maneuverability: 'average'
            }
        },
        senses: [
            1
        ]
    },
    'Gigas Clam': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 2 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 1, diceSize: 8, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 20,
            swim: 60
        },
        senses: [
            1, 7
        ],
        ci: [
            'poison'
        ],
        special: [
            'Jet300'
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Grisantian Lion': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 3, diceSize: 6, count: 1, special: ['Grab'] },
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 2 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 7, 14
        ],
        ci: [
            'poison'
        ],
        eres: [
            { amount: 10, operator: true, types: ['fire', ''] }
        ],
        special: [
            'Pounce', 'Rake2Claws'
        ]
    },
    'Hungerer': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 2 }
        ],
        speed: {
            land: 10,
            fly: {
                base: 60,
                maneuverability: 'good'
            }
        },
        senses: [
            1, 10
        ],
        ci: [
            'poison'
        ],
        eres: [
            { amount: 10, operator: true, types: ['electric', ''] },
            { amount: 10, operator: true, types: ['fire', ''] }
        ]
    },
    'Hydra': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 20,
            swim: 20
        },
        senses: [
            1, 7, 14
        ],
        fastHealing: 5,
        special: [
            'Pounce'
        ]
    },
    'Jubjub Bird': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 3, diceSize: 6, count: 1, special: ['Grab'] },
            { name: 'Talons', diceCount: 1, diceSize: 8, count: 2 }
        ],
        speed: {
            land: 50,
            fly: {
                base: 20,
                maneuverability: 'poor'
            }
        },
        senses: [
            1, 7, 14
        ],
        fastHealing: 10,
        di: [
            'acid'
        ]
    },
    'Juggernaut Beetle': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 4, diceSize: 10, count: 1 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 2, diceSize: 8, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' },
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '8d6', type: { values: ['acid'], custom: '' } }, damageAbility: '', area: '60-ft cone', templateShape: 'cone',  templateSize: '60' }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 11
        ],
        di: [
            'acid'
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' },
            'Breath': { note: 'Breath area: 60ft cone. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        }
    },
    'Kokogiak': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Pull'] },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 6 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '8d6', type: { values: ['cold'], custom: '' } }, damageAbility: '', area: '60-ft cone', templateShape: 'cone',  templateSize: '60' }
        ],
        speed: {
            land: 40,
            burrow: 20,
            climb: 20,
            swim: 20
        },
        senses: [
            1, 7
        ],
        di: [
            'cold'
        ],
        effect: {
            'Pull': { note: 'Bite - Combat Maneuver pull 10 ft', description: '<p><strong>Pull (Ex)</strong> A creature with this ability can choose to make a free combat maneuver check with a successful attack. If successful, this check pulls a creature closer. The distance pulled is set by this ability. The type of attack that causes the pull and the distance pulled are included in the creature\'s description. This ability only works on creatures of a size equal to or smaller than the pulling creature. Creatures pulled in this way do not provoke attacks of opportunity and stop if the pull would move them into a solid object or creature.</p>' },
            'Breath': { note: 'Breath area: 60ft cone. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds.  Any creature damaged by this attack must then succeed at a Fortitude save or become fatigued (or exhausted if it was already fatigued).</p>' }
        }
    },
    'Legendary Chimera': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1, special: ['Grab'] },
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'Gore', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '13d8', type: { values: ['fire'], custom: '' } }, damageAbility: '', area: '60-ft cone', templateShape: 'cone',  templateSize: '60' }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7, 14
        ],
        di: [
            'fire'
        ],
        ci: [
            'poison'
        ],
        effect: {
            'Breath': { note: 'Breath area: 60ft cone. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds.</p>' }
        }
    },
    'Leng Spider': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Poison'] },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 6 }
        ],
        specialAttack: [
            { name: 'Web', diceCount: 0, diceSize: 0, count: 1, special: ['Touch', 'Web'], attackType: 'rwak', range: 10, increment: 5, charges: 8, claw: false }
        ],
        speed: {
            land: 40,
            climb: 40
        },
        senses: [
            1, 7, 32
        ],
        di: [
            'cold'
        ],
        ci: [
            'poison'
        ],
        fastHealing: 10,
        effect: {
            'Poison': { note: 'Poison (Ex) - Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d4 Con plus confusion 1 round; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures' },
            'Web': { note: 'Web: Touch attack to entangle up to one size category higher, escaped with escape artist or burst with strength. DC 10+SL+Mod.', description: '<p>Creatures with the web ability can use webs to support themselves and up to one additional creature of the same size. In addition, such creatures can throw a web up to eight times per day. This is similar to an attack with a net but has a maximum range of 50 feet, with a range increment of 10 feet, and is effective against targets up to one size category larger than the web spinner. An entangled creature can escape with a successful Escape Artist check or burst the web with a Strength check. Both are standard actions with a DC equal to 10 + Spell Level + Caster Stat Mod. Attempts to burst a web by those caught in it take a -4 penalty.</p><p>Web spinners can create sheets of sticky webbing up to three times their size. They usually position these sheets to snare flying creatures but can also try to trap prey on the ground. Approaching creatures must succeed on a DC 20 Perception check to notice a web; otherwise they stumble into it and become trapped as though by a successful web attack. Attempts to escape or burst the webbing gain a +5 bonus if the trapped creature has something to walk on or grab while pulling free. Each 5-foot-square section of web has a number of hit points equal to the Hit Dice of the creature that created it ([[@attributes.hd.total]])and DR 5/—.</p><p>A creature can move across its own web at its climb speed and can pinpoint the location of any creature touching its web.</p>' }
        }
    },
    'Lukwata': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 4, diceSize: 10, count: 1, special: ['Grab'] }
        ],
        speed: {
            swim: 40
        },
        senses: [
            1, 7, 14
        ]
    },
    'Makara Vahana': {
        size: 'huge',
        attacks: [
            { name: 'Gore', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 70,
            swim: 70
        },
        senses: [
            1, 7, 14
        ],
        eres: [
            { amount: 10, operator: true, types: ['acid', ''] },
            { amount: 10, operator: true, types: ['cold', ''] },
            { amount: 10, operator: true, types: ['electric', ''] },
            { amount: 10, operator: true, types: ['fire', ''] }
        ]
    },
    'Mapinguari': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 10, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2, special: ['Rend'] }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 7
        ],
        effect: {
            'Rend': { note: 'Rend if both claws hit, added to second claw damage. [[/d sizeRoll(1, 6, @size, 6) # Rend damage added to second claw]]{{Roll Rend Damage}}' }
        }
    },
    'Mobogo': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'Tongue', diceCount: 1, diceSize: 6, count: 1, special: ['Grab', 'Pull'] }
        ],
        speed: {
            land: 30,
            fly: {
                base: 30,
                maneuverability: 'poor'
            },
            swim: 40
        },
        senses: [
            1, 7
        ],
        effect: {
            'Pull': { note: 'Bite - Combat Maneuver pull 10 ft', description: '<p><strong>Pull (Ex)</strong> A creature with this ability can choose to make a free combat maneuver check with a successful attack. If successful, this check pulls a creature closer. The distance pulled is set by this ability. The type of attack that causes the pull and the distance pulled are included in the creature\'s description. This ability only works on creatures of a size equal to or smaller than the pulling creature. Creatures pulled in this way do not provoke attacks of opportunity and stop if the pull would move them into a solid object or creature.</p>' }
        }
    },
    'Myrmecoleon': {
        size: 'huge',
        attacks: [
            { name: 'Mandibles', diceCount: 4, diceSize: 8, count: 1, special: ['Grab', 'BloodDrain', 'Constrict'] }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 2, diceSize: 8, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 30,
            burrow: 20,
            climb: 20
        },
        senses: [
            1, 7
        ],
        di: [
            'acid'
        ],
        effect: {
            'BloodDrain': { note: 'Blood Drain 1d2 Con', description: '<p>The creature drains blood at the end of its turn if it grapples a foe, inflicting Constitution damage.</p>' },
            'Constrict': { note: 'Constrict: Same damage as mandibles' },
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Remorhaz': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 3, diceSize: 6, count: 1, special: ['Grab'] }
        ],
        speed: {
            land: 30,
            burrow: 20
        },
        senses: [
            1, 7, 32
        ],
        di: [
            'cold', 'fire'
        ]
    },
    'Seps': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 3, diceSize: 8, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7, 14
        ],
        di: [
            'acid'
        ],
        ci: [
            'poison'
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 10 rounds; effect [[/d 1d8]] acid and [[/r 1d4]] Con drain; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Shantak': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Talons', diceCount: 1, diceSize: 8, count: 2, special: ['Grab'] }
        ],
        speed: {
            land: 20,
            fly: {
                base: 80,
                maneuverability: 'average'
            }
        },
        senses: [
            1, 7
        ],
        di: [
            'cold'
        ],
        special: [
            'NoBreath'
        ]
    },
    'Skrimsl': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 4, diceSize: 6, count: 1, nonCrit: { formula: '2d6', type: { values: ['electric'], custom: '' } }, special: ['Grab'] },
            { name: 'TailSlap', diceCount: 2, diceSize: 10, count: 1, nonCrit: { formula: '2d6', type: { values: ['electric'], custom: '' } } }
        ],
        speed: {
            land: 20,
            swim: 50
        },
        senses: [
            1, 7
        ],
        di: [
            'cold', 'electric'
        ],
        eres: [
            { amount: 20, operator: true, types: ['fire', ''] }
        ]
    },
    'Star Monarch': {
        size: 'huge',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 2, special: ['Grab'] },
            { name: 'Tail', diceCount: 2, diceSize: 6, count: 1, special: ['Nonlethal'] },
            { name: 'Rake4Claws', diceCount: 1, diceSize: 6, count: 4, img: 'systems/pf1/icons/skills/blood_06.jpg', type: ['bludgeoning', 'slashing'],  primaryAttack: true }
        ],
        speed: {
            land: 30,
            fly: {
                base: 80,
                maneuverability: 'average'
            }
        },
        senses: [
            1, 7
        ],
        di: [
            'cold'
        ],
        special: [
            'Rake4Claws', 'NoBrea'
        ]
    },
    'Steam Hog': {
        size: 'huge',
        attacks: [
            { name: 'Gore', diceCount: 2, diceSize: 6, count: 1, nonCrit: { formula: '1d6', type: { values: ['fire'], custom: '' } } },
            { name: 'Hoof', diceCount: 1, diceSize: 8, count: 2 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 1, diceSize: 8, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 30,
            burrow: 10
        },
        senses: [
            1, 7, 14
        ],
        eres: [
            { amount: 15, operator: true, types: ['fire', ''] }
        ],
        special: [
            'Ferocity'
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Storm Aurochs': {
        size: 'huge',
        attacks: [
            { name: 'Gore', diceCount: 2, diceSize: 8, count: 1, conditionals: ['PowerfulCharge'] }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 3, diceSize: 8, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman', nonCrit: { formula: '3d6', type: { values: ['sonic'], custom: '' } } }
        ],
        speed: {
            land: 50
        },
        senses: [
            1, 7, 14
        ],
        di: [
            'electric', 'sonic'
        ],
        effect: {
            'PowerfulCharge': { default: false, name: 'PowerfulCharge', modifiers: [{ formula: '4d8', target: 'damage', subTarget: 'attack_0', type: '', critical: 'nonCrit', damageType: { values: ['piercing'], custom: '' } }, { formula: '3d6', target: 'damage', subTarget: 'attack_0', type: '', critical: 'nonCrit', damageType: { values: ['electric'], custom: '' } }] },
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Thrasfyr': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 4 },
            { name: 'Gore', diceCount: 2, diceSize: 6, count: 1, conditionals: ['PowerfulCharge'] }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], nonCrit: { formula: '20d8', type: { values: ['fire'], custom: '' } }, damageAbility: '', attackType: 'save', area: '80-ft cone', templateShape: 'cone',  templateSize: '80' }
        ],
        speed: {
            land: 50,
            climb: 50
        },
        senses: [
            1, 11
        ],
        di: [
            'fire', 'sonic'
        ],
        dv: [
            'cold'
        ],
        eres: [
            { amount: 30, operator: true, types: ['electric', ''] }
        ],
        effect: {
            'PowerfulCharge': { default: false, name: 'PowerfulCharge', modifiers: [{ formula: '4d8', target: 'damage', subTarget: 'attack_0', type: '', critical: 'nonCrit', damageType: { values: ['piercing'], custom: '' } }] },
            'Breath': { note: 'Breath area: 80ft cone. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Once every 1d4 rounds. Fire damage to all creatures in 80-foot cone. Reflex save DC 10 + spell level + caster stat mod for half damage.</p>' }
        }
    },
    'Ursikka': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 2 }
        ],
        speed: {
            land: 40,
            burrow: 20
        },
        senses: [
            1, 7, 14, 29
        ],
        eres: [
            { amount: 20, operator: true, types: ['cold', ''] }
        ],
        special: [
            'Ferocity'
        ]
    },
    'Veldenar': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Grab'] },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 20,
            fly: {
                base: 30,
                maneuverability: 'perfect'
            }
        },
        senses: [
            1, 7
        ],
        di: [
            'cold'
        ],
        eres: [
            { amount: 10, operator: true, types: ['electric', ''] }
        ]
    },
    'Vorvorak': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 40,
            climb: 20,
            swim: 40
        },
        senses: [
            1, 7
        ],
        ci: [
            'poison'
        ],
        eres: [
            { amount: 10, operator: true, types: ['electric', ''] }
        ],
        special: [
            'HoldBreath'
        ]
    },
    'Water Orm': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 4, diceSize: 6, count: 1, special: ['Grab'] },
            { name: 'TailSlap', diceCount: 2, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 20,
            swim: 50
        },
        senses: [
            1, 11
        ],
        di: [
            'cold'
        ],
        eres: [
            { amount: 20, operator: true, types: ['fire', ''] }
        ]
    },
    'Xanthos': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Hoof', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 60
        },
        senses: [
            1, 11
        ],
        di: [
            'cold'
        ],
        eres: [
            { amount: 30, operator: true, types: ['electric', ''] },
            { amount: 30, operator: true, types: ['fire', ''] }
        ],
        special: [
            'HoldBreath'
        ]
    },
    'Yaoguai': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Tentacle', diceCount: 1, diceSize: 8, count: 1, special: ['Constrict', 'Grab'] }
        ],
        speed: {
            land: 50,
            climb: 50
        },
        senses: [
            1, 7
        ],
        fastHealing: 5,
        effect: {
            'Constrict': { note: 'Constrict: [[/d 1d6]]' }
        }
    },
    'Ypotryll': {
        size: 'huge',
        attacks: [
            { name: 'Gore', diceCount: 4, diceSize: 8, count: 1 },
            { name: 'Hoof', diceCount: 2, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 2, diceSize: 8, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 60
        },
        senses: [
            1, 7, 14
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Yrthak': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 2 }
        ],
        speed: {
            land: 20,
            fly: {
                base: 60,
                maneuverability: 'average'
            }
        },
        senses: [
            39
        ],
        di: [
            'sonic'
        ]
    },
    'Pipefox': {
        size: 'dim',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 2, count: 2 }
        ],
        speed: {
            land: 30,
            climb: 20
        },
        senses: [
            1, 7
        ]
    },
    'Huge Air Elemental': {
        size: 'huge',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 2 }
        ],
        specialAttack: [
            { name: 'Whirlwind', diceCount: 2, diceSize: 6, special: ['Whirlwind'], type: ['bludgeoning'], attackType: 'save' }
        ],
        speed: {
            fly: {
                base: 100,
                maneuverability: 'perfect'
            }
        },
        senses: [
            7
        ],
        effect: {
            'Whirlwind': { note: '10-50 ft. DC 10+SL+Mod. One save to avoid damage, second save to avoid being lifted', type: 'ref', saveDesc: 'Reflex avoids', description: '<p>Some creatures can transform themselves into whirlwinds and remain in that form for up to 1 round for every 2 HD they have. If the creature has a fly speed, it can continue to fly at that same speed while in whirlwind form; otherwise it gains a fly speed equal to its base land speed (average maneuverability) while in whirlwind form.</p><p>The whirlwind is always 5 feet wide at its base, but its height and width at the top vary from creature to creature (minimum 10 feet high). A whirlwind\'s width at its peak is always equal to half of its height. The creature controls the exact height, but it must be at least 10 feet high.</p><p>The whirlwind form does not provoke attacks of opportunity, even if the creature enters the space another creature occupies. Another creature might be caught in the whirlwind if it touches or enters the whirlwind, or if the whirlwind moves into or through the creature\'s space. A creature in whirlwind form cannot make its normal attacks and does not threaten the area around it.</p><p>Creatures one or more size categories smaller than the whirlwind might take damage when caught in the whirlwind (generally damage equal to the monster\'s slam attack for a creature of its size) and may be lifted into the air. An affected creature must succeed on a Reflex save (DC 10 + half monster\'s HD + the monster\'s Strength modifier) when it comes into contact with the whirlwind or take damage as if it were hit by the whirlwind creature\'s slam attack. It must also succeed on a second Reflex save or be picked up bodily and held suspended in the powerful winds, automatically taking the indicated damage each round. A creature that can fly is allowed a Reflex save each round to escape the whirlwind. The creature still takes damage but can leave if the save is successful.</p><p>Creatures trapped in the whirlwind cannot move except to go where the whirlwind carries them or to escape the whirlwind. Trapped creatures can otherwise act normally, but must succeed on a concentration check (DC 15 + spell level) to cast a spell. Creatures caught in the whirlwind take a -4 penalty to Dexterity and a -2 penalty on attack rolls. The whirlwind can have only as many creatures trapped inside at one time as will fit inside the whirlwind\'s volume. The whirlwind can eject any carried creatures whenever it wishes as a free action, depositing them in its space.</p><p>If the whirlwind\'s base touches the ground, it creates a swirling cloud of debris. This cloud is centered on the creature and has a diameter equal to half the whirlwind\'s height. The cloud obscures all vision, including darkvision, beyond 5 feet. Creatures 5 feet away have concealment, while those farther away have total concealment. Those caught in the cloud of debris must succeed on a concentration check (DC 15 + spell level) to cast a spell.</p>' }
        },
        ci: [
            'bleed', 'critical', 'sneakAttack'
        ],
        dr: [
            { amount: 5, operator: true, types: ['', ''] }
        ]
    },
    'Huge Earth Elemental': {
        size: 'huge',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 8, count: 2 }
        ],
        speed: {
            land: 20,
            burrow: 20
        },
        senses: [
            7
        ],
        special: [
            'EarthGlide'
        ],
        ci: [
            'bleed', 'critical', 'sneakAttack'
        ],
        dr: [
            { amount: 5, operator: true, types: ['', ''] }
        ]
    },
    'Huge Fire Elemental': {
        size: 'huge',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 2, special: ['Burn'] }
        ],
        specialAttack: [
            { name: 'Burn', diceCount: 0, diceSize: 0, count: 1, type: ['fire'], attackType: 'save', special: ['Burn'], damageAbility: '', nonCrit: { formula: '2d6', type: { values: ['fire'], custom: '' } } }
        ],
        speed: {
            land: 60
        },
        senses: [
            7
        ],
        effect: {
            'Burn': { note: 'Burns for 1d4 rounds. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex avoids', description: 'A fire elemental deals fire damage in addition to damage dealt on a successful hit in melee. Those affected by the burn ability must also succeed on a Reflex save (DC 10 + Spell Level + Caster Stat Mod) or catch fire, taking the listed damage for an additional 1d4 rounds at the start of its turn. A burning creature can attempt a new save as a full-round action. Dropping and rolling on the ground grants a +4 bonus on this save. Creatures that hit a burning creature with natural weapons or unarmed attacks take fire damage as though hit by the burning creature and must make a Reflex save to avoid catching on fire. See Burn for more details.' }
        },
        special: [
            'Burn'
        ],
        ci: [
            'bleed', 'critical', 'sneakAttack'
        ],
        dr: [
            { amount: 5, operator: true, types: ['', ''] }
        ],
        eres: [
            { amount: 20, operator: true, types: ['fire', ''] }
        ],
        dv: [
            'cold'
        ]
    },
    'Huge Water Elemental': {
        size: 'huge',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 2 }
        ],
        specialAttack: [
            { name: 'Vortex', diceCount: 0, diceSize: 0, special: ['Vortex'], type: ['bludgeoning'], attackType: 'save', damageAbility: '', nonCrit: { formula: '2d6', type: { values: ['bludgeoning'], custom: '' } } }
        ],
        speed: {
            land: 20,
            swim: 90
        },
        senses: [
            7
        ],
        effect: {
            'Vortex': { note: '10-60 ft. DC 10+SL+Mod. One save to avoid damage, second save to avoid being lifted', type: 'ref', saveDesc: 'Reflex avoids', description: '<p>A water elemental can create a whirlpool as a standard action, at will. This ability functions identically to the whirlwind special attack, but can only form underwater and cannot leave the water.</p><p>Some creatures can transform themselves into whirlwinds and remain in that form for up to 1 round for every 2 HD they have. If the creature has a fly speed, it can continue to fly at that same speed while in whirlwind form; otherwise it gains a fly speed equal to its base land speed (average maneuverability) while in whirlwind form.</p><p>The whirlwind is always 5 feet wide at its base, but its height and width at the top vary from creature to creature (minimum 10 feet high). A whirlwind\'s width at its peak is always equal to half of its height. The creature controls the exact height, but it must be at least 10 feet high.</p><p>The whirlwind form does not provoke attacks of opportunity, even if the creature enters the space another creature occupies. Another creature might be caught in the whirlwind if it touches or enters the whirlwind, or if the whirlwind moves into or through the creature\'s space. A creature in whirlwind form cannot make its normal attacks and does not threaten the area around it.</p><p>Creatures one or more size categories smaller than the whirlwind might take damage when caught in the whirlwind (generally damage equal to the monster\'s slam attack for a creature of its size) and may be lifted into the air. An affected creature must succeed on a Reflex save (DC 10 + half monster\'s HD + the monster\'s Strength modifier) when it comes into contact with the whirlwind or take damage as if it were hit by the whirlwind creature\'s slam attack. It must also succeed on a second Reflex save or be picked up bodily and held suspended in the powerful winds, automatically taking the indicated damage each round. A creature that can fly is allowed a Reflex save each round to escape the whirlwind. The creature still takes damage but can leave if the save is successful.</p><p>Creatures trapped in the whirlwind cannot move except to go where the whirlwind carries them or to escape the whirlwind. Trapped creatures can otherwise act normally, but must succeed on a concentration check (DC 15 + spell level) to cast a spell. Creatures caught in the whirlwind take a -4 penalty to Dexterity and a -2 penalty on attack rolls. The whirlwind can have only as many creatures trapped inside at one time as will fit inside the whirlwind\'s volume. The whirlwind can eject any carried creatures whenever it wishes as a free action, depositing them in its space.</p><p>If the whirlwind\'s base touches the ground, it creates a swirling cloud of debris. This cloud is centered on the creature and has a diameter equal to half the whirlwind\'s height. The cloud obscures all vision, including darkvision, beyond 5 feet. Creatures 5 feet away have concealment, while those farther away have total concealment. Those caught in the cloud of debris must succeed on a concentration check (DC 15 + spell level) to cast a spell.</p>' }
        },
        ci: [
            'bleed', 'critical', 'sneakAttack'
        ],
        dr: [
            { amount: 5, operator: true, types: ['', ''] }
        ]
    },
    'Large Air Elemental': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 2 }
        ],
        specialAttack: [
            { name: 'Whirlwind', diceCount: 0, diceSize: 0, special: ['Whirlwind'], type: ['bludgeoning'], attackType: 'save', damageAbility: '', nonCrit: { formula: '1d8', type: { values: ['bludgeoning'], custom: '' } } }
        ],
        speed: {
            fly: {
                base: 100,
                maneuverability: 'perfect'
            }
        },
        senses: [
            7
        ],
        effect: {
            'Whirlwind': { note: '10-40 ft. DC 10+SL+Mod. One save to avoid damage, second save to avoid being lifted', type: 'ref', saveDesc: 'Reflex avoids', description: '<p>Some creatures can transform themselves into whirlwinds and remain in that form for up to 1 round for every 2 HD they have. If the creature has a fly speed, it can continue to fly at that same speed while in whirlwind form; otherwise it gains a fly speed equal to its base land speed (average maneuverability) while in whirlwind form.</p><p>The whirlwind is always 5 feet wide at its base, but its height and width at the top vary from creature to creature (minimum 10 feet high). A whirlwind\'s width at its peak is always equal to half of its height. The creature controls the exact height, but it must be at least 10 feet high.</p><p>The whirlwind form does not provoke attacks of opportunity, even if the creature enters the space another creature occupies. Another creature might be caught in the whirlwind if it touches or enters the whirlwind, or if the whirlwind moves into or through the creature\'s space. A creature in whirlwind form cannot make its normal attacks and does not threaten the area around it.</p><p>Creatures one or more size categories smaller than the whirlwind might take damage when caught in the whirlwind (generally damage equal to the monster\'s slam attack for a creature of its size) and may be lifted into the air. An affected creature must succeed on a Reflex save (DC 10 + half monster\'s HD + the monster\'s Strength modifier) when it comes into contact with the whirlwind or take damage as if it were hit by the whirlwind creature\'s slam attack. It must also succeed on a second Reflex save or be picked up bodily and held suspended in the powerful winds, automatically taking the indicated damage each round. A creature that can fly is allowed a Reflex save each round to escape the whirlwind. The creature still takes damage but can leave if the save is successful.</p><p>Creatures trapped in the whirlwind cannot move except to go where the whirlwind carries them or to escape the whirlwind. Trapped creatures can otherwise act normally, but must succeed on a concentration check (DC 15 + spell level) to cast a spell. Creatures caught in the whirlwind take a -4 penalty to Dexterity and a -2 penalty on attack rolls. The whirlwind can have only as many creatures trapped inside at one time as will fit inside the whirlwind\'s volume. The whirlwind can eject any carried creatures whenever it wishes as a free action, depositing them in its space.</p><p>If the whirlwind\'s base touches the ground, it creates a swirling cloud of debris. This cloud is centered on the creature and has a diameter equal to half the whirlwind\'s height. The cloud obscures all vision, including darkvision, beyond 5 feet. Creatures 5 feet away have concealment, while those farther away have total concealment. Those caught in the cloud of debris must succeed on a concentration check (DC 15 + spell level) to cast a spell.</p>' }
        },
        ci: [
            'bleed', 'critical', 'sneakAttack'
        ],
        dr: [
            { amount: 5, operator: true, types: ['', ''] }
        ]
    },
    'Large Earth Elemental': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 20,
            burrow: 20
        },
        senses: [
            7
        ],
        special: [
            'EarthGlide'
        ],
        ci: [
            'bleed', 'critical', 'sneakAttack'
        ],
        dr: [
            { amount: 5, operator: true, types: ['', ''] }
        ]
    },
    'Large Fire Elemental': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 2, special: ['Burn'] }
        ],
        specialAttack: [
            { name: 'Burn', diceCount: 0, diceSize: 0, count: 1, type: ['fire'], attackType: 'save', special: ['Burn'], damageAbility: '', nonCrit: { formula: '1d8', type: { values: ['fire'], custom: '' } } }
        ],
        speed: {
            land: 50
        },
        senses: [
            7
        ],
        effect: {
            'Burn': { note: 'Burns for 1d4 rounds. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex avoids', description: 'A fire elemental deals fire damage in addition to damage dealt on a successful hit in melee. Those affected by the burn ability must also succeed on a Reflex save (DC 10 + Spell Level + Caster Stat Mod) or catch fire, taking the listed damage for an additional 1d4 rounds at the start of its turn. A burning creature can attempt a new save as a full-round action. Dropping and rolling on the ground grants a +4 bonus on this save. Creatures that hit a burning creature with natural weapons or unarmed attacks take fire damage as though hit by the burning creature and must make a Reflex save to avoid catching on fire. See Burn for more details.' }
        },
        special: [
            'Burn'
        ],
        ci: [
            'bleed', 'critical', 'sneakAttack'
        ],
        dr: [
            { amount: 5, operator: true, types: ['', ''] }
        ],
        eres: [
            { amount: 20, operator: true, types: ['fire', ''] }
        ],
        dv: [
            'cold'
        ]
    },
    'Large Water Elemental': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 2 }
        ],
        specialAttack: [
            { name: 'Vortex', diceCount: 0, diceSize: 0, special: ['Vortex'], type: ['bludgeoning'], attackType: 'save', damageAbility: '', nonCrit: { formula: '1d8', type: { values: ['bludgeoning'], custom: '' } } }
        ],
        speed: {
            land: 20,
            swim: 90
        },
        senses: [
            7
        ],
        effect: {
            'Vortex': { note: '10-40 ft. DC 10+SL+Mod. One save to avoid damage, second save to avoid being lifted', type: 'ref', saveDesc: 'Reflex avoids', description: '<p>A water elemental can create a whirlpool as a standard action, at will. This ability functions identically to the whirlwind special attack, but can only form underwater and cannot leave the water.</p><p>Some creatures can transform themselves into whirlwinds and remain in that form for up to 1 round for every 2 HD they have. If the creature has a fly speed, it can continue to fly at that same speed while in whirlwind form; otherwise it gains a fly speed equal to its base land speed (average maneuverability) while in whirlwind form.</p><p>The whirlwind is always 5 feet wide at its base, but its height and width at the top vary from creature to creature (minimum 10 feet high). A whirlwind\'s width at its peak is always equal to half of its height. The creature controls the exact height, but it must be at least 10 feet high.</p><p>The whirlwind form does not provoke attacks of opportunity, even if the creature enters the space another creature occupies. Another creature might be caught in the whirlwind if it touches or enters the whirlwind, or if the whirlwind moves into or through the creature\'s space. A creature in whirlwind form cannot make its normal attacks and does not threaten the area around it.</p><p>Creatures one or more size categories smaller than the whirlwind might take damage when caught in the whirlwind (generally damage equal to the monster\'s slam attack for a creature of its size) and may be lifted into the air. An affected creature must succeed on a Reflex save (DC 10 + half monster\'s HD + the monster\'s Strength modifier) when it comes into contact with the whirlwind or take damage as if it were hit by the whirlwind creature\'s slam attack. It must also succeed on a second Reflex save or be picked up bodily and held suspended in the powerful winds, automatically taking the indicated damage each round. A creature that can fly is allowed a Reflex save each round to escape the whirlwind. The creature still takes damage but can leave if the save is successful.</p><p>Creatures trapped in the whirlwind cannot move except to go where the whirlwind carries them or to escape the whirlwind. Trapped creatures can otherwise act normally, but must succeed on a concentration check (DC 15 + spell level) to cast a spell. Creatures caught in the whirlwind take a -4 penalty to Dexterity and a -2 penalty on attack rolls. The whirlwind can have only as many creatures trapped inside at one time as will fit inside the whirlwind\'s volume. The whirlwind can eject any carried creatures whenever it wishes as a free action, depositing them in its space.</p><p>If the whirlwind\'s base touches the ground, it creates a swirling cloud of debris. This cloud is centered on the creature and has a diameter equal to half the whirlwind\'s height. The cloud obscures all vision, including darkvision, beyond 5 feet. Creatures 5 feet away have concealment, while those farther away have total concealment. Those caught in the cloud of debris must succeed on a concentration check (DC 15 + spell level) to cast a spell.</p>' }
        },
        ci: [
            'bleed', 'critical', 'sneakAttack'
        ],
        dr: [
            { amount: 5, operator: true, types: ['', ''] }
        ]
    },
    'Medium Air Elemental': {
        size: 'med',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'Whirlwind', diceCount: 0, diceSize: 0, special: ['Whirlwind'], type: ['bludgeoning'], attackType: 'save', damageAbility: '', nonCrit: { formula: '1d6', type: { values: ['bludgeoning'], custom: '' } } }
        ],
        speed: {
            fly: {
                base: 100,
                maneuverability: 'perfect'
            }
        },
        senses: [
            7
        ],
        effect: {
            'Whirlwind': { note: '10-30 ft. DC 10+SL+Mod. One save to avoid damage, second save to avoid being lifted', type: 'ref', saveDesc: 'Reflex avoids', description: '<p>Some creatures can transform themselves into whirlwinds and remain in that form for up to 1 round for every 2 HD they have. If the creature has a fly speed, it can continue to fly at that same speed while in whirlwind form; otherwise it gains a fly speed equal to its base land speed (average maneuverability) while in whirlwind form.</p><p>The whirlwind is always 5 feet wide at its base, but its height and width at the top vary from creature to creature (minimum 10 feet high). A whirlwind\'s width at its peak is always equal to half of its height. The creature controls the exact height, but it must be at least 10 feet high.</p><p>The whirlwind form does not provoke attacks of opportunity, even if the creature enters the space another creature occupies. Another creature might be caught in the whirlwind if it touches or enters the whirlwind, or if the whirlwind moves into or through the creature\'s space. A creature in whirlwind form cannot make its normal attacks and does not threaten the area around it.</p><p>Creatures one or more size categories smaller than the whirlwind might take damage when caught in the whirlwind (generally damage equal to the monster\'s slam attack for a creature of its size) and may be lifted into the air. An affected creature must succeed on a Reflex save (DC 10 + half monster\'s HD + the monster\'s Strength modifier) when it comes into contact with the whirlwind or take damage as if it were hit by the whirlwind creature\'s slam attack. It must also succeed on a second Reflex save or be picked up bodily and held suspended in the powerful winds, automatically taking the indicated damage each round. A creature that can fly is allowed a Reflex save each round to escape the whirlwind. The creature still takes damage but can leave if the save is successful.</p><p>Creatures trapped in the whirlwind cannot move except to go where the whirlwind carries them or to escape the whirlwind. Trapped creatures can otherwise act normally, but must succeed on a concentration check (DC 15 + spell level) to cast a spell. Creatures caught in the whirlwind take a -4 penalty to Dexterity and a -2 penalty on attack rolls. The whirlwind can have only as many creatures trapped inside at one time as will fit inside the whirlwind\'s volume. The whirlwind can eject any carried creatures whenever it wishes as a free action, depositing them in its space.</p><p>If the whirlwind\'s base touches the ground, it creates a swirling cloud of debris. This cloud is centered on the creature and has a diameter equal to half the whirlwind\'s height. The cloud obscures all vision, including darkvision, beyond 5 feet. Creatures 5 feet away have concealment, while those farther away have total concealment. Those caught in the cloud of debris must succeed on a concentration check (DC 15 + spell level) to cast a spell.</p>' }
        },
        ci: [
            'bleed', 'critical', 'sneakAttack'
        ],
        dr: [
            { amount: 5, operator: true, types: ['', ''] }
        ]
    },
    'Medium Earth Elemental': {
        size: 'med',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 20,
            burrow: 20
        },
        senses: [
            7
        ],
        special: [
            'EarthGlide'
        ],
        ci: [
            'bleed', 'critical', 'sneakAttack'
        ],
        dr: [
            { amount: 5, operator: true, types: ['', ''] }
        ]
    },
    'Medium Fire Elemental': {
        size: 'med',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 6, count: 1, special: ['Burn'] }
        ],
        specialAttack: [
            { name: 'Burn', diceCount: 0, diceSize: 0, count: 1, type: ['fire'], attackType: 'save', special: ['Burn'], damageAbility: '', nonCrit: { formula: '1d6', type: { values: ['fire'], custom: '' } } }
        ],
        speed: {
            land: 50
        },
        senses: [
            7
        ],
        effect: {
            'Burn': { note: 'Burns for 1d4 rounds. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex avoids', description: 'A fire elemental deals fire damage in addition to damage dealt on a successful hit in melee. Those affected by the burn ability must also succeed on a Reflex save (DC 10 + Spell Level + Caster Stat Mod) or catch fire, taking the listed damage for an additional 1d4 rounds at the start of its turn. A burning creature can attempt a new save as a full-round action. Dropping and rolling on the ground grants a +4 bonus on this save. Creatures that hit a burning creature with natural weapons or unarmed attacks take fire damage as though hit by the burning creature and must make a Reflex save to avoid catching on fire. See Burn for more details.' }
        },
        special: [
            'Burn'
        ],
        ci: [
            'bleed', 'critical', 'sneakAttack'
        ],
        dr: [
            { amount: 5, operator: true, types: ['', ''] }
        ],
        eres: [
            { amount: 20, operator: true, types: ['fire', ''] }
        ],
        dv: [
            'cold'
        ]
    },
    'Medium Water Elemental': {
        size: 'med',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 1 }
        ],
        specialAttack: [
            { name: 'Vortex', diceCount: 0, diceSize: 0, special: ['Vortex'], type: ['bludgeoning'], attackType: 'save', damageAbility: '', nonCrit: { formula: '1d8', type: { values: ['bludgeoning'], custom: '' } } }
        ],
        speed: {
            land: 20,
            swim: 90
        },
        senses: [
            7
        ],
        effect: {
            'Vortex': { note: '10-30 ft. DC 10+SL+Mod. One save to avoid damage, second save to avoid being lifted', type: 'ref', saveDesc: 'Reflex avoids', description: '<p>A water elemental can create a whirlpool as a standard action, at will. This ability functions identically to the whirlwind special attack, but can only form underwater and cannot leave the water.</p><p>Some creatures can transform themselves into whirlwinds and remain in that form for up to 1 round for every 2 HD they have. If the creature has a fly speed, it can continue to fly at that same speed while in whirlwind form; otherwise it gains a fly speed equal to its base land speed (average maneuverability) while in whirlwind form.</p><p>The whirlwind is always 5 feet wide at its base, but its height and width at the top vary from creature to creature (minimum 10 feet high). A whirlwind\'s width at its peak is always equal to half of its height. The creature controls the exact height, but it must be at least 10 feet high.</p><p>The whirlwind form does not provoke attacks of opportunity, even if the creature enters the space another creature occupies. Another creature might be caught in the whirlwind if it touches or enters the whirlwind, or if the whirlwind moves into or through the creature\'s space. A creature in whirlwind form cannot make its normal attacks and does not threaten the area around it.</p><p>Creatures one or more size categories smaller than the whirlwind might take damage when caught in the whirlwind (generally damage equal to the monster\'s slam attack for a creature of its size) and may be lifted into the air. An affected creature must succeed on a Reflex save (DC 10 + half monster\'s HD + the monster\'s Strength modifier) when it comes into contact with the whirlwind or take damage as if it were hit by the whirlwind creature\'s slam attack. It must also succeed on a second Reflex save or be picked up bodily and held suspended in the powerful winds, automatically taking the indicated damage each round. A creature that can fly is allowed a Reflex save each round to escape the whirlwind. The creature still takes damage but can leave if the save is successful.</p><p>Creatures trapped in the whirlwind cannot move except to go where the whirlwind carries them or to escape the whirlwind. Trapped creatures can otherwise act normally, but must succeed on a concentration check (DC 15 + spell level) to cast a spell. Creatures caught in the whirlwind take a -4 penalty to Dexterity and a -2 penalty on attack rolls. The whirlwind can have only as many creatures trapped inside at one time as will fit inside the whirlwind\'s volume. The whirlwind can eject any carried creatures whenever it wishes as a free action, depositing them in its space.</p><p>If the whirlwind\'s base touches the ground, it creates a swirling cloud of debris. This cloud is centered on the creature and has a diameter equal to half the whirlwind\'s height. The cloud obscures all vision, including darkvision, beyond 5 feet. Creatures 5 feet away have concealment, while those farther away have total concealment. Those caught in the cloud of debris must succeed on a concentration check (DC 15 + spell level) to cast a spell.</p>' }
        },
        ci: [
            'bleed', 'critical', 'sneakAttack'
        ],
        dr: [
            { amount: 5, operator: true, types: ['', ''] }
        ]
    },
    'Small Air Elemental': {
        size: 'sm',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 4, count: 1 }
        ],
        specialAttack: [
            { name: 'Whirlwind', diceCount: 0, diceSize: 0, special: ['Whirlwind'], type: ['bludgeoning'], attackType: 'save', damageAbility: '', nonCrit: { formula: '1d4', type: { values: ['bludgeoning'], custom: '' } } }
        ],
        speed: {
            fly: {
                base: 100,
                maneuverability: 'perfect'
            }
        },
        senses: [
            7
        ],
        effect: {
            'Whirlwind': { note: '10-20 ft. DC 10+SL+Mod. One save to avoid damage, second save to avoid being lifted', type: 'ref', saveDesc: 'Reflex avoids', description: '<p>Some creatures can transform themselves into whirlwinds and remain in that form for up to 1 round for every 2 HD they have. If the creature has a fly speed, it can continue to fly at that same speed while in whirlwind form; otherwise it gains a fly speed equal to its base land speed (average maneuverability) while in whirlwind form.</p><p>The whirlwind is always 5 feet wide at its base, but its height and width at the top vary from creature to creature (minimum 10 feet high). A whirlwind\'s width at its peak is always equal to half of its height. The creature controls the exact height, but it must be at least 10 feet high.</p><p>The whirlwind form does not provoke attacks of opportunity, even if the creature enters the space another creature occupies. Another creature might be caught in the whirlwind if it touches or enters the whirlwind, or if the whirlwind moves into or through the creature\'s space. A creature in whirlwind form cannot make its normal attacks and does not threaten the area around it.</p><p>Creatures one or more size categories smaller than the whirlwind might take damage when caught in the whirlwind (generally damage equal to the monster\'s slam attack for a creature of its size) and may be lifted into the air. An affected creature must succeed on a Reflex save (DC 10 + half monster\'s HD + the monster\'s Strength modifier) when it comes into contact with the whirlwind or take damage as if it were hit by the whirlwind creature\'s slam attack. It must also succeed on a second Reflex save or be picked up bodily and held suspended in the powerful winds, automatically taking the indicated damage each round. A creature that can fly is allowed a Reflex save each round to escape the whirlwind. The creature still takes damage but can leave if the save is successful.</p><p>Creatures trapped in the whirlwind cannot move except to go where the whirlwind carries them or to escape the whirlwind. Trapped creatures can otherwise act normally, but must succeed on a concentration check (DC 15 + spell level) to cast a spell. Creatures caught in the whirlwind take a -4 penalty to Dexterity and a -2 penalty on attack rolls. The whirlwind can have only as many creatures trapped inside at one time as will fit inside the whirlwind\'s volume. The whirlwind can eject any carried creatures whenever it wishes as a free action, depositing them in its space.</p><p>If the whirlwind\'s base touches the ground, it creates a swirling cloud of debris. This cloud is centered on the creature and has a diameter equal to half the whirlwind\'s height. The cloud obscures all vision, including darkvision, beyond 5 feet. Creatures 5 feet away have concealment, while those farther away have total concealment. Those caught in the cloud of debris must succeed on a concentration check (DC 15 + spell level) to cast a spell.</p>' }
        },
        ci: [
            'bleed', 'critical', 'sneakAttack'
        ],
        dr: [
            { amount: 5, operator: true, types: ['', ''] }
        ]
    },
    'Small Earth Elemental': {
        size: 'sm',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 20,
            burrow: 20
        },
        senses: [
            7
        ],
        special: [
            'EarthGlide'
        ],
        ci: [
            'bleed', 'critical', 'sneakAttack'
        ],
        dr: [
            { amount: 5, operator: true, types: ['', ''] }
        ]
    },
    'Small Fire Elemental': {
        size: 'sm',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 4, count: 1, special: ['Burn'] }
        ],
        specialAttack: [
            { name: 'Burn', diceCount: 0, diceSize: 0, count: 1, type: ['fire'], attackType: 'save', special: ['Burn'], damageAbility: '', nonCrit: { formula: '1d4', type: { values: ['fire'], custom: '' } } }
        ],
        speed: {
            land: 50
        },
        senses: [
            7
        ],
        effect: {
            'Burn': { note: 'Burns for 1d4 rounds. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex avoids', description: 'A fire elemental deals fire damage in addition to damage dealt on a successful hit in melee. Those affected by the burn ability must also succeed on a Reflex save (DC 10 + Spell Level + Caster Stat Mod) or catch fire, taking the listed damage for an additional 1d4 rounds at the start of its turn. A burning creature can attempt a new save as a full-round action. Dropping and rolling on the ground grants a +4 bonus on this save. Creatures that hit a burning creature with natural weapons or unarmed attacks take fire damage as though hit by the burning creature and must make a Reflex save to avoid catching on fire. See Burn for more details.' }
        },
        special: [
            'Burn'
        ],
        ci: [
            'bleed', 'critical', 'sneakAttack'
        ],
        dr: [
            { amount: 5, operator: true, types: ['', ''] }
        ],
        eres: [
            { amount: 20, operator: true, types: ['fire', ''] }
        ],
        dv: [
            'cold'
        ]
    },
    'Small Water Elemental': {
        size: 'sm',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'Vortex', diceCount: 0, diceSize: 0, special: ['Vortex'], type: ['bludgeoning'], attackType: 'save', damageAbility: '', nonCrit: { formula: '1d6', type: { values: ['bludgeoning'], custom: '' } } }
        ],
        speed: {
            land: 20,
            swim: 90
        },
        senses: [
            7
        ],
        effect: {
            'Vortex': { note: '10-20 ft. DC 10+SL+Mod. One save to avoid damage, second save to avoid being lifted', type: 'ref', saveDesc: 'Reflex avoids', description: '<p>A water elemental can create a whirlpool as a standard action, at will. This ability functions identically to the whirlwind special attack, but can only form underwater and cannot leave the water.</p><p>Some creatures can transform themselves into whirlwinds and remain in that form for up to 1 round for every 2 HD they have. If the creature has a fly speed, it can continue to fly at that same speed while in whirlwind form; otherwise it gains a fly speed equal to its base land speed (average maneuverability) while in whirlwind form.</p><p>The whirlwind is always 5 feet wide at its base, but its height and width at the top vary from creature to creature (minimum 10 feet high). A whirlwind\'s width at its peak is always equal to half of its height. The creature controls the exact height, but it must be at least 10 feet high.</p><p>The whirlwind form does not provoke attacks of opportunity, even if the creature enters the space another creature occupies. Another creature might be caught in the whirlwind if it touches or enters the whirlwind, or if the whirlwind moves into or through the creature\'s space. A creature in whirlwind form cannot make its normal attacks and does not threaten the area around it.</p><p>Creatures one or more size categories smaller than the whirlwind might take damage when caught in the whirlwind (generally damage equal to the monster\'s slam attack for a creature of its size) and may be lifted into the air. An affected creature must succeed on a Reflex save (DC 10 + half monster\'s HD + the monster\'s Strength modifier) when it comes into contact with the whirlwind or take damage as if it were hit by the whirlwind creature\'s slam attack. It must also succeed on a second Reflex save or be picked up bodily and held suspended in the powerful winds, automatically taking the indicated damage each round. A creature that can fly is allowed a Reflex save each round to escape the whirlwind. The creature still takes damage but can leave if the save is successful.</p><p>Creatures trapped in the whirlwind cannot move except to go where the whirlwind carries them or to escape the whirlwind. Trapped creatures can otherwise act normally, but must succeed on a concentration check (DC 15 + spell level) to cast a spell. Creatures caught in the whirlwind take a -4 penalty to Dexterity and a -2 penalty on attack rolls. The whirlwind can have only as many creatures trapped inside at one time as will fit inside the whirlwind\'s volume. The whirlwind can eject any carried creatures whenever it wishes as a free action, depositing them in its space.</p><p>If the whirlwind\'s base touches the ground, it creates a swirling cloud of debris. This cloud is centered on the creature and has a diameter equal to half the whirlwind\'s height. The cloud obscures all vision, including darkvision, beyond 5 feet. Creatures 5 feet away have concealment, while those farther away have total concealment. Those caught in the cloud of debris must succeed on a concentration check (DC 15 + spell level) to cast a spell.</p>' }
        },
        ci: [
            'bleed', 'critical', 'sneakAttack'
        ],
        dr: [
            { amount: 5, operator: true, types: ['', ''] }
        ]
    },
    'Bloodplate Burster': {
        size: 'huge',
        attacks: [
            { name: 'Tentacle', diceCount: 1, diceSize: 8, count: 2 }
        ],
        speed: {
            land: 30,
            burrow: 30
        },
        senses: [],
        di: [
            'acid'
        ]
    },
    'Bramble Throne': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Vine', diceCount: 1, diceSize: 8, count: 4, primaryAttack: true, type: ['bludgeoning', 'piercing'], special: ['Grab'] }
        ],
        speed: {
            land: 10
        },
        senses: [
            1
        ]
    },
    'Canopy Creeper': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 20,
            climb: 20
        },
        senses: [
            1
        ],
        eres: [
            { amount: 10, operator: true, types: ['fire', ''] }
        ],
        di: [
            'electric'
        ],
        dv: [
            'cold'
        ]
    },
    'Corpse Lotus': {
        size: 'huge',
        attacks: [
            { name: 'Vine', diceCount: 1, diceSize: 8, count: 4, special: ['Grab', 'Constrict'] }
        ],
        speed: {
            land: 10
        },
        senses: [
            1, 7
        ],
        eres: [
            { amount: 10, operator: true, types: ['acid', ''] },
            { amount: 10, operator: true, types: ['electric', ''] }
        ],
        dr: [
            { amount: 10, operator: true, types: ['slashing', ''] }
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Vine' }
        }
    },
    'Giant Devil\'s Tooth': {
        size: 'huge',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 2 }
        ],
        speed: {
            land: 10
        },
        senses: [
            1
        ]
    },
    'Giant Flytrap': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 4, special: ['Grab'] }
        ],
        speed: {
            land: 10
        },
        senses: [
            1
        ],
        eres: [
            { amount: 20, operator: true, types: ['acid', ''] }
        ]
    },
    'Giant Sundew': {
        size: 'huge',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 2, nonCrit: { formula: '1d6', type: { values: ['acid'], custom: '' } }, special: ['Constrict'] }
        ],
        speed: {
            land: 20
        },
        senses: [
            1
        ],
        di: [
            'acid'
        ],
        dr: [
            { amount: 10, operator: true, types: ['slashing', ''] }
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Vine' }
        }
    },
    'Hangman Tree': {
        size: 'huge',
        attacks: [
            { name: 'Vine', diceCount: 1, diceSize: 6, count: 3, special: ['Grab', 'Constrict'] }
        ],
        speed: {
            land: 10
        },
        senses: [],
        dv: [
            'electric'
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Vine' }
        }
    },
    'Heartrot Tree': {
        size: 'huge',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Tendril', diceCount: 2, diceSize: 6, count: 2, primaryAttack: true }
        ],
        speed: {
            land: 10
        },
        senses: [
            1
        ],
        dr: [
            { amount: 10, operator: true, types: ['slashing', ''] }
        ]
    },
    'Jinmenju': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Slam', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 10
        },
        senses: [
            1
        ]
    },
    'Kapre': {
        size: 'huge',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 50,
            climb: 30
        },
        senses: [
            1, 7
        ],
        dr: [
            { amount: 10, operator: true, types: ['slashing', ''] }
        ]
    },
    'Moonflower': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Tentacle', diceCount: 1, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 20
        },
        senses: [
            1, 7
        ],
        eres: [
            { amount: 10, operator: true, types: ['cold', ''] }
        ],
        di: [
            'electric'
        ],
        dv: [
            'fire'
        ],
        dr: [
            { amount: 10, operator: true, types: ['slashing', ''] }
        ]
    },
    'Pixie Circle': {
        size: 'huge',
        attacks: [
            { name: 'Vine', diceCount: 1, diceSize: 6, count: 4 }
        ],
        speed: {
            land: 10
        },
        senses: [
            1
        ],
        eres: [
            { amount: 10, operator: true, types: ['cold', ''] },
            { amount: 10, operator: true, types: ['fire', ''] }
        ]
    },
    'Quickwood': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Root', diceCount: 1, diceSize: 6, count: 3 }
        ],
        speed: {
            land: 10
        },
        senses: [
            1, 7
        ],
        di: [
            'electric', 'fire'
        ]
    },
    'Tendriculos': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Grab'] },
            { name: 'Tentacle', diceCount: 1, diceSize: 6, count: 2, special: ['Grab'] }
        ],
        speed: {
            land: 20
        },
        senses: [
            1
        ],
        di: [
            'acid'
        ],
        regen: [
            { value: 5, counter: ['bludgeoning','fire'] }
        ]
    },
    'Treant': {
        size: 'huge',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 2, diceSize: 6, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ],
        dv: [
            'fire'
        ],
        dr: [
            { amount: 10, operator: true, types: ['slashing', ''] }
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Umdhlebi': {
        size: 'huge',
        attacks: [
            { name: 'Slam', diceCount: 3, diceSize: 8, count: 2, special: ['Grab', 'Constrict'] }
        ],
        speed: {
            land: 10
        },
        senses: [],
        dv: [
            'fire'
        ],
        dr: [
            '10/Magic, Slashing, or Bludgeoning'
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Slam' }
        }
    },
    'Alraune': {
        size: 'lg',
        attacks: [
            { name: 'Tentacle', diceCount: 1, diceSize: 10, count: 4, special: ['Grab', 'Constrict'] }
        ],
        speed: {
            land: 40
        },
        senses: [
            1
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Tentacle' }
        }
    },
    'Ascomoid': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 8, count: 1 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 2, diceSize: 8, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 40
        },
        senses: [],
        eres: [
            { amount: 10, operator: true, types: ['electric', ''] },
            { amount: 10, operator: true, types: ['fire', ''] }
        ],
        dr: [
            { amount: 10, operator: true, types: ['piercing', ''] }
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Assassin Vine': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 1, special: ['Grab', 'Constrict'] }
        ],
        speed: {
            land: 5
        },
        senses: [
            1
        ],
        eres: [
            { amount: 10, operator: true, types: ['cold', ''] },
            { amount: 10, operator: true, types: ['fire', ''] }
        ],
        di: [
            'electric'
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Slam' }
        }
    },
    'Blood Bramble': {
        size: 'lg',
        attacks: [
            { name: 'Vine', diceCount: 1, diceSize: 8, count: 4 }
        ],
        speed: {
            land: 40,
            climb: 40
        },
        senses: [
            1
        ],
        dr: [
            { amount: 10, operator: true, types: ['slashing', ''] }
        ],
        dv: [
            'fire'
        ]
    },
    'Blood Lily': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 2, special: ['Poison'] }
        ],
        speed: {
            land: 30,
            swim: 30
        },
        senses: [
            1
        ],
        effect: {
            'Poison': { note: 'Slam—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d4 Con damage and sickened; cure 2 consecutive saves. A blood lily\'s poison causes the victim to bleed copiously from its pores. Each time the victim fails its save against the blood lily\'s poison, it becomes sickened as blood coats its entire body and trickles into its mouth.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Bonewrought Willow': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Brambleblight': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 20
        },
        senses: [
            1, 7
        ]
    },
    'Carrion Creeper': {
        size: 'lg',
        attacks: [
            { name: 'Vine', diceCount: 2, diceSize: 6, count: 4, special: ['Grab'] }
        ],
        speed: {
            land: 30,
            climb: 30
        },
        senses: [
            1
        ]
    },
    'Crypt Flower': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['Grab'] },
            { name: 'Vine', diceCount: 1, diceSize: 8, count: 2, special: ['Grab'] }
        ],
        speed: {
            land: 20
        },
        senses: [
            1
        ],
        eres: [
            { amount: 10, operator: true, types: ['acid', ''] }
        ]
    },
    'Kudimmu': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 4, count: 2, special: ['Grab'] },
            { name: 'Tentacle', diceCount: 1, diceSize: 6, count: 4 }
        ],
        speed: {
            land: 30,
            burrow: 15
        },
        senses: [
            1
        ],
        dr: [
            { amount: 10, operator: false, types: ['magic', 'slashing'] }
        ],
        eres: [
            { amount: 10, operator: true, types: ['cold', ''] },
            { amount: 10, operator: true, types: ['fire', ''] }
        ]
    },
    'Lythirium': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 7
        ],
        eres: [
            { amount: 10, operator: true, types: ['cold', ''] }
        ],
        dv: [
            'fire'
        ]
    },
    'Mosslord': {
        size: 'lg',
        attacks: [
            { name: 'Claw', diceCount: 2, diceSize: 8, count: 4 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7
        ],
        regen: [
            { value: 5, counter: ['cold'] }
        ],
        dr: [
            { amount: 15, operator: false, types: ['magic', 'slashing'] }
        ],
        eres: [
            { amount: 30, operator: true, types: ['electric', ''] }
        ],
        di: [
            'fire'
        ]
    },
    'Sargassum Fiend': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 8, count: 2, special: ['Grab', 'Constrict'] }
        ],
        speed: {
            land: 20,
            climb: 20,
            swim: 40
        },
        senses: [],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Slam' }
        },
        dr: [
            { amount: 5, operator: true, types: ['slashing', ''] }
        ],
        eres: [
            { amount: 10, operator: true, types: ['cold', ''] }
        ]
    },
    'Shambling Mound': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 2, special: ['Grab', 'Constrict'] }
        ],
        speed: {
            land: 20,
            swim: 20
        },
        senses: [
            1, 7
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Slam' }
        },
        eres: [
            { amount: 10, operator: true, types: ['fire', ''] }
        ],
        di: [
            'electric'
        ]
    },
    'Stranglereed': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Tendril', diceCount: 2, diceSize: 8, count: 2, special: ['Grab', 'Constrict'] }
        ],
        speed: {
            land: 5,
            climb: 10,
            swim: 20
        },
        senses: [
            1
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Tendril' }
        },
        dr: [
            { amount: 5, operator: true, types: ['slashing', ''] }
        ],
        dv: [
            'fire'
        ]
    },
    'Sump Steward': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ],
        regen: [
            { value: 5, counter: ['acid','fire'] }
        ]
    },
    'Viper Vine': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, nonCrit: { formula: '3d6', type: { values: ['acid'], custom: '' } } },
            { name: 'Tentacle', diceCount: 1, diceSize: 6, count: 4, special: ['Grab', 'Constrict'] }
        ],
        speed: {
            land: 10
        },
        senses: [
            1
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Tentacle' }
        },
        di: [
            'cold'
        ]
    },
    'Basidirond': {
        size: 'med',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 20
        },
        senses: [
            1
        ],
        di: [
            'cold'
        ]
    },
    'Blood Maize': {
        size: 'med',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 4, count: 3 }
        ],
        speed: {
            land: 20
        },
        senses: [
            1
        ]
    },
    'Bonethorn': {
        size: 'med',
        attacks: [
            { name: 'Gore', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ],
        dr: [
            { amount: 10, operator: true, types: ['bludgeoning', ''] }
        ]
    },
    'Boruta': {
        size: 'med',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ],
        di: [
            'electric'
        ]
    },
    'Bramblelash': {
        size: 'med',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 5
        },
        senses: [],
        eres: [
            { amount: 5, operator: true, types: ['electric', ''] },
            { amount: 5, operator: true, types: ['fire', ''] }
        ],
        dv: [
            'acid'
        ]
    },
    'Cerebric Fungus': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 },
            { name: 'Tendril', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7
        ],
        eres: [
            { amount: 5, operator: true, types: ['cold', ''] }
        ],
        dv: [
            'sonic'
        ]
    },
    'Frost Fir': {
        size: 'med',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ],
        di: [
            'cold'
        ],
        dv: [
            'fire'
        ],
        dr: [
            { amount: 2, operator: true, types: ['slashing', ''] }
        ]
    },
    'Fungal Nymph': {
        size: 'med',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 20,
            swim: 10
        },
        senses: [
            1, 7
        ],
        dr: [
            { amount: 10, operator: true, types: ['coldiron', ''] }
        ]
    },
    'Fungus Queen': {
        size: 'med',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2 },
            { name: 'Tentacle', diceCount: 1, diceSize: 4, count: 4, special: ['Grab', 'Constrict'] }
        ],
        speed: {
            land: 20
        },
        senses: [
            1, 7
        ],
        dr: [
            { amount: 10, operator: true, types: ['coldiron', 'good'] }
        ],
        di: [
            'electric'
        ],
        eres: [
            { amount: 10, operator: true, types: ['acid', ''] },
            { amount: 10, operator: true, types: ['cold', ''] }
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Tentacle' }
        }
    },
    'Gluttongrass': {
        size: 'med',
        attacks: [
            { name: 'Frond', diceCount: 1, diceSize: 4, count: 3 }
        ],
        speed: {
            land: 10
        },
        senses: [
            1
        ],
        dr: [
            { amount: 5, operator: true, types: ['slashing', ''] }
        ]
    },
    'Jack-O\'-Lantern': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Slam', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 15
        },
        senses: [
            1
        ],
        eres: [
            { amount: 15, operator: true, types: ['fire', ''] }
        ]
    },
    'Living Topiary': {
        size: 'med',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7
        ],
        dv: [
            'fire'
        ],
        dr: [
            { amount: 5, operator: true, types: ['slashing', ''] }
        ]
    },
    'Melfesh Monster': {
        size: 'med',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 30,
            fly: {
                base: 60,
                maneuverability: 'perfect'
            }
        },
        senses: [
            1
        ],
        regen: [
            { value: 5, counter: ['acid'] }
        ],
        eres: [
            { amount: 10, operator: true, types: ['electric', ''] },
            { amount: 10, operator: true, types: ['fire', ''] }
        ]
    },
    'Mi-Go': {
        size: 'med',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 4, special: ['Grab'] }
        ],
        speed: {
            land: 30,
            fly: {
                base: 50,
                maneuverability: 'good'
            }
        },
        senses: [
            1
        ],
        eres: [
            { amount: 10, operator: true, types: ['electric', ''] },
            { amount: 10, operator: true, types: ['fire', ''] }
        ],
        di: [
            'cold'
        ]
    },
    'Myceloid': {
        size: 'med',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 20
        },
        senses: [
            1, 7
        ],
        dr: [
            { amount: 5, operator: true, types: ['slashing', ''] }
        ],
        eres: [
            { amount: 10, operator: true, types: ['cold', ''] },
            { amount: 10, operator: true, types: ['fire', ''] },
            { amount: 10, operator: true, types: ['sonic', ''] }
        ],
        dv: [
            'electric'
        ]
    },
    'Phantom Fungus': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 20,
            climb: 20
        },
        senses: [
            1
        ]
    },
    'Psychepore': {
        size: 'med',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 3, special: ['Poison'] }
        ],
        speed: {
            land: 20
        },
        senses: [
            1, 7
        ],
        eres: [
            { amount: 10, operator: true, types: ['fire', ''] }
        ],
        dr: [
            { amount: 5, operator: true, types: ['slashing', ''] }
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Slam—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d3 Wisdom plus visions; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Saguaroi': {
        size: 'med',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1
        ],
        regen: [
            { value: 5, counter: ['fire'] }
        ]
    },
    'Violet Fungus': {
        size: 'med',
        attacks: [
            { name: 'Tentacle', diceCount: 1, diceSize: 4, count: 4 }
        ],
        speed: {
            land: 10
        },
        senses: [
            1
        ]
    },
    'Weedwhip': {
        size: 'med',
        attacks: [
            { name: 'Tentacle', diceCount: 1, diceSize: 4, count: 3, special: ['Grab', 'Poison'] }
        ],
        speed: {
            land: 10
        },
        senses: [
            1
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Tentacle—contact; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect nauseated 1 round; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Yellow Musk Creeper': {
        size: 'med',
        attacks: [
            { name: 'Tendril', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 5
        },
        senses: []
    },
    'Cactus Leshy': {
        size: 'sm',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 20
        },
        senses: [
            1, 7
        ],
        di: [
            'electric', 'sonic'
        ]
    },
    'Calathgar': {
        size: 'sm',
        attacks: [
            { name: 'Flower', diceCount: 1, diceSize: 6, count: 1, nonCrit: { formula: '1d6', type: { values: ['cold'], custom: '' } } },
            { name: 'Tendril', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 20
        },
        senses: [
            1, 4
        ],
        di: [
            'cold'
        ],
        dv: [
            'fire'
        ]
    },
    'Fuldrex': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 3 }
        ],
        speed: {
            land: 20
        },
        senses: [
            1, 7
        ],
        di: [
            'eletricity', 'sonic'
        ]
    },
    'Fungus Leshy': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 20
        },
        senses: [
            1, 7
        ],
        di: [
            'electric', 'sonic'
        ]
    },
    'Gourd Leshy': {
        size: 'sm',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 20
        },
        senses: [
            1, 7
        ],
        di: [
            'electric', 'sonic'
        ]
    },
    'Kawa Akago': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 20,
            swim: 30
        },
        senses: [
            1
        ],
        eres: [
            { amount: 10, operator: true, types: ['fire', ''] }
        ]
    },
    'Leaf Leshy': {
        size: 'sm',
        attacks: [],
        speed: {
            land: 20,
            climb: 10,
            fly: {
                base: 10,
                maneuverability: 'clumsy'
            }
        },
        senses: [
            1, 7
        ],
        di: [
            'electric', 'sonic'
        ]
    },
    'Leaf Ray': {
        size: 'sm',
        attacks: [
            { name: 'Stinger', diceCount: 1, diceSize: 4, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 5,
            fly: {
                base: 40,
                maneuverability: 'average'
            }
        },
        senses: [
            1
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Sting—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d2 Dex; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Lichen Leshy': {
        size: 'sm',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 4, count: 1 }
        ],
        specialAttack: [
            { name: 'Constrict', diceCount: 0, diceSize: 0, count: 1, attackType: 'mcman', nonCrit: { formula: '2d4', type: { values: ['acid'], custom: '' } } }
        ],
        speed: {
            land: 20,
            climb: 20
        },
        senses: [
            1, 7
        ],
        di: [
            'electric', 'sonic'
        ]
    },
    'Lotus Leshy': {
        size: 'sm',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7
        ],
        di: [
            'electric', 'sonic'
        ]
    },
    'Mandragora': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Grab'] },
            { name: 'Slam', diceCount: 1, diceSize: 4, count: 2, special: ['Poison'] }
        ],
        speed: {
            land: 40,
            burrow: 10,
            climb: 40
        },
        senses: [
            1
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Slam—injury; save Fort DC 10+SL+Mod; frequency 1/round for 4 rounds; effect confusion and fatigue; cure no saves but “act normally” result on the confusion behavior table ends the effect.', type: 'fort', saveDesc: 'No cure save' }
        }
    },
    'Mindslaver Mold': {
        size: 'sm',
        attacks: [],
        speed: {
            land: 5,
            climb: 5
        },
        senses: [
            1
        ],
        eres: [
            { amount: 10, operator: true, types: ['acid', ''] }
        ],
        di: [
            'cold'
        ]
    },
    'Mire Nettle': {
        size: 'sm',
        attacks: [
            { name: 'Sting', diceCount: 1, diceSize: 4, count: 4 }
        ],
        speed: {
            land: 20,
            swim: 20
        },
        senses: [
            1
        ],
        dr: [
            { amount: 5, operator: true, types: ['slashing', 'bludgeoning'] }
        ]
    },
    'Moldwretch': {
        size: 'sm',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'Tentacle', diceCount: 1, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 40,
            burrow: 20,
            climb: 20
        },
        senses: [
            1, 7
        ]
    },
    'Nulmind': {
        size: 'sm',
        attacks: [],
        speed: {
            land: 10,
            climb: 10
        },
        senses: [
            1
        ]
    },
    'Phycomid': {
        size: 'sm',
        attacks: [],
        speed: {
            land: 10
        },
        senses: [],
        di: [
            'acid'
        ]
    },
    'Seaweed Leshy': {
        size: 'sm',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 20,
            swim: 20
        },
        senses: [
            1, 7
        ],
        di: [
            'electric', 'sonic'
        ]
    },
    'Sunflower Leshy': {
        size: 'sm',
        attacks: [
            { name: 'HeadButt', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 20
        },
        senses: [
            1, 7
        ],
        di: [
            'electric', 'sonic'
        ]
    },
    'Tsaalgrend': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1, special: ['Grab'] },
            { name: 'Tendril', diceCount: 1, diceSize: 4, count: 2, special: ['Grab'] }
        ],
        speed: {
            land: 10,
            fly: {
                base: 40,
                maneuverability: 'poor'
            },
            climb: 10
        },
        senses: [
            1, 7
        ],
        eres: [
            { amount: 5, operator: true, types: ['acid', ''] },
            { amount: 5, operator: true, types: ['electric', ''] }
        ],
        dv: [
            'fire'
        ]
    },
    'Vegepygmy': {
        size: 'sm',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7
        ],
        dr: [
            { amount: 5, operator: true, types: ['slashing', 'bludgeoning'] }
        ],
        di: [
            'electric'
        ]
    },
    'Xtabay': {
        size: 'sm',
        attacks: [
            { name: 'Sting', diceCount: 1, diceSize: 3, count: 2, nonCrit: { formula: '1d2', type: { values: ['acid'], custom: '' } } }
        ],
        speed: {
            land: 5
        },
        senses: [
            1
        ],
        di: [
            'acid'
        ]
    },
    'Belostomatid': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2, special: ['Grab'] }
        ],
        speed: {
            land: 20,
            fly: {
                base: 20,
                maneuverability: 'poor'
            },
            swim: 40
        },
        senses: [
            7, 32
        ]
    },
    'Blood Caterpillar': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Bristles', diceCount: 1, diceSize: 8, count: 1, special: ['Poison'] }
        ],
        specialAttack: [
            { name: 'Web', diceCount: 0, diceSize: 0, count: 1, special: ['Touch', 'Web'], attackType: 'rwak', range: 10, increment: 5, charges: 8 }
        ],
        speed: {
            land: 30,
            climb: 30
        },
        senses: [
            7
        ],
        effect: {
            'Web': { note: 'Web: Touch attack to entangle up to one size category higher, escaped with escape artist or burst with strength. DC 10+SL+Mod.', description: '<p>Creatures with the web ability can use webs to support themselves and up to one additional creature of the same size. In addition, such creatures can throw a web up to eight times per day. This is similar to an attack with a net but has a maximum range of 50 feet, with a range increment of 10 feet, and is effective against targets up to one size category larger than the web spinner. An entangled creature can escape with a successful Escape Artist check or burst the web with a Strength check. Both are standard actions with a DC equal to 10 + Spell Level + Caster Stat Mod. Attempts to burst a web by those caught in it take a -4 penalty.</p><p>Web spinners can create sheets of sticky webbing up to three times their size. They usually position these sheets to snare flying creatures but can also try to trap prey on the ground. Approaching creatures must succeed on a DC 20 Perception check to notice a web; otherwise they stumble into it and become trapped as though by a successful web attack. Attempts to escape or burst the webbing gain a +5 bonus if the trapped creature has something to walk on or grab while pulling free. Each 5-foot-square section of web has a number of hit points equal to the Hit Dice of the creature that created it ([[@attributes.hd.total]])and DR 5/—.</p><p>A creature can move across its own web at its climb speed and can pinpoint the location of any creature touching its web.</p>' },
            'Poison': { note: 'Poison (Ex) Bristles-injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d4 Strength; cure 1 save.', type: 'fort', saveDesc: 'Fort cures' }
        }
    },
    'Bluetip Eurypterid': {
        size: 'lg',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Stinger', diceCount: 1, diceSize: 4, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 20,
            swim: 60
        },
        senses: [
            1, 29
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Sting—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d4 Con; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Giant Ant Lion': {
        size: 'lg',
        attacks: [
            { name: 'Tentacle', diceCount: 2, diceSize: 8, count: 1, special: ['Grab'] }
        ],
        speed: {
            land: 30,
            burrow: 10
        },
        senses: [
            7,29
        ]
    },
    'Giant Belostomatid': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2, special: ['Grab'] }
        ],
        speed: {
            land: 20,
            fly: {
                base: 20,
                maneuverability: 'poor'
            },
            swim: 40
        },
        senses: [
            7, 32
        ]
    },
    'Giant Black Widow': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['Poison'] }
        ],
        specialAttack: [
            { name: 'Web', diceCount: 0, diceSize: 0, count: 1, special: ['Touch', 'Web'], attackType: 'rwak', range: 10, increment: 5, charges: 8 }
        ],
        speed: {
            land: 30,
            climb: 30
        },
        senses: [
            7, 32
        ],
        effect: {
            'Web': { note: 'Web: Touch attack to entangle up to one size category higher, escaped with escape artist or burst with strength. DC 10+SL+Mod.', description: '<p>Creatures with the web ability can use webs to support themselves and up to one additional creature of the same size. In addition, such creatures can throw a web up to eight times per day. This is similar to an attack with a net but has a maximum range of 50 feet, with a range increment of 10 feet, and is effective against targets up to one size category larger than the web spinner. An entangled creature can escape with a successful Escape Artist check or burst the web with a Strength check. Both are standard actions with a DC equal to 10 + Spell Level + Caster Stat Mod. Attempts to burst a web by those caught in it take a -4 penalty.</p><p>Web spinners can create sheets of sticky webbing up to three times their size. They usually position these sheets to snare flying creatures but can also try to trap prey on the ground. Approaching creatures must succeed on a DC 20 Perception check to notice a web; otherwise they stumble into it and become trapped as though by a successful web attack. Attempts to escape or burst the webbing gain a +5 bonus if the trapped creature has something to walk on or grab while pulling free. Each 5-foot-square section of web has a number of hit points equal to the Hit Dice of the creature that created it ([[@attributes.hd.total]])and DR 5/—.</p><p>A creature can move across its own web at its climb speed and can pinpoint the location of any creature touching its web.</p>' },
            'Poison': { note: 'Poison (Ex) - Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d3 Con and staggered; cure 2 saves.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Giant Hellgrammite': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Grab', 'Constrict'] },
            { name: 'TailSlap', diceCount: 1, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 30,
            swim: 20
        },
        senses: [
            7
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as bite' }
        }
    },
    'Giant Jellyfish': {
        size: 'lg',
        attacks: [
            { name: 'Tentacle', diceCount: 1, diceSize: 6, count: 4, special: ['Poison'] }
        ],
        speed: {
            swim: 20
        },
        senses: [
            7
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Tentacle—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d4 Con; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Giant Mantis': {
        size: 'lg',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2, special: ['Grab'] }
        ],
        specialAttack: [
            { name: 'Lunge', diceCount: 0, diceSize: 0, count: 1 }
        ],
        speed: {
            land: 30,
            fly: {
                base: 40,
                maneuverability: 'poor'
            },
            climb: 30
        },
        senses: [
            7
        ],
        effect: {
            'Lunge': { description: '<p>A giant mantis\'s limbs are capable of reaching much farther than normal for a creature of its size. As a full-attack action, it can make a single attack with its claws at double its normal reach. When a giant mantis attacks with a claw in this manner, it gains a +4 bonus on its attack roll. A giant mantis cannot make attacks of opportunity with its lunge.</p>' }
        }
    },
    'Giant Queen Bee': {
        size: 'lg',
        attacks: [
            { name: 'Sting', diceCount: 1, diceSize: 8, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 20,
            fly: {
                base: 60,
                maneuverability: 'good'
            }
        },
        senses: [
            7
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Sting—injury; save Fort DC 10+SL+Mod; frequency 1/round for 4 rounds; effect 1d2 Con; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Giant Scorpion': {
        size: 'lg',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2, special: ['Grab', 'Constrict'] },
            { name: 'Sting', diceCount: 1, diceSize: 6, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 50
        },
        senses: [
            7, 32
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Sting—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d2 Str; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' },
            'Constrict': { note: 'Constrict: Same damage as claw' }
        }
    },
    'Giant Sea Anemone': {
        size: 'lg',
        attacks: [
            { name: 'Tentacle', diceCount: 2, diceSize: 6, count: 1, special: ['Grab', 'Poison'] }
        ],
        speed: {
            land: 5
        },
        senses: [ ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Tentacle—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d2 Dex; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Giant Spear Urchin': {
        size: 'lg',
        attacks: [
            { name: 'Spine', diceCount: 1, diceSize: 6, count: 2, special: ['Poison'] },
            { name: 'Spine', diceCount: 1, diceSize: 6, count: 2, special: ['Poison'], attackType: 'rwak', range: 30, increment: 1 }
        ],
        speed: {
            land: 5
        },
        senses: [
            1, 14, 29
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Spines—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d2 Str and nauseated for 1 round; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Giant Stag Beetle': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 1, diceSize: 6, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 20,
            fly: {
                base: 20,
                maneuverability: 'poor'
            }
        },
        senses: [
            7
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: '<p>As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature\'s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a -4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature\'s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.</p>' }
        }
    },
    'Giant Starfish': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 3, special: ['Grab'] },
            { name: 'Stomach', diceCount: 1, diceSize: 6, count: 1, special: ['Grab'] }
        ],
        speed: {
            land: 10,
            climb: 10
        },
        senses: [
            7, 29
        ]
    },
    'Giant Wasp': {
        size: 'lg',
        attacks: [
            { name: 'Sting', diceCount: 1, diceSize: 8, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 20,
            fly: {
                base: 60,
                maneuverability: 'good'
            }
        },
        senses: [
            7
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Sting—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d2 Dex; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Giant Water Strider': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 2, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 30,
            fly: {
                base: 20,
                maneuverability: 'poor'
            }
        },
        senses: [
            7, 32
        ]
    },
    'Knight Ant': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['Grab'] },
            { name: 'Sting', diceCount: 1, diceSize: 6, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 50,
            burrow: 20,
            climb: 20
        },
        senses: [
            7, 14, 29
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Sting—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d4 Str; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Mammoth Flea': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['BloodDrain'] }
        ],
        speed: {
            land: 30
        },
        senses: [
            7
        ],
        effect: {
            'BloodDrain': { note: 'Blood Drain 1d2 Con', description: '<p>The creature drains blood at the end of its turn if it grapples a foe, inflicting Constitution damage.</p>' }
        }
    },
    'Scarab Beetle': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 40,
            fly: {
                base: 20,
                maneuverability: 'average'
            },
            climb: 20
        },
        senses: [
            7
        ]
    },
    'Slicer Beetle': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 40,
            fly: {
                base: 20,
                maneuverability: 'poor'
            }
        },
        senses: [
            7
        ]
    },
    'Albino Cave Solifugid': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 50,
            climb: 30
        },
        senses: [
            7
        ]
    },
    'Cave Fisher': {
        size: 'med',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2, special: ['Grab'] },
            { name: 'Filament', diceCount: 0, diceSize: 0, count: 1, special: ['Pull'], attackType: 'rwak', range: 60, increment: 1 }
        ],
        speed: {
            land: 20,
            climb: 20
        },
        senses: [
            7
        ],
        effect: {
            'Pull': { note: 'Filament - Combat Maneuver pull 10 ft', description: '<p>A cave fisher can fire a thin filament of sticky silk as a standard action. This touch attack has a range of 60 feet and no range increment. A creature struck by a cave fisher\'s filament becomes attached to the sticky thread. As a standard action, a creature can rip the filament free with a DC 20 Strength check. A caught creature can also attempt to escape a filament by making a DC 25 Escape Artist check. A filament is AC 14 (touch 12), has 5 hit points, and has DR 15/slashing. An application of liquid with high alcohol content (or a dose of universal solvent) dissolves the adhesive and releases the creature caught by the filament. A cave fisher can have only one filament active at a time.</p><p><strong>Pull (Ex)</strong> A creature with this ability can choose to make a free combat maneuver check with a successful attack. If successful, this check pulls a creature closer. The distance pulled is set by this ability. The type of attack that causes the pull and the distance pulled are included in the creature\'s description. This ability only works on creatures of a size equal to or smaller than the pulling creature. Creatures pulled in this way do not provoke attacks of opportunity and stop if the pull would move them into a solid object or creature.</p>' }
        }
    },
    'Cave Scorpion': {
        size: 'med',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 },
            { name: 'Sting', diceCount: 1, diceSize: 4, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 60,
            climb: 40
        },
        senses: [
            7, 32
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Sting—injury; save Fort DC 10+SL+Mod; frequency 1/round for 4 rounds; effect 1d2 Str; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Coffin Anemone': {
        size: 'med',
        attacks: [
            { name: 'Tentacle', diceCount: 2, diceSize: 4, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 5
        },
        senses: [ ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Sting—injury; save Fort DC 10+SL+Mod; frequency 1/round for 4 rounds; effect 1d2 Str; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Common Eurypterid': {
        size: 'med',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 3, count: 2 },
            { name: 'Sting', diceCount: 1, diceSize: 3, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 20,
            swim: 40
        },
        senses: [
            1, 29
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Sting-injury; save Fort DC 10+SL+Mod; frequency 1/round for 4 rounds; effect 1d2 Con; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Crimson Jellyfish': {
        size: 'med',
        attacks: [
            { name: 'Tentacle', diceCount: 2, diceSize: 8, count: 1, special: ['Grab', 'BloodDrain'] },
            { name: 'Tendril', diceCount: 0, diceSize: 0, count: 1, special: ['Poison'] }
        ],
        speed: {
            swim: 10
        },
        senses: [
            7
        ],            
        effect: {
            'Poison': { note: 'Poison (Ex) - Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d4 Str; cure 2 consecutive save.', type: 'fort', saveDesc: 'Fort Cures' },
            'BloodDrain': { note: 'Blood Drain 1d2 Con', description: '<p>The creature drains blood at the end of its turn if it grapples a foe, inflicting Constitution damage.</p>' }
        }
    },
    'Giant Ant': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Grab'] },
            { name: 'Sting', diceCount: 1, diceSize: 4, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 50,
            climb: 20
        },
        senses: [
            7, 14
        ]
    },
    'Giant Bee': {
        size: 'med',
        attacks: [
            { name: 'Sting', diceCount: 1, diceSize: 4, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 20,
            fly: {
                base: 60,
                maneuverability: 'good'
            }
        },
        senses: [
            7
        ]
    },
    'Giant Centipede': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 40,
            climb: 40
        },
        senses: [
            7
        ]
    },
    'Giant Crab': {
        size: 'med',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2, special: ['Grab', 'Constrict'] }
        ],
        speed: {
            land: 20,
            swim: 30
        },
        senses: [
            7
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as claw' }
        }
    },
    'Giant Dragonfly': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1, special: ['Grab'] }
        ],
        speed: {
            land: 20,
            fly: {
                base: 60,
                maneuverability: 'perfect'
            }
        },
        senses: [
            7
        ]
    },
    'Giant Fly': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 20,
            fly: {
                base: 60,
                maneuverability: 'good'
            },
            climb: 20
        },
        senses: [
            7
        ]
    },
    'Giant Hunter Urchin': {
        size: 'med',
        attacks: [
            { name: 'Tongue', diceCount: 1, diceSize: 3, count: 1, special: ['Pull'] }
        ],
        speed: {
            land: 15
        },
        senses: [
            1, 14, 29
        ],
        effect: {
            'Pull': { note: 'Tongue - Combat Maneuver pull 5 ft', description: '<p><strong>Pull (Ex)</strong> A creature with this ability can choose to make a free combat maneuver check with a successful attack. If successful, this check pulls a creature closer. The distance pulled is set by this ability. The type of attack that causes the pull and the distance pulled are included in the creature\'s description. This ability only works on creatures of a size equal to or smaller than the pulling creature. Creatures pulled in this way do not provoke attacks of opportunity and stop if the pull would move them into a solid object or creature.</p>' }
        }
    },
    'Giant Leech': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['BloodDrain'] }
        ],
        speed: {
            land: 5,
            swim: 20
        },
        senses: [
            14
        ],
        effect: {
            'BloodDrain': { note: 'Blood Drain 1 Str, 1 Con', description: '<p>The creature drains blood at the end of its turn if it grapples a foe, inflicting Constitution damage.</p>' }
        }
    },
    'Giant Locust': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Spit', diceCount: 0, diceSize: 0, count: 1, nonCrit: { formula: '1d3', type: { values: ['acid'], custom: '' } }, attackType: 'rwak', range: 30, increment: 1 }
        ],
        speed: {
            land: 20,
            fly: {
                base: 60,
                maneuverability: 'average'
            },
            climb: 20
        },
        senses: [
            7
        ]
    },
    'Giant Maggot': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 10,
            burrow: 5
        },
        senses: [
            7
        ]
    },
    'Giant Mantis Shrimp': {
        size: 'med',
        attacks: [
            { name: 'Pincer', diceCount: 2, diceSize: 6, count: 2, special: ['Grab'] }
        ],
        speed: {
            land: 40,
            swim: 30
        },
        senses: [
            7
        ]
    },
    'Giant Mosquito': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['Grab', 'BloodDrain'] }
        ],
        speed: {
            land: 20,
            fly: {
                base: 60,
                maneuverability: 'good'
            }
        },
        senses: [
            7, 14
        ],
        effect: {
            'BloodDrain': { note: 'Blood Drain 1d2 Con', description: '<p>The creature drains blood at the end of its turn if it grapples a foe, inflicting Constitution damage.</p>' }
        }
    },
    'Giant Spider': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Poison'] }
        ],
        specialAttack: [
            { name: 'Web', diceCount: 0, diceSize: 0, count: 1, special: ['Touch', 'Web'], attackType: 'rwak', range: 10, increment: 5, charges: 8 }
        ],
        speed: {
            land: 30,
            climb: 30
        },
        senses: [
            7, 32
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 4 rounds; effect 1d2 Str; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' },
            'Web': { note: 'Web: Touch attack to entangle up to one size category higher, escaped with escape artist or burst with strength. DC 10+SL+Mod.', description: '<p>Creatures with the web ability can use webs to support themselves and up to one additional creature of the same size. In addition, such creatures can throw a web up to eight times per day. This is similar to an attack with a net but has a maximum range of 50 feet, with a range increment of 10 feet, and is effective against targets up to one size category larger than the web spinner. An entangled creature can escape with a successful Escape Artist check or burst the web with a Strength check. Both are standard actions with a DC equal to 10 + Spell Level + Caster Stat Mod. Attempts to burst a web by those caught in it take a -4 penalty.</p><p>Web spinners can create sheets of sticky webbing up to three times their size. They usually position these sheets to snare flying creatures but can also try to trap prey on the ground. Approaching creatures must succeed on a DC 20 Perception check to notice a web; otherwise they stumble into it and become trapped as though by a successful web attack. Attempts to escape or burst the webbing gain a +5 bonus if the trapped creature has something to walk on or grab while pulling free. Each 5-foot-square section of web has a number of hit points equal to the Hit Dice of the creature that created it ([[@attributes.hd.total]])and DR 5/—.</p><p>A creature can move across its own web at its climb speed and can pinpoint the location of any creature touching its web.</p>' },
        }
    },
    'Giant Termite': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, nonCrit: { formula: '1d6', type: { values: ['acid'], custom: '' } } }
        ],
        speed: {
            land: 30,
            burrow: 20
        },
        senses: [
            7, 14, 29
        ]
    },
    'Giant Tube Worm': {
        size: 'med',
        attacks: [
            { name: 'Sting', diceCount: 1, diceSize: 4, count: 2, special: ['Poison'] }
        ],
        speed: {
            land: 10,
            swim: 20
        },
        senses: [
            7, 29
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Sting—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1 Dex and staggered 1 round; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Great Assassin Bug': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Poison'] },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 40,
            fly: {
                base: 40,
                maneuverability: 'clumsy'
            }
        },
        senses: [
            7
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 4 rounds; effect 1d4 Dex; cure 2 consecutive save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Great Diadem Urchin': {
        size: 'med',
        attacks: [
            { name: 'Spine', diceCount: 1, diceSize: 8, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 10
        },
        senses: [
            1, 14, 29
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Spine—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d2 Con and stunned 1 round; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Horn Caterpillar': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Bristles', diceCount: 1, diceSize: 4, count: 1, special: ['Poison'] }
        ],
        specialAttack: [
            { name: 'Web', diceCount: 0, diceSize: 0, count: 1, special: ['Touch', 'Web'], attackType: 'rwak', range: 10, increment: 5, charges: 8 }
        ],
        speed: {
            land: 30,
            climb: 30
        },
        senses: [
            7
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Bristles—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d4 Str; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' },
            'Web': { note: 'Web: Touch attack to entangle up to one size category higher, escaped with escape artist or burst with strength. DC 10+SL+Mod.', description: '<p>Creatures with the web ability can use webs to support themselves and up to one additional creature of the same size. In addition, such creatures can throw a web up to eight times per day. This is similar to an attack with a net but has a maximum range of 50 feet, with a range increment of 10 feet, and is effective against targets up to one size category larger than the web spinner. An entangled creature can escape with a successful Escape Artist check or burst the web with a Strength check. Both are standard actions with a DC equal to 10 + Spell Level + Caster Stat Mod. Attempts to burst a web by those caught in it take a -4 penalty.</p><p>Web spinners can create sheets of sticky webbing up to three times their size. They usually position these sheets to snare flying creatures but can also try to trap prey on the ground. Approaching creatures must succeed on a DC 20 Perception check to notice a web; otherwise they stumble into it and become trapped as though by a successful web attack. Attempts to escape or burst the webbing gain a +5 bonus if the trapped creature has something to walk on or grab while pulling free. Each 5-foot-square section of web has a number of hit points equal to the Hit Dice of the creature that created it ([[@attributes.hd.total]])and DR 5/—.</p><p>A creature can move across its own web at its climb speed and can pinpoint the location of any creature touching its web.</p>' },
        }
    },
    'Stalk Beetle': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 30,
            burrow: 10,
            climb: 20
        },
        senses: [
            7
        ]
    },
    'Xenopterid': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Poison'] },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2, special: ['Grab', 'BloodDrain'] }
        ],
        speed: {
            land: 40,
            fly: {
                base: 20,
                maneuverability: 'clumsy'
            },
            climb: 20
        },
        senses: [
            7
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d4 Dex; cure 2 consecutive save.', type: 'fort', saveDesc: 'Fort Cures' },
            'BloodDrain': { note: 'Blood Drain 1d2 Con', description: '<p>The creature drains blood at the end of its turn if it grapples a foe, inflicting Constitution damage.</p>' }
        }
    },
    'Death\'s Head Jellyfish': {
        size: 'sm',
        attacks: [
            { name: 'Tentacle', diceCount: 1, diceSize: 3, count: 2, special: ['Poison'] }
        ],
        speed: {
            swim: 20
        },
        senses: [
            7
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Tentacle—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1 Con and 1 Cha; cure 2 consecutive saves. If a creature fails two consecutive saving throws, its jaw locks, its tongue swells, and its lips pull back, making speech impossible. This condition ends when the Charisma damage is healed.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Fire Beetle': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 },
        ],
        speed: {
            land: 30,
            fly: {
                base: 30,
                maneuverability: 'poor'
            }
        },
        senses: [
            1
        ]
    },
    'Ghost Scorpion': {
        size: 'sm',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 3, count: 2 },
            { name: 'Sting', diceCount: 1, diceSize: 3, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 30
        },
        senses: [
            7, 32
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Sting—injury; save Fort DC 10+SL+Mod; frequency 1/round for 4 rounds; effect 1 Str; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Giant Assassin Bug': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1, special: ['Poison'] },
            { name: 'Claw', diceCount: 1, diceSize: 3, count: 2 }
        ],
        speed: {
            land: 30,
            fly: {
                base: 30,
                maneuverability: 'clumsy'
            }
        },
        senses: [
            7
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 4 rounds; effect 1d4 Dex; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Giant Cockroach': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 30,
            fly: {
                base: 40,
                maneuverability: 'poor'
            },
            climb: 30
        },
        senses: [
            7, 32
        ]
    },
    'Giant Crab Spider': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 30,
            climb: 20
        },
        senses: [
            7, 32
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 4 rounds; effect 1d2 Str; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Giant Flea': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            7
        ]
    },
    'Giant Dragonfly Nymph': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 10,
            swim: 30
        },
        senses: [
            7
        ]
    },
    'Giant Rot Grub': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Grab', 'Poison'] }
        ],
        speed: {
            land: 30
        },
        senses: [ ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 5 rounds; effect 1d3 Str; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Giant Solifugid': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 3, count: 2 }
        ],
        speed: {
            land: 50,
            climb: 30
        },
        senses: [
            7
        ]
    },
    'Giant Tick': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1, special: ['Grab', 'BloodDrain'] }
        ],
        speed: {
            land: 20,
            climb: 20
        },
        senses: [
            7, 14
        ],
        effect: {
            'BloodDrain': { note: 'Blood Drain 1 Con', description: '<p>The creature drains blood at the end of its turn if it grapples a foe, inflicting Constitution damage.</p>' }
        }
    },
    'Nymph Water Strider': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 2, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 3, count: 2 }
        ],
        speed: {
            land: 30,
            fly: {
                base: 20,
                maneuverability: 'poor'
            }
        },
        senses: [
            7, 32
        ]
    },
    'Ochre Eurypterid': {
        size: 'sm',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 2, count: 2 },
            { name: 'Sting', diceCount: 1, diceSize: 2, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 20,
            swim: 40
        },
        senses: [
            1, 29
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Sting—injury; save Fort DC 10+SL+Mod; frequency 1/round for 4 rounds; effect 1 Dex; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Giant Botfly': {
        size: 'tiny',
        attacks: [
            { name: 'Sting', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 10,
            fly: {
                base: 60,
                maneuverability: 'good'
            }
        },
        senses: [
            7
        ]
    },
    'Giant Isopod': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 20,
            swim: 10
        },
        senses: [
            1, 7
        ]
    },
    'Greensting Scorpion': {
        size: 'tiny',
        attacks: [
            { name: 'Sting', diceCount: 1, diceSize: 2, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 30
        },
        senses: [
            7
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Sting—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect sickened 1 round; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'House Centipede': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 40,
            climb: 40
        },
        senses: [
            7
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 2 rounds; effect daze 1 round; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'King Crab': {
        size: 'tiny',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 2, count: 2, special: ['Grab', 'Constrict'] }
        ],
        speed: {
            land: 30,
            swim: 20
        },
        senses: [
            7
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as claw' }
        }
    },
    'Scarlet Spider': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 30,
            climb: 30
        },
        senses: [
            7
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) - Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 4 rounds; effect 1 Str; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Ash Giant': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 2 }
        ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 2, diceSize: 8, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 120, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 40
        },
        senses: [
            1
        ],
        special: [
            'RockThrowing', 'RockCatching'
        ]
    },
    'Cliff Giant': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 2 }
        ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 1, diceSize: 8, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 120, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 29
        ],
        eres: [
            { amount: 10, operator: true, types: ['acid', ''] },
            { amount: 10, operator: true, types: ['fire', ''] }
        ],
        special: [
            'RockThrowing', 'RockCatching'
        ]
    },
    'Cyclops Grand-Eye': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 2 }
        ],
        speed: {
            land: 20
        },
        senses: [
            1
        ]
    },
    'Cyclops Lorekeeper': {
        size: 'lg',
        attacks: [ ],
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Desert Giant': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 2 }
        ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 2, diceSize: 8, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 100, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 50
        },
        senses: [
            1
        ],
        eres: [
            { amount: 10, operator: true, types: ['cold', ''] }
        ],
        di: [
            'fire'
        ],
        special: [
            'RockThrowing', 'RockCatching'
        ]
    },
    'Ettin': {
        size: 'lg',
        attacks: [ ],
        speed: {
            land: 40
        },
        senses: [
            1
        ]
    },
    'Firbolg': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 2 }
        ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 2, diceSize: 6, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 120, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 40
        },
        senses: [
            1
        ],
        special: [
            'RockThrowing'
        ]
    },
    'Fire Giant Doombringer': {
        size: 'lg',
        attacks: [ ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 1, diceSize: 8, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 120, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ],
        di: [
            'fire'
        ],
        dv: [
            'cold'
        ],
        special: [
            'RockThrowing', 'RockCatching'
        ]
    },
    'Fire Giant Glaive': {
        size: 'lg',
        attacks: [ ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 1, diceSize: 8, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 120, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 40
        },
        senses: [
            1
        ],
        di: [
            'fire'
        ],
        dv: [
            'cold'
        ],
        special: [
            'RockThrowing', 'RockCatching'
        ]
    },
    'Fire Giant King': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 2 }
        ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 1, diceSize: 8, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 120, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ],
        di: [
            'fire'
        ],
        dv: [
            'cold'
        ],
        special: [
            'RockThrowing', 'RockCatching'
        ]
    },
    'Fire Giant Lieutenant': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 2 }
        ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 1, diceSize: 8, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 120, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ],
        di: [
            'fire'
        ],
        dv: [
            'cold'
        ],
        special: [
            'RockThrowing', 'RockCatching'
        ]
    },
    'Fire Giant Queen': {
        size: 'lg',
        attacks: [ ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 1, diceSize: 8, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 120, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 40
        },
        senses: [
            1
        ],
        di: [
            'fire'
        ],
        dv: [
            'cold'
        ],
        special: [
            'RockThrowing', 'RockCatching'
        ]
    },
    'Freshwater Merrow': {
        size: 'lg',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 40,
            swim: 40
        },
        senses: [
            1
        ]
    },
    'Frost Giant Battle Priest': {
        size: 'lg',
        attacks: [ ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 1, diceSize: 8, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 120, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ],
        di: [
            'cold'
        ],
        dv: [
            'fire'
        ],
        special: [
            'RockThrowing', 'RockCatching'
        ]
    },
    'Frost Giant Elite Scout': {
        size: 'lg',
        attacks: [ ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 1, diceSize: 8, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 120, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 40
        },
        senses: [
            1
        ],
        di: [
            'cold'
        ],
        dv: [
            'fire'
        ],
        special: [
            'RockThrowing', 'RockCatching'
        ]
    },
    'Frost Giant Hunter': {
        size: 'lg',
        attacks: [ ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 2, diceSize: 8, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 140, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 40
        },
        senses: [
            1
        ],
        di: [
            'cold'
        ],
        dv: [
            'fire'
        ],
        special: [
            'RockThrowing', 'RockCatching'
        ]
    },
    'Hill Giant': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 2 }
        ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 1, diceSize: 8, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 120, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 40
        },
        senses: [
            1
        ],
        special: [
            'RockThrowing', 'RockCatching'
        ]
    },
    'Kabandha': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 6, count: 2 },
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 }
        ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 1, diceSize: 8, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 60, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7
        ],
        special: [
            'RockThrowing'
        ]
    },
    'Marsh Giant': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 6, count: 2 }
        ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 2, diceSize: 6, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 120, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 40,
            swim: 20
        },
        senses: [
            1
        ],
        special: [
            'RockThrowing', 'RockCatching'
        ]
    },
    'Moss Troll': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 30,
            climb: 10
        },
        senses: [
            1, 7, 14
        ],
        regen: [
            { value: 5, counter: ['fire'] }
        ],
        dv: [
            'fire'
        ]
    },
    'Ogre': {
        size: 'lg',
        attacks: [ ],
        speed: {
            land: 40
        },
        senses: [
            1, 7
        ]
    },
    'Ogre Boss': {
        size: 'lg',
        attacks: [ ],
        speed: {
            land: 30
        },
        senses: [
            1, 7
        ]
    },
    'Ogre Glutton': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 2 }
        ],
        speed: {
            land: 50
        },
        senses: [
            1, 7
        ]
    },
    'Ogre Hunter': {
        size: 'lg',
        attacks: [ ],
        speed: {
            land: 30
        },
        senses: [
            1, 7
        ]
    },
    'Ogre Mancatcher': {
        size: 'lg',
        attacks: [ ],
        speed: {
            land: 40
        },
        senses: [
            1, 7
        ]
    },
    'Ogre Priest': {
        size: 'lg',
        attacks: [ ],
        speed: {
            land: 30
        },
        senses: [
            1, 7
        ]
    },
    'Ogre Stalker': {
        size: 'lg',
        attacks: [ ],
        speed: {
            land: 40
        },
        senses: [
            1, 7
        ]
    },
    'Oracular Cyclops': {
        size: 'lg',
        attacks: [ ],
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Shadow Giant': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 2 }
        ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 1, diceSize: 8, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 180, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 11
        ],
        special: [
            'RockThrowing', 'RockCatching'
        ]
    },
    'Slag Giant': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 2 }
        ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 1, diceSize: 8, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 120, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 40
        },
        senses: [
            1
        ],
        eres: [
            { amount: 30, operator: true, types: ['fire', ''] }
        ],
        special: [
            'RockThrowing', 'RockCatching'
        ]
    },
    'Stone Giant': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 2 }
        ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 1, diceSize: 8, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 180, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 7
        ],
        special: [
            'RockThrowing', 'RockCatching'
        ]
    },
    'Tomb Giant': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 6, count: 2 }
        ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 1, diceSize: 8, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 120, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 7
        ],
        special: [
            'RockThrowing', 'RockCatching'
        ]
    },
    'Troll': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2, special: ['Rend'] }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7, 14
        ],
        regen: [
            { value: 5, counter: ['acid','fire'] }
        ],
        effect: {
            'Rend': { note: 'Rend if both claws hit, added to second claw damage. [[/d sizeRoll(1, 6, @size, 5) # Rend damage added to second claw]]{{Roll Rend Damage}}' }
        }
    },
    'Troll Acolyte': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2, special: ['Rend'] }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7, 14
        ],
        regen: [
            { value: 5, counter: ['acid','fire'] }
        ],
        effect: {
            'Rend': { note: 'Rend if both claws hit, added to second claw damage. [[/d sizeRoll(1, 6, @size, 5) # Rend damage added to second claw]]{{Roll Rend Damage}}' }
        }
    },
    'Troll Berserker': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2, special: ['Rend'] }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7, 14
        ],
        regen: [
            { value: 5, counter: ['acid','fire'] }
        ],
        effect: {
            'Rend': { note: 'Rend if both claws hit, added to second claw damage. [[/d sizeRoll(1, 6, @size, 5) # Rend damage added to second claw]]{{Roll Rend Damage}}' }
        }
    },
    'Troll Elder Matron': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2, special: ['Rend'] }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7, 14
        ],
        regen: [
            { value: 5, counter: ['acid','fire'] }
        ],
        eres: [
            { amount: 10, operator: true, types: ['cold', ''] }
        ],
        effect: {
            'Rend': { note: 'Rend if both claws hit, added to second claw damage. [[/d sizeRoll(1, 6, @size, 5) # Rend damage added to second claw]]{{Roll Rend Damage}}' }
        }
    },
    'Troll Fury': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2, special: ['Rend'] }
        ],
        speed: {
            land: 20
        },
        senses: [
            1, 7, 14
        ],
        regen: [
            { value: 5, counter: ['acid','fire'] }
        ],
        effect: {
            'Rend': { note: 'Rend if both claws hit, added to second claw damage. [[/d sizeRoll(1, 6, @size, 5) # Rend damage added to second claw]]{{Roll Rend Damage}}' }
        }
    },
    'Wood Giant': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1
        ],
        special: [
            'RockCatching'
        ]
    },
    'Athach': {
        size: 'huge',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 2, diceSize: 6, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 140, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 50
        },
        senses: [
            1, 7
        ],
        eres: [
            { amount: 10, operator: true, types: ['cold', ''] }
        ],
        special: [
            'RockThrowing'
        ]
    },
    'Cloud Giant': {
        size: 'huge',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 2 }
        ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 2, diceSize: 6, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 140, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 50
        },
        senses: [
            1, 14
        ],
        special: [
            'RockThrowing', 'RockCatching'
        ]
    },
    'Great Cyclops': {
        size: 'huge',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Gore', diceCount: 1, diceSize: 8, count: 2 }
        ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 2, diceSize: 6, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 120, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 50
        },
        senses: [
            1
        ],
        special: [
            'RockThrowing'
        ]
    },
    'Inverted Giant': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            42
        ],
        eres: [
            { amount: 10, operator: true, types: ['cold', ''] },
            { amount: 10, operator: true, types: ['electric', ''] },
            { amount: 10, operator: true, types: ['fire', ''] }
        ],
        special: [
            'RockThrowing', 'RockCatching'
        ]
    },
    'Jotund Troll': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 2 }
        ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 2, diceSize: 8, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 120, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 14
        ],
        regen: [
            { value: 10, counter: ['acid','fire'] }
        ],
        special: [
            'RockThrowing'
        ]
    },
    'Jungle Giant': {
        size: 'huge',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1
        ],
        special: [
            'RockCatching'
        ]
    },
    'Moon Giant': {
        size: 'huge',
        attacks: [
            { name: 'Slam', diceCount: 3, diceSize: 8, count: 2 }
        ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 2, diceSize: 6, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 180, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 50
        },
        senses: [
            1
        ],
        eres: [
            { amount: 30, operator: true, types: ['cold', ''] },
            { amount: 30, operator: true, types: ['fire', ''] }
        ],
        special: [
            'RockThrowing', 'RockCatching'
        ]
    },
    'Mountain Troll': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 10, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2, special: ['Rend'] }
        ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 2, diceSize: 8, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 120, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 40,
            burrow: 10,
            climb: 40
        },
        senses: [
            1, 7, 14
        ],
        regen: [
            { value: 10, counter: ['acid','fire'] }
        ],
        dv: [
            'sonic'
        ],
        special: [
            'RockThrowing', 'RockCatching'
        ],
        effect: {
            'Rend': { note: 'Rend if both claws hit, added to second claw damage. [[/d sizeRoll(2, 6, @size, 6) # Rend damage added to second claw]]{{Roll Rend Damage}}' }
        }
    },
    'Ocean Giant': {
        size: 'huge',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 2 }
        ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 2, diceSize: 8, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 110, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 50,
            swim: 40
        },
        senses: [
            1
        ],
        eres: [
            { amount: 30, operator: true, types: ['cold', ''] },
            { amount: 30, operator: true, types: ['electric', ''] }
        ],
        special: [
            'RockThrowing'
        ]
    },
    'Papinijuwari': {
        size: 'huge',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 20,
            fly: {
                base: 60,
                maneuverability: 'average'
            }
        },
        senses: [
            1, 11
        ]
    },
    'Plague Giant': {
        size: 'huge',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 2 }
        ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 2, diceSize: 8, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 140, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 50
        },
        senses: [
            1
        ],
        special: [
            'RockThrowing', 'RockCatching'
        ]
    },
    'Saltwater Merrow': {
        size: 'huge',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 2 }
        ],
        speed: {
            land: 40,
            swim: 40
        },
        senses: [
            1
        ]
    },
    'Savage Great Cyclops': {
        size: 'huge',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 2 }
        ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 2, diceSize: 6, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 120, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 60
        },
        senses: [
            1
        ],
        special: [
            'RockThrowing'
        ]
    },
    'Storm Giant': {
        size: 'huge',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 50,
            swim: 40
        },
        senses: [
            1
        ],
        di: [
            'electric'
        ]
    },
    'Sun Giant': {
        size: 'huge',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 50
        },
        senses: [
            1
        ],
        eres: [
            { amount: 30, operator: true, types: ['cold', ''] },
            { amount: 30, operator: true, types: ['electric', ''] }
        ],
        di: [
            'fire'
        ],
        special: [
            'RockCatching'
        ]
    },
    'Taiga Giant': {
        size: 'huge',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 2 }
        ],
        specialAttack: [
            { name: 'RockThrow', diceCount: 2, diceSize: 6, count: 1, damageAbility: 'str', type: ['bludgeoning'], mult: 1.5, attackType: 'rwak', range: 140, increment: 5, attackBonus: '1[RockThrowing]' }
        ],
        speed: {
            land: 40
        },
        senses: [
            1
        ],
        special: [
            'RockThrowing', 'RockCatching'
        ]
    },
    'Charau-Ka': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7, 14
        ]
    },
    'Dark Creeper': {
        size: 'sm',
        speed: {
            land: 30
        },
        senses: [
            7
        ]
    },
    'Dark Dancer': {
        size: 'sm',
        speed: {
            land: 30
        },
        senses: [
            7
        ]
    },
    'Dark Slayer': {
        size: 'sm',
        speed: {
            land: 30
        },
        senses: [
            7
        ]
    },
    'Dark Empath': {
        size: 'sm',
        speed: {
            land: 30
        },
        senses: [
            7
        ]
    },
    'Derro': {
        size: 'sm',
        speed: {
            land: 20
        },
        senses: [
            7
        ]
    },
    'Gnome': {
        size: 'sm',
        speed: {
            land: 20
        },
        senses: [
            1
        ]
    },
    'Gnome (Darkvision)': {
        size: 'sm',
        speed: {
            land: 20
        },
        senses: [
            7
        ]
    },
    'Goblin': {
        size: 'sm',
        speed: {
            land: 30
        },
        senses: [
            7
        ]
    },
    'Goblin (Hard Head, Big Teeth)': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            7
        ]
    },
    'Goblin (Monkey)': {
        size: 'sm',
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Gray': {
        size: 'sm',
        speed: {
            land: 20
        },
        senses: [
            4
        ]
    },
    'Grippli': {
        size: 'sm',
        speed: {
            land: 30
        },
        senses: [
            7
        ]
    },
    'Hafling': {
        size: 'sm',
        speed: {
            land: 20
        },
        senses: [ ]
    },
    'Hafling (Fleet of Foot)': {
        size: 'sm',
        speed: {
            land: 30
        },
        senses: [ ]
    },
    'Kijimuna': {
        size: 'sm',
        speed: {
            land: 30
        },
        senses: [
            7
        ]
    },
    'Kobold': {
        size: 'sm',
        speed: {
            land: 30
        },
        senses: [
            7
        ]
    },
    'Kobold (Day Raider)': {
        size: 'sm',
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Kobold (Day Raider, Dragon Maw)': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Kobold (Dragon Maw)': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            7
        ]
    },
    'Ratfolk': {
        size: 'sm',
        speed: {
            land: 20
        },
        senses: [
            7, 14
        ]
    },
    'Spriggan': {
        size: 'sm',
        speed: {
            land: 20
        },
        senses: [
            1
        ]
    },
    'Svirfneblin': {
        size: 'sm',
        speed: {
            land: 20
        },
        senses: [
            1, 7
        ]
    },
    'Wayang': {
        size: 'sm',
        speed: {
            land: 20
        },
        senses: [
            7, 14
        ]
    },
    'Adlet': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1,14
        ]
    },
    'Android': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            1, 7
        ]
    },
    'Boggard': {
        size: 'med',
        speed: {
            land: 30,
            swim: 30
        },
        senses: [
            1, 7
        ]
    },
    'Bugbear': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            7, 14
        ]
    },
    'Catfolk': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Catfolk (Cat\'s Claw)': {
        size: 'med',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Catfolk (Cat\'s Claw, Scent)': {
        size: 'med',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 30
        },
        senses: [
            14
        ]
    },
    'Catfolk (Scent)': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            14
        ]
    },
    'Changling': {
        size: 'med',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 30
        },
        senses: [
            7
        ]
    },
    'Dark Caller': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            7
        ]
    },
    'Dark Stalker': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            7
        ]
    },
    'Dhampir': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            1, 7
        ]
    },
    'Dhampir (Fangs)': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7
        ]
    },
    'Drow': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            7
        ]
    },
    'Drow (Surface Infiltrator)': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Drow Noble': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            7
        ]
    },
    'Drow Noble (Surface Infiltrator)': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Duergar': {
        size: 'med',
        speed: {
            land: 20
        },
        senses: [
            7
        ]
    },
    'Dwarf': {
        size: 'med',
        speed: {
            land: 20
        },
        senses: [
            7
        ]
    },
    'Elf': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Elf (Darkvision)': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            7
        ]
    },
    'Gillmen': {
        size: 'med',
        speed: {
            land: 30,
            swim: 30
        },
        senses: [ ]
    },
    'Gnoll': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            7
        ]
    },
    'Half-Elf': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Half-Elf (Drow Blooded)': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            7
        ]
    },
    'Half-Orc': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            7
        ]
    },
    'Half-Orc (Toothy)': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            7
        ]
    },
    'Hobgoblin': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            7
        ]
    },
    'Human': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [ ]
    },
    'Kasatha': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [ ]
    },
    'Kitsune': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Kuru': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Lashunta': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [ ]
    },
    'Lizardfolk': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 30,
            swim: 15
        },
        senses: [ ]
    },
    'Locathah': {
        size: 'med',
        speed: {
            land: 10,
            swim: 60
        },
        senses: [
            1
        ]
    },
    'Merfolk': {
        size: 'med',
        speed: {
            land: 5,
            swim: 50
        },
        senses: [
            1
        ]
    },
    'Merfolk (Darkvision)': {
        size: 'med',
        speed: {
            land: 5,
            swim: 50
        },
        senses: [
            7
        ]
    },
    'Merfolk (Darkvision, Strongtail)': {
        size: 'med',
        speed: {
            land: 15,
            swim: 30
        },
        senses: [
            7
        ]
    },
    'Merfolk (Strongtail)': {
        size: 'med',
        speed: {
            land: 15,
            swim: 30
        },
        senses: [
            1
        ]
    },
    'Munavri': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            7
        ]
    },
    'Nagaji': {
        size: 'med',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Ogrekin': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Orc': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            1, 7
        ]
    },
    'Panotti': {
        size: 'med',
        attacks: [
            { name: 'Wing', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 30
        },
        senses: [ ]
    },
    'Reptoid': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 3, count: 2 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Rougarou': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Samsaran': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Sasquatch': {
        size: 'med',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 7, 14
        ]
    },
    'Sewer Troll': {
        size: 'med',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7, 14
        ]
    },
    'Skulk': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Strix': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            1, 7
        ]
    },
    'Syrinx': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            1, 7
        ]
    },
    'Tengu': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Tengu (Claw Attack)': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 3, count: 2 }
        ],
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Triaxian': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Troglodyte': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 30
        },
        senses: [
            7
        ]
    },
    'Udeaus': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Vanara': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Vishkanya': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            1
        ]
    },
    'Weremantis': {
        size: 'med',
        speed: {
            land: 40
        },
        senses: [
            7
        ]
    },
    'Wikkawak': {
        size: 'med',
        speed: {
            land: 30
        },
        senses: [
            7, 14
        ]
    },
    'Xulgath': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 2 }
        ],
        speed: {
            land: 30
        },
        senses: [
            7
        ]
    },
    'Medium Black Dragon': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['acid'], custom: '' } }, damageAbility: '', area: '100-ft line', templateShape: 'ray',  templateSize: '100' },
        ],
        speed: {
            land: 60,
            swim: 60
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 100ft line. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 20, operator: true, types: ['acid', ''] }
        ],
        di: [
            'acid'
        ]
    },
    'Medium Blue Dragon': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['electric'], custom: '' } }, damageAbility: '', area: '100-ft line', templateShape: 'ray',  templateSize: '100' },
        ],
        speed: {
            land: 40,
            burrow: 20
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 100ft line. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 20, operator: true, types: ['electric', ''] }
        ],
        di: [
            'electric'
        ]
    },
    'Medium Brass Dragon': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['fire'], custom: '' } }, damageAbility: '', area: '100-ft line', templateShape: 'ray',  templateSize: '100' },
        ],
        speed: {
            land: 60,
            burrow: 30
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 100ft line. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 20, operator: true, types: ['fire', ''] }
        ],
        di: [
            'fire'
        ],
        dv: [
            'cold'
        ]
    },
    'Medium Bronze Dragon': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['electric'], custom: '' } }, damageAbility: '', area: '100-ft line', templateShape: 'ray',  templateSize: '100' },
        ],
        speed: {
            land: 40,
            swim: 60
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 100ft line. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 20, operator: true, types: ['electric', ''] }
        ],
        di: [
            'electric'
        ]
    },
    'Medium Copper Dragon': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['acid'], custom: '' } }, damageAbility: '', area: '100-ft line', templateShape: 'ray',  templateSize: '100' },
        ],
        speed: {
            land: 40,
            climb: 20
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 100ft line. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300', 'SpiderClimbConstant'
        ],
        eres: [
            { amount: 5, operator: true, types: ['electric', ''] }
        ],
        di: [
            'acid'
        ]
    },
    'Medium Gold Dragon': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['fire'], custom: '' } }, damageAbility: '', area: '50-ft cone', templateShape: 'cone',  templateSize: '50' },
        ],
        speed: {
            land: 60,
            swim: 60
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 50ft cone. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 20, operator: true, types: ['fire', ''] }
        ],
        di: [
            'fire'
        ]
    },
    'Medium Green Dragon': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['acid'], custom: '' } }, damageAbility: '', area: '50-ft cone', templateShape: 'cone',  templateSize: '50' },
        ],
        speed: {
            land: 40,
            swim: 40
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 50ft cone. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 20, operator: true, types: ['acid', ''] }
        ],
        di: [
            'acid'
        ]
    },
    'Medium Red Dragon': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['fire'], custom: '' } }, damageAbility: '', area: '50-ft cone', templateShape: 'cone',  templateSize: '50' },
        ],
        speed: {
            land: 40
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 50ft cone. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 30, operator: true, types: ['fire', ''] }
        ],
        di: [
            'fire'
        ],
        dv: [
            'cold'
        ]
    },
    'Medium Silver Dragon': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['cold'], custom: '' } }, damageAbility: '', area: '50-ft cone', templateShape: 'cone',  templateSize: '50' },
        ],
        speed: {
            land: 40
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 50ft cone. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 30, operator: true, types: ['cold', ''] }
        ],
        di: [
            'cold'
        ],
        dv: [
            'fire'
        ]
    },
    'Medium White Dragon': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['cold'], custom: '' } }, damageAbility: '', area: '50-ft cone', templateShape: 'cone',  templateSize: '50' },
        ],
        speed: {
            land: 60,
            swim: 60
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 50ft cone. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 20, operator: true, types: ['cold', ''] }
        ],
        di: [
            'cold'
        ],
        dv: [
            'fire'
        ]
    },
    'Large Black Dragon': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['acid'], custom: '' } }, damageAbility: '', area: '100-ft line', templateShape: 'ray',  templateSize: '100' },
        ],
        speed: {
            land: 60,
            swim: 60
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 100ft line. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 20, operator: true, types: ['acid', ''] }
        ],
        di: [
            'acid'
        ]
    },
    'Large Blue Dragon': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['electric'], custom: '' } }, damageAbility: '', area: '100-ft line', templateShape: 'ray',  templateSize: '100' },
        ],
        speed: {
            land: 40,
            burrow: 20
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 100ft line. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 20, operator: true, types: ['electric', ''] }
        ],
        di: [
            'electric'
        ]
    },
    'Large Brass Dragon': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['fire'], custom: '' } }, damageAbility: '', area: '100-ft line', templateShape: 'ray',  templateSize: '100' },
        ],
        speed: {
            land: 60,
            burrow: 30
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 100ft line. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 20, operator: true, types: ['fire', ''] }
        ],
        di: [
            'fire'
        ],
        dv: [
            'cold'
        ]
    },
    'Large Bronze Dragon': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['electric'], custom: '' } }, damageAbility: '', area: '100-ft line', templateShape: 'ray',  templateSize: '100' },
        ],
        speed: {
            land: 40,
            swim: 60
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 100ft line. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 20, operator: true, types: ['electric', ''] }
        ],
        di: [
            'electric'
        ]
    },
    'Large Copper Dragon': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['acid'], custom: '' } }, damageAbility: '', area: '100-ft line', templateShape: 'ray',  templateSize: '100' },
        ],
        speed: {
            land: 40,
            climb: 20
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 100ft line. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300', 'SpiderClimbConstant'
        ],
        eres: [
            { amount: 5, operator: true, types: ['electric', ''] }
        ],
        di: [
            'acid'
        ]
    },
    'Large Gold Dragon': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['fire'], custom: '' } }, damageAbility: '', area: '50-ft cone', templateShape: 'cone',  templateSize: '50' },
        ],
        speed: {
            land: 60,
            swim: 60
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 50ft cone. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 20, operator: true, types: ['fire', ''] }
        ],
        di: [
            'fire'
        ]
    },
    'Large Green Dragon': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['acid'], custom: '' } }, damageAbility: '', area: '50-ft cone', templateShape: 'cone',  templateSize: '50' },
        ],
        speed: {
            land: 40,
            swim: 40
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 50ft cone. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 20, operator: true, types: ['acid', ''] }
        ],
        di: [
            'acid'
        ]
    },
    'Large Red Dragon': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['fire'], custom: '' } }, damageAbility: '', area: '50-ft cone', templateShape: 'cone',  templateSize: '50' },
        ],
        speed: {
            land: 40
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 50ft cone. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 30, operator: true, types: ['fire', ''] }
        ],
        di: [
            'fire'
        ],
        dv: [
            'cold'
        ]
    },
    'Large Silver Dragon': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['cold'], custom: '' } }, damageAbility: '', area: '50-ft cone', templateShape: 'cone',  templateSize: '50' },
        ],
        speed: {
            land: 40
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 50ft cone. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 30, operator: true, types: ['cold', ''] }
        ],
        di: [
            'cold'
        ],
        dv: [
            'fire'
        ]
    },
    'Large White Dragon': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['cold'], custom: '' } }, damageAbility: '', area: '50-ft cone', templateShape: 'cone',  templateSize: '50' },
        ],
        speed: {
            land: 60,
            swim: 60
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 50ft cone. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 20, operator: true, types: ['cold', ''] }
        ],
        di: [
            'cold'
        ],
        dv: [
            'fire'
        ]
    },
    'Huge Black Dragon': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['acid'], custom: '' } }, damageAbility: '', area: '100-ft line', templateShape: 'ray',  templateSize: '100' },
        ],
        speed: {
            land: 60,
            swim: 60
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 100ft line. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 20, operator: true, types: ['acid', ''] }
        ],
        di: [
            'acid'
        ]
    },
    'Huge Blue Dragon': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['electric'], custom: '' } }, damageAbility: '', area: '100-ft line', templateShape: 'ray',  templateSize: '100' },
        ],
        speed: {
            land: 40,
            burrow: 20
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 100ft line. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 20, operator: true, types: ['electric', ''] }
        ],
        di: [
            'electric'
        ]
    },
    'Huge Brass Dragon': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['fire'], custom: '' } }, damageAbility: '', area: '100-ft line', templateShape: 'ray',  templateSize: '100' },
        ],
        speed: {
            land: 60,
            burrow: 30
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 100ft line. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 20, operator: true, types: ['fire', ''] }
        ],
        di: [
            'fire'
        ],
        dv: [
            'cold'
        ]
    },
    'Huge Bronze Dragon': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['electric'], custom: '' } }, damageAbility: '', area: '100-ft line', templateShape: 'ray',  templateSize: '100' },
        ],
        speed: {
            land: 40,
            swim: 60
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 100ft line. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 20, operator: true, types: ['electric', ''] }
        ],
        di: [
            'electric'
        ]
    },
    'Huge Copper Dragon': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['acid'], custom: '' } }, damageAbility: '', area: '100-ft line', templateShape: 'ray',  templateSize: '100' },
        ],
        speed: {
            land: 40,
            climb: 20
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 100ft line. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300', 'SpiderClimbConstant'
        ],
        eres: [
            { amount: 5, operator: true, types: ['electric', ''] }
        ],
        di: [
            'acid'
        ]
    },
    'Huge Gold Dragon': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['fire'], custom: '' } }, damageAbility: '', area: '50-ft cone', templateShape: 'cone',  templateSize: '50' },
        ],
        speed: {
            land: 60,
            swim: 60
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 50ft cone. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 20, operator: true, types: ['fire', ''] }
        ],
        di: [
            'fire'
        ]
    },
    'Huge Green Dragon': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['acid'], custom: '' } }, damageAbility: '', area: '50-ft cone', templateShape: 'cone',  templateSize: '50' },
        ],
        speed: {
            land: 40,
            swim: 40
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 50ft cone. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 20, operator: true, types: ['acid', ''] }
        ],
        di: [
            'acid'
        ]
    },
    'Huge Red Dragon': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['fire'], custom: '' } }, damageAbility: '', area: '50-ft cone', templateShape: 'cone',  templateSize: '50' },
        ],
        speed: {
            land: 40
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 50ft cone. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 30, operator: true, types: ['fire', ''] }
        ],
        di: [
            'fire'
        ],
        dv: [
            'cold'
        ]
    },
    'Huge Silver Dragon': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['cold'], custom: '' } }, damageAbility: '', area: '50-ft cone', templateShape: 'cone',  templateSize: '50' },
        ],
        speed: {
            land: 40
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 50ft cone. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 30, operator: true, types: ['cold', ''] }
        ],
        di: [
            'cold'
        ],
        dv: [
            'fire'
        ]
    },
    'Huge White Dragon': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 },
            { name: 'Wing', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'TailSlap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'BreathWeapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: { formula: '12d8', type: { values: ['cold'], custom: '' } }, damageAbility: '', area: '50-ft cone', templateShape: 'cone',  templateSize: '50' },
        ],
        speed: {
            land: 60,
            swim: 60
        },
        senses: [
            11, 24
        ],
        effect: {
            'Breath': { note: 'Breath area: 50ft cone. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        special: [
            'FrightfulPresence300'
        ],
        eres: [
            { amount: 20, operator: true, types: ['cold', ''] }
        ],
        di: [
            'cold'
        ],
        dv: [
            'fire'
        ]
    }
};

MorphinChanges.allowedSpecials = {
    beastShape: {
        '1': ['Touch'],
        '2': ['Touch', 'Grab', 'Pounce', 'Trip'],
        '3': ['Touch', 'Grab', 'Pounce', 'Trip', 'Constrict', 'Ferocity', 'Jet90', 'Jet200', 'Jet240', 'Jet260', 'Poison', 'Rake1Claw', 'Rake2Claws', 'Rake4Claws', 'Rake6Claws', 'Rake2Talons', 'Trample', 'Web'],
        '4': ['Touch', 'Grab', 'Pounce', 'Trip', 'Constrict', 'Ferocity', 'Jet90', 'Jet200', 'Jet240', 'Jet260', 'Poison', 'Rake1Claw', 'Rake2Claws', 'Rake4Claws', 'Rake6Claws', 'Rake2Talons', 'Trample', 'Web', 'BreathWeapon','Breath', 'BreathWeaponBlack', 'BreathWeaponBlue', 'BreathWeaponGreen', 'BreathWeaponRed', 'BreathWeaponWhite', 'Rend', 'Roar', 'Spikes']
    },
    magicalBeastShape: {
        '1': ['Touch', 'Grab', 'Pounce', 'Trip', 'Constrict', 'Ferocity', 'Jet90', 'Jet200', 'Jet240', 'Jet260', 'Jet300', 'Poison', 'Rake1Claw', 'Rake2Claws', 'Rake4Claws','Rake6Claws', 
            'Rake2Talons', 'Trample', 'Web', 'BreathWeapon', 'Breath', 'BreathWeaponBlack', 'BreathWeaponBlue', 'BreathWeaponGreen', 'BreathWeaponRed', 'BreathWeaponWhite', 'Rend', 'Roar', 'Spikes', 'BloodDrain', 'BloodFrenzy', 'HoldBreath', 'NoBreath',
            'PowefulCharge', 'Pull']
    },
    plantShape: {
        '1': ['Touch', 'Constrict', 'Grab', 'Poison'],
        '2': ['Touch', 'Constrict', 'Grab', 'Poison'],
        '3': ['Touch', 'Constrict', 'Grab', 'Poison', 'Trample']
    },
    elementalBody: {
        '1': ['Whirlwind', 'Burn', 'Vortex'],
        '2': ['Whirlwind', 'Burn', 'Vortex'],
        '3': ['Whirlwind', 'Burn', 'Vortex'],
        '4': ['Whirlwind', 'Burn', 'Vortex']
    },
    verminShape: {
        '1': ['Touch', 'Lunge'],
        '2': ['Touch', 'BloodDrain', 'Constrict', 'Grab', 'Lunge', 'Poison', 'Pull', 'Trample', 'Web']
    },
    giantForm: {
        '1': ['Rend', 'RockCatching', 'RockThrowing'],
        '2': ['Rend', 'RockCatching', 'RockThrowing']
    },
    alterSelf: {
        '1': [ ]
    },
    formOfTheDragon: {
        '1': ['BreathWeapon', 'Breath', 'SpiderClimbConstant'],
        '2': ['BreathWeapon', 'Breath', 'SpiderClimbConstant'],
        '3': ['BreathWeapon', 'Breath', 'SpiderClimbConstant', 'FrightfulPresence300']
    }
};

MorphinChanges.allowedSenses = {
    beastShape: {
        '1': { 'dv': { static: 'DARKVISION', value: 60 }, 'll': { static:'LOWLIGHT', value: true }, 'sc': { static: 'SCENT', value: 30 } },
        '2': { 'dv': { static: 'DARKVISION', value: 60 }, 'll': { static:'LOWLIGHT', value: true }, 'sc': { static: 'SCENT', value: 30 } },
        '3': { 'bse': { static: 'BLINDSENSE', value: 30 }, 'dv': { static: 'DARKVISION', value: 60 }, 'll': { static:'LOWLIGHT', value: true }, 'sc': { static: 'SCENT', value: 30 } },
        '4': { 'bse': { static: 'BLINDSENSE', value: 60 }, 'dv': { static: 'DARKVISION', value: 90 }, 'll': { static:'LOWLIGHT', value: true }, 'sc': { static: 'SCENT', value: 30 }, 'ts': { static: 'TREMORSENSE', value: 60 } }
    },
    magicalBeastShape: {
        '1': { 'bse': { static: 'BLINDSENSE', value: 60 }, 'bs': { static: 'BLINDSIGHT', value: 30 }, 'dv': { static: 'DARKVISION', value: 90 }, 'll': { static:'LOWLIGHT', value: true },
            'sc': { static: 'SCENT', value: 30 }, 'sid': { static: 'SEEINDARKNESS', value: true }, 'ts': { static: 'TREMORSENSE', value: 60 } }
    },
    plantShape: {
        '1': { 'dv': { static: 'DARKVISION', value: 60 }, 'll': { static:'LOWLIGHT', value: true } },
        '2': { 'dv': { static: 'DARKVISION', value: 60 }, 'll': { static:'LOWLIGHT', value: true } },
        '3': { 'dv': { static: 'DARKVISION', value: 60 }, 'll': { static:'LOWLIGHT', value: true } }
    },
    elementalBody: {
        '1': { 'dv': { static: 'DARKVISION', value: 60 } },
        '2': { 'dv': { static: 'DARKVISION', value: 60 } },
        '3': { 'dv': { static: 'DARKVISION', value: 60 } },
        '4': { 'dv': { static: 'DARKVISION', value: 60 } }
    },
    verminShape: {
        '1': { 'dv': { static: 'DARKVISION', value: 60 }, 'll': { static:'LOWLIGHT', value: true }, 'sc': { static: 'SCENT', value: 30 } },
        '2': { 'dv': { static: 'DARKVISION', value: 60 }, 'll': { static:'LOWLIGHT', value: true }, 'sc': { static: 'SCENT', value: 30 }, 'ts': { static: 'TREMORSENSE', value: 30 } }
    },
    giantForm: {
        '1': { 'dv': { static: 'DARKVISION', value: 60 }, 'll': { static:'LOWLIGHT', value: true } },
        '2': { 'dv': { static: 'DARKVISION', value: 60 }, 'll': { static:'LOWLIGHT', value: true } }
    },
    alterSelf: {
        '1': { 'dv': { static: 'DARKVISION', value: 60 }, 'll': { static:'LOWLIGHT', value: true }, 'sc': { static: 'SCENT', value: 30 } }
    },
    formOfTheDragon: {
        '1': { 'dv': { static: 'DARKVISION', value: 60 } },
        '2': { 'dv': { static: 'DARKVISION', value: 60 } },
        '3': { 'dv': { static: 'DARKVISION', value: 120 }, 'bse': { static: 'BLINDSENSE', value: 60 } }
    }
};

MorphinChanges.allowedSpeeds = {
    beastShape: {
        '1': { climb: 30, fly: { base: 30, maneuverability: 'average' }, swim: 30 },
        '2': { climb: 60, fly: { base: 60, maneuverability: 'good' }, swim: 60 },
        '3': { burrow: 30, climb: 90, fly: { base: 90, maneuverability: 'good' }, swim: 90 } ,
        '4': { burrow: 60, climb: 90, fly: { base: 120, maneuverability: 'good' }, swim: 120 }
    },
    magicalBeastShape: {
        '1': { burrow: 60, climb: 90, fly: { base: 120, maneuverability: 'good' }, swim: 120 }
    },
    plantShape: {
        '1': { },
        '2': { },
        '3': { },
    },
    elementalBody: {
        '1': { fly: { base: 60, maneuverability: 'perfect' }, swim: 60 },
        '2': { fly: { base: 60, maneuverability: 'perfect' }, swim: 60 },
        '3': { fly: { base: 60, maneuverability: 'perfect' }, swim: 60 },
        '4': { fly: { base: 120, maneuverability: 'perfect' }, swim: 120 }
    },
    verminShape: {
        '1': { climb: 30, fly: { base: 30, maneuverability: 'average' }, swim: 30 },
        '2': { burrow: 30, climb: 60, fly: { base: 60, maneuverability: 'good' }, swim: 60 }
    },
    giantForm: {
        '1': { },
        '2': { swim: 60 }
    },
    alterSelf: {
        '1': { swim: 30 }
    },
    formOfTheDragon: {
        '1': { burrow: 30, climb: 20, fly: { base: 60, maneuverability: 'poor' }, swim: 60 },
        '2': { burrow: 30, climb: 20, fly: { base: 90, maneuverability: 'poor' }, swim: 60 },
        '3': { burrow: 30, climb: 20, fly: { base: 120, maneuverability: 'poor' }, swim: 60 }
    }
};

MorphinChanges.elementTypes = {
    elements: ['acid', 'cold', 'electric', 'fire', 'sonic'],
    energies: ['acid', 'cold', 'electric', 'fire', 'sonic', 'positive', 'negative']
};

MorphinChanges.allowedAttributes = {
    beastShape: {
        '1': { },
        '2': { },
        '3': { },
        '4': { di: { elements: MorphinChanges.elementTypes.elements, max: 20 }, eres: { elements: MorphinChanges.elementTypes.elements, max: 20 }, dv: { elements: MorphinChanges.elementTypes.elements } }
    },
    magicalBeastShape: {
        '1': { fastHealing: { max: 5 }, di: { elements: MorphinChanges.elementTypes.energies, max: 20 }, eres: { elements: MorphinChanges.elementTypes.energies, max: 20 }, dv: { elements: MorphinChanges.elementTypes.energies } }
    },
    plantShape: {
        '1': { dv: { elements: MorphinChanges.elementTypes.elements } },
        '2': { di: { elements: MorphinChanges.elementTypes.elements, max: 20 }, eres: { elements: MorphinChanges.elementTypes.elements, max: 20 }, dv: { elements: MorphinChanges.elementTypes.elements } },
        '3': { dr: true, regen: { max: 5 }, di: { elements: MorphinChanges.elementTypes.elements, max: 20 }, eres: { elements: MorphinChanges.elementTypes.elements, max: 20 }, dv: { elements: MorphinChanges.elementTypes.elements } }
    },
    elementalBody: {
        '1': { eres: { elements: ['fire'] }, dv: { elements: ['cold'] } },
        '2': { eres: { elements: ['fire'] }, dv: { elements: ['cold'] } },
        '3': { ci: { elements: ['bleed', 'sneakAttack', 'critical'] }, eres: { elements: ['fire'] }, dv: { elements: ['cold'] } },
        '4': { dr: true, ci: { elements: ['bleed', 'sneakAttack', 'critical'] }, eres: { elements: ['fire'] }, dv: { elements: ['cold'] } }
    },
    verminShape: {
        '1': { },
        '2': { }
    },
    giantForm: {
        '1': { regen: { max: 5 }, di: { elements: MorphinChanges.elementTypes.elements, max: 20 }, eres: { elements: MorphinChanges.elementTypes.elements, max: 20 }, dv: { elements: MorphinChanges.elementTypes.elements } },
        '2': { regen: { max: 5 }, di: { elements: MorphinChanges.elementTypes.elements }, eres: { elements: MorphinChanges.elementTypes.elements }, dv: { elements: MorphinChanges.elementTypes.elements } }
    },
    alterSelf: {
        '1': { }
    },
    formOfTheDragon: {
        '1': { eres: { elements: MorphinChanges.elementTypes.elements }, dv: { elements: MorphinChanges.elementTypes.elements } },
        '2': { eres: { elements: MorphinChanges.elementTypes.elements }, dv: { elements: MorphinChanges.elementTypes.elements }, dr: { max: 5 } },
        '3': { di: { elements: MorphinChanges.elementTypes.elements }, dv: { elements: MorphinChanges.elementTypes.elements }, dr: { max: 10 } }
    },
    shifterWildShape: {
        '1': { dr: true, regen: true, di: { elements: MorphinChanges.elementTypes.energies }, eres: { elements: MorphinChanges.elementTypes.energies }, dv: { elements: MorphinChanges.elementTypes.energies }, fastHealing: true }
    }
};

MorphinChanges.buffIcons = {
    alterSelf: 'systems/pf1/icons/skills/blue_35.jpg',
    beastShape: 'systems/pf1/icons/spells/wild-jade-3.jpg',
    magicalBeastShape: 'systems/pf1/icons/spells/wild-eerie-3.jpg',
    wildShape: 'systems/pf1/icons/skills/green_21.jpg',
    plantShape: 'systems/pf1/icons/spells/vines-plain-2.jpg',
    elementalBody: 'systems/pf1/icons/spells/wind-grasp-magenta-2.jpg',
    verminShape: 'systems/pf1/icons/races/creature-types/vermin.png',
    giantForm: 'systems/pf1/icons/skills/red_01.jpg',
    shifterWildShape: 'icons/magic/nature/wolf-paw-glow-green.webp',
    formOfTheDragon: 'systems/pf1/icons/races/creature-types/dragon.png'
};

MorphinChanges.SENSES = Object.freeze({
    LOWLIGHT: { value: 1, name: 'LowLightVision', setting: { ll: {enabled: true }} },
    DARKVISION10: { value: 2, name: 'Darkvision10', setting: { dv: 10 } },
    DARKVISION20: { value: 3, name: 'Darkvision20', setting: { dv: 20 } },
    DARKVISION30: { value: 4, name: 'Darkvision30', setting: { dv: 30 } },
    DARKVISION40: { value: 5, name: 'Darkvision40', setting: { dv: 40 } },
    DARKVISION50: { value: 6, name: 'Darkvision50', setting: { dv: 50 } },
    DARKVISION60: { value: 7, name: 'Darkvision60', setting: { dv: 60 } },
    DARKVISION70: { value: 8, name: 'Darkvision70', setting: { dv: 70 } },
    DARKVISION80: { value: 9, name: 'Darkvision80', setting: { dv: 80 } },
    DARKVISION90: { value: 10, name: 'Darkvision90', setting: { dv: 90 } },
    DARKVISION120: { value: 11, name: 'Darkvision120', setting: { dv: 120 } },
    SCENT10: { value: 12, name: 'Scent10', setting: { sc: 10 } },
    SCENT20: { value: 13, name: 'Scent20', setting: { sc: 20 } },
    SCENT30: { value: 14, name: 'Scent30', setting: { sc: 30 } },
    SCENT40: { value: 15, name: 'Scent40', setting: { sc: 40 } },
    SCENT50: { value: 16, name: 'Scent50', setting: { sc: 50 } },
    SCENT60: { value: 17, name: 'Scent60', setting: { sc: 60 } },
    BLINDSENSE10: { value: 18, name: 'Blindsense10', setting: { bse: 10 } },
    BLINDSENSE15: { value: 19, name: 'Blindsense15', setting: { bse: 15 } },
    BLINDSENSE20: { value: 20, name: 'Blindsense20', setting: { bse: 20 } },
    BLINDSENSE30: { value: 21, name: 'Blindsense30', setting: { bse: 30 } },
    BLINDSENSE40: { value: 22, name: 'Blindsense40', setting: { bse: 40 } },
    BLINDSENSE50: { value: 23, name: 'Blindsense50', setting: { bse: 50 } },
    BLINDSENSE60: { value: 24, name: 'Blindsense60', setting: { bse: 60 } },
    BLINDSENSE120: { value: 25, name: 'Blindsense120', setting: { bse: 120 } },
    TREMORSENSE10: { value: 26, name: 'Tremorsense10', setting: { ts: 10 } },
    TREMORSENSE15: { value: 27, name: 'Tremorsense15', setting: { ts: 15 } },
    TREMORSENSE20: { value: 28, name: 'Tremorsense20', setting: { ts: 20 } },
    TREMORSENSE30: { value: 29, name: 'Tremorsense30', setting: { ts: 30 } },
    TREMORSENSE40: { value: 30, name: 'Tremorsense40', setting: { ts: 40 } },
    TREMORSENSE50: { value: 31, name: 'Tremorsense50', setting: { ts: 50 } },
    TREMORSENSE60: { value: 32, name: 'Tremorsense60', setting: { ts: 60 } },
    TREMORSENSE120: { value: 33, name: 'Tremorsense120', setting: { ts: 120 } },
    BLINDSIGHT10: { value: 34, name: 'Blindsight10', setting: { bs: 10 } },
    BLINDSIGHT15: { value: 35, name: 'Blindsight15', setting: { bs: 15 } },
    BLINDSIGHT20: { value: 36, name: 'Blindsight20', setting: { bs: 20 } },
    BLINDSIGHT30: { value: 37, name: 'Blindsight30', setting: { bs: 30 } },
    BLINDSIGHT90: { value: 38, name: 'Blindsight90', setting: { bs: 90 } },
    BLINDSIGHT120: { value: 39, name: 'Blindsight120', setting: { bs: 120 } },
    SEEINDARKNESS: { value: 40, name: 'SeeInDarkness', setting: { sid: true } },
    TREMORSENSE90: { value: 41, name: 'Tremorsense90', setting: { ts: 90 } },
    BLINDSIGHT60: { value: 42, name: 'Blindsight60', setting: { bs: 60 } } 
});

MorphinChanges.flightManeuverability = ['clumsy', 'poor', 'average', 'good', 'perfect'];