
import type { Meta, StoryObj } from '@storybook/react';
import { Image } from 'antd';
import DemoNestedComp from "./nested";
import DemoPreviewGroupTopProgressComp from "./preview-group-top-progress";
import DemoPreviewSrcComp from "./previewSrc";
import DemoImageRenderComp from "./imageRender";
import DemoControlledPreviewComp from "./controlled-preview";
import DemoPreviewImgInfoComp from "./preview-imgInfo";
import DemoPlaceholderComp from "./placeholder";
import DemoToolbarRenderComp from "./toolbarRender";
import DemoPreviewMaskComp from "./preview-mask";
import DemoPreviewGroupVisibleComp from "./preview-group-visible";
import DemoBasicComp from "./basic";
import DemoFallbackComp from "./fallback";
import DemoPreviewGroupComp from "./preview-group";

const meta = {
  title: 'Base/Image',
  component: Image,
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<any>;


export const Demo_nested: Story = {
  render: (p:any) => <DemoNestedComp {...p} />
};

export const Demo_previewGroupTopProgress: Story = {
  render: (p:any) => <DemoPreviewGroupTopProgressComp {...p} />
};

export const Demo_previewSrc: Story = {
  render: (p:any) => <DemoPreviewSrcComp {...p} />
};

export const Demo_imageRender: Story = {
  render: (p:any) => <DemoImageRenderComp {...p} />
};

export const Demo_controlledPreview: Story = {
  render: (p:any) => <DemoControlledPreviewComp {...p} />
};

export const Demo_previewImgInfo: Story = {
  render: (p:any) => <DemoPreviewImgInfoComp {...p} />
};

export const Demo_placeholder: Story = {
  render: (p:any) => <DemoPlaceholderComp {...p} />
};

export const Demo_toolbarRender: Story = {
  render: (p:any) => <DemoToolbarRenderComp {...p} />
};

export const Demo_previewMask: Story = {
  render: (p:any) => <DemoPreviewMaskComp {...p} />
};

export const Demo_previewGroupVisible: Story = {
  render: (p:any) => <DemoPreviewGroupVisibleComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_fallback: Story = {
  render: (p:any) => <DemoFallbackComp {...p} />
};

export const Demo_previewGroup: Story = {
  render: (p:any) => <DemoPreviewGroupComp {...p} />
};
