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


          
      </form>
    </div>
  );
};

export default CrearSolicitud;
