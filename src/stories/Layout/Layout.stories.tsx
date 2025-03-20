
import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from 'antd';
import DemoCustomTriggerComp from "./custom-trigger";
import DemoTopSide2Comp from "./top-side-2";
import DemoSideComp from "./side";
import DemoTopSideComp from "./top-side";
import DemoTopComp from "./top";
import DemoFixedSiderComp from "./fixed-sider";
import DemoBasicComp from "./basic";
import DemoFixedComp from "./fixed";
import DemoResponsiveComp from "./responsive";

const meta = {
  title: 'Base/Layout',
  component: Layout,
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<any>;


export const Demo_customTrigger: Story = {
  render: (p:any) => <DemoCustomTriggerComp {...p} />
};

export const Demo_topSide2: Story = {
  render: (p:any) => <DemoTopSide2Comp {...p} />
};

export const Demo_side: Story = {
  render: (p:any) => <DemoSideComp {...p} />
};

export const Demo_topSide: Story = {
  render: (p:any) => <DemoTopSideComp {...p} />
};

export const Demo_top: Story = {
  render: (p:any) => <DemoTopComp {...p} />
};

export const Demo_fixedSider: Story = {
  render: (p:any) => <DemoFixedSiderComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_fixed: Story = {
  render: (p:any) => <DemoFixedComp {...p} />
};

export const Demo_responsive: Story = {
  render: (p:any) => <DemoResponsiveComp {...p} />
};
