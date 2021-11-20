import { useState, useEffect } from "react";
import { Loader } from "rsuite";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { AuthProvider } from "../context/AuthConext";
import "../styles/login/login.scss";

import useCheckLogin from "../hooks/useCheckLogin";
import Layout from "../components/layout/Layout";

import Script from "next/script";
import "rsuite/dist/rsuite.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  //rutas de acceso sin login
  const publicRoutes = ["/"];

  //ruta actual
  const path = router.asPath.split("?")[0];
  //parametro que indica true si la ruta actual es publica
  const isPublicRoute = publicRoutes.includes(path);
  //show muestra el contenido de la pagina si es true
  const [show, setShow] = useState(false);
  //datos del usuario logeado, si la base de datos responde que no hay usuario sera false,
  // si responde correctamente tendra un objeto con los datos del usuario.
  const [user, setUser]: any = useState(null);
  //funcion para llamar a la base de datos y solicitar datos del usuario.
  const checkLogin = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const data = await useCheckLogin();
    //si no esta logueado redirige a logear
    if (!data.email) {
      setShow(false);
      setUser(false); //en caso de que sea false significa que la base de datos respondio con un error o el usuario no esta logeado
      !isPublicRoute && router.push("/");
      return;
    }
    setShow(true);
    setUser({ rol: data.rol, id: data.id });
    return data;
  };

  useEffect(() => {
    checkLogin();
  }, [path]);

  return (
    <>
      <Head>
        <title>Plataforma Beca Hijo de Funcionario</title>
        <meta
          name="description"
          content="Plataforma Beca Hijo de Funcionario"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        {/* ESTO ES PARA INICIO CON GOOGLE */}
        <meta
          name="google-signin-client_id"
          content="920846582943-uh9c9joa2nqkmk6skvtg46553dcp6490.apps.googleusercontent.com"
        ></meta>
        <script src="https://apis.google.com/js/platform.js" defer></script>
        {/* FIN INICIO CON GOOGLE */}
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        ></link>
        {/* MDB */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.css"
          rel="stylesheet"
        />
      </Head>
      <Script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.js"
      ></Script>

      {/* <Component {...pageProps} /> */}

      <AuthProvider>
        {isPublicRoute && user === false ? (
          // && user === false //con esta linea podriamos validar que la base de datos respondio que el usuario no esta logueado
          //en la ruta raiz va el login
          <Component rol={null} id={null} {...pageProps} />
        ) : (
          <>
            {show && user && (
              <Layout>
                <Component rol={user.rol} id={user.id} {...pageProps} />
              </Layout>
            )}
            {!show && <Loader backdrop content="Cargando..." vertical />}
          </>
        )}
      </AuthProvider>
    </>
  );
}
export default MyApp;
