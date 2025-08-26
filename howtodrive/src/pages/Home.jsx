import React from 'react'
import ImageSlider from '../components/ImageSlider'
import Card from '../components/Card'
import BoxCard from '../components/BoxCard'
import { useNavigate } from 'react-router'
import Marquee from '../components/Marquee'

const Home = () => {
  const navigate = useNavigate();

  const data = [
    {
      title: 'EXPERIENCE YOURSELF',
      image: "http://howtodrive.lk/images/2018/06/16/IMG_7999_274.jpg",
      description: 'Learn hands-on with our professional instructors in real driving conditions.',
      route: '/basic-course'
    },
    {
      title: 'INDIVIDUAL ATTENTION',
      image: "http://howtodrive.lk/images/2018/09/14/AC0I9763.JPG",
      description: 'We ensure every student gets personalized guidance to succeed.',
      route: '/basic-course'
    },
    {
      title: 'CERTIFIED INSTRUCTORS',
      image: "http://howtodrive.lk/images/2019/01/11/IMG_3265.jpg",
      description: 'Our instructors are certified and experienced to train safe drivers.',
      route: '/basic-course'
    },
    {
      title: 'MODERN SIMULATORS',
      image: "http://howtodrive.lk/images/2018/09/14/AC0I9686.JPG",
      description: 'Train on cutting-edge simulators before hitting the real road.',
      route: '/basic-course'
    }
  ]

  const numbers = [
    { number: 20, title: 'SIMULATOR LESSONS' },
    { number: 20, title: 'DRIVING HOURS' },
    { number: 10, title: 'THEORY LESSONS' },
    { number: 100, title: 'PERCENT PASS RATE' },
  ]

  return (
    <div className='flex flex-col pt-10'>
      <ImageSlider />

      <div className="relative flex flex-col items-center my-10 w-full">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/007/278/150/small_2x/dark-background-abstract-with-light-effect-vector.jpg"
          alt="background"
          className="w-full h-52 md:h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-16 bg-black/50 rounded-2xl">
          <h1 className="text-primary font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 drop-shadow-lg">
            WELCOME TO HOWTODRIVE
          </h1>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-4xl leading-relaxed">
            <span className="font-semibold uppercase">howtodrive</span> driving school helps you become a disciplined, safe, and responsible driver. With expert training and modern tools, we ensure your driving journey starts right.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-5 px-6 lg:px-12 gap-8">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
            route={item.route}
            className="shadow-lg hover:shadow-2xl transition duration-300 rounded-2xl overflow-hidden"
          />
        ))}
      </div>

      <Marquee />

      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 ml-20 px-6 lg:px-20 my-10'>
        {numbers.map((item, index) => (
          <BoxCard
            key={index}
            number={item.number}
            title={item.title}
            className="shadow-md hover:shadow-xl transition rounded-2xl bg-gradient-to-br from-primary to-primary-dull text-secondary font-bold"
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center my-14 w-full">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/007/278/150/small_2x/dark-background-abstract-with-light-effect-vector.jpg"
          alt="Background"
          className="w-full h-52 md:h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/50 rounded-2xl">
          <h2 className="text-primary/90 font-extrabold uppercase text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-6">
            Looking for Driving Lessons? <br /> Join Now & Start Your Journey
          </h2>
          <button
            onClick={() => {navigate('/application'); window.scrollTo(0,0);}}
            className="px-6 py-3 rounded-2xl bg-primary/80 hover:bg-primary-dull/80 text-black font-bold text-base sm:text-lg transition transform hover:scale-105 shadow-md"
          >
            Apply Now
          </button>
        </div>
      </div>

      <section className="py-16 px-6 lg:px-20 bg-black/40 backdrop-blur-md">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-10">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
            <details className="bg-white/5 rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold text-gray/70">How long is the driving course?</summary>
              <p className="mt-2 text-gray-300">Our standard course runs for 20 driving hours + 10 theory lessons.</p>
            </details>
            <details className="bg-white/5 rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold text-gray/70">Do you provide both manual and automatic cars?</summary>
              <p className="mt-2 text-gray-300">Yes, students can choose between manual or automatic training cars.</p>
            </details>
            <details className="bg-white/5 rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold text-gray/70">Can I schedule classes after work hours?</summary>
              <p className="mt-2 text-gray-300">Absolutely! We offer flexible scheduling including evenings and weekends.</p>
            </details>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-20 bg-black/30 backdrop-blur-md text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-12">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-white/10 rounded-2xl shadow-md hover:shadow-lg transition">
              <p className="italic text-gray-200">“The instructors were patient and professional. I passed my test on the first try!”</p>
              <h4 className="mt-4 font-semibold text-primary">- Nimal, Colombo</h4>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl shadow-md hover:shadow-lg transition">
              <p className="italic text-gray-200">“The simulators really helped me gain confidence before driving on the road.”</p>
              <h4 className="mt-4 font-semibold text-primary">- Gihan, Kandy</h4>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl shadow-md hover:shadow-lg transition">
              <p className="italic text-gray-200">“Best driving school! Flexible timings and supportive instructors.”</p>
              <h4 className="mt-4 font-semibold text-primary">- Achala, Galle</h4>
            </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-20 bg-gradient-to-r from-primary via-yellow-400 to-primary-dull text-center rounded-2xl shadow-lg mx-6 my-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-black mb-4">Stay Updated with Driving Tips</h2>
        <p className="text-black/80 mb-6">Subscribe to get free resources, safety tips, and course updates!</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg flex-1 text-black"
            />
            <button className="px-6 py-3 rounded-lg bg-black text-primary font-semibold hover:bg-secondary transition">
              Subscribe
            </button>
        </div>
      </section>
    </div>
  )
}

export default Home
