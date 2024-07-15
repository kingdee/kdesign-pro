declare module '*.css'
declare module '*.less'
declare module '*.png'
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement
  const url: string
  export default url
}

declare module '*.json' {
  const value: any
  export default value
}

declare module '@kdcloudjs/kd-charts/theme/echarts-theme-default'

declare module 'bisheng/collect'

declare module 'bisheng/router'

declare module 'jsonml.js/lib/utils'

declare module '*.png'

declare module '*.svg'

declare module '@kdcloudjs/kdesign-icons'

declare module '*.jpg'

declare module '@babel/standalone'

declare module 'lz-string'
