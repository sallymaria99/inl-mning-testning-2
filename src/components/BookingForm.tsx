import { useState } from "react";

type Booking = {
  name: string;
  date: string;
  type: string;
  description: string;
};

type BookingFormProps = {
  addBooking: (booking: Booking) => void;
};

export default function BookingForm({ addBooking }: BookingFormProps) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !date || !type) {
      setError("Alla fält måste fyllas i.");
      return;
    }

    addBooking({ name, date, type, description });
    setName("");
    setDate("");
    setType("");
    setDescription("");
    setError(null);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Namn"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Datum"
        />
        <input
          type="text"
          placeholder="Typ av bokning"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <textarea
          placeholder="Beskrivning"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Boka</button>
      </form>
      {error && <p role="alert">{error}</p>}
    </>
  );
}
