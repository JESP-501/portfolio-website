import React from 'react'
import Navbar from '/components/Navbar.jsx';


export default function about() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <div>
        <nav className="text-md rounded-lg font-semibold bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:from-inherit lg:static lg:w-auto  lg:rounded-lg lg:border">
          <Navbar/>
        </nav>
      </div>

      <div className="grid lg:grid-cols-2 min-h-screen flex-col justify-between p-24">
        <div className="lg:grid-cols-2">
          <header className="grid-cols-1 text-left">
            <h1 className="font-mono text-lg">
            Welcome to the about page!
            </h1>
            <h2 className="font-mono text-md ">
              Here you will get to know a little about me!
            </h2>
          </header>
          <div className="grid-cols-1">

          </div>
        </div>
      </div>


    </main>
  )
}
