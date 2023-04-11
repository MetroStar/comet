import React from 'react';
import { VictoryBarAlignmentType } from 'victory';
import ChartProps from '../chart/chart';
export interface BarGraphProps {
    /**
     * An object providing chart specific attributes
     */
    chart: ChartProps;
    /**
     * An string value used to colorize chart sections
     */
    color?: string;
    /**
     * A string value indicating how to justify chart data
     */
    alignment?: VictoryBarAlignmentType;
    /**
     * A number value indicating the width ratio of the bar to display
     */
    barRatio?: number;
    /**
     * An array of data values
     */
    data: number[];
}
/**
 * Renders a dataset as series of bars.
 */
declare const BarGraph: React.FC<BarGraphProps>;
export default BarGraph;
