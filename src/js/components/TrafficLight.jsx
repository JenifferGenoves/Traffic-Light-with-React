import React, { useState, useEffect } from "react";

const TrafficLight = () => {
    // Componente global para manejar estado
    const [selected, setSelected] = useState("red-light");

    // Crear componente para que arranque en automático
    const [active, setActive] = useState(false);

    const changeColor = (color) => {
        setSelected(color)
    }

// Cada 3 seg la luz se cambia automáticamente

    // useEffect (() => {}, []) Si no se pone las dependencias [], se ejecuta siempre

    useEffect (() => {
        if(active) {
            const interval = setInterval(() => {
                if(selected == "red-light") {
                    setSelected("yellow-light");
                } else if (selected == "yellow-light") {
                    setSelected("green-light");
                } else if (selected == "green-light") {
                    setSelected("red-light");
                };

            }, 1000)
            
            return () => clearInterval(interval)
        };

    }, [active, selected])

    return (
        <main>
            <div className="stick"></div>
            <div className="container">
                <div 
                className={`red-light ${selected == "red-light" ? "light-on" : ""}`} 
                onClick={() => changeColor("red-light") }
                
                ></div>
                    
                <div 
                className={`yellow-light ${selected == "yellow-light" ? "light-on" : ""}`} 
                onClick={() => changeColor("yellow-light") }
                ></div>
                    
                
                <div className={`green-light ${selected == "green-light" ? "light-on" : ""}`} 
                onClick={() => changeColor("green-light")}
                ></div>
                    
            </div>
            <div className="btn-light">
                <button onClick={() =>setActive(!active)} className="btn btn-secondary button">Change Lights</button>
            </div>
        </main>
    )
}


export default TrafficLight;