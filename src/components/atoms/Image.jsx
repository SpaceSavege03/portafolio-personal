import React from 'react'

export default function Image({ src, alt, className = '' }) {
  return (
    <img
      className={className}
      src={`${import.meta.env.BASE_URL}${src.replace(/^\//, '')}`}
      alt={alt}
      loading="lazy"
    />
  )
}
