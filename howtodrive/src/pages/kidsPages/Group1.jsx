import React from 'react'
import { useNavigate } from 'react-router';

const Group1 = () => {
    const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-10 justify-center  backdrop-blur-md text-gray-300 rounded-xl transition-shadow duration-300 cursor-pointer">
      <div className='pl-30'>
        <h2 className="text-3xl font-semibold mb-2 text-primary">KIDS DRIVING AGE 3 to 6</h2>
        <div className="overflow-hidden rounded-lg">
            <img
            src='http://www.howtodrive.lk/images/2019/01/11/IMG_3.6.jpg'
            alt='group1'
            className="w-110 h-110 object-cover transform hover:scale-105 transition-transform duration-300"
            />
        </div>
      </div>
      <div className='pt-10'>
        <div>
            <h1 className='text-2xl font-semibold mb-5'>Course Summary</h1>
        </div>
        <div className='space-y-2'>
            <h3 className='text-xl font-semibold text-gray-100'>Course Details:</h3>
            <ul className='list-disc pl-6 text-gray-300 space-y-1'>
                <li>Course Duration: 10 Days (1 Hour / day)</li>
                <li>Medium: English / Sinhala.</li>
                <li>Instructor: </li>
            </ul>
        </div>

        <div className='space-y-2'>
            <h3 className='text-xl font-semibold text-gray-200 pt-5'>Activities</h3>
            <ul className='list-disc pl-6 text-gray-300 space-y-1'>
                <li>Vehicles identification & playing on track mat.</li>
                <li>Walk around class – signs, signals and roads.</li>
                <li>Road safety.</li>
                <li>Knowledge.</li>
                <li>Toy car simulation</li>
                <li>Foot operated car driving on track.</li>
            </ul>
        </div>
        <button 
            onClick={() => {navigate('/application'); window.scrollTo(0,0);}}
            className='mt-3 bg-primary hover:bg-primary-dull text-black px-4 py-2 rounded transition'>Start Course
        </button>
      </div>
    </div>
  )
}

export default Group1
