/**
1. Render the Button component with different props.
2. Verify that the StyledButton element is rendered with the correct label.
3. Verify that the loading message is rendered when loading is true.
4. Verify that the onClick function is called when the button is clicked.
**/

import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import { LOADING } from "./constants";

describe("Button Component", () => {
  it("should render button with correct label", () => {
    render(<Button label="Click Me" loading={false} onClick={() => {}} />);

    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("should render loading message when loading is true", () => {
    render(<Button label="Click Me" loading={true} onClick={() => {}} />);

    expect(screen.getByText(LOADING)).toBeInTheDocument();
  });

  it("should not render loading message when loading is false", () => {
    render(<Button label="Click Me" loading={false} onClick={() => {}} />);

    expect(screen.queryByText(LOADING)).toBeNull();
  });

  it("should call onClick function when button is clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" loading={false} onClick={handleClick} />);

    fireEvent.click(screen.getByText("Click Me"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
