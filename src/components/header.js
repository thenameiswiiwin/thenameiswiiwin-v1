import * as React from 'react'
import {Link} from 'gatsby'
import {LogoLight} from '../images/logo/logo.js'

export default function Header() {
  return (
    <header className="w-full flex items-end text-2xl font-bold border-b border-solid border-black">
      <Link to="/" className="w-1/4">
        <LogoLight />
      </Link>
      <nav className="w-3/4 pl-4">
        <ul className="flex items-center gap-6">
          <Link to="#work">work</Link>
          <Link to="#footer">contact</Link>
          <Link to="/bio">bio</Link>
        </ul>
      </nav>
    </header>
  )
}
