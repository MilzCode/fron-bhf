import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import VentanaModal from "../components/other/VentanaModal";
import CerrarSesion from "../components/other/CerrarSesion";
import HeaderPanel from "../components/panel/HeaderPanel";
import CardPanel from "../components/panel/CardPanel";
import { Divider } from "rsuite";

const Home: NextPage = ({ rol }: any) => {
  const router = useRouter();
  return (
    <>
      {router.query.oksol == "true" && (
        <VentanaModal exitFunction={() => router.push("/panel")}>
          Solicitud Creada con exito
        </VentanaModal>
      )}
      <HeaderPanel
        nameUser="usuario"
        rolUser="funcionario"
        title="WENA"
        onCerrarSesion={CerrarSesion}
      />
      <>
        <Divider>Mi cuenta </Divider>
        <div className="cardPanelContainer">
          <CardPanel title="Crear Solicitud de Beca" href="/crear-solicitud">
            Permite ingresar una nueva solicitud si es que es posible y no hay
            una en curso para la misma persona.
          </CardPanel>
          <CardPanel title="Crear Solicitud de Beca" href="/crear-solicitud">
            Permite ingresar una nueva solicitud si es que es posible y no hay
            una en curso para la misma persona.
          </CardPanel>
        </div>

        {/* <div className="cards">
          <div className="card">
            <h5>Crear Solicitud de Beca</h5>
            <p className="card__text">
              Permite ingresar una nueva solicitud si es que es posible y no hay
              una en curso para la misma persona.
            </p>
            <Link href="/crear-solicitud">
              <a className="button__funcionalidades">IR</a>
            </Link>
          </div>
          <div className="card">
            <h5>Revisar Solicitud de Beca</h5>
            <p className="card__text">Permite revisar el estado de solicitud de beca, si es que hay una en curso.</p>
            <Link href="/mis-solicitudes"><a className="button__funcionalidades">IR</a></Link>
          </div>
          <div className="card">
            <h5>Mis Datos</h5>
            <p className="card__text">Permite ver o editar mis datos de contacto.</p>
            <Link href="/mis-datos"><a className="button__funcionalidades">IR</a></Link>
          </div>
        </div> */}

        {rol === "dpe" && (
          <>
            <hr />
            <h2>Dirección de personas</h2>
            <hr />
            <div className="cards">
              {/* <div className="card">
                <h5>Crear solicitud por un tercero</h5>
                <p>
                  Permite ingresar una nueva solicitud si es que es posible y no
                  hay una en curso para la misma persona.
                </p>
                <Link href="/crear-solicitud-dpe">
                  <a className="button__funcionalidades">IR</a>
                </Link>
              </div> */}

              {/* <div className="card">
            <h5>Revisar nuevas solicitudes</h5>
            <p>Despliega todas las solicitud pendientes.</p>
            <Link href="/nuevas-solicitudes"><a className="button__funcionalidades">IR</a></Link>
          </div>
          <div className="card">
            <h5>Historial de solicitudes</h5>
            <p>Se muestra el historial de todas las solicitudes hechas.</p>
            <Link href="/historial-solicitudes"><a className="button__funcionalidades">IR</a></Link>
          </div>
          <div className="card">
            <h5>Solicitudes estado Pendiente</h5>
            <p>Se muestra el historial de todas las solicitudes con estados pendientes</p>
            <Link href="/solicitudes-pendientes"><a className="button__funcionalidades">IR</a></Link>
          </div> */}
            </div>
          </>
        )}
      </>
      <br />
    </>
  );
};

export default Home;
