import React from "react";
import Volver from "../../components/other/Volver";
import Link from "next/link";

//Funcionario
const MisSolicitudes = () => {
  return (
    <div className="misSolicitudes">
      <h1 className="TITULO">Mis Solicitudes</h1>
      <h3 className="TITULO2">Solicitudes en curso:</h3>
      <div className="TABLERESPONSIVE">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Fecha</th>
              <th scope="col">Nombre de beneficiado</th>
              <th scope="col">Rut beneficiado</th>
              <th scope="col">Estado</th>
              <th scope="col">Detalles</th>
              <th scope="col">Cancelar (Solo estado recepcionada)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>26/03/2022</td>
              <td>Michel Campos Campos</td>
              <td>22.222.222-2</td>
              <td>Recepcionada</td>
              <td>
                <button className="BUTTONSTYLENONE">
                  <Link passHref href="/mis-solicitudes/555">
                    <i className="fas fa-eye COLORPURPLE" />
                  </Link>
                </button>
              </td>
              <td>
                <button className="BUTTONSTYLENONE">
                  <i className="fas fa-trash COLORRED"></i>
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>26/03/2022</td>
              <td>Matias Ortiz Urrutia</td>
              <td>23.232.232-2</td>
              <td>Revisión</td>
              <td>
                <button className="BUTTONSTYLENONE">
                  <Link passHref href="/mis-solicitudes/555">
                    <i className="fas fa-eye COLORPURPLE" />
                  </Link>
                </button>
              </td>
              <td>No disponible</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="TITULO2">Solicitudes en Finalizadas:</h3>
      <div className="TABLERESPONSIVE">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Fecha</th>
              <th scope="col">Nombre de beneficiado</th>
              <th scope="col">Rut beneficiado</th>
              <th scope="col">Estado</th>
              <th scope="col">Detalles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>26/03/2021</td>
              <td>Michel Campos Campos</td>
              <td>22.222.222-2</td>
              <td>Aprobada</td>
              <td>
                <button className="BUTTONSTYLENONE">
                  <Link passHref href="/mis-solicitudes/555">
                    <i className="fas fa-eye COLORPURPLE" />
                  </Link>
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>26/03/2021</td>
              <td>Matias Ortiz Urrutia</td>
              <td>23.232.232-2</td>
              <td>Rechazada</td>
              <td>
                <button className="BUTTONSTYLENONE">
                  <Link passHref href="/mis-solicitudes/555">
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

export default MisSolicitudes;
