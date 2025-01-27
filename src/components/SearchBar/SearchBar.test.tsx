/**
1. Render the SearchBar component with different props.
2. Verify that the Search component is rendered with the correct placeholder text.
3. Verify that the onSearch function is called when the input value changes.
 */

import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";
import { PLACEHOLDER } from "./constants";

describe("SearchBar Component", () => {
  it("should render Search component with correct placeholder text", () => {
    render(<SearchBar onSearch={() => {}} fixed={false} />);

    expect(screen.getByPlaceholderText(PLACEHOLDER)).toBeInTheDocument();
  });

  it("should call onSearch function when input value changes", () => {
    const handleSearch = jest.fn();
    render(<SearchBar onSearch={handleSearch} fixed={false} />);

    fireEvent.change(screen.getByPlaceholderText(PLACEHOLDER), {
      target: { value: "test" },
    });

    expect(handleSearch).toHaveBeenCalledWith("test");
  });
});
