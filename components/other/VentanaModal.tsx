import React from "react";
import { ReactChild } from "react-virtualized/node_modules/@types/react";

/**
 * Este componente es una ventana modal que tiene un boton de salir y puede ejecutar una
 * función de salida.
 * recibe:
 * @param children: el contenido de la ventana modal
 * @param exitFunction: la función que se ejecuta al salir
 * **/

interface VentanaModalProps {
  children: any;
  exitFunction?: any;
}

const VentanaModal = ({ children, exitFunction }: VentanaModalProps) => {
  const [modal, setModal] = React.useState(true);
  const handleClose = () => {
    setModal(false);
    if (exitFunction) {
      exitFunction();
    }
    //volvemos a exitFunction null para que no se ejecute mas de una vez
    exitFunction = null;
  };
  return (
    <>
      {modal && (
        <div className="ventanaModal">
          <div className="ventanaModal__container">
            {children}
            <button
              className="BOTON NOSELECT"
              onClick={handleClose}
            >
              Salir
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VentanaModal;
