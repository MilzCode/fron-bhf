import { host } from "../host/host";
/**
 *
 * @param name_benef: string, nombre del beneficiario
 * @param rut_benef: string, rut del beneficiario
 * @param carrera_benef: string, carrera del beneficiario
 * @param type_benef: string, tipo de beneficiario
 * @param documentacion: array de documentos file
 * @param anio: string, año de la solicitud
 * @param user_id: string, id del usuario
 * **/

const useEnviarSolicitudFuncionario = async (
  name_benef: string,
  rut_benef: string,
  carrera_benef: string,
  type_benef: string,
  documentacion: any,
  anio: string,
  user_id: string
) => {


  const url = host + "/api/v1/solicitud/create";
  let error = "";

  //Añadiendo form data
  var form = new FormData();
  form.append("name_benef", name_benef);
  form.append("rut_benef", rut_benef);
  form.append("carrera_benef", carrera_benef);
  form.append("type_benef", type_benef);
  documentacion &&
    documentacion.forEach((file: any) => {
      form.append("documentacion[]", file);
    });
  form.append("anio", anio);
  form.append("user_id", user_id);

  try {
    const res = await fetch(url, {
      method: "POST",
      body: form,
      headers: {
        // "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = await res.json();
    return data;
  } catch (e) {
    error = "error conexion";
    return error;
  }
};

export default useEnviarSolicitudFuncionario;
