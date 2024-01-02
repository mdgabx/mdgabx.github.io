import { Link, NavLink } from "react-router-dom"
import wdbsaLogo from "../../assets/images/wdbsaLogo.png"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onChangeOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex flex-col bg-black">
      <header className="flex items-center justify-between relative px-10 font-quicksand text-white">
        <Link className="logo" to="/">
          <img src={wdbsaLogo} alt="wdbsa logo" width="90" height="50" />
        </Link>

        <button type="button" className="md:hidden" onClick={onChangeOpen}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-500 focus:outline-none focus:text-white"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-500 focus:outline-none focus:text-white"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        <nav className="flex hidden md:block space-x-5 flex-row items-center justify-center gap-5">
          <NavLink
            to="/"
            className="hover:text-teal-600 hover:border-b-2 hover:border-teal-600 p-4"
          >
            Home
          </NavLink>
          <a href="./resume/mdgabx-cv.pdf" download="markcv.pdf">
            <button type="button" className="text-green-600">
              Download CV
            </button>
          </a>
          <NavLink
            to="/skills"
            className="hover:text-teal-600 hover:border-b-2 hover:border-teal-600 p-4"
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className="hover:text-teal-600 hover:border-b-2 hover:border-teal-600 p-4"
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-teal-600 hover:border-b-2 hover:border-teal-600 p-4"
          >
            Contact
          </NavLink>
        </nav>
      </header>
      {isOpen ? (
        <div className="container text-white font-quicksand md:hidden">
          <NavLink
            to="/"
            className="block px-12 py-2 hover:bg-teal-700 rounded"
          >
            Home
          </NavLink>
          <a
            className="block px-12 py-2 hover:bg-teal-700 rounded"
            href="./resume/mdgabx-cv.pdf"
            download="markcv.pdf"
          >
            <button type="button" className="text-green-600">
              Download CV
            </button>
          </a>
          <NavLink
            to="/skills"
            className="block px-12 py-2 hover:bg-teal-700 rounded"
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className="block px-12 py-2 mb-3 hover:bg-teal-700 rounded"
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="block px-12 py-2 mb-3 hover:bg-teal-700 rounded"
          >
            Contact
          </NavLink>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Navbar
