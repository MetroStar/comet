import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Card, { CardBody, CardHeader, CardFooter } from "./Card";

test("Card, and card subcomponents render.", () => {
  render(
    <Card>
      <CardHeader>Foo</CardHeader>
      <CardBody>Bar</CardBody>
      <CardFooter>Test</CardFooter>
    </Card>
  );
  expect(screen.getByText("Foo")).toBeVisible();
  expect(screen.getByText("Bar")).toBeVisible();
  expect(screen.getByText("Test")).toBeVisible();
});
