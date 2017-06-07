import { color } from "csx"

const hsb = (h: number, s: number, b: number, a: number = 1) => {
  if (b === 0) {
    return color(`hsla(0, 0, 0, ${a}`)
  } else {
    const lHsl = (b/2) * (2 - (s/100))
    const sHsl = (b * s) / (lHsl < 50 ? lHsl * 2 : 200 - lHsl * 2);
    return color(`hsla(${h}, ${sHsl}, ${lHsl}, ${a}`);
  }
}

const gray5 = color("rgb(99, 98, 104)")
const gray13 = color("rgb(240,241,241)")
const white = color("rgb(255,255,255)")
const blue = hsb(210, 69, 98)

export { gray5, gray13, white, blue }