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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addBooking({ name, date, type, description });
    setName("");
    setDate("");
    setType("");
    setDescription("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Namn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Typ av bokning"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
        <textarea
          placeholder="Beskrivning"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Boka</button>
      </form>
    </>
  );
}
