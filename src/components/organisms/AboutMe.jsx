import React from 'react'
import Heading from '../atoms/Heading.jsx'
import Image from '../atoms/Image.jsx'

export default function AboutMe({ perfil }) {
  return (
    <section id="sobre-mi" className="section-space about-section">
      <div className="container">
        <div className="row align-items-center g-5 about-intro">
          <div className="col-lg-6">
            <Heading number="01" eyebrow="UN POCO SOBRE MÍ">
              Curiosidad.<br />Código. <span>Constancia.</span>
            </Heading>
          </div>
          <div className="col-lg-6 about-profile">
            {perfil.foto ? (
              <Image src={perfil.foto} alt={perfil.fotoAlt} className="profile-photo" />
            ) : (
              <div className="profile-photo photo-pending" aria-label="Fotografía pendiente">
                Foto pendiente
              </div>
            )}
            <div>
              <p className="profile-role">{perfil.rol || 'Perfil por completar'}</p>
              <p>{perfil.biografia || 'Este espacio está reservado para su biografía.'}</p>
            </div>
          </div>
        </div>
        {perfil.habilidades.length > 0 ? (
          <>
            <p className="skills-intro">Tecnologías que he utilizado y sigo explorando.</p>
            <div className="row g-0 expertise-grid">
              {perfil.habilidades.map((habilidad) => (
                <div className="col-md-4" key={habilidad.numero}>
                  <article className="expertise-card">
                    <span className="expertise-icon" aria-hidden="true">{habilidad.simbolo}</span>
                    <span className="expertise-number">/{habilidad.numero}</span>
                    <h3>{habilidad.titulo}</h3>
                    <p>{habilidad.texto}</p>
                    <small>{habilidad.etiquetas}</small>
                  </article>
                </div>
              ))}
            </div>
          </>
        ) : <p className="empty-message">Tecnologías por completar.</p>}

        {perfil.ia && (
          <section id="ia" className="ai-feature" aria-labelledby="ai-title">
            <div className="ai-feature-intro">
              <p className="eyebrow">INTELIGENCIA ARTIFICIAL</p>
              <h3 id="ai-title">Ideas propias.<br /><span>IA como aliada.</span></h3>
            </div>
            <div className="ai-feature-content">
              <p>{perfil.ia.descripcion}</p>
              <p>{perfil.ia.detalle}</p>
              <ul className="ai-tools" aria-label="Herramientas de inteligencia artificial">
                {perfil.ia.herramientas.map((herramienta) => <li key={herramienta}>{herramienta}</li>)}
              </ul>
            </div>
          </section>
        )}
      </div>
    </section>
  )
}
