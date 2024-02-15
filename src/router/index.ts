import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import layout from '@/components/useElement/Layout/index.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/pages', name: '/' },
  {
    path: '/pages',
    name: '/pages',
    redirect: '/pages/home',
    component: layout,
    children: [
      {
        path: 'home',
        name: '/pages/home',
        meta: {
          menuName: 'home',
          iconName: 'search',
        },
        component: () => import('@/pages/home/index.vue'),
      },
      {
        path: 'examples',
        name: '/pages/examples',
        redirect: '/pages/examples/test',
        meta: {
          menuName: 'examples',
          iconName: 'search',
        },
        children: [
          {
            path: 'test',
            name: '/pages/examples/test',
            meta: {
              menuName: 'test',
            },
            component: () => import('@/pages/test/index.vue'),
          },
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
