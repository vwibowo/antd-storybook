
import type { Meta, StoryObj } from '@storybook/react';
import { QRCode } from 'antd';
import DemoTypeComp from "./type";
import DemoDownloadComp from "./download";
import DemoCustomColorComp from "./customColor";
import DemoPopoverComp from "./Popover";
import DemoCustomStatusRenderComp from "./customStatusRender";
import DemoIconComp from "./icon";
import DemoErrorlevelComp from "./errorlevel";
import DemoBaseComp from "./base";
import DemoStatusComp from "./status";
import DemoCustomSizeComp from "./customSize";

const meta = {
  title: 'Base/QRCode',
  component: QRCode,
} satisfies Meta<typeof QRCode>;

export default meta;
type Story = StoryObj<any>;


export const Demo_type: Story = {
  render: (p:any) => <DemoTypeComp {...p} />
};

export const Demo_download: Story = {
  render: (p:any) => <DemoDownloadComp {...p} />
};

export const Demo_customColor: Story = {
  render: (p:any) => <DemoCustomColorComp {...p} />
};

export const Demo_popover: Story = {
  render: (p:any) => <DemoPopoverComp {...p} />
};

export const Demo_customStatusRender: Story = {
  render: (p:any) => <DemoCustomStatusRenderComp {...p} />
};

export const Demo_icon: Story = {
  render: (p:any) => <DemoIconComp {...p} />
};

export const Demo_errorlevel: Story = {
  render: (p:any) => <DemoErrorlevelComp {...p} />
};

export const Demo_base: Story = {
  render: (p:any) => <DemoBaseComp {...p} />
};

export const Demo_status: Story = {
  render: (p:any) => <DemoStatusComp {...p} />
};

export const Demo_customSize: Story = {
  render: (p:any) => <DemoCustomSizeComp {...p} />
};
