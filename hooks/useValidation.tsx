/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

/*
El objeto de valores O State inicial
debe ser un objeto que comparta los mismos atributos de los valores que se validan idealmente,
ej:
const stateInicial = {
  nombre: "",
  rut: "",
  email: "",
  celular: "",
  region: "",
  ciudad: "",
  direccion: "",
  password: "",
  password2: "",
};

donde vemos que este mismo objeto servira de estructura para crear un objeto de errores y para asignar valores, por tanto los nombres
son los mismos.
por defecto se asume que es asi, pero si no se cumple esta condicion, se debe pasar un objetoErrores.
fn: Función que se ejecuta en el componente. por ej: crearCuenta().

si errores = {} entonces no hay errores.

*/

const useValidacion = (
  objetoDeValores: { [key: string]: any },
  validar: (datosEntrada: { [key: string]: any }) => { [key: string]: any },
  fn: () => any,
  objetoErrores: { [key: string]: any } | null = null
) => {
  //si objetoErrores no existe entonces se asume que los errores tienen el mismo nombre que los valores
  objetoErrores = objetoErrores || objetoDeValores;

  const [valores, setValores] = useState({ ...objetoDeValores });
  const [errores, setErrores] = useState({ ...objetoErrores });
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const erroresValidacion: { [key: string]: any } = validar(valores);
      const noErrores = Object.keys(erroresValidacion).length;

      if (noErrores === 0) {
        fn(); // Fn = Función que se ejecuta en el componente
      }
      setErrores(erroresValidacion);
      setSubmitForm(false);
    }
  }, [submitForm]);
  /*
    handleChange: Función que se ejecuta en el componente cuando el usuario interactua con un input.
    recibe como parametro el evento.
    ej: <input onChange={(e) => handleChange(e)} />
    tambien se puede recibir un booleano para indicar si se quiere validar mientras se interactua con el input (true) o no (false), por defecto es false.
    ej: <input onChange={(e) => handleChange(e, true)} />
    (pero es mas costoso validar cada vez que se interactua con el input)
  */
  const handleChange = (e: any, validacion = false) => {
    setValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
    if (validacion) {
      setErrores(
        validar({
          ...valores,
          [e.target.name]: e.target.value,
        })
      );
    }
  };

  // Función que se ejecuta cuando el usuario hace submit
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitForm(true);
  };

  // cuando se realiza el evento de blur
  const handleBlur = () => {
    setErrores(validar(valores));
  };

  //funcion para mandar un cambio manualmente
  const sendChange = (objeto: any) => {
    setValores({
      ...valores,
      ...objeto,
    });
  };

  return {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur,
    sendChange,
  };
};

export default useValidacion;
