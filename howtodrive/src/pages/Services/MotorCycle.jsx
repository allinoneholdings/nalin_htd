import React from 'react'

const ManualAuto = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 p-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-5 pt-10 text-primary">
        Driving License for Motor Cycles & Three Wheeler's
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 backdrop-blur-md bg-black/50 rounded-2xl shadow-xl">
        <div className="flex flex-col justify-center">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src="http://www.howtodrive.lk/images/2018/09/14/AC0I9928.JPG"
              alt="manualauto"
              className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-2xl md:text-3xl font-semibold mb-3 text-primary">
            Course Summary
          </h1>
          <div className="space-y-3 text-gray-300">
            <p>
              Our driver training courses are prepared to educate and provide necessary skills to produce disciplined, safe and responsible drivers.
            </p>
            <p>Above course consists of three phases.</p>
            <p>
              <strong>Phase 1:</strong> Consists of ten lessons, mainly focused on Written Test conducted by Department of Motor Traffic(DMT) to obtain Learner’s Permit (DMT30).
            </p>
            <p>
              <strong>Phase 2:</strong> Contains training lessons using high-tech Driver Simulators which give realistic road experience to the trainee including various weather and road conditions.
            </p>
            <p>
              <strong>Phase 3:</strong> Contains lessons for on-the-road driving which covers entire driving lessons with driving ethics and practice in practical environment.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 max-w-5xl mx-auto space-y-4 text-gray-300">
        <p className="font-semibold">
          Holder of the class B driving license is eligible to drive motor vehicles which do not exceed gross vehicle weight of 3500kgs and number of passengers not exceeding 9 inclusive of the driver. Trailer weight must not exceed 750kgs.
        </p>
        <p className="font-semibold">
          License holders of Auto Transmission Class (A/T) are permitted only to drive Auto Transmission Vehicles. Applicants who passed with Manual Transmission Vehicle at the practical test are permitted to drive both Manual and Auto Transmission Vehicles.
        </p>
        <p>
          Applicants who passed with Manual Transmission Vehicle at the practical test are permitted to drive both Manual and Auto Transmission Vehicles.
        </p>
      </div>
    </div>
  )
}

export default ManualAuto
