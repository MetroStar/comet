import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Modal } from "../index";
import { ModalProps } from "../components/Modal/Modal";
declare const meta: ComponentMeta<typeof Modal>;
export default meta;
export declare const Default: ComponentStory<React.FC<ModalProps>>;
export declare const WithInteraction: ComponentStory<React.FC<ModalProps>>;
