import React from 'react'

export default function Heading({ number, eyebrow, children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span>{number}</span> / {eyebrow}
      </p>
      <h2>{children}</h2>
    </div>
  )
}
