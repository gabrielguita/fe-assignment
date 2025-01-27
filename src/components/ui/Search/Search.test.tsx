/**
1. Render the Search component with different props.
2. Verify that the StyledInput element is rendered with the correct placeholder text.
3. Verify that the onSearch function is called when the input value changes.
**/

import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";

describe("Search Component", () => {
  it("should render input with correct placeholder text", () => {
    render(<Search text="Search..." onSearch={() => {}} />);

    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("should call onSearch function when input value changes", () => {
    const handleSearch = jest.fn();
    render(<Search text="Search..." onSearch={handleSearch} />);

    fireEvent.change(screen.getByPlaceholderText("Search..."), {
      target: { value: "test" },
    });

    expect(handleSearch).toHaveBeenCalledTimes(1);
  });
});
