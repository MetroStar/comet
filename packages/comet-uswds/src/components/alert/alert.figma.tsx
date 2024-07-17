import React from 'react';
import { Alert } from './alert';
import figma from '@figma/code-connect';

figma.connect(
  Alert,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=24-2717&t=YGEQPiJRGoTsakBD-4',
  {
    props: {
      type: figma.enum('State', {
        Info: 'info',
        Warning: 'warning',
        Error: 'error',
        Success: 'success',
      }),
      slim: figma.enum('Variant', {
        Slim: true,
      }),
      noIcon: figma.enum('Variant', {
        'No icon': true,
      }),
    },
    example: ({ type, slim, noIcon }) => (
      <Alert id="alert" type={type} slim={slim} noIcon={noIcon}>
        This is the body of the alert
      </Alert>
    ),
  },
);
