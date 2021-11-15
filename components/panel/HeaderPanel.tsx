/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import Link from "next/link";
import { UrlObject } from "url";

interface HeaderPanelProps {
  nameUser: string;
  rolUser?: string;
  title: string;
  onCerrarSesion?: any;
  BreadcrumbLinks?: Array<{ href: string, name: string }>;
  BreadScrumbLinkInicio?: string;
}
const Header = ({
  nameUser,
  rolUser,
  title,
  onCerrarSesion,
  BreadcrumbLinks,
  BreadScrumbLinkInicio,
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
        {onCerrarSesion && (
          <button
            type="button"
            className="btn btn-danger btn-lg headerPanel__logout"
            onClick={onCerrarSesion}
          >
            Cerrar Sesión
          </button>
        )}
      </div>
      <MDBBreadcrumb>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <MDBBreadcrumbItem>
          <Link href={BreadScrumbLinkInicio ? BreadScrumbLinkInicio : "/panel"}>
            Inicio
          </Link>
        </MDBBreadcrumbItem>
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
