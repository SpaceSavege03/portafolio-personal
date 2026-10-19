# Portafolio compartido

Aplicación web desarrollada con React para presentar dos perfiles de forma independiente. Cada perfil reúne su biografía, tecnologías, proyectos, noticias y medios de contacto.

## Funcionalidades

- Selector de perfiles.
- Presentación personal con fotografía y biografía.
- Tecnologías utilizadas y sección opcional de inteligencia artificial.
- Tarjetas de proyectos con imágenes, descripciones, tecnologías y enlaces.
- Filtros de proyectos según sus categorías.
- Noticias personales y notas de aprendizaje.
- Enlaces a GitHub, Instagram, Facebook, Gmail, LinkedIn y Spotify.
- Formulario con validación local.
- Diseño adaptable a escritorio y dispositivos móviles.

El formulario valida los datos en el navegador; no envía correos ni almacena mensajes.

## Tecnologías

React, Vite, JavaScript, Bootstrap, CSS y ESLint.

## Instalación

Requisitos: Node.js y npm.

```powershell
npm install
```

## Ejecución

```powershell
npm run dev
```

Abre la dirección indicada en la terminal, normalmente http://localhost:5173/.

## Compilación

```powershell
npm run build
npm run preview
```

La versión compilada se genera en la carpeta `dist`.

## Estructura

```text
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
├── data/
│   ├── jocsan.json
│   ├── compañero.json
│   └── perfiles.js
├── pages/
├── App.jsx
├── main.jsx
└── styles.css

public/
└── images/
    ├── jocsan/
    └── compañero/
```

Los componentes siguen una organización de Atomic Design: átomos, moléculas, organismos, plantillas y páginas.

## Personalización

Los datos de cada perfil se editan en `src/data/jocsan.json` y `src/data/compañero.json`. El archivo `src/data/perfiles.js` reúne ambos perfiles y define su orden.

Cada JSON contiene nombre, rol, biografía, fotografía, frases, tecnologías, información de IA, proyectos, noticias y redes. Usa `ia: null` para ocultar esa sección en un perfil.

Guarda las imágenes en la carpeta correspondiente dentro de `public/images`. En el JSON utiliza rutas como `/images/compañero/foto.jpg`, sin incluir `public`.

Al cambiar de perfil se reinician el menú, los filtros y los campos del formulario. Los apartados sin contenido muestran estados vacíos.

## Referencia visual

Diseño inspirado en [el portafolio de Tamal Sen](https://tamalsen.dev/), adaptado a una interfaz compartida de dos perfiles.
