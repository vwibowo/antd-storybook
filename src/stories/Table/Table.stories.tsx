
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from 'antd';
import DemoRowSelectionComp from "./row-selection";
import DemoNarrowComp from "./narrow";
import DemoEditRowComp from "./edit-row";
import DemoSizeComp from "./size";
import DemoBorderedComp from "./bordered";
import DemoExpandComp from "./expand";
import DemoAjaxComp from "./ajax";
import DemoFixedColumnsHeaderComp from "./fixed-columns-header";
import DemoFilterSearchComp from "./filter-search";
import DemoPaginationComp from "./pagination";
import DemoMultipleSorterComp from "./multiple-sorter";
import DemoHiddenColumnsComp from "./hidden-columns";
import DemoVirtualListComp from "./virtual-list";
import DemoTreeDataComp from "./tree-data";
import DemoDynamicSettingsComp from "./dynamic-settings";
import DemoFixedColumnsComp from "./fixed-columns";
import DemoFixedHeaderComp from "./fixed-header";
import DemoRowSelectionAndOperationComp from "./row-selection-and-operation";
import DemoFixedGappedColumnsComp from "./fixed-gapped-columns";
import DemoGroupingColumnsComp from "./grouping-columns";
import DemoNestedTableComp from "./nested-table";
import DemoEditCellComp from "./edit-cell";
import DemoColspanRowspanComp from "./colspan-rowspan";
import DemoResetFilterComp from "./reset-filter";
import DemoStickyComp from "./sticky";
import DemoTreeTableEllipsisComp from "./tree-table-ellipsis";
import DemoEllipsisComp from "./ellipsis";
import DemoHeadComp from "./head";
import DemoEllipsisCustomTooltipComp from "./ellipsis-custom-tooltip";
import DemoOrderColumnComp from "./order-column";
import DemoFilterInTreeComp from "./filter-in-tree";
import DemoCustomEmptyComp from "./custom-empty";
import DemoJsxComp from "./jsx";
import DemoBasicComp from "./basic";
import DemoRowSelectionCustomComp from "./row-selection-custom";
import DemoTreeTablePreserveSelectedRowKeysComp from "./tree-table-preserveSelectedRowKeys";
import DemoSummaryComp from "./summary";
import DemoResponsiveComp from "./responsive";

const meta = {
  title: 'Base/Table',
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<any>;


export const Demo_rowSelection: Story = {
  render: (p:any) => <DemoRowSelectionComp {...p} />
};

export const Demo_narrow: Story = {
  render: (p:any) => <DemoNarrowComp {...p} />
};

export const Demo_editRow: Story = {
  render: (p:any) => <DemoEditRowComp {...p} />
};

export const Demo_size: Story = {
  render: (p:any) => <DemoSizeComp {...p} />
};

export const Demo_bordered: Story = {
  render: (p:any) => <DemoBorderedComp {...p} />
};

export const Demo_expand: Story = {
  render: (p:any) => <DemoExpandComp {...p} />
};

export const Demo_ajax: Story = {
  render: (p:any) => <DemoAjaxComp {...p} />
};

export const Demo_fixedColumnsHeader: Story = {
  render: (p:any) => <DemoFixedColumnsHeaderComp {...p} />
};

export const Demo_filterSearch: Story = {
  render: (p:any) => <DemoFilterSearchComp {...p} />
};

export const Demo_pagination: Story = {
  render: (p:any) => <DemoPaginationComp {...p} />
};

export const Demo_multipleSorter: Story = {
  render: (p:any) => <DemoMultipleSorterComp {...p} />
};

export const Demo_hiddenColumns: Story = {
  render: (p:any) => <DemoHiddenColumnsComp {...p} />
};

export const Demo_virtualList: Story = {
  render: (p:any) => <DemoVirtualListComp {...p} />
};

export const Demo_treeData: Story = {
  render: (p:any) => <DemoTreeDataComp {...p} />
};

export const Demo_dynamicSettings: Story = {
  render: (p:any) => <DemoDynamicSettingsComp {...p} />
};

export const Demo_fixedColumns: Story = {
  render: (p:any) => <DemoFixedColumnsComp {...p} />
};

export const Demo_fixedHeader: Story = {
  render: (p:any) => <DemoFixedHeaderComp {...p} />
};

export const Demo_rowSelectionAndOperation: Story = {
  render: (p:any) => <DemoRowSelectionAndOperationComp {...p} />
};

export const Demo_fixedGappedColumns: Story = {
  render: (p:any) => <DemoFixedGappedColumnsComp {...p} />
};

export const Demo_groupingColumns: Story = {
  render: (p:any) => <DemoGroupingColumnsComp {...p} />
};

export const Demo_nestedTable: Story = {
  render: (p:any) => <DemoNestedTableComp {...p} />
};

export const Demo_editCell: Story = {
  render: (p:any) => <DemoEditCellComp {...p} />
};

export const Demo_colspanRowspan: Story = {
  render: (p:any) => <DemoColspanRowspanComp {...p} />
};

export const Demo_resetFilter: Story = {
  render: (p:any) => <DemoResetFilterComp {...p} />
};

export const Demo_sticky: Story = {
  render: (p:any) => <DemoStickyComp {...p} />
};

export const Demo_treeTableEllipsis: Story = {
  render: (p:any) => <DemoTreeTableEllipsisComp {...p} />
};

export const Demo_ellipsis: Story = {
  render: (p:any) => <DemoEllipsisComp {...p} />
};

export const Demo_head: Story = {
  render: (p:any) => <DemoHeadComp {...p} />
};

export const Demo_ellipsisCustomTooltip: Story = {
  render: (p:any) => <DemoEllipsisCustomTooltipComp {...p} />
};

export const Demo_orderColumn: Story = {
  render: (p:any) => <DemoOrderColumnComp {...p} />
};

export const Demo_filterInTree: Story = {
  render: (p:any) => <DemoFilterInTreeComp {...p} />
};

export const Demo_customEmpty: Story = {
  render: (p:any) => <DemoCustomEmptyComp {...p} />
};

export const Demo_jsx: Story = {
  render: (p:any) => <DemoJsxComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_rowSelectionCustom: Story = {
  render: (p:any) => <DemoRowSelectionCustomComp {...p} />
};

export const Demo_treeTablePreserveSelectedRowKeys: Story = {
  render: (p:any) => <DemoTreeTablePreserveSelectedRowKeysComp {...p} />
};

export const Demo_summary: Story = {
  render: (p:any) => <DemoSummaryComp {...p} />
};

export const Demo_responsive: Story = {
  render: (p:any) => <DemoResponsiveComp {...p} />
};
