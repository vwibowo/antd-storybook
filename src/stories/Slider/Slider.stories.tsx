
import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from 'antd';
import DemoEditableComp from "./editable";
import DemoTipFormatterComp from "./tip-formatter";
import DemoShowTooltipComp from "./show-tooltip";
import DemoEventComp from "./event";
import DemoVerticalComp from "./vertical";
import DemoIconSliderComp from "./icon-slider";
import DemoReverseComp from "./reverse";
import DemoMultipleComp from "./multiple";
import DemoBasicComp from "./basic";
import DemoInputNumberComp from "./input-number";
import DemoMarkComp from "./mark";

const meta = {
  title: 'Base/Slider',
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<any>;


export const Demo_editable: Story = {
  render: (p:any) => <DemoEditableComp {...p} />
};

export const Demo_tipFormatter: Story = {
  render: (p:any) => <DemoTipFormatterComp {...p} />
};

export const Demo_showTooltip: Story = {
  render: (p:any) => <DemoShowTooltipComp {...p} />
};

export const Demo_event: Story = {
  render: (p:any) => <DemoEventComp {...p} />
};

export const Demo_vertical: Story = {
  render: (p:any) => <DemoVerticalComp {...p} />
};

export const Demo_iconSlider: Story = {
  render: (p:any) => <DemoIconSliderComp {...p} />
};

export const Demo_reverse: Story = {
  render: (p:any) => <DemoReverseComp {...p} />
};

export const Demo_multiple: Story = {
  render: (p:any) => <DemoMultipleComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_inputNumber: Story = {
  render: (p:any) => <DemoInputNumberComp {...p} />
};

export const Demo_mark: Story = {
  render: (p:any) => <DemoMarkComp {...p} />
};
