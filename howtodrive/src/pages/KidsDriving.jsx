import React from 'react'
import Card from '../components/Card'

const KidsDriving = () => {
  const data = [
    {
      title: 'KIDS DRIVING AGE GROUP 3-6 YEARS',
      image: 'http://www.howtodrive.lk/images/2019/01/11/IMG_3.6.jpg',
      description: 'Specialy Designed Kids Driving Courses to Provide Road Understanding for Year 3 - 6 Kids.',
      route: '/group1'
    },
    {
      title: 'KIDS DRIVING AGE GROUP 7-11 YEARS',
      image: 'http://www.howtodrive.lk/images/Age-7-111.JPG',
      description: 'Your Childs knowledge about the driving and road usage will make roads are safer to them.',
      route: '/group2'
    },
    {
      title: 'KIDS DRIVING AGE GROUP 12-15 YEARS',
      image: 'http://www.howtodrive.lk/images/2019/01/11/IMG_9679-11---15.jpg',
      description: 'We make grounds to make your child a disiplened road user in future.',
      route: '/group3'
    },
  ]
  return (
    <div className='flex flex-col pt-10 px-50'>
      <h1 className='text-2xl md:text-4xl font-semibold text-primary text-center mb-10 uppercase'>LET OUR COURSES INSPIRE YOU!</h1>
      <ol style={{ listStyle: 'disc' }}>
        <li><p className='text-gray-300 py-1 text-justify'>Designed exclusively for Kids age (3-15 years) which provides three courses basically covering road rules , road signs, basic first-aid and how to use road in a safe way</p></li>
        <li><p className='text-gray-300 py-1 text-justify'>How to drive kids driving program will teach them road signs and traffic signals through various educational activities including multiple choice quizzers and successful rounds in a simulator.</p></li>
        <li><p className='text-gray-300 py-1 text-justify'>children can also practice driving on an indoor track designed to international standards and learn basic road safety and other important motor skills in both a classroom and track environment.</p></li>
        <li><p className='text-gray-300 py-1 text-justify'>On successful completion of the course the student will be issued a kids driving licence and a certificate from HTD driving school.</p></li>
      </ol>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-5 justify-between">
          {
              data.map((item, index) => (
                  <Card
                      key={index}
                      title={item.title}
                      image={item.image}
                      description={item.description}
                      route={item.route}
                  />
              ))
          }
        </div>

        <div className="flex flex-col pt-10 items-center justify-center text-center px-4">
            <h2 className="text-primary font-bold uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
                Are you willing to learn drive? select Your desired Course Now <br/> <span className='text-white'>Contact Us - +94 11278 7800</span>
            </h2>
        </div>
    </div>
  )
}

export default KidsDriving
