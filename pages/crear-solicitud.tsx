import React, {useState} from "react";
import Volver from "../components/other/Volver";
import { useEffect } from 'react';


//Funcionario
const CrearSolicitud = () => {


  const [nombre, setNombre] = useState('');
  const [rut, setRut] = useState('');
  const [carrera, setCarrera] = useState('');
  const [tipoEstudiante, setTipoEstudiante] = useState('');


  const handleSelect = (e:any) =>{
    const nuevoTipoEstudiante = e.target.value;
    setTipoEstudiante(nuevoTipoEstudiante);
    console.log(nuevoTipoEstudiante);

    
  }

  const onSubmit = () => {
    console.log(tipoEstudiante);
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
          <label htmlFor="rut">Rut del solicitante:</label>
          <input id="rut" type="text" name="rut" placeholder="Rut" />
        </div>

        <div className="crearSolicitud__input LABELINPUT">
          <label htmlFor="carrera">Carrera del solicitante:</label>
          <input id="carrera" type="text" name="carrera" placeholder="Carrera" />
        </div>

        <select onChange = {handleSelect}>
            <option value="Estudiante Nuevo">Estudiante Nuevo</option>
            <option value="Estudiante Antiguo">Estudiante Antiguo</option>
            
        </select>
          
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
            className="BOTON BACKGROUNDCOLORRED"
          >
            Cancelar
          </button>
        </div>
      </form>
      <Volver />
    </div>
  );
};

export default CrearSolicitud;
