type Booking = {
  name: string;
  date: string;
  type: string;
  description: string;
};

type BookingListProps = {
  bookings: Booking[];
};

export default function BookingList({ bookings }: BookingListProps) {
  return (
    <>
      <ul>
        {bookings.map((booking, index) => (
          <li key={index}>
            <strong>{booking.name}</strong> - {booking.type} på {booking.date}{" "}
            <br />
            {booking.description}
          </li>
        ))}
      </ul>
    </>
  );
}
