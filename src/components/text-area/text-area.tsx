import classNames from 'classnames';
import React, { ChangeEventHandler } from 'react';

/* eslint-disable-next-line */
export interface TextAreaProps {
  /**
   * The unique identifier for the textarea
   */
  id: string;
  /**
   * The name of the textarea
   */
  name: string;
  /**
   * The number of rows to render for the textarea
   */
  rows?: number;
  /**
   * Event handler for when value of textarea is changes
   */
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

export function TextArea({
  id,
  name,
  rows,
  className,
  onChange,
  ...textAreaProps
}: TextAreaProps & JSX.IntrinsicElements['textarea']) {
  return (
    <textarea
      className={classNames('usa-textarea', className)}
      style={rows === undefined ? undefined : { height: 'unset' }}
      id={id}
      name={name}
      rows={rows}
      onChange={onChange}
      {...textAreaProps}
    />
  );
}

export default TextArea;
