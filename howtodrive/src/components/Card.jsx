import React from 'react'
import { useNavigate } from 'react-router'

const Card = ({ image, title, description }) => {
  const navigate = useNavigate()

  return (
    <div className="p-4 bg-blue-950/30 backdrop-blur-md text-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer max-w-sm">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <p className="text-gray-200 text-sm my-3">{description}</p>
      
      <button
        onClick={() => navigate('/more-details')}
        className="mt-2 px-5 py-2 bg-primary text-black font-semibold rounded-lg hover:bg-primary-dull transition-colors duration-300"
      >
        READ MORE
      </button>
    </div>
  )
}

export default Card
