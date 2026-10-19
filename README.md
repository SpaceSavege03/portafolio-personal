# React + Vite

## Organización del portafolio con Atomic Design

La estructura está preparada para implementar el portafolio posteriormente.
Los 20 archivos JSX nuevos están vacíos: no contienen código ni se importan
todavía desde la aplicación. El código existente se conserva sin cambios.

| Nivel | Carpeta | Componentes previstos |
| --- | --- | --- |
| Átomos | `src/components/atoms/` | Button, Input, Label, Image, Link, Heading, TextArea |
| Moléculas | `src/components/molecules/` | ProjectCard, NewsCard, FormField, NavigationItem |
| Organismos | `src/components/organisms/` | Navbar, Presentation, AboutMe, ProjectsSection, NewsSection, ContactForm, Footer |
| Plantillas | `src/components/templates/` | PortfolioTemplate |
| Páginas | `src/pages/` | PortfolioPage |

Los átomos representan elementos básicos; las moléculas agrupan elementos
para una función concreta; los organismos componen las secciones del portafolio.
La plantilla definirá la distribución de esas secciones y la página incorporará
el contenido final. NewsSection podrá reutilizarse para las dos secciones de
noticias solicitadas en la evaluación.

Al implementar, se compondrán los niveles progresivamente y se conectará
PortfolioPage con App.jsx. En esta etapa solo se agrega la organización.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
