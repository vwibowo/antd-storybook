
import type { Meta, StoryObj } from '@storybook/react';
import { Rate } from 'antd';
import DemoClearComp from "./clear";
import DemoCharacterFunctionComp from "./character-function";
import DemoHalfComp from "./half";
import DemoDisabledComp from "./disabled";
import DemoCharacterComp from "./character";
import DemoBasicComp from "./basic";
import DemoTextComp from "./text";

const meta = {
  title: 'Base/Rate',
  component: Rate,
} satisfies Meta<typeof Rate>;

export default meta;
type Story = StoryObj<any>;


export const Demo_clear: Story = {
  render: (p:any) => <DemoClearComp {...p} />
};

export const Demo_characterFunction: Story = {
  render: (p:any) => <DemoCharacterFunctionComp {...p} />
};

export const Demo_half: Story = {
  render: (p:any) => <DemoHalfComp {...p} />
};

export const Demo_disabled: Story = {
  render: (p:any) => <DemoDisabledComp {...p} />
};

export const Demo_character: Story = {
  render: (p:any) => <DemoCharacterComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_text: Story = {
  render: (p:any) => <DemoTextComp {...p} />
};
