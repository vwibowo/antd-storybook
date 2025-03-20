
import type { Meta, StoryObj } from '@storybook/react';
import { Descriptions } from 'antd';
import DemoSizeComp from "./size";
import DemoBorderComp from "./border";
import DemoPaddingComp from "./padding";
import DemoVerticalComp from "./vertical";
import DemoBlockComp from "./block";
import DemoVerticalBorderComp from "./vertical-border";
import DemoJsxComp from "./jsx";
import DemoBasicComp from "./basic";
import DemoStyleComp from "./style";
import DemoTextComp from "./text";
import DemoResponsiveComp from "./responsive";

const meta = {
  title: 'Base/Descriptions',
  component: Descriptions,
} satisfies Meta<typeof Descriptions>;

export default meta;
type Story = StoryObj<any>;


export const Demo_size: Story = {
  render: (p:any) => <DemoSizeComp {...p} />
};

export const Demo_border: Story = {
  render: (p:any) => <DemoBorderComp {...p} />
};

export const Demo_padding: Story = {
  render: (p:any) => <DemoPaddingComp {...p} />
};

export const Demo_vertical: Story = {
  render: (p:any) => <DemoVerticalComp {...p} />
};

export const Demo_block: Story = {
  render: (p:any) => <DemoBlockComp {...p} />
};

export const Demo_verticalBorder: Story = {
  render: (p:any) => <DemoVerticalBorderComp {...p} />
};

export const Demo_jsx: Story = {
  render: (p:any) => <DemoJsxComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_style: Story = {
  render: (p:any) => <DemoStyleComp {...p} />
};

export const Demo_text: Story = {
  render: (p:any) => <DemoTextComp {...p} />
};

export const Demo_responsive: Story = {
  render: (p:any) => <DemoResponsiveComp {...p} />
};
