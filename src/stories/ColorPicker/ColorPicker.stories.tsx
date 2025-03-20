
import type { Meta, StoryObj } from '@storybook/react';
import { ColorPicker } from 'antd';
import DemoAllowClearComp from "./allowClear";
import DemoTextRenderComp from "./text-render";
import DemoSizeComp from "./size";
import DemoControlledComp from "./controlled";
import DemoTriggerEventComp from "./trigger-event";
import DemoTriggerComp from "./trigger";
import DemoBaseComp from "./base";
import DemoDisabledAlphaComp from "./disabled-alpha";
import DemoPresetsComp from "./presets";
import DemoPanelRenderComp from "./panel-render";
import DemoDisabledComp from "./disabled";
import DemoPurePanelComp from "./pure-panel";
import DemoLineGradientComp from "./line-gradient";
import DemoFormatComp from "./format";

const meta = {
  title: 'Base/ColorPicker',
  component: ColorPicker,
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<any>;


export const Demo_allowClear: Story = {
  render: (p:any) => <DemoAllowClearComp {...p} />
};

export const Demo_textRender: Story = {
  render: (p:any) => <DemoTextRenderComp {...p} />
};

export const Demo_size: Story = {
  render: (p:any) => <DemoSizeComp {...p} />
};

export const Demo_controlled: Story = {
  render: (p:any) => <DemoControlledComp {...p} />
};

export const Demo_triggerEvent: Story = {
  render: (p:any) => <DemoTriggerEventComp {...p} />
};

export const Demo_trigger: Story = {
  render: (p:any) => <DemoTriggerComp {...p} />
};

export const Demo_base: Story = {
  render: (p:any) => <DemoBaseComp {...p} />
};

export const Demo_disabledAlpha: Story = {
  render: (p:any) => <DemoDisabledAlphaComp {...p} />
};

export const Demo_presets: Story = {
  render: (p:any) => <DemoPresetsComp {...p} />
};

export const Demo_panelRender: Story = {
  render: (p:any) => <DemoPanelRenderComp {...p} />
};

export const Demo_disabled: Story = {
  render: (p:any) => <DemoDisabledComp {...p} />
};

export const Demo_purePanel: Story = {
  render: (p:any) => <DemoPurePanelComp {...p} />
};

export const Demo_lineGradient: Story = {
  render: (p:any) => <DemoLineGradientComp {...p} />
};

export const Demo_format: Story = {
  render: (p:any) => <DemoFormatComp {...p} />
};
