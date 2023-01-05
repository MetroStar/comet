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
  title: "react-uswds/Modal",
  component: Modal,
};
export default meta;

const Template: ComponentStory<typeof Modal> = (args: ModalProps) => (
  <Modal {...args}>
    <Card>
      <CardHeader>Modal Header</CardHeader>
      <CardBody>Modal Body</CardBody>
      <CardFooter>
        <Button variant="outline">Action</Button>
      </CardFooter>
    </Card>
  </Modal>
);

export const Default = Template.bind({});
Default.args = {
  show: true,
};

const ModalWrapper: React.FC<ModalProps> = (props: ModalProps) => {
  const [show, setShow] = useState(false);
  const close = (): void => setShow(false);

  return (
    <div>
      <Button onClick={() => setShow(true)}>Show Modal</Button>
      <Modal show={show} close={close}>
        <Card>
          <CardHeader>Modal Header</CardHeader>
          <CardBody>Modal Body</CardBody>
          <CardFooter>
            <Button variant="outline">Action</Button>
          </CardFooter>
        </Card>
      </Modal>
    </div>
  );
};

const ActiveTemplate: ComponentStory<typeof Modal> = (args: ModalProps) => (
  <ModalWrapper {...args} />
);

export const WithInteraction = ActiveTemplate.bind({});
WithInteraction.args = {};
