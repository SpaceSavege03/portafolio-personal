import React from 'react'
import Button from '../atoms/Button.jsx'

export default function ProfileSelector({ perfiles, perfilActual, onSeleccionar }) {
  return (
    <div className="profile-selector" role="group" aria-label="Elegir perfil">
      <span className="profile-selector-label">VER PORTAFOLIO DE</span>
      <div className="profile-selector-buttons">
        {perfiles.map((perfil, indice) => (
          <Button
            key={perfil.id}
            className={`profile-button ${perfilActual === indice ? 'active' : ''}`}
            pressed={perfilActual === indice}
            onClick={() => onSeleccionar(indice)}
          >
            {perfil.nombre}
          </Button>
        ))}
      </div>
    </div>
  )
}
