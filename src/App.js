import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import Form from './Form';

function App() {
const [showError, setShowError] = useState(false);
const [showCard, setShowCard] = useState(false);
const [formData, setFormData] = useState(null);

const handleSubmit = (data) => {
    const { animalName, animalType } = data;

    // Validaciones
    if (animalName.trim().length < 3 || animalType.length < 6) {
    setShowError(true);
    setShowCard(false);
    } else {
    setShowError(false);
    setShowCard(true);
    setFormData(data);
    }
};

return (
    <div className="App">
    <Form onSubmit={handleSubmit} />
    {showError && <div className="error">Por favor chequea que la información sea correcta</div>}
    {showCard && <Card animalName={formData.animalName} animalType={formData.animalType} />}
    </div>
);
}

export default App;
