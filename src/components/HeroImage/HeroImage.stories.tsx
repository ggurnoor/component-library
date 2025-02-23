import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import HeroImage from "./HeroImage";
import { HeroImageProps } from "./HeroImage.types"

export default {
  title: "Components/HeroImage",
  component: HeroImage,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    height: { control: "text" },
    overlayText: { control: "text" },
    overlayColor: { control: "color" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof HeroImage>;

const Template: StoryFn<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://via.placeholder.com/1500x500",
  alt: "Hero Image",
  height: "500px",
  overlayText: "Welcome to My Website!",
  overlayColor: "rgba(0, 0, 0, 0.5)",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: "https://via.placeholder.com/1500x500",
  alt: "Hero Image",
  height: "500px",
  overlayText: "Welcome to My Website!",
  overlayColor: "rgba(0, 0, 0, 0.5)",
  disabled: true,
};
