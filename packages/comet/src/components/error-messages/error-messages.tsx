import React from 'react';

export interface ErrorMessagesProps {
  /**
   * The unique identifier for this component
   */
  id?: string;
  /**
   * An array of error strings to display
   */
  errors: string[];
}

/**
 * Outputs a list of error messages as HTML.
 */
export const ErrorMessages = ({
  id = undefined,
  errors,
}: ErrorMessagesProps): React.ReactElement => {
  return (
    <>
      {errors.map((error, index) => {
        return (
          <span id={`${id}-${index}`} key={index} className="usa-error-message">
            {error}
          </span>
        );
      })}
    </>
  );
};

export default ErrorMessages;
