import React from 'react';
export declare const CharacterCountContainer: ({ className, ...divProps }: JSX.IntrinsicElements['div']) => React.ReactElement;
export interface CharacterCountProps {
    /**
     * The unique identifier for the character count span
     */
    id: string;
}
/**
 * Character count helps users know how much text they can enter when there is a limit on the number of characters.
 */
export declare const CharacterCount: ({ id, ...spanProps }: CharacterCountProps & JSX.IntrinsicElements['span']) => React.ReactElement;
export default CharacterCount;
