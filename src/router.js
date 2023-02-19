import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import BattleView from "./views/BattleView.vue";
import StatsView from "./views/StatsView.vue";
import PokedexView from "./views/PokedexView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "pokedex",
          name: "pokedex",
          component: PokedexView,
        },
        {
          path: "stats",
          name: "stats",
          component: StatsView,
        },
      ],
    },
    {
      path: "/battle",
      name: "battle",
      component: BattleView,
    },
    // {
    //   path: '/pokedex',
    //   name: 'pokedex',
    // components: {
    //   default: HomeView,
    //   modal: PokedexView,
    // },
    // },
  ],
});

export default router;
