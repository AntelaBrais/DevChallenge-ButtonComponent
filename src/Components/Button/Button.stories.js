import React from "react"

import Button from "./Button"

export default {
  title: "Components/Button",
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  color: "default",
  disabled: false,
  disabledShadow: false,
  size: "md",
}

export const Small = Template.bind({})
Small.args = {
  ...Default.args,
  size: "sm",
}

export const Large = Template.bind({})
Large.args = {
  ...Default.args,
  size: "lg",
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Default.args,
  color: "secondary",
}

export const Danger = Template.bind({})
Danger.args = {
  ...Default.args,
  color: "danger",
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Default.args,
  disabled: true,
}

export const DisabledShadow = Template.bind({})
DisabledShadow.args = {
  ...Default.args,
  disabledShadow: true,
}

export const Outline = Template.bind({})
Outline.args = {
  ...Default.args,
  variant: "outline",
}

export const Text = Template.bind({})
Text.args = {
  ...Default.args,
  variant: "text",
}
