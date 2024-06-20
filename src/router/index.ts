import {createWebHistory, createRouter} from "vue-router";
import HomeView from "../views/HomeView.vue";
import CardView from "../views/CardView.vue";

const routes = [
    {
        path: "/NetworkGroup",
        name: "Home",
        component: HomeView,
    },
    {
        path: '/NetworkGroup/card/:id',
        name: 'Card',
        component: CardView
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;