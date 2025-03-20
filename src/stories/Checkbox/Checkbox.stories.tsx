
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from 'antd';
import DemoGroupComp from "./group";
import DemoControllerComp from "./controller";
import DemoCheckAllComp from "./check-all";
import DemoCustomLineWidthComp from "./custom-line-width";
import DemoLayoutComp from "./layout";
import DemoDisabledComp from "./disabled";
import DemoBasicComp from "./basic";

const meta = {
  title: 'Base/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<any>;


export const Demo_group: Story = {
  render: (p:any) => <DemoGroupComp {...p} />
};

export const Demo_controller: Story = {
  render: (p:any) => <DemoControllerComp {...p} />
};

export const Demo_checkAll: Story = {
  render: (p:any) => <DemoCheckAllComp {...p} />
};

export const Demo_customLineWidth: Story = {
  render: (p:any) => <DemoCustomLineWidthComp {...p} />
};

export const Demo_layout: Story = {
  render: (p:any) => <DemoLayoutComp {...p} />
};

export const Demo_disabled: Story = {
  render: (p:any) => <DemoDisabledComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};
