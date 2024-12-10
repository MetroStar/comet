import React, { JSX, useEffect, useRef } from 'react';
import classNames from 'classnames';
import characterCount from '@uswds/uswds/js/usa-character-count';

export const CharacterCountContainer = ({
  className,
  ...divProps
}: JSX.IntrinsicElements['div']): React.ReactElement => {
  const ref = useRef(null);
  useEffect(() => {
    const characterCountContainerElement = ref.current;
    characterCount.on(characterCountContainerElement);
    return () => characterCount.off(characterCountContainerElement);
  });
  return (
    <div ref={ref} className={classNames('usa-character-count', className)} {...divProps}>
      {divProps.children}
    </div>
  );
};

export interface CharacterCountProps {
  /**
   * The unique identifier for the character count span
   */
  id: string;
}

/**
 * Character count helps users know how much text they can enter when there is a limit on the number of characters.
 */
export const CharacterCount = ({
  id,
  ...spanProps
}: CharacterCountProps & JSX.IntrinsicElements['span']): React.ReactElement => {
  return (
    <span
      id={id}
      className={classNames('usa-hint', 'usa-character-count__message', spanProps.className)}
      aria-live="polite"
    >
      {spanProps.children}
    </span>
  );
};

export default CharacterCount;
