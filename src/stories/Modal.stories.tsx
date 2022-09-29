import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Modal, Button } from "../index";
import { ModalProps } from "../components/Modal/Modal";

const meta: ComponentMeta<typeof Modal> = {
  title: "react-uswds/Modal",
  component: Modal,
};
export default meta;

const Template: ComponentStory<typeof Modal> = (args: ModalProps) => (
  <Modal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  show: true,
  header: "Modal!",
  children: "This is a modal for sure...",
  footer: <Button variant="accent-warm">Action</Button>,
};

const ModalWrapper: React.FC<ModalProps> = (props: ModalProps) => {
  const [show, setShow] = useState(false);
  const close = (): void => setShow(false);

  return (
    <div>
      <Button onClick={() => setShow(true)}>Show Modal</Button>
      <Modal
        show={show}
        close={close}
        footer={<Button onClick={close}>Close</Button>}
        {...props}
      />
    </div>
  );
};

const ActiveTemplate: ComponentStory<typeof Modal> = (args: ModalProps) => (
  <ModalWrapper {...args} />
);

export const WithInteraction = ActiveTemplate.bind({});
WithInteraction.args = {
  header: "Modal...",
  children: (
    <div>
      This modal is rendered through a component, where state controls the
      `show` attribute.
      <br />A button is injected into footer with the logic to either close or
      open the modal by changing state.
    </div>
  ),
};
