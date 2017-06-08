import { uniqueId } from "lodash"
import * as React from "react"
import { classes } from "typestyle"
import * as styles from "./Checkbox.styles" 

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
      <div className={styles.control}>
        <input
          id={this.id}
          className={classes(
            styles.input,
            isChecked && styles.checkedInput
          )}
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <label htmlFor={this.id} className={styles.label}>
          {label}
        </label>
      </div>
    )
  }
}
