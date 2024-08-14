import { useState } from "react";
import "./App.css";
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";

type Booking = {
  name: string;
  date: string;
  type: string;
  description: string;
};

function Home() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const addBoking = (booking: Booking) => {
    setBookings([...bookings, booking]);
  };

  return (
    <>
      <h1>Välkommen till bokningarnas möjligheter</h1>
      <BookingForm addBooking={addBoking} />
      <BookingList bookings={bookings} />
    </>
  );
}

export default Home;
