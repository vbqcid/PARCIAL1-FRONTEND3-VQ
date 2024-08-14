import React, { useState } from "react";
import Card from "./Card";
import "../Styles/Form.css";

function Form() {
  const [petName, setPetName] = useState("");
  const [petDescription, setpetDescription] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (petName.trim().length < 3 || petName.startsWith(" ")) {
      setError("Por favor chequea que la información sea correcta");
      setSubmitted(false);
    } else if (petDescription.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      setSubmitted(false);
    } else {
      setError("");
      setSubmitted(true);
    }
  };

  return (
    <div className="form-container">
      <h2>Información de Mascotas</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <input
            type="text"
            placeholder="Ingresa el nombre de tu mascota"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Describe a tu mascota"
            value={petDescription}
            onChange={(e) => setpetDescription(e.target.value)}
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">Enviar</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {submitted && <Card petName={petName} petDescription={petDescription} />}
    </div>
  );
}

export default Form;
