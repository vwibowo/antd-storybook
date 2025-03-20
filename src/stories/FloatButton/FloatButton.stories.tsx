
import type { Meta, StoryObj } from '@storybook/react';
import { FloatButton } from 'antd';
import DemoGroupComp from "./group";
import DemoTypeComp from "./type";
import DemoControlledComp from "./controlled";
import DemoShapeComp from "./shape";
import DemoTooltipComp from "./tooltip";
import DemoDescriptionComp from "./description";
import DemoRenderPanelComp from "./render-panel";
import DemoPlacementComp from "./placement";
import DemoGroupMenuComp from "./group-menu";
import DemoBadgeComp from "./badge";
import DemoBasicComp from "./basic";
import DemoBackTopComp from "./back-top";

const meta = {
  title: 'Base/FloatButton',
  component: FloatButton,
} satisfies Meta<typeof FloatButton>;

export default meta;
type Story = StoryObj<any>;


export const Demo_group: Story = {
  render: (p:any) => <DemoGroupComp {...p} />
};

export const Demo_type: Story = {
  render: (p:any) => <DemoTypeComp {...p} />
};

export const Demo_controlled: Story = {
  render: (p:any) => <DemoControlledComp {...p} />
};

export const Demo_shape: Story = {
  render: (p:any) => <DemoShapeComp {...p} />
};

export const Demo_tooltip: Story = {
  render: (p:any) => <DemoTooltipComp {...p} />
};

export const Demo_description: Story = {
  render: (p:any) => <DemoDescriptionComp {...p} />
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <DemoRenderPanelComp {...p} />
};

export const Demo_placement: Story = {
  render: (p:any) => <DemoPlacementComp {...p} />
};

export const Demo_groupMenu: Story = {
  render: (p:any) => <DemoGroupMenuComp {...p} />
};

export const Demo_badge: Story = {
  render: (p:any) => <DemoBadgeComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_backTop: Story = {
  render: (p:any) => <DemoBackTopComp {...p} />
};
