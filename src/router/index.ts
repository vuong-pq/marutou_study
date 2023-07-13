import { useAuthStore } from './../stores/auth'
import { createRouter, createWebHistory } from 'vue-router'
import routers from './routers'
import { ROUTER_PATH, ROLE } from '@/constants'
import { getSessionStorageByItem } from '@/constants/utils'
import lodash from 'lodash'
const { isEmpty } = lodash
import LABEL from '@/constants/label'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routers
})

router.beforeEach((to, from, next) => {
  const { state } = useAuthStore()
  const token = getSessionStorageByItem('USER_LOGIN')
  next()

  // if (!to.matched.some((record) => record.meta.requiresAuth) && isEmpty(token)) {
  //   next(ROUTER_PATH.LOGIN)
  // } else if (
  //   to.path === ROUTER_PATH.LOGIN &&
  //   !isEmpty(token) &&
  //   String(state.roleUser) === LABEL.COMMON.NUMBER.ONE
  // ) {
  //   next(ROUTER_PATH.USER)
  // } else if (
  //   to.path === ROUTER_PATH.LOGIN &&
  //   !isEmpty(token) &&
  //   String(state.roleUser) === LABEL.COMMON.NUMBER.TWO
  // ) {
  //   next(ROUTER_PATH.ADMIN)
  // } else if (
  //   to.path !== ROUTER_PATH.LOGIN &&
  //   !isEmpty(token) &&
  //   String(state.roleUser) === LABEL.COMMON.NUMBER.ONE &&
  //   to.meta.role === ROLE.ADMIN
  // ) {
  //   next(ROUTER_PATH.USER)
  // } else if (
  //   to.path !== ROUTER_PATH.LOGIN &&
  //   !isEmpty(token) &&
  //   String(state.roleUser) === LABEL.COMMON.NUMBER.TWO &&
  //   to.meta.role === ROLE.USER
  // ) {
  //   next(ROUTER_PATH.ADMIN)
  // } else {
  //   next()
  // }
})

export default router
