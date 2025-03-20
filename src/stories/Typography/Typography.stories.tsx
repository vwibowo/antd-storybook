
import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from 'antd';
import DemoEditableComp from "./editable";
import DemoTitleComp from "./title";
import DemoCopyableComp from "./copyable";
import DemoEllipsisMiddleComp from "./ellipsis-middle";
import DemoEllipsisComp from "./ellipsis";
import DemoSuffixComp from "./suffix";
import DemoBasicComp from "./basic";
import DemoTextComp from "./text";
import DemoEllipsisControlledComp from "./ellipsis-controlled";

const meta = {
  title: 'Base/Typography',
  component: Typography,
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<any>;


export const Demo_editable: Story = {
  render: (p:any) => <DemoEditableComp {...p} />
};

export const Demo_title: Story = {
  render: (p:any) => <DemoTitleComp {...p} />
};

export const Demo_copyable: Story = {
  render: (p:any) => <DemoCopyableComp {...p} />
};

export const Demo_ellipsisMiddle: Story = {
  render: (p:any) => <DemoEllipsisMiddleComp {...p} />
};

export const Demo_ellipsis: Story = {
  render: (p:any) => <DemoEllipsisComp {...p} />
};

export const Demo_suffix: Story = {
  render: (p:any) => <DemoSuffixComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_text: Story = {
  render: (p:any) => <DemoTextComp {...p} />
};

export const Demo_ellipsisControlled: Story = {
  render: (p:any) => <DemoEllipsisControlledComp {...p} />
};
