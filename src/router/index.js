import Vue from 'vue'
import VueRouter from 'vue-router'
import inicioView from '../views/InicioView.vue'
import encontreAquiView from '../views/encontreAquiView'
import cadastreSeView from '../views/cadastreSeView'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name: 'inicioView',
    component: inicioView
  },
  {
    path:'/encontreaquiview',
    name: 'encontreAquiView',
    component: encontreAquiView
  },
  {
    path:'/cadastreSeView',
    name: 'cadastreSeView',
    component: cadastreSeView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
