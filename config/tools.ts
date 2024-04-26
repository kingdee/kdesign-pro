export function getMenus(menus: IMenuItem[]): IMenuItem[] {
  return menus.map((menu) => {
    // eslint-disable-next-line prefer-destructuring
    menu.path = menu.path.split(/\/[:*?]/)[0]
    menu.routes && (menu.routes = getMenus(menu.routes))
    return menu
  })
}

export function getRoutes(menus: IMenuItem[]) {
  const routes: any[] = []

  function mapMenuToRoute(m: IMenuItem[]) {
    m.forEach(({ path, name, access, level = 'page', routes: children, component }) => {
      if (level === 'page') {
        const comPath = path.split(/\/[:*?]/)[0]
        const route: any = { path, name, component: `@/pages${component || comPath}`, exact: true, access }
        routes.push(route)
      }
      children && mapMenuToRoute(children)
    })
  }

  mapMenuToRoute(menus)
  return routes
}
