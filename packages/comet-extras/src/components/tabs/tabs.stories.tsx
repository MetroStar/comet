import React from 'react';
import { Meta, StoryFn } from '@storybook/react-vite';
import Tabs, { TabPanel, TabsProps } from './tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Extras/Tabs',
  component: Tabs,
};
export default meta;

const Template: StoryFn<typeof Tabs> = (args: TabsProps) => (
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
);

export const Default = Template.bind({});
Default.args = {
  id: 'tab1',
  defaultTabId: 'tabPanel1',
};
