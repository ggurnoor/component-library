import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import RadioButton from "./RadioButton";
import { RadioButtonProps } from "./RadioButton.types"

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
  },
} as Meta<typeof RadioButton>;

const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Option 1",
  name: "group1",
  value: "option1",
  checked: false,
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: "Option 2",
  name: "group1",
  value: "option2",
  checked: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Option 3",
  name: "group1",
  value: "option3",
  checked: false,
  disabled: true,
};
