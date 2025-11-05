import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  // Estado con las luces actuales
  const [lights, setLights] = useState(["red-light", "yellow-light", "green-light"]);

  // Estado de la luz seleccionada
  const [selected, setSelected] = useState("red-light");

  // Estado para activar/desactivar el ciclo automático
  const [active, setActive] = useState(false);

  // Función para cambiar el color manualmente
  const changeColor = (color) => {
    setSelected(color);
  };

  // useEffect que cambia el color automáticamente cada 1 seg si está activo
  useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        const currentIndex = lights.indexOf(selected);
        const nextIndex = (currentIndex + 1) % lights.length;
        setSelected(lights[nextIndex]);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [active, selected, lights]);

  // Función para agregar la luz púrpura
  const addPurpleLight = () => {
    if (!lights.includes("purple-light")) {
      setLights([...lights, "purple-light"]);
    }
  };

  return (
    <main>
      <div className="stick"></div>
      <div className="container">
        {lights.map((light) => (
          <div
            key={light}
            className={`${light} ${selected === light ? "light-on" : ""}`}
            onClick={() => changeColor(light)}
          ></div>
        ))}
      </div>

      <div className="btn-light">
        <button onClick={() => setActive(!active)} className="btn btn-secondary button">
          Change Lights
        </button>
      </div>

    {/* Solo se muestra si la luz púrpura no está agregada */}
      {!lights.includes("purple-light") && (
      <div className="btn-light">
        <button onClick={addPurpleLight} className="btn btn-primary button">
          Add Purple Light
        </button>
      </div>
      )} {/* Si no quiero sacar el botón elimino esto */}
    </main>
  );
};

export default TrafficLight;







// Para desabilitar botón

/*
<div className="btn-light">
  <button
    onClick={addPurpleLight}
    className="btn btn-primary button"
    disabled={lights.includes("purple-light")}
  >
    {lights.includes("purple-light") ? "Purple Added" : "Add Purple Light"}
  </button>
</div>
*/