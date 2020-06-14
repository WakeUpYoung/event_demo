import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import HelloWorld from './components/HelloWorld'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        component: HelloWorld
      }
    ]
  }

];

const router = new VueRouter({
  mode: 'history',
  routes: routes,
});

export default router


