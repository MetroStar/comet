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

export function ErrorMessages({ id = undefined, errors }: ErrorMessagesProps) {
  return (
    <>
      {errors.map((error, index) => {
        return (
          <span id={id} key={index} className="usa-error-message">
            {error}
          </span>
        );
      })}
    </>
  );
}

export default ErrorMessages;
