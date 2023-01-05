import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "./Footer";
import { HashRouter } from "react-router-dom";

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

const footerJsx = (): any => (
  <HashRouter>
    <Footer {...props} />
  </HashRouter>
);

test("Footer renders with given props and invokes folded menu", () => {
  render(footerJsx());
  expect(screen.getByText("React USWDS")).toBeVisible();
});

test("Footer renders with no props", () => {
  render(footerJsx());
});

// test("Footer activates navigate callback", () => {
//   const spy = jest.fn();
//   render(<Footer {...props} onNavigate={spy} />);

//   fireEvent.click(screen.getByTestId("footer-link"));
//   expect(spy).toHaveBeenCalledWith("/orange");
// });

// test("Footer calls default onNavigate", () => {
//   render(<Footer {...props} />);

//   fireEvent.click(screen.getByTestId("footer-link"));
// });

test("Scroll to top button works", () => {
  const spy = jest.fn();
  window.scrollTo = spy;
  global.scrollTo = spy;
  render(footerJsx());

  fireEvent.click(screen.getByTestId("scroll-top"));
  expect(spy).toHaveBeenCalledWith(0, 0);
});
