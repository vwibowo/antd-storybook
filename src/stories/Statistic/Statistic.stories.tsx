
import type { Meta, StoryObj } from '@storybook/react';
import { Statistic } from 'antd';
import DemoCardComp from "./card";
import DemoUnitComp from "./unit";
import DemoCountdownComp from "./countdown";
import DemoBasicComp from "./basic";

const meta = {
  title: 'Base/Statistic',
  component: Statistic,
} satisfies Meta<typeof Statistic>;

export default meta;
type Story = StoryObj<any>;


export const Demo_card: Story = {
  render: (p:any) => <DemoCardComp {...p} />
};

export const Demo_unit: Story = {
  render: (p:any) => <DemoUnitComp {...p} />
};

export const Demo_countdown: Story = {
  render: (p:any) => <DemoCountdownComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};
