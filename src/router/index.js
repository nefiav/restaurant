import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Suggest from '../views/Suggest.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/suggest',
    name: 'Suggest',
    component: Suggest
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
