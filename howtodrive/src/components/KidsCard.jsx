import React from 'react'
import { useNavigate } from 'react-router'

const KidsCard = ({ title, image, details, route }) => {
    const navigate = useNavigate();

  return (
    <div className="fgrid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-4 bg-blue-950/30 backdrop-blur-md text-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer max-w-lg">
      <div>
        <h2 className="text-xl font-semibold mb-2">KIDS DRIVING AGE 3 to 6</h2>
        <div className="overflow-hidden rounded-lg">
            <img
            src='http://www.howtodrive.lk/images/2019/01/11/IMG_3.6.jpg'
            alt='group1'
            className="w-full h-40 object-cover transform hover:scale-105 transition-transform duration-300"
            />
        </div>
      </div>
      <div>
        <h2>Course Summary</h2>
      </div>
      <div className='space-y-2'>
        <h3 className='text-xl font-semibold text-gray-700'>Course Details</h3>
        <p className='text-gray-600'>Instructor: </p>
        <p className='text-gray-600'>Instructor: </p>
        <p className='text-gray-600'>Instructor: </p>
      </div>

      <div className='space-y-2'>
        <h3 className='text-xl font-semibold text-gray-700'>Activities</h3>
        <ul className='list-disc pl-6 text-gray-600 space-y-1'>
            <li>Puzzle</li>
            <li>Puzzle</li>
            <li>Puzzle</li>
            <li>Puzzle</li>
        </ul>
      </div>

      <div className='pt-4'>
        <button 
            className='bg-primary hover:bg-primary-dull text-black px-4 py-2 rounded transition'>Start Course</button>
      </div>

    </div>
  )
}

export default KidsCard
