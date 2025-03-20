
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from 'antd';
import DemoSizeComp from "./size";
import DemoModeComp from "./mode";
import DemoTimeComp from "./time";
import DemoAllowEmptyComp from "./allow-empty";
import DemoDisabledDateComp from "./disabled-date";
import DemoBuddhistEraComp from "./buddhist-era";
import DemoVariantComp from "./variant";
import DemoStartEndComp from "./start-end";
import DemoRenderPanelComp from "./render-panel";
import DemoPlacementComp from "./placement";
import DemoDateRangeComp from "./date-range";
import DemoSwitchableComp from "./switchable";
import DemoMultipleComp from "./multiple";
import DemoDisabledComp from "./disabled";
import DemoComponentsComp from "./components";
import DemoStatusComp from "./status";
import DemoSuffixComp from "./suffix";
import DemoBasicComp from "./basic";
import DemoMaskComp from "./mask";
import DemoCellRenderComp from "./cell-render";
import DemoSelectInRangeComp from "./select-in-range";
import DemoFormatComp from "./format";
import DemoExtraFooterComp from "./extra-footer";
import DemoRangePickerComp from "./range-picker";
import DemoNeedConfirmComp from "./needConfirm";
import DemoPresetRangesComp from "./preset-ranges";

const meta = {
  title: 'Base/DatePicker',
  component: DatePicker,
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<any>;


export const Demo_size: Story = {
  render: (p:any) => <DemoSizeComp {...p} />
};

export const Demo_mode: Story = {
  render: (p:any) => <DemoModeComp {...p} />
};

export const Demo_time: Story = {
  render: (p:any) => <DemoTimeComp {...p} />
};

export const Demo_allowEmpty: Story = {
  render: (p:any) => <DemoAllowEmptyComp {...p} />
};

export const Demo_disabledDate: Story = {
  render: (p:any) => <DemoDisabledDateComp {...p} />
};

export const Demo_buddhistEra: Story = {
  render: (p:any) => <DemoBuddhistEraComp {...p} />
};

export const Demo_variant: Story = {
  render: (p:any) => <DemoVariantComp {...p} />
};

export const Demo_startEnd: Story = {
  render: (p:any) => <DemoStartEndComp {...p} />
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <DemoRenderPanelComp {...p} />
};

export const Demo_placement: Story = {
  render: (p:any) => <DemoPlacementComp {...p} />
};

export const Demo_dateRange: Story = {
  render: (p:any) => <DemoDateRangeComp {...p} />
};

export const Demo_switchable: Story = {
  render: (p:any) => <DemoSwitchableComp {...p} />
};

export const Demo_multiple: Story = {
  render: (p:any) => <DemoMultipleComp {...p} />
};

export const Demo_disabled: Story = {
  render: (p:any) => <DemoDisabledComp {...p} />
};

export const Demo_components: Story = {
  render: (p:any) => <DemoComponentsComp {...p} />
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

export const Demo_mask: Story = {
  render: (p:any) => <DemoMaskComp {...p} />
};

export const Demo_cellRender: Story = {
  render: (p:any) => <DemoCellRenderComp {...p} />
};

export const Demo_selectInRange: Story = {
  render: (p:any) => <DemoSelectInRangeComp {...p} />
};

export const Demo_format: Story = {
  render: (p:any) => <DemoFormatComp {...p} />
};

export const Demo_extraFooter: Story = {
  render: (p:any) => <DemoExtraFooterComp {...p} />
};

export const Demo_rangePicker: Story = {
  render: (p:any) => <DemoRangePickerComp {...p} />
};

export const Demo_needConfirm: Story = {
  render: (p:any) => <DemoNeedConfirmComp {...p} />
};

export const Demo_presetRanges: Story = {
  render: (p:any) => <DemoPresetRangesComp {...p} />
};
