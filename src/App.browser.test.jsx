import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('Pruebas en Navegador real (Browser Mode)', () => {
  it('Debería interactuar con la página en Chromium', async () => {
    render(<App />)
    
    // Verificamos que el componente carga en el navegador de Playwright
    const heading = await screen.findByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })
})