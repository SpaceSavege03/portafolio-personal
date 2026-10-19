import React from 'react'
import Image from '../atoms/Image.jsx'
import Link from '../atoms/Link.jsx'

export default function ProjectCard({ proyecto }) {
  return (
    <article
      className={`card project-card ${proyecto.destacado ? 'featured-project' : ''}`}
    >
      <div className="project-image">
        {proyecto.imagen ? (
          <Image
            src={proyecto.imagen}
            alt={`Vista de ${proyecto.titulo}`}
            className="card-img-top"
          />
        ) : (
          <div className="project-placeholder" aria-hidden="true">
            <span>IMAGEN DEL PROYECTO</span>
          </div>
        )}
        <span className="project-index">0{proyecto.id}</span>
        {proyecto.destacado && <span className="featured-label">PROYECTO DESTACADO</span>}
      </div>
      <div className="card-body">
        {proyecto.tipo && (
          <p className="project-type">
            {proyecto.tipo} <span>↗</span>
          </p>
        )}
        <h3 className="card-title">{proyecto.titulo}</h3>
        {proyecto.descripcion && <p className="card-text">{proyecto.descripcion}</p>}
        {proyecto.tecnologias.length > 0 && (
          <ul className="tech-list" aria-label={`Tecnologías de ${proyecto.titulo}`}>
            {proyecto.tecnologias.map((tecnologia) => (
              <li key={tecnologia}>{tecnologia}</li>
            ))}
          </ul>
        )}
        {proyecto.enlace && (
          <Link href={proyecto.enlace} external className="project-link">
            {proyecto.enlaceTexto} <span aria-hidden="true">↗</span>
          </Link>
        )}
      </div>
    </article>
  )
}
