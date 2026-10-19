import React from 'react'
import Link from '../atoms/Link.jsx'
import ProfileSelector from './ProfileSelector.jsx'

export default function Presentation({ perfil, perfiles, perfilActual, onSeleccionar }) {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orbit" aria-hidden="true">
        <div className="orbit-core" />
        <span className="orbit-dot" />
      </div>
      <div className="container hero-content">
        <ProfileSelector
          perfiles={perfiles}
          perfilActual={perfilActual}
          onSeleccionar={onSeleccionar}
        />
        <p className="hero-kicker"><span /> EN CONSTANTE APRENDIZAJE</p>
        <h1 id="hero-title">
          {perfil.nombre}<span className="hero-period">.</span>
        </h1>
        <p className="hero-role">{perfil.rol || 'Perfil en preparación'}</p>
        <p className="hero-description">
          {perfil.frase.length > 0
            ? perfil.frase.map((linea) => <span className="d-block" key={linea}>{linea}</span>)
            : 'Un espacio listo para compartir sus ideas y proyectos.'}
        </p>
        <Link href="#proyectos" className="btn primary-button">
          Explorar mis proyectos <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="container hero-bottom">
        <span className="mono">PORTAFOLIO / 2026</span>
        <a href="#sobre-mi" className="scroll-cue">
          Desliza para conocerme <span aria-hidden="true">↓</span>
        </a>
        <span className="mono hero-location">DISEÑADO PARA APRENDER</span>
      </div>
    </section>
  )
}
