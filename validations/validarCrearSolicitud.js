import validarRut from "./validarRut";
export default function validarLogin(datos) {
  let errors = {};
  //traer desde api

  //

  if (!datos.nombre) {
    errors.nombre = "El nombre del beneficiario es requerido";
  } else if (datos.nombre.length < 3) {
    errors.nombre =
      "El nombre del beneficiario debe tener al menos 3 caracteres";
  } else if (datos.nombre.split(" ").length < 3) {
    errors.nombre =
      "El nombre del beneficiario debe estar completo";
  }
  else if (datos.nombre.length > 30) {
    errors.nombre =
      "El nombre del beneficiario debe tener menos de 30 caracteres";
  } else if (!/^[a-zA-Z ]*$/.test(datos.nombre)) {
    errors.nombre = "El nombre del beneficiario debe contener solo letras";
  }

  if (!datos.rut) {
    errors.rut = "El rut del beneficiario es requerido";
  } else if (validarRut(datos.rut) === false) {
    errors.rut = "El rut del beneficiario es inválido";
  }

  if (!datos.carrera) {
    errors.carrera = "La carrera del beneficiario es requerida";
  }

  if (!datos.tipoEstudiante) {
    errors.tipoEstudiante = "El tipo de estudiante es requerido";
  }

  if (!datos.periodo) {
    errors.periodo = "El tipo de estudiante es requerido";
  }

  // if (!datos.asignacionFamiliar) {
  //   errors.asignacionFamiliar = "Debe seleccionar al menos un documento";
  // }
  // else if(/(.jpg|.jpeg|.pdf|.docx)$/i.test(datos.asignacionFamiliar) === false){
  //   errors.asignacionFamiliar = "Solo se admiten documentos con formato pdf, docx, jpg o jpeg";
  // }

  // if (!datos.certificadoNacimiento) {
  //   errors.certificadoNacimiento = "Debe seleccionar al menos un documento";
  // }
  // else if(/(.jpg|.jpeg|.pdf|.docx)$/i.test(datos.certificadoNacimiento) === false){
  //   errors.certificadoNacimiento = "Solo se admiten documentos con formato pdf, docx, jpg o jpeg";
  // }

  // if (!datos.comprobantePago) {
  //   errors.comprobantePago = "Debe seleccionar al menos un documento";
  // }
  // else if(/(.jpg|.jpeg|.pdf|.docx)$/i.test(datos.comprobantePago) === false){
  //   errors.comprobantePago = "Solo se admiten documentos con formato pdf, docx, jpg o jpeg";
  // }

  if (datos.datosAdicionales && datos.datosAdicionales.length > 1000) {
    errors.archivo = "No puede escribir más de 500 caracteres";
  }
  return errors;
}
