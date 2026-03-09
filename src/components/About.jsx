import { motion } from "framer-motion"
import { FaCode, FaServer, FaDatabase } from "react-icons/fa"

function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-black text-white flex justify-center"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT - TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            I am a software engineering student passionate about backend
            development. I enjoy building scalable web applications using
            Java, Spring Boot, and modern frontend technologies like React.
          </p>

          <p className="text-gray-400">
            My goal is to become a backend engineer capable of designing
            efficient systems and delivering high-performance applications.
          </p>

        </motion.div>

        {/* RIGHT - SKILL CARDS */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl text-center hover:scale-105 transition">
            <FaCode className="text-3xl text-blue-400 mx-auto mb-3" />
            <h3 className="font-semibold">Frontend</h3>
            <p className="text-gray-400 text-sm mt-2">
              React, TailwindCSS
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl text-center hover:scale-105 transition">
            <FaServer className="text-3xl text-blue-400 mx-auto mb-3" />
            <h3 className="font-semibold">Backend</h3>
            <p className="text-gray-400 text-sm mt-2">
              Java, Spring Boot
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl text-center hover:scale-105 transition">
            <FaDatabase className="text-3xl text-blue-400 mx-auto mb-3" />
            <h3 className="font-semibold">Database</h3>
            <p className="text-gray-400 text-sm mt-2">
              MySQL, PostgreSQL
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default About