
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from 'antd';
import DemoSizeComp from "./size";
import DemoTitleComp from "./title";
import DemoDotComp from "./dot";
import DemoLinkComp from "./link";
import DemoMixComp from "./mix";
import DemoOverflowComp from "./overflow";
import DemoChangeComp from "./change";
import DemoColorfulComp from "./colorful";
import DemoOffsetComp from "./offset";
import DemoRibbonComp from "./ribbon";
import DemoStatusComp from "./status";
import DemoBasicComp from "./basic";
import DemoNoWrapperComp from "./no-wrapper";

const meta = {
  title: 'Base/Badge',
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<any>;


export const Demo_size: Story = {
  render: (p:any) => <DemoSizeComp {...p} />
};

export const Demo_title: Story = {
  render: (p:any) => <DemoTitleComp {...p} />
};

export const Demo_dot: Story = {
  render: (p:any) => <DemoDotComp {...p} />
};

export const Demo_link: Story = {
  render: (p:any) => <DemoLinkComp {...p} />
};

export const Demo_mix: Story = {
  render: (p:any) => <DemoMixComp {...p} />
};

export const Demo_overflow: Story = {
  render: (p:any) => <DemoOverflowComp {...p} />
};

export const Demo_change: Story = {
  render: (p:any) => <DemoChangeComp {...p} />
};

export const Demo_colorful: Story = {
  render: (p:any) => <DemoColorfulComp {...p} />
};

export const Demo_offset: Story = {
  render: (p:any) => <DemoOffsetComp {...p} />
};

export const Demo_ribbon: Story = {
  render: (p:any) => <DemoRibbonComp {...p} />
};

export const Demo_status: Story = {
  render: (p:any) => <DemoStatusComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_noWrapper: Story = {
  render: (p:any) => <DemoNoWrapperComp {...p} />
};
