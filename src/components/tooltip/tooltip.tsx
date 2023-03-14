import React, { ReactNode, useLayoutEffect, useRef } from 'react';
import tooltip from '@uswds/uswds/js/usa-tooltip';

/* eslint-disable-next-line */
export interface TooltipProps {
  /**
   * The text value to display in the tooltip
   */
  label: string;
  /**
   * Where the tooltip will display in reference to its child
   */
  position?: 'top' | 'right' | 'bottom' | 'left';
  /**
   * The contents of the tooltip
   */
  children: ReactNode;
}

export function Tooltip({ 
  label,
  position = "top", 
  children,
 }: TooltipProps) {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  useLayoutEffect(() => {
    const tooltipElement = tooltipRef.current?.firstChild as HTMLElement;
    if (tooltipElement) {
      tooltipElement.classList.add("usa-tooltip");
      tooltipElement.title = label;
      tooltipElement.setAttribute("data-position", position);
      tooltip.on(tooltipElement);
    }
    return () => tooltip.off(tooltipElement);
  });
  return <span ref={tooltipRef}>{children}</span>;
};

export default Tooltip;