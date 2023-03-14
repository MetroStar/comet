/// <reference types="react" />
export declare function CharacterCountContainer({ className, ...divProps }: JSX.IntrinsicElements["div"]): JSX.Element;
export interface CharacterCountProps {
    /**
     * The unique identifier for the character count span
     */
    id: string;
}
export declare function CharacterCount({ id, ...spanProps }: CharacterCountProps & JSX.IntrinsicElements["span"]): JSX.Element;
export default CharacterCount;
