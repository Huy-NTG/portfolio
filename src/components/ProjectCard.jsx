import { motion, useMotionValue, useTransform } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

function ProjectCard({ project }) {

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()

    const mouseX = e.clientX - rect.left - rect.width / 2
    const mouseY = e.clientY - rect.top - rect.height / 2

    x.set(mouseX)
    y.set(mouseY)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl overflow-hidden p-6 transition"
    >

      <img
        src={project.image}
        className="w-full h-40 object-cover rounded-lg"
      />

      <h3 className="text-xl font-bold mt-4">
        {project.name}
      </h3>

      <p className="text-gray-400 mt-2">
        {project.tech}
      </p>

      <div className="flex gap-4 mt-6">

        <a
          href={project.github}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
        >
          <FaGithub />
          Code
        </a>

        <a
          href={project.demo}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
        >
          <FaExternalLinkAlt />
          Live
        </a>

      </div>

    </motion.div>
  )
}

export default ProjectCard