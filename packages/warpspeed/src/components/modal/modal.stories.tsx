import React, { useEffect } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Modal, ModalProps } from './modal';
import modal from '@uswds/uswds/js/usa-modal';

const meta: Meta<typeof Modal> = {
  title: 'USWDS/Modal',
  component: Modal,
  argTypes: {
    size: { control: 'select' },
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
};
export default meta;

const heading = 'Are you sure you want to continue?';
const body = 'You have unsaved changes that will be lost.';

const Template: StoryFn<typeof Modal> = (args: ModalProps) => {
  const footer = (
    <ul className="usa-button-group">
      <li className="usa-button-group__item">
        <button type="button" className="usa-button" id="continueBtn">
          Continue
        </button>
      </li>
      <li className="usa-button-group__item">
        <button
          type="button"
          className="usa-button usa-button--unstyled padding-105 text-center"
          data-close-modal
        >
          Go back
        </button>
      </li>
    </ul>
  );

  const handleContinue = (): void => {
    // Do something

    /* eslint-disable-next-line */
    modal.toggleModal.call(modal, false); // Manually toggle modal after work complete
  };

  // Have to add event listeners after components load due to the way the modal works
  useEffect(() => {
    const button = document.querySelector('#continueBtn') as HTMLButtonElement;
    if (button) {
      button.onclick = handleContinue;
    }
  }, []);

  return (
    <>
      <a href={`#${args.id}`} className="usa-button" aria-controls={args.id} data-open-modal>
        Open Modal
      </a>
      <Modal id={args.id} size={args.size} heading={args.heading} footer={footer}>
        {args.children}
      </Modal>
    </>
  );
};

export const Standard = Template.bind({});

Standard.args = {
  id: 'modal-1',
  size: 'small',
  children: body,
  heading,
};

export const LargeModal = Template.bind({});
LargeModal.args = {
  id: 'modal-1',
  size: 'large',
  children: body,
  heading,
};
