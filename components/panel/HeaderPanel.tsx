/* eslint-disable @next/next/no-img-element */
import React from "react";

const Header = ({ nameUser, rolUser, title, onCerrarSesion }: any) => {
  return (
    <div className="headerPanel">
      <div className="p-5 bg-light headerPanel__bg">
        {/* <img src="/portada.jpg" alt="hola" className=""/> */}
        <div>
          <div className="headerPanel__text">
            <p className="mb-0 ">Bienvenido: {nameUser}</p>
            <p className="mb-3">Usted a ingresado como: {rolUser}</p>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-danger btn-lg headerPanel__logout"
          onClick={onCerrarSesion}
        >
          Cerrar Sesión
        </button>
      </div>
      <h2 className="mb-3 text-center headerPanel__title">{title}</h2>
    </div>
  );
};

export default Header;
