import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders awesome counter title", () => {
  render(<App />);
  const titleElement = screen.queryByText(/awesome counter/i);
  expect(titleElement).toBeVisible();
});
