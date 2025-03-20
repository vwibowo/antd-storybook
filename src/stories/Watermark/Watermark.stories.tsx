
import type { Meta, StoryObj } from '@storybook/react';
import { Watermark } from 'antd';
import DemoCustomComp from "./custom";
import DemoMultiLineComp from "./multi-line";
import DemoPortalComp from "./portal";
import DemoBasicComp from "./basic";
import DemoImageComp from "./image";

const meta = {
  title: 'Base/Watermark',
  component: Watermark,
} satisfies Meta<typeof Watermark>;

export default meta;
type Story = StoryObj<any>;


export const Demo_custom: Story = {
  render: (p:any) => <DemoCustomComp {...p} />
};

export const Demo_multiLine: Story = {
  render: (p:any) => <DemoMultiLineComp {...p} />
};

export const Demo_portal: Story = {
  render: (p:any) => <DemoPortalComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_image: Story = {
  render: (p:any) => <DemoImageComp {...p} />
};
