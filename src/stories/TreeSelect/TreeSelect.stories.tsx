
import type { Meta, StoryObj } from '@storybook/react';
import { TreeSelect } from 'antd';
import DemoMaxCountNoEffectComp from "./maxCountNoEffect";
import DemoVariantComp from "./variant";
import DemoAsyncComp from "./async";
import DemoMaxCountComp from "./maxCount";
import DemoCheckableComp from "./checkable";
import DemoRenderPanelComp from "./render-panel";
import DemoTreeDataComp from "./treeData";
import DemoPlacementComp from "./placement";
import DemoMultipleComp from "./multiple";
import DemoStatusComp from "./status";
import DemoSuffixComp from "./suffix";
import DemoBasicComp from "./basic";
import DemoTreeLineComp from "./treeLine";

const meta = {
  title: 'Base/TreeSelect',
  component: TreeSelect,
} satisfies Meta<typeof TreeSelect>;

export default meta;
type Story = StoryObj<any>;


export const Demo_maxCountNoEffect: Story = {
  render: (p:any) => <DemoMaxCountNoEffectComp {...p} />
};

export const Demo_variant: Story = {
  render: (p:any) => <DemoVariantComp {...p} />
};

export const Demo_async: Story = {
  render: (p:any) => <DemoAsyncComp {...p} />
};

export const Demo_maxCount: Story = {
  render: (p:any) => <DemoMaxCountComp {...p} />
};

export const Demo_checkable: Story = {
  render: (p:any) => <DemoCheckableComp {...p} />
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <DemoRenderPanelComp {...p} />
};

export const Demo_treeData: Story = {
  render: (p:any) => <DemoTreeDataComp {...p} />
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

export const Demo_treeLine: Story = {
  render: (p:any) => <DemoTreeLineComp {...p} />
};
