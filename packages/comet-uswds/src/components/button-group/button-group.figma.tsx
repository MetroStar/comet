import { ButtonGroup } from './button-group';
import { Button } from '../button/button';
import figma from '@figma/code-connect';

figma.connect(
  ButtonGroup,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=31-1897',
  {
    props: {},
    variant: {
      Type: 'Default',
    },
    example: () => {
      const handleClick = () => {
        // Do something
      };

      return (
        <ButtonGroup id="button-group" type="default">
          <Button id="button-1" onClick={handleClick} variant="outline">
            Back
          </Button>
          <Button id="button-2" onClick={handleClick} variant="default">
            Continue
          </Button>
        </ButtonGroup>
      );
    },
  },
);

figma.connect(
  ButtonGroup,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=31-1897',
  {
    props: {},
    variant: {
      Type: 'Segmented',
    },
    example: () => {
      const handleClick = () => {
        // Do something
      };

      return (
        <ButtonGroup id="button-group" type="segmented">
          <Button id="button-1" onClick={handleClick} variant="default">
            Map
          </Button>
          <Button id="button-2" onClick={handleClick} variant="outline">
            Hybrid
          </Button>
          <Button id="button-3" onClick={handleClick} variant="outline">
            Satellite
          </Button>
        </ButtonGroup>
      );
    },
  },
);
