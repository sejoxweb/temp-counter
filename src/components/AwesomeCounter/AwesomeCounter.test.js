import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AwesomeCounter from "./AwesomeCounter";

test("it should correctly render when initial value set to 7", () => {
  render(<AwesomeCounter initialValue={7} />);
  const counter = screen.getByText(7);
  expect(counter).toBeVisible();
});

test("it should correctly render default value 0 when initial value null or undefined", () => {
  render(<AwesomeCounter />);
  const counter = screen.getByText(0);
  expect(counter).toBeVisible();
});

test("it should increase by 1 when initial value 0 add button clicked once", () => {
  render(<AwesomeCounter initialValue={0} />);
  const addButton = screen.getByText(/add/i);
  userEvent.click(addButton);
  const counter = screen.getByText(1);
  expect(counter).toBeVisible();
});

test("it should increase by 2 when add button clicked twice", () => {
  render(<AwesomeCounter initialValue={0} />);
  const addButton = screen.getByText(/add/i);
  userEvent.click(addButton);
  userEvent.click(addButton);
  const counter = screen.getByText(2);
  expect(counter).toBeVisible();
});

test("it should decrease by 1 when initial value 10 and remove button clicked once", () => {
  render(<AwesomeCounter initialValue={10} />);
  const removeButton = screen.getByText(/remove/i);
  userEvent.click(removeButton);
  const counter = screen.getByText(9);
  expect(counter).toBeVisible();
});

test("it should decrease by 2 when initial value 10 and remove button clicked twice", () => {
  render(<AwesomeCounter initialValue={10} />);
  const removeButton = screen.getByText(/remove/i);
  userEvent.click(removeButton);
  userEvent.click(removeButton);
  const counter = screen.getByText(8);
  expect(counter).toBeVisible();
});

test("it should be 0 and not allow negative when initial value 0 and remove button clicked once", () => {
  render(<AwesomeCounter initialValue={0} />);
  const removeButton = screen.getByText(/remove/i);
  userEvent.click(removeButton);
  const counter = screen.getByText(0);
  expect(counter).toBeVisible();
});

test("it should be 0 and not allow negative when inital value 2 and remove button clicked 4 times", () => {
  throw new Error();
});
