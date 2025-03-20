
import type { Meta, StoryObj } from '@storybook/react';
import { List } from 'antd';
import DemoPaginationComp from "./pagination";
import DemoLoadmoreComp from "./loadmore";
import DemoGridComp from "./grid";
import DemoVerticalComp from "./vertical";
import DemoGridTestComp from "./grid-test";
import DemoSimpleComp from "./simple";
import DemoBasicComp from "./basic";
import DemoResponsiveComp from "./responsive";

const meta = {
  title: 'Base/List',
  component: List,
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<any>;


export const Demo_pagination: Story = {
  render: (p:any) => <DemoPaginationComp {...p} />
};

export const Demo_loadmore: Story = {
  render: (p:any) => <DemoLoadmoreComp {...p} />
};

export const Demo_grid: Story = {
  render: (p:any) => <DemoGridComp {...p} />
};

export const Demo_vertical: Story = {
  render: (p:any) => <DemoVerticalComp {...p} />
};

export const Demo_gridTest: Story = {
  render: (p:any) => <DemoGridTestComp {...p} />
};

export const Demo_simple: Story = {
  render: (p:any) => <DemoSimpleComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_responsive: Story = {
  render: (p:any) => <DemoResponsiveComp {...p} />
};
