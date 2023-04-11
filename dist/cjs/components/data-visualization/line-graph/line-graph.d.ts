import React from 'react';
import ChartProps from '../chart/chart';
export interface LineGraphProps {
    /**
     * An object providing chart specific attributes
     */
    chart: ChartProps;
    /**
     * An string array of color values used to colorize chart sections
     */
    colors?: string[];
    /**
     * Whether or not to display smooth chart lines
     */
    smooth?: boolean;
    /**
     * An array of data points
     */
    data: Array<Array<{
        x: number;
        y: number;
    }>>;
}
/**
 * Renders a dataset as a single line path.
 */
declare const LineGraph: React.FC<LineGraphProps>;
export default LineGraph;
