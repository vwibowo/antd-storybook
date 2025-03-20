
import type { Meta, StoryObj } from '@storybook/react';
import { Cascader } from 'antd';
import DemoChangeOnSelectComp from "./change-on-select";
import DemoSizeComp from "./size";
import DemoCustomRenderComp from "./custom-render";
import DemoCustomDropdownComp from "./custom-dropdown";
import DemoCustomTriggerComp from "./custom-trigger";
import DemoSearchComp from "./search";
import DemoVariantComp from "./variant";
import DemoFieldsNameComp from "./fields-name";
import DemoShowCheckedStrategyComp from "./showCheckedStrategy";
import DemoRenderPanelComp from "./render-panel";
import DemoPanelComp from "./panel";
import DemoPlacementComp from "./placement";
import DemoMultipleComp from "./multiple";
import DemoStatusComp from "./status";
import DemoSuffixComp from "./suffix";
import DemoBasicComp from "./basic";
import DemoLazyComp from "./lazy";
import DemoDisabledOptionComp from "./disabled-option";
import DemoHoverComp from "./hover";
import DemoDefaultValueComp from "./default-value";

const meta = {
  title: 'Base/Cascader',
  component: Cascader,
} satisfies Meta<typeof Cascader>;

export default meta;
type Story = StoryObj<any>;


export const Demo_changeOnSelect: Story = {
  render: (p:any) => <DemoChangeOnSelectComp {...p} />
};

export const Demo_size: Story = {
  render: (p:any) => <DemoSizeComp {...p} />
};

export const Demo_customRender: Story = {
  render: (p:any) => <DemoCustomRenderComp {...p} />
};

export const Demo_customDropdown: Story = {
  render: (p:any) => <DemoCustomDropdownComp {...p} />
};

export const Demo_customTrigger: Story = {
  render: (p:any) => <DemoCustomTriggerComp {...p} />
};

export const Demo_search: Story = {
  render: (p:any) => <DemoSearchComp {...p} />
};

export const Demo_variant: Story = {
  render: (p:any) => <DemoVariantComp {...p} />
};

export const Demo_fieldsName: Story = {
  render: (p:any) => <DemoFieldsNameComp {...p} />
};

export const Demo_showCheckedStrategy: Story = {
  render: (p:any) => <DemoShowCheckedStrategyComp {...p} />
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <DemoRenderPanelComp {...p} />
};

export const Demo_panel: Story = {
  render: (p:any) => <DemoPanelComp {...p} />
};

export const Demo_placement: Story = {
  render: (p:any) => <DemoPlacementComp {...p} />
};

export const Demo_multiple: Story = {
  render: (p:any) => <DemoMultipleComp {...p} />
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

export const Demo_lazy: Story = {
  render: (p:any) => <DemoLazyComp {...p} />
};

export const Demo_disabledOption: Story = {
  render: (p:any) => <DemoDisabledOptionComp {...p} />
};

export const Demo_hover: Story = {
  render: (p:any) => <DemoHoverComp {...p} />
};

export const Demo_defaultValue: Story = {
  render: (p:any) => <DemoDefaultValueComp {...p} />
};
