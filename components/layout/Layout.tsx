import React from "react";
import SideNavBHF from "./SideNavBHF";
const Layout = ({ children }: any) => { 
  return (
    <>
      <SideNavBHF/>
      <main className="layout__main">{children}</main>
    </>
  );
};

export default Layout;
