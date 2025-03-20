
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from 'antd';
import DemoRadiogroupOptionsComp from "./radiogroup-options";
import DemoSizeComp from "./size";
import DemoRadiogroupBlockComp from "./radiogroup-block";
import DemoRadiobuttonSolidComp from "./radiobutton-solid";
import DemoWireframeComp from "./wireframe";
import DemoRadiogroupWithNameComp from "./radiogroup-with-name";
import DemoRadiobuttonComp from "./radiobutton";
import DemoDisabledComp from "./disabled";
import DemoBadgeComp from "./badge";
import DemoBasicComp from "./basic";
import DemoRadiogroupComp from "./radiogroup";
import DemoRadiogroupMoreComp from "./radiogroup-more";

const meta = {
  title: 'Base/Radio',
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<any>;


export const Demo_radiogroupOptions: Story = {
  render: (p:any) => <DemoRadiogroupOptionsComp {...p} />
};

export const Demo_size: Story = {
  render: (p:any) => <DemoSizeComp {...p} />
};

export const Demo_radiogroupBlock: Story = {
  render: (p:any) => <DemoRadiogroupBlockComp {...p} />
};

export const Demo_radiobuttonSolid: Story = {
  render: (p:any) => <DemoRadiobuttonSolidComp {...p} />
};

export const Demo_wireframe: Story = {
  render: (p:any) => <DemoWireframeComp {...p} />
};

export const Demo_radiogroupWithName: Story = {
  render: (p:any) => <DemoRadiogroupWithNameComp {...p} />
};

export const Demo_radiobutton: Story = {
  render: (p:any) => <DemoRadiobuttonComp {...p} />
};

export const Demo_disabled: Story = {
  render: (p:any) => <DemoDisabledComp {...p} />
};

export const Demo_badge: Story = {
  render: (p:any) => <DemoBadgeComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_radiogroup: Story = {
  render: (p:any) => <DemoRadiogroupComp {...p} />
};

export const Demo_radiogroupMore: Story = {
  render: (p:any) => <DemoRadiogroupMoreComp {...p} />
};
