import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons'

const Home = () => (
  <div className="container-fluid text-white m-20">
    <div className="font-poppins flex flex-col items-center justify-center">
      <h1 className=" text-5xl md:text-[70px]">
        Hi, I'm
        <span className="text-green-500"> Mark</span>
      </h1>
      <br />
      <h2
        className="font-quicksand mb-10 text-teal-500 text-2xl tracking-widest w-60 md:w-1/2
                italic text-center
            "
      >
       
      A software developer located in the island province of Bohol, Philippines, currently enjoying the challenges and creativity involved in working with the MERN stack along with Typescript.
      </h2>
      <Link
        to="/contact"
        className="text-yellow-500 hover:bg-yellow-500 hover:text-black border-2 p-4 border-yellow-500"
      >
        CONTACT ME
      </Link>
        <ul className="flex flex-row gap-6 my-7">
        <li>
                <a
                className="w-30"
                href="https://www.linkedin.com/in/wdbsa-098233142/"
                target="_blank" 
                rel="noreferrer"
                >
                    <FontAwesomeIcon 
                        icon={faLinkedin}
                        color="#aaa"
                        size="xl"
                        className="hover:text-green-500 trasition duration-300 ease-in-out"
                    />
                </a>
            </li>

            <li>
                <a
                href="https://github.com/mdgabx"
                target="_blank" 
                rel="noreferrer"
                >
                    <FontAwesomeIcon 
                        icon={faGithub}
                        color="#aaa"
                        size="xl"
                        className="hover:text-green-500 trasition duration-300 ease-in-out"
                    />
                </a>
            </li>

            <li>
                <a
                target="_blank" 
                rel="noreferrer"
                href="live:a.markdexter"
                >
                    <FontAwesomeIcon 
                        icon={faSkype}
                        color="#aaa"
                        size="xl"
                        className="hover:text-green-500 trasition duration-300 ease-in-out"
                    />
                </a>
            </li>
        </ul>
    </div>
  </div>
)

export default Home
