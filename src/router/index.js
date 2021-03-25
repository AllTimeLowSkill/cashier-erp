import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'default'
    },
    component: Home
  },
  {
    path: '/product/:id',
    name: 'Item',
    meta: {
      layout: 'default'
    },
    component: () => import('../views/Item')
  },
  {
    path: '/cart',
    name: 'Cart',
    meeta: {
      layout: 'default'
    },
    component: () => import('../views/Cart')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
