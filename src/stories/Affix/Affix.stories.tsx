
import type { Meta, StoryObj } from '@storybook/react';
import { Affix } from 'antd';
import DemoTargetComp from "./target";
import DemoBasicComp from "./basic";
import DemoOnChangeComp from "./on-change";

const meta = {
  title: 'Base/Affix',
  component: Affix,
} satisfies Meta<typeof Affix>;

export default meta;
type Story = StoryObj<any>;


export const Demo_target: Story = {
  render: (p:any) => <DemoTargetComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_onChange: Story = {
  render: (p:any) => <DemoOnChangeComp {...p} />
};
