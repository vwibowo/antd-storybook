
import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from 'antd';
import DemoCustomComp from "./custom";
import DemoAlternateComp from "./alternate";
import DemoLabelComp from "./label";
import DemoWireframeComp from "./wireframe";
import DemoColorComp from "./color";
import DemoBasicComp from "./basic";
import DemoPendingComp from "./pending";
import DemoRightComp from "./right";

const meta = {
  title: 'Base/Timeline',
  component: Timeline,
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<any>;


export const Demo_custom: Story = {
  render: (p:any) => <DemoCustomComp {...p} />
};

export const Demo_alternate: Story = {
  render: (p:any) => <DemoAlternateComp {...p} />
};

export const Demo_label: Story = {
  render: (p:any) => <DemoLabelComp {...p} />
};

export const Demo_wireframe: Story = {
  render: (p:any) => <DemoWireframeComp {...p} />
};

export const Demo_color: Story = {
  render: (p:any) => <DemoColorComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_pending: Story = {
  render: (p:any) => <DemoPendingComp {...p} />
};

export const Demo_right: Story = {
  render: (p:any) => <DemoRightComp {...p} />
};
