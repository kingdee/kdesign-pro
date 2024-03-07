import menus from './menus'
import { getRoutes } from './tools'

export default [
  {
    path: '/',
    component: '@/pages',
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
        component: '@/layouts',
        routes: [...getRoutes(menus)],
      },
    ],
  },
]
