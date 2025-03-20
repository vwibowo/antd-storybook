
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from 'antd';
import DemoSizeComp from "./size";
import DemoBigDataComp from "./big-data";
import DemoCustomTagRenderComp from "./custom-tag-render";
import DemoSearchFilterOptionComp from "./search-filter-option";
import DemoSelectUsersComp from "./select-users";
import DemoCustomLabelRenderComp from "./custom-label-render";
import DemoSearchComp from "./search";
import DemoVariantComp from "./variant";
import DemoHideSelectedComp from "./hide-selected";
import DemoOptgroupComp from "./optgroup";
import DemoSearchSortComp from "./search-sort";
import DemoSearchBoxComp from "./search-box";
import DemoMaxCountComp from "./maxCount";
import DemoOptionLabelCenterComp from "./option-label-center";
import DemoTagsComp from "./tags";
import DemoCoordinateComp from "./coordinate";
import DemoRenderPanelComp from "./render-panel";
import DemoPlacementComp from "./placement";
import DemoMultipleComp from "./multiple";
import DemoStatusComp from "./status";
import DemoSuffixComp from "./suffix";
import DemoAutomaticTokenizationComp from "./automatic-tokenization";
import DemoBasicComp from "./basic";
import DemoLabelInValueComp from "./label-in-value";
import DemoOptionRenderComp from "./option-render";
import DemoCustomDropdownMenuComp from "./custom-dropdown-menu";
import DemoResponsiveComp from "./responsive";

const meta = {
  title: 'Base/Select',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<any>;


export const Demo_size: Story = {
  render: (p:any) => <DemoSizeComp {...p} />
};

export const Demo_bigData: Story = {
  render: (p:any) => <DemoBigDataComp {...p} />
};

export const Demo_customTagRender: Story = {
  render: (p:any) => <DemoCustomTagRenderComp {...p} />
};

export const Demo_searchFilterOption: Story = {
  render: (p:any) => <DemoSearchFilterOptionComp {...p} />
};

export const Demo_selectUsers: Story = {
  render: (p:any) => <DemoSelectUsersComp {...p} />
};

export const Demo_customLabelRender: Story = {
  render: (p:any) => <DemoCustomLabelRenderComp {...p} />
};

export const Demo_search: Story = {
  render: (p:any) => <DemoSearchComp {...p} />
};

export const Demo_variant: Story = {
  render: (p:any) => <DemoVariantComp {...p} />
};

export const Demo_hideSelected: Story = {
  render: (p:any) => <DemoHideSelectedComp {...p} />
};

export const Demo_optgroup: Story = {
  render: (p:any) => <DemoOptgroupComp {...p} />
};

export const Demo_searchSort: Story = {
  render: (p:any) => <DemoSearchSortComp {...p} />
};

export const Demo_searchBox: Story = {
  render: (p:any) => <DemoSearchBoxComp {...p} />
};

export const Demo_maxCount: Story = {
  render: (p:any) => <DemoMaxCountComp {...p} />
};

export const Demo_optionLabelCenter: Story = {
  render: (p:any) => <DemoOptionLabelCenterComp {...p} />
};

export const Demo_tags: Story = {
  render: (p:any) => <DemoTagsComp {...p} />
};

export const Demo_coordinate: Story = {
  render: (p:any) => <DemoCoordinateComp {...p} />
};

export const Demo_renderPanel: Story = {
  render: (p:any) => <DemoRenderPanelComp {...p} />
};

export const Demo_placement: Story = {
  render: (p:any) => <DemoPlacementComp {...p} />
};

export const Demo_multiple: Story = {
  render: (p:any) => <DemoMultipleComp {...p} />
};

export const Demo_status: Story = {
  render: (p:any) => <DemoStatusComp {...p} />
};

export const Demo_suffix: Story = {
  render: (p:any) => <DemoSuffixComp {...p} />
};

export const Demo_automaticTokenization: Story = {
  render: (p:any) => <DemoAutomaticTokenizationComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_labelInValue: Story = {
  render: (p:any) => <DemoLabelInValueComp {...p} />
};

export const Demo_optionRender: Story = {
  render: (p:any) => <DemoOptionRenderComp {...p} />
};

export const Demo_customDropdownMenu: Story = {
  render: (p:any) => <DemoCustomDropdownMenuComp {...p} />
};

export const Demo_responsive: Story = {
  render: (p:any) => <DemoResponsiveComp {...p} />
};
