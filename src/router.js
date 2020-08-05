import Vue from 'vue'
import VueRouter from 'vue-router'
import EventConfigurations from "./components/EventConfigurations";
import LinkToUser from "./components/LinkToUser";
import InputTest from "./components/InputTest";

Vue.use(VueRouter);

const routes = [
    {
      path: '',
      component: EventConfigurations,
      name:'eventConfigurations',
    },
    {
      path: '/linktouser',
      component: LinkToUser,
      name: 'linkToUser'
    },
    {
      path: '/inputtest',
      component: InputTest,
      name: 'inputTest'
    },
];

const router = new VueRouter({
  mode: 'history',
  routes: routes,
});

export default router
