
import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from 'antd';
import DemoCardComp from "./card";
import DemoWeekComp from "./week";
import DemoNoticeCalendarComp from "./notice-calendar";
import DemoCustomizeHeaderComp from "./customize-header";
import DemoBasicComp from "./basic";
import DemoSelectComp from "./select";

const meta = {
  title: 'Base/Calendar',
  component: Calendar,
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<any>;


export const Demo_card: Story = {
  render: (p:any) => <DemoCardComp {...p} />
};

export const Demo_week: Story = {
  render: (p:any) => <DemoWeekComp {...p} />
};

export const Demo_noticeCalendar: Story = {
  render: (p:any) => <DemoNoticeCalendarComp {...p} />
};

export const Demo_customizeHeader: Story = {
  render: (p:any) => <DemoCustomizeHeaderComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_select: Story = {
  render: (p:any) => <DemoSelectComp {...p} />
};
