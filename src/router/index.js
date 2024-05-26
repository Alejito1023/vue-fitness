import { createRouter, createWebHashHistory } from 'vue-router'

import EditarMiembro from '../components/miembros/EditarMiembro.vue';
import NewMiembro from '../components/miembros/NewMiembro.vue';
import EditarEquipo from '../components/equipos/EditarEquipo.vue';
import NewEquipo from '../components/equipos/NewEquipo.vue';
import HomeView from '../views/HomeView.vue'
import Miembros from '../views/Miembros';
import Equipos from '../views/Miembros';

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
    path: '/equipos',
    name: 'Equipos',
    component: Equipos
  },
  {
    path: '/editar-equipo/id',
    name: 'EditarEquipo',
    component : EditarEquipo
  },

  {
    path: '/add-equipo/',
    name: 'NewEquipo',
    component: NewEquipo
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
