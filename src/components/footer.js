import * as React from 'react'
import {Link} from 'gatsby'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="contact"
      className="w-full h-screen flex flex-col justify-between"
    >
      <h4 className="flex flex-col pt-24 text-7xl font-semibold uppercase">
        <span className="leading-normal">Let&apos;s</span>
        <span className="self-end">Work</span>
        <span className="self-center tracking-widest">Together!</span>
        <span className="self-center leading-loose">ツ</span>
      </h4>
      <div className="flex flex-col pb-2">
        <div className="flex">
          <section className="w-1/2">
            <h5 className="text-3xl font-extrabold uppercase leading-loose">
              Social
            </h5>
            <ul className="text-2xl font-semibold text-red-600">
              <li>
                <Link to="https://github.com/thenameiswiiwin">github</Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/thenameiswiiwin/">
                  instagram
                </Link>
              </li>
              <i>
                <Link to="https://www.linkedin.com/in/thenameiswiiwin/">
                  linkedin
                </Link>
              </i>
            </ul>
          </section>
          <section className="w-1/2">
            <h5 className="text-3xl font-extrabold uppercase  leading-loose">
              Contact
            </h5>
            <ul className="text-2xl font-semibold text-red-600">
              <li>
                <a href="mailto:huyn.nguyen95@gamil.com">email</a>
              </li>
            </ul>
          </section>
        </div>
        <section className="text-8 font-extrabold text-right border-t border-solid border-black">
          <h5>© {year} Huy Nguyen</h5>
        </section>
      </div>
    </footer>
  )
}
