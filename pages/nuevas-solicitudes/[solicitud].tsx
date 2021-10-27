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
  const router = useRouter();
  const [comentarios, setComentarios] = useState("");

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
          {DGE && (
            <button
              type="button"
              className="BOTON BACKGROUNDCOLORPURPLE"
              onClick={handlePendiente}
            >
              Pendiente
            </button>
          )}

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
            {solicitud
              ? "¿Desea aceptar la solicitud?"
              : solicitud === null && DGE
              ? "¿Dejar Solicitud en estado Pendiente?"
              : "¿Desea Rechazar la solicitud?"}
          </VentanaModal>
        )}
      </div>

      <Volver />
    </>
  );
};

export default SolicitudEncargado;
