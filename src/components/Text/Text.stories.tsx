import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Text from "./Text";
import { TextProps } from "./Text.types";


export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    content: { control: "text" },
    size: { control: { type: "radio", options: ["small", "medium", "large"] } },
    color: { control: "color" },
  },
} as Meta<typeof Text>;

const Template: StoryFn<TextProps> = (args: TextProps) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "This is a sample text",
  size: "medium",
  color: "#333",
};

export const Large = Template.bind({});
Large.args = {
  content: "This is large text",
  size: "large",
  color: "#000",
};

export const Small = Template.bind({});
Small.args = {
  content: "This is small text",
  size: "small",
  color: "#666",
};
