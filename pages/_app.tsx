import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import SideNavBHF from "../components/layout/SideNavBHF";

function MyApp({ Component, pageProps }: AppProps) {
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
      <SideNavBHF>
        <Component {...pageProps} />
      </SideNavBHF>
    </>
  );
}
export default MyApp;
