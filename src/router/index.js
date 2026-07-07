import DashboardPage from '@/DashboardPage.vue'
import LoginPage from '@/LoginPage.vue'
import SignInPage from '@/SignInPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path: "/", component: LoginPage},
  {path: "/signin", component: SignInPage},
  {path: "/dashboard", component: DashboardPage},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
