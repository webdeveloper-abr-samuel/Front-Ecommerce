import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import HomeTwo from '../components/HomeTwo.vue';
import Login from '../components/layouts/auth/login.vue';
import Register from '../components/layouts/auth/register.vue';
import Shop from '../components/ComponentHomeTwo/shop.vue'
import Checkout from '../components/ComponentHomeTwo/checkout.vue'
import DetailsProduct from '../components/ComponentHomeTwo/detailsproduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'HomeTwo',
    component: HomeTwo
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/details_product',
    name: 'DetailsProduct',
    component: DetailsProduct
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
