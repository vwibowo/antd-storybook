
import type { Meta, StoryObj } from '@storybook/react';
import { BackTop } from 'antd';
import DemoCustomComp from "./custom";
import DemoBasicComp from "./basic";

const meta = {
  title: 'Base/BackTop',
  component: BackTop,
} satisfies Meta<typeof BackTop>;

export default meta;
type Story = StoryObj<any>;


export const Demo_custom: Story = {
  render: (p:any) => <DemoCustomComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};
