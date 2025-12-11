import { createRouter, createWebHistory } from 'vue-router'
import AllUsers from '@/views/Users/AllUsers.vue'
import AddUser from '@/views/Users/AddUser.vue'
import EditUser from '@/views/Users/EditUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AllUsers
    },
    {
      path: '/adduser',
      name: 'Add User',
      component: AddUser
    },
    {
      path: '/edituser/:id',
      name: 'Edit User',
      component: EditUser
    },
  ]
})

export default router;
