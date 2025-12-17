import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddAccount from '../views/AddAccout.vue'
import BalanceSum from '../views/BalanceSum.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/add',
      name: 'Add Account',
      component: AddAccount
    },
    {
      path: '/sum',
      name: 'Balance Sum',
      component: BalanceSum
    },
  ]
})

export default router
