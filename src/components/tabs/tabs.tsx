import React, { ReactElement, ReactNode, useState } from 'react';
import './tabs.style.css';

export interface TabPanelProps {
  id: string;
  label: string;
  children: ReactNode;
}

export interface TabsProps {
  id: string;
  defaultTabId: string;
  children: Array<ReactElement<TabPanelProps>>;
  className?: string;
}

export const TabPanel = ({ id, children }: TabPanelProps): React.ReactElement => {
  return <div id={id}>{children}</div>;
};

export const Tabs = ({ id, defaultTabId, children, className }: TabsProps): React.ReactElement => {
  const [activeTabId, setActiveTabId] = useState<string>(defaultTabId);

  const currentTab = children.filter((child) => child.props.id === activeTabId);

  const handleClick = (id: string) => {
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
