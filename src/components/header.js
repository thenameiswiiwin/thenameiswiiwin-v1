import * as React from 'react'
import {Link} from 'gatsby'
import {LogoLight} from '../images/logo/logo.js'

export default function Header() {
  return (
    <div className="fixed container mx-auto px-8">
      <header className="w-full flex items-end text-2xl font-semibold border-b border-solid border-black bg-primary">
        <Link to="/" className="w-1/4">
          <LogoLight />
        </Link>
        <nav className="w-3/4 pl-4">
          <ul className="flex items-center gap-6">
            <Link to="#work">work</Link>
            <Link to="#contact">contact</Link>
            <Link to="/bio">bio</Link>
          </ul>
        </nav>
      </header>
    </div>
  )
}
