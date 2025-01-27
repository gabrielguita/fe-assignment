import { render } from "@testing-library/react";
import Profile from "./page";

describe("Profile Page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render components with correct props", () => {
    render(<Profile />);
  });
});
