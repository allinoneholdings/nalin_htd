import React from 'react'

const BoxCard = ({ number, title }) => {
  const [visible, setVisible] = React.useState(false)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const divRef = React.useRef(null)

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top })
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative w-45 h-45 rounded-xl p-1 bg-gray-900 backdrop-blur-md text-gray-800 overflow-hidden shadow-md cursor-pointer"
    >
      <div
        className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-300 absolute z-0 transition-opacity duration-500 ${
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
        <p className="text-md text-blue-400 font-medium">{title}</p>
      </div>
    </div>
  )
}

export default BoxCard
