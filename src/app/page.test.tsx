import { render } from "@testing-library/react";
import BookPage from "./page";

describe("Books Page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render components with correct props", () => {
    render(<BookPage />);
  });
});
