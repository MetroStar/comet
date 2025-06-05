import React from 'react';
import { Meta } from '@storybook/react-vite';
import Tabs, { TabPanel, TabsProps } from './tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Extras/Tabs',
  component: Tabs,
};
export default meta;

export const Default = {
  args: {
    id: 'tab1',
    defaultTabId: 'tabPanel1',
  },
  render: (args: TabsProps) => (
    <Tabs {...args}>
      <TabPanel id="tabPanel1" label="Tab 1">
        <p>Content of Tab 1</p>
      </TabPanel>
      <TabPanel id="tabPanel2" label="Tab 2">
        <p>Content of Tab 2</p>
      </TabPanel>
      <TabPanel id="tabPanel3" label="Tab 3">
        <p>Content of Tab 3</p>
      </TabPanel>
    </Tabs>
  ),
};
