import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import ProductNew from '../views/ProductNew.vue'
import ProductEdit from '../views/ProductEdit.vue'
import Category from '../views/Category.vue'
import CategoryNew from '../views/CategoryNew.vue'
import CategoryEdit from '../views/CategoryEdit.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Product',
    component: Product
  },
  {
    path: '/products/new',
    name: 'ProductNew',
    component: ProductNew
  },
  {
    path: '/products/edit/:id',
    name: 'ProductEdit',
    component: ProductEdit
  },
  {
    path: '/categories',
    name: 'Category',
    component: Category
  },
  {
    path: '/categories/new',
    name: 'CategoryNew',
    component: CategoryNew
  },
  {
    path: '/categories/edit/:id',
    name: 'CategoryEdit',
    component: CategoryEdit
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
