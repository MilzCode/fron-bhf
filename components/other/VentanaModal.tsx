import React from "react";

const VentanaModal = ({ children }: any) => {
  return (
    <div className="ventanaModal">
      <div className="ventanaModal__container">{children}</div>
      {/* exit */}
      <div className="ventanaModal__salir">
        <button className="ventanaModal__salirBtn">Salir</button>
      </div>
    </div>
  );
};

export default VentanaModal;
