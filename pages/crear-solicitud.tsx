import React, { useState } from "react";
import Volver from "../components/other/Volver";
import { useEffect } from "react";
import useValidacion from "../hooks/useValidation";
import validarCrearSolicitud from "../validations/validarCrearSolicitud";

const stateInicialCrearSolicitud = {
  nombre: "",
  rut: "",
  carrera: "",
  tipoEstudiante: "",
  asignacionFamiliar: null,
  certificadoNacimiento: null,
  comprobantePago: null,
  documentos: "",
  datosAdicionales: "",
};

//Funcionario
const CrearSolicitud = () => {
  const enviarSolicitud = () => {
    console.log("Enviar solicitud");
    console.log(valores);
  };

  const { valores, errores, handleSubmit, handleChange, handleBlur } =
    useValidacion(
      stateInicialCrearSolicitud,
      validarCrearSolicitud,
      enviarSolicitud
    );

  return (
    <div className="crearSolicitud">
      <h1 className="TITULO">Crear Solicitud</h1>
      <form className="crearSolicitud__formulario" onSubmit={handleSubmit}>
        <div className="crearSolicitud__input LABELINPUT">
          <label htmlFor="nombre">Nombre del estudiante</label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Nombre"
          />
          {errores.nombre && (
            <>
              <p className="ERROR">{errores.nombre}</p>
            </>
          )}
        </div>

        <div className="crearSolicitud__input LABELINPUT">
          <label htmlFor="rut">Rut del estudiante</label>
          <input
            id="rut"
            type="text"
            name="rut"
            placeholder="Rut"
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errores.rut && (
            <>
              <p className="ERROR">{errores.rut}</p>
            </>
          )}
        </div>

        <div className="crearSolicitud__input LABELINPUT">
          <label htmlFor="carrera">Carrera del estudiante</label>
          <input
            id="carrera"
            type="text"
            name="carrera"
            placeholder="Carrera"
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errores.carrera && (
            <>
              <p className="ERROR">{errores.carrera}</p>
            </>
          )}
        </div>

        <div className="crearSolicitud__input LABELINPUT">
          <label htmlFor="tipoEstudiante">Tipo de estudiante:</label>
          <select
            id="tipoEstudiante"
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Seleccione una opción</option>
            <option value="Estudiante Nuevo">Estudiante Nuevo</option>
            <option value="Estudiante Antiguo">Estudiante Antiguo</option>
          </select>
          {errores.tipoEstudiante && (
            <>
              <p className="ERROR">{errores.tipoEstudiante}</p>
            </>
          )}
        </div>

        {/* archivo */}
        <div className="crearSolicitud__input LABELINPUT">
          <label htmlFor="asignacionFamiliar">Asignación familiar</label>
          <input
            id="asignacionFamiliar"
            name="asignacionFamiliar"
            type="file"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errores.asignacionFamiliar && (
            <>
              <p className="ERROR">{errores.asignacionFamiliar}</p>
            </>
          )}
        </div>
        <div className="crearSolicitud__input LABELINPUT">
          <label htmlFor="certificadoNacimiento">
            Certificado de nacimiento
          </label>
          <input
            id="certificadoNacimiento"
            name="certificadoNacimiento"
            type="file"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errores.certificadoNacimiento && (
            <>
              <p className="ERROR">{errores.certificadoNacimiento}</p>
            </>
          )}
        </div>
        <div className="crearSolicitud__input LABELINPUT">
          <label htmlFor="comprobantePago">Comprobante de pago</label>
          <input
            id="comprobantePago"
            name="comprobantePago"
            type="file"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errores.comprobantePago && (
            <>
              <p className="ERROR">{errores.comprobantePago}</p>
            </>
          )}
        </div>
        <div className="crearSolicitud__input LABELINPUT">
          <label htmlFor="documentos">Otros documentos (Opcional)</label>
          <input
            id="documentos"
            name="documentos"
            type="file"
            multiple
            onChange={function (e) {
              console.log(e.target.files);
              //validación documentos
              let documentos = e.target.files;
              let valido = true;
              if (documentos && documentos.length > 0) {
                for (let i in documentos) {
                  if (/(.jpg|.jpeg|.png|.pdf|.docx)$/i.test(documentos[i].name) === false) {
                    valido = false;
                  }
                }
              }
              if(valido){
                let changedE = e;
                changedE.target.value = "valido";
                handleChange(changedE);
              }
              else {
                let changedE = e;
                changedE.target.value = "no valido";
                handleChange(changedE);
              }
            }}
          />
          {errores.comprobantePago && (
            <>
              <p className="ERROR">{errores.comprobantePago}</p>
            </>
          )}
        </div>
        {/* datos adicionales text area */}
        <div className="crearSolicitud__input LABELINPUT">
          <label htmlFor="datosAdicionales">Datos adicionales</label>
          <textarea
            id="datosAdicionales"
            name="datosAdicionales"
            placeholder="Datos adicionales"
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errores.datosAdicionales && (
            <>
              <p className="ERROR">{errores.datosAdicionales}</p>
            </>
          )}
        </div>
        {/* Botones */}
        <div className="crearSolicitud__botones BOTONES">
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

export default CrearSolicitud;
