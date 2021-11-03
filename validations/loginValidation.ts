export interface Login {
  email?: string;
  password?: string;
}

export default function loginValidation(values: Login) {
  let errores: Login = {};

  //validar el nombre
  if (!values.email) {
    errores.email = "Ingrese Email";
  }

  if (!values.password) {
    errores.password = "Ingrese contraseña";
  }

  return errores;
}
