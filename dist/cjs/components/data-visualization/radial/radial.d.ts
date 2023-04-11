import React from 'react';
import ChartProps from '../chart/chart';
export interface RadialProps {
    /**
     * An object providing chart specific attributes
     */
    chart: ChartProps;
    /**
     * An string array of color values used to colorize chart sections
     */
    color?: string;
    /**
     * An number array of labels for the chart
     */
    ticks?: number[];
    /**
     * An array of data values
     */
    data: number[];
}
/**
 * Renders a single axis polar axis chart with fill.
 */
declare const Radial: React.FC<RadialProps>;
export default Radial;
