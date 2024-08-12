import React, { ReactNode } from 'react';

export interface HelperTextProps {
  children: ReactNode;
}

/**
 * Defines helper text for an HTML element.
 */
export const HelperText = ({ children }: HelperTextProps): React.ReactElement => {
  return <label className="usa-hint">{children}</label>;
};

export default HelperText;
