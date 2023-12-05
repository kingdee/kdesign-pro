import { IRoute } from 'umi'

export function getMenus(menus: IMenuItem[]): IMenuItem[] {
  return menus.map((menu) => {
    // eslint-disable-next-line prefer-destructuring
    menu.path = menu.path.split(/\/[:*?]/)[0]
    menu.routes && (menu.routes = getMenus(menu.routes))
    return menu
  })
}

export function getRoutes(menus: IMenuItem[]): IRoute[] {
  const routes: IRoute[] = []

  function mapMenuToRoute(m: IMenuItem[]) {
    m.forEach(({ path, name, access, level = 'page', routes: children, component }) => {
      if (level === 'page') {
        const comPath = path.split(/\/[:*?]/)[0]
        const route: IRoute = { path, name, component: `@/pages${component || comPath}`, exact: true }
        if (access) route.access = access
        routes.push(route)
      }
      children && mapMenuToRoute(children)
    })
  }

  mapMenuToRoute(menus)
  return routes
}
