import React from 'react'

export default function Label({ htmlFor, children }) {
  return (
    <label className="form-label" htmlFor={htmlFor}>
      {children}
    </label>
  )
}
