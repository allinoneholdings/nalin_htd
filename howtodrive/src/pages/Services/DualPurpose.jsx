import React from 'react'

const DualPurpose = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-10 justify-center  backdrop-blur-md text-gray-100 rounded-xl transition-shadow duration-300 cursor-pointer">
            <div className='pl-30'>
                <h2 className="text-3xl font-semibold mb-5 text-primary">Driving License for Dual Purpose vehicles</h2>
                <div className="overflow-hidden rounded-lg">
                    <img
                    src='http://howtodrive.lk/images/2018/09/14/IMG_9122.JPG'
                    alt='manualauto'
                    className="w-140 h-110 object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
            <div className='pt-10'>
                <div>
                    <h1 className='text-2xl font-semibold mb-5'>Course Summary</h1>
                </div>
                <div className='space-y-3'>
                    <p>Our driver training courses are prepared to educate and provide necessary skills to produce disciplined, safe and responsible driver.</p>
                    <p>Above course consists of three phases.</p>
                    <p>Phase 1: Consists of ten lessons, mainly focused on Written Test conducted by Department of Motor Traffic(DMT) to obtain Learner’s Permit (DMT30).</p>
                    <p>Phase 2: Contains training lessons using high tech Driver Simulators which gives the realistic road experience to the trainee including various weather and road conditions.</p>
                    <p>Phase 3: Contains lessons for on the road driving which covers entire driving lessons with driving ethics and practice on practical environment.</p>
                </div>
            </div>
        </div>

        <div className='px-40'>
            <p className='font-semibold py-2'>Holder of the class B driving license is eligible to drive motor vehicles which does not exceed gross vehicle weight of 3500kgs and number of passengers not exceed 9 inclusive of the driver and also a trailer weight does not exceed 750kgs.</p>
            <p className='font-semibold py-2'>License holders of Auto Transmission Class (A/T) is permitted only to drive Auto Transmission Vehicles. Applicants who passed with Manual Transmission Vehicle at the practical test is permitted to drive both Manual and Auto Transmission Vehicles.</p>
            <p className='py-2'>License holders of Auto Transmission Class (A/T) is permitted only to drive Auto Transmission Vehicles. Applicants who passed with Manual Transmission Vehicle at the practical test is permitted to drive both Manual and Auto Transmission Vehicles.</p>
        </div>
    </div>
  )
}

export default DualPurpose
