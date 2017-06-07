import * as React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import Checkbox from "../components/Checkbox"
const { action } = require('@storybook/addon-actions');
import { style } from "typestyle"

const defaultStyles = style({
  fontFamily: "Helvetica"
})

addDecorator((story) => (
  <div className={defaultStyles}>
    {story()}
  </div>
))

storiesOf('Checkbox', module)
  .add('checked with text', () => (
    <Checkbox isChecked={true} label="Hello" onChange={action('clicked')}></Checkbox>
  ))
  .add('unchecked with text', () => (
    <Checkbox isChecked={false} label="Hello" onChange={action('clicked')}></Checkbox>
  ));