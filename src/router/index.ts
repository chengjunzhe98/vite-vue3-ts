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
          iconName: 'home',
        },
        component: () => import('@/pages/home/index.vue'),
      },
      {
        path: 'examples',
        name: '/pages/examples',
        redirect: '/pages/examples/test',
        meta: {
          menuName: 'examples',
          iconName: 'action_key',
        },
        children: [
          {
            path: 'test',
            name: '/pages/examples/test',
            meta: {
              menuName: 'test',
              iconName: 'lab_panel',
            },
            component: () => import('@/pages/test/index.vue'),
          },
          {
            path: 'form',
            name: '/pages/examples/form',
            redirect: '/pages/examples/form/customValidator',
            meta: {
              menuName: 'form',
              iconName: 'action_key',
            },
            children: [
              {
                path: 'customValidator',
                name: '/pages/examples/form/customValidator',
                meta: {
                  menuName: 'form校验函数',
                  iconName: 'lab_panel',
                },
                component: () =>
                  import('@/pages/test/form/customValidator.vue'),
              },
            ],
          },
          {
            path: 'canvas',
            name: '/pages/examples/canvas',
            redirect: '/pages/examples/canvas/customValidator',
            meta: {
              menuName: 'canvas',
              iconName: 'action_key',
            },
            children: [
              {
                path: 'customValidator',
                name: '/pages/examples/canvas/customValidator',
                meta: {
                  menuName: 'canvas测试',
                  iconName: 'lab_panel',
                },
                component: () => import('@/pages/test/canvas/canvasTest.vue'),
              },
            ],
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
