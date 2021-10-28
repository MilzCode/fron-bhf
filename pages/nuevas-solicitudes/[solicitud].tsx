import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Volver from "../../components/other/Volver";
import VentanaModal from "../../components/other/VentanaModal";

/**
 * Esta vista es la correspondiente a la página de detalle de una solicitud, desde el punto de vista de un encargado.
 *
 * **/

const SolicitudEncargado = () => {
  //si es un encargado DGE.
  const DGE = true;
  const DPE = false;
  const Cobranza = false;
  const router = useRouter();
  const [comentarios, setComentarios] = useState("");
  const [planta, setPlanta] = useState("");
  const [unidad, setUnidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [arancel, setArancel] = useState("");
  const [estadoMatricula, setEstadoMatricula] = useState("");

  //Tomaremos solicitud con 3 estados posibles:
  // - Aceptada: true
  // - Rechazada: false
  // - Pendiente: Null
  const [solicitud, setSolicitud] = useState<boolean | null>(true);
  const [enviada, setEnviada] = useState(false);
  useEffect(() => {
    console.log(router.query.solicitud);
  }, [router.query.solicitud]);

  const handleChange = (e: any) => {
    setComentarios(e.target.value);
  };

  const handleAceptar = (e: any) => {
    setSolicitud(true);
    setEnviada(true);
  };

  const handleRechazar = () => {
    setSolicitud(false);
    if (comentarios === "") {
      return;
    }
    setEnviada(true);
  };

  const handlePendiente = () => {
    setSolicitud(null);
    if (comentarios === "") {
      return;
    }
    setEnviada(true);
  };
  const handlePlanta = (e: any) => {
    let nuevaPlanta = e.target.value;
    setPlanta(nuevaPlanta);
  };
  const handleUnidad = (e: any) => {
    let nuevaUnidad = e.target.value;
    setUnidad(nuevaUnidad);
  };
  const handleCategoria = (e: any) => {
    let nuevaCategoria = e.target.value;
    setCategoria(nuevaCategoria);
  }
  const handleArancel = (e: any) => {
    let nuevaArancel = e.target.value;
    setArancel(nuevaArancel);
  };
  const handleEstadoMatricula = (e: any) => {
    let nuevaEstadoMatricula = e.target.value;
    setEstadoMatricula(nuevaEstadoMatricula);
  };

  const handleSubmit = () => {
    //Si la solicitud se va a estado pendiente
    if (solicitud == null) {
      //si no tiene el rol de DGE no puede dejar en estado pendiente
      if (!DGE) return;
      console.log("Pendiente");
      return;
    }
    //Si la solicitud de se rechaza hacer lo siguiente:
    if (solicitud == false) {
      console.log("rechazada");
      return;
    }
    //Si la solicitud de se acepta hacer lo siguiente:
    console.log("aceptada");
  };
  return (
    <>
      <h1 className="TITULO">Detalles Solicitud: {router.query.solicitud}</h1>
      <h3 className="TITULO2">Datos del Beneficiado:</h3>
      <div className="TABLERESPONSIVE2">
        <div>Nombre: Mohandas Gandhi</div>
        <div>Rut: 99.999.999-9</div>
        <div>Fecha: 03/03/2022</div>
        <div>Estado: En revisión por (Dirección de personas)</div>
        <div>
          Documentación: <a href="#">Descargar...</a>
        </div>
      </div>
      <h3 className="TITULO2">Datos del Funcionario:</h3>
      <div className="TABLERESPONSIVE2">
        <div>Nombre: Diego Perez</div>
        <div>Rut: 99.999.999-9</div>
        <div>Departamento: Ing. industrial</div>
        <div>Correo: correo@dominio.cl</div>
        <div>Fono: 9 4444 3333</div>
      </div>
      <hr />
      <h3 className="TITULO2">Detalles adicionales de (Funcionario):</h3>
      <div className="TABLERESPONSIVE2">
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
          asperiores ratione ut sint soluta quibusdam laudantium magni nobis.
          Quibusdam labore molestias cupiditate eaque ipsum praesentium autem
          voluptatibus voluptates corrupti voluptas! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Amet asperiores ratione ut sint soluta
          quibusdam laudantium magni nobis. Quibusdam labore molestias
          cupiditate eaque ipsum praesentium autem voluptatibus voluptates
        </div>
      </div>
      <br />
      <hr />
      <div>
        {DPE && <>
          <div className="LABELINPUT">
            <label htmlFor="planta">
              Planta de funcionario
            </label>
            <input onChange={handlePlanta} id="planta" name="planta" type="text" />
          </div>
          <div className="LABELINPUT">
            <label htmlFor="unidad">
              Unidad de funcionario
            </label>
            <input onChange={handleUnidad} id="unidad" name="unidad" type="text" />
          </div>
          <div className="LABELINPUT">
            <label htmlFor="categoria">
              Categoría de funcionario
            </label>
            <select onChange={handleCategoria} name="categoria" id="categoria">
              <option value="">Seleccione una opción</option>
              <option value="academico">Académico</option>
              <option value="noAcademico">No académico</option>
              <option value="exfuncionario">Exfuncionario</option>
              <option value="excepcionEspecial">Excepción especial</option>
            </select>
          </div>
          <div className="LABELINPUT">
            <label htmlFor="estadoMatricula">Estado de matrícula:</label>
            <select onChange={handleEstadoMatricula} name="estadoMatricula" id="estadoMatricula">
              <option value="">Seleccione una opción</option>
              <option value="matriculado">Matriculado</option>
              <option value="noMatriculado">No matriculado</option>
            </select>
          </div>
          <div className="LABELINPUT">
            <label htmlFor="arancel">
              Arancel a financiar
            </label>
            <select onChange={handleArancel} name="arancel" id="arancel">
              <option value="">Seleccione una opción</option>
              <option value="Básico">Básico</option>
              <option value="Completo">Completo</option>
            </select>
          </div>
        </>}
        {DGE && <>
          <div className="LABELINPUT">
            <label htmlFor="estadoMatricula">Estado de matrícula:</label>
            <input type="text" disabled value={estadoMatricula} />
          </div>
        </>}
        <div className="LABELINPUT">
          <label htmlFor="datosAdicionales">
            Añadir comentario&nbsp;
            {solicitud == false && !comentarios && (
              <span className="COLORRED">
                (Campo Obligatorio para rechazar)
              </span>
            )}
            {solicitud == null && !comentarios && (
              <span className="COLORRED">
                (Campo Obligatorio para estado pendiente)
              </span>
            )}
          </label>
          <textarea
            id="datosAdicionales"
            name="datosAdicionales"
            placeholder="Datos adicionales"
            onChange={(e) => {
              handleChange(e);
            }}
          ></textarea>
        </div>
        <div className="BOTONES">
          <button type="button" className="BOTON" onClick={handleAceptar}>
            Aceptar
          </button>
          {DGE && <>
            <button
              type="button"
              className="BOTON BACKGROUNDCOLORPURPLE"
              onClick={handlePendiente}
            >
              Pendiente
            </button>
          </>}

          <button
            type="button"
            className="BOTON BACKGROUNDCOLORRED"
            onClick={handleRechazar}
          >
            Rechazar
          </button>
        </div>
        {enviada && (
          <VentanaModal
            exitBotonText="Cancelar"
            aceptarBotonText="Confirmar"
            exitFunction={() => {
              setEnviada(false);
            }}
            aceptarFunction={handleSubmit}
          >
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            {solicitud
              ? "¿Desea aceptar la solicitud?"
              : solicitud === null && DGE
                ? "¿Dejar Solicitud en estado Pendiente?"
                : "¿Desea Rechazar la solicitud?"}
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          </VentanaModal>
        )}
      </div>

      <Volver />
      <br />
    </>
  );
};

export default SolicitudEncargado;
