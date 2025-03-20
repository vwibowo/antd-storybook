
import type { Meta, StoryObj } from '@storybook/react';
import { Popconfirm } from 'antd';
import DemoPromiseComp from "./promise";
import DemoIconComp from "./icon";
import DemoShiftComp from "./shift";
import DemoAsyncComp from "./async";
import DemoWireframeComp from "./wireframe";
import DemoDynamicTriggerComp from "./dynamic-trigger";
import DemoRenderPanelComp from "./render-panel";
import DemoPlacementComp from "./placement";
import DemoBasicComp from "./basic";
import DemoLocaleComp from "./locale";

const meta = {
  title: 'Base/Popconfirm',
  component: Popconfirm,
} satisfies Meta<typeof Popconfirm>;

export default meta;
type Story = StoryObj<any>;


export const Demo_promise: Story = {
  render: (p:any) => <DemoPromiseComp {...p} />
};

export const Demo_icon: Story = {
  render: (p:any) => <DemoIconComp {...p} />
};

export const Demo_shift: Story = {
  render: (p:any) => <DemoShiftComp {...p} />
};

export const Demo_async: Story = {
  render: (p:any) => <DemoAsyncComp {...p} />
};

export const Demo_wireframe: Story = {
  render: (p:any) => <DemoWireframeComp {...p} />
};

export const Demo_dynamicTrigger: Story = {
  render: (p:any) => <DemoDynamicTriggerComp {...p} />
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <DemoRenderPanelComp {...p} />
};

export const Demo_placement: Story = {
  render: (p:any) => <DemoPlacementComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_locale: Story = {
  render: (p:any) => <DemoLocaleComp {...p} />
};
