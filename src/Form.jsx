import React, { useState } from 'react';

function Form({ onSubmit }) {
const [animalName, setAnimalName] = useState('');
const [animalType, setAnimalType] = useState('');

const handleFormSubmit = (e) => {
    e.preventDefault();

    onSubmit({ animalName, animalType });
};

return (
    <form onSubmit={handleFormSubmit}>
    <div>
        Nombre del animal:
        <input type="text" value={animalName} onChange={(e) => setAnimalName(e.target.value)} />
    </div>
    <br />
    <div>
        Tipo de animal:
        <input type="text" value={animalType} onChange={(e) => setAnimalType(e.target.value)} />
    </div>
    <br />
    <button type="submit">Enviar</button>
    </form>
);
}

export default Form;
