import classNames from 'classnames';
import { JSX } from 'react';

export interface FormProps {
  /**
   * The unique identifier for the dropdown
   */
  id: string;
  /**
   * Whether to render a large form
   */
  isLarge?: boolean;
}

/**
 * A form allows users to enter information into a page.
 */
export const Form = ({
  id,
  isLarge = false,
  className,
  children,
  ...formProps
}: FormProps & JSX.IntrinsicElements['form']): React.ReactElement => {
  return (
    <form
      id={id}
      className={classNames('usa-form', { 'usa-form--large': isLarge }, className)}
      {...formProps}
    >
      {children}
    </form>
  );
};

export default Form;
