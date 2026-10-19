import React, { useState } from 'react'
import FormField from '../molecules/FormField.jsx'
import Button from '../atoms/Button.jsx'

export default function ContactForm() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState('')
  const [confirmacion, setConfirmacion] = useState('')

  function manejarEnvio(evento) {
    evento.preventDefault()
    setConfirmacion('')

    if (!nombre.trim() || !correo.trim() || !mensaje.trim()) {
      setError('Completa tu nombre, correo y mensaje.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      setError('Escribe un correo electrónico válido.')
      return
    }
    setError('')
    setConfirmacion(
      `Gracias, ${nombre.trim()}. Tu mensaje se validó en esta demostración; no se ha enviado.`,
    )
    setNombre('')
    setCorreo('')
    setMensaje('')
  }

  return (
    <form className="contact-form" onSubmit={manejarEnvio} noValidate>
      <div className="row">
        <div className="col-sm-6">
          <FormField
            id="nombre"
            label="Tu nombre"
            value={nombre}
            onChange={(evento) => setNombre(evento.target.value)}
            placeholder="¿Cómo te llamas?"
            autoComplete="name"
          />
        </div>
        <div className="col-sm-6">
          <FormField
            id="correo"
            label="Tu correo"
            type="email"
            value={correo}
            onChange={(evento) => setCorreo(evento.target.value)}
            placeholder="nombre@ejemplo.cl"
            autoComplete="email"
          />
        </div>
      </div>
      <FormField
        id="mensaje"
        label="Tu mensaje"
        type="textarea"
        value={mensaje}
        onChange={(evento) => setMensaje(evento.target.value)}
        placeholder="Cuéntame sobre tu idea…"
      />
      {error && (
        <p className="form-feedback error" role="alert">
          {error}
        </p>
      )}
      {confirmacion && (
        <p className="form-feedback success" role="status">
          {confirmacion}
        </p>
      )}
      <Button type="submit" className="primary-button">
        Probar mensaje <span aria-hidden="true">↗</span>
      </Button>
      <p className="form-note">
        Formulario de práctica. Valida los datos localmente; no envía correos.
      </p>
    </form>
  )
}
