/**
 *remueve cualquier caracter espcial de una cadena.
 * @param str: string que se desea limpiar de caracteres especiales.
 */
const removeSpecialCharacters = (str) => {
  str = str.toLowerCase();
  str = str.replace(/[áàâãäå]/g, "a");
  str = str.replace(/[éèêë]/g, "e");
  str = str.replace(/[íìîï]/g, "i");
  str = str.replace(/[óòôõö]/g, "o");
  str = str.replace(/[úùûü]/g, "u");
  str = str.replace(/[ç]/g, "c");
  str = str.replace(/[ñ]/g, "n");
  str = str.replace(/[^a-z0-9]/g, "_");
  return str;
};

export default removeSpecialCharacters;
