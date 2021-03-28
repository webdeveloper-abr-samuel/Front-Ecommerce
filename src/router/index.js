import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import HomeTwo from '../components/HomeTwo.vue';
import Login from '../components/layouts/auth/login.vue';
import Register from '../components/layouts/auth/register.vue';
import Shop from '../components/ComponentHomeTwo/shop.vue'
import Checkout from '../components/ComponentHomeTwo/checkout.vue'
import DetailsProduct from '../components/ComponentHomeTwo/detailsproduct.vue'
import Cart from '../components/ComponentHomeTwo/cart.vue'
import Contact from '../components/blockComponents/contactUs.vue'
import TratamientoDeDatos from '../components/ComponentFooter/tratamiendoDeDatos.vue'
import Orders from '../components/ComponentHomeTwo/orders.vue'

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
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/tratamiento_de_datos',
    name: 'TratamientoDeDatos',
    component: TratamientoDeDatos
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
