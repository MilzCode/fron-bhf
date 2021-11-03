import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import SideNavBHF from "../components/layout/SideNavBHF";
import { useRouter } from "next/router";
import { AuthProvider } from "../context/AuthConext";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
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
          <SideNavBHF>
            <Component {...pageProps} />
          </SideNavBHF>
        )}
      </AuthProvider>
    </>
  );
}
export default MyApp;
