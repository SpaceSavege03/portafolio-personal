import React from 'react'
import perfiles from './data/perfiles.js'
import ProjectCard from './components/molecules/ProjectCard.jsx'

export default function App() {
  return (
    <main className="container py-5">
      <ProjectCard proyecto={perfiles[0].proyectos[0]} />
    </main>
  )
}
