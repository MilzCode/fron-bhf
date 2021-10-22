export default function validarLogin(datos) {
    let errors = {};
  
    if (!datos.nombreBeneficiario) {
      errors.nombreBeneficiario = "El nombre del beneficiario es requerido";
    }
    else if (datos.nombreBeneficiario.length < 3) {
      errors.nombreBeneficiario = "El nombre del beneficiario debe tener al menos 3 caracteres";
    }
    else if (datos.nombreBeneficiario.length > 30) {
      errors.nombreBeneficiario = "El nombre del beneficiario debe tener menos de 30 caracteres";
    }
    else if (!/^[a-zA-Z ]*$/.test(datos.nombreBeneficiario)) {
      errors.nombreBeneficiario = "El nombre del beneficiario debe contener solo letras";
    }
    return errors;
  }
  