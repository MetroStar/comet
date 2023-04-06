/// <reference types="react" />
export interface FileInputProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The name for the file input field
     */
    name: string;
}
export declare function FileInput(inputProps: FileInputProps & JSX.IntrinsicElements["input"]): JSX.Element;
export default FileInput;
