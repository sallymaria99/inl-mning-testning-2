import CancelButton from "./CancelButton";

type Booking = {
  name: string;
  date: string;
  type: string;
  description: string;
};

type BookingListProps = {
  bookings: Booking[];
  onCancel: (index: number) => void;
};

export default function BookingList({ bookings, onCancel }: BookingListProps) {
  return (
    <>
      <ul>
        {bookings.map((booking, index) => (
          <li key={index}>
            <strong>{booking.name}</strong> -{" "}
            <span>
              {booking.type} på {booking.date}
            </span>
            <br />
            {booking.description}
            <CancelButton onCancel={() => onCancel(index)} />
          </li>
        ))}
      </ul>
    </>
  );
}
