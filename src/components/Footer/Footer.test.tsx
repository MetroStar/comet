import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "./footer";

const props = {
  links: [
    {
      label: "Orange",
      path: "/orange",
    },
  ],
  logoText: "React USWDS",
  logoSrc: "https://designsystem.digital.gov/img/uswds-logo/lg-black.png",
  contactMessage: "Reach Us Below.",
  phone: "(888)888-8888",
  email: "firstname@lastname.com",
  socials: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
    instagram: "https://instagram.com",
  },
};

test("Footer renders with given props and invokes folded menu", () => {
  render(<Footer {...props} />);
  expect(screen.getByText("React USWDS")).toBeVisible();
});

test("Footer renders with no props", () => {
  render(<Footer />);
});

test("Footer activates navigate callback", () => {
  const spy = jest.fn();
  render(<Footer {...props} onNavigate={spy} />);

  fireEvent.click(screen.getByTestId("footer-link"));
  expect(spy).toHaveBeenCalledWith("/orange");
});

test("Footer calls default onNavigate", () => {
  render(<Footer {...props} />);

  fireEvent.click(screen.getByTestId("footer-link"));
});

test("Scroll to top button works", () => {
  const spy = jest.fn();
  window.scrollTo = spy;
  global.scrollTo = spy;
  render(<Footer {...props} />);

  fireEvent.click(screen.getByTestId("scroll-top"));
  expect(spy).toHaveBeenCalledWith(0, 0);
});
