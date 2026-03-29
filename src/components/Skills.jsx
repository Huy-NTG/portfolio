import { motion } from "framer-motion"

function Skills() {

  const skills = [
    { name: "Java", level: 60 },
    { name: "Spring Boot", level: 60 },
    { name: "React", level: 70 },
    { name: "JavaScript", level: 70 },
    { name: "Python", level: 60 },
    { name: "MySQL", level: 75 },
    { name: "Docker", level: 50 },
    { name: "Git", level: 80 }
  ]

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-black text-white flex justify-center"
    >

      <div className="max-w-4xl w-full">

        {/* title */}
        <motion.h2
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          My <span className="text-blue-400">Skills</span>
        </motion.h2>

        {/* skill bars */}
        <div className="space-y-8">

          {skills.map((skill, index) => (

            <div key={skill.name}>

              {/* skill name */}
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>

              {/* progress background */}
              <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">

                {/* animated progress */}
                <motion.div
                  className="h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.2
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills