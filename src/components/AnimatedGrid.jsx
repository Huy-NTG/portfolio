import { motion } from "framer-motion"

function AnimatedGrid() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Moving gradient light */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-3xl rounded-full"
        animate={{
          x: [0, 200, -200, 0],
          y: [0, -200, 200, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

    </div>
  )
}

export default AnimatedGrid