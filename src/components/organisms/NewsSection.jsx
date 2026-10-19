import React from 'react'
import NewsCard from '../molecules/NewsCard.jsx'

export default function NewsSection({ titulo, categoria, noticias }) {
  const noticiasVisibles = noticias.filter((noticia) => noticia.categoria === categoria)

  return (
    <section className="news-column" aria-label={titulo}>
      <h3>{titulo}</h3>
      {noticiasVisibles.map((noticia) => (
        <NewsCard key={noticia.id} noticia={noticia} />
      ))}
      {noticiasVisibles.length === 0 && <p>No hay publicaciones por ahora.</p>}
    </section>
  )
}
