import React from 'react'

export default function Button({
  children,
  onClick,
  type = 'button',
  className = '',
  pressed,
}) {
  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
      aria-pressed={pressed}
    >
      {children}
    </button>
  )
}
