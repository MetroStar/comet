import React from 'react';
import { Accordion, AccordionItem } from './accordion';
import figma from '@figma/code-connect';

figma.connect(
  Accordion,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=19-222',
  {
    props: {
      expanded: figma.enum('State', {
        Default: false,
        Hover: false,
        Selected: true,
      }),
    },
    example: ({ expanded }) => (
      <Accordion id="accordion">
        <AccordionItem id="item-1" label="Accordion heading" expanded={expanded}>
          Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor
          risus. Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget
          consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo
          eget malesuada.
        </AccordionItem>
      </Accordion>
    ),
  },
);
