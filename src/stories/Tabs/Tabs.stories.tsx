
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from 'antd';
import DemoPositionComp from "./position";
import DemoSizeComp from "./size";
import DemoCustomIndicatorComp from "./custom-indicator";
import DemoAnimatedComp from "./animated";
import DemoCardTopComp from "./card-top";
import DemoCardComp from "./card";
import DemoIconComp from "./icon";
import DemoEditableCardComp from "./editable-card";
import DemoExtraComp from "./extra";
import DemoNestComp from "./nest";
import DemoCenteredComp from "./centered";
import DemoDisabledComp from "./disabled";
import DemoBasicComp from "./basic";
import DemoSlideComp from "./slide";
import DemoCustomAddTriggerComp from "./custom-add-trigger";

const meta = {
  title: 'Base/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<any>;


export const Demo_position: Story = {
  render: (p:any) => <DemoPositionComp {...p} />
};

export const Demo_size: Story = {
  render: (p:any) => <DemoSizeComp {...p} />
};

export const Demo_customIndicator: Story = {
  render: (p:any) => <DemoCustomIndicatorComp {...p} />
};

export const Demo_animated: Story = {
  render: (p:any) => <DemoAnimatedComp {...p} />
};

export const Demo_cardTop: Story = {
  render: (p:any) => <DemoCardTopComp {...p} />
};

export const Demo_card: Story = {
  render: (p:any) => <DemoCardComp {...p} />
};

export const Demo_icon: Story = {
  render: (p:any) => <DemoIconComp {...p} />
};

export const Demo_editableCard: Story = {
  render: (p:any) => <DemoEditableCardComp {...p} />
};

export const Demo_extra: Story = {
  render: (p:any) => <DemoExtraComp {...p} />
};

export const Demo_nest: Story = {
  render: (p:any) => <DemoNestComp {...p} />
};

export const Demo_centered: Story = {
  render: (p:any) => <DemoCenteredComp {...p} />
};

export const Demo_disabled: Story = {
  render: (p:any) => <DemoDisabledComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_slide: Story = {
  render: (p:any) => <DemoSlideComp {...p} />
};

export const Demo_customAddTrigger: Story = {
  render: (p:any) => <DemoCustomAddTriggerComp {...p} />
};
