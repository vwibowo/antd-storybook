
import type { Meta, StoryObj } from '@storybook/react';
import { Spin } from 'antd';
import DemoSizeComp from "./size";
import DemoCustomIndicatorComp from "./custom-indicator";
import DemoNestedComp from "./nested";
import DemoDelayAndDebounceComp from "./delayAndDebounce";
import DemoFullscreenComp from "./fullscreen";
import DemoBasicComp from "./basic";
import DemoPercentComp from "./percent";
import DemoTipComp from "./tip";

const meta = {
  title: 'Base/Spin',
  component: Spin,
} satisfies Meta<typeof Spin>;

export default meta;
type Story = StoryObj<any>;


export const Demo_size: Story = {
  render: (p:any) => <DemoSizeComp {...p} />
};

export const Demo_customIndicator: Story = {
  render: (p:any) => <DemoCustomIndicatorComp {...p} />
};

export const Demo_nested: Story = {
  render: (p:any) => <DemoNestedComp {...p} />
};

export const Demo_delayAndDebounce: Story = {
  render: (p:any) => <DemoDelayAndDebounceComp {...p} />
};

export const Demo_fullscreen: Story = {
  render: (p:any) => <DemoFullscreenComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_percent: Story = {
  render: (p:any) => <DemoPercentComp {...p} />
};

export const Demo_tip: Story = {
  render: (p:any) => <DemoTipComp {...p} />
};
