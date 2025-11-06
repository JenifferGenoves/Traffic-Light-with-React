import React, { useState } from "react";

// Definir propiedades de semáforo en un arreglo

const lightData = [
    { id: 'red-light' },
    { id: 'yellow-light' },
    { id: 'green-light' },
];

// Definir componente Global para manejar estado

const TrafficLight = () => {
    const [selected, setSelected] = useState("red-light");

    const changeColor = (colorId) => {
        setSelected(colorId)
    };

    return (
        <main>
            <div className="stick"></div>
            <div className="container">
                {lightData.map((light) => (
          <div
            
            key={light.id} 
            className={`${light.id} ${selected === light.id ? 'light-on' : ''}`}
            onClick={() => changeColor(light.id)}
          ></div>
        ))}
                    
            </div>
        </main>
    );
};

export default TrafficLight;