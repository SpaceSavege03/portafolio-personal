# Portafolio compartido

Boceto de un portafolio React para dos estudiantes de Ingeniería en Informática.
La interfaz permite cambiar de persona y presenta los datos de cada perfil de forma independiente.

## Estado actual

- Diseño oscuro con Bootstrap y componentes organizados con Atomic Design.
- Selector entre Jocsan Nahuelan y el perfil del compañero, preparado para completar.
- Presentación, biografía, tecnologías, IA opcional, proyectos, noticias y contacto por persona.
- Cuatro proyectos de Jocsan: Slowkemania, Ventacars, Zafinas y Dolchesse; imágenes e información adicional pendientes.
- Noticias breves en dos categorías y enlaces a las páginas principales de las redes.
- Formulario con validación local; no envía correos ni guarda mensajes.
- La prueba visual de un solo perfil permanece en una carpeta hermana, fuera de este repositorio.

Este repositorio contiene el boceto. El perfil del compañero y las pruebas automatizadas quedan pendientes.

## Instalación y ejecución

Se necesita una versión de Node.js compatible con Vite. En este equipo se utilizó Node 22.20.0.

```powershell
npm install
npm run dev
```

Abre la dirección que imprima Vite. Normalmente es http://localhost:5173/.

Para generar y revisar la compilación:

```powershell
npm run build
npm run preview
```

La compilación se genera en dist y no reemplaza el trabajo de testeo.

## Datos de cada persona

| Archivo | Contenido |
| --- | --- |
| src/data/jocsan.json | Datos de Jocsan y sus proyectos. |
| src/data/compañero.json | Datos pendientes del segundo integrante. |
| src/data/perfiles.js | Importa ambos perfiles y define su orden. |

Se conserva la letra ñ en compañero.json y en su import. Usa los nombres exactos para evitar problemas de rutas.
Cada integrante completa su JSON sin duplicar la interfaz ni sobrescribir los datos de la otra persona.

Las imágenes de Jocsan se guardan en public/images/jocsan y las del compañero en public/images/compañero.
Para referenciarlas desde el JSON usa rutas como /images/compañero/foto.jpg, sin incluir public.
La fotografía actual de Jocsan es un espacio reservado que debe reemplazarse por su foto real.

## Componentes

- Átomos: botones, campos, etiquetas, imágenes, enlaces y encabezados.
- Moléculas: tarjetas, campos de formulario y elementos de navegación.
- Organismos: secciones y selector de perfiles.
- Plantilla: distribución de navegación, contenido y pie.
- Página: selección del perfil y conexión de datos por props.

El estado del menú, los filtros y el formulario se reinicia al cambiar de persona.
Si faltan tecnologías, proyectos o noticias, se presentan estados vacíos.
La sección de IA y su enlace de navegación solo aparecen cuando ese perfil tiene datos de IA.

## Trabajo pendiente del compañero

La configuración y ejecución de Vitest y Chromium, el plan de pruebas, los mocks y el informe de cobertura están asignados al compañero.
No se instalaron herramientas de testeo ni se añadieron scripts o archivos de pruebas en este boceto.

Consulta [la lista de pendientes](docs/PENDIENTES-PARA-COMPAÑERO.md) para completar su contenido y preparar los casos de prueba.
Los resultados de la versión de prueba anterior no representan pruebas de esta aplicación compartida.

## Antes de entregar

- Completar los datos reales de ambos perfiles, las imágenes y los enlaces de proyectos.
- Implementar y ejecutar las pruebas asignadas, con sus resultados y cobertura reales.
- Revisar móvil, teclado y accesibilidad.
- Añadir capturas de pantalla y las evidencias de ejecución.
- Preparar la publicación y la presentación final según la modalidad acordada con el docente.

La pauta compartida originalmente describe trabajo individual. Dos perfiles no cambian por sí solos la modalidad de evaluación.

## Referencia visual

Diseño inspirado en [el portafolio de Tamal Sen](https://tamalsen.dev/), adaptado con contenido propio y una implementación sencilla en React.
