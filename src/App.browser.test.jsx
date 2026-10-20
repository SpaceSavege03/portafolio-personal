import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { mockUserFixture } from './test/fixtures/userMock'
import { contactMock } from './test/fixtures/contactMock'
import App from './App'

describe('Pruebas unitarias y en Navegador real (Browser Mode)', () => {
  // 1. Tu prueba unitaria del fixture del usuario
  it('Debería renderizar las propiedades del fixture correctamente', () => {
    expect(mockUserFixture.nombre).toBe('Usuario Test')
    expect(mockUserFixture.rol).toBe('Desarrollador')
    expect(mockUserFixture.skills).toContain('Vitest')
  })

  // 2. Tu prueba interactiva en el navegador real con el formulario
  it('Debería interactuar con el formulario de contacto en Chromium', async () => {
    render(<App />)
    
    const heading = await screen.findByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()

    const inputNombre = screen.getByPlaceholderText(/¿cómo te llamas?/i)
    const inputCorreo = screen.getByPlaceholderText(/nombre@ejemplo.cl/i)
    const inputMensaje = screen.getByPlaceholderText(/cuéntame sobre tu idea/i)
    const botonEnviar = screen.getByRole('button', { name: /probar mensaje/i })

    await userEvent.type(inputNombre, contactMock.nombre)
    await userEvent.type(inputCorreo, contactMock.correo)
    await userEvent.type(inputMensaje, contactMock.mensaje)

    expect(inputNombre).toHaveValue(contactMock.nombre)
    expect(inputCorreo).toHaveValue(contactMock.correo)
    expect(inputMensaje).toHaveValue(contactMock.mensaje)

    await userEvent.click(botonEnviar)

    const mensajeExito = await screen.findByText(
      new RegExp(`Gracias, ${contactMock.nombre}\\. Tu mensaje se validó`, 'i')
    )
    expect(mensajeExito).toBeInTheDocument()
  })
})