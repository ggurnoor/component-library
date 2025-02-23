import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Label from "./Label"; // Capital "B"
import {LabelProps } from "./Label.types";

export default {
  title: "Components/Label",
  component: Label,
  argTypes: {
    text: { control: "text" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof Label>;

const Template: StoryFn<LabelProps> = (args: LabelProps) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Label Text",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Disabled Label",
  disabled: true,
};
