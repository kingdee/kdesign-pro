import menus from './menus'
import { getRoutes } from './tools'

export const baseRoutes = [...getRoutes(menus)]

export default [
  {
    path: '/',
    component: '@/layouts',
    routes: [
      {
        path: '/',
        redirect: '/typical/workbench',
      },
      {
        path: '/login',
        component: '@/pages/login',
      },
      {
        path: '/',
        component: '@/pages',
        routes: baseRoutes,
      },
    ],
  },
]
