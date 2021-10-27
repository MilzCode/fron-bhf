import React from "react";
import Volver from "../../components/other/Volver";
import { useRouter } from "next/router";

const SolicitudHistoricoEncargado = () => {
  const router = useRouter();

  return (
    <>
      <h1 className="TITULO">
        Detalles Solicitud: {router.query.solicitudhistorico}
      </h1>
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
          Se aprobo la solicitud pero falta la documentación 24, se solcita a
          cobranzas revisar esto.... Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Amet asperiores ratione ut sint soluta quibusdam
          laudantium magni nobis. Quibusdam labore molestias cupiditate eaque
          ipsum praesentium autem voluptatibus voluptates corrupti voluptas!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
          asperiores ratione ut sint soluta quibusdam laudantium magni nobis.
          Quibusdam labore molestias cupiditate eaque ipsum praesentium autem
          voluptatibus voluptates
        </div>
      </div>
      <Volver />
    </>
  );
};

export default SolicitudHistoricoEncargado;
