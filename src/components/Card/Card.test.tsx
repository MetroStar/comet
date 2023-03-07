import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Card, { CardBody, CardHeader, CardFooter } from "./Card";

describe("Card", () => {
  test("should render a card and subcomponents", () => {
    render(
      <Card id="card">
        <CardHeader>Foo</CardHeader>
        <CardBody>Bar</CardBody>
        <CardFooter>Test</CardFooter>
      </Card>
    );
    expect(screen.getByText("Foo")).toBeVisible();
    expect(screen.getByText("Bar")).toBeVisible();
    expect(screen.getByText("Test")).toBeVisible();
  });
});
