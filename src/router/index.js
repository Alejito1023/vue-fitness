import { createRouter, createWebHashHistory } from 'vue-router'

import EditarMiembro from '../components/miembros/EditarMiembro.vue';
import NewMiembro from '../components/miembros/NewMiembro.vue';
import EditarClase from '../components/clases/EditarClase.vue';
import NewClase from '../components/clases/NewClase.vue';
import EditarInscripcion from '../components/inscripciones/EditarInscripcion.vue';
import NewInscripcion from '../components/inscripciones/NewInscripcion.vue';
import HomeView from '../views/HomeView.vue'
import Clases from '../views/Clases';
import Miembros from '../views/Miembros';
import Inscripciones from '@/views/Inscripciones.vue';

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
    path: '/clases',
    name: 'Clases',
    component: Clases
  },
  {
    path: '/editar-clase/id',
    name: 'EditarClase',
    component : EditarClase
  },

  {
    path: '/add-clase/',
    name: 'NewClase',
    component: NewClase
  },
  {
    path: '/inscripciones',
    name: 'inscripciones',
    component: Inscripciones
  },
  {
    path: '/editar-inscripciones/id',
    name: 'EditarInscripciones',
    component : EditarInscripcion
  },

  {
    path: '/add-inscripciones/',
    name: 'NewInscripciones',
    component: NewInscripcion
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
