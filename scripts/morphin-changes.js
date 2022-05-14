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
    reducePerson: {
        changes: [
            { formula: '-2', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: -2 },
            { formula: '2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 2 }
        ],
        size: -1
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
    elementalBody: {
        air: {
            sm: {
                changes: [
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 2 },
                    { formula: '2', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 2 }
                ]
            },
            med: {
                changes: [
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 4 },
                    { formula: '3', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 3 }
                ]
            },
            lg: {
                changes: [
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 2 },
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 4 },
                    { formula: '4', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 4 }
                ]
            },
            huge: {
                changes: [
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 4 },
                    { formula: '6', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 6 },
                    { formula: '4', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 4 }
                ]
            }
        },
        earth: {
            sm: {
                changes: [
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 2 },
                    { formula: '4', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 4 }
                ]
            },
            med: {
                changes: [
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 4 },
                    { formula: '5', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 5 }
                ]
            },
            lg: {
                changes: [
                    { formula: '6', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 6 },
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 2 },
                    { formula: '-2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'untyped', priority: 0, value: -2 },
                    { formula: '6', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 6 }
                ]
            },
            huge: {
                changes: [
                    { formula: '8', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 8 },
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 4 },
                    { formula: '-2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'untyped', priority: 0, value: -2 },
                    { formula: '6', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 6 }
                ]
            }
        },
        fire: {
            sm: {
                changes: [
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 2 },
                    { formula: '2', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 2 }
                ]
            },
            med: {
                changes: [
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 4 },
                    { formula: '3', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 3 }
                ]
            },
            lg: {
                changes: [
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 2 },
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 4 },
                    { formula: '4', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 4 }
                ]
            },
            huge: {
                changes: [
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 4 },
                    { formula: '6', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'size', priority: 0, value: 6 },
                    { formula: '4', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 4 }
                ]
            }
        },
        water: {
            sm: {
                changes: [
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 2 },
                    { formula: '4', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 4 }
                ]
            },
            med: {
                changes: [
                    { formula: '4', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 4 },
                    { formula: '5', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 5 }
                ]
            },
            lg: {
                changes: [
                    { formula: '6', operator: 'add', target: 'ability', subTarget: 'con', modifier: 'size', priority: 0, value: 6 },
                    { formula: '2', operator: 'add', target: 'ability', subTarget: 'str', modifier: 'size', priority: 0, value: 2 },
                    { formula: '-2', operator: 'add', target: 'ability', subTarget: 'dex', modifier: 'untyped', priority: 0, value: -2 },
                    { formula: '6', operator: 'add', subTarget: 'nac', modifier: 'untyped', priority: 0, value: 6 }
                ]
            },
            huge: {
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
    'Badger, Dire': {
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
            1, 11
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
            1, 11
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
            1, 11
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
            1, 11, 14
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
            1, 11
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
            1, 11
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
            11
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
            1, 11
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
            { name: 'Tail', diceCount: 1, diceSize: 4, count: 1, type: 'B and P' }
        ],
        speed: {
            land: 30,
            climb: 20
        },
        senses: [
            1, 11
        ]
    },
    'Dimorphodon': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 10,
            fly: 30
        },
        senses: [
            1, 11
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
            1, 17
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
            1, 11
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
            1, 11
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
    'Giant Porcupine': {
        size: 'med',
        attacks: [
            { name: 'Tail Slap', diceCount: 2, diceSize: 6, count: 1 }
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
            fly: 50
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
            1, 11
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
            1, 11
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
            1, 11
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
            1, 11
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
            11, 14
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
            1, 11
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
            1, 11
        ],
        special: [
            'Pounce', 'Rake (2 Claws)'
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
            1, 11
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
            1, 11
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
            1, 11
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
            1, 11
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
            1, 11
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
            1, 11
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
            'Jet 240ft'
        ]
    },
    'Stag': {
        size: 'med',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 50
        },
        senses: [
            1, 11
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
            1, 14
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
            1, 11
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
            1, 11
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
            1, 11
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
            1, 11
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
            1, 11
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
            1, 11
        ]
    },
    'Blackwisp Egret': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 10,
            fly: 40
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
            1, 4, 11
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
            1, 11
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
            1, 11
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
            fly: 80
        },
        senses: [
            1
        ]
    },
    'Electric Eel': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 },
            { name: 'Tail', diceCount: 1, diceSize: 6, count: 1, type: 'Electricity', special: ['Touch'] }
        ],
        speed: {
            land: 5,
            swim: 30
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
            fly: 60
        },
        senses: [
            1
        ]
    },
    'Octopus': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1, special: ['Grab', 'Poison'] }
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
            'Jet 200ft'
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
            1, 11
        ]
    },
    'Pilo': {
        size: 'sm',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 6, count: 1, special: 'Poison' },
            { name: 'Tail Slap', diceCount: 1, diceSize: 4, count: 1 },
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 11
        ]
    },
    'Quillcat': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 },
            { name: 'Tail Slap', diceCount: 1, diceSize: 4, count: 1, type: 'P', primaryAttack: true }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 11
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
            1, 11
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
            1, 11
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
            fly: 100
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
            1, 11
        ]
    },
    'Vulture': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 10,
            fly: 50
        },
        senses: [
            1, 11
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
            1, 11
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature’s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a –4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature’s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
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
            1, 11
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature’s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a –4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature’s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
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
            1, 11
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature’s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a –4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature’s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
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
            1, 11
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
            1, 11
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
            1, 11
        ]
    },
    'Crocodile': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Tail Slap', diceCount: 1, diceSize: 12, count: 1 }
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
            1, 11
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
            1, 11
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
            fly: 40
        },
        senses: [
            14
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
            1, 11
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
            1, 11
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
            1, 11
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
            1, 11
        ],
        special: [
            'Pounce', 'Rake (2 Claws)'
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
            1, 11
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
            1, 11
        ],
        special: [
            'Pounce', 'Rake (2 Claws)'
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
            1, 11
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
            1, 11
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
            1, 11
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
            1, 11
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
            fly: 20
        },
        senses: [
            1, 11
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
            1, 11
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
            1, 11
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
            'Jet 200ft'
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
            swaim: 30
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
            1, 11
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
            1, 11
        ]
    },
    'Giant Vulture': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 10,
            fly: 50
        },
        senses: [
            1, 11
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
            1, 11
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
            1, 11
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
            1, 11
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
            1, 11
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
            14, 11
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
            14, 11
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
            1, 11
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature’s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a –4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature’s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
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
            1, 11
        ]
    },
    'Impaler Shrike': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['Grab'] }
        ],
        speed: {
            land: 10,
            fly: 60
        },
        senses: [
            1
        ]
    },
    'Kentrosaurus': {
        size: 'lg',
        attacks: [
            { name: 'Tail', diceCount: 2, diceSize: 6, count: 1, type: 'P' }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 11
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
            1, 11
        ],
        special: [
            'Pounce', 'Rake (2 Claws)'
        ]
    },
    'Manta Ray': {
        size: 'lg',
        attacks: [
            { name: 'Tail Slap', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            swim: 60
        },
        senses: [
            1, 14
        ]
    },
    'Marax': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Talon', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'Tail Barbs', diceCount: 1, diceSize: 6, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 11
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
            1, 11
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
            1, 17
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
            1, 11
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
            1, 11
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
            1, 11
        ]
    },
    'Pteranodon': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 10,
            fly: 50
        },
        senses: [
            1, 11
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
            11
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
            14, 11
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
            1, 11
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
            1, 11
        ],
        special: [
            'Pounce', 'Rake (2 Claws)'
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
            1, 11
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature’s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a –4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature’s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
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
            11
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature’s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a –4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature’s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Archaeopteryx': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 40,
            fly: 40,
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
            1, 11
        ]
    },
    'Chicken': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 30,
            fly: 20
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
            1, 11
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
            fly: 60
        },
        senses: [
            1, 11
        ]
    },
    'Flying Squirrel': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 20,
            fly: 40
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
            1, 11
        ]
    },
    'Hawk': {
        size: 'tiny',
        attacks: [
            { name: 'Talon', diceCount: 1, diceSize: 3, count: 2 }
        ],
        speed: {
            land: 10,
            fly: 60
        },
        senses: [
            1, 11
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
            fly: 60
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
            fly: 40
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
            { name: 'Tail Slap', diceCount: 1, diceSize: 3, count: 1 }
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
            1, 11
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
            swin: 15
        },
        senses: [
            1, 11
        ]
    },
    'Raven': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 10,
            fly: 40
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
            1, 11
        ]
    },
    'Rhamphorhynchus': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 10,
            fly: 40
        },
        senses: [
            1
        ]
    },
    'Rock Tuatara': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 },
            { name: 'Tail Slap', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 20,
            climb: 20
        },
        senses: [
            1, 10
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
            1, 11
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
            1, 11
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
            1, 11
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
            1, 11
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
            1, 11
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
            1, 11
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
            1, 11
        ],
        special: [
            'Pounce', 'Rake (2 Claws)'
        ]
    },
    'Amargasaurus': {
        size: 'huge',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Tail Slap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 1, diceSize: 8, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 11
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature’s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a –4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature’s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
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
            1, 11
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
            1, 11
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
            1, 11
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature’s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a –4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature’s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
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
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature’s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a –4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature’s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
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
            1, 11
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature’s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a –4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature’s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
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
            1, 11
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Tentacle' }
        },
        special: [
            'Jet 90ft'
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
            1, 11
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature’s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a –4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature’s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
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
            1, 11
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
            1, 11
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature’s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a –4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature’s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
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
            1, 11
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature’s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a –4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature’s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
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
            1, 11
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
            { name: 'Tentacles', diceCount: 4, diceSize: 6, count: 1, special: ['Grab', 'Constrict'] }
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
            'Jet 260ft'
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
            1, 11, 14
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
            1, 11
        ]
    },
    'Kaprosuchus': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Tail Slap', diceCount: 2, diceSize: 6, count: 1 }
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
            { name: 'Tail Slap', diceCount: 2, diceSize: 6, count: 1, special: ['Grab', 'Constrict'] }
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
            1, 11
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature’s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a –4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature’s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
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
            1, 11
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
            1, 11
        ],
        effect: {
            'Rend': { note: 'Rend if both claws hit, added to second claw damage. [[/d sizeRoll(1, 6, @size, 5) # Rend damage added to second claw]]{{Roll Rend Damage}}' }
        }
    },
    'Mokele-Mbembe': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Tail Slap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 1, diceSize: 8, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 30,
            swim: 30
        },
        senses: [
            1, 11
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature’s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a –4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature’s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
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
            1, 11
        ]
    },
    'Quetzalcoatlus': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1 },
            { name: 'Tail Slap', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 30,
            fly: 50
        },
        senses: [
            1, 11
        ]
    },
    'Saltwater Crocodile': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Tail Slap', diceCount: 1, diceSize: 8, count: 1 }
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
            1, 11
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
            1, 11
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature’s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a –4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature’s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Yolubilis Heron': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 30,
            fly: 60
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
            fly: 40
        },
        senses: [
            1, 13
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
            fly: 30
        },
        senses: [
            1, 11
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
            1, 11
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
            'Web': { note: 'Web: Touch attack to entangle up to one size category higher, escaped with escape artist or burst with strength. DC 10+SL+Mod.', description: '<p>Creatures with the web ability can use webs to support themselves and up to one additional creature of the same size. In addition, such creatures can throw a web up to eight times per day. This is similar to an attack with a net but has a maximum range of 50 feet, with a range increment of 10 feet, and is effective against targets up to one size category larger than the web spinner. An entangled creature can escape with a successful Escape Artist check or burst the web with a Strength check. Both are standard actions with a DC equal to 10 + Spell Level + Caster Stat Mod. Attempts to burst a web by those caught in it take a –4 penalty.</p><p>Web spinners can create sheets of sticky webbing up to three times their size. They usually position these sheets to snare flying creatures but can also try to trap prey on the ground. Approaching creatures must succeed on a DC 20 Perception check to notice a web; otherwise they stumble into it and become trapped as though by a successful web attack. Attempts to escape or burst the webbing gain a +5 bonus if the trapped creature has something to walk on or grab while pulling free. Each 5-foot-square section of web has a number of hit points equal to the Hit Dice of the creature that created it ([[@attributes.hd.total]])and DR 5/—.</p><p>A creature can move across its own web at its climb speed and can pinpoint the location of any creature touching its web.</p>' },
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
            fly: 60
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
            1, 7, 11
        ]
    },
    'Bunyip': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 10,
            swim: 50
        },
        senses: [
            1, 7, 11
        ]
    },
    'Delgeth': {
        size: 'med',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 8, count: 1, nonCrit: ['1d6', 'Fire'] },
            { name: 'Hoof', diceCount: 1, diceSize: 4, count: 2, nonCrit: ['1d6', 'Fire'] }
        ],
        speed: {
            land: 50,
        },
        senses: [
            1, 7, 11
        ],
        eres: [
            'Fire 20'
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
            7, 11
        ]
    },
    'Galvo': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, nonCrit: ['2d6', 'Electricity'] },
            { name: 'Slam', diceCount: 1, diceSize: 4, count: 2, nonCrit: ['2d6', 'Electricity'] }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 14, 7
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
            1, 7, 11
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
            1, 7, 11
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 10 rounds; effect 1d4 acid and 1d2 Con damage; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures' }
        },
    },
    'Kaicharek': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, specail: ['Grab'] },
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
            1, 7, 11
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
            1, 7, 11
        ]
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
            1, 7, 11
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
            fly: 60
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
            fly: 50
        },
        senses: [
            1, 7, 11
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Bite' },
            'Poison': { note: 'Poison (Ex) Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d4 Dex damage; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures' }
        },
    },
    'Ramidreju': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Grab', 'Constrict'] }
        ],
        speed: {
            land: 40,
            burrow: 10,
            climb: 20
        },
        senses: [
            1, 7, 11
        ],
        effect: {
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
            'Pounce', 'Rake (2 Claws)'
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
            fly: 60
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
            1, 7, 11
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
            1, 7, 11
        ],
        special: [
            'Pounce', 'Rake (2 Claws)'
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
        eres: [
            'Acid 10', 'Cold 10'
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
            1, 7, 11
        ]
    },
    'Uraeus': {
        size: 'med',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 2, special: ['Poison'] }
        ],
        specialAttack: [
            { name: 'Breath Weapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'] }
        ],
        speed: {
            land: 20,
            climb: 20,
            fly: 50,
            swim: 20
        },
        senses: [
            1, 7, 11
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Bite or breath weapon—contact or injury; save Fort DC 10+SL+Mod; frequency 1/round for 2 rounds; initial effect blinded and paralyzed for 1 round; secondary effect blinded for 2d4 rounds; cure 2 consecutive saves.', type: 'fort', saveDesc: 'Fort Cures' },
            'Breath': { note: 'Breath area: 30ft line. Creatures in area blinded and save vs poison', type: 'ref', saveDesc: 'Reflex avoids both', description: '<p>Once every 1d4 rounds, as a standard action, a uraeus’s head can expel a 30-footline of poison. All creatures in the area are blinded for 1 round and must save against poison (Reflex DC 10 + spell level + caster stat mod negates both). As a full-round action, a uraeus can either expel two lines or bite with one head and breathe poison with the other. Each head tracks its breath weapon’s availability separately.</p><p>Bite or breath weapon—contact or injury; save Fort DC 10+SL+Mod; frequency 1/round for 2 rounds; initial effect blinded and paralyzed for 1 round; secondary effect blinded for 2d4 rounds; cure 2 consecutive saves.</p>' }
        }
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
            1, 7, 11
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
            1, 7, 11
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
            1, 7, 11
        ],
        special: [
            'Ferocity', 'Rake (4 Claws)'
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
            fly: 50
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
            fly: 60
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
            fly: 30
        },
        senses: [
            1, 7
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Bite' }
        }
    },
    'Echeneis': {
        size: 'sm',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 },
            { name: 'Tail Slap', diceCount: 1, diceSize: 4, count: 1 }
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
            fly: 60
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
            fly: 50
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
            1, 7, 11
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
            { name: 'Tail Slap', diceCount: 1, diceSize: 8, count: 1, nonCrit: ['1d6', 'Cold'] }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7
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
            fly: 20,
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
            fly: 60
        },
        senses: [
            1, 7
        ],
        eres: [
            'Cold 5'
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
            fly: 60
        },
        senses: [
            1, 7, 11
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
            { name: 'Tail Claw', diceCount: 1, diceSize: 8, count: 2, special: ['Grab'] }
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
            1, 7, 11
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Bite—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d3 Con; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        },
        eres: [
            'Cold 10'
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
            fly: 60
        },
        senses: [
            1, 7
        ],
        special: [
            'Pounce', 'Rake (2 Claws)'
        ],
        effect: {
            'Roar': { note: 'Roar 1: Frightened 2d6 rounds. Will negates\nRoar 2: Paralyzed with fear, deafened 1d4 rounds. Will negates\nRoar 3: 2d4 Str penalty for 2d4 rounds, 2d8 damage [[/d 2d8 # Sonic damage]]{Roll}. Smaller creatures knocked prone. Fort negates penalty and prone.', description: '<p>An androsphinx can roar up to three times per day as a standard action. Each progressive roar has a different effect, depending upon whether it is the first, second, or third of the androsphinx’s roars for that day. All of these roars are sonic effects that fill a 60-foot-radius burst, centered on the androsphinx; the save DCs are 10 + spell level + caster stat mod. Sphinxes are immune to all of the effects of an androsphinx’s roars.</p><ul><li>First Roar: Affected creatures become frightened for 2d6 rounds (Will negates). This is a mind-affecting fear effect in addition to being a sonic effect.</li><li>Second Roar: Affected creatures are paralyzed with fear and deafened for 1d4 rounds (Will negates). This is a mind-affecting fear effect in addition to being a sonic effect.</li><li>Third Roar: Affected creatures take a 2d4 penalty to Strength for 2d4 rounds and take 2d8 points of sonic damage. Creatures smaller than the androsphinx are knocked prone. A DC 19 Fortitude save negates the Strength penalty and being knocked prone.</li></ul>' }
        }
    },
    'Ankheg': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Grab'], nonCrit: ['1d4', 'Acid'] }
        ],
        speed: {
            land: 30,
            burrow: 20
        },
        senses: [
            1, 7, 24
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
            1, 7, 11
        ]
    },
    'Burstigeit': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 8, count: 1 }
        ],
        speed: {
            land: 30,
            climb: 20
        },
        senses: [
            1, 7, 11
        ],
        eres: [
            'Cold 5', 'Fire 5'
        ],
        special: [
            'Ferocity'
        ]
    },
    'Camulatz': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Talon', diceCount: 1, diceSize: 6, count: 2, special: ['Rend'] }
        ],
        speed: {
            land: 10,
            fly: 80
        },
        senses: [
            1, 7, 11
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
            { name: 'Breath Weapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'] },
            { name: 'Trample', diceCount: 4, diceSize: 6, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }
        ],
        speed: {
            land: 40,
            swim: 20
        },
        senses: [
            1, 7, 11
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature’s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a –4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature’s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' },
            'Breath': { note: 'Breath area: 60ft cone. Poison: DC 10+SL+Mod; frequency 1/ round for 6 rounds; effect 1d6 Con damage; cure 3 consecutive saves.', type: 'fort', saveDesc: 'Fort cures', description: '<p>Poison Breath (Ex)</p><p>Usable once every 1d4 rounds, as a standard action.  A catoblepas’s horrid, stinking breath is 60-foot cone of poison gas. Breath—contact; save Fort DC 10+SL+Mod; frequency 1/ round for 6 rounds; effect 1d6 Con damage; cure 3 consecutive saves.</p>' }
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
            1, 7, 11
        ]
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
            1, 7, 11
        ],
        special: [
            'Pounce', 'Rake (1 Claw)'
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
            { name: 'Breath Weapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: ['6d8', 'see desc'] }
        ],
        speed: {
            land: 30,
            fly: 50
        },
        senses: [
            1, 7, 11
        ],
        effect: {
            'Breath': { note: 'Breath area: see description.', type: 'ref', saveDesc: 'Reflex for half', description: '<p>A chimera’s breath weapon depends on the color of its dragon head, as summarized on the table below. Regardless of its type, a chimera’s breath weapon is usable once every 1d4 rounds, deals 6d8 points of damage, and allows a Reflex save for half damage, DC 10 + spell level + caster stat mod.</p><p>To determine a chimera’s head color and breath weapon randomly, roll 1d10 and consult the table below:</p><table><thead><tr><th class="number">d10</th><th>Head Color</th><th>Breath Weapon</th></tr></thead><tbody><tr><td>1–2</td><td>Black</td><td>40-foot line of acid</td></tr><tr><td>3–4</td><td>Blue</td><td>40-foot line of lightning</td></tr><tr><td>5–6</td><td>Green</td><td>20-foot cone of acid</td></tr><tr><td>7–8</td><td>Red</td><td>20-foot cone of fire</td></tr><tr><td>9–10</td><td>White</td><td>20-foot cone of cold</td></tr></tbody></table>' }
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
            fly: 60
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
            1, 7, 11
        ]
    },
    'Death Worm': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 8, count: 1, special: ['Poison'] }
        ],
        specialAttack: [
            { name: 'Breath Weapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], attackType: 'save', nonCrit: ['8d6', 'Acid'] }
        ],
        speed: {
            land: 20,
            burrow: 20
        },
        senses: [
            1, 7, 24
        ],
        effect: {
            'Poison': { note: 'Poison (Ex) Bite-injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d2 Con damage; cure 2 saves.', type: 'fort', saveDesc: 'Fort Cures' },
            'Breath': { note: 'Breath area: 30ft line. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Usable once every 1d4 rounds</p>' }
        },
        eres: [
            'Acid 20', 'Electricity 20'
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
            'Cold 10'
        ],
        special: [
            'Jet 240ft'
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
    'Estuarine Worm': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Grab', 'Constrict'] },
            { name: 'Tail Slap', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 30,
            burrow: 10,
            swim: 10
        },
        senses: [
            1, 7, 21
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Bite' }
        },
        eres: [
            'Acid 10', 'Fire 10'
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
            11, 14, 24
        ],
        eres: [
            'Fire 20'
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
        eres: [
            'Cold 20'
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
            1, 7, 24
        ],
        eres: [
            'Acid 10', 'Cold 10'
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
            fly: 80
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
            1, 7, 11
        ],
        effect: {
            'Rend': { note: 'Rend if all claws hit, added to last claw damage. [[/d sizeRoll(1, 4, @size, 5) # Rend damage added to second claw]]{{Roll Rend Damage}}' }
        }
    },
    'Glacier Toad': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, special: ['Grab'], nonCrit: ['1d6', 'Cold'] }
        ],
        speed: {
            land: 30,
            swim: 15
        },
        senses: [
            1, 11
        ],
        eres: [
            'Cold 20'
        ],
        dv: [
            'fire'
        ]
    },
    'Gnoph-Keh': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 4 }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 7
        ],
        eres: [
            'Cold 20'
        ],
        dv: [
            'fire'
        ]
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
            'Acid 15', 'Cold 20', 'Electricity 15', 'Fire 20', 'Sonic 15'
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
            1, 7, 24
        ],
        eres: [
            'Cold 10'
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
            { name: 'Breath Weapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'] },
            { name: 'Trample', diceCount: 2, diceSize: 8, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' }

        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7, 11
        ],
        effect: {
            'Breath': { note: 'Breath area: 60ft cone. Creatures in area petrified. Save each round. Second breath effect while petrified makes permanent', type: 'ref', saveDesc: 'Reflex avoids both', description: '<p>A gorgon can use its breath weapon once every 1d4+1 rounds to create a 60-foot cone of green gas. Those caught in the area of the gas can attempt a DC 10 + spell level + caster stat mod Fortitude save to resist the effects, but those who fail the save are immediately petrified. This petrification is temporary—each round, a petrified creature can attempt a new Fortitude save to recover from the petrification as long as it is not caught within the area of effect of the gorgon’s breath weapon a second time while petrified. A creature exposed to the gorgon’s breath a second time while already petrified becomes permanently petrified, and can no longer attempt to make additional Fortitude saves to recover naturally.</p>' },
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature’s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a –4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature’s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
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
            1, 7, 11
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
            1, 7, 11
        ],
        special: [
            'Pounce', 'Rake (2 Talons)'
        ]
    },
    'Gynosphinx': {
        size: 'lg',
        attacks: [
            { name: 'Claw', diceCount: 2, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 40,
            fly: 60
        },
        senses: [
            1, 7
        ],
        special: [
            'Pounce', 'Rake (2 Claws)'
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
            fly: 60
        },
        senses: [
            1, 7, 11
        ],
        special: [
            'Pounce'
        ]
    },
    'Hippocampus': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 4, count: 1 },
            { name: 'Tail Slap', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 5,
            swim: 60
        },
        senses: [
            1, 7, 11
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
            fly: 100
        },
        senses: [
            1, 7, 11
        ]
    },
    'Hodag': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 1, diceSize: 6, count: 2 },
            { name: 'Tail Slap', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 30,
            burrow: 15
        },
        senses: [
            1, 7, 11
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
            fly: 40
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
            { name: 'Breath Weapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'] }
        ],
        speed: {
            land: 40
        },
        senses: [
            1, 7, 11
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
            { name: 'Gore', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Hoof', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 50
        },
        senses: [
            1, 7, 11
        ],
        eres: [
            'Fire 5'
        ]
    },
    'Kirin': {
        size: 'lg',
        attacks: [
            { name: 'Gore', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Hoof', diceCount: 1, diceSize: 6, count: 2 }
        ],
        specialAttack: [
            { name: 'Breath Weapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], nonCrit: ['5d6', 'Fire'] }
        ],
        speed: {
            land: 60,
            fly: 120
        },
        senses: [
            1, 7, 11
        ],
        eres: [
            'Cold 10', 'Electricity 20', 'Fire 10'
        ],
        effect: {
            'Breath': { note: 'Breath area: 15ft cone. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Once every 1d4 rounds. 5d6 fire damage to all creatures in 15-foot cone. Reflex save DC 10 + spell level + caster stat mod for half damage.</p>' }
        }
    },
    'Lammasu': {
        size: 'lg',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 8, count: 2 },
            { name: 'Hoof', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 30,
            fly: 60
        },
        senses: [
            1, 7
        ],
        special: [
            'Pounce', 'Rake (2 Claws)'
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
            1, 7, 11
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
            fly: 20
        },
        senses: [
            1, 7, 11
        ],
        eres: [
            'Cold 5', 'Fire 5'
        ],
        special: [
            'Pounce', 'Rake (2 Claws)'
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
            1, 7, 11
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature’s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a –4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature’s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Manticore': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Claw', diceCount: 2, diceSize: 4, count: 2 }
        ],
        specialAttack: [
            { name: 'Spikes', diceCount: 1, diceSize: 6, count: 4, attackType: 'rwak', charges: 6, range: 180, increment: 1 }
        ],
        speed: {
            land: 30,
            fly: 50
        },
        senses: [
            1, 7, 11
        ]
    },
    'Mirror Serpent': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, special: ['Grab'] }
        ],
        speed: {
            land: 40,
            fly: 60,
            swim: 40
        },
        senses: [
            1, 7
        ],
        eres: [
            'Cold 5', 'Electricity 5'
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
            1, 7, 11
        ],
        special: [
            'Pounce', 'Rake (2 Claws)'
        ]
    },
    'Mobat': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 20,
            fly: 40
        },
        senses: [
            1, 17
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
            fly: 20
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
            1, 7, 11
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
            fly: 120
        },
        senses: [
            1, 7, 11
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
            1, 7, 24
        ],
        eres: [
            'Fire 20'
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
            1, 7, 11
        ],
        effect: {
            'Rend': { note: 'Rend if both claws hit, added to second claw damage. [[/d sizeRoll(1, 6, @size, 5) # Rend damage added to second claw]]{{Roll Rend Damage}}' }
        }
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
            'Fire 10', 'Sonic 10'
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature’s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a –4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature’s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
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
            1, 7, 11, 24
        ],
        special: [
            'Rake (2 Claws)'
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
            fly: 60
        },
        senses: [
            1, 7
        ],
        eres: [
            'Electricity 10', 'Fire 10'
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature’s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a –4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature’s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
        }
    },
    'Skrik Nettle': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 10,
            fly: 30
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
            { name: 'Hoof', diceCount: 1, diceSize: 8, count: 4 }
        ],
        specialAttack: [
            { name: 'Trample', diceCount: 1, diceSize: 8, count: 1, special: ['Trample'], mult: 1.5, attackType: 'mcman' },
            { name: 'Breath Weapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], charges: 3 }
        ],
        speed: {
            land: 80
        },
        senses: [
            1, 7
        ],
        eres: [
            'Cold 10', 'Electricity 20'
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature’s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a –4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature’s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' },
            'Breath': { note: 'Breath area: 30ft cone. Creatures in area hit by prismatic spray spell (see spell for effect and save type)', description: '<p>As a standard action, a sleipnir can exhale a 30-foot cone of shimmering, rainbow-colored light. Every creature in the area is randomly struck by one or more beams, as a prismatic spray spell (DC 10 + spell level + caster stat mod  half or negates). The sleipnir may use this ability once every 1d6 rounds, up to 3 times per day.</p>' }
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
            fly: 60
        },
        senses: [
            1, 7, 11
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
            land: 30,
            fly: 60
        },
        senses: [
            1
        ],
        eres: [
            'Fire 20'
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
        ]
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
            'Cold 10'
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
            { name: 'Gore', diceCount: 1, diceSize: 8, count: 1 },
            { name: 'Hoof', diceCount: 1, diceSize: 3, count: 2 }
        ],
        speed: {
            land: 60
        },
        senses: [
            1, 7, 11
        ]
    },
    'Winter Wolf': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 8, count: 1, nonCrit: ['1d6', 'Cold'], special: ['Trip'] }
        ],
        specialAttack: [
            { name: 'Breath Weapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], nonCrit: ['6d6', 'Cold'] }
        ],
        speed: {
            land: 50
        },
        senses: [
            1, 7, 11
        ],
        effect: {
            'Breath': { note: 'Breath area: 15ft cone. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Once every 1d4 rounds, 15-foot cone for 6d6 cold damage (Reflex DC 10 + spell level + caster stat mod for half damage).</p>' }
        },
        eres: [
            'Cold 20'
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
            1, 7, 11
        ],
        eres: [
            'Cold 5'
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
            1, 7, 11, 19
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
            fly: 20
        },
        senses: [
            1, 7, 11, 21
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
    'Chuspiki': {
        size: 'tiny',
        attacks: [
            { name: 'Tail Fan', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 30,
            fly: 60
        },
        senses: [
            1, 7, 11
        ]
    },
    'Coral Capuchin': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 30,
            burrow: 30,
            climb: 30,
            fly: 40
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
            fly: 50,
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
            'Pounce', 'Rake (2 Claws)'
        ]
    },
    'Galluvix': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 6, count: 1 }
        ],
        speed: {
            land: 30,
            fly: 20
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
        effect: {
            'Poison': { note: 'Poison (Ex) Injury—bite; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d4 fire damage; cure 1 save.', type: 'fort', saveDesc: 'Fort Cures' }
        }
    },
    'Ostovite': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 2, count: 1, nonCrit: ['1d6', 'Acid'] }
        ],
        speed: {
            land: 30
        },
        senses: [
            1, 7
        ],
        eres: [
            'Cold 20'
        ]
    },
    'Sin Seeker': {
        size: 'tiny',
        attacks: [
            { name: 'Bite', diceCount: 1, diceSize: 3, count: 1 }
        ],
        speed: {
            land: 20,
            fly: 50
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
            fly: 40
        },
        senses: [
            1, 7
        ]
    },
    'Stirge': {
        size: 'tiny',
        attacks: [],
        speed: {
            land: 10,
            fly: 40
        },
        senses: [
            1, 7, 11
        ]
    },
    'Sun Falcon': {
        size: 'tiny',
        attacks: [
            { name: 'Talon', diceCount: 1, diceSize: 3, count: 2, nonCrit: ['1d6', 'Fire'] }
        ],
        specialAttack: [
            { name: 'Breath Weapon', diceCount: 0, diceSize: 0, count: 1, special: ['Breath'], nonCrit: ['3d6', 'Fire'] }
        ],
        speed: {
            land: 10,
            fly: 60
        },
        senses: [
            1, 7
        ],
        effect: {
            'Breath': { note: 'Breath area: 30ft line. DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex for half', description: '<p>Once every 1d4 rounds, 30-foot cone for 3d6 fire damage (Reflex DC 10 + spell level + caster stat mod for half damage).</p>' }
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
            fly: 40
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
            fly: 30
        },
        senses: [
            1, 7, 11
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
            1, 11
        ]
    },
    'Huge Air Elemental': {
        size: 'huge',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 2 }
        ],
        specialAttack: [
            { name: 'Whirlwind', diceCount: 2, diceSize: 6, special: ['Whirlwind'], type: 'b', attackType: 'save' }
        ],
        speed: {
            fly: 100
        },
        senses: [
            7
        ],
        effect: {
            'Whirlwind': { note: '10-50 ft. DC 10+SL+Mod. One save to avoid damage, second save to avoid being lifted', type: 'ref', saveDesc: 'Reflex avoids', description: '<p>Some creatures can transform themselves into whirlwinds and remain in that form for up to 1 round for every 2 HD they have. If the creature has a fly speed, it can continue to fly at that same speed while in whirlwind form; otherwise it gains a fly speed equal to its base land speed (average maneuverability) while in whirlwind form.</p><p>The whirlwind is always 5 feet wide at its base, but its height and width at the top vary from creature to creature (minimum 10 feet high). A whirlwind’s width at its peak is always equal to half of its height. The creature controls the exact height, but it must be at least 10 feet high.</p><p>The whirlwind form does not provoke attacks of opportunity, even if the creature enters the space another creature occupies. Another creature might be caught in the whirlwind if it touches or enters the whirlwind, or if the whirlwind moves into or through the creature’s space. A creature in whirlwind form cannot make its normal attacks and does not threaten the area around it.</p><p>Creatures one or more size categories smaller than the whirlwind might take damage when caught in the whirlwind (generally damage equal to the monster’s slam attack for a creature of its size) and may be lifted into the air. An affected creature must succeed on a Reflex save (DC 10 + half monster’s HD + the monster’s Strength modifier) when it comes into contact with the whirlwind or take damage as if it were hit by the whirlwind creature’s slam attack. It must also succeed on a second Reflex save or be picked up bodily and held suspended in the powerful winds, automatically taking the indicated damage each round. A creature that can fly is allowed a Reflex save each round to escape the whirlwind. The creature still takes damage but can leave if the save is successful.</p><p>Creatures trapped in the whirlwind cannot move except to go where the whirlwind carries them or to escape the whirlwind. Trapped creatures can otherwise act normally, but must succeed on a concentration check (DC 15 + spell level) to cast a spell. Creatures caught in the whirlwind take a –4 penalty to Dexterity and a –2 penalty on attack rolls. The whirlwind can have only as many creatures trapped inside at one time as will fit inside the whirlwind’s volume. The whirlwind can eject any carried creatures whenever it wishes as a free action, depositing them in its space.</p><p>If the whirlwind’s base touches the ground, it creates a swirling cloud of debris. This cloud is centered on the creature and has a diameter equal to half the whirlwind’s height. The cloud obscures all vision, including darkvision, beyond 5 feet. Creatures 5 feet away have concealment, while those farther away have total concealment. Those caught in the cloud of debris must succeed on a concentration check (DC 15 + spell level) to cast a spell.</p>' }
        },
        di: [
            'bleed', 'critical', 'sneak attack'
        ],
        dr: [
            '5/-'
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
            'Earth Glide'
        ],
        di: [
            'bleed', 'critical', 'sneak attack'
        ],
        dr: [
            '5/-'
        ]
    },
    'Huge Fire Elemental': {
        size: 'huge',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 2, special: ['Burn'] }
        ],
        specialAttack: [
            { name: 'Burn', diceCount: 2, diceSize: 6, count: 1, type: 'Fire', attackType: 'save' }
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
        di: [
            'bleed', 'critical', 'sneak attack'
        ],
        dr: [
            '5/-'
        ],
        eres: [
            'Fire 20'
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
            { name: 'Vortex', diceCount: 2, diceSize: 6, special: ['Vortex'], type: 'b', attackType: 'save' }
        ],
        speed: {
            land: 20,
            swim: 90
        },
        senses: [
            7
        ],
        effect: {
            'Vortex': { note: '10-60 ft. DC 10+SL+Mod. One save to avoid damage, second save to avoid being lifted', type: 'ref', saveDesc: 'Reflex avoids', description: '<p>A water elemental can create a whirlpool as a standard action, at will. This ability functions identically to the whirlwind special attack, but can only form underwater and cannot leave the water.</p><p>Some creatures can transform themselves into whirlwinds and remain in that form for up to 1 round for every 2 HD they have. If the creature has a fly speed, it can continue to fly at that same speed while in whirlwind form; otherwise it gains a fly speed equal to its base land speed (average maneuverability) while in whirlwind form.</p><p>The whirlwind is always 5 feet wide at its base, but its height and width at the top vary from creature to creature (minimum 10 feet high). A whirlwind’s width at its peak is always equal to half of its height. The creature controls the exact height, but it must be at least 10 feet high.</p><p>The whirlwind form does not provoke attacks of opportunity, even if the creature enters the space another creature occupies. Another creature might be caught in the whirlwind if it touches or enters the whirlwind, or if the whirlwind moves into or through the creature’s space. A creature in whirlwind form cannot make its normal attacks and does not threaten the area around it.</p><p>Creatures one or more size categories smaller than the whirlwind might take damage when caught in the whirlwind (generally damage equal to the monster’s slam attack for a creature of its size) and may be lifted into the air. An affected creature must succeed on a Reflex save (DC 10 + half monster’s HD + the monster’s Strength modifier) when it comes into contact with the whirlwind or take damage as if it were hit by the whirlwind creature’s slam attack. It must also succeed on a second Reflex save or be picked up bodily and held suspended in the powerful winds, automatically taking the indicated damage each round. A creature that can fly is allowed a Reflex save each round to escape the whirlwind. The creature still takes damage but can leave if the save is successful.</p><p>Creatures trapped in the whirlwind cannot move except to go where the whirlwind carries them or to escape the whirlwind. Trapped creatures can otherwise act normally, but must succeed on a concentration check (DC 15 + spell level) to cast a spell. Creatures caught in the whirlwind take a –4 penalty to Dexterity and a –2 penalty on attack rolls. The whirlwind can have only as many creatures trapped inside at one time as will fit inside the whirlwind’s volume. The whirlwind can eject any carried creatures whenever it wishes as a free action, depositing them in its space.</p><p>If the whirlwind’s base touches the ground, it creates a swirling cloud of debris. This cloud is centered on the creature and has a diameter equal to half the whirlwind’s height. The cloud obscures all vision, including darkvision, beyond 5 feet. Creatures 5 feet away have concealment, while those farther away have total concealment. Those caught in the cloud of debris must succeed on a concentration check (DC 15 + spell level) to cast a spell.</p>' }
        },
        di: [
            'bleed', 'critical', 'sneak attack'
        ],
        dr: [
            '5/-'
        ]
    },
    'Large Air Elemental': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 2 }
        ],
        specialAttack: [
            { name: 'Whirlwind', diceCount: 1, diceSize: 8, special: ['Whirlwind'], type: 'b', attackType: 'save' }
        ],
        speed: {
            fly: 100
        },
        senses: [
            7
        ],
        effect: {
            'Whirlwind': { note: '10-40 ft. DC 10+SL+Mod. One save to avoid damage, second save to avoid being lifted', type: 'ref', saveDesc: 'Reflex avoids', description: '<p>Some creatures can transform themselves into whirlwinds and remain in that form for up to 1 round for every 2 HD they have. If the creature has a fly speed, it can continue to fly at that same speed while in whirlwind form; otherwise it gains a fly speed equal to its base land speed (average maneuverability) while in whirlwind form.</p><p>The whirlwind is always 5 feet wide at its base, but its height and width at the top vary from creature to creature (minimum 10 feet high). A whirlwind’s width at its peak is always equal to half of its height. The creature controls the exact height, but it must be at least 10 feet high.</p><p>The whirlwind form does not provoke attacks of opportunity, even if the creature enters the space another creature occupies. Another creature might be caught in the whirlwind if it touches or enters the whirlwind, or if the whirlwind moves into or through the creature’s space. A creature in whirlwind form cannot make its normal attacks and does not threaten the area around it.</p><p>Creatures one or more size categories smaller than the whirlwind might take damage when caught in the whirlwind (generally damage equal to the monster’s slam attack for a creature of its size) and may be lifted into the air. An affected creature must succeed on a Reflex save (DC 10 + half monster’s HD + the monster’s Strength modifier) when it comes into contact with the whirlwind or take damage as if it were hit by the whirlwind creature’s slam attack. It must also succeed on a second Reflex save or be picked up bodily and held suspended in the powerful winds, automatically taking the indicated damage each round. A creature that can fly is allowed a Reflex save each round to escape the whirlwind. The creature still takes damage but can leave if the save is successful.</p><p>Creatures trapped in the whirlwind cannot move except to go where the whirlwind carries them or to escape the whirlwind. Trapped creatures can otherwise act normally, but must succeed on a concentration check (DC 15 + spell level) to cast a spell. Creatures caught in the whirlwind take a –4 penalty to Dexterity and a –2 penalty on attack rolls. The whirlwind can have only as many creatures trapped inside at one time as will fit inside the whirlwind’s volume. The whirlwind can eject any carried creatures whenever it wishes as a free action, depositing them in its space.</p><p>If the whirlwind’s base touches the ground, it creates a swirling cloud of debris. This cloud is centered on the creature and has a diameter equal to half the whirlwind’s height. The cloud obscures all vision, including darkvision, beyond 5 feet. Creatures 5 feet away have concealment, while those farther away have total concealment. Those caught in the cloud of debris must succeed on a concentration check (DC 15 + spell level) to cast a spell.</p>' }
        },
        di: [
            'bleed', 'critical', 'sneak attack'
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
            'Earth Glide'
        ],
        di: [
            'bleed', 'critical', 'sneak attack'
        ],
        dr: [
            '5/-'
        ]
    },
    'Large Fire Elemental': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 8, count: 2, special: ['Burn'] }
        ],
        specialAttack: [
            { name: 'Burn', diceCount: 1, diceSize: 8, count: 1, type: 'Fire', attackType: 'save' }
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
        di: [
            'bleed', 'critical', 'sneak attack'
        ],
        dr: [
            '5/-'
        ],
        eres: [
            'Fire 20'
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
            { name: 'Vortex', diceCount: 1, diceSize: 8, special: ['Vortex'], type: 'b', attackType: 'save' }
        ],
        speed: {
            land: 20,
            swim: 90
        },
        senses: [
            7
        ],
        effect: {
            'Vortex': { note: '10-40 ft. DC 10+SL+Mod. One save to avoid damage, second save to avoid being lifted', type: 'ref', saveDesc: 'Reflex avoids', description: '<p>A water elemental can create a whirlpool as a standard action, at will. This ability functions identically to the whirlwind special attack, but can only form underwater and cannot leave the water.</p><p>Some creatures can transform themselves into whirlwinds and remain in that form for up to 1 round for every 2 HD they have. If the creature has a fly speed, it can continue to fly at that same speed while in whirlwind form; otherwise it gains a fly speed equal to its base land speed (average maneuverability) while in whirlwind form.</p><p>The whirlwind is always 5 feet wide at its base, but its height and width at the top vary from creature to creature (minimum 10 feet high). A whirlwind’s width at its peak is always equal to half of its height. The creature controls the exact height, but it must be at least 10 feet high.</p><p>The whirlwind form does not provoke attacks of opportunity, even if the creature enters the space another creature occupies. Another creature might be caught in the whirlwind if it touches or enters the whirlwind, or if the whirlwind moves into or through the creature’s space. A creature in whirlwind form cannot make its normal attacks and does not threaten the area around it.</p><p>Creatures one or more size categories smaller than the whirlwind might take damage when caught in the whirlwind (generally damage equal to the monster’s slam attack for a creature of its size) and may be lifted into the air. An affected creature must succeed on a Reflex save (DC 10 + half monster’s HD + the monster’s Strength modifier) when it comes into contact with the whirlwind or take damage as if it were hit by the whirlwind creature’s slam attack. It must also succeed on a second Reflex save or be picked up bodily and held suspended in the powerful winds, automatically taking the indicated damage each round. A creature that can fly is allowed a Reflex save each round to escape the whirlwind. The creature still takes damage but can leave if the save is successful.</p><p>Creatures trapped in the whirlwind cannot move except to go where the whirlwind carries them or to escape the whirlwind. Trapped creatures can otherwise act normally, but must succeed on a concentration check (DC 15 + spell level) to cast a spell. Creatures caught in the whirlwind take a –4 penalty to Dexterity and a –2 penalty on attack rolls. The whirlwind can have only as many creatures trapped inside at one time as will fit inside the whirlwind’s volume. The whirlwind can eject any carried creatures whenever it wishes as a free action, depositing them in its space.</p><p>If the whirlwind’s base touches the ground, it creates a swirling cloud of debris. This cloud is centered on the creature and has a diameter equal to half the whirlwind’s height. The cloud obscures all vision, including darkvision, beyond 5 feet. Creatures 5 feet away have concealment, while those farther away have total concealment. Those caught in the cloud of debris must succeed on a concentration check (DC 15 + spell level) to cast a spell.</p>' }
        },
        di: [
            'bleed', 'critical', 'sneak attack'
        ],
        dr: [
            '5/-'
        ]
    },
    'Medium Air Elemental': {
        size: 'med',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 6, count: 1 }
        ],
        specialAttack: [
            { name: 'Whirlwind', diceCount: 1, diceSize: 6, special: ['Whirlwind'], type: 'b', attackType: 'save' }
        ],
        speed: {
            fly: 100
        },
        senses: [
            7
        ],
        effect: {
            'Whirlwind': { note: '10-30 ft. DC 10+SL+Mod. One save to avoid damage, second save to avoid being lifted', type: 'ref', saveDesc: 'Reflex avoids', description: '<p>Some creatures can transform themselves into whirlwinds and remain in that form for up to 1 round for every 2 HD they have. If the creature has a fly speed, it can continue to fly at that same speed while in whirlwind form; otherwise it gains a fly speed equal to its base land speed (average maneuverability) while in whirlwind form.</p><p>The whirlwind is always 5 feet wide at its base, but its height and width at the top vary from creature to creature (minimum 10 feet high). A whirlwind’s width at its peak is always equal to half of its height. The creature controls the exact height, but it must be at least 10 feet high.</p><p>The whirlwind form does not provoke attacks of opportunity, even if the creature enters the space another creature occupies. Another creature might be caught in the whirlwind if it touches or enters the whirlwind, or if the whirlwind moves into or through the creature’s space. A creature in whirlwind form cannot make its normal attacks and does not threaten the area around it.</p><p>Creatures one or more size categories smaller than the whirlwind might take damage when caught in the whirlwind (generally damage equal to the monster’s slam attack for a creature of its size) and may be lifted into the air. An affected creature must succeed on a Reflex save (DC 10 + half monster’s HD + the monster’s Strength modifier) when it comes into contact with the whirlwind or take damage as if it were hit by the whirlwind creature’s slam attack. It must also succeed on a second Reflex save or be picked up bodily and held suspended in the powerful winds, automatically taking the indicated damage each round. A creature that can fly is allowed a Reflex save each round to escape the whirlwind. The creature still takes damage but can leave if the save is successful.</p><p>Creatures trapped in the whirlwind cannot move except to go where the whirlwind carries them or to escape the whirlwind. Trapped creatures can otherwise act normally, but must succeed on a concentration check (DC 15 + spell level) to cast a spell. Creatures caught in the whirlwind take a –4 penalty to Dexterity and a –2 penalty on attack rolls. The whirlwind can have only as many creatures trapped inside at one time as will fit inside the whirlwind’s volume. The whirlwind can eject any carried creatures whenever it wishes as a free action, depositing them in its space.</p><p>If the whirlwind’s base touches the ground, it creates a swirling cloud of debris. This cloud is centered on the creature and has a diameter equal to half the whirlwind’s height. The cloud obscures all vision, including darkvision, beyond 5 feet. Creatures 5 feet away have concealment, while those farther away have total concealment. Those caught in the cloud of debris must succeed on a concentration check (DC 15 + spell level) to cast a spell.</p>' }
        },
        di: [
            'bleed', 'critical', 'sneak attack'
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
            'Earth Glide'
        ],
        di: [
            'bleed', 'critical', 'sneak attack'
        ]
    },
    'Medium Fire Elemental': {
        size: 'med',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 6, count: 1, special: ['Burn'] }
        ],
        specialAttack: [
            { name: 'Burn', diceCount: 1, diceSize: 6, count: 1, type: 'Fire', attackType: 'save' }
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
        di: [
            'bleed', 'critical', 'sneak attack'
        ],
        eres: [
            'Fire 20'
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
            { name: 'Vortex', diceCount: 1, diceSize: 8, special: ['Vortex'], type: 'b', attackType: 'save' }
        ],
        speed: {
            land: 20,
            swim: 90
        },
        senses: [
            7
        ],
        effect: {
            'Vortex': { note: '10-30 ft. DC 10+SL+Mod. One save to avoid damage, second save to avoid being lifted', type: 'ref', saveDesc: 'Reflex avoids', description: '<p>A water elemental can create a whirlpool as a standard action, at will. This ability functions identically to the whirlwind special attack, but can only form underwater and cannot leave the water.</p><p>Some creatures can transform themselves into whirlwinds and remain in that form for up to 1 round for every 2 HD they have. If the creature has a fly speed, it can continue to fly at that same speed while in whirlwind form; otherwise it gains a fly speed equal to its base land speed (average maneuverability) while in whirlwind form.</p><p>The whirlwind is always 5 feet wide at its base, but its height and width at the top vary from creature to creature (minimum 10 feet high). A whirlwind’s width at its peak is always equal to half of its height. The creature controls the exact height, but it must be at least 10 feet high.</p><p>The whirlwind form does not provoke attacks of opportunity, even if the creature enters the space another creature occupies. Another creature might be caught in the whirlwind if it touches or enters the whirlwind, or if the whirlwind moves into or through the creature’s space. A creature in whirlwind form cannot make its normal attacks and does not threaten the area around it.</p><p>Creatures one or more size categories smaller than the whirlwind might take damage when caught in the whirlwind (generally damage equal to the monster’s slam attack for a creature of its size) and may be lifted into the air. An affected creature must succeed on a Reflex save (DC 10 + half monster’s HD + the monster’s Strength modifier) when it comes into contact with the whirlwind or take damage as if it were hit by the whirlwind creature’s slam attack. It must also succeed on a second Reflex save or be picked up bodily and held suspended in the powerful winds, automatically taking the indicated damage each round. A creature that can fly is allowed a Reflex save each round to escape the whirlwind. The creature still takes damage but can leave if the save is successful.</p><p>Creatures trapped in the whirlwind cannot move except to go where the whirlwind carries them or to escape the whirlwind. Trapped creatures can otherwise act normally, but must succeed on a concentration check (DC 15 + spell level) to cast a spell. Creatures caught in the whirlwind take a –4 penalty to Dexterity and a –2 penalty on attack rolls. The whirlwind can have only as many creatures trapped inside at one time as will fit inside the whirlwind’s volume. The whirlwind can eject any carried creatures whenever it wishes as a free action, depositing them in its space.</p><p>If the whirlwind’s base touches the ground, it creates a swirling cloud of debris. This cloud is centered on the creature and has a diameter equal to half the whirlwind’s height. The cloud obscures all vision, including darkvision, beyond 5 feet. Creatures 5 feet away have concealment, while those farther away have total concealment. Those caught in the cloud of debris must succeed on a concentration check (DC 15 + spell level) to cast a spell.</p>' }
        },
        di: [
            'bleed', 'critical', 'sneak attack'
        ]
    },
    'Small Air Elemental': {
        size: 'sm',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 4, count: 1 }
        ],
        specialAttack: [
            { name: 'Whirlwind', diceCount: 1, diceSize: 4, special: ['Whirlwind'], type: 'b', attackType: 'save' }
        ],
        speed: {
            fly: 100
        },
        senses: [
            7
        ],
        effect: {
            'Whirlwind': { note: '10-20 ft. DC 10+SL+Mod. One save to avoid damage, second save to avoid being lifted', type: 'ref', saveDesc: 'Reflex avoids', description: '<p>Some creatures can transform themselves into whirlwinds and remain in that form for up to 1 round for every 2 HD they have. If the creature has a fly speed, it can continue to fly at that same speed while in whirlwind form; otherwise it gains a fly speed equal to its base land speed (average maneuverability) while in whirlwind form.</p><p>The whirlwind is always 5 feet wide at its base, but its height and width at the top vary from creature to creature (minimum 10 feet high). A whirlwind’s width at its peak is always equal to half of its height. The creature controls the exact height, but it must be at least 10 feet high.</p><p>The whirlwind form does not provoke attacks of opportunity, even if the creature enters the space another creature occupies. Another creature might be caught in the whirlwind if it touches or enters the whirlwind, or if the whirlwind moves into or through the creature’s space. A creature in whirlwind form cannot make its normal attacks and does not threaten the area around it.</p><p>Creatures one or more size categories smaller than the whirlwind might take damage when caught in the whirlwind (generally damage equal to the monster’s slam attack for a creature of its size) and may be lifted into the air. An affected creature must succeed on a Reflex save (DC 10 + half monster’s HD + the monster’s Strength modifier) when it comes into contact with the whirlwind or take damage as if it were hit by the whirlwind creature’s slam attack. It must also succeed on a second Reflex save or be picked up bodily and held suspended in the powerful winds, automatically taking the indicated damage each round. A creature that can fly is allowed a Reflex save each round to escape the whirlwind. The creature still takes damage but can leave if the save is successful.</p><p>Creatures trapped in the whirlwind cannot move except to go where the whirlwind carries them or to escape the whirlwind. Trapped creatures can otherwise act normally, but must succeed on a concentration check (DC 15 + spell level) to cast a spell. Creatures caught in the whirlwind take a –4 penalty to Dexterity and a –2 penalty on attack rolls. The whirlwind can have only as many creatures trapped inside at one time as will fit inside the whirlwind’s volume. The whirlwind can eject any carried creatures whenever it wishes as a free action, depositing them in its space.</p><p>If the whirlwind’s base touches the ground, it creates a swirling cloud of debris. This cloud is centered on the creature and has a diameter equal to half the whirlwind’s height. The cloud obscures all vision, including darkvision, beyond 5 feet. Creatures 5 feet away have concealment, while those farther away have total concealment. Those caught in the cloud of debris must succeed on a concentration check (DC 15 + spell level) to cast a spell.</p>' }
        },
        di: [
            'bleed', 'critical', 'sneak attack'
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
            'Earth Glide'
        ],
        di: [
            'bleed', 'critical', 'sneak attack'
        ]
    },
    'Small Fire Elemental': {
        size: 'sm',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 4, count: 1, special: ['Burn'] }
        ],
        specialAttack: [
            { name: 'Burn', diceCount: 1, diceSize: 4, count: 1, type: 'Fire', attackType: 'save' }
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
        di: [
            'bleed', 'critical', 'sneak attack'
        ],
        eres: [
            'Fire 20'
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
            { name: 'Vortex', diceCount: 1, diceSize: 6, special: ['Vortex'], type: 'b', attackType: 'save' }
        ],
        speed: {
            land: 20,
            swim: 90
        },
        senses: [
            7
        ],
        effect: {
            'Vortex': { note: '10-20 ft. DC 10+SL+Mod. One save to avoid damage, second save to avoid being lifted', type: 'ref', saveDesc: 'Reflex avoids', description: '<p>A water elemental can create a whirlpool as a standard action, at will. This ability functions identically to the whirlwind special attack, but can only form underwater and cannot leave the water.</p><p>Some creatures can transform themselves into whirlwinds and remain in that form for up to 1 round for every 2 HD they have. If the creature has a fly speed, it can continue to fly at that same speed while in whirlwind form; otherwise it gains a fly speed equal to its base land speed (average maneuverability) while in whirlwind form.</p><p>The whirlwind is always 5 feet wide at its base, but its height and width at the top vary from creature to creature (minimum 10 feet high). A whirlwind’s width at its peak is always equal to half of its height. The creature controls the exact height, but it must be at least 10 feet high.</p><p>The whirlwind form does not provoke attacks of opportunity, even if the creature enters the space another creature occupies. Another creature might be caught in the whirlwind if it touches or enters the whirlwind, or if the whirlwind moves into or through the creature’s space. A creature in whirlwind form cannot make its normal attacks and does not threaten the area around it.</p><p>Creatures one or more size categories smaller than the whirlwind might take damage when caught in the whirlwind (generally damage equal to the monster’s slam attack for a creature of its size) and may be lifted into the air. An affected creature must succeed on a Reflex save (DC 10 + half monster’s HD + the monster’s Strength modifier) when it comes into contact with the whirlwind or take damage as if it were hit by the whirlwind creature’s slam attack. It must also succeed on a second Reflex save or be picked up bodily and held suspended in the powerful winds, automatically taking the indicated damage each round. A creature that can fly is allowed a Reflex save each round to escape the whirlwind. The creature still takes damage but can leave if the save is successful.</p><p>Creatures trapped in the whirlwind cannot move except to go where the whirlwind carries them or to escape the whirlwind. Trapped creatures can otherwise act normally, but must succeed on a concentration check (DC 15 + spell level) to cast a spell. Creatures caught in the whirlwind take a –4 penalty to Dexterity and a –2 penalty on attack rolls. The whirlwind can have only as many creatures trapped inside at one time as will fit inside the whirlwind’s volume. The whirlwind can eject any carried creatures whenever it wishes as a free action, depositing them in its space.</p><p>If the whirlwind’s base touches the ground, it creates a swirling cloud of debris. This cloud is centered on the creature and has a diameter equal to half the whirlwind’s height. The cloud obscures all vision, including darkvision, beyond 5 feet. Creatures 5 feet away have concealment, while those farther away have total concealment. Those caught in the cloud of debris must succeed on a concentration check (DC 15 + spell level) to cast a spell.</p>' }
        },
        di: [
            'bleed', 'critical', 'sneak attack'
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
        eres: [
            'Acid 20'
        ]
    },
    'Bramble Throne': {
        size: 'huge',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1 },
            { name: 'Vine', diceCount: 1, diceSize: 8, count: 4, primaryAttack: true, type: 'B and P', special: ['Grab'] }
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
            'Electricity 20', 'Fire 10'
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
            'Acid 10', 'Electricity 10'
        ],
        dr: [
            '10/slashing'
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
            'Acid 20'
        ]
    },
    'Giant Sundew': {
        size: 'huge',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 6, count: 2, nonCrit: ['1d6', 'Acid'], special: ['Constrict'] }
        ],
        speed: {
            land: 20
        },
        senses: [
            1
        ],
        eres: [
            'Acid 20'
        ],
        dr: [
            '10/slashing'
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
            'electricity'
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
            '10/slashing'
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
            '10/slashing'
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
            'Cold 10', 'Electricity 20'
        ],
        dv: [
            'fire'
        ],
        dr: [
            '10/slashing'
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
            'Cold 10', 'Fire 10'
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
        eres: [
            'Electricity 20', 'Fire 20'
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
        eres: [
            'Acid 20'
        ],
        regen: [
            '5 (bludgeoning or fire)'
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
            '10/slashing'
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature’s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a –4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature’s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
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
            '10/magic, slashing, or bludgeoning'
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Bite' }
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
            'Electricity 10', 'Fire 10'
        ],
        dr: [
            '10/piercing'
        ],
        effect: {
            'Trample': { note: 'Trample as part of overrun, AoOs against at -4. Forgo AoO to attempt avoiding, DC 10+SL+Mod', type: 'ref', saveDesc: 'Reflex Avoids', description: 'As a full-round action, a creature with the trample ability can attempt to overrun any creature that is at least one size category Smaller than itself. This works just like the overrun combat maneuver, but the trampling creature does not need to make a check, it merely has to move over opponents in its path. Targets of a trample take an amount of damage equal to the trampling creature’s slam damage + 1-1/2 times its Str modifier. Targets of a trample can make an attack of opportunity, but at a –4 penalty. If targets forgo an attack of opportunity, they can attempt to avoid the trampling creature and receive a Reflex save to take half damage. The save DC against a creature’s trample attack is 10 + Spell Level + Caster Stat Mod. A trampling creature can only deal trampling damage to each target once per round, no matter how many times its movement takes it over a target creature.' }
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
            'Cold 10', 'Electricity 20', 'Fire 10'
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
            '10/slashing'
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
            'Poison': { note: 'Slam—injury; save Fort DC 10+SL+Mod; frequency 1/round for 6 rounds; effect 1d4 Con damage and sickened; cure 2 consecutive saves. A blood lily’s poison causes the victim to bleed copiously from its pores. Each time the victim fails its save against the blood lily’s poison, it becomes sickened as blood coats its entire body and trickles into its mouth.', type: 'fort', saveDesc: 'Fort Cures' }
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
            'Acid 10'
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
            '10/magic and slashing'
        ],
        eres: [
            'Cold 10', 'Fire 10'
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
            'Cold 10'
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
            '5 (cold)'
        ],
        dr: [
            '15/magic and slashing'
        ],
        eres: [
            'Electricity 20', 'Fire 20'
        ]
    },
    'Sargassum Fiend': {
        size: 'lg',
        attacks: [
            { name: 'Slam', diceCount: 2, diceSize: 8, count: 2, special: ['Grab', 'Constrict'] }
        ],
        speed: {
            land: 20,
            climbs: 20,
            swim: 40
        },
        senses: [],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Slam' }
        },
        dr: [
            '5/slashing'
        ],
        eres: [
            'Cold 10'
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
            'Electricity 20', 'Fire 10'
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
            climbs: 10,
            swim: 20
        },
        senses: [
            1
        ],
        effect: {
            'Constrict': { note: 'Constrict: Same damage as Tendril' }
        },
        dr: [
            '5/slashing'
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
            '5 (acid or fire)'
        ]
    },
    'Viper Vine': {
        size: 'lg',
        attacks: [
            { name: 'Bite', diceCount: 2, diceSize: 6, count: 1, nonCrit: ['3d6', 'Acid'] },
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
        eres: [
            'Acid 20'
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
        eres: [
            'Cold 20'
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
            '10/bludgeoning'
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
        eres: [
            'Electricity 20'
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
            'Electricity 5', 'Fire 5'
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
            'Cold 5'
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
        eres: [
            'Cold 20'
        ],
        dv: [
            'fire'
        ],
        dr: [
            '2/slashing'
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
            '10/cold iron'
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
            '10/cold iron or good'
        ],
        eres: [
            'Acid 10', 'Cold 10', 'Electricity 10'
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
            '5/slashing'
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
            'Fire 15'
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
            '5/slashing'
        ]
    },
    'Melfesh Monster': {
        size: 'med',
        attacks: [
            { name: 'Slam', diceCount: 1, diceSize: 6, count: 2 }
        ],
        speed: {
            land: 30,
            fly: 60
        },
        senses: [
            1
        ],
        regen: [
            '5 (acid)'
        ],
        eres: [
            'Electricity 10', 'Fire 10'
        ]
    },
    'Mi-Go': {
        size: 'med',
        attacks: [
            { name: 'Claw', diceCount: 1, diceSize: 4, count: 4, special: ['Grab'] }
        ],
        speed: {
            land: 30,
            fly: 50
        },
        senses: [
            1
        ],
        eres: [
            'Cold 20', 'Electricity 10', 'Fire 10'
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
            '5/slashing'
        ],
        eres: [
            'Cold 10', 'Fire 10', 'Sonic 10'
        ],
        dv: [
            'electricity'
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
            'Fire 10'
        ],
        dr: [
            '5/slashing'
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
            '5 (fire)'
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
        eres: [
            'Electricity 20', 'Sonic 20'
        ]
    },
    'Calathgar': {
        size: 'sm',
        attacks: [
            { name: 'Flower', diceCount: 1, diceSize: 6, count: 1, nonCrit: ['1d6', 'Cold'] },
            { name: 'Tendril', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 20
        },
        senses: [
            1, 4
        ],
        eres: [
            'Cold 20'
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
        eres: [
            'Electricity 20', 'Sonic 20'
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
        eres: [
            'Electricity 20', 'Sonic 20'
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
        eres: [
            'Electricity 20', 'Sonic 20'
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
            'Fire 10'
        ]
    },
    'Leaf Leshy': {
        size: 'sm',
        attacks: [],
        speed: {
            land: 20,
            climb: 10,
            fly: 10
        },
        senses: [
            1, 7
        ],
        eres: [
            'Electricity 20', 'Sonic 20'
        ]
    },
    'Leaf Ray': {
        size: 'sm',
        attacks: [
            { name: 'Stinger', diceCount: 1, diceSize: 4, count: 1, special: ['Poison'] }
        ],
        speed: {
            land: 5,
            fly: 40
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
            { name: 'Constrict', diceCount: 0, diceSize: 0, count: 1, attackType: 'mcman', nonCrit: ['2d4', 'Acid'] }
        ],
        speed: {
            land: 20,
            climb: 20
        },
        senses: [
            1, 7
        ],
        eres: [
            'Electricity 20', 'Sonic 20'
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
        eres: [
            'Electricity 20', 'Sonic 20'
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
            'Acid 10', 'Cold 20'
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
            '5/slashing or bludgeoning'
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
        eres: [
            'Acid 20'
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
        eres: [
            'Electricity 20', 'Sonic 20'
        ]
    },
    'Sunflower Leshy': {
        size: 'sm',
        attacks: [
            { name: 'Head Butt', diceCount: 1, diceSize: 4, count: 1 }
        ],
        speed: {
            land: 20
        },
        senses: [
            1, 7
        ],
        eres: [
            'Electricity 20', 'Sonic 20'
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
            fly: 40,
            climb: 10
        },
        senses: [
            1, 7
        ],
        eres: [
            'Acid 5', 'Electricity 5'
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
            '5/slashing or bludgeoning'
        ],
        eres: [
            'Electricity 20'
        ]
    },
    'Xtabay': {
        size: 'sm',
        attacks: [
            { name: 'Sting', diceCount: 1, diceSize: 3, count: 2, nonCrit: ['1d2', 'Acid'] }
        ],
        speed: {
            land: 5
        },
        senses: [
            1
        ],
        eres: [
            'Acid 20'
        ]
    },

};
MorphinChanges.SENSES = Object.freeze({
    LOWLIGHT: { value: 1, name: 'Low-Light Vision', setting: {ll: {enabled: true}} },
    DARKVISION10: { value: 2, name: 'Darkvision 10ft', setting: {dv: 10} },
    DARKVISION20: { value: 3, name: 'Darkvision 20ft', setting: {dv: 20} },
    DARKVISION30: { value: 4, name: 'Darkvision 30ft', setting: {dv: 30} },
    DARKVISION40: { value: 5, name: 'Darkvision 40ft', setting: {dv: 40} },
    DARKVISION50: { value: 6, name: 'Darkvision 50ft', setting: {dv: 50} },
    DARKVISION60: { value: 7, name: 'Darkvision 60ft', setting: {dv: 60} },
    DARKVISION70: { value: 8, name: 'Darkvision 70ft', setting: {dv: 70} },
    DARKVISION80: { value: 9, name: 'Darkvision 80ft', setting: {dv: 80} },
    DARKVISION90: { value: 10, name: 'Darkvision 90ft', setting: {dv: 90} },
    SCENT: { value: 11, name: 'Scent', setting: {custom: 'Scent'} },
    BLINDSENSE10: { value: 12, name: 'Blindsense 10ft', setting: {bs: 10} },
    BLINDSENSE20: { value: 13, name: 'Blindsense 20ft', setting: {bs: 20} },
    BLINDSENSE30: { value: 14, name: 'Blindsense 30ft', setting: {bs: 30} },
    BLINDSENSE40: { value: 15, name: 'Blindsense 40ft', setting: {bs: 40} },
    BLINDSENSE50: { value: 16, name: 'Blindsense 50ft', setting: {bs: 50} },
    BLINDSENSE60: { value: 17, name: 'Blindsense 60ft', setting: {bs: 60} },
    TREMORSENSE10: { value: 18, name: 'Tremorsense 10ft', setting: {ts: 10} },
    TREMORSENSE15: { value: 19, name: 'Tremorsense 15ft', setting: {ts: 15} },
    TREMORSENSE20: { value: 20, name: 'Tremorsense 20ft', setting: {ts: 20} },
    TREMORSENSE30: { value: 21, name: 'Tremorsense 30ft', setting: {ts: 30} },
    TREMORSENSE40: { value: 22, name: 'Tremorsense 40ft', setting: {ts: 40} },
    TREMORSENSE50: { value: 24, name: 'Tremorsense 50ft', setting: {ts: 50} },
    TREMORSENSE60: { value: 25, name: 'Tremorsense 60ft', setting: {ts: 60} }
});
