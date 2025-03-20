
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from 'antd';
import DemoPositionComp from "./position";
import DemoDarkComp from "./dark";
import DemoNestedComp from "./nested";
import DemoWidthComp from "./width";
import DemoHooksComp from "./hooks";
import DemoConfirmRouterComp from "./confirm-router";
import DemoAsyncComp from "./async";
import DemoWireframeComp from "./wireframe";
import DemoFooterComp from "./footer";
import DemoManualComp from "./manual";
import DemoRenderPanelComp from "./render-panel";
import DemoClassNamesComp from "./classNames";
import DemoFooterRenderComp from "./footer-render";
import DemoConfirmComp from "./confirm";
import DemoLoadingComp from "./loading";
import DemoBasicComp from "./basic";
import DemoLocaleComp from "./locale";
import DemoStaticInfoComp from "./static-info";
import DemoButtonPropsComp from "./button-props";
import DemoCustomMousePositionComp from "./custom-mouse-position";

const meta = {
  title: 'Base/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<any>;


export const Demo_position: Story = {
  render: (p:any) => <DemoPositionComp {...p} />
};

export const Demo_dark: Story = {
  render: (p:any) => <DemoDarkComp {...p} />
};

export const Demo_nested: Story = {
  render: (p:any) => <DemoNestedComp {...p} />
};

export const Demo_width: Story = {
  render: (p:any) => <DemoWidthComp {...p} />
};

export const Demo_hooks: Story = {
  render: (p:any) => <DemoHooksComp {...p} />
};

export const Demo_confirmRouter: Story = {
  render: (p:any) => <DemoConfirmRouterComp {...p} />
};

export const Demo_async: Story = {
  render: (p:any) => <DemoAsyncComp {...p} />
};

export const Demo_wireframe: Story = {
  render: (p:any) => <DemoWireframeComp {...p} />
};

export const Demo_footer: Story = {
  render: (p:any) => <DemoFooterComp {...p} />
};

export const Demo_manual: Story = {
  render: (p:any) => <DemoManualComp {...p} />
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <DemoRenderPanelComp {...p} />
};

export const Demo_classNames: Story = {
  render: (p:any) => <DemoClassNamesComp {...p} />
};

export const Demo_footerRender: Story = {
  render: (p:any) => <DemoFooterRenderComp {...p} />
};

export const Demo_confirm: Story = {
  render: (p:any) => <DemoConfirmComp {...p} />
};

export const Demo_loading: Story = {
  render: (p:any) => <DemoLoadingComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_locale: Story = {
  render: (p:any) => <DemoLocaleComp {...p} />
};

export const Demo_staticInfo: Story = {
  render: (p:any) => <DemoStaticInfoComp {...p} />
};

export const Demo_buttonProps: Story = {
  render: (p:any) => <DemoButtonPropsComp {...p} />
};

export const Demo_customMousePosition: Story = {
  render: (p:any) => <DemoCustomMousePositionComp {...p} />
};
