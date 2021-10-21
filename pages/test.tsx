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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        obcaecati libero similique odit doloremque? Architecto consequuntur
        nesciunt unde aperiam aspernatur enim quisquam ad, deserunt corrupti
        dignissimos, similique eius eveniet dicta.
      </VentanaModal>
    </div>
  );
};

export default test;
