import React from 'react'
import { useNavigate } from 'react-router'

const Card = ({ image, title, description, route, showButton = true }) => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col p-4 bg-blue-950/30 backdrop-blur-md text-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer max-w-sm">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <p className="text-gray-300 text-sm my-3 flex-1 text-justify">{description}</p>

      {showButton && (
        <button
          onClick={() => {navigate(route); window.scrollTo(0,0);}}
          className="mt-2 px-5 py-2 justify-self-start bottom-0 bg-primary text-black font-semibold rounded-lg hover:bg-primary-dull transition-colors duration-300 items-end"
        >
          READ MORE
        </button>
      )}
    </div>
  )
}

export default Card
