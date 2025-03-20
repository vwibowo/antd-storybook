
import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from 'antd';
import DemoExtraStyleComp from "./extra-style";
import DemoHorizontalComp from "./horizontal";
import DemoInlineCollapsedComp from "./inline-collapsed";
import DemoVerticalComp from "./vertical";
import DemoThemeComp from "./theme";
import DemoInlineComp from "./inline";
import DemoSiderCurrentComp from "./sider-current";
import DemoSubmenuThemeComp from "./submenu-theme";
import DemoMenuV4Comp from "./menu-v4";
import DemoHorizontalDarkComp from "./horizontal-dark";
import DemoSwitchModeComp from "./switch-mode";

const meta = {
  title: 'Base/Menu',
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<any>;


export const Demo_extraStyle: Story = {
  render: (p:any) => <DemoExtraStyleComp {...p} />
};

export const Demo_horizontal: Story = {
  render: (p:any) => <DemoHorizontalComp {...p} />
};

export const Demo_inlineCollapsed: Story = {
  render: (p:any) => <DemoInlineCollapsedComp {...p} />
};

export const Demo_vertical: Story = {
  render: (p:any) => <DemoVerticalComp {...p} />
};

export const Demo_theme: Story = {
  render: (p:any) => <DemoThemeComp {...p} />
};

export const Demo_inline: Story = {
  render: (p:any) => <DemoInlineComp {...p} />
};

export const Demo_siderCurrent: Story = {
  render: (p:any) => <DemoSiderCurrentComp {...p} />
};

export const Demo_submenuTheme: Story = {
  render: (p:any) => <DemoSubmenuThemeComp {...p} />
};

export const Demo_menuV4: Story = {
  render: (p:any) => <DemoMenuV4Comp {...p} />
};

export const Demo_horizontalDark: Story = {
  render: (p:any) => <DemoHorizontalDarkComp {...p} />
};

export const Demo_switchMode: Story = {
  render: (p:any) => <DemoSwitchModeComp {...p} />
};
