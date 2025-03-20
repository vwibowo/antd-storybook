
import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from 'antd';
import DemoMultiLevelDrawerComp from "./multi-level-drawer";
import DemoSizeComp from "./size";
import DemoNoMaskComp from "./no-mask";
import DemoBasicRightComp from "./basic-right";
import DemoRenderInCurrentComp from "./render-in-current";
import DemoExtraComp from "./extra";
import DemoConfigProviderComp from "./config-provider";
import DemoFormInDrawerComp from "./form-in-drawer";
import DemoRenderPanelComp from "./render-panel";
import DemoClassNamesComp from "./classNames";
import DemoPlacementComp from "./placement";
import DemoUserProfileComp from "./user-profile";
import DemoLoadingComp from "./loading";

const meta = {
  title: 'Base/Drawer',
  component: Drawer,
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<any>;


export const Demo_multiLevelDrawer: Story = {
  render: (p:any) => <DemoMultiLevelDrawerComp {...p} />
};

export const Demo_size: Story = {
  render: (p:any) => <DemoSizeComp {...p} />
};

export const Demo_noMask: Story = {
  render: (p:any) => <DemoNoMaskComp {...p} />
};

export const Demo_basicRight: Story = {
  render: (p:any) => <DemoBasicRightComp {...p} />
};

export const Demo_renderInCurrent: Story = {
  render: (p:any) => <DemoRenderInCurrentComp {...p} />
};

export const Demo_extra: Story = {
  render: (p:any) => <DemoExtraComp {...p} />
};

export const Demo_configProvider: Story = {
  render: (p:any) => <DemoConfigProviderComp {...p} />
};

export const Demo_formInDrawer: Story = {
  render: (p:any) => <DemoFormInDrawerComp {...p} />
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <DemoRenderPanelComp {...p} />
};

export const Demo_classNames: Story = {
  render: (p:any) => <DemoClassNamesComp {...p} />
};

export const Demo_placement: Story = {
  render: (p:any) => <DemoPlacementComp {...p} />
};

export const Demo_userProfile: Story = {
  render: (p:any) => <DemoUserProfileComp {...p} />
};

export const Demo_loading: Story = {
  render: (p:any) => <DemoLoadingComp {...p} />
};
