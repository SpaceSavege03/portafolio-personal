import React from 'react'

export default function NavigationItem({ href, number, children, onClick }) {
  return (
    <a className="nav-link" href={href} onClick={onClick}>
      <span>{number}</span>
      <b aria-hidden="true">// </b>
      {children}
    </a>
  )
}
