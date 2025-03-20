
import type { Meta, StoryObj } from '@storybook/react';
import { Tour } from 'antd';
import DemoIndicatorComp from "./indicator";
import DemoRenderPanelComp from "./render-panel";
import DemoPlacementComp from "./placement";
import DemoGapComp from "./gap";
import DemoBasicComp from "./basic";
import DemoMaskComp from "./mask";
import DemoNonModalComp from "./non-modal";

const meta = {
  title: 'Base/Tour',
  component: Tour,
} satisfies Meta<typeof Tour>;

export default meta;
type Story = StoryObj<any>;


export const Demo_indicator: Story = {
  render: (p:any) => <DemoIndicatorComp {...p} />
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <DemoRenderPanelComp {...p} />
};

export const Demo_placement: Story = {
  render: (p:any) => <DemoPlacementComp {...p} />
};

export const Demo_gap: Story = {
  render: (p:any) => <DemoGapComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_mask: Story = {
  render: (p:any) => <DemoMaskComp {...p} />
};

export const Demo_nonModal: Story = {
  render: (p:any) => <DemoNonModalComp {...p} />
};
