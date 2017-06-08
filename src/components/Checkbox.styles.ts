import { style } from "typestyle"
import { gray5, gray8, gray13, blue, blueDark, white} from  "./Colors"

const control = style({
  lineHeight: "28px",
  borderRadius: 3,
  cursor: "pointer",
  $nest: {
    "&:hover": {
      backgroundColor: gray13.toString()
    }
  }
})

const input = style({
  width: "20px",
  height: "20px",
  border: `1px solid ${gray8.toString()}`,
  backgroundColor: white.toString(),
  borderRadius: "3px",
  display: "inline-block",
  verticalAlign: "middle",
  cursor: "pointer",
  appearance: "none",
  "-webkit-appearance": "none",
  margin: 0,
  $nest: {
    "&:focus": {
        outline: "none"
    }
  } 
})

const checkedInput = style({
  backgroundColor: blue.toString(),
  border: `1px solid ${blueDark}`,
  $nest: {
    "&:active": {
      backgroundColor: blue.toString(),
      border: `1px solid ${blueDark}`
    },
    "&:focus": {
        outline: "none"
    }
  } 
})

const label = style({
  display: "inline-block",
  fontSize: "15px",
  fontWeight: 700,
  paddingLeft: "10px",
  color: gray5.toString(),
  cursor: "pointer",
  verticalAlign: "middle",
  marginBottom: "-2px",
  userSelect: "none"
})

export { control, input, checkedInput, label}