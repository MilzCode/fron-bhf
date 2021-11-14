import router from "next/router";
import React from "react";
import Logout from "../../hooks/useLogout";

const CerrarSesion = () => {
  Logout().then((data) => {
    const msj = data.mensaje;
    if (msj === "Salió con exito") {
      console.log("Se hizo bien el llamado");
      localStorage.removeItem("token");
    } else {
      console.error(data);
    }
    router.push("/");
  });
};

export default CerrarSesion;
