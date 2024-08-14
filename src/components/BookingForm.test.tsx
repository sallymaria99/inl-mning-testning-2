import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  it("should render input fields and a submit button", () => {
    render(<BookingForm addBooking={vi.fn()} />);

    expect(screen.getByPlaceholderText("Namn")).toBeVisible();
    expect(screen.getByPlaceholderText("Typ av bokning")).toBeVisible();
    expect(screen.getByPlaceholderText("Beskrivning")).toBeVisible();
    expect(screen.getByRole("button")).toHaveTextContent("Boka");
  });

  it("should submit the correct booking data"),
    () => {
      const handleSubmit = vi.fn();
      render(<BookingForm addBooking={handleSubmit} />);

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
      fireEvent.click(screen.getByRole("button"));

      expect(handleSubmit).toHaveBeenCalledWith({
        name: "Sally Stenegärd",
        date: "2024-09-01",
        type: "Massage",
        description: "Helkroppsmassage hos Ewa",
      });
    };
});
