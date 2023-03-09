import React, { ReactNode, useLayoutEffect, useRef } from 'react';
import tooltip from '@uswds/uswds/js/usa-tooltip';

/* eslint-disable-next-line */
export interface TooltipProps {
  /**
   * The unique identifier for this component
   */
  id: string;
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
  id,
  label, 
  position = 'top', 
  children, 
}: TooltipProps) {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  useLayoutEffect(() => {
    const tooltipElement = tooltipRef.current;
    tooltip.on(tooltipElement);
    return () => tooltip.off(tooltipElement);
  });

  return (
    <span ref={tooltipRef} id={id}>
      <span className="usa-tooltip" title={label} data-position={position}>
        {children}
      </span>
    </span>
  );
}

export default Tooltip;
