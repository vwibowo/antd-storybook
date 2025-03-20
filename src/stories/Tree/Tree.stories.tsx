
import type { Meta, StoryObj } from '@storybook/react';
import { Tree } from 'antd';
import DemoBigDataComp from "./big-data";
import DemoBasicControlledComp from "./basic-controlled";
import DemoSearchComp from "./search";
import DemoCustomizedIconComp from "./customized-icon";
import DemoDirectoryComp from "./directory";
import DemoDynamicComp from "./dynamic";
import DemoSwitcherIconComp from "./switcher-icon";
import DemoBasicComp from "./basic";
import DemoBlockNodeComp from "./block-node";
import DemoLineComp from "./line";
import DemoMultipleLineComp from "./multiple-line";
import DemoVirtualScrollComp from "./virtual-scroll";

const meta = {
  title: 'Base/Tree',
  component: Tree,
} satisfies Meta<typeof Tree>;

export default meta;
type Story = StoryObj<any>;


export const Demo_bigData: Story = {
  render: (p:any) => <DemoBigDataComp {...p} />
};

export const Demo_basicControlled: Story = {
  render: (p:any) => <DemoBasicControlledComp {...p} />
};

export const Demo_search: Story = {
  render: (p:any) => <DemoSearchComp {...p} />
};

export const Demo_customizedIcon: Story = {
  render: (p:any) => <DemoCustomizedIconComp {...p} />
};

export const Demo_directory: Story = {
  render: (p:any) => <DemoDirectoryComp {...p} />
};

export const Demo_dynamic: Story = {
  render: (p:any) => <DemoDynamicComp {...p} />
};

export const Demo_switcherIcon: Story = {
  render: (p:any) => <DemoSwitcherIconComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_blockNode: Story = {
  render: (p:any) => <DemoBlockNodeComp {...p} />
};

export const Demo_line: Story = {
  render: (p:any) => <DemoLineComp {...p} />
};

export const Demo_multipleLine: Story = {
  render: (p:any) => <DemoMultipleLineComp {...p} />
};

export const Demo_virtualScroll: Story = {
  render: (p:any) => <DemoVirtualScrollComp {...p} />
};
