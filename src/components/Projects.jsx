import { motion } from "framer-motion"
import booking from "../assets/Images/booking.jfif"
import facebook from "../assets/Images/facebook.jfif"
import review from "../assets/Images/cinema.png"
import ProjectCard from "./ProjectCard"

function Projects() {

  const projects = [
    {
      name: "Facebook Clone",
      tech: "React + Spring Boot",
      github: "https://github.com/Huy-NTG/facebook_clone.git",
      demo: "#",
      image: facebook
    },
    {
      name: "Booking Management System",
      tech: "Spring Boot + JWT",
      github: "https://github.com/Huy-NTG/chuyendeJ2EE.git",
      demo: "#",
      image: booking
    },
    {
      name: "Review Cinema App",
      tech: "HTML CSS JS",
      github: "https://github.com/Huy-NTG/modern_programming_technology.git",
      demo: "#",
      image: review
    }
  ]

  return (
    <section id="projects" className="py-24 px-6 bg-black text-white flex justify-center">

      <div className="max-w-6xl w-full">

        <motion.h2
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          My <span className="text-blue-400">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects