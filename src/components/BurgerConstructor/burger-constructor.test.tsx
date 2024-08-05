import { render, screen } from "@testing-library/react";
import BurgerConstructor from "./burger-constructor";

test("renders learn react link", () => {
  render(<BurgerConstructor />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
