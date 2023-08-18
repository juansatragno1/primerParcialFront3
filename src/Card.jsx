import React from 'react';

function Card({ animalName, animalType }) {
return (
    <div className="card">
    <h2>Información del animal:</h2>
    <p>Nombre del animal: {animalName}</p>
    <p>Tipo de animal: {animalType}</p>
    </div>
);
}

export default Card;
