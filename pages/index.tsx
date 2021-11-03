import type { NextPage } from "next";
import Link from "next/link";

import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
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
  const router = useRouter();

  function startGoogle() {
    var auth2: any;
    console.log(gapi);
    gapi.load("auth2", function () {
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
          notifyError();
          setIsLoged(false);
        } else if (loginGoogle.access_token) {
          checkLogin(loginGoogle.rol);
          router.push("/panel");
        } else {
          notifyIncorrect();
          setIsLoged(false);
        }
      }
      ingreso();
    }

    function onFailure(error: any) {
      notifyErrorGoogle();
    }
  }

  useEffect(() => {
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
        notifyError();
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
          notifyIncorrect();
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
      notifyIncorrect();
      setIsLoged(false);
    } else if (peticion.errors) {
      notifyIncorrect();
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
      notifyErrorForm();
    }
  }

  const notifyIncorrect = () =>
    toast.error("Usuario o contraseña incorrecto...");
  const notifyError = () =>
    toast.error("Error al conectar a la base de datos...");
  const notifyErrorGoogle = () =>
    toast.error("Error en la conexion con google...");
  const notifyErrorForm = () => toast.error("debe ingresar un correo valido");

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
            <div className="login__inputs">
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
                  value={password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="password" className="fas fa-key" />
              </div>
            </div>
            <button
              type="submit"
              onClick={checkErrors}
              className="login__button"
            >
              INGRESAR
            </button>
            <button
              onClick={startGoogle}
              id="customBtn"
              className="login__button"
              type="button"
            >
              Ingreso funcionario
            </button>
          </form>

          <div className="login__footer">
            Si tiene problemas para ingresar al sistema contactar a
            vra.dge@ucn.cl
          </div>
        </div>
      </div>
      <div>
        <ToastContainer />
      </div>
      {isLoged ? <Loader backdrop content="Cargando..." vertical /> : null}
    </>
  );
};

export default Home;
