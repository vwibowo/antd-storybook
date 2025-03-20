
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from 'antd';
import DemoGroupComp from "./group";
import DemoTypeComp from "./type";
import DemoDynamicComp from "./dynamic";
import DemoBadgeComp from "./badge";
import DemoBasicComp from "./basic";
import DemoFallbackComp from "./fallback";
import DemoResponsiveComp from "./responsive";

const meta = {
  title: 'Base/Avatar',
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<any>;


export const Demo_group: Story = {
  render: (p:any) => <DemoGroupComp {...p} />
};

export const Demo_type: Story = {
  render: (p:any) => <DemoTypeComp {...p} />
};

export const Demo_dynamic: Story = {
  render: (p:any) => <DemoDynamicComp {...p} />
};

export const Demo_badge: Story = {
  render: (p:any) => <DemoBadgeComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_fallback: Story = {
  render: (p:any) => <DemoFallbackComp {...p} />
};

export const Demo_responsive: Story = {
  render: (p:any) => <DemoResponsiveComp {...p} />
};
