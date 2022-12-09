import { TECH_LEVEL_STATE } from "../models/enums";

export default [
  {
    id: 1,
    name: 'Ship Size',
    techLevels: [
      {
        level: 1,
        cost: 0,
        state: TECH_LEVEL_STATE.OWNED,
      },
      {
        level: 2,
        cost: 10,
      },
      {
        level: 3,
        cost: 15,
      },
      {
        level: 4,
        cost: 20,
      },
      {
        level: 5,
        cost: 20,
      },
      {
        level: 6,
        cost: 20,
      },
      {
        level: 7,
        cost: 30,
      },
    ],
  },
  { 
    id: 2,
    name: 'Ship Yard',
    techLevels: [
      {
        level: 1,
        cost: 0,
        state: TECH_LEVEL_STATE.OWNED,
      },
      {
        level: 2,
        cost: 20,
      },
      {
        level: 3,
        cost: 25,
      },
      {
        level: 4,
        isPlaceholder: true,
      },
    ],
  },
  {
    id: 3,
    name: 'Military Acad.',
    techLevels: [
      {
        level: 0,
        cost: 0,
        state: TECH_LEVEL_STATE.OWNED,
      },
      {
        level: 1,
        cost: 10,
      },
      {
        level: 2,
        cost: 20,
      },
    ],
  },
  {
    id: 4,
    name: 'Attack',
    techLevels: [
      {
        level: 0,
        cost: 0,
        state: TECH_LEVEL_STATE.OWNED,
      },
      {
        level: 1,
        cost: 20,
      },
      {
        level: 2,
        cost: 30,
      },
      {
        level: 3,
        cost: 25,
      },
      {
        level: 4,
        cost: 10,
      },
      {
        level: 5,
        isPlaceholder: true,
      },
      {
        level: 6,
        isPlaceholder: true,
      },
    ],
  },
  {
    id: 5,
    name: 'Ground',
    techLevels: [
      {
        level: 1,
        cost: 0,
        state: TECH_LEVEL_STATE.OWNED,
      },
      {
        level: 2,
        cost: 10,
      },
      {
        level: 3,
        cost: 15,
      },
      {
        level: 4,
        isPlaceholder: true,
      },
    ],
  },
  {
    id: 6,
    name: 'Boarding',
    techLevels: [
      {
        level: 0,
        cost: 0,
        state: TECH_LEVEL_STATE.OWNED,
      },
      {
        level: 1,
        cost: 20,
      },
      {
        level: 2,
        cost: 25,
      },
    ],
  },
  {
    id: 7,
    name: 'Defense',
    techLevels: [
      {
        level: 0,
        cost: 0,
        state: TECH_LEVEL_STATE.OWNED,
      },
      {
        level: 1,
        cost: 20,
      },
      {
        level: 2,
        cost: 30,
      },
      {
        level: 3,
        cost: 25,
      },
      {
        level: 4,
        isPlaceholder: true,
      },
      {
        level: 5,
        isPlaceholder: true,
      },
      {
        level: 6,
        isPlaceholder: true,
      },
    ],
  },
  {
    id: 8,
    name: 'Terraforming',
    techLevels: [
      {
        level: 0,
        cost: 0,
        state: TECH_LEVEL_STATE.OWNED,
      },
      {
        level: 1,
        cost: 20,
      },
      {
        level: 2,
        cost: 25,
      },
      {
        level: 3,
        isPlaceholder: true,
      },
    ],
  },
  {
    id: 9,
    name: 'Security',
    techLevels: [
      {
        level: 0,
        cost: 0,
        state: TECH_LEVEL_STATE.OWNED,
      },
      {
        level: 1,
        cost: 15,
      },
      {
        level: 2,
        cost: 15,
      },
    ],
  },
  {
    id: 10,
    name: 'Tactics',
    techLevels: [
      {
        level: 0,
        cost: 0,
        state: TECH_LEVEL_STATE.OWNED,
      },
      {
        level: 1,
        cost: 15,
      },
      {
        level: 2,
        cost: 15,
      },
      {
        level: 3,
        cost: 15,
      },
      {
        level: 4,
        isPlaceholder: true,
      },
      {
        level: 5,
        isPlaceholder: true,
      },
      {
        level: 6,
        isPlaceholder: true,
      },
    ],
  },
  {
    id: 11,
    name: 'Cloaking',
    techLevels: [
      {
        level: 0,
        cost: 0,
        state: TECH_LEVEL_STATE.OWNED,
      },
      {
        level: 1,
        cost: 30,
      },
      {
        level: 2,
        cost: 30,
      },
      {
        level: 3,
        isPlaceholder: true,
      },
    ],
  },
  {
    id: 12,
    name: 'Exploration',
    techLevels: [
      {
        level: 0,
        cost: 0,
        state: TECH_LEVEL_STATE.OWNED,
      },
      {
        level: 1,
        cost: 15,
      },
      {
        level: 2,
        cost: 15,
      },
    ],
  },
  {
    id: 13,
    name: 'Move',
    techLevels: [
      {
        level: 1,
        cost: 0,
        state: TECH_LEVEL_STATE.OWNED,
      },
      {
        level: 2,
        cost: 20,
      },
      {
        level: 3,
        cost: 25,
      },
      {
        level: 4,
        cost: 25,
      },
      {
        level: 5,
        cost: 25,
      },
      {
        level: 6,
        cost: 20,
      },
      {
        level: 7,
        cost: 20,
      },
    ],
  },
  {
    id: 14,
    name: 'Scanners',
    techLevels: [
      {
        level: 0,
        cost: 0,
        state: TECH_LEVEL_STATE.OWNED,
      },
      {
        level: 1,
        cost: 20,
      },
      {
        level: 2,
        cost: 20,
      },
      {
        level: 3,
        isPlaceholder: true,
      },
    ],
  },
  {
    id: 15,
    name: 'Fast BC',
    techLevels: [
      {
        level: 0,
        cost: 0,
        state: TECH_LEVEL_STATE.OWNED,
      },
      {
        level: 1,
        cost: 10,
      },
      {
        level: 2,
        cost: 10,
      },
    ],
  },
  {
    id: 16,
    name: 'Fighters',
    techLevels: [
      {
        level: 0,
        cost: 0,
        state: TECH_LEVEL_STATE.OWNED,
      },
      {
        level: 1,
        cost: 25,
      },
      {
        level: 2,
        cost: 25,
      },
      {
        level: 3,
        cost: 25,
      },
      {
        level: 4,
        cost: 25,
      },
      {
        level: 5,
        isPlaceholder: true,
      },
      {
        level: 6,
        isPlaceholder: true,
      },
    ],
  },
  {
    id: 17,
    name: 'Mine Sweeper',
    techLevels: [
      {
        level: 0,
        cost: 0,
        state: TECH_LEVEL_STATE.OWNED,
      },
      {
        level: 1,
        cost: 10,
      },
      {
        level: 2,
        cost: 15,
      },
      {
        level: 3,
        cost: 20,
      },
    ],
  },
  {
    id: 18,
    name: 'Mines',
    techLevels: [
      {
        level: 0,
        cost: 0,
        state: TECH_LEVEL_STATE.OWNED,
      },
      {
        level: 1,
        cost: 30,
      },
      {
        level: 2,
        isPlaceholder: true,
      }
    ],
  },
  {
    id: 19,
    name: 'Point Def.',
    techLevels: [
      {
        level: 0,
        cost: 0,
        state: TECH_LEVEL_STATE.OWNED,
      },
      {
        level: 1,
        cost: 20,
      },
      {
        level: 2,
        cost: 20,
      },
      {
        level: 3,
        cost: 20,
      },
      {
        level: 4,
        isPlaceholder: true,
      },
      {
        level: 5,
        isPlaceholder: true,
      },
      {
        level: 6,
        isPlaceholder: true,
      },
    ],
  },
  {
    id: 20,
    name: 'Advanced Con.',
    techLevels: [
      {
        level: 0,
        cost: 0,
        state: TECH_LEVEL_STATE.OWNED,
      },
      {
        level: 1,
        cost: 10,
      },
      {
        level: 2,
        cost: 10,
      },
      {
        level: 3,
        cost: 10,
      },
    ],
  },
  {
    id: 21,
    name: 'Tractor Beam',
    techLevels: [
      {
        level: 0,
        cost: 0,
        state: TECH_LEVEL_STATE.OWNED,
      },
      {
        level: 1,
        cost: 10,
      },
      {
        level: 2,
        isPlaceholder: true,
      },
    ],
  },
  {
    id: 22,
    name: '',
    techLevels: [],
  },
  {
    id: 23,
    name: 'Anti-Replicator',
    techLevels: [
      {
        level: 0,
        cost: 0,
        state: TECH_LEVEL_STATE.OWNED,
      },
      {
        level: 1,
        cost: 10,
      },
      {
        level: 2,
        isPlaceholder: true,
      },
      {
        level: 3,
        isPlaceholder: true,
      },
    ],
  },
  {
    id: 24,
    name: 'Shield Proj.',
    techLevels: [
      {
        level: 0,
        cost: 0,
        state: TECH_LEVEL_STATE.OWNED,
      },
      {
        level: 1,
        cost: 15,
      },
      {
        level: 2,
        isPlaceholder: true,
      },
    ],
  },
]