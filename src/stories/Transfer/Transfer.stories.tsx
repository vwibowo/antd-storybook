
import type { Meta, StoryObj } from '@storybook/react';
import { Transfer } from 'antd';
import DemoTableTransferComp from "./table-transfer";
import DemoTreeTransferComp from "./tree-transfer";
import DemoCustomSelectAllLabelsComp from "./custom-select-all-labels";
import DemoOneWayComp from "./oneWay";
import DemoLargeDataComp from "./large-data";
import DemoSearchComp from "./search";
import DemoStatusComp from "./status";
import DemoBasicComp from "./basic";
import DemoCustomItemComp from "./custom-item";
import DemoAdvancedComp from "./advanced";

const meta = {
  title: 'Base/Transfer',
  component: Transfer,
} satisfies Meta<typeof Transfer>;

export default meta;
type Story = StoryObj<any>;


export const Demo_tableTransfer: Story = {
  render: (p:any) => <DemoTableTransferComp {...p} />
};

export const Demo_treeTransfer: Story = {
  render: (p:any) => <DemoTreeTransferComp {...p} />
};

export const Demo_customSelectAllLabels: Story = {
  render: (p:any) => <DemoCustomSelectAllLabelsComp {...p} />
};

export const Demo_oneWay: Story = {
  render: (p:any) => <DemoOneWayComp {...p} />
};

export const Demo_largeData: Story = {
  render: (p:any) => <DemoLargeDataComp {...p} />
};

export const Demo_search: Story = {
  render: (p:any) => <DemoSearchComp {...p} />
};

export const Demo_status: Story = {
  render: (p:any) => <DemoStatusComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_customItem: Story = {
  render: (p:any) => <DemoCustomItemComp {...p} />
};

export const Demo_advanced: Story = {
  render: (p:any) => <DemoAdvancedComp {...p} />
};
