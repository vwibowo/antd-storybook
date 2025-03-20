
import type { Meta, StoryObj } from '@storybook/react';
import { App } from 'antd';
import DemoConfigComp from "./config";
import DemoBasicComp from "./basic";

const meta = {
  title: 'Base/App',
  component: App,
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<any>;


export const Demo_config: Story = {
  render: (p:any) => <DemoConfigComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};
