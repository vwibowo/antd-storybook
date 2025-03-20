
import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from 'antd';
import DemoStepsComp from "./steps";
import DemoSizeComp from "./size";
import DemoCircleStepsComp from "./circle-steps";
import DemoDashboardComp from "./dashboard";
import DemoSegmentComp from "./segment";
import DemoCircleMiniComp from "./circle-mini";
import DemoCircleComp from "./circle";
import DemoGradientLineComp from "./gradient-line";
import DemoDynamicComp from "./dynamic";
import DemoCircleMicroComp from "./circle-micro";
import DemoLinecapComp from "./linecap";
import DemoLineMiniComp from "./line-mini";
import DemoFormatComp from "./format";
import DemoInfoPositionComp from "./info-position";
import DemoLineComp from "./line";

const meta = {
  title: 'Base/Progress',
  component: Progress,
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<any>;


export const Demo_steps: Story = {
  render: (p:any) => <DemoStepsComp {...p} />
};

export const Demo_size: Story = {
  render: (p:any) => <DemoSizeComp {...p} />
};

export const Demo_circleSteps: Story = {
  render: (p:any) => <DemoCircleStepsComp {...p} />
};

export const Demo_dashboard: Story = {
  render: (p:any) => <DemoDashboardComp {...p} />
};

export const Demo_segment: Story = {
  render: (p:any) => <DemoSegmentComp {...p} />
};

export const Demo_circleMini: Story = {
  render: (p:any) => <DemoCircleMiniComp {...p} />
};

export const Demo_circle: Story = {
  render: (p:any) => <DemoCircleComp {...p} />
};

export const Demo_gradientLine: Story = {
  render: (p:any) => <DemoGradientLineComp {...p} />
};

export const Demo_dynamic: Story = {
  render: (p:any) => <DemoDynamicComp {...p} />
};

export const Demo_circleMicro: Story = {
  render: (p:any) => <DemoCircleMicroComp {...p} />
};

export const Demo_linecap: Story = {
  render: (p:any) => <DemoLinecapComp {...p} />
};

export const Demo_lineMini: Story = {
  render: (p:any) => <DemoLineMiniComp {...p} />
};

export const Demo_format: Story = {
  render: (p:any) => <DemoFormatComp {...p} />
};

export const Demo_infoPosition: Story = {
  render: (p:any) => <DemoInfoPositionComp {...p} />
};

export const Demo_line: Story = {
  render: (p:any) => <DemoLineComp {...p} />
};
