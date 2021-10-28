import React, { useState } from "react";
import Volver from "../components/other/Volver";
import { useEffect } from 'react';


//Funcionario
const CrearSolicitud = () => {


  const [nombre, setNombre] = useState('');
  const [rut, setRut] = useState('');
  const [carrera, setCarrera] = useState('');
  const [tipoEstudiante, setTipoEstudiante] = useState('');
  const [asignacionFamiliar, setAsignacionFamiliar] = useState('');
  const [certificadoNacimiento, setCertificadoNacimiento] = useState('');
  const [comprobantePago, setComprobantePago] = useState('');
  const [datosAdicionales, setDatosAdicionales] = useState('');

  const handleNombre = (e: any) => {
    const nuevoNombre = e.target.value;
    setNombre(nuevoNombre);
  }
  const handleRut = (e: any) => {
    const nuevoRut = e.target.value;
    setRut(nuevoRut);
  }
  const handleCarrera = (e: any) => {
    const nuevaCarrera = e.target.value;
    setCarrera(nuevaCarrera);
  }
  const handleTipoEstudiante = (e: any) => {
    const nuevoTipoEstudiante = e.target.value;
    setTipoEstudiante(nuevoTipoEstudiante);
  }
  const handleAsignacionFamiliar = (e: any) => {
    const nuevaAsignacionFamiliar = e.target.value;
    setAsignacionFamiliar(nuevaAsignacionFamiliar);
  }
  const handleCertificadoNacimiento = (e: any) => {
    const nuevoCertificadoNacimiento = e.target.value;
    setCertificadoNacimiento(nuevoCertificadoNacimiento);
  }
  const handleComprobantePago = (e: any) => {
    const nuevoComprobantePago = e.target.value;
    setComprobantePago(nuevoComprobantePago);
  }
  const handleDatosAdicionales = (e: any) => {
    const nuevoDatosAdicionales = e.target.value;
    setDatosAdicionales(nuevoDatosAdicionales);
  }

  const onSubmit = () => {
    //validar
    //enviar a la api
  };


  return (
    <div className="crearSolicitud">
      <h1 className="TITULO">Crear Solicitud</h1>
      <form className="crearSolicitud__formulario" onSubmit={onSubmit}>
        <div className="crearSolicitud__input LABELINPUT">
          <label htmlFor="nombre">Nombre del solicitante</label>
          <input onChange={handleNombre} id="nombre" type="text" name="nombre" placeholder="Nombre" />
        </div>

        <div className="crearSolicitud__input LABELINPUT">
          <label htmlFor="rut">Rut del solicitante:</label>
          <input onChange={handleRut} id="rut" type="text" name="rut" placeholder="Rut" />
        </div>

        <div className="crearSolicitud__input LABELINPUT">
          <label htmlFor="carrera">Carrera del solicitante:</label>
          <input onChange={handleCarrera} id="carrera" type="text" name="carrera" placeholder="Carrera" />
        </div>

        <div className="crearSolicitud__input LABELINPUT">
          <label htmlFor="tipoEstudiante">Tipo de estudiante:</label>
          <select onChange={handleTipoEstudiante}>
            <option value="">Seleccione una opción</option>
            <option value="Estudiante Nuevo">Estudiante Nuevo</option>
            <option value="Estudiante Antiguo">Estudiante Antiguo</option>
          </select>
        </div>

        {/* archivo */}
        <div className="crearSolicitud__input LABELINPUT">
          <label htmlFor="asignacionFamiliar">Asignación familiar</label>
          <input onChange={handleAsignacionFamiliar} id="asignacionFamiliar" type="file" />
        </div>
        <div className="crearSolicitud__input LABELINPUT">
          <label htmlFor="certificadoNacimiento">Certificado de nacimiento</label>
          <input onChange={handleCertificadoNacimiento} id="certificadoNacimiento" type="file" />
        </div>
        <div className="crearSolicitud__input LABELINPUT">
          <label htmlFor="comprobantePago">Comprobante de pago</label>
          <input onChange={handleComprobantePago} id="comprobantePago" type="file" />
        </div>
        {/* datos adicionales text area */}
        <div className="crearSolicitud__input LABELINPUT">
          <label htmlFor="datosAdicionales">Datos adicionales</label>
          <textarea
            onChange={handleDatosAdicionales}
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
