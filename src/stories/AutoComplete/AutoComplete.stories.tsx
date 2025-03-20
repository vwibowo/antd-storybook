
import type { Meta, StoryObj } from '@storybook/react';
import { AutoComplete } from 'antd';
import DemoAllowClearComp from "./allowClear";
import DemoCustomComp from "./custom";
import DemoNonCaseSensitiveComp from "./non-case-sensitive";
import DemoCertainCategoryComp from "./certain-category";
import DemoVariantComp from "./variant";
import DemoAutoCompleteAndSelectComp from "./AutoComplete-and-Select";
import DemoRenderPanelComp from "./render-panel";
import DemoOptionsComp from "./options";
import DemoStatusComp from "./status";
import DemoBasicComp from "./basic";
import DemoUncertainCategoryComp from "./uncertain-category";

const meta = {
  title: 'Base/AutoComplete',
  component: AutoComplete,
} satisfies Meta<typeof AutoComplete>;

export default meta;
type Story = StoryObj<any>;


export const Demo_allowClear: Story = {
  render: (p:any) => <DemoAllowClearComp {...p} />
};

export const Demo_custom: Story = {
  render: (p:any) => <DemoCustomComp {...p} />
};

export const Demo_nonCaseSensitive: Story = {
  render: (p:any) => <DemoNonCaseSensitiveComp {...p} />
};

export const Demo_certainCategory: Story = {
  render: (p:any) => <DemoCertainCategoryComp {...p} />
};

export const Demo_variant: Story = {
  render: (p:any) => <DemoVariantComp {...p} />
};

export const Demo_autoCompleteAndSelect: Story = {
  render: (p:any) => <DemoAutoCompleteAndSelectComp {...p} />
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <DemoRenderPanelComp {...p} />
};

export const Demo_options: Story = {
  render: (p:any) => <DemoOptionsComp {...p} />
};

export const Demo_status: Story = {
  render: (p:any) => <DemoStatusComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_uncertainCategory: Story = {
  render: (p:any) => <DemoUncertainCategoryComp {...p} />
};
