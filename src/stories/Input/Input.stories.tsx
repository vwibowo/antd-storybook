
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from 'antd';
import DemoGroupComp from "./group";
import DemoAllowClearComp from "./allowClear";
import DemoSizeComp from "./size";
import DemoSearchInputComp from "./search-input";
import DemoFocusComp from "./focus";
import DemoAutosizeTextareaComp from "./autosize-textarea";
import DemoAddonComp from "./addon";
import DemoPresuffixComp from "./presuffix";
import DemoShowCountComp from "./show-count";
import DemoTextareaResizeComp from "./textarea-resize";
import DemoVariantComp from "./variant";
import DemoAdvanceCountComp from "./advance-count";
import DemoTooltipComp from "./tooltip";
import DemoOtpComp from "./otp";
import DemoAlignComp from "./align";
import DemoPasswordInputComp from "./password-input";
import DemoCompactStyleComp from "./compact-style";
import DemoSearchInputLoadingComp from "./search-input-loading";
import DemoStatusComp from "./status";
import DemoBasicComp from "./basic";
import DemoTextareaComp from "./textarea";

const meta = {
  title: 'Base/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<any>;


export const Demo_group: Story = {
  render: (p:any) => <DemoGroupComp {...p} />
};

export const Demo_allowClear: Story = {
  render: (p:any) => <DemoAllowClearComp {...p} />
};

export const Demo_size: Story = {
  render: (p:any) => <DemoSizeComp {...p} />
};

export const Demo_searchInput: Story = {
  render: (p:any) => <DemoSearchInputComp {...p} />
};

export const Demo_focus: Story = {
  render: (p:any) => <DemoFocusComp {...p} />
};

export const Demo_autosizeTextarea: Story = {
  render: (p:any) => <DemoAutosizeTextareaComp {...p} />
};

export const Demo_addon: Story = {
  render: (p:any) => <DemoAddonComp {...p} />
};

export const Demo_presuffix: Story = {
  render: (p:any) => <DemoPresuffixComp {...p} />
};

export const Demo_showCount: Story = {
  render: (p:any) => <DemoShowCountComp {...p} />
};

export const Demo_textareaResize: Story = {
  render: (p:any) => <DemoTextareaResizeComp {...p} />
};

export const Demo_variant: Story = {
  render: (p:any) => <DemoVariantComp {...p} />
};

export const Demo_advanceCount: Story = {
  render: (p:any) => <DemoAdvanceCountComp {...p} />
};

export const Demo_tooltip: Story = {
  render: (p:any) => <DemoTooltipComp {...p} />
};

export const Demo_otp: Story = {
  render: (p:any) => <DemoOtpComp {...p} />
};

export const Demo_align: Story = {
  render: (p:any) => <DemoAlignComp {...p} />
};

export const Demo_passwordInput: Story = {
  render: (p:any) => <DemoPasswordInputComp {...p} />
};

export const Demo_compactStyle: Story = {
  render: (p:any) => <DemoCompactStyleComp {...p} />
};

export const Demo_searchInputLoading: Story = {
  render: (p:any) => <DemoSearchInputLoadingComp {...p} />
};

export const Demo_status: Story = {
  render: (p:any) => <DemoStatusComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_textarea: Story = {
  render: (p:any) => <DemoTextareaComp {...p} />
};
