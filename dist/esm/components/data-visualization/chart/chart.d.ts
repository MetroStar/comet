import React from 'react';
import { ForAxes, DomainTuple } from 'victory';
declare type EventHandler = () => void;
interface ChartProps {
    height?: number;
    width?: number;
    domain?: ForAxes<DomainTuple>;
    horizontal?: boolean;
    polar?: boolean;
    style?: {
        [attribute: string]: any;
    };
    backgroundComponent?: React.ReactElement;
    eventHandlers?: {
        [eventName: string]: EventHandler;
    };
    children?: React.ReactElement | React.ReactElement[];
}
export default ChartProps;
