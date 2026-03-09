import { motion } from "framer-motion"
import { FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa"

function Contact() {

  const contacts = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/Huy-NTG",
      text: "github.com/Huy-NTG"
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/nguyen.huy.961533",
      text: "facebook.com/nguyen.huy.961533"
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:giahuy120304@gmail.com",
      text: "giahuy120304@gmail.com"
    }
  ]

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-black text-white flex justify-center"
    >

      <div className="max-w-4xl w-full text-center">

        {/* title */}
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Contact <span className="text-blue-400">Me</span>
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Feel free to reach out if you'd like to collaborate
          or just want to connect.
        </motion.p>

        {/* contact cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {contacts.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-xl flex flex-col items-center gap-3 hover:scale-105 hover:border-blue-400 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >

              <div className="text-3xl text-blue-400">
                {item.icon}
              </div>

              <p className="font-semibold">
                {item.name}
              </p>

              <p className="text-gray-400 text-sm">
                {item.text}
              </p>

            </motion.a>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Contact