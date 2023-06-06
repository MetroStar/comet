import React, { ReactNode } from 'react';
import classnames from 'classnames';

export interface ListItem {
  id: string;
  value: ReactNode;
}

export interface ListProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The type of list to display
   */
  type?: 'ordered' | 'unordered';
  /**
   * The style variant of list to display
   */
  variant?: 'default' | 'unstyled';
  /**
   * A custom class to apply to the component
   */
  className?: string;
  /**
   * The list of items to display
   */
  items: ListItem[];
}

/**
 * A list organizes information into discrete sequential sections.
 */
export const List = ({
  id,
  type = 'unordered',
  variant = 'default',
  className,
  items,
  ...listProps
}: ListProps): React.ReactElement => {
  const classes = classnames(
    'usa-list',
    {
      'usa-list--unstyled': variant === 'unstyled',
    },
    className,
  );

  const getChildren = (items: ListItem[]): React.ReactNode =>
    items.map((item) => {
      return (
        <li id={item.id} key={item.id}>
          {item.value}
        </li>
      );
    });

  return type === 'unordered' ? (
    <ul id={id} className={classes} {...listProps}>
      {getChildren(items)}
    </ul>
  ) : (
    <ol id={id} className={classes} {...listProps}>
      {getChildren(items)}
    </ol>
  );
};

export default List;
