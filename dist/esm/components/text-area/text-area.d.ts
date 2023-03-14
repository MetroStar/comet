import { ChangeEventHandler } from "react";
export interface TextAreaProps {
    /**
     * The unique identifier for the textarea
     */
    id: string;
    /**
     * The name of the textarea
     */
    name: string;
    /**
     * The number of rows to render for the textarea
     */
    rows?: number;
    /**
     * Event handler for when value of textarea is changes
     */
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}
export declare function TextArea({ id, name, rows, className, onChange, ...textAreaProps }: TextAreaProps & JSX.IntrinsicElements["textarea"]): JSX.Element;
export default TextArea;
