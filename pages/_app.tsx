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

function MyApp({ Component, pageProps }: AppProps) {
  //esta linea es para no validar la conexion con la base de datos para debugear
  const router = useRouter();
  //rutas de acceso sin login
  const publicRoutes = ["/"];
  //ruta actual
  const path = router.asPath.split("?")[0];
  //parametro que indica true si la ruta actual es publica
  const isPublicRoute = publicRoutes.includes(path);
  //show muestra el contenido de la pagina

  //el state inicial de show = false a modo debug queda en true y se comenta el use effect para verificar el estado inicial
  // const [show, setShow] = useState(true);
  const [show, setShow] = useState(false);
  //el state inicial de user = null
  // const [user, setUser] = useState({ rol: "funcionario", id: 1 }) as any;
  const [user, setUser]: any = useState(null);
  const checkLogin = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const data = await useCheckLogin();
    //si no esta logueado redirige a logear
    if (!data.email) {
      setShow(false);
      router.push("/");
      return;
    }
    setShow(true);
    setUser({ rol: data.rol, id: data.id });
    return data;
  };

  //esta comentado para no validar la conexion con la base de datos para debugear
  useEffect(() => {
    checkLogin();
  }, [router.route]);

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
        {isPublicRoute ? (
          //en la ruta raiz va el login
          <Component rol={null} id={null} {...pageProps} />
        ) : (
          <>
            {show && (
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
