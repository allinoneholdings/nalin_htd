import React from 'react'
import Card from '../components/Card'
import { useNavigate } from 'react-router'

const Services = () => {
  const navigate = useNavigate();
  
  const license = [
    {
      title: 'Driving License for Cars - Manual or Auto gear',
      image: 'http://www.howtodrive.lk/images/2018/09/14/IMG_9114.JPG',
      description: 'At the successful completion of this course you will be eligible to obtain a B grade driving license. B grade driving license can be obtained in two variations as auto gear only and auto manual both. This will be defined based on the vehicle used for the trial test.',
      route: '/manual-auto'
    },
    {
      title: 'Driving License for Dual Purpose vehicles',
      image: 'http://www.howtodrive.lk/images/2018/09/14/IMG_9122.JPG',
      description: 'Dual Purpose vehicle driving courses are designed based on current industry trend with all relevant training materials for your convenience. Currently According to new laws Dual Purpose vehicles also required Grade B driving license.',
      route: '/dual-purpose'
    },
    {
      title: 'Driving License for Motor Cycles & Three Wheeler',
      image: 'http://www.howtodrive.lk/images/2018/09/14/AC0I9928.JPG',
      description: 'Driving Motor Cycle or Three Wheeler is not an easy task. Reason for most of the todays accidents is bad driving practices of three wheeler drivers and motor cyclist.',
      route: '/motor-cycle'
    },
    {
      title: 'Driving Licence for All in One Light Driving Package',
      image: 'http://www.howtodrive.lk/images/2018/09/14/IMG_9092.JPG',
      description: 'We offer driving courses for the range of vehicles with comprehensive hands-on driving experience to master the driving your own. All in one light driving Package is specially designed for you who loves to drive any light vehicle.',
      route: '/allinone'
    },
    {
      title: 'Driving Licence for Motor Coach & Motor Lorry',
      image: 'http://www.howtodrive.lk/images/2018/09/14/IMG_9101.JPG',
      description: 'If you are planning to be a professional driver this is the ideal driving course that tailor-made for you. We guarantee to make you a professional driver. Join with us and experience the deference.',
      route: '/motor-coach'
    },
    {
      title: 'Special Driving Courses',
      image: 'http://www.howtodrive.lk/images/2018/09/14/AC0I9828.JPG',
      description: 'Using state-of-the-art teaching methodologies, we offer special driving training course using Simulators first time in Sri Lanka provides an interactive learning environment for students. Other than traditional driving coursers we offer unique courses.',
      route: '/special-course'
    },
  ]

  return (
    <>
      <div className='flex flex-col items-center pt-12 px-6 lg:px-20'>
        <div className='text-center max-w-3xl'>
          <h1 className='text-3xl md:text-4xl font-bold text-primary mb-4 uppercase'>
            Let Our Courses Inspire You!
          </h1>
          <p className='text-gray-400 text-sm md:text-base leading-relaxed'>
            We have a variety of driving courses specifically created for you. Pick the suitable driving course based on your preference. Our qualified instructors will guide you every step of the way to achieve your goal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full">
          {license.map((item, index) => (
            <div key={index}>
              <Card
                title={item.title}
                image={item.image}
                description={item.description}
                route={item.route}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-col items-center my-16 w-full">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/007/278/150/small_2x/dark-background-abstract-with-light-effect-vector.jpg"
          alt="Background"
          className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-lg shadow-lg"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-primary font-extrabold uppercase text-lg sm:text-xl md:text-3xl lg:text-4xl mb-6 drop-shadow-lg">
            Are you ready to start driving? <br /> Select your course today!
          </h2>
          <button 
            onClick={() => {navigate('/application'); window.scrollTo(0,0);}}
            className="px-6 py-3 bg-primary hover:bg-primary-dull text-black font-semibold rounded-2xl shadow-lg transition duration-300"
          >
            Apply Now
          </button>
        </div>
      </div>
    </>
  )
}

export default Services
