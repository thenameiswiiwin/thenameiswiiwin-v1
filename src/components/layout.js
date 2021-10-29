import * as React from 'react'

export default function Layout({children}) {
  return (
    <div className="container h-screen mx-auto px-6 bg-primary">
      <header />
      {children}
      <footer />
    </div>
  )
}
