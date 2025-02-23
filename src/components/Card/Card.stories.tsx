import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Card from "./Card";
import { CardProps } from "./Card.types"
export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    image: { control: "text" },
    footer: { control: "text" },
    onClick: { action: "clicked" },
  },
} as Meta<typeof Card>;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Card Title",
  content: "This is the content of the card.",
  image: "https://via.placeholder.com/300x200",
  footer: "Card Footer",
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  title: "Card Title",
  content: "This is the content of the card without an image.",
  footer: "Card Footer",
};
