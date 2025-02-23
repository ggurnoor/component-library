import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Img from "./img";
import  { ImgProps } from "./Img.types"

export default {
  title: "Components/Img",
  component: Img,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof Img>;

const Template: StoryFn<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://via.placeholder.com/300",
  alt: "Placeholder Image",
  width: "300px",
  height: "300px",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: "https://via.placeholder.com/300",
  alt: "Placeholder Image",
  width: "300px",
  height: "300px",
  disabled: true,
};
