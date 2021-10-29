import * as React from 'react'
import Header from './header'
import Footer from './footer'

export default function Layout({children}) {
  return (
    <div className="container mx-auto px-6 flex flex-col items-center bg-primary">
      <Header />
      <div className="h-screen w-full flex flex-col justify-between text-start">
        {children}
        <Footer />
      </div>
    </div>
  )
}
