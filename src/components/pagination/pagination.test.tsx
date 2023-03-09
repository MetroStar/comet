import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pagination from "./pagination";

describe("Pagination", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Pagination
        id="pagination1"
        currentPage={9}
        amountOfPages={24}
        ariaLabel="Pagination"
      />
    );
    expect(baseElement).toBeTruthy();
    expect(
      baseElement
        .querySelector('a[aria-label="page 10"]')
        ?.getAttribute("aria-current")
    ).toBe("page");
    expect(baseElement.querySelector("nav")?.getAttribute("aria-label")).toBe(
      "Pagination"
    );
  });

  it("should render the correct page item as current", () => {
    const { baseElement } = render(
      <Pagination
        id="pagination1"
        currentPage={9}
        amountOfPages={24}
        ariaLabel="Pagination"
      />
    );
    expect(
      baseElement
        .querySelector('a[aria-label="page 10"]')
        ?.getAttribute("aria-current")
    ).toBe("page");
  });

  it("should render previous, next, and extra slots", () => {
    const { baseElement } = render(
      <Pagination
        id="pagination1"
        currentPage={9}
        amountOfPages={24}
        ariaLabel="Pagination"
      />
    );
    expect(
      baseElement.querySelectorAll(".usa-pagination__overflow")
    ).toHaveLength(2);
    expect(baseElement.querySelectorAll(".usa-pagination__arrow")).toHaveLength(
      2
    );
  });

  it("should not render extra slots", () => {
    const { baseElement } = render(
      <Pagination
        id="pagination1"
        currentPage={3}
        amountOfPages={7}
        ariaLabel="Pagination"
      />
    );
    expect(
      baseElement.querySelectorAll(".usa-pagination__overflow")
    ).toHaveLength(0);
  });

  it("should render previous, and extra slots, but not next", () => {
    const { baseElement } = render(
      <Pagination
        id="pagination1"
        currentPage={23}
        amountOfPages={24}
        ariaLabel="Pagination"
      />
    );
    expect(
      baseElement.querySelectorAll(".usa-pagination__overflow")
    ).toHaveLength(1);
    expect(
      baseElement.querySelector('[aria-label="Previous page"]')
    ).toBeTruthy();
  });

  it("should render next, and extra slots, but not previous", () => {
    const { baseElement } = render(
      <Pagination
        id="pagination1"
        currentPage={0}
        amountOfPages={24}
        ariaLabel="Pagination"
      />
    );
    expect(
      baseElement.querySelectorAll(".usa-pagination__overflow")
    ).toHaveLength(1);
    expect(baseElement.querySelector('[aria-label="Next page"]')).toBeTruthy();
  });

  it("clicking the value should trigger onPage event handler", () => {
    const onPage = jest.fn();
    const { baseElement } = render(
      <Pagination
        id="pagination1"
        currentPage={9}
        amountOfPages={24}
        ariaLabel="Pagination"
        onPage={onPage}
      />
    );

    const nextPageAnchor = baseElement.querySelector(
      '[aria-label="Next page"]'
    ) as Element;
    userEvent.click(nextPageAnchor);

    const previousPageAnchor = baseElement.querySelector(
      '[aria-label="Previous page"]'
    ) as Element;
    userEvent.click(previousPageAnchor);

    userEvent.click(
      baseElement.querySelector('a[aria-label="page 11"]') as Element
    );
  });

  it("clicking the value when no onPage is configured should not crash", () => {
    const { baseElement } = render(
      <Pagination
        id="pagination1"
        currentPage={9}
        amountOfPages={24}
        ariaLabel="Pagination"
      />
    );

    const nextPageAnchor = baseElement.querySelector(
      '[aria-label="Next page"]'
    ) as Element;
    userEvent.click(nextPageAnchor);
    const previousPageAnchor = baseElement.querySelector(
      '[aria-label="Previous page"]'
    ) as Element;
    userEvent.click(
      baseElement.querySelector('a[aria-label="page 11"]') as Element
    );
  });

  it("should render pagination items with URL", () => {
    const { baseElement } = render(
      <Pagination
        id="pagination1"
        currentPage={4}
        amountOfPages={7}
        ariaLabel="Pagination"
        createPageUrl={(page: number) => `https://localhost/?page=${page}`}
      />
    );

    const anchors = baseElement.querySelectorAll("a");
    expect(anchors[0].href).toBe("https://localhost/?page=3");
    expect(anchors[6].href).toBe("https://localhost/?page=5");
    for (let anchorIndex = 1; anchorIndex < anchors.length - 1; anchorIndex++) {
      const anchor = anchors[anchorIndex];
      expect(anchor.href).toBe(`https://localhost/?page=${anchorIndex - 1}`);
    }
  });
});
