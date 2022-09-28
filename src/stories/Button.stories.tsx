import React, { ReactEventHandler } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from "../index"
import { ButtonProps } from '../components/Button/Button'

export default {
  title: "react-uswds/Button",
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({})
Default.args = {
  label: "Default Button"
}

export const WithAction = Template.bind({})
WithAction.args = {
  label: "With Action",
  onClick: (e: ReactEventHandler<HTMLButtonElement>) => alert("Clicked!")
}