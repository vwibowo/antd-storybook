
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from 'antd';
import DemoInnerComp from "./inner";
import DemoFlexibleContentComp from "./flexible-content";
import DemoTabsComp from "./tabs";
import DemoInColumnComp from "./in-column";
import DemoMetaComp from "./meta";
import DemoSimpleComp from "./simple";
import DemoLoadingComp from "./loading";
import DemoBasicComp from "./basic";
import DemoBorderLessComp from "./border-less";
import DemoGridCardComp from "./grid-card";

const meta = {
  title: 'Base/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<any>;


export const Demo_inner: Story = {
  render: (p:any) => <DemoInnerComp {...p} />
};

export const Demo_flexibleContent: Story = {
  render: (p:any) => <DemoFlexibleContentComp {...p} />
};

export const Demo_tabs: Story = {
  render: (p:any) => <DemoTabsComp {...p} />
};

export const Demo_inColumn: Story = {
  render: (p:any) => <DemoInColumnComp {...p} />
};

export const Demo_meta: Story = {
  render: (p:any) => <DemoMetaComp {...p} />
};

export const Demo_simple: Story = {
  render: (p:any) => <DemoSimpleComp {...p} />
};

export const Demo_loading: Story = {
  render: (p:any) => <DemoLoadingComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_borderLess: Story = {
  render: (p:any) => <DemoBorderLessComp {...p} />
};

export const Demo_gridCard: Story = {
  render: (p:any) => <DemoGridCardComp {...p} />
};
