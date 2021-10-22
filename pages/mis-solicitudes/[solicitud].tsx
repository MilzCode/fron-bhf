import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Volver from "../../components/other/Volver";

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
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>Nombre: Mohandas Gandhi</td>
            </tr>
            <tr>
              <td>Rut: 99.999.999-9</td>
            </tr>
            <tr>
              <td>Fecha: 03/03/2022</td>
            </tr>
            <tr>
              <td>Documentación: Descargar...</td>
            </tr>
            <tr>
              <td>Des</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Volver />
    </div>
  );
};

export default MiSolicitud;
