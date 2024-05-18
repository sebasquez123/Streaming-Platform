import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cact from '../views/Cact.vue'
import U from '../views/U.vue'
import Pass from '../views/Pass.vue'
import Reg from '../views/Reg.vue'
import Init from '../views/Init.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/Cact',
    name: 'Cact',
    component: Cact
  },
  {
    path: '/U',
    name: 'U',
    component: U
  },
  {
    path: '/Init',
    name: 'Init',
    component: Init
  },
  {
    path: '/Pass',
    name: 'Pass',
    component: Pass
  },
  {
    path: '/Reg',
    name: 'Reg',
    component: Reg
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
