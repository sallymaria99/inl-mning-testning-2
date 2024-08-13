import { useState } from "react";

export default function BookingForm() {
  const [name, setNamne] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBoking({ name, date, type, description });
    setNamne("");
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
          onChange={(e) => setNamne(e.target.value)}
          required
        />
        <input type="date" placeholder="Datum" />
        <input type="text" placeholder="Typ av bokning" />
        <input type="text" placeholder="Beskrivning" />
        <button type="submit">Boka</button>
      </form>
    </>
  );
}
