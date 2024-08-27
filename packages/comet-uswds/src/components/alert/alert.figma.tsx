import { Alert } from './alert';
import figma from '@figma/code-connect';

figma.connect(
  Alert,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=523-6274',
  {
    props: {
      heading: figma.boolean('Heading?', {
        true: figma.string('Heading'),
        false: undefined,
      }),
      body: figma.boolean('Description?', {
        true: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus.',
        false: undefined,
      }),
      type: figma.enum('Type', {
        Informational: 'info',
        Warning: 'warning',
        Success: 'success',
        Error: 'error',
        Emergency: 'emergency',
      }),
      slim: figma.boolean('Slim?'),
      noIcon: figma.boolean('Icon?', {
        true: false,
        false: true,
      }),
    },
    example: ({ heading, body, type, slim, noIcon }) => (
      <Alert id="alert" heading={heading} type={type} slim={slim} noIcon={noIcon}>
        {body}
      </Alert>
    ),
  },
);
