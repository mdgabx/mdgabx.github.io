import { useEffect, useState } from "react"
import axios from "axios"
import ClipLoader from "react-spinners/ClipLoader"

interface ProjectsProp {
  id: number
  name: string
  description: string
  technologies: string[]
  projectUrl: string
  githubUrl: string
  image: string
}

interface ProjectCardProps {
  project: ProjectsProp
}

const Projects = () => {
  const [projects, setProjects] = useState<ProjectsProp[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("projects.json")
        setProjects(response.data.projects)
      } catch (err) {
        console.error(err)
      }
    }

    fetchProjects()
  }, [])

  const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
      <div className="container">
        <div className="flex flex-col shadow-md rounded mx-auto w-90 lg:w-3/4 p-10 my-4">
          <div className="flex flex-col gap-5">
            <h3 className="font-poppins text-emerald-800 text-xl">
              {project.name}
            </h3>
            <img
              className="rounded mx-auto"
              src={`./projects/${project.image}`}
              alt={project.name}
              style={{ width: "100%", height: "auto" }}
            />
            <div className="container-fluid font-quicksand my-4">
              <p className="italic quote mx-auto my-5">{project.description}</p>
              {project.technologies.map((tech, idx) => {
                return (
                  <span
                    key={idx}
                    className="inline-block bg-gray-300 rounded-xl px-2 py-1 text-xs
                                        mx-1
                                    "
                  >
                    {tech}
                  </span>
                )
              })}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-5 my-5">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  className="text-white bg-green-600 rounded-lg p-3 shadow shadow-green-300
                                    hover:bg-green-600/70
                                "
                >
                  Project URL
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="border shadow border-black-800 p-3 rounded-lg hover:bg-green-600/70
                                    hover:border-green-600 hover:text-white hover:shadow hover:shadow-green-300
                                "
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="container-fluid mx-auto flex flex-row items-center justify-center">
        <div className="w-10/12 md:w-8/12 flex flex-col bg-white shadow-md my-10 p-5 border-2 rounded-lg">
          <h2 className="text-2xl font-poppins border-b border-gray-300 py-2">
            Projects
          </h2>
          <div className="container flex flex-row items-center justify-center mx-auto w-full">
            {projects.length === 0 ? (
              <div className="flex items-center justify-center w-100">
                <ClipLoader
                  color="#111"
                  loading={true}
                  size={40}
                  aria-label="Loading Spinner"
                />
              </div>
            ) : (
              <div className="relative flex flex-col">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
