import { Modal } from './modal';
import figma from '@figma/code-connect';

figma.connect(
  Modal,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=411-2091',
  {
    props: {
      size: figma.enum('state', {
        standard: 'small',
        large: 'large',
      }),
    },
    example: ({ size }) => {
      const footer = (
        <ul className="usa-button-group">
          <li className="usa-button-group__item">
            <button type="button" className="usa-button" id="continueBtn" data-close-modal>
              Continue without saving
            </button>
          </li>
          <li className="usa-button-group__item">
            <button
              type="button"
              className="usa-button usa-button--unstyled padding-105 text-center"
              id="goBackBtn"
              data-close-modal
            >
              Go back
            </button>
          </li>
        </ul>
      );

      return (
        <Modal id="modal" size={size} heading="Are you sure you want to continue?" footer={footer}>
          You have unsaved changes that will be lost.
        </Modal>
      );
    },
  },
);
