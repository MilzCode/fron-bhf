import React, { useState } from "react";
import Volver from "../components/other/Volver";
import { useEffect } from "react";
import useValidacion from "../hooks/useValidation";
import validarCrearSolicitud from "../validations/validarCrearSolicitud";
import useEnviarSolicitudFuncionario from "../hooks/useEnviarSolicitudFuncionario";
import { useRouter } from "next/router";
import formatoRut from "../utils/formatoRut";
import { Loader } from "rsuite";

const stateInicialCrearSolicitud = {
  nombre: "",
  rut: "",
  carrera: "",
  tipoEstudiante: "",
  periodo: "",
  asignacionFamiliar: null,
  certificadoNacimiento: null,
  comprobantePago: null,
  documentos: "",
  datosAdicionales: "",
};

//Funcionario
const CrearSolicitud = ({ id }: any) => {
  const router = useRouter();
  const [enviado, setEnviado] = useState(false);
  const [clickEnviar, setClickEnviar] = useState(false);
  //esta wea no se tiene que enviar 2 veces
  const enviarSolicitud = async () => {
    if (clickEnviar) return;
    if (enviado) return;
    setClickEnviar(true);

    const name_benef = valores.nombre;
    const rut_benef = formatoRut(valores.rut);
    const carrera_benef = valores.carrera;
    const type_benef = valores.tipoEstudiante;
    const documentacion: any = new Array();
    documentacion.push(valores.asignacionFamiliar[0]);
    documentacion.push(valores.certificadoNacimiento[0]);
    documentacion.push(valores.comprobantePago[0]);
    for (let index = 0; index < valores.documentos.length; index++) {
      documentacion.push(valores.documentos[index]);
    }
    const anio = valores.periodo;
    const comentario_funcionario = valores.datosAdicionales;
    const user_id = id;
    //solucionar podria enviarse al login
    if (!user_id) {
      console.log("No hay ID");
      return;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks

    const enviar = await useEnviarSolicitudFuncionario(
      name_benef,
      rut_benef,
      carrera_benef,
      type_benef,
      documentacion,
      anio,
      user_id,
      comentario_funcionario
    );

    if (enviar.mensaje === "Solicitud creada con exito") {
      setEnviado(true);
    }
  };

  const { valores, errores, handleSubmit, handleChange, handleBlur } =
    useValidacion(
      stateInicialCrearSolicitud,
      validarCrearSolicitud,
      enviarSolicitud
    );

  useEffect(() => {
    if (enviado) {
      router.push("/panel?oksol=true");
    }
  }, [enviado]);

  return (
    <div className="crearSolicitud">
      <h1 className="TITULO">Crear Solicitud</h1>
      <form className="crearSolicitud__formulario" onSubmit={handleSubmit}>
        <div className="crearSolicitud__input LABELINPUT">
          <label htmlFor="nombre">Nombre y apellidos del estudiante</label>
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
            onChange={(e) => {
              handleChange(e, true);
            }}
            onBlur={handleBlur}
            value={formatoRut(valores.rut)}
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
            name="tipoEstudiante"
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Seleccione una opción</option>
            <option value="nuevo">Estudiante Nuevo</option>
            <option value="antiguo">Estudiante Antiguo</option>
          </select>
          {errores.tipoEstudiante && (
            <>
              <p className="ERROR">{errores.tipoEstudiante}</p>
            </>
          )}
        </div>

        <div className="crearSolicitud__input LABELINPUT">
          <label htmlFor="periodo">Periodo (año):</label>
          <select
            id="periodo"
            name="periodo"
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Seleccione una opción</option>
            <option>2021</option>
          </select>
          {errores.periodo && (
            <>
              <p className="ERROR">{errores.periodo}</p>
            </>
          )}
        </div>

        <div className="crearSolicitud__input LABELINPUT">
          <label htmlFor="asignacionFamiliar">Asignación familiar</label>
          <input
            id="asignacionFamiliar"
            name="asignacionFamiliar"
            type="file"
            onChange={handleChange}
            onBlur={handleBlur}
            accept=" .jpg, .jpeg, .pdf, .docx"
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
            accept=" .jpg, .jpeg, .pdf, .docx"
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
            accept=" .jpg, .jpeg, .pdf, .docx"
          />
          {errores.comprobantePago && (
            <>
              <p className="ERROR">{errores.comprobantePago}</p>
            </>
          )}
        </div>
        <div className="crearSolicitud__input LABELINPUT">
          <label htmlFor="aux">Otros documentos (opcional)</label>
          <input
            id="documento"
            name="documentos"
            type="file"
            accept=" .jpg, .jpeg, .pdf, .docx"
            multiple
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errores.documentos && (
            <>
              <p className="ERROR">{errores.documentos}</p>
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
      {clickEnviar && <Loader backdrop content="Cargando..." vertical />}
    </div>
  );
};

export default CrearSolicitud;
