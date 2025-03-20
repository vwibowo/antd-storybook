
import type { Meta, StoryObj } from '@storybook/react';
import { Mentions } from 'antd';
import DemoAllowClearComp from "./allowClear";
import DemoAutoSizeComp from "./autoSize";
import DemoPrefixComp from "./prefix";
import DemoVariantComp from "./variant";
import DemoAsyncComp from "./async";
import DemoReadonlyComp from "./readonly";
import DemoRenderPanelComp from "./render-panel";
import DemoPlacementComp from "./placement";
import DemoStatusComp from "./status";
import DemoBasicComp from "./basic";
import DemoFormComp from "./form";

const meta = {
  title: 'Base/Mentions',
  component: Mentions,
} satisfies Meta<typeof Mentions>;

export default meta;
type Story = StoryObj<any>;


export const Demo_allowClear: Story = {
  render: (p:any) => <DemoAllowClearComp {...p} />
};

export const Demo_autoSize: Story = {
  render: (p:any) => <DemoAutoSizeComp {...p} />
};

export const Demo_prefix: Story = {
  render: (p:any) => <DemoPrefixComp {...p} />
};

export const Demo_variant: Story = {
  render: (p:any) => <DemoVariantComp {...p} />
};

export const Demo_async: Story = {
  render: (p:any) => <DemoAsyncComp {...p} />
};

export const Demo_readonly: Story = {
  render: (p:any) => <DemoReadonlyComp {...p} />
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <DemoRenderPanelComp {...p} />
};

export const Demo_placement: Story = {
  render: (p:any) => <DemoPlacementComp {...p} />
};

export const Demo_status: Story = {
  render: (p:any) => <DemoStatusComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_form: Story = {
  render: (p:any) => <DemoFormComp {...p} />
};
