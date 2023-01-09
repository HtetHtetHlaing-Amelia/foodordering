import Vue from 'vue'
import VueRouter from "vue-router"
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

import Admin from "../views/Category/Admin";

import AddCategory from '../views/Category/AddCategory'
import CategoryView from '../views/Category/CategoryView'
import EditCategory from '../views/Category/EditCategory'

import Menu from '../views/Menu/Menu'
import AddMenu from "../views/Menu/AddMenu";
import EditMenu from '../views/Menu/EditMenu'

import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView

  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  //view Category
  {
    path: '/admin/category',
    name: 'Category',
    component: CategoryView
  },
  //edit category
  {
    path: '/admin/category/edit',
    name: 'EditCategory',
    component: EditCategory
  },
  // admin home page
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/admin/menu',
    name: 'AdminMenu',
    component: Menu
  },
  // add product
  {
    path: '/admin/menu/new',
    name: 'AddMenu',
    component: AddMenu
  },
  //Edit Product
  {
    path: '/admin/menu/edit',
    name: 'EditMenu',
    component: EditMenu
  },
  //shopping cart
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router;