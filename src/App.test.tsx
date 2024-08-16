import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("BookingForm and BookingList integration", () => {
  it("should render the welcome heading", () => {
    render(<App />);

    const headingElement = screen.getByRole("heading", {
      name: /Välkommen till bokningarnas möjligheter/i,
    });

    expect(headingElement).toBeVisible();
    expect(headingElement.tagName).toBe("H1");
  });

  it("should add a new booking to the list when the form is submitted and then cancel a booking", () => {
    render(<App />);

    fireEvent.input(screen.getByPlaceholderText("Namn"), {
      target: { value: "Sally Stenegärd" },
    });

    fireEvent.input(screen.getByPlaceholderText("Typ av bokning"), {
      target: { value: "Massage" },
    });

    fireEvent.input(screen.getByPlaceholderText("Beskrivning"), {
      target: { value: "Helkroppsmassage hos Ewa" },
    });

    fireEvent.input(screen.getByPlaceholderText("Datum"), {
      target: { value: "2024-09-01" },
    });

    fireEvent.click(screen.getByRole("button", { name: /boka/i }));

    expect(screen.getByText("Sally Stenegärd")).toBeVisible();

    fireEvent.click(screen.getByText("Avboka"));

    expect(screen.queryByText("Sally Stenegärd")).toBeNull();
  });
});
