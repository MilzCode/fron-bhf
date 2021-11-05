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

function MyApp({ Component, pageProps }: AppProps) {
  //show muestra el contenido de la pagina
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({}) as any;
  const router = useRouter();
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
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        ></link>
      </Head>

      {/* <Component {...pageProps} /> */}

      <AuthProvider>
        {router.route === "/" ? (
          //en la ruta raiz va el login
          <Component {...pageProps} />
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
