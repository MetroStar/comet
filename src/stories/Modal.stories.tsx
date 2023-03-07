import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Modal,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "../index";
import { ModalProps } from "../components/Modal/Modal";

const meta: ComponentMeta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    id: { required: true },
    show: { control: "boolean" },
  },
};
export default meta;

const ModalWrapper: React.FC<ModalProps> = (props: ModalProps) => {
  const [show, setShow] = useState(props.show);
  const close = (): void => setShow(false);

  return (
    <div>
      <Button id="show-modal" onClick={() => setShow(true)}>
        Show Modal
      </Button>
      <Modal id={props.id} show={show} onClose={close}>
        <Card id="card-1">
          <CardHeader>Modal Header</CardHeader>
          <CardBody>Modal Body</CardBody>
          <CardFooter>
            <Button id="action-1" variant="outline">
              Action
            </Button>
          </CardFooter>
        </Card>
      </Modal>
    </div>
  );
};

const Template: ComponentStory<typeof Modal> = (args: ModalProps) => (
  <ModalWrapper {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "modal-1",
  show: false,
};
