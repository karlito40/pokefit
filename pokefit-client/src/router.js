import { createRouter, createWebHistory } from "vue-router";
import { h } from "vue";
import HomeView from "./views/HomeView.vue";
import BattleView from "./views/BattleView.vue";
import StatsView from "./views/StatsView.vue";
import PokedexView from "./views/PokedexView.vue";
import Modal from "./components/Modal.vue";

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
          component: ModalRoute(PokedexView),
        },
        {
          path: "stats",
          name: "stats",
          component: ModalRoute(StatsView),
        },
      ],
    },
    {
      path: "/battle",
      name: "battle",
      component: BattleView,
    },
  ],
});

function ModalRoute(Component) {
  return {
    components: {
      Modal,
    },

    render() {
      return h(
        Modal,
        {
          onClose: () => router.push({ name: "home" }),
        },
        h(Component)
      );
    },
  };
}

export default router;
