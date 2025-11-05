import React, { useState } from "react";

const TrafficLight = () => {
    // Componente global para manejar estado
    const [selected, setSelected] = useState("red-light");

    const changeColor = (color) => {
        setSelected(color)
    }


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
        </main>
    )
}


export default TrafficLight;