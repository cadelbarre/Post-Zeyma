import Vue from 'vue'
import VueRouter from 'vue-router'

import data from '@/assets/data/data.js';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    // meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/home-2',
    name: 'Home-2',
    // meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home-2.vue')
  },
   {
    path: '/about',
    name: 'About',
    // meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
    {
    path: '/*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/Login.vue')
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {

    if (!data.ReqAuth) {
      next({
      	name: "Login"
      });
    } else {
      next();
    }
   
  } else {
    next();
  }
});


export default router
