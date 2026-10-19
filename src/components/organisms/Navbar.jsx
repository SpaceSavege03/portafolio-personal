import React, { useState } from 'react'
import NavigationItem from '../molecules/NavigationItem.jsx'

export default function Navbar({ mostrarIA }) {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const enlaces = [
    { href: '#inicio', nombre: 'inicio' },
    { href: '#sobre-mi', nombre: 'sobre mí' },
    { href: '#proyectos', nombre: 'proyectos' },
    { href: '#noticias', nombre: 'noticias' },
    { href: '#contacto', nombre: 'contacto' },
  ]

  if (mostrarIA) enlaces.splice(2, 0, { href: '#ia', nombre: 'IA' })

  return (
    <header className="site-header">
      <nav
        className="navbar navbar-expand-lg container site-nav"
        aria-label="Navegación principal"
      >
        <a
          className="navbar-brand brand"
          href="#inicio"
          aria-label={'print("mi portafolio")'}
        >
          <span className="brand-function">print</span>
          <b>(</b>
          <span>"mi portafolio"</span>
          <b>)</b>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuAbierto}
          aria-controls="menu-principal"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          {menuAbierto ? 'Cerrar ×' : 'Menú +'}
        </button>
        <div id="menu-principal" className={`nav-links ${menuAbierto ? 'is-open' : ''}`}>
          {enlaces.map((enlace, indice) => (
            <NavigationItem
              key={enlace.href}
              href={enlace.href}
              number={`0${indice + 1}`}
              onClick={() => setMenuAbierto(false)}
            >
              {enlace.nombre}
            </NavigationItem>
          ))}
        </div>
      </nav>
    </header>
  )
}
