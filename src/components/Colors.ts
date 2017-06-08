import { color } from "csx"

const hsla = (h: number, s: number, l: number, a: number) => {
  return `hsla(${h}, ${s}, ${l}, ${a})`
}

const hsb = (hHsb: number, sHsb: number, bHsb: number, a: number = 1) => {
  if (bHsb === 0) {
    return color(hsla(0, 0, 0, a))
  } else {
    const lHsl = (bHsb/2) * (2 - (sHsb/100))
    const sHsl = (bHsb * sHsb) / (lHsl < 50 ? lHsl * 2 : 200 - lHsl * 2);
    return color(hsla(hHsb, sHsl, lHsl, a));
  }
}

const gray5 = color("rgb(99, 98, 104)")
const gray8 = color("rgb(151,151,155)")
const gray13 = color("rgb(240,241,241)")
const white = color("rgb(255,255,255)")
const blue = hsb(210, 69, 98)
const blueDark = hsb(212, 79, 90)

export { gray5, gray8, gray13, white, blue, blueDark }