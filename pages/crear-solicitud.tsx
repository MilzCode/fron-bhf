import React from "react";
//Funcionario
const CrearSolicitud = () => {
  const onSubmit = () => {
    console.log("Crear solicitud");
  };
  return (
    <div className="crearSolicitud">
      <h1 className="TITULO">Crear Solicitud</h1>
      <form className="crearSolicitud__formulario" onSubmit={onSubmit}>
        <div className="crearSolicitud__input LABELINPUT">
          <label htmlFor="nombre">Nombre del solicitante</label>
          <input id="nombre" type="text" name="nombre" placeholder="Nombre" />
        </div>
        <div className="crearSolicitud__input LABELINPUT">
          <label htmlFor="rut">Rut del solicitante</label>
          <input id="rut" type="text" name="rut" placeholder="Rut" />
        </div>
        {/* archivo */}
        <div className="crearSolicitud__input LABELINPUT">
          <label htmlFor="archivo">Documentación</label>
          <input id="archivo" type="file" name="archivo" />
        </div>
        {/* datos adicionales text area */}
        <div className="crearSolicitud__input LABELINPUT">
          <label htmlFor="datosAdicionales">Datos adicionales</label>
          <textarea
            id="datosAdicionales"
            name="datosAdicionales"
            placeholder="Datos adicionales"
          ></textarea>
        </div>
        {/* Botones */}
        <div className="crearSolicitud__botones BOTONES">
          <button type="submit" className="BOTON">
            Enviar
          </button>
          <button
            type="reset"
            className="BOTON"
            style={{ backgroundColor: "red" }}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrearSolicitud;
