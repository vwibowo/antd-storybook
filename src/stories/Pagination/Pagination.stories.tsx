
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from 'antd';
import DemoJumpComp from "./jump";
import DemoControlledComp from "./controlled";
import DemoAllComp from "./all";
import DemoWireframeComp from "./wireframe";
import DemoAlignComp from "./align";
import DemoMiniComp from "./mini";
import DemoSimpleComp from "./simple";
import DemoTotalComp from "./total";
import DemoBasicComp from "./basic";
import DemoChangerComp from "./changer";
import DemoItemRenderComp from "./itemRender";
import DemoMoreComp from "./more";

const meta = {
  title: 'Base/Pagination',
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<any>;


export const Demo_jump: Story = {
  render: (p:any) => <DemoJumpComp {...p} />
};

export const Demo_controlled: Story = {
  render: (p:any) => <DemoControlledComp {...p} />
};

export const Demo_all: Story = {
  render: (p:any) => <DemoAllComp {...p} />
};

export const Demo_wireframe: Story = {
  render: (p:any) => <DemoWireframeComp {...p} />
};

export const Demo_align: Story = {
  render: (p:any) => <DemoAlignComp {...p} />
};

export const Demo_mini: Story = {
  render: (p:any) => <DemoMiniComp {...p} />
};

export const Demo_simple: Story = {
  render: (p:any) => <DemoSimpleComp {...p} />
};

export const Demo_total: Story = {
  render: (p:any) => <DemoTotalComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_changer: Story = {
  render: (p:any) => <DemoChangerComp {...p} />
};

export const Demo_itemRender: Story = {
  render: (p:any) => <DemoItemRenderComp {...p} />
};

export const Demo_more: Story = {
  render: (p:any) => <DemoMoreComp {...p} />
};
