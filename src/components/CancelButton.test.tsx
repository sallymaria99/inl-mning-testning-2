import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import CancelButton from "./CancelButton";

describe("CancelButton", () => {
  it("should call onCancel when clicked", () => {
    const handleCancel = vi.fn();
    render(<CancelButton onCancel={handleCancel} />);

    fireEvent.click(screen.getByText("Avboka"));

    expect(handleCancel).toHaveBeenCalledTimes(1);
  });
});
