
import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from 'antd';
import DemoPositionComp from "./position";
import DemoFadeComp from "./fade";
import DemoArrowsComp from "./arrows";
import DemoDotDurationComp from "./dot-duration";
import DemoBasicComp from "./basic";
import DemoAutoplayComp from "./autoplay";

const meta = {
  title: 'Base/Carousel',
  component: Carousel,
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<any>;


export const Demo_position: Story = {
  render: (p:any) => <DemoPositionComp {...p} />
};

export const Demo_fade: Story = {
  render: (p:any) => <DemoFadeComp {...p} />
};

export const Demo_arrows: Story = {
  render: (p:any) => <DemoArrowsComp {...p} />
};

export const Demo_dotDuration: Story = {
  render: (p:any) => <DemoDotDurationComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_autoplay: Story = {
  render: (p:any) => <DemoAutoplayComp {...p} />
};
