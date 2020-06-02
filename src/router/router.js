import Home from '@/views/Home.vue'
import Layout from '@/layout'

export default [
  {
    path: '/',
    component: Layout,
    redirect: '/table',
    children: [{
      path: 'table',
      name: 'Table',
      component: () => import('@/views/table'),
      meta: { title: 'Table', icon: 'menu' }
    }]
  },
  {
    path: '/organize',
    component: Layout,
    children: [{
      path: 'organize',
      name: 'Organize',
      component: Home,
      meta: { title: 'Organize', icon: 's-flag' }
    }]
  },
  {
    path: '/flow',
    component: Layout,
    children: [{
      path: 'flow',
      name: 'Flow',
      component: Home,
      meta: { title: 'Flow', icon: 's-marketing' }
    }]
  },
  {
    path: '*',
    component: () => import('@/views/404.vue')
  }
]
