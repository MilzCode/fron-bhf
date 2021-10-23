Link para ver Online:
https://bhf-zeta.vercel.app/

Roles Identificados:
- Administrador.
- Funcionario.
- DPE (Dirección de personas).
- Cobranzas.
- DGE.
- Ninguno.

Estados de solicitud:
Funcionario:

- Recepcionada: fue enviada pero aun no ha sido visualizada por el encargado de la dirección de personas.
- Revisión: Fue enviada y esta en procesamiento ya sea por Dir. Personas, Cobranzas o dge.
- Aprobada: Fue aprobada por el encargado DGE.
- Rechazada: Fue rechazada por algun encargado ya sea por Dir. Personas, Cobranzas o dge.
- Pendiente: DGE ha estimado que falta algo para que la solicitud sea aprobada y esta en espera de que se regularice la situación para que sea aprobada.

Encargados:

- Recepcionada: Se recibio la solicitud pero aun no la ha revisado.
- Visualizada: Se recibio la solicitud y fue visualizada por el encargado pero aun no se ha aprobado ni rechazado.
- Aprobada: Se recibio la solicitud y fue aprobada por el encargado.
- Rechazada: Se recibio la solicitud y fue rechazada por el encargado.
- Pendiente: DGE ha estimado que falta algo para que la solicitud sea aprobada y esta en espera de que se regularice la situación para que sea aprobada.

Notas:

- El unico que puede dejar una solicitud en estado pendiente es el encargado de DGE.
- El funcionario podra eliminar la solicitud que el envio solamente si se encuentra en estado recepcionada.
- Si el encargado de la dirección de personas visualiza una solicitud esta pasa a estado Vizualizada y el funcionario
  de ahora en adelante vera que su solicitud se encuentra en revisión.
- Solo puede haber una solicitud en curso por hijo de funcionario, pero un funcionario puede tener varios hijos.
- Todos deben tener un espacio para añadir comentarios adicionales.
- Si el funcionario de DPE (Dirección de personas) Aprueba una solicitud, esta pasa a ser recepcionada para Cobranzas, si Cobranzas aprueba la solicitud, esta pasa a ser recepcionada para DGE, si DGE aprueba la solicitud, esta pasa a estado Aprobada.
