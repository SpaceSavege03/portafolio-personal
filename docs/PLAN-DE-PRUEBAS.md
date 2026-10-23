# Plan de pruebas

## Propósito y alcance

Este plan verifica las interacciones principales del portafolio compartido: contenido de prueba, validación local del formulario y cambio entre los perfiles. Las pruebas unitarias usan Vitest con JSDOM. Las pruebas de navegador usan Vitest Browser Mode, Playwright y Chromium.

Las fixtures `src/test/fixtures/userMock.js` y `src/test/fixtures/contactMock.js` contienen datos de ejemplo que permiten repetir las pruebas sin depender de servicios externos. El formulario es local y no envía correo ni guarda información.

## Casos implementados y resultado

| ID | Archivo | Caso | Resultado esperado | Última ejecución |
| --- | --- | --- | --- | --- |
| U-01 | `src/App.test.jsx` | Leer las propiedades de la fixture de usuario | Nombre, rol y tecnología coinciden con los datos de prueba | Aprobado |
| U-02 | `src/App.test.jsx` | Enviar el formulario con datos válidos | Aparece la confirmación local y se vacían los campos | Aprobado |
| U-03 | `src/App.test.jsx` | Enviar un correo inválido | Aparece un mensaje de error y no aparece confirmación | Aprobado |
| U-04 | `src/App.test.jsx` | Elegir el perfil de Joaquín | El encabezado muestra el perfil seleccionado | Aprobado |
| B-01 | `src/App.browser.test.jsx` | Leer las propiedades de la fixture en Browser Mode | Se conservan los valores de ejemplo | Aprobado |
| B-02 | `src/App.browser.test.jsx` | Completar y enviar el formulario en Chromium | Aparece la confirmación local | Aprobado |
| B-03 | `src/App.browser.test.jsx` | Cambiar al perfil de Joaquín en Chromium | El encabezado cambia al perfil elegido | Aprobado |

## Ejecución

```powershell
# Unitarias con JSDOM
npm run test -- --run

# Navegador real
npm run test:browser -- --run

# Cobertura de los componentes y páginas incluidos en la configuración
npm run test:coverage

# Compilación de producción
npm run build
```

Resultados de la ejecución registrada durante la preparación del informe: 4 de 4 pruebas unitarias aprobadas, 3 de 3 pruebas de Chromium aprobadas y compilación aprobada.

## Cobertura

La ejecución de `npm run test:coverage` obtuvo 89.85% de statements (62/69), 69.23% de branches (54/78), 88.09% de functions (37/42) y 89.55% de lines (60/67). La configuración mide `src/components` y `src/pages`; no incluye `src/App.jsx`, los archivos de datos ni la configuración. El porcentaje debe leerse junto con los casos: las pruebas actuales todavía no cubren todos los componentes ni todos los recorridos de la pauta.

## Casos que faltan

| ID | Escenario por agregar | Resultado que se espera |
| --- | --- | --- |
| P-01 | Abrir y cerrar el menú móvil; navegar a una sección | El atributo `aria-expanded` refleja el estado y el enlace lleva al destino |
| P-02 | Filtrar proyectos por categoría y volver a “Todos” | La lista y el contador muestran los proyectos correctos |
| P-03 | Presentar las dos categorías de noticias | Cada columna muestra solo noticias de su categoría y lee la fecha, título y contenido del JSON |
| P-04 | Usar un perfil incompleto y un perfil sin bloque de IA | La página muestra los estados vacíos sin errores ni enlace de IA |
| P-05 | Cambiar de perfil con filtro o texto de contacto activo | No se transfieren estados de una persona a la otra |
| P-06 | Recorrer navegación y formulario solo con teclado | Los controles reciben foco y se pueden activar con teclado |
| P-07 | Comprobar enlaces de proyectos y fallos de carga de imagen | Cada tarjeta abre un destino válido y conserva un texto alternativo útil |

También falta ejecutar una auditoría de accesibilidad y una medición de rendimiento, y guardar su evidencia. La cobertura de código no sustituye esas revisiones.
