import { useEffect, useState } from "react"
import axios from "axios"
import ClipLoader from "react-spinners/ClipLoader"

interface SkillsProp {
  id: number
  name: string
  logo: string
}

const Skills = () => {
  const [skills, setSkills] = useState<SkillsProp[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("skills.json")
        setSkills(response.data.skills)
      } catch (err) {
        console.error(err)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="container-fluid mx-auto flex flex-row items-center justify-center">
      <div className="flex flex-col w-9/12 bg-white shadow-md shadow-black my-10 p-5 border-2 rounded-lg">
        <h2 className="text-2xl font-poppins border-b border-gray-300 py-2">
          Technologies and Frameworks
        </h2>
        <div className="p-2 md:p-10 grid grid-cols-2 lg:grid-cols-5 gap-4 mx-auto">
          {Array.isArray(skills) && skills.length > 0 ? (
            skills.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col items-center justify-center font-quicksand px-4"
              >
                <img
                  src={`~/assets/logos/${skill.logo}`}
                  alt={skill.logo}
                  width="60px"
                  height="50px"
                />
                <p className="my-2 mx-auto">{skill.name}</p>
              </div>
            ))
          ) : (
            <ClipLoader
              color="#111"
              loading={true}
              size={40}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Skills
