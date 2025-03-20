
import type { Meta, StoryObj } from '@storybook/react';
import { Collapse } from 'antd';
import DemoCustomComp from "./custom";
import DemoSizeComp from "./size";
import DemoMixComp from "./mix";
import DemoGhostComp from "./ghost";
import DemoNoarrowComp from "./noarrow";
import DemoBorderlessComp from "./borderless";
import DemoAccordionComp from "./accordion";
import DemoExtraComp from "./extra";
import DemoBasicComp from "./basic";
import DemoCollapsibleComp from "./collapsible";

const meta = {
  title: 'Base/Collapse',
  component: Collapse,
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<any>;


export const Demo_custom: Story = {
  render: (p:any) => <DemoCustomComp {...p} />
};

export const Demo_size: Story = {
  render: (p:any) => <DemoSizeComp {...p} />
};

export const Demo_mix: Story = {
  render: (p:any) => <DemoMixComp {...p} />
};

export const Demo_ghost: Story = {
  render: (p:any) => <DemoGhostComp {...p} />
};

export const Demo_noarrow: Story = {
  render: (p:any) => <DemoNoarrowComp {...p} />
};

export const Demo_borderless: Story = {
  render: (p:any) => <DemoBorderlessComp {...p} />
};

export const Demo_accordion: Story = {
  render: (p:any) => <DemoAccordionComp {...p} />
};

export const Demo_extra: Story = {
  render: (p:any) => <DemoExtraComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_collapsible: Story = {
  render: (p:any) => <DemoCollapsibleComp {...p} />
};
