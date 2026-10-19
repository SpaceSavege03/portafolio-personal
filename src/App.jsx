import React from 'react'

export default function App() {
  return (
    <main className="container py-5">
      <h1>Mi portafolio</h1>
      <p>Proyecto de Desarrollo Fullstack II.</p>

      <a className="btn btn-primary" href="#proyectos">
        Ver proyectos
      </a>

      <section id="proyectos" className="mt-5">
        <h2>Proyectos</h2>
        <p>Aquí presentaré mis trabajos.</p>
      </section>
    </main>
  )
}