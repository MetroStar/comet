import classNames from 'classnames';
import React, { ReactNode } from 'react';

export interface TagProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The children of the tag
   */
  children: ReactNode;
  /**
   * The size of the tag
   */
  size?: 'Default' | 'Big';
  /**
   * Any additional CSS classes will be added to the tag
   */
  className?: string;
}

const TagSize = {
  Default: 'Default',
  Big: 'Big',
};

export function Tag({ id, children, size = 'Default', className }: TagProps) {
  const classes = classNames(
    'usa-tag',
    {
      'usa-tag--big': size === 'Big',
    },
    className,
  );

  return (
    <span id={id} className={classes}>
      {children}
    </span>
  );
}

export default Tag;
