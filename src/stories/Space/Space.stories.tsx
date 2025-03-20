
import type { Meta, StoryObj } from '@storybook/react';
import { Space } from 'antd';
import DemoCompactButtonsComp from "./compact-buttons";
import DemoSizeComp from "./size";
import DemoCompactButtonVerticalComp from "./compact-button-vertical";
import DemoVerticalComp from "./vertical";
import DemoCompactComp from "./compact";
import DemoAlignComp from "./align";
import DemoGapInLineComp from "./gap-in-line";
import DemoBaseComp from "./base";
import DemoWrapComp from "./wrap";
import DemoCompactNestedComp from "./compact-nested";
import DemoSplitComp from "./split";

const meta = {
  title: 'Base/Space',
  component: Space,
} satisfies Meta<typeof Space>;

export default meta;
type Story = StoryObj<any>;


export const Demo_compactButtons: Story = {
  render: (p:any) => <DemoCompactButtonsComp {...p} />
};

export const Demo_size: Story = {
  render: (p:any) => <DemoSizeComp {...p} />
};

export const Demo_compactButtonVertical: Story = {
  render: (p:any) => <DemoCompactButtonVerticalComp {...p} />
};

export const Demo_vertical: Story = {
  render: (p:any) => <DemoVerticalComp {...p} />
};

export const Demo_compact: Story = {
  render: (p:any) => <DemoCompactComp {...p} />
};

export const Demo_align: Story = {
  render: (p:any) => <DemoAlignComp {...p} />
};

export const Demo_gapInLine: Story = {
  render: (p:any) => <DemoGapInLineComp {...p} />
};

export const Demo_base: Story = {
  render: (p:any) => <DemoBaseComp {...p} />
};

export const Demo_wrap: Story = {
  render: (p:any) => <DemoWrapComp {...p} />
};

export const Demo_compactNested: Story = {
  render: (p:any) => <DemoCompactNestedComp {...p} />
};

export const Demo_split: Story = {
  render: (p:any) => <DemoSplitComp {...p} />
};
