import { useState } from "react";
import "./App.css";
import BookingForm from "./components/BookingForm";

function Home() {
  const [bookings, setBookings] = useState([]);

  return (
    <>
      <h1>Välkommen till bokningarnas möjligheter</h1>
      <BookingForm />
    </>
  );
}

export default Home;
