import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store/auth'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Dashboard from '@/views/Dashboard.vue'
import Users from '@/views/Users.vue'
import Login from '@/views/Login.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        redirect: 'dashboard',
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: 'users',
        name: 'Users',
        component: Users,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.token) {
    next('/login')
  } else if (to.path === '/login' && auth.token) {
    next('/dashboard')  // Prevent login access after login
  } else {
    next()
  }
})


export { router }
