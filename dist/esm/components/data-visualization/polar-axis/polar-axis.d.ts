import React from 'react';
import ChartProps from '../chart/chart';
export interface PolarAxisProps {
    /**
     * An object providing chart specific attributes
     */
    chart: ChartProps;
    /**
     * An string array of color values used to colorize chart sections
     */
    colors?: string[];
    /**
     * An number array of labels for the chart
     */
    ticks?: number[];
    /**
     * An array of data points
     */
    data: Array<Array<{
        x: number;
        y: number;
    }>>;
}
/**
 * Renders a single polar axis chart.
 */
declare const PolarAxis: React.FC<PolarAxisProps>;
export default PolarAxis;
