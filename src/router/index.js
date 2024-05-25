import { createRouter, createWebHashHistory } from 'vue-router'

import EditarMiembro from '../components/miembros/EditarMiembro.vue';
import NewMiembro from '../components/miembros/NewMiembro.vue';
import HomeView from '../views/HomeView.vue'
import Miembros from '../views/Miembros';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/miembros',
    name: 'Miembros',
    component: Miembros
  },
  {
    path: '/editar-miembro/id',
    name: 'EditarMiembro',
    component : EditarMiembro
  },

  {
    path: '/add-miembro/',
    name: 'NewMiembro',
    component: NewMiembro
  },


  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
