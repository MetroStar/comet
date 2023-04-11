import React from 'react';
export interface PieChartProps {
    colors?: string[];
    angle?: {
        start: number;
        end: number;
    };
    data: Array<{
        x: string;
        y: number;
    }>;
}
/**
 * Renders a dataset as a pie chart.
 */
declare const PieChart: React.FC<PieChartProps>;
export default PieChart;
