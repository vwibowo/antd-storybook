
import type { Meta, StoryObj } from '@storybook/react';
import { Anchor } from 'antd';
import DemoStaticComp from "./static";
import DemoHorizontalComp from "./horizontal";
import DemoCustomizeHighlightComp from "./customizeHighlight";
import DemoLegacyAnchorComp from "./legacy-anchor";
import DemoOnChangeComp from "./onChange";
import DemoReplaceComp from "./replace";
import DemoBasicComp from "./basic";
import DemoOnClickComp from "./onClick";
import DemoTargetOffsetComp from "./targetOffset";

const meta = {
  title: 'Base/Anchor',
  component: Anchor,
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<any>;


export const Demo_static: Story = {
  render: (p:any) => <DemoStaticComp {...p} />
};

export const Demo_horizontal: Story = {
  render: (p:any) => <DemoHorizontalComp {...p} />
};

export const Demo_customizeHighlight: Story = {
  render: (p:any) => <DemoCustomizeHighlightComp {...p} />
};

export const Demo_legacyAnchor: Story = {
  render: (p:any) => <DemoLegacyAnchorComp {...p} />
};

export const Demo_onChange: Story = {
  render: (p:any) => <DemoOnChangeComp {...p} />
};

export const Demo_replace: Story = {
  render: (p:any) => <DemoReplaceComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_onClick: Story = {
  render: (p:any) => <DemoOnClickComp {...p} />
};

export const Demo_targetOffset: Story = {
  render: (p:any) => <DemoTargetOffsetComp {...p} />
};
