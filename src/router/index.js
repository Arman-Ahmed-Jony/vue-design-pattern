import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SingleFileComponent from '../views/SingleFileComponent'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/single-file-component',
    name: 'single-file-component',
    component: SingleFileComponent
  },
  {
    path: '/props-and-events',
    name: 'props-and-events',
    component: () => import('../views/PropsAndEvent.vue')
  },
  {
    path: '/dynamic-component',
    name: 'dunamic-compnent',
    component: () => import('../views/DynamicComponent.vue')
  },
  {
    path: '/test-driven-development',
    name: 'tdd',
    component: () => import('../views/TestDrivenDevelopment.vue')
  },
  {
    path: '/SVG-components',
    name: 'SVGs',
    component: () => import('../views/SVGs.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
