import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Volver from "../../components/other/Volver";

/**
 * Esta vista es la correspondiente a la página de detalle de una solicitud, desde el punto de vista de un Funcionario.
 *
 * **/


const MiSolicitud = () => {
  const router = useRouter();
  useEffect(() => {
    console.log(router.query.solicitud);
  }, [router.query.solicitud]);

  return (
    <div className="miSolicitud">
      <h1 className="TITULO">Detalles Solicitud: {router.query.solicitud}</h1>
      <h3 className="TITULO2">Datos del Beneficiado:</h3>
      <div className="TABLERESPONSIVE2">
        <div>Nombre: Mohandas Gandhi</div>
        <div>Rut: 99.999.999-9</div>
        <div>Fecha: 03/03/2022</div>
        <div>Estado: En revisión por (Cobranzas)</div>
        <div>
          Documentación: <a href="#">Descargar...</a>
        </div>
      </div>
      <h3 className="TITULO2">Detalles adicionales:</h3>
      <div className="TABLERESPONSIVE2">
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
          asperiores ratione ut sint soluta quibusdam laudantium magni nobis.
          Quibusdam labore molestias cupiditate eaque ipsum praesentium autem
          voluptatibus voluptates corrupti voluptas! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Amet asperiores ratione ut sint soluta
          quibusdam laudantium magni nobis. Quibusdam labore molestias
          cupiditate eaque ipsum praesentium autem voluptatibus voluptates
          corrupti voluptas! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Amet asperiores ratione ut sint soluta quibusdam laudantium
          magni nobis. Quibusdam labore molestias cupiditate eaque ipsum
          praesentium autem voluptatibus voluptates corrupti voluptas! Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Amet asperiores
          ratione ut sint soluta quibusdam laudantium magni nobis. Quibusdam
          labore molestias cupiditate eaque ipsum praesentium autem voluptatibus
          voluptates corrupti voluptas! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Amet asperiores ratione ut sint soluta quibusdam
          laudantium magni nobis. Quibusdam labore molestias cupiditate eaque
          ipsum praesentium autem voluptatibus voluptates corrupti voluptas!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
          asperiores ratione ut sint soluta quibusdam laudantium magni nobis.
          Quibusdam labore molestias cupiditate eaque ipsum praesentium autem
          voluptatibus voluptates corrupti voluptas! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Amet asperiores ratione ut sint soluta
          quibusdam laudantium magni nobis. Quibusdam labore molestias
          cupiditate eaque ipsum praesentium autem voluptatibus voluptates
          corrupti voluptas! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Amet asperiores ratione ut sint soluta quibusdam laudantium
          magni nobis. Quibusdam labore molestias cupiditate eaque ipsum
          praesentium autem voluptatibus voluptates corrupti voluptas!
        </div>
      </div>
      <Volver />
    </div>
  );
};

export default MiSolicitud;
