export default function Navbar() {
    return <nav className="nav grid lg:grid-cols-4">
 <div className="grid text-center font-mono lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-center">
        <a
          href="src\app\page.jsx"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-1 text-2xl font-semibold`}>
            Home
          </h2>
        </a>
        <a
          href="src\app\about"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        >
          <h2 className={`mb-1 text-2xl font-semibold`}>
            About
          </h2>
        </a>
        <a
          href="src\app\projects\page.jsx"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-1 text-2xl font-semibold`}>
            Projects
          </h2>
        </a>
        <a
          href="https://github.com/jesp-501"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-1 text-2xl font-semibold`}>
            Github
          </h2>
        </a>
      </div>
    </nav>
}


//    <div className="group dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30
//    hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 px-5 py-4">
 //   <a href="src\app\page.js">Home</a>
 //   </div>
 //   <div className="group dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30
 //   hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 px-5 py-4">
 //   <a href="/about.js">About Me</a>
 //   </div>
  //  <div className="group dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30
  //  hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 px-5 py-4">
  //  <a href="/Blog">Blog</a>
 //   </div>
 //   <div className="group dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30
 //   hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 px-5 py-4">
 //   <a href="/Projects">Projects</a> 

