
import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from 'antd';
import DemoHorizontalComp from "./horizontal";
import DemoVariantComp from "./variant";
import DemoVerticalComp from "./vertical";
import DemoPlainComp from "./plain";
import DemoCustomizeStyleComp from "./customize-style";
import DemoWithTextComp from "./with-text";

const meta = {
  title: 'Base/Divider',
  component: Divider,
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<any>;


export const Demo_horizontal: Story = {
  render: (p:any) => <DemoHorizontalComp {...p} />
};

export const Demo_variant: Story = {
  render: (p:any) => <DemoVariantComp {...p} />
};

export const Demo_vertical: Story = {
  render: (p:any) => <DemoVerticalComp {...p} />
};

export const Demo_plain: Story = {
  render: (p:any) => <DemoPlainComp {...p} />
};

export const Demo_customizeStyle: Story = {
  render: (p:any) => <DemoCustomizeStyleComp {...p} />
};

export const Demo_withText: Story = {
  render: (p:any) => <DemoWithTextComp {...p} />
};
