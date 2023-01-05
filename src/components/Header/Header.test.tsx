import React from "react";
import { HashRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";

const folding = [
  {
    label: "Fruits",
    items: [
      {
        label: "Orange",
        path: "/orange",
      },
    ],
  },
];

const simple = [
  {
    label: "Bat",
    path: "/bat",
  },
];

const headerJsx = (
  folding?: any,
  simple?: any,
  showSearch?: any,
  onSearch?: any
): any => (
  <HashRouter>
    <Header
      folding={folding}
      simple={simple}
      showSearch={showSearch}
      onSearch={onSearch}
    ></Header>
  </HashRouter>
);

test("Header renders with given props and invokes folded menu", () => {
  render(headerJsx(folding, simple, true));

  expect(screen.getByText("Bat")).toBeVisible();

  const foldContent = screen.getByTestId("folding");
  const foldControl = screen.getByTestId("fold-control");
  expect(foldContent).toHaveClass("folded-hide");
  fireEvent.click(foldControl);
  expect(foldContent).toHaveClass("folded-show");
});

test("Header renders with nothing", () => {
  render(headerJsx());
});

// test("Header invokes navigation callback", () => {
//   const navSpy = jest.fn();
//   render(headerJsx(folding, simple));
//   const foldControl = screen.getByTestId("fold-control");
//   fireEvent.click(foldControl);
//   fireEvent.click(screen.getByText("Orange"));
//   expect(navSpy).toHaveBeenCalledWith("/orange");

//   fireEvent.click(screen.getByText("Bat"));
//   expect(navSpy).toHaveBeenLastCalledWith("/bat");
// });

test("Header invokes search callback", () => {
  const searchSpy = jest.fn();
  render(headerJsx(folding, simple, true, searchSpy));

  fireEvent.change(screen.getByTestId("search"), { target: { value: "foo" } });
  fireEvent.click(screen.getByTestId("search-button"));

  expect(searchSpy).toHaveBeenLastCalledWith("foo");
});

test("Invoke default callbacks", () => {
  render(headerJsx(folding, simple, true));

  // Default search callback
  fireEvent.change(screen.getByTestId("search"), { target: { value: "foo" } });
  fireEvent.click(screen.getByTestId("search-button"));
  // Default navigate callback
  fireEvent.click(screen.getByText("Bat"));
});
