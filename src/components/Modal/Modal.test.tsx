import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

test("Modal renders with given props", () => {
  render(
    <Modal show={true} header="foo" footer="bar">
      Yellow
    </Modal>
  );

  expect(screen.getByText("foo")).toBeVisible();
  expect(screen.getByText("bar")).toBeVisible();
  expect(screen.getByText("Yellow")).toBeVisible();
  expect(screen.getByTestId("modal")).toHaveClass("show");
});

test("Modal invisible when show is false", () => {
  render(
    <Modal show={false} header="foo" footer="bar">
      Yellow
    </Modal>
  );

  expect(screen.getByTestId("modal")).toHaveClass("hide");
});

test("Modal close func is called when overlay clicked", () => {
  const spy = jest.fn();
  render(<Modal close={spy} />);
  fireEvent.click(screen.getByTestId("modal-overlay"));
  expect(spy).toHaveBeenCalled();
});

test("Modal overlay click without close func does nothing", () => {
  render(<Modal />);
  fireEvent.click(screen.getByTestId("modal-overlay"));
});
