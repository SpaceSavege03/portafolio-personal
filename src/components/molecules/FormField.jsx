import React from 'react'
import Label from '../atoms/Label.jsx'
import Input from '../atoms/Input.jsx'
import TextArea from '../atoms/TextArea.jsx'

export default function FormField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  autoComplete,
}) {
  return (
    <div className="mb-4">
      <Label htmlFor={id}>{label}</Label>
      {type === 'textarea' ? (
        <TextArea id={id} value={value} onChange={onChange} placeholder={placeholder} />
      ) : (
        <Input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
      )}
    </div>
  )
}
