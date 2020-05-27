import Home from '@/views/Home.vue'
import Layout from '@/views/Layout.vue'

export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home
      },
      {
        path: 'tree',
        name: 'tree',
        component: () => import('@/views/Tree.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 懒加载
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      food: 'banana'
    },
    // 路由元信息
    meta: {
      title: '关于'
    }
  },
  {
    // 动态路由参数
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue'),
    props: true
  },
  {
    // 路由嵌套
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    // 命名视图
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path: '/count-demo',
    name: 'count_demo',
    component: () => import('@/views/count-demo.vue')
  },
  {
    path: '/split-pane-demo',
    name: 'split_pane_demo',
    component: () => import('@/views/split-pane-demo.vue')
  },
  {
    path: '/render-demo',
    name: 'render_demo',
    component: () => import('@/views/render-demo.vue')
  },
  {
    path: '/main',
    redirect: '/'
  },
  {
    path: '/store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]
