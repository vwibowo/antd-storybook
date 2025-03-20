
import type { Meta, StoryObj } from '@storybook/react';
import { Steps } from 'antd';
import DemoNavComp from "./nav";
import DemoProgressDotComp from "./progress-dot";
import DemoCustomizedProgressDotComp from "./customized-progress-dot";
import DemoProgressComp from "./progress";
import DemoIconComp from "./icon";
import DemoClickableComp from "./clickable";
import DemoStepNextComp from "./step-next";
import DemoProgressDotSmallComp from "./progress-dot-small";
import DemoVerticalComp from "./vertical";
import DemoWireframeComp from "./wireframe";
import DemoVerticalSmallComp from "./vertical-small";
import DemoSmallSizeComp from "./small-size";
import DemoInlineComp from "./inline";
import DemoErrorComp from "./error";
import DemoStepsInStepsComp from "./steps-in-steps";
import DemoSimpleComp from "./simple";
import DemoLabelPlacementComp from "./label-placement";

const meta = {
  title: 'Base/Steps',
  component: Steps,
} satisfies Meta<typeof Steps>;

export default meta;
type Story = StoryObj<any>;


export const Demo_nav: Story = {
  render: (p:any) => <DemoNavComp {...p} />
};

export const Demo_progressDot: Story = {
  render: (p:any) => <DemoProgressDotComp {...p} />
};

export const Demo_customizedProgressDot: Story = {
  render: (p:any) => <DemoCustomizedProgressDotComp {...p} />
};

export const Demo_progress: Story = {
  render: (p:any) => <DemoProgressComp {...p} />
};

export const Demo_icon: Story = {
  render: (p:any) => <DemoIconComp {...p} />
};

export const Demo_clickable: Story = {
  render: (p:any) => <DemoClickableComp {...p} />
};

export const Demo_stepNext: Story = {
  render: (p:any) => <DemoStepNextComp {...p} />
};

export const Demo_progressDotSmall: Story = {
  render: (p:any) => <DemoProgressDotSmallComp {...p} />
};

export const Demo_vertical: Story = {
  render: (p:any) => <DemoVerticalComp {...p} />
};

export const Demo_wireframe: Story = {
  render: (p:any) => <DemoWireframeComp {...p} />
};

export const Demo_verticalSmall: Story = {
  render: (p:any) => <DemoVerticalSmallComp {...p} />
};

export const Demo_smallSize: Story = {
  render: (p:any) => <DemoSmallSizeComp {...p} />
};

export const Demo_inline: Story = {
  render: (p:any) => <DemoInlineComp {...p} />
};

export const Demo_error: Story = {
  render: (p:any) => <DemoErrorComp {...p} />
};

export const Demo_stepsInSteps: Story = {
  render: (p:any) => <DemoStepsInStepsComp {...p} />
};

export const Demo_simple: Story = {
  render: (p:any) => <DemoSimpleComp {...p} />
};

export const Demo_labelPlacement: Story = {
  render: (p:any) => <DemoLabelPlacementComp {...p} />
};
