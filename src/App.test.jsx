import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { mockUserFixture } from './test/fixtures/userMock'
// import UserProfile from './components/UserProfile' // El componente que use los datos

describe('Pruebas unitarias con mockUserFixture', () => {
  it('Debería renderizar las propiedades del fixture correctamente', () => {
    // Ejemplo de cómo pasarías el fixture a un componente:
    // render(<UserProfile user={mockUserFixture} />)

    // O validando directamente los datos simulados en tu lógica de prueba:
    expect(mockUserFixture.nombre).toBe('Usuario Test')
    expect(mockUserFixture.rol).toBe('Desarrollador')
    expect(mockUserFixture.skills).toContain('Vitest')
  })
})