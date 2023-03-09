import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import characterCount from "@uswds/uswds/js/usa-character-count";

export function CharacterCountContainer({
  className,
  ...divProps
}: JSX.IntrinsicElements["div"]) {
  const ref = useRef(null);
  useEffect(() => {
    const characterCountContainerElement = ref.current;
    characterCount.on(characterCountContainerElement);
    return () => characterCount.off(characterCountContainerElement);
  });
  return (
    <div
      ref={ref}
      className={classNames("usa-character-count", className)}
      {...divProps}
    >
      {divProps.children}
    </div>
  );
}

export interface CharacterCountProps {
  /**
   * The unique identifier for the character count span
   */
  id: string;
}

export function CharacterCount({
  id,
  ...spanProps
}: CharacterCountProps & JSX.IntrinsicElements["span"]) {
  return (
    <span
      id={id}
      className={classNames(
        "usa-hint",
        "usa-character-count__message",
        spanProps.className
      )}
      aria-live="polite"
    >
      {spanProps.children}
    </span>
  );
}

export default CharacterCount;
