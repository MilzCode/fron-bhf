import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Volver from "../../components/other/Volver";
import VentanaModal from "../../components/other/VentanaModal";

const SolicitudPendiente = () => {
  const router = useRouter();
  const [comentarios, setComentarios] = useState("");
  const [solicitud, setSolicitud] = useState(true);
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

  const handleSubmit = () => {
    //Si la solicitud de se rechaza hacer lo siguiente:
    if (!solicitud) {
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
      <h3 className="TITULO2">
        Detalles adicionales de (Dirección de personas):
      </h3>
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
      <h3 className="TITULO2">Detalles adicionales de (Cobranzas):</h3>
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
      <h3 className="TITULO2">Detalles adicionales de (DGE):</h3>
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
          {/* En este caso como seria el comentario final este comentario debiese ser añadido como DGE 2 o DGE Comentario Pendiente o Detalles adicionales DGE pendiente, algo asi */}
          <label htmlFor="datosAdicionales">
            Añadir comentario&nbsp;
            {!solicitud && !comentarios && (
              <span className="COLORRED">
                (Campo Obligatorio para rechazar)
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
          <button type="submit" className="BOTON" onClick={handleAceptar}>
            Aceptar
          </button>
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

export default SolicitudPendiente;
