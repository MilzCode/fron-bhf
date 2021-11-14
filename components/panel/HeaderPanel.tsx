/* eslint-disable @next/next/no-img-element */
import React from "react";

const Header = ({ nameUser, rolUser, title, onCerrarSesion }: any) => {
  return (
    <div className="headerPanel">
      <div className="p-5 bg-light headerPanel__bg">
        {/* <img src="/portada.jpg" alt="hola" className=""/> */}
        <div>
          <div className="headerPanel__text">
            <h5 className="mb-0 ">Bienvenido: {nameUser}</h5>
            <h5 className="mb-3">Usted a ingresado como: {rolUser}</h5>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-danger btn-lg"
          onClick={onCerrarSesion}
        >
          <h5>Cerrar Sesión</h5>
        </button>
      </div>
      <h2 className="mb-3 text-center headerPanel__title">{title}</h2>
    </div>
  );
};

export default Header;
