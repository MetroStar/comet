/// <reference types="react" />
export interface FormProps {
    /**
     * Whether to render a large form
     */
    isLarge?: boolean;
}
export declare function Form({ isLarge, className, children, ...formProps }: FormProps & JSX.IntrinsicElements["form"]): JSX.Element;
export default Form;
