const POISON = "poison";
const PLANT = "plant";

const PULL_UP = "pull_up";
const BURPEE = "burpee";
const WATER = "water";

export default [
  {
    id: "0001",
    name: "Bulbizarre",
    types: [POISON, PLANT],
    challenge: [
      {
        type: PULL_UP,
        quantity: 30,
      },
      {
        type: BURPEE,
        quantity: 20,
      },
      {
        type: WATER, // TODO: move to a water type
        quantity: 200,
      },
    ],
  },
  {
    id: "0002",
    name: "Herbizarre",
    types: [POISON, PLANT],
    challenge: [],
  },
  {
    id: "0003",
    name: "Florizarre",
    types: [POISON, PLANT],
    challenge: [],
    // TODO
    shadowOffset: {
      bottom: 17,
    },
  },
];