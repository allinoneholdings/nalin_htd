import React from "react"

const DriverCard = ({ name, role, img }) => {
  return (
    <div className="bg-blue-950/30 backdrop-blur p-6 rounded-2xl shadow-lg flex flex-col items-center">
      <img
        src={img}
        alt={name}
        className="w-40 h-40 rounded-full object-cover mb-4 border-2 border-primary"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-400 text-sm">{role}</p>
    </div>
  )
}

export default DriverCard
