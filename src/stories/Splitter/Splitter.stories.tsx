
import type { Meta, StoryObj } from '@storybook/react';
import { Splitter } from 'antd';
import DemoGroupComp from "./group";
import DemoSizeComp from "./size";
import DemoVerticalComp from "./vertical";
import DemoControlComp from "./control";
import DemoMultipleComp from "./multiple";
import DemoNestedInTabsComp from "./nested-in-tabs";
import DemoLazyComp from "./lazy";
import DemoCollapsibleComp from "./collapsible";

const meta = {
  title: 'Base/Splitter',
  component: Splitter,
} satisfies Meta<typeof Splitter>;

export default meta;
type Story = StoryObj<any>;


export const Demo_group: Story = {
  render: (p:any) => <DemoGroupComp {...p} />
};

export const Demo_size: Story = {
  render: (p:any) => <DemoSizeComp {...p} />
};

export const Demo_vertical: Story = {
  render: (p:any) => <DemoVerticalComp {...p} />
};

export const Demo_control: Story = {
  render: (p:any) => <DemoControlComp {...p} />
};

export const Demo_multiple: Story = {
  render: (p:any) => <DemoMultipleComp {...p} />
};

export const Demo_nestedInTabs: Story = {
  render: (p:any) => <DemoNestedInTabsComp {...p} />
};

export const Demo_lazy: Story = {
  render: (p:any) => <DemoLazyComp {...p} />
};

export const Demo_collapsible: Story = {
  render: (p:any) => <DemoCollapsibleComp {...p} />
};
