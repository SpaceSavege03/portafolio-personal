import React from 'react'

export default function Input({
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
  autoComplete,
}) {
  return (
    <input
      className="form-control"
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete={autoComplete}
      required
    />
  )
}
