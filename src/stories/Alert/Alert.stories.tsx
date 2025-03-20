
import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from 'antd';
import DemoActionComp from "./action";
import DemoBannerComp from "./banner";
import DemoErrorBoundaryComp from "./error-boundary";
import DemoIconComp from "./icon";
import DemoCustomIconComp from "./custom-icon";
import DemoDescriptionComp from "./description";
import DemoBasicComp from "./basic";
import DemoStyleComp from "./style";
import DemoClosableComp from "./closable";
import DemoSmoothClosedComp from "./smooth-closed";

const meta = {
  title: 'Base/Alert',
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<any>;


export const Demo_action: Story = {
  render: (p:any) => <DemoActionComp {...p} />
};

export const Demo_banner: Story = {
  render: (p:any) => <DemoBannerComp {...p} />
};

export const Demo_errorBoundary: Story = {
  render: (p:any) => <DemoErrorBoundaryComp {...p} />
};

export const Demo_icon: Story = {
  render: (p:any) => <DemoIconComp {...p} />
};

export const Demo_customIcon: Story = {
  render: (p:any) => <DemoCustomIconComp {...p} />
};

export const Demo_description: Story = {
  render: (p:any) => <DemoDescriptionComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_style: Story = {
  render: (p:any) => <DemoStyleComp {...p} />
};

export const Demo_closable: Story = {
  render: (p:any) => <DemoClosableComp {...p} />
};

export const Demo_smoothClosed: Story = {
  render: (p:any) => <DemoSmoothClosedComp {...p} />
};
