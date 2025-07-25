import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Tabs, { TabPanel } from './tabs';

describe('Tabs', () => {
  test('should render a tabs component successfully', () => {
    const { baseElement } = render(
      <Tabs id="UNIT TEST" defaultTabId="1">
        <TabPanel id="1" label="UNIT TEST 1">
          UNIT TEST 1
        </TabPanel>
        <TabPanel id="2" label="UNIT TEST 2">
          UNIT TEST 2
        </TabPanel>
      </Tabs>,
    );

    expect(baseElement).toBeTruthy();
  });

  test('should have correct class for active tab', () => {
    const { baseElement } = render(
      <Tabs id="UNIT TEST" defaultTabId="1">
        <TabPanel id="1" label="UNIT TEST LABEL 1">
          UNIT TEST 1
        </TabPanel>
        <TabPanel id="2" label="UNIT TEST LABEL 2">
          UNIT TEST 2
        </TabPanel>
      </Tabs>,
    );

    const firstTabElement = baseElement.querySelector('button');
    expect(firstTabElement?.classList.length).toBe(2);
  });

  test('should have correct class for inactive tab', () => {
    const { baseElement } = render(
      <Tabs id="UNIT TEST" defaultTabId="2">
        <TabPanel id="1" label="UNIT TEST 1">
          UNIT TEST 1
        </TabPanel>
        <TabPanel id="2" label="UNIT TEST 2">
          UNIT TEST 2
        </TabPanel>
      </Tabs>,
    );

    const firstTabElement = baseElement.querySelector('button');
    expect(firstTabElement?.classList.length).toBe(1);
  });

  test('should contain correct class name when provided as a prop', () => {
    const { baseElement } = render(
      <Tabs id="UNIT TEST" defaultTabId="1" className="UNIT-TEST-CLASS">
        <TabPanel id="1" label="UNIT TEST LABEL 1">
          UNIT TEST 1
        </TabPanel>
        <TabPanel id="2" label="UNIT TEST LABEL 2">
          UNIT TEST 2
        </TabPanel>
      </Tabs>,
    );

    const tabsElement = baseElement.querySelector('.UNIT-TEST-CLASS');
    expect(tabsElement).toBeTruthy();
  });

  test('should apply correct class names when user clicks on a tab', () => {
    render(
      <Tabs id="UNIT TEST" defaultTabId="2">
        <TabPanel id="1" label="UNIT TEST LABEL 1">
          UNIT TEST 1
        </TabPanel>
        <TabPanel id="2" label="UNIT TEST LABEL 2">
          UNIT TEST 2
        </TabPanel>
      </Tabs>,
    );

    let tabsElement = screen.getByText('UNIT TEST LABEL 1');
    fireEvent.click(tabsElement);

    tabsElement = screen.getByText('UNIT TEST LABEL 1');
    expect(tabsElement.classList.length).toBe(2);
  });
});
