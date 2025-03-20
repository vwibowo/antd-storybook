
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from 'antd';
import DemoShiftComp from "./shift";
import DemoArrowComp from "./arrow";
import DemoWrapCustomComponentComp from "./wrap-custom-component";
import DemoDisabledChildrenComp from "./disabled-children";
import DemoArrowPointAtCenterComp from "./arrow-point-at-center";
import DemoDestroyTooltipOnHideComp from "./destroy-tooltip-on-hide";
import DemoRenderPanelComp from "./render-panel";
import DemoPlacementComp from "./placement";
import DemoColorfulComp from "./colorful";
import DemoDisabledComp from "./disabled";
import DemoBasicComp from "./basic";
import DemoAutoAdjustOverflowComp from "./auto-adjust-overflow";

const meta = {
  title: 'Base/Tooltip',
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<any>;


export const Demo_shift: Story = {
  render: (p:any) => <DemoShiftComp {...p} />
};

export const Demo_arrow: Story = {
  render: (p:any) => <DemoArrowComp {...p} />
};

export const Demo_wrapCustomComponent: Story = {
  render: (p:any) => <DemoWrapCustomComponentComp {...p} />
};

export const Demo_disabledChildren: Story = {
  render: (p:any) => <DemoDisabledChildrenComp {...p} />
};

export const Demo_arrowPointAtCenter: Story = {
  render: (p:any) => <DemoArrowPointAtCenterComp {...p} />
};

export const Demo_destroyTooltipOnHide: Story = {
  render: (p:any) => <DemoDestroyTooltipOnHideComp {...p} />
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <DemoRenderPanelComp {...p} />
};

export const Demo_placement: Story = {
  render: (p:any) => <DemoPlacementComp {...p} />
};

export const Demo_colorful: Story = {
  render: (p:any) => <DemoColorfulComp {...p} />
};

export const Demo_disabled: Story = {
  render: (p:any) => <DemoDisabledComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_autoAdjustOverflow: Story = {
  render: (p:any) => <DemoAutoAdjustOverflowComp {...p} />
};
