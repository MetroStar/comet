import { Button } from './button';
import figma from '@figma/code-connect';

figma.connect(
  Button,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=31-332',
  {
    props: {
      variant: figma.enum('Variant', {
        Primary: 'default',
        Secondary: 'secondary',
        'Accent Cool': 'accent-cool',
        'Accent Warm': 'accent-warm',
        Base: 'base',
        Outlined: 'outline',
        Big: 'big',
        Unstyled: 'unstyled',
      }),
      disabled: figma.enum('State', {
        Default: false,
        Disabled: true,
      }),
    },
    example: ({ variant, disabled }) => {
      const handleClick = () => {
        // Do something
      };

      return (
        <Button id="button-1" variant={variant} onClick={handleClick} disabled={disabled}>
          Button
        </Button>
      );
    },
  },
);
