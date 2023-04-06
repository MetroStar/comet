import { ReactNode } from "react";
export interface LabelProps {
    /**
     * The HTML element that this is labeling
     */
    htmlFor?: string;
    /**
     * A boolean indicating whether or not the field is required
     */
    required?: boolean;
    /**
     * The contents of the label
     */
    children: ReactNode;
}
export declare function Label({ htmlFor, required, children, ...labelProps }: LabelProps & JSX.IntrinsicElements["label"]): JSX.Element;
export default Label;
