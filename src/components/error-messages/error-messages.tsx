import React from 'react';

/* eslint-disable-next-line */
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
