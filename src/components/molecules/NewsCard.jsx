import React from 'react'

export default function NewsCard({ noticia }) {
  const fecha = new Date(`${noticia.fecha}T12:00:00`).toLocaleDateString('es-CL')

  return (
    <article className="news-card">
      <time dateTime={noticia.fecha}>{fecha}</time>
      <h4>{noticia.titulo}</h4>
      <p>{noticia.contenido}</p>
    </article>
  )
}
