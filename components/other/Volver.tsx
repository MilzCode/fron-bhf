import React from "react";
import { useRouter } from "next/router";

const Volver = () => {
  const router = useRouter();
  return (
    <div className="volverBoton NOSELECT">
      <span onClick={() => router.back()}>Volver</span>
    </div>
  );
};

export default Volver;
