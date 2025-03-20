
import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from 'antd';
import DemoIconComp from "./icon";
import DemoControlComp from "./control";
import DemoBorderlessComp from "./borderless";
import DemoCheckableComp from "./checkable";
import DemoCustomizeComp from "./customize";
import DemoColorfulComp from "./colorful";
import DemoBorderlessLayoutComp from "./borderlessLayout";
import DemoStatusComp from "./status";
import DemoColorfulInverseComp from "./colorful-inverse";
import DemoBasicComp from "./basic";

const meta = {
  title: 'Base/Tag',
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<any>;


export const Demo_icon: Story = {
  render: (p:any) => <DemoIconComp {...p} />
};

export const Demo_control: Story = {
  render: (p:any) => <DemoControlComp {...p} />
};

export const Demo_borderless: Story = {
  render: (p:any) => <DemoBorderlessComp {...p} />
};

export const Demo_checkable: Story = {
  render: (p:any) => <DemoCheckableComp {...p} />
};

export const Demo_customize: Story = {
  render: (p:any) => <DemoCustomizeComp {...p} />
};

export const Demo_colorful: Story = {
  render: (p:any) => <DemoColorfulComp {...p} />
};

export const Demo_borderlessLayout: Story = {
  render: (p:any) => <DemoBorderlessLayoutComp {...p} />
};

export const Demo_status: Story = {
  render: (p:any) => <DemoStatusComp {...p} />
};

export const Demo_colorfulInverse: Story = {
  render: (p:any) => <DemoColorfulInverseComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};
