import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('Pruebas unitarias de App (JSDOM)', () => {
  it('Debería renderizar la aplicación correctamente', () => {
    render(<App />)
    
    // Aquí puedes verificar que algún elemento clave esté presente en pantalla
    // Por ejemplo, buscando un título o un texto que sepas que está en tu App.jsx
    const element = screen.getByRole('main') // o cualquier selector válido
    expect(element).toBeDefined()
  })
})