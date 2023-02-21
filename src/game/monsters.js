import { CHALLENGES, TYPES } from "./constants";

export default [
  {
    id: "0001",
    name: "Bulbizarre",
    weight: 15,
    types: [TYPES.PLANT, TYPES.POISON], // main type first
    challenge: [
      {
        type: CHALLENGES.PULL_UP,
        quantity: 30,
      },
      {
        type: CHALLENGES.BURPEE,
        quantity: 20,
      },
      {
        type: CHALLENGES.DRINK, // TODO: for water type only
        quantity: 200,
      },
    ],
  },
  {
    id: "0002",
    name: "Herbizarre",
    weight: 10,
    types: [TYPES.PLANT, TYPES.POISON],
    challenge: [],
  },
  {
    id: "0003",
    name: "Florizarre",
    weight: 5,
    types: [TYPES.PLANT, TYPES.POISON],
    challenge: [],
    // TODO
    shadowOffset: {
      bottom: 17,
    },
  },
];

export function findBackground(monster) {
  return monster.types[0];
}
