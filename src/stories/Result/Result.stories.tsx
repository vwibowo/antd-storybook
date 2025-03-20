
import type { Meta, StoryObj } from '@storybook/react';
import { Result } from 'antd';
import Demo403Comp from "./403";
import DemoWarningComp from "./warning";
import DemoInfoComp from "./info";
import Demo404Comp from "./404";
import Demo500Comp from "./500";
import DemoSuccessComp from "./success";
import DemoErrorComp from "./error";
import DemoCustomIconComp from "./customIcon";

const meta = {
  title: 'Base/Result',
  component: Result,
} satisfies Meta<typeof Result>;

export default meta;
type Story = StoryObj<any>;


export const Demo_403: Story = {
  render: (p:any) => <Demo403Comp {...p} />
};

export const Demo_warning: Story = {
  render: (p:any) => <DemoWarningComp {...p} />
};

export const Demo_info: Story = {
  render: (p:any) => <DemoInfoComp {...p} />
};

export const Demo_404: Story = {
  render: (p:any) => <Demo404Comp {...p} />
};

export const Demo_500: Story = {
  render: (p:any) => <Demo500Comp {...p} />
};

export const Demo_success: Story = {
  render: (p:any) => <DemoSuccessComp {...p} />
};

export const Demo_error: Story = {
  render: (p:any) => <DemoErrorComp {...p} />
};

export const Demo_customIcon: Story = {
  render: (p:any) => <DemoCustomIconComp {...p} />
};
