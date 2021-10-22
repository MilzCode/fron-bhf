import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  const rol = "funcionario";
  return (
    <>
      <div className="p-5 text-center bg-light">
        <h1 className="mb-3">Sistema de gestión de noticias y eventos UCN</h1>
        <h4 className="mb-3">Bienvenido USUARIO</h4>
      </div>
      <>
        <div>
          <Link href="/crear-solicitud">Crear Solicitud</Link>
        </div>
        <div>
          <Link href="/mis-solicitudes">Mis solicitudes</Link>
        </div>
        <div>
          <Link href="/mis-datos">Mis Datos</Link>
        </div>
      </>
    </>
  );
};

export default Home;
