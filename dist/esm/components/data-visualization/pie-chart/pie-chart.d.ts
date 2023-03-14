import React from "react";
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
declare const PieChart: React.FC<PieChartProps>;
export default PieChart;
