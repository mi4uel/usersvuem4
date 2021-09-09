import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../components/Inicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/usuarios',
    name: 'ListarUsuarios',
    component: () => import('../components/ListarUsuarios.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../components/Contacto.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
