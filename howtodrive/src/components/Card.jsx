import React from 'react'
import { useNavigate } from 'react-router'
import { motion } from 'framer-motion'

const Card = ({ image, title, description, route, showButton = true }) => {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}      // hidden & slightly down
      whileInView={{ opacity: 1, y: 0, scale: 1 }}      // animate when in view
      transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }} // smooth ease
      viewport={{ once: false, amount: 0.2 }}            // trigger once
      className="flex flex-col h-full p-4 bg-blue-950/30 backdrop-blur-md text-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      <p className="text-gray-300 text-sm my-3 flex-grow text-justify">
        {description}
      </p>

      {showButton && (
        <button
          onClick={() => { navigate(route); window.scrollTo(0,0); }}
          className="mt-auto px-5 py-2 bg-primary text-black font-semibold rounded-lg hover:bg-primary-dull transition-colors duration-300"
        >
          READ MORE
        </button>
      )}
    </motion.div>
  )
}

export default Card
