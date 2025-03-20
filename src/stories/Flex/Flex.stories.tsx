
import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from 'antd';
import DemoAlignComp from "./align";
import DemoCombinationComp from "./combination";
import DemoWrapComp from "./wrap";
import DemoGapComp from "./gap";
import DemoBasicComp from "./basic";

const meta = {
  title: 'Base/Flex',
  component: Flex,
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<any>;


export const Demo_align: Story = {
  render: (p:any) => <DemoAlignComp {...p} />
};

export const Demo_combination: Story = {
  render: (p:any) => <DemoCombinationComp {...p} />
};

export const Demo_wrap: Story = {
  render: (p:any) => <DemoWrapComp {...p} />
};

export const Demo_gap: Story = {
  render: (p:any) => <DemoGapComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};
