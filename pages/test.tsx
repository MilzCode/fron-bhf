import React from "react";
import VentanaModal from "../components/other/VentanaModal";
import Volver from "../components/other/Volver";

const test = () => {
  function handleClick() {
    console.log("Clicked");
  }
  return (
    <div className="test">
      asdasdsa
      <VentanaModal exitFunction={handleClick}>
        El beneficiado ya se encuentra con una solicitud en curso, para mas
        información comuníquese con departamentodepersonas@ucn.cl
      </VentanaModal>
      <Volver />
    </div>
  );
};

export default test;
