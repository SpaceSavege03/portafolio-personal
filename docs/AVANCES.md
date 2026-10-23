# Estado del portafolio

## Implementado

- Portafolio en React con dos perfiles: Jocsan Nahuelan y Joaquín Pérez.
- Datos de perfiles, proyectos, noticias y redes en archivos JSON.
- Componentes organizados por Atomic Design: átomos, moléculas, organismos, plantilla y página.
- Presentación, biografía, tecnologías, IA opcional, proyectos, dos listas de noticias y formulario de contacto.
- Imágenes y descripciones de cuatro proyectos de Jocsan y dos de Joaquín.
- Bootstrap, estilos propios y adaptación visual para distintas pantallas.
- Pruebas unitarias con Vitest/JSDOM y pruebas de interacción en Chromium.
- Plan de pruebas y pasos de ejecución documentados en `PLAN-DE-PRUEBAS.md` y `README.md`.
- Workflow preparado para construir y publicar el sitio en GitHub Pages.

## Verificación realizada

- `npm run test -- --run`: 4 pruebas unitarias aprobadas.
- `npm run test:browser -- --run`: 3 pruebas en Chromium aprobadas.
- `npm run test:coverage`: statements 89.85%, branches 69.23%, functions 88.09% y lines 89.55%.
- `npm run build`: compilación de producción aprobada.
- `npm run lint`: actualmente falla por 22 imports `React` sin uso en archivos JSX y una advertencia del archivo generado de cobertura.

La cobertura se calcula sobre los componentes y páginas incluidos en `vite.config.js`; no demuestra por sí sola que todos los recorridos de la pauta estén probados. Las pruebas actuales ejercitan el formulario de contacto y el cambio de perfil. El informe explica su alcance y las pruebas pendientes.

## Pendiente para cerrar la pauta

- Añadir y completar los enlaces de demo o repositorio en las tarjetas de proyectos.
- Completar al menos un tercer proyecto para Joaquín.
- Ampliar pruebas de filtros, noticias, menú móvil, perfiles incompletos y navegación por teclado.
- Revisar de forma manual accesibilidad y diseño móvil; no hay auditoría automática Axe ni Lighthouse registrada.
- Activar GitHub Pages con origen `GitHub Actions` y confirmar una ejecución exitosa del workflow.
- Revisar el lint y volver a ejecutar las comprobaciones finales después de completar los datos.

El PDF de la evaluación menciona Jasmine y Karma. Este proyecto sigue la corrección del docente informada por el equipo para trabajar con Vitest y Chromium. El equipo también indicó que realizará la evaluación en grupo.
