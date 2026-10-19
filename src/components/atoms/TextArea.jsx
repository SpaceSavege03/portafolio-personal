import React from 'react'

export default function TextArea({ id, value, onChange, placeholder }) {
  return (
    <textarea
      className="form-control"
      id={id}
      name={id}
      rows="4"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
    />
  )
}
