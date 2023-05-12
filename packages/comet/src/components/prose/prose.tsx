import React, { ReactNode } from 'react';
import classnames from 'classnames';

export interface ProseProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * A custom class to apply to the component
   */
  className?: string;
  /**
   * The contents of the prose
   */
  children?: ReactNode;
}

/**
 * Format a block of running text.
 */
export const Prose = ({
  id,
  className,
  children,
  ...props
}: ProseProps & JSX.IntrinsicElements['section']): React.ReactElement => {
  const classes = classnames(
    'usa-prose',
    className
  );

  return (
    <section id={id} className={classes} {...props}>
      {children}
    </section>
  );
};

export default Prose;
