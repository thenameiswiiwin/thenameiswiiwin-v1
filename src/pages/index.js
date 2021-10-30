import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import {ArrowDown} from '../images/icons/arrows'

export default function Index() {
  return (
    <Layout>
      <main className="w-full h-screen flex flex-col justify-between">
        <section className="pt-32 flex flex-col gap-10 text-lg font-medium">
          <article className="w-1/2">
            <p className="text-2xl text-red-600 capitalize leading-relaxed">
              I break things
            </p>
            <p>To learn the in and out of how things work.</p>
          </article>
          <article className="w-1/2">
            <p className="text-2xl text-red-600 capitalize leading-relaxed">
              I make things
            </p>
            <p>Once I have a better understanding of how things work.</p>
          </article>
        </section>
        <section />
        <section className="pb-12 flex flex-col text-15 font-bold uppercase leading-none">
          <h6>Front-end</h6>
          <h6 className="flex justify-between items-center">
            <span>
              <Link href="#work">
                <ArrowDown />
              </Link>
            </span>
            <span>Dev</span>
          </h6>
        </section>
      </main>
    </Layout>
  )
}
