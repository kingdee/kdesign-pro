import menus from './menus'
import { getRoutes } from './tools'

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
        routes: [...getRoutes(menus)],
      },
    ],
  },
]
