import React, { useState } from 'react'
import Heading from '../atoms/Heading.jsx'
import Button from '../atoms/Button.jsx'
import ProjectCard from '../molecules/ProjectCard.jsx'

export default function ProjectsSection({ proyectos }) {
  const [filtro, setFiltro] = useState('Todos')
  // Los filtros aparecen cuando agregues categorías a tus proyectos.
  const categorias = [
    'Todos',
    ...new Set(proyectos.map((proyecto) => proyecto.categoria).filter(Boolean)),
  ]
  const proyectosVisibles =
    filtro === 'Todos'
      ? proyectos
      : proyectos.filter((proyecto) => proyecto.categoria === filtro)

  return (
    <section id="proyectos" className="section-space projects-section">
      <div className="container">
        <div className="section-top">
          <Heading number="02" eyebrow="DEL APRENDIZAJE A LA PRÁCTICA">
            Mis
            <br />
            <span>proyectos.</span>
          </Heading>
          <p>Ideas con nombre propio.</p>
        </div>
        <div className="projects-toolbar">
          {categorias.length > 1 && (
            <div
              className="project-filters"
              role="group"
              aria-label="Filtrar proyectos por tecnología"
            >
              {categorias.map((categoria) => (
                <Button
                  key={categoria}
                  className={`filter-button ${filtro === categoria ? 'active' : ''}`}
                  pressed={filtro === categoria}
                  onClick={() => setFiltro(categoria)}
                >
                  {categoria}
                </Button>
              ))}
            </div>
          )}
          <span className="project-count" role="status">
            {proyectosVisibles.length}{' '}
            {proyectosVisibles.length === 1 ? 'proyecto' : 'proyectos'}
          </span>
        </div>
        <div className="row g-4 project-grid">
          {proyectosVisibles.map((proyecto) => (
            <div className={proyecto.destacado ? 'col-12' : 'col-md-6'} key={proyecto.id}>
              <ProjectCard proyecto={proyecto} />
            </div>
          ))}
        </div>
        {proyectosVisibles.length === 0 && (
          <p className="empty-message">Todavía no hay proyectos en esta categoría.</p>
        )}
      </div>
    </section>
  )
}
