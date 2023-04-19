import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Modal, ModalProps } from './modal';

const meta: Meta<typeof Modal> = {
  title: 'USWDS/Modal',
  component: Modal,
  argTypes: {
    size: { control: 'select' },
  },
};
export default meta;

const heading = 'Are you sure you want to continue?';
const body = 'You have unsaved changes that will be lost.';
const footer = (
  <ul className="usa-button-group">
    <li className="usa-button-group__item">
      <button type="button" className="usa-button" data-close-modal>
        Continue without saving
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
const Template: StoryFn<typeof Modal> = (args: ModalProps) => (
  <>
    <a href={`#${args.id}`} className="usa-button" aria-controls={args.id} data-open-modal>
      Open Modal
    </a>
    <Modal id={args.id} size={args.size} heading={args.heading} footer={args.footer}>
      {args.children}
    </Modal>
  </>
);

export const Standard = Template.bind({});

Standard.args = {
  id: 'modal-1',
  size: 'small',
  children: body,
  heading,
  footer,
};

export const LargeModal = Template.bind({});
LargeModal.args = {
  id: 'modal-1',
  size: 'large',
  children: body,
  heading,
  footer,
};
