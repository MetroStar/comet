import React, { ReactElement, ReactNode, useState } from 'react';
import './tabs.style.css';

export interface TabPanelProps {
  /**
   * The unique identifier for the tab panel
   */
  id: string;
  /**
   * The label value for the tab panel
   */
  label: string;
  /**
   * The contents of the button
   */
  children: ReactNode;
}

export interface TabsProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The id of a tab panel to show by default
   */
  defaultTabId: string;
  /**
   * An array of child tab panels
   */
  children: Array<ReactElement<TabPanelProps>>;
  /**
   * A custom class to apply to the component
   */
  className?: string;
}

export const TabPanel = ({ id, children }: TabPanelProps): React.ReactElement => {
  return <div id={id}>{children}</div>;
};

/**
 * Used to organize and allow navigation between groups of content.
 */
export const Tabs = ({ id, defaultTabId, children, className }: TabsProps): React.ReactElement => {
  const [activeTabId, setActiveTabId] = useState<string>(defaultTabId);

  const currentTab = children.filter((child) => child.props.id === activeTabId);

  const handleClick = (id: string): void => {
    setActiveTabId(id);
  };

  return (
    <div id={id} className={`tabs ${className}`}>
      <ul>
        {children.map((child) => (
          <li key={`tab-${child.props.id}`}>
            <button
              onClick={() => handleClick(child.props.id)}
              className={`text-base-dark ${child.props.id === activeTabId ? 'tabs-active' : ''}`}
            >
              {child.props.label}
            </button>
          </li>
        ))}
      </ul>
      <TabPanel {...currentTab[0]?.props} />
    </div>
  );
};

export default Tabs;
