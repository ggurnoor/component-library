import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Table from "./Table";
import { TableProps } from "./Table.types";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {},
} as Meta<typeof Table>;

const Template: StoryFn<TableProps> = (args: TableProps) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  headers: ["Name", "Age", "Country"],
  data: [
    ["John Doe", "25", "USA"],
    ["Jane Smith", "30", "Canada"],
    ["Alice Brown", "28", "UK"],
  ],
  footer: "End of Table",
};
