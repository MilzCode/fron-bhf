import React from "react";
import Link from "next/link";
import Volver from "../../components/other/Volver";

//Encargado

/**
 * Esta vista corresponde a la página de nuevas solicitudes desde el punto de vista de un encargado.
 * **/
const NuevasSolicitudes = () => {



  return (
    
    <div className="nuevasSolicitudes">
      <h1 className="TITULO">Nuevas solicitudes</h1>
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
              <th scope="col">Detalles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>26/03/2022</td>
              <td>99.999.999-9</td>
              <td>Michel Campos Campos</td>
              <td>22.222.222-2</td>
              <td>Recepcionada</td>
              <td>
                <button className="BUTTONSTYLENONE">
                  <Link passHref href="/nuevas-solicitudes/555">
                    <i className="fas fa-eye COLORPURPLE" />
                  </Link>
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>26/03/2022</td>
              <td>99.999.999-9</td>
              <td>Matias Ortiz Urrutia</td>
              <td>23.232.232-2</td>
              <td>Visualizada</td>
              <td>
                <button className="BUTTONSTYLENONE">
                  <Link passHref href="/nuevas-solicitudes/555">
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

export default NuevasSolicitudes;
