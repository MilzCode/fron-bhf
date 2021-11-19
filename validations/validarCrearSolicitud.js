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
      "El nombre del beneficiario debe tener nombre y 2 apellidos";
  } else if (datos.nombre.length > 30) {
    errors.nombre =
      "El nombre del beneficiario debe tener menos de 30 caracteres";
  } else if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/.test(datos.nombre)) {
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
    errors.periodo = "El periodo es requerido";
  }
 

  if (!datos.comprobantePago) {
    errors.comprobantePago = "El comprobante de pago es requerido";
  }

  if (datos.datosAdicionales && datos.datosAdicionales.length > 1000) {
    errors.archivo = "No puede escribir más de 500 caracteres";
  }

  if (!datos.documentos) {
    errors.documentos = "El ingreso de documento es requerido";
  }

  return errors;
}
