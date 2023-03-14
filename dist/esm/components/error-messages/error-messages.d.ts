/// <reference types="react" />
export interface ErrorMessagesProps {
    /**
     * The unique identifier for this component
     */
    id?: string;
    /**
     * An array of error strings to display
     */
    errors: string[];
}
export declare function ErrorMessages({ id, errors }: ErrorMessagesProps): JSX.Element;
export default ErrorMessages;
