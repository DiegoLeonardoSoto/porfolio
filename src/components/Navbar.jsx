import { useState } from 'react'
import { ToggleDarkMode } from '../components/ToggleDarkMode'
import { Link, animateScroll as scroll } from 'react-scroll'

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)

  const handleScrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 top-0 start-0 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* logo */}
        <Link
          onClick={handleScrollToTop}
          to=""
          href="blank"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
            DS.
          </span>
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ToggleDarkMode />

          {/* menu button */}
          <button
            onClick={() => setShowLinks((prev) => !prev)}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div
          className={`items-center justify-between ${
            showLinks ? '' : 'hidden'
          }  w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col gap-9 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                activeClass="after:w-[130%]"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="hero"
                className="relative cursor-pointer after:content-[''] after:bg-primary-0 after:h-[130%] after:-left-[15%] after:-top-[15%] after:-z-10 after:absolute after:w-[0%] hover:after:w-[130%] after:duration-200 z-10 block py-2 px-3 text-gray-900 bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:text-white dark:hover:text-black"
              >
                Inicio
              </Link>
            </li>
            <li style={{ marginLeft: '0' }}>
              <Link
                activeClass="after:w-[130%]"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="about"
                className="relative cursor-pointer after:content-[''] after:bg-primary-0 after:h-[130%] after:-left-[15%] after:-top-[15%] after:-z-10 after:absolute after:w-[0%] hover:after:w-[130%] after:duration-200 z-10 py-2 px-3 text-gray-900 bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:text-white dark:hover:text-black"
              >
                Sobre mi
              </Link>
            </li>

            <li style={{ marginLeft: '0' }}>
              <Link
                activeClass="after:w-[130%]"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="projects"
                className="relative cursor-pointer after:content-[''] after:bg-primary-0 after:h-[130%] after:-left-[15%] after:-top-[15%] after:-z-10 after:absolute after:w-[0%] hover:after:w-[130%] after:duration-200 z-10 py-2 px-3 text-gray-900 bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:text-white dark:hover:text-black"
              >
                Proyectos
              </Link>
            </li>

            <li style={{ marginLeft: '0' }}>
              <Link
                activeClass="after:w-[130%]"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="contact"
                className="relative cursor-pointer after:content-[''] after:bg-primary-0 after:h-[130%] after:-left-[15%] after:-top-[15%] after:-z-10 after:absolute after:w-[0%] hover:after:w-[130%] after:duration-200 z-10 py-2 px-3 text-gray-900 bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:text-white dark:hover:text-black"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
