import Color from 'color'

const tuple = <T extends readonly string[]>(...args: T): T => args
export const colorTypes = tuple('hsl', 'hex', 'rgb', 'hsv')
export type colorType = (typeof colorTypes)[number]

export interface ColorToolInterface {
  themeColor: string
  type: colorType
  getColorPalettes: () => Array<string>
  getColorPalette: (i: number) => string
}
export default class ColorTool implements ColorToolInterface {
  readonly themeColor: string

  readonly type: colorType

  constructor(themeColor = '#276ff5', type: colorType = 'hex') {
    this.themeColor = themeColor
    this.type = type
  }

  /**
   * 获取当前主题色下1-9个衍生色
   */
  getColorPalettes(): Array<string> {
    const colors = []
    for (let i = 1; i <= 9; i += 1) {
      const color: string = this.getColorPalette(i)
      colors.push(color)
    }
    return colors
  }

  /**
   *
   * @param i 1-9个衍生色， 主题色为第六个
   */
  getColorPalette(i: number): string {
    const isLight = i <= 6
    const index = Math.abs(6 - i)
    const hsvH = Color(this.themeColor).hsv().hue()
    const hsvS = Color(this.themeColor).hsv().saturationv()
    const hsvV = Color(this.themeColor).hsv().value()
    let hue
    let saturation
    let value
    if (hsvH >= 60 && hsvH <= 240) {
      hue = isLight ? hsvH - 2 * index : hsvH + 2 * index
    } else {
      hue = isLight ? hsvH + 2 * index : hsvH - 2 * index
    }
    if (hue < 0) {
      hue += 360
    } else if (hue >= 360) {
      hue -= 360
    }
    hue = Math.round(hue)
    if (isLight) {
      saturation = Math.max(hsvS - 18 * index, 5)
    } else {
      saturation = Math.min(hsvS + 8 * index, 100)
    }
    saturation = Number(saturation)

    if (isLight) {
      value = Math.min(100, hsvV + 8 * index)
    } else {
      value = Math.max(5, hsvV - 16 * index)
    }
    value = Number(value)
    let color: string
    switch (this.type) {
      case 'hsl':
        color = Color({ h: hue, s: saturation, v: value }).hsl().toString()
        break
      case 'hsv':
        color = Color({ h: hue, s: saturation, v: value }).hsv().toString()
        break
      case 'rgb':
        color = Color({ h: hue, s: saturation, v: value }).rgb().toString()
        break
      default:
        color = Color({ h: hue, s: saturation, v: value }).hex()
    }
    return color
  }
}
