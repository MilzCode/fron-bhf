import React from "react";

interface VentanaModalProps {
  children: any;
  exitBotonText?: string;
  exitFunction?: any;
  aceptarBotonText?: string | undefined;
  aceptarFunction?: any;
}

/**
 * Este componente es una ventana modal que tiene un boton de salir y puede ejecutar una
 * función de salida.
 * recibe:
 * @param children: el contenido de la ventana modal
 * @param exitBotonText: el texto del boton de salir
 * @param exitFunction: la función que se ejecuta al salir
 * @param aceptarBotonText: si quiere un segundo boton, y el texto que desee mostrar:
 * @param aceptarFunction: la función que se ejecuta al aceptar
 * **/
const VentanaModal = ({
  children,
  exitBotonText,
  exitFunction,
  aceptarBotonText,
  aceptarFunction,
}: VentanaModalProps) => {
  const [modal, setModal] = React.useState(true);
  const handleAceptar = () => {
    setModal(false);
    if (aceptarFunction) {
      aceptarFunction();
    }
    aceptarFunction = null;
  };
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
            {!aceptarBotonText && (
              <button className="BOTON NOSELECT" onClick={handleClose}>
                {exitBotonText ? exitBotonText : "Cerrar"}
              </button>
            )}
            {aceptarBotonText && (
              <div className="BOTONES">
                <button className="BOTON NOSELECT" onClick={handleAceptar}>
                  {aceptarBotonText}
                </button>
                <button
                  className="BOTON NOSELECT BACKGROUNDCOLORRED"
                  onClick={handleClose}
                >
                  {exitBotonText ? exitBotonText : "Cerrar"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default VentanaModal;
