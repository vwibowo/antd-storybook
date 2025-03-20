
import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from 'antd';
import DemoElementComp from "./element";
import DemoChildrenComp from "./children";
import DemoListComp from "./list";
import DemoComplexComp from "./complex";
import DemoComponentTokenComp from "./componentToken";
import DemoBasicComp from "./basic";
import DemoActiveComp from "./active";

const meta = {
  title: 'Base/Skeleton',
  component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<any>;


export const Demo_element: Story = {
  render: (p:any) => <DemoElementComp {...p} />
};

export const Demo_children: Story = {
  render: (p:any) => <DemoChildrenComp {...p} />
};

export const Demo_list: Story = {
  render: (p:any) => <DemoListComp {...p} />
};

export const Demo_complex: Story = {
  render: (p:any) => <DemoComplexComp {...p} />
};

export const Demo_componentToken: Story = {
  render: (p:any) => <DemoComponentTokenComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_active: Story = {
  render: (p:any) => <DemoActiveComp {...p} />
};
