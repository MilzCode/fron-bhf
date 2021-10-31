import React from "react";
import Volver from "../components/other/Volver";

//Funcionario-Encargado
const MisDatos = () => {
  const onSubmit = () => {
    console.log("Crear solicitud");
  };
  return (
    <div className="misDatos">
      <h1 className="TITULO">Mis datos</h1>
      <form className="misDatos__formulario" onSubmit={onSubmit}>
        <div className="misDatos__input LABELINPUT">
          <label htmlFor="nombre">Mi nombre completo</label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            placeholder="Nombres y apellidos"
          />
        </div>
        <div className="misDatos__input LABELINPUT">
          <label htmlFor="rut">Mi rut</label>
          <input
            id="rut"
            type="text"
            name="rut"
            placeholder="11.111.111-1"
          />
        </div>
        <div className="misDatos__input LABELINPUT">
          <label htmlFor="telefono">Mi número de teléfono</label>
          <input
            id="telefono"
            type="tel"
            name="telefono"
            placeholder="Teléfono ej: 988884444"
          />
        </div>
        <div className="misDatos__input LABELINPUT">
          <label htmlFor="departamento">Mi departamento</label>
          <select id="departamento" name="departamento">
            <option value="">Seleccione un departamento</option>
            <option value="1">Departamento 1</option>
            <option value="2">Departamento 2</option>
            <option value="3">Departamento 3</option>
          </select>
        </div>
        <div className="misDatos__botones BOTONES">
          <button type="submit" className="BOTON">
            Enviar
          </button>
          <button type="reset" className="BOTON BACKGROUNDCOLORRED">
            Cancelar
          </button>
        </div>
      </form>
      <Volver />
    </div>
  );
};

export default MisDatos;
