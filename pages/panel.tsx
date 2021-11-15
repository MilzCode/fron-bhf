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
        nameUser="TEST"
        rolUser="TEST"
        title="Plataforma Beca Hijo de Funcionario"
        onCerrarSesion={CerrarSesion}
        inicio
      />
      <>
        <Divider>Mi cuenta </Divider>
        <div className="row">
          <CardPanel title="Crear Solicitud de Beca" href="/crear-solicitud">
            Permite ingresar una nueva solicitud si es que es posible y no hay
            una en curso para la misma persona.
          </CardPanel>
          <CardPanel title="Ver mis solicitudes" href="/mis-solicitudes">
            Permite ver las solicitudes haz realizado.
          </CardPanel>
          <CardPanel title="Mis Datos" href="/mis-datos">
            Permite ver o editar mis datos de contacto.
          </CardPanel>
        </div>

        {rol === "dpe" && (
          <>
            <br />
            <Divider>Dirección de personas </Divider>

            <div className="row">
              <CardPanel
                title="Crear solicitud a tercero"
                href="/crear-solicitud-dpe"
              >
                Permite ingresar una nueva solicitud para un tercero si es que
                no hay una en curso para la misma persona.
              </CardPanel>
              <CardPanel
                title="Revisar nuevas solicitudes"
                href="/nuevas-solicitudes"
              >
                Despliega todas las solicitud pendientes.
              </CardPanel>
              <CardPanel
                title="Historial de solicitudes"
                href="/historial-solicitudes"
              >
                Se muestra el historial de todas las solicitudes hechas.
              </CardPanel>
              <CardPanel
                title="Solicitudes estado Pendiente"
                href="/solicitudes-pendientes"
              >
                Se muestra el historial de todas las solicitudes con estados
                pendientes.
              </CardPanel>
            </div>
          </>
        )}
      </>
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
