import React from 'react'
import Navbar from '../organisms/Navbar.jsx'
import Footer from '../organisms/Footer.jsx'

export default function PortfolioTemplate({ children, perfil }) {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Navbar mostrarIA={Boolean(perfil.ia)} />
      <main id="contenido">{children}</main>
      <Footer />
    </>
  )
}
