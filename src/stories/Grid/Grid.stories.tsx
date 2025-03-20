
import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from 'antd';
import DemoResponsiveFlexComp from "./responsive-flex";
import DemoUseBreakpointComp from "./useBreakpoint";
import DemoFlexStretchComp from "./flex-stretch";
import DemoFlexComp from "./flex";
import DemoSortComp from "./sort";
import DemoPlaygroundComp from "./playground";
import DemoOffsetComp from "./offset";
import DemoGutterComp from "./gutter";
import DemoFlexOrderComp from "./flex-order";
import DemoResponsiveMoreComp from "./responsive-more";
import DemoBasicComp from "./basic";
import DemoFlexAlignComp from "./flex-align";
import DemoResponsiveComp from "./responsive";

const meta = {
  title: 'Base/Grid',
  component: Grid,
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<any>;


export const Demo_responsiveFlex: Story = {
  render: (p:any) => <DemoResponsiveFlexComp {...p} />
};

export const Demo_useBreakpoint: Story = {
  render: (p:any) => <DemoUseBreakpointComp {...p} />
};

export const Demo_flexStretch: Story = {
  render: (p:any) => <DemoFlexStretchComp {...p} />
};

export const Demo_flex: Story = {
  render: (p:any) => <DemoFlexComp {...p} />
};

export const Demo_sort: Story = {
  render: (p:any) => <DemoSortComp {...p} />
};

export const Demo_playground: Story = {
  render: (p:any) => <DemoPlaygroundComp {...p} />
};

export const Demo_offset: Story = {
  render: (p:any) => <DemoOffsetComp {...p} />
};

export const Demo_gutter: Story = {
  render: (p:any) => <DemoGutterComp {...p} />
};

export const Demo_flexOrder: Story = {
  render: (p:any) => <DemoFlexOrderComp {...p} />
};

export const Demo_responsiveMore: Story = {
  render: (p:any) => <DemoResponsiveMoreComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_flexAlign: Story = {
  render: (p:any) => <DemoFlexAlignComp {...p} />
};

export const Demo_responsive: Story = {
  render: (p:any) => <DemoResponsiveComp {...p} />
};
