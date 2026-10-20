import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { mockUserFixture } from './test/fixtures/userMock'
import { contactMock } from './test/fixtures/contactMock'
import ContactForm from './components/organisms/ContactForm'

describe('Pruebas unitarias y de formulario en App.test.jsx', () => {
  it('Debería renderizar las propiedades del fixture correctamente', () => {
    expect(mockUserFixture.nombre).toBe('Usuario Test')
    expect(mockUserFixture.rol).toBe('Desarrollador')
    expect(mockUserFixture.skills).toContain('Vitest')
  })

  it('Debería rellenar el formulario de contacto usando el fixture y mostrar el mensaje de éxito', async () => {
    render(<ContactForm />)

  
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

    //Verificamos que aparezca el mensaje de éxito generado por tu lógica interna
    const mensajeExito = await screen.findByText(
      new RegExp(`Gracias, ${contactMock.nombre}\\. Tu mensaje se validó`, 'i')
    )
    expect(mensajeExito).toBeInTheDocument()
  })
})