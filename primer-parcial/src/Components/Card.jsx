import React from "react";
import "../Styles/Card.css";

function Card({ petName, petDescription }) {
  return (
    <div className="card">
      <h3>Información de tu Mascota</h3>
      <p>Nombre: {petName}</p>
      <p>Descripción: {petDescription}</p>
    </div>
  );
}

export default Card;
