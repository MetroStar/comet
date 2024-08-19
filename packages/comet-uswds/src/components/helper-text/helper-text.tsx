import React, { ReactNode } from 'react';

export interface HelperTextProps {
  /**
   * The unique identifier for this component
   */
  id?: string;
  /**
   * The contents of the helper text
   */
  children: ReactNode;
}

/**
 * Defines helper text for an HTML element.
 */
export const HelperText = ({ id, children }: HelperTextProps): React.ReactElement => {
  return (
    <span id={id} className="usa-hint">
      {children}
    </span>
  );
};

export default HelperText;
