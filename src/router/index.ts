import { useAuthStore } from './../stores/auth'
import { createRouter, createWebHistory } from 'vue-router'
import { ROUTER_PATH, ROUTER_NAME, ROLE } from '@/constants'
import LABEL from '@/constants/label'

import LoginView from '@/views/login/LoginView.vue'
import RegisterSimulator from '@/views/sales/simulation/RegisterSimulator.vue'
import SalesComponent from '@/views/sales/SalesComponent.vue'
import AdminView from '@/views/admin/AdminView.vue'
import { UserRegister, AdminPage, NewUserRegistration, SearchUser } from '@/views/admin/components'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: ROUTER_PATH.LOGIN, name: ROUTER_NAME.LOGIN, component: LoginView },
    {
      path: ROUTER_PATH.USER,
      name: ROUTER_NAME.USER,
      component: SalesComponent,
      meta: { role: ROLE.USER }
    },
    {
      path: ROUTER_PATH.ADMIN,
      name: ROUTER_NAME.ADMIN,
      component: AdminView,
      meta: { role: ROLE.ADMIN },
      children: [
        { path: '', component: AdminPage },
        {
          path: 'user-register',
          name: 'user-register',
          component: NewUserRegistration
        },
        {
          path: 'search',
          name: 'search',
          component: SearchUser
        }
      ]
    },
    {
      path: ROUTER_PATH.USER_SETTING,
      name: ROUTER_NAME.USER_SETTING,
      component: RegisterSimulator,
      meta: { role: ROLE.USER }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const { loggedIn, state } = useAuthStore()

  console.log(to.meta.role)
  console.log(state.roleUser)

  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    next(ROUTER_PATH.LOGIN)
  } else if (
    to.path === ROUTER_PATH.LOGIN &&
    loggedIn &&
    String(state.roleUser) === LABEL.COMMON.NUMBER.ONE
  ) {
    next(ROUTER_PATH.USER)
  } else if (
    to.path === ROUTER_PATH.LOGIN &&
    loggedIn &&
    String(state.roleUser) === LABEL.COMMON.NUMBER.TWO
  ) {
    next(ROUTER_PATH.ADMIN)
  } else if (
    to.path !== ROUTER_PATH.LOGIN &&
    loggedIn &&
    String(state.roleUser) === LABEL.COMMON.NUMBER.ONE &&
    to.meta.role === ROLE.ADMIN
  ) {
    next(ROUTER_PATH.USER)
  } else if (
    to.path !== ROUTER_PATH.LOGIN &&
    loggedIn &&
    String(state.roleUser) === LABEL.COMMON.NUMBER.TWO &&
    to.meta.role === ROLE.USER
  ) {
    next(ROUTER_PATH.ADMIN)
  } else {
    next()
  }
})

export default router
