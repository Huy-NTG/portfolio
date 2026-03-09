import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function CursorGlow() {

  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function handleMouseMove(e) {
      setPosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl"
      animate={{
        x: position.x - 150,
        y: position.y - 150
      }}
      transition={{
        type: "tween",
        ease: "linear",
        duration: 0.15
      }}
    />
  )
}

export default CursorGlow