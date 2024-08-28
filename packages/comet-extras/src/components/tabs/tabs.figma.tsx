import { Tabs, TabPanel } from './tabs';
import figma from '@figma/code-connect';

figma.connect(
  Tabs,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=597-11381',
  {
    props: {},
    example: () => (
      <Tabs id="tabs" defaultTabId="tabPanel1">
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
  },
);
