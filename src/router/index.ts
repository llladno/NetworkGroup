import {createWebHistory, createRouter} from "vue-router";
import HomeView from "../views/HomeView.vue";
import TestView from "../views/TestView.vue";
import CardView from "../views/CardView.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView,
    },
    {
        path: '/card/:id',
        name: 'Card',
        component: CardView
    },
    {
        path: '/test',
        name: 'Test',
        component: TestView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;