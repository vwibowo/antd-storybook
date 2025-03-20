
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'antd';
import DemoColorVariantComp from "./color-variant";
import DemoLinearGradientComp from "./linear-gradient";
import DemoSizeComp from "./size";
import DemoIconComp from "./icon";
import DemoGhostComp from "./ghost";
import DemoChineseSpaceComp from "./chinese-space";
import DemoBlockComp from "./block";
import DemoMultipleComp from "./multiple";
import DemoDisabledComp from "./disabled";
import DemoLoadingComp from "./loading";
import DemoBasicComp from "./basic";
import DemoIconPositionComp from "./icon-position";
import DemoDangerComp from "./danger";
import DemoChineseCharsLoadingComp from "./chinese-chars-loading";
import DemoLegacyGroupComp from "./legacy-group";

const meta = {
  title: 'Base/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<any>;


export const Demo_colorVariant: Story = {
  render: (p:any) => <DemoColorVariantComp {...p} />
};

export const Demo_linearGradient: Story = {
  render: (p:any) => <DemoLinearGradientComp {...p} />
};

export const Demo_size: Story = {
  render: (p:any) => <DemoSizeComp {...p} />
};

export const Demo_icon: Story = {
  render: (p:any) => <DemoIconComp {...p} />
};

export const Demo_ghost: Story = {
  render: (p:any) => <DemoGhostComp {...p} />
};

export const Demo_chineseSpace: Story = {
  render: (p:any) => <DemoChineseSpaceComp {...p} />
};

export const Demo_block: Story = {
  render: (p:any) => <DemoBlockComp {...p} />
};

export const Demo_multiple: Story = {
  render: (p:any) => <DemoMultipleComp {...p} />
};

export const Demo_disabled: Story = {
  render: (p:any) => <DemoDisabledComp {...p} />
};

export const Demo_loading: Story = {
  render: (p:any) => <DemoLoadingComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_iconPosition: Story = {
  render: (p:any) => <DemoIconPositionComp {...p} />
};

export const Demo_danger: Story = {
  render: (p:any) => <DemoDangerComp {...p} />
};

export const Demo_chineseCharsLoading: Story = {
  render: (p:any) => <DemoChineseCharsLoadingComp {...p} />
};

export const Demo_legacyGroup: Story = {
  render: (p:any) => <DemoLegacyGroupComp {...p} />
};
