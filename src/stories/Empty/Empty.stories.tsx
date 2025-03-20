
import type { Meta, StoryObj } from '@storybook/react';
import { Empty } from 'antd';
import DemoConfigProviderComp from "./config-provider";
import DemoCustomizeComp from "./customize";
import DemoDescriptionComp from "./description";
import DemoSimpleComp from "./simple";
import DemoBasicComp from "./basic";

const meta = {
  title: 'Base/Empty',
  component: Empty,
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<any>;


export const Demo_configProvider: Story = {
  render: (p:any) => <DemoConfigProviderComp {...p} />
};

export const Demo_customize: Story = {
  render: (p:any) => <DemoCustomizeComp {...p} />
};

export const Demo_description: Story = {
  render: (p:any) => <DemoDescriptionComp {...p} />
};

export const Demo_simple: Story = {
  render: (p:any) => <DemoSimpleComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};
