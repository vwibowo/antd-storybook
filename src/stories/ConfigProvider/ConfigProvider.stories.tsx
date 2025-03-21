
import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import DemoSizeComp from "./size";
import DemoDirectionComp from "./direction";
import DemoWarningComp from "./warning";
import DemoUseConfigComp from "./useConfig";
import DemoPrefixClsComp from "./prefixCls";
import DemoHolderRenderComp from "./holderRender";
import DemoThemeComp from "./theme";
import DemoLocaleComp from "./locale";

const meta = {
  title: 'Base/ConfigProvider',
  component: ConfigProvider,
} satisfies Meta<typeof ConfigProvider>;

export default meta;
type Story = StoryObj<any>;


export const Demo_size: Story = {
  render: (p: any) => <DemoSizeComp {...p} />
};

export const Demo_direction: Story = {
  render: (p: any) => <DemoDirectionComp {...p} />
};

export const Demo_warning: Story = {
  render: (p: any) => <DemoWarningComp {...p} />
};

export const Demo_useConfig: Story = {
  render: (p: any) => <DemoUseConfigComp {...p} />
};

export const Demo_prefixCls: Story = {
  render: (p: any) => <DemoPrefixClsComp {...p} />
};

export const Demo_holderRender: Story = {
  render: (p: any) => <DemoHolderRenderComp {...p} />
};

export const Demo_theme: Story = {
  render: (p: any) => <DemoThemeComp {...p} />
};

export const Demo_locale: Story = {
  render: (p: any) => <DemoLocaleComp {...p} />
};
