
import type { Meta, StoryObj } from '@storybook/react';
import { InputNumber } from 'antd';
import DemoSizeComp from "./size";
import DemoKeyboardComp from "./keyboard";
import DemoAddonComp from "./addon";
import DemoPresuffixComp from "./presuffix";
import DemoFormatterComp from "./formatter";
import DemoVariantComp from "./variant";
import DemoRenderPanelComp from "./render-panel";
import DemoDisabledComp from "./disabled";
import DemoChangeOnWheelComp from "./change-on-wheel";
import DemoDigitComp from "./digit";
import DemoStatusComp from "./status";
import DemoBasicComp from "./basic";
import DemoControlsComp from "./controls";
import DemoOutOfRangeComp from "./out-of-range";

const meta = {
  title: 'Base/InputNumber',
  component: InputNumber,
} satisfies Meta<typeof InputNumber>;

export default meta;
type Story = StoryObj<any>;


export const Demo_size: Story = {
  render: (p:any) => <DemoSizeComp {...p} />
};

export const Demo_keyboard: Story = {
  render: (p:any) => <DemoKeyboardComp {...p} />
};

export const Demo_addon: Story = {
  render: (p:any) => <DemoAddonComp {...p} />
};

export const Demo_presuffix: Story = {
  render: (p:any) => <DemoPresuffixComp {...p} />
};

export const Demo_formatter: Story = {
  render: (p:any) => <DemoFormatterComp {...p} />
};

export const Demo_variant: Story = {
  render: (p:any) => <DemoVariantComp {...p} />
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <DemoRenderPanelComp {...p} />
};

export const Demo_disabled: Story = {
  render: (p:any) => <DemoDisabledComp {...p} />
};

export const Demo_changeOnWheel: Story = {
  render: (p:any) => <DemoChangeOnWheelComp {...p} />
};

export const Demo_digit: Story = {
  render: (p:any) => <DemoDigitComp {...p} />
};

export const Demo_status: Story = {
  render: (p:any) => <DemoStatusComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_controls: Story = {
  render: (p:any) => <DemoControlsComp {...p} />
};

export const Demo_outOfRange: Story = {
  render: (p:any) => <DemoOutOfRangeComp {...p} />
};
