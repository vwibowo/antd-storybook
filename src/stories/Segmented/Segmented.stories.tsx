
import type { Meta, StoryObj } from '@storybook/react';
import { Segmented } from 'antd';
import DemoCustomComp from "./custom";
import DemoSizeComp from "./size";
import DemoWithIconComp from "./with-icon";
import DemoControlledComp from "./controlled";
import DemoControlledTwoComp from "./controlled-two";
import DemoShapeComp from "./shape";
import DemoVerticalComp from "./vertical";
import DemoIconOnlyComp from "./icon-only";
import DemoComponentTokenComp from "./componentToken";
import DemoDynamicComp from "./dynamic";
import DemoBlockComp from "./block";
import DemoDisabledComp from "./disabled";
import DemoBasicComp from "./basic";
import DemoWithNameComp from "./with-name";
import DemoSizeConsistentComp from "./size-consistent";

const meta = {
  title: 'Base/Segmented',
  component: Segmented,
} satisfies Meta<typeof Segmented>;

export default meta;
type Story = StoryObj<any>;


export const Demo_custom: Story = {
  render: (p:any) => <DemoCustomComp {...p} />
};

export const Demo_size: Story = {
  render: (p:any) => <DemoSizeComp {...p} />
};

export const Demo_withIcon: Story = {
  render: (p:any) => <DemoWithIconComp {...p} />
};

export const Demo_controlled: Story = {
  render: (p:any) => <DemoControlledComp {...p} />
};

export const Demo_controlledTwo: Story = {
  render: (p:any) => <DemoControlledTwoComp {...p} />
};

export const Demo_shape: Story = {
  render: (p:any) => <DemoShapeComp {...p} />
};

export const Demo_vertical: Story = {
  render: (p:any) => <DemoVerticalComp {...p} />
};

export const Demo_iconOnly: Story = {
  render: (p:any) => <DemoIconOnlyComp {...p} />
};

export const Demo_componentToken: Story = {
  render: (p:any) => <DemoComponentTokenComp {...p} />
};

export const Demo_dynamic: Story = {
  render: (p:any) => <DemoDynamicComp {...p} />
};

export const Demo_block: Story = {
  render: (p:any) => <DemoBlockComp {...p} />
};

export const Demo_disabled: Story = {
  render: (p:any) => <DemoDisabledComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_withName: Story = {
  render: (p:any) => <DemoWithNameComp {...p} />
};

export const Demo_sizeConsistent: Story = {
  render: (p:any) => <DemoSizeConsistentComp {...p} />
};
