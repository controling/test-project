import Vue from 'vue'
import Router from 'vue-router'
import routes from './router' // 路由列表
import { setTitle, setToken, getToken } from '@/lib/util'
import store from '@/store'
Vue.use(Router)

// 创建路由实例
const router = new Router({
  routes
})

// const hasLogined = false // 登录标识

// 全局路由守卫
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)

  next()

  // 获取cookie上的token
  // const token = getToken()
  // if (token) {
  //   // 请求接口验证token是否有效
  //   store.dispatch('user/authorization').then(() => {
  //     // token有效而且目标路由为登录页, 强制跳转到首页
  //     if (to.name === 'login') next({ name: 'home' })
  //     else next()
  //   }).catch(() => {
  //     setToken('')
  //     next({ name: 'login' })
  //   })
  // } else {
  //   // 没有token的情况下 跳转到登录界面
  //   if (to.name === 'login') next()
  //   else next({ name: 'login' })
  // }

  // 判断当前是否是登录页
  // if (to.name !== 'login') {
  //   // 判断是否已经登录
  //   if (hasLogined) {
  //     // 已经登录直接跳转
  //     next()
  //   } else {
  //     // 没有登录直接跳转到登录界面
  //     next({ name: 'login' })
  //   }
  // } else {
  //   // 当前是登录界面
  //   if (hasLogined) {
  //     // 用户已经登录
  //     next({ name: 'home' })
  //   } else {
  //     next()
  //   }
  // }
})

// router.beforeResolve

router.afterEach((to, from) => {
  // loading = false
})

/**
 * 1. 导航被触发
 * 2. 在失活的组件(即将离开的页面组件)里调用离开守卫 beforeRouteLeave
 * 3. 调用全局的前置守卫 beforeEach
 * 4. 在重用的组件里调用 beforeRouteUpdate
 * 5. 调用路由独享的守卫 beforeEnter
 * 6. 解析异步路由组件
 * 7. 在被激活的组件(即将进入的页面组件)里调用 beforeRouteEnter
 * 8. 调用全局的解析守卫 beforeResolve
 * 9. 导航被确认
 * 10. 调用全局的后置守卫 afterEach
 * 11. 触发DOM更新
 * 12. 用创建好的实例调用beforeRouteEnter守卫里传给next的回调函数
 */

export default router
