import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tabs, { TabPanel, TabsProps } from './tabs';

const meta: ComponentMeta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
};
export default meta;

const Template: ComponentStory<typeof Tabs> = (args: TabsProps) => (
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
