import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BookingList from "./BookingList";

describe("BookingList", () => {
  it("should render a list of bookings", () => {
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
    render(<BookingList bookings={bookings} />);

    expect(screen.getByText("Sally Stenegärd")).toBeVisible();
    expect(screen.getByText("Massage")).toBeVisible();
    expect(screen.getByText("Samuel")).toBeVisible();
    expect(screen.getByText("Konsert")).toBeVisible();
  });
});
