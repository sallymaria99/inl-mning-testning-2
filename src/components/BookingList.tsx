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
      <ul className="booking-list">
        {bookings.map((booking, index) => (
          <li key={index} className="booking-item">
            <div className="booking-details">
              <strong>{booking.name}</strong>{" "}
              <span>
                {booking.type} - {booking.date}
              </span>
              <br />
              {booking.description}
            </div>
            <CancelButton onCancel={() => onCancel(index)} />
          </li>
        ))}
      </ul>
    </>
  );
}
