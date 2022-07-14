import ColorTool from '@/utils/color-tool'

export function addStyleNode(styleStr: string, id: string) {
  const existNode = document.querySelector(`#${id}`)
  const styleNode = existNode || document.createElement('style')
  styleNode.innerHTML = styleStr
  if (!existNode) {
    styleNode.id = id
    document.getElementsByTagName('head')[0].appendChild(styleNode)
  }
}

export default function changeTheme(themeColor: string) {
  const colorTool = new ColorTool(themeColor)
  const colorArr = colorTool
    .getColorPalettes()
    .map((color: string, index: number) => `--kd-g-color-theme-${index + 1}: ${color};`)
  const styleStr = `
      :root {
        --kd-g-color-theme: ${themeColor};
        ${colorArr.join('\n        ')}
      }
    `
  addStyleNode(styleStr, '__kd-theme-css-variable')
}
