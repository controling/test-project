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
      path: 'index',
      name: 'Organize',
      component: () => import('@/views/organize'),
      meta: { title: 'Organize', icon: 's-flag' }
    }]
  },
  {
    path: '/flow',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Flow',
      component: () => import('@/views/flow'),
      meta: { title: 'Flow', icon: 's-marketing' }
    }]
  },
  {
    path: '*',
    component: () => import('@/views/404.vue')
  }
]
