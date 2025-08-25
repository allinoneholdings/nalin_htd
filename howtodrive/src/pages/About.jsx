import React from 'react'
import { Users, Car, ShieldCheck, Award } from "lucide-react"

const About = () => {
  return (
    <div className="w-full text-white">
      <div className="relative h-72 md:h-96 flex items-center justify-center bg-black">
        <img
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2070&auto=format&fit=crop"
          alt="Driving School"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative text-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-primary drop-shadow-lg">
            About HowToDrive
          </h1>
          <p className="mt-3 text-sm md:text-lg text-gray-200 max-w-2xl mx-auto">
            Helping learners become confident, safe, and responsible drivers since our beginning.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4 uppercase">Our Mission</h2>
          <p className="text-gray-300">
            At <span className="font-semibold uppercase">HowToDrive</span>, our mission is to provide comprehensive and safe driving lessons that empower every student with the skills, confidence, and discipline to become responsible drivers. We emphasize safety, road awareness, and defensive driving techniques.
          </p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4 uppercase">Our Vision</h2>
          <p className="text-gray-300">
            We envision a community where every driver on the road prioritizes safety, respect, and responsibility. By providing quality training and instilling lifelong safe driving habits, we aim to make our roads safer for everyone.
          </p>
        </div>
      </div>

      <div className="bg-black/50 backdrop-blur py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-10 uppercase">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <Car className="w-12 h-12 text-primary mb-3" />
              <h3 className="font-semibold text-lg">Modern Vehicles</h3>
              <p className="text-gray-400 text-sm">
                Learn on well-maintained, dual-controlled cars for a safe experience.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-12 h-12 text-primary mb-3" />
              <h3 className="font-semibold text-lg">Safety First</h3>
              <p className="text-gray-400 text-sm">
                Defensive driving techniques to make you a low-risk, confident driver.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-primary mb-3" />
              <h3 className="font-semibold text-lg">Expert Instructors</h3>
              <p className="text-gray-400 text-sm">
                Friendly, certified professionals who guide you every step of the way.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-12 h-12 text-primary mb-3" />
              <h3 className="font-semibold text-lg">Proven Success</h3>
              <p className="text-gray-400 text-sm">
                Hundreds of successful students have earned their license with us.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex-col mt-10'>
        <h1 className='text-2xl md:text-3xl font-semibold text-primary text-center mb-2 uppercase'>OUR VALUES!</h1>
        <hr className='text-primary'/>
        <div className='flex flex-row pt-10 px-50 justify-center items-center'>
          <div className='flex-col text-gray-300 text-2xl'>
            <ol style={{ listStyle: 'disc' }}>
              <li><p className='py-1'>To promote a safe and courteous driving environment in our community.</p></li>
              <li><p className='py-1'>To observe unsafe driving practices and correct them.</p></li>
              <li><p className='py-1'>To develop effective learning processes for every task we undertake</p></li>
              <li><p className='py-1'>To accomplish Quality Driver Tutoring through up to date audio and visual techniques.</p></li>
              <li><p className='py-1'>To respect the dignity and protect the integrity of every student.</p></li>
            </ol>
          </div>
          <img className='ml-20 w-100 h-70' src="http://www.howtodrive.lk/images/2018/06/16/DSC_0240.jpg" alt="" />
        </div>
    </div>
      </div>
  )
}

export default About
