import { useState } from "react";
import "./App.css";

function Home() {
  const [bookings, setBookings] = useState([]);

  return (
    <>
      <h1>Välkommen till bokningarnas möjligheter</h1>
    </>
  );
}

export default Home;
