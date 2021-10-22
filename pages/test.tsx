import React from "react";
import VentanaModal from "../components/other/VentanaModal";

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
    </div>
  );
};

export default test;
