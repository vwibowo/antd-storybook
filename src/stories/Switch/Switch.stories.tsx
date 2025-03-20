
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from 'antd';
import DemoSizeComp from "./size";
import DemoDisabledComp from "./disabled";
import DemoLoadingComp from "./loading";
import DemoBasicComp from "./basic";
import DemoTextComp from "./text";

const meta = {
  title: 'Base/Switch',
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<any>;


export const Demo_size: Story = {
  render: (p:any) => <DemoSizeComp {...p} />
};

export const Demo_disabled: Story = {
  render: (p:any) => <DemoDisabledComp {...p} />
};

export const Demo_loading: Story = {
  render: (p:any) => <DemoLoadingComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_text: Story = {
  render: (p:any) => <DemoTextComp {...p} />
};
