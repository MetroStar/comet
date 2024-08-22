import { SiteAlert } from './site-alert';
import figma from '@figma/code-connect';

figma.connect(
  SiteAlert,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=503-4070',
  {
    props: {
      heading: figma.boolean('Heading?', {
        true: figma.string('Heading'),
        false: undefined,
      }),
      body: figma.boolean('Description?', {
        true: 'Additional context and followup information including a link.',
        false: undefined,
      }),
      type: figma.enum('Type', {
        Informational: 'Info',
        Emergency: 'Emergency',
      }),
      slim: figma.boolean('Slim?'),
      noIcon: figma.boolean('Icon?', {
        true: false,
        false: true,
      }),
    },
    example: ({ heading, body, type, slim, noIcon }) => (
      <SiteAlert id="site-alert" heading={heading} type={type} slim={slim} noIcon={noIcon}>
        {body}
      </SiteAlert>
    ),
  },
);
