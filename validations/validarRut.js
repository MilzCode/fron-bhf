import formatoRut from "./formatoRut";
var Fn = {
  // Valida el rut con su cadena completa "XXXXXXXX-X"
  validaRut: function (rutCompleto) {
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false;
    var tmp = rutCompleto.split("-");
    var digv = tmp[1];
    var rut = tmp[0];
    if (digv == "K") digv = "k";
    return Fn.dv(rut) == digv;
  },
  dv: function (T) {
    var M = 0,
      S = 1;
    for (; T; T = Math.floor(T / 10)) S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
    return S ? S - 1 : "k";
  },
};
/**
 * recibe un rut en cualquier formato (con puntos, sin puntos, con guion o sin guion y combinaciones) y lo valida.
 * @param rut: cadena de texto con el rut a validar.
 * **/
const validarRut = (rut) => {
  let rutValido = false;
  if (rut.length > 0) {
    rutValido = Fn.validaRut(formatoRut(rut));
  }
  return rutValido;
};

export default validarRut;
