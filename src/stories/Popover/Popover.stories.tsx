
import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from 'antd';
import DemoShiftComp from "./shift";
import DemoArrowComp from "./arrow";
import DemoArrowPointAtCenterComp from "./arrow-point-at-center";
import DemoHoverWithClickComp from "./hover-with-click";
import DemoTriggerTypeComp from "./triggerType";
import DemoControlComp from "./control";
import DemoWireframeComp from "./wireframe";
import DemoRenderPanelComp from "./render-panel";
import DemoPlacementComp from "./placement";
import DemoBasicComp from "./basic";

const meta = {
  title: 'Base/Popover',
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<any>;


export const Demo_shift: Story = {
  render: (p:any) => <DemoShiftComp {...p} />
};

export const Demo_arrow: Story = {
  render: (p:any) => <DemoArrowComp {...p} />
};

export const Demo_arrowPointAtCenter: Story = {
  render: (p:any) => <DemoArrowPointAtCenterComp {...p} />
};

export const Demo_hoverWithClick: Story = {
  render: (p:any) => <DemoHoverWithClickComp {...p} />
};

export const Demo_triggerType: Story = {
  render: (p:any) => <DemoTriggerTypeComp {...p} />
};

export const Demo_control: Story = {
  render: (p:any) => <DemoControlComp {...p} />
};

export const Demo_wireframe: Story = {
  render: (p:any) => <DemoWireframeComp {...p} />
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
