import { Hero } from "@/components";
import { render, screen } from "@testing-library/react";

it("home", () => {
  render(<Hero />);

  const myElem = screen.getByText(/hero/i);

  expect(myElem).toBeInTheDocument();
});
