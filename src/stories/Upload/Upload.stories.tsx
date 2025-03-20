
import type { Meta, StoryObj } from '@storybook/react';
import { Upload } from 'antd';
import DemoPreviewFileComp from "./preview-file";
import DemoTransformFileComp from "./transform-file";
import DemoUploadCustomActionIconComp from "./upload-custom-action-icon";
import DemoPictureCardComp from "./picture-card";
import DemoDragComp from "./drag";
import DemoPictureStyleComp from "./picture-style";
import DemoUploadManuallyComp from "./upload-manually";
import DemoDirectoryComp from "./directory";
import DemoUploadWithAliyunOssComp from "./upload-with-aliyun-oss";
import DemoDefaultFileListComp from "./defaultFileList";
import DemoFileListComp from "./fileList";
import DemoAvatarComp from "./avatar";
import DemoUploadPngOnlyComp from "./upload-png-only";
import DemoFileTypeComp from "./file-type";
import DemoBasicComp from "./basic";
import DemoPictureCircleComp from "./picture-circle";
import DemoCustomizeProgressBarComp from "./customize-progress-bar";
import DemoMaxCountComp from "./max-count";

const meta = {
  title: 'Base/Upload',
  component: Upload,
} satisfies Meta<typeof Upload>;

export default meta;
type Story = StoryObj<any>;


export const Demo_previewFile: Story = {
  render: (p:any) => <DemoPreviewFileComp {...p} />
};

export const Demo_transformFile: Story = {
  render: (p:any) => <DemoTransformFileComp {...p} />
};

export const Demo_uploadCustomActionIcon: Story = {
  render: (p:any) => <DemoUploadCustomActionIconComp {...p} />
};

export const Demo_pictureCard: Story = {
  render: (p:any) => <DemoPictureCardComp {...p} />
};

export const Demo_drag: Story = {
  render: (p:any) => <DemoDragComp {...p} />
};

export const Demo_pictureStyle: Story = {
  render: (p:any) => <DemoPictureStyleComp {...p} />
};

export const Demo_uploadManually: Story = {
  render: (p:any) => <DemoUploadManuallyComp {...p} />
};

export const Demo_directory: Story = {
  render: (p:any) => <DemoDirectoryComp {...p} />
};

export const Demo_uploadWithAliyunOss: Story = {
  render: (p:any) => <DemoUploadWithAliyunOssComp {...p} />
};

export const Demo_defaultFileList: Story = {
  render: (p:any) => <DemoDefaultFileListComp {...p} />
};

export const Demo_fileList: Story = {
  render: (p:any) => <DemoFileListComp {...p} />
};

export const Demo_avatar: Story = {
  render: (p:any) => <DemoAvatarComp {...p} />
};

export const Demo_uploadPngOnly: Story = {
  render: (p:any) => <DemoUploadPngOnlyComp {...p} />
};

export const Demo_fileType: Story = {
  render: (p:any) => <DemoFileTypeComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_pictureCircle: Story = {
  render: (p:any) => <DemoPictureCircleComp {...p} />
};

export const Demo_customizeProgressBar: Story = {
  render: (p:any) => <DemoCustomizeProgressBarComp {...p} />
};

export const Demo_maxCount: Story = {
  render: (p:any) => <DemoMaxCountComp {...p} />
};
