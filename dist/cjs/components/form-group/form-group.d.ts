import { ReactNode } from "react";
export interface FormGroupProps {
    /**
     * The unique identifier for this component
     */
    id?: string;
    /**
     * An array of string error messages
     */
    errors?: string[];
    /**
     * Additional class name for the form group
     */
    className?: string;
    /**
     * The contents of the form group
     */
    children: ReactNode;
}
export declare function FormGroup({ id, errors, className, children, }: FormGroupProps): JSX.Element;
export default FormGroup;
