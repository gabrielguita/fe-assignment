/**
1. Render the Loading component with different props.
2. Verify that the Container and StyledLoading elements are rendered correctly when loading is true.
3. Verify that nothing is rendered when loading is false.
**/

import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Loading Component", () => {
  it("should render loading message when loading is true", () => {
    render(<Input label="Loading..." loading={true} />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should not render anything when loading is false", () => {
    const { container } = render(<Input label="Loading..." loading={false} />);

    expect(container.firstChild).toBeNull();
  });
});
