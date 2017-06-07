import { uniqueId } from "lodash"
import * as React from "react"
import { style, classes } from "typestyle"
import { gray5, gray13, blue, white} from  "./Colors"

const controlClassName = style({
  lineHeight: "28px",
  borderRadius: 3,
  cursor: "pointer",
  $nest: {
    "&:hover": {
      backgroundColor: gray13.toString()
    }
  }
})

const inputClassName = style({
  width: "20px",
  height: "20px",
  border: `1px solid ${gray13.toString()}`,
  backgroundColor: white.toString(),
  borderRadius: "3px",
  display: "inline-block",
  verticalAlign: "middle",
  cursor: "pointer",
  appearance: "none"
})

const checkedInputClassName = style({
  backgroundColor: blue.toString(),
  $nest: {
    "&:active": {
      backgroundColor: blue.toString()
    }
  } 
})

const labelClassName = style({
  display: "inline-block",
  fontSize: "15px",
  fontWeight: 700,
  paddingLeft: "10px",
  verticalAlign: "middle",
  color: gray5.toString(),
  cursor: "pointer",
  marginBottom: 0
})

export interface CheckboxProps {
  label: string
  isChecked: boolean
  onChange: (value: boolean) => void
}

export default class Checkbox extends React.Component<CheckboxProps, {}> {
  id: string
  componentWillMount() {
    this.id = uniqueId("checkbox_")
  }

  render() {
    const { label, isChecked, onChange } = this.props
    return (
      <div className={controlClassName}>
        <input
          id={this.id}
          className={classes(
            inputClassName,
            isChecked && checkedInputClassName
          )}
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <label htmlFor={this.id} className={labelClassName}>
          {label}
        </label>
      </div>
    )
  }
}
