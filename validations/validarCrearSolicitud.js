export default function validarLogin(datos) {
    let errors = {};
  
    if (!datos.nombre) {
      errors.nombreBeneficiario = "El nombre del beneficiario es requerido";
    }
    else if (datos.nombre.length < 3) {
      errors.nombreBeneficiario = "El nombre del beneficiario debe tener al menos 3 caracteres";
    }
    else if (datos.nombre.length > 30) {
      errors.nombreBeneficiario = "El nombre del beneficiario debe tener menos de 30 caracteres";
    }
    else if (!/^[a-zA-Z ]*$/.test(datos.nombre)) {
      errors.nombre = "El nombre del beneficiario debe contener solo letras";
    }


    if(!datos.rut){
      errors.rut = "El rut del beneficiario es requerido";
    }
    else if(validarRut(datos.rut) === false){
      errors.rut = "El rut del beneficiario es inválido";
    }


    if(!datos.archivo.value || datos.archivo.value === ""){
      errors.archivo = "Debe seleccionar al menos un documento";
    }
    else if(datos.archivo.value != /(.jpg|.jpeg|.png|.pdf|.docx)$/i){
      errors.archivo = "Solo se admiten documentos con formato pdf, docx, jpg, jpeg o png";
    }


    if(datos.datosAdicionales && datos.datosAdicionales.length > 1000){
      errors.archivo = "No puede escribir más de 500 caracteres";
    }
    return errors;
  }
  