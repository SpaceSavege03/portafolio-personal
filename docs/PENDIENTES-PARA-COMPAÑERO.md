# Pendientes para el compañero

Este documento acompaña al boceto de un portafolio de dos perfiles. No contiene
tests implementados ni afirma que la evaluación esté terminada.

## Tu perfil

Archivo que debes completar: src/data/compañero.json.

- [ ] Nombre y rol reales.
- [ ] Biografía propia.
- [ ] Foto y texto alternativo.
- [ ] Frases de presentación.
- [ ] Tecnologías utilizadas, con descripciones prudentes.
- [ ] Sección de IA opcional o ia: null.
- [ ] Proyectos con imagen, título, descripción, tecnologías y enlace.
- [ ] Noticias de las categorías personal y aprendizaje.
- [ ] GitHub propio y redes; las cinco redes iniciales son páginas generales.

Guarda tus imágenes en public/images/compañero. No uses jocsan.json como destino
de tus datos. Las dos personas comparten componentes, no contenido personal.

La pauta pide al menos tres proyectos para el portafolio personal. Los proyectos
con campos vacíos y las imágenes reservadas son solamente el boceto.

## Entorno de pruebas asignado

- [ ] Revisar el código definitivo y acordar qué debe hacer cada interacción.
- [ ] Instalar versiones compatibles de Vitest y sus paquetes relacionados.
- [ ] Configurar jsdom, Testing Library y limpieza entre pruebas.
- [ ] Configurar Vitest Browser Mode, Playwright y Chromium por separado.
- [ ] Separar archivos unitarios y browser para no ejecutarlos dos veces.
- [ ] Crear fixtures independientes de los datos personales.
- [ ] Documentar un plan con acciones y resultados esperados.

## Casos que debes implementar

| Caso | Resultado que se espera comprobar |
| --- | --- |
| Perfil inicial | Aparece Jocsan y sus propios datos. |
| Cambio al compañero | Nombre, biografía, habilidades, IA, proyectos, noticias y redes corresponden al compañero. |
| Volver a Jocsan | Se recuperan sus datos y no quedan los del compañero. |
| Independencia | El segundo perfil no usa la foto, GitHub ni los proyectos del primero. |
| Perfil incompleto | Textos pendientes y listas vacías no causan errores. |
| IA opcional | No aparece sección ni enlace de IA cuando ia es null. |
| Proyectos | Tarjetas usan las props correctas y no muestran imágenes o enlaces vacíos. |
| Filtros | Cambia el contenido y el contador al elegir una categoría. |
| Cambio con filtro activo | El filtro se reinicia al cambiar de persona. |
| Noticias | Cada categoría muestra solo sus noticias, leídas desde JSON. |
| Menú móvil | Abre, cierra y navega a las secciones. |
| Formulario inválido | Campos vacíos, espacios y correo inválido se rechazan. |
| Formulario válido | Muestra confirmación local y limpia los campos. |
| Cambio con formulario escrito | Los campos no se transfieren al otro integrante. |
| Mock | Una función simulada recibe el evento o argumento esperado. |
| Chromium | Se verifica una selección de las interacciones en un navegador real. |

## Cobertura y evidencias

- [ ] Ejecutar todos los casos y corregir los fallidos.
- [ ] Generar informe de cobertura, incluyendo fuente no importada por tests.
- [ ] Registrar porcentajes y resultados reales.
- [ ] Conservar evidencia de la ejecución en Chromium.
- [ ] Distinguir pruebas de componentes y revisión del sitio completo.
- [ ] Revisar accesibilidad, celular y enlaces finales.
- [ ] Documentar cómo instalar, ejecutar y probar en el README.

La compilación del boceto no reemplaza estas pruebas. Los resultados de la versión
anterior de un solo perfil no demuestran que el selector de dos personas esté probado.

## Coordinación con Jocsan

1. Recibe el boceto guardado en Git y revisa README y esta lista.
2. Completa tu JSON y tus imágenes sin sobrescribir los datos de Jocsan.
3. Acuerden cambios a componentes compartidos para evitar editar lo mismo a la vez.
4. Implementa el testeo sobre la versión de dos perfiles.
5. Guarda commits claros de contenido y de pruebas.
6. Revisen juntos el cierre, las evidencias y la entrega.

La pauta compartida describe una modalidad individual; el reparto debe ajustarse
a la modalidad que hayan acordado con el docente.
