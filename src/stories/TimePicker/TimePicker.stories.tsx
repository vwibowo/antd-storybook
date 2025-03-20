
import type { Meta, StoryObj } from '@storybook/react';
import { TimePicker } from 'antd';
import DemoSizeComp from "./size";
import DemoColoredPopupComp from "./colored-popup";
import DemoChangeOnScrollComp from "./change-on-scroll";
import DemoHideColumnComp from "./hide-column";
import Demo12HoursComp from "./12hours";
import DemoAddonComp from "./addon";
import DemoNeedConfirmComp from "./need-confirm";
import DemoValueComp from "./value";
import DemoVariantComp from "./variant";
import DemoIntervalOptionsComp from "./interval-options";
import DemoRenderPanelComp from "./render-panel";
import DemoDisabledComp from "./disabled";
import DemoStatusComp from "./status";
import DemoSuffixComp from "./suffix";
import DemoBasicComp from "./basic";
import DemoRangePickerComp from "./range-picker";

const meta = {
  title: 'Base/TimePicker',
  component: TimePicker,
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<any>;


export const Demo_size: Story = {
  render: (p:any) => <DemoSizeComp {...p} />
};

export const Demo_coloredPopup: Story = {
  render: (p:any) => <DemoColoredPopupComp {...p} />
};

export const Demo_changeOnScroll: Story = {
  render: (p:any) => <DemoChangeOnScrollComp {...p} />
};

export const Demo_hideColumn: Story = {
  render: (p:any) => <DemoHideColumnComp {...p} />
};

export const Demo_12Hours: Story = {
  render: (p:any) => <Demo12HoursComp {...p} />
};

export const Demo_addon: Story = {
  render: (p:any) => <DemoAddonComp {...p} />
};

export const Demo_needConfirm: Story = {
  render: (p:any) => <DemoNeedConfirmComp {...p} />
};

export const Demo_value: Story = {
  render: (p:any) => <DemoValueComp {...p} />
};

export const Demo_variant: Story = {
  render: (p:any) => <DemoVariantComp {...p} />
};

export const Demo_intervalOptions: Story = {
  render: (p:any) => <DemoIntervalOptionsComp {...p} />
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <DemoRenderPanelComp {...p} />
};

export const Demo_disabled: Story = {
  render: (p:any) => <DemoDisabledComp {...p} />
};

export const Demo_status: Story = {
  render: (p:any) => <DemoStatusComp {...p} />
};

export const Demo_suffix: Story = {
  render: (p:any) => <DemoSuffixComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_rangePicker: Story = {
  render: (p:any) => <DemoRangePickerComp {...p} />
};
