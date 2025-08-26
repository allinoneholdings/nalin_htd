import React from 'react'
import { motion } from 'framer-motion'

const BoxCard = ({ number, title }) => {
  const [visible, setVisible] = React.useState(false)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const divRef = React.useRef(null)

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}      // hidden & slightly down
      whileInView={{ opacity: 1, y: 0, scale: 1 }}      // animate when in view
      transition={{ duration: 2, ease: [0.3, 1, 0.5, 1] }} // smooth ease
      viewport={{ once: false, amount: 0.2 }}            // trigger once
      className="flex flex-col duration-300 cursor-pointer"
    >
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="relative w-45 h-45 rounded-xl p-1 bg-gray-900 backdrop-blur-md text-gray-700 overflow-hidden shadow-md cursor-pointer"
      >
        <div
          className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-primary-dull via-primary to-purple-300 absolute z-0 transition-opacity duration-500 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            top: position.y - 80,
            left: position.x - 80,
            width: 160,
            height: 160,
          }}
        />

        <div className="relative z-10 bg-gray-900/75 p-4 h-full w-full rounded-xl flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold text-white mb-1">{number}</h2>
          <p className="text-md text-primary/90 font-medium">{title}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default BoxCard
