type TLevel = 'app' | 'category' | 'page' | undefined
interface IMenuItem {
  path: string
  name: string
  icon?: string
  level?: TLevel
  access?: string
  component?: string
  routes?: IMenuItem[]
}
