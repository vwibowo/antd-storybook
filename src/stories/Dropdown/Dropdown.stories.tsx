
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from 'antd';
import DemoArrowCenterComp from "./arrow-center";
import DemoSubMenuComp from "./sub-menu";
import DemoCustomDropdownComp from "./custom-dropdown";
import DemoEventComp from "./event";
import DemoArrowComp from "./arrow";
import DemoDropdownButtonComp from "./dropdown-button";
import DemoTriggerComp from "./trigger";
import DemoMenuFullComp from "./menu-full";
import DemoExtraComp from "./extra";
import DemoRenderPanelComp from "./render-panel";
import DemoSelectableComp from "./selectable";
import DemoPlacementComp from "./placement";
import DemoItemComp from "./item";
import DemoLoadingComp from "./loading";
import DemoBasicComp from "./basic";
import DemoOverlayOpenComp from "./overlay-open";
import DemoContextMenuComp from "./context-menu";

const meta = {
  title: 'Base/Dropdown',
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<any>;


export const Demo_arrowCenter: Story = {
  render: (p:any) => <DemoArrowCenterComp {...p} />
};

export const Demo_subMenu: Story = {
  render: (p:any) => <DemoSubMenuComp {...p} />
};

export const Demo_customDropdown: Story = {
  render: (p:any) => <DemoCustomDropdownComp {...p} />
};

export const Demo_event: Story = {
  render: (p:any) => <DemoEventComp {...p} />
};

export const Demo_arrow: Story = {
  render: (p:any) => <DemoArrowComp {...p} />
};

export const Demo_dropdownButton: Story = {
  render: (p:any) => <DemoDropdownButtonComp {...p} />
};

export const Demo_trigger: Story = {
  render: (p:any) => <DemoTriggerComp {...p} />
};

export const Demo_menuFull: Story = {
  render: (p:any) => <DemoMenuFullComp {...p} />
};

export const Demo_extra: Story = {
  render: (p:any) => <DemoExtraComp {...p} />
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <DemoRenderPanelComp {...p} />
};

export const Demo_selectable: Story = {
  render: (p:any) => <DemoSelectableComp {...p} />
};

export const Demo_placement: Story = {
  render: (p:any) => <DemoPlacementComp {...p} />
};

export const Demo_item: Story = {
  render: (p:any) => <DemoItemComp {...p} />
};

export const Demo_loading: Story = {
  render: (p:any) => <DemoLoadingComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_overlayOpen: Story = {
  render: (p:any) => <DemoOverlayOpenComp {...p} />
};

export const Demo_contextMenu: Story = {
  render: (p:any) => <DemoContextMenuComp {...p} />
};
