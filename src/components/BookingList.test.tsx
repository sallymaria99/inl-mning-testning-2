import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import BookingList from "./BookingList";

describe("BookingList", () => {
  it("should render a list of bookings with cancel button", () => {
    const bookings = [
      {
        name: "Sally Stenegärd",
        date: "2024-09-01",
        type: "Massage",
        description: "Helkroppsmassage hos Ewa",
      },
      {
        name: "Samuel",
        date: "2025-09-02",
        type: "Konsert",
        description: "Bob Dylan på Ullevi",
      },
    ];

    const handleCancel = vi.fn();
    render(<BookingList bookings={bookings} onCancel={handleCancel} />);

    expect(screen.getByText("Sally Stenegärd")).toBeVisible();
    expect(screen.getByText("Massage - 2024-09-01")).toBeVisible();
    expect(screen.getByText("Samuel")).toBeVisible();
    expect(screen.getByText("Konsert - 2025-09-02")).toBeVisible();
    expect(screen.getAllByText("Avboka")).toHaveLength(2);
  });

  it("should call onCancel when cancel button is clicked", () => {
    const bookings = [
      {
        name: "Sally Stenegärd",
        date: "2024-09-01",
        type: "Massage",
        description: "Helkroppsmassage hos Ewa",
      },
    ];

    const handleCancel = vi.fn();
    render(<BookingList bookings={bookings} onCancel={handleCancel} />);

    fireEvent.click(screen.getByText("Avboka"));

    expect(handleCancel).toHaveBeenCalledTimes(1);
  });
});
