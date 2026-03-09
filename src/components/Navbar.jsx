import { useEffect, useState } from "react"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
]

function Navbar() {

  const [active, setActive] = useState("")

  useEffect(() => {

    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setActive("#" + entry.target.id)
          }

        })
      },
      {
        threshold: 0.6
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()

  }, [])

  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-lg text-white z-50">

      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-xl font-bold tracking-wide">
          Huy Nguyen
        </h1>

        <div className="flex gap-8">

          {navLinks.map((link) => {

            const isActive = active === link.href

            return (
              <a
                key={link.name}
                href={link.href}
                className="relative group"
              >
                {link.name}

                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px]
                    bg-blue-400 transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />

              </a>
            )

          })}

        </div>

      </div>

    </nav>
  )
}

export default Navbar