import type { NextPage } from "next";
import Link from "next/link";

import React, { useContext, useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
import { Button, Loader } from "rsuite";
import Image from "next/image";
import logoUCN from "../public/Escudo-UCN-Full-Color.png";

import { AuthContext } from "../context/AuthConext"; //context
import Checklogin from "../hooks/useCheckLogin"; //hook de check
import { useRouter } from "next/router";

import useValidation from "../hooks/useValidation";
import loginValidation from "../validations/loginValidation";
import ingresarSistema from "../hooks/useLogin";

import ingresoGoogle from "../hooks/useLoginGoogle";

const STATE_INIT = {
  email: "",
  password: "",
};




const Home = () => {
  const { signIn, checkLogin } = useContext(AuthContext);
  const [isLoged, setIsLoged] = useState(true);
  const [firstTime, setFirstTime] = useState(true);
  const [modalWindow, setModalWindow] = useState(false);
  const router = useRouter();

  function startGoogle() {
    var auth2: any;
    // @ts-ignore
    gapi.load("auth2", function () {
      // @ts-ignore
      auth2 = gapi.auth2.init({
        client_id:
          "920846582943-uh9c9joa2nqkmk6skvtg46553dcp6490.apps.googleusercontent.com",
      });
      attachSignin(document.getElementById("customBtn"));
    });

    function attachSignin(element: any) {
      auth2.attachClickHandler(
        element,
        { scope: "profile email" },
        onSuccess,
        onFailure
      );
    }

    function onSuccess(googleUser: any) {
      const token = googleUser.getAuthResponse().access_token;
      console.log(token);
      async function ingreso() {
        const loginGoogle = await ingresoGoogle(token);
        if (loginGoogle === "error conexion") {
          // notifyError();
          setIsLoged(false);
        } else if (loginGoogle.access_token) {
          checkLogin(loginGoogle.rol);
          router.push("/panel");
        } else {
          // notifyIncorrect();
          setIsLoged(false);
        }
      }
      ingreso();
    }

    function onFailure(error: any) {
      // notifyErrorGoogle();
    }
  }

  useEffect(() => {
    // @ts-ignore
    if (gapi) {
      startGoogle();
    } else {
      router.reload();
    }
  }, []);

  useEffect(() => {
    async function verificar() {
      const verificacion = await Checklogin();
      if (verificacion === "error conexion") {
        // notifyError();
        setIsLoged(false);
      } else if (verificacion.rol) {
        checkLogin(verificacion.rol);
        signIn(verificacion.rol, verificacion.id);
        router.push("/panel");
      } else if (verificacion.message) {
        if (firstTime) {
          setIsLoged(false);
          setFirstTime(false);
        } else {
          setIsLoged(false);
          // notifyIncorrect();
        }
      }
    }
    verificar();
  }, []);

  const iniciarSesion = async () => {
    setIsLoged(true);
    const peticion = await ingresarSistema(email, password, true);
    console.log(peticion);
    if (peticion.error === "Credenciales incorrectas") {
      setIsLoged(false);
    } else if (peticion.errors) {
      setIsLoged(false);
    }

    if (peticion.access_token) {
      signIn(peticion.rol, peticion.id);
      email = "";
      password = "";
      router.push("/panel");
    }
  };

  const { valores, errores, handleSubmit, handleChange, handleBlur } =
    useValidation(STATE_INIT, loginValidation, iniciarSesion);
  let { email, password } = valores;

  function checkErrors() {
    console.log(errores);
    if (Object.keys(errores).length > 0) {
    }
  }

  // const notifyIncorrect = () =>
  //   toast.error("Usuario o contraseña incorrecto...");
  // const notifyError = () =>
  //   toast.error("Error al conectar a la base de datos...");
  // const notifyErrorGoogle = () =>
  //   toast.error("Error en la conexion con google...");
  // const notifyErrorForm = () => toast.error("debe ingresar un correo valido");

  return (
    <>
      <div className="login">
        <div className="login__content">
          <div className="login__imagenes">
            <Image
              src={logoUCN}
              alt="Logo UCN"
              width="100px"
              height="100px"
              className="login__imagen"
            ></Image>
            <Image
              src="/Imagen-DGE.jpg"
              alt="Logo DGE"
              width="100px"
              height="100px"
              className="login__imagen"
            ></Image>
          </div>
          {/* login form */}
          <form
            id="formulario"
            className="login__form"
            onSubmit={handleSubmit}
            noValidate={true}
          >
            <div className="login__input">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="email@ucn.cl"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label htmlFor="username" className="fas fa-user" />
            </div>
            <div className="login__input">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="********"
                autoComplete="on"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label htmlFor="password" className="fas fa-key" />
            </div>
            <div className="login__inputs">
              {//Input elements should have autocomplete attributes (suggested: "current-password")
                //@ts-ignore

              }

            </div>
            <button
              type="submit"
              onClick={checkErrors}
              className="login__button"
            >
              Ingresar
            </button>
            <hr />
            <button
              onClick={startGoogle}
              id="customBtn"
              className="login__button"
              type="button"
              style={{}}
            >
              <div>Ingreso funcionario&nbsp;</div>
              <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                  <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                  <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                  <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                  <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
                </g>
              </svg>
            </button>
          </form>

          <div className="login__footer">
            Si tiene problemas para ingresar al sistema contactar a
            vra.dge@ucn.cl
          </div>
        </div>
      </div>
      {/* <div>
        <ToastContainer />
      </div> */}
      {isLoged ? <Loader backdrop content="Cargando..." vertical /> : null}
    </>
  );
};

export default Home;
