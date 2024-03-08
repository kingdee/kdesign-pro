import menus from './menus'
import { getRoutes } from './tools'

export default [
  {
    path: '/',
    redirect: '/typical/workbench',
  },
  {
    path: '/login',
    component: 'login',
    exact: true,
  },
  {
    path: '/',
    component: 'index',
    routes: [...getRoutes(menus)],
  },
]
