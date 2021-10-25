import React from "react";
import Link from "next/link";
import Volver from "../../components/other/Volver";

const SolicitudesPendientes = () => {
  return (
    <div>
      <h1 className="TITULO">Solicitudes estado Pendiente</h1>
      <div className="FILTRO">
        <div className="LABELINPUT">
          <label htmlFor="search">Filtrar por nombre o rut</label>
          <input id="search" type="text" placeholder="Ingrese nombre o rut" />
        </div>
        {/* ordenar por */}
        <div className="LABELINPUT">
          <label htmlFor="order">Ordenar por</label>
          <select id="order">
            <option value="">Seleccione</option>
            <option value="1">Nombre</option>
            <option value="2">Rut Beneficiado</option>
            <option value="3">Fecha</option>
          </select>
        </div>
      </div>
      <div className="TABLERESPONSIVE">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Fecha</th>
              <th scope="col">Rut Funcionario</th>
              <th scope="col">Nombre de beneficiado</th>
              <th scope="col">Rut beneficiado</th>
              <th scope="col">Estado</th>
              {/* LO IDEAL ES EL QUE EL RESUMEN SEA CORTO POR EJEMPLO UNOS 25 caracteres max */}
              <th scope="col">Resumen</th>
              <th scope="col">Detalles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>26/03/2021</td>
              <td>99.999.999-9</td>
              <td>Gabriel Iriarte</td>
              <td>22.222.222-2</td>
              <td>Pendiente</td>
              <td>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                ut cum beatae voluptatem eum, architecto quo maxime cupiditate,
                rem laudantium accusantium, quis sunt hic non.
              </td>
              <td>
                <button className="BUTTONSTYLENONE">
                  <Link passHref href="/solicitudes-pendientes/999">
                    <i className="fas fa-eye COLORPURPLE" />
                  </Link>
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>26/03/2021</td>
              <td>99.999.999-9</td>
              <td>Rodrigo Dominguez</td>
              <td>23.232.232-2</td>
              <td>Pendiente</td>
              <td>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ea
                quidem velit doloremque rerum temporibus aliquid possimus
                consequuntur, ipsum deserunt doloribus impedit aperiam odio
                sequi!
              </td>
              <td>
                <button className="BUTTONSTYLENONE">
                  <Link passHref href="/solicitudes-pendientes/999">
                    <i className="fas fa-eye COLORPURPLE" />
                  </Link>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Volver />
    </div>
  );
};

export default SolicitudesPendientes;
