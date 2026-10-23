# Pendientes de Joaquín

El proyecto reserva un perfil independiente para Joaquín Pérez en `src/data/compañero.json`. Jocsan y Joaquín comparten componentes, pero cada uno debe mantener su propia biografía, imagen y proyectos.

## Completar el perfil

- Revisar nombre, rol, biografía, foto y texto alternativo.
- Mantener al menos tres proyectos. Actualmente hay dos: TechGaming y Tac-tech.
- Para cada proyecto, agregar imagen, descripción, tecnologías y enlace a demo o repositorio.
- Revisar los textos de las noticias personales y de aprendizaje.
- Reemplazar las direcciones generales de redes por enlaces personales cuando corresponda.

Guarda las imágenes en `public/images/compañero/` y usa rutas como `/images/compañero/perfil.jpeg` en el JSON.

## Pruebas

Ya existe una base de pruebas con Vitest y Chromium: cuatro pruebas unitarias y tres de navegador pasan en la última ejecución registrada. Consulta `PLAN-DE-PRUEBAS.md` para sus casos y resultados.

Queda por implementar y revisar los casos de menú móvil, filtros de proyectos, categorías de noticias, perfiles incompletos, cambio de perfil con estado activo y uso con teclado. Conviene acordar con Jocsan qué cambios afectan componentes compartidos antes de modificar esos componentes.

## Cierre de entrega

- Confirmar los enlaces públicos de los proyectos de ambos perfiles.
- Revisar fotografías, descripciones, tecnologías y navegación en teléfono.
- Activar GitHub Pages con el origen `GitHub Actions` y verificar la publicación.
- Ejecutar nuevamente las pruebas, la cobertura y la compilación.
- Preparar la explicación del código y las capturas para la presentación.
