import React, { useState } from 'react'
import perfiles from '../data/perfiles.js'
import PortfolioTemplate from '../components/templates/PortfolioTemplate.jsx'
import Presentation from '../components/organisms/Presentation.jsx'
import AboutMe from '../components/organisms/AboutMe.jsx'
import ProjectsSection from '../components/organisms/ProjectsSection.jsx'
import NewsSection from '../components/organisms/NewsSection.jsx'
import ContactForm from '../components/organisms/ContactForm.jsx'
import Heading from '../components/atoms/Heading.jsx'
import Link from '../components/atoms/Link.jsx'

export default function PortfolioPage() {
  // El índice 0 corresponde a Jocsan; el índice 1, al compañero.
  const [perfilActual, setPerfilActual] = useState(0)
  const perfil = perfiles[perfilActual]

  return (
    // La key reinicia el menú, el filtro y el formulario al cambiar de persona.
    <PortfolioTemplate key={perfil.id} perfil={perfil}>
      <Presentation
        perfil={perfil}
        perfiles={perfiles}
        perfilActual={perfilActual}
        onSeleccionar={setPerfilActual}
      />
      <AboutMe perfil={perfil} />
      <ProjectsSection proyectos={perfil.proyectos} />

      <section id="noticias" className="simple-news">
        <div className="container">
          <h2>Noticias</h2>
          <div className="row g-5">
            <div className="col-md-6">
              <NewsSection titulo="Noticias personales" categoria="personal" noticias={perfil.noticias} />
            </div>
            <div className="col-md-6">
              <NewsSection titulo="Notas de aprendizaje" categoria="aprendizaje" noticias={perfil.noticias} />
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="section-space contact-section">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-5">
              <Heading number="04" eyebrow="EL SIGUIENTE PASO">
                Las buenas ideas<br />empiezan con<br /><span>un hola.</span>
              </Heading>
              <p className="contact-description">Contacto de {perfil.nombre}</p>
              {perfil.github ? (
                <Link href={perfil.github} external className="github-link">
                  Encuéntrame en GitHub <span aria-hidden="true">↗</span>
                </Link>
              ) : <p className="small-note">GitHub por agregar.</p>}
              <div className="social-links" aria-label={`Redes de ${perfil.nombre}`}>
                {perfil.redes.map((red) => red.enlace ? (
                  <Link key={red.nombre} href={red.enlace} external className="social-link">
                    {red.nombre} <span aria-hidden="true">↗</span>
                  </Link>
                ) : (
                  <span key={red.nombre} className="social-link social-pending" title="Enlace pendiente">
                    {red.nombre}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </PortfolioTemplate>
  )
}
