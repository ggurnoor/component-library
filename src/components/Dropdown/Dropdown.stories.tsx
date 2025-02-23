import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Dropdown from "./Dropdown";
import { DropdownProps } from "./Dropdown.types"

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
    options: { control: "object" },
  },
} as Meta<typeof Dropdown>;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Select a country",
  options: ["USA", "Canada", "UK"],
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Select a country",
  options: ["USA", "Canada", "UK"],
  disabled: true,
};