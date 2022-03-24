import Vue from 'vue'
import VueRouter from 'vue-router'
import InicioView from '../views/InicioView.vue'
import encontreAquiView from '../views/encontreAquiView'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name: 'inicioView',
    component: InicioView
  },
  {
    path:'/encontreaquiview',
    name: 'encontreAquiView',
    component: encontreAquiView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
