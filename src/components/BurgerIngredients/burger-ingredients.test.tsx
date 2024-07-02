import { render, screen } from "@testing-library/react";
import BurgerIngredients from "./burger-ingredients";

test("renders learn react link", () => {
  render(<BurgerIngredients />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
