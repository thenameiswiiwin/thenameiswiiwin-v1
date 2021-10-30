import * as React from 'react'
import Header from './header'
import Footer from './footer'

export default function Layout({children}) {
  return (
    <div className="container h-screen mx-auto flex flex-col items-center">
      <Header />
      <div className="h-screen w-full flex flex-col justify-between text-start ">
        {children}
        <Footer />
      </div>
    </div>
  )
}
