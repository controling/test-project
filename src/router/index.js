import Vue from 'vue'
import Router from 'vue-router'
import routes from './router' // 路由列表
import { setTitle } from '@/utils/index'
Vue.use(Router)

// 创建路由实例
const router = new Router({
  routes
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)

  next()
})

router.afterEach((to, from) => {
  // loading = false
})

export default router
