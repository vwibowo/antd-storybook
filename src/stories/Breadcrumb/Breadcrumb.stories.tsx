
import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from 'antd';
import DemoSeparatorComponentComp from "./separator-component";
import DemoWithIconComp from "./withIcon";
import DemoWithParamsComp from "./withParams";
import DemoBasicComp from "./basic";
import DemoSeparatorComp from "./separator";
import DemoOverlayComp from "./overlay";

const meta = {
  title: 'Base/Breadcrumb',
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<any>;


export const Demo_separatorComponent: Story = {
  render: (p:any) => <DemoSeparatorComponentComp {...p} />
};

export const Demo_withIcon: Story = {
  render: (p:any) => <DemoWithIconComp {...p} />
};

export const Demo_withParams: Story = {
  render: (p:any) => <DemoWithParamsComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_separator: Story = {
  render: (p:any) => <DemoSeparatorComp {...p} />
};

export const Demo_overlay: Story = {
  render: (p:any) => <DemoOverlayComp {...p} />
};
