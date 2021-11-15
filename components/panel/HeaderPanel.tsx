/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import Link from "next/link";

interface HeaderPanelProps {
  nameUser: string;
  rolUser?: string;
  title: string;
  onCerrarSesion?: any;
  BreadcrumbLinks?: Array<{ href: string; name: string }>;
  BreadScrumbLinkInicio?: string;
  inicio?: boolean;
}
/**
 *
 * @param nameUser Nombre del usuario
 * @param rolUser Rol del usuario
 * @param title Titulo del panel
 * @param onCerrarSesion Funcion para cerrar sesion (opcional)
 * @param BreadcrumbLinks Links para el breadcrumb, se espera un arreglo de objetos con la propiedad href y name ej: [{href: "/", name: "Inicio"}, {href: "/", name: "Mi cuenta"}]
 * @param BreadScrumbLinkInicio Link para el breadcrumb inicio, se espera un string con la ruta ej: "/"
 * @param inicio Indica si el panel es el inicio
 *  **/
const Header = ({
  nameUser,
  rolUser,
  title,
  onCerrarSesion,
  BreadcrumbLinks,
  BreadScrumbLinkInicio,
  inicio,
}: HeaderPanelProps) => {
  return (
    <div className="headerPanel">
      <div className="p-5 bg-light headerPanel__bg">
        <div>
          <div className="headerPanel__text">
            <p className="mb-0 ">Bienvenido: {nameUser}</p>
            {rolUser && (
              <p className="mb-3">Usted a ingresado como: {rolUser}</p>
            )}
          </div>
        </div>
        {onCerrarSesion ? (
          <button
            type="button"
            className="btn btn-danger btn-lg headerPanel__logout"
            onClick={onCerrarSesion}
          >
            Cerrar Sesión
          </button>
        ) : (
          <>
            <br />
            <br />
          </>
        )}
      </div>
      <MDBBreadcrumb>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        {!inicio && (
          <MDBBreadcrumbItem>
            <Link
              href={BreadScrumbLinkInicio ? BreadScrumbLinkInicio : "/panel"}
            >
              Inicio
            </Link>
          </MDBBreadcrumbItem>
        )}
        {BreadcrumbLinks &&
          BreadcrumbLinks.map((link, index) => (
            <MDBBreadcrumbItem key={index}>
              <Link href={link.href}>{link.name}</Link>
            </MDBBreadcrumbItem>
          ))}
        <MDBBreadcrumbItem active>{title}</MDBBreadcrumbItem>
      </MDBBreadcrumb>
      <h2 className="mb-3 text-center headerPanel__title">{title}</h2>
    </div>
  );
};

export default Header;
