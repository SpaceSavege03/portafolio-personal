# Avances del boceto compartido

## Implementado

- Datos independientes en jocsan.json y compañero.json, con import y rutas usando ñ.
- Estilos, recursos base, átomos y moléculas.
- Organismos, plantilla y página principal.
- Selector de dos perfiles con estado compartido.
- Biografía, tecnologías, IA, proyectos, noticias y contacto del perfil activo.
- Estados vacíos para el compañero y reinicio de menú, filtro y formulario al cambiar de persona.
- README y lista de pendientes para el compañero.

## Comprobaciones de esta implementación

- npm run build finalizó correctamente.
- El original respondió en http://localhost:5173/.
- Se abrió Jocsan en el navegador y se observaron sus cuatro proyectos.
- Se escribió un borrador de formulario y se cambió al compañero.
- El compañero mostró cero proyectos, biografía y foto pendientes y su GitHub por agregar.
- El formulario quedó vacío y no se mostró el bloque de IA de Jocsan.
- Al volver a Jocsan se recuperaron sus datos y su navegación.
- La página no presentó desbordamiento horizontal en el viewport de escritorio comprobado.

Estas son comprobaciones básicas de construcción y navegación. No son una suite de tests ni un reporte de cobertura.

## Pendiente

El compañero debe completar su perfil y hacerse cargo del plan de pruebas,
Vitest, Chromium, mocks y cobertura. No se implementaron pruebas automatizadas
en el proyecto original durante esta etapa.
Las imágenes y la información adicional de los proyectos permanecen por completar.
La publicación definitiva y las evidencias de evaluación no forman parte de este boceto.
