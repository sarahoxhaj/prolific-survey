// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import FirstView from "./components/FirstView.vue";
import ConsentForm from "./components/ConsentForm.vue";
import BackgroundView from "./components/BackgroundView";
import ItemValidation from "./components/ItemValidation.vue";
import LastView from "./components/LastView.vue";
import ProlificIDView from "./components/ProlificIDView.vue";
import AttentionView from "./components/AttentionView.vue";

const routes = [
  {
    path: "/",
    name: "FirstView",
    component: FirstView,
  },
  {
    path: "/ConsentForm",
    name: "ConsentForm",
    component: ConsentForm,
  },
  {
    path: "/BackgroundView",
    name: "BackgroundView",
    component: BackgroundView,
  },
  {
    path: "/ItemValidation",
    name: "ItemValidation",
    component: ItemValidation,
  },
  {
    path: "/LastView",
    name: "LastView",
    component: LastView,
  },
  {
    path: "/ProlificIDView",
    name: "ProlificIDView",
    component: ProlificIDView,
  },
  {
    path: "/AttentionView",
    name: "AttentionView",
    component: AttentionView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
