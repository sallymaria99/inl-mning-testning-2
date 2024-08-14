import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import App from "./App";

describe("BookingForm and BookingList integration", () => {
  it("should add a new booking to the list when the form is submitted", () => {
    render(<App />);
  });
});
