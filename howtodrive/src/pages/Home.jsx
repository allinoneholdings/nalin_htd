import React from 'react'
import ImageSlider from '../components/ImageSlider'
import Card from '../components/Card'
import BoxCard from '../components/BoxCard'
import { useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate();
    const data = [
        {
            title: 'EXPERIENCE YOURSELF',
            image: "http://howtodrive.lk/images/2018/06/16/IMG_7999_274.jpg",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, suscipit.',
            route: '/basic-course'
        },
        {
            title: 'INDIVIDUAL ATTENTION',
            image: "http://howtodrive.lk/images/2018/09/14/AC0I9763.JPG",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, suscipit.',
            route: '/basic-course'
        },
        {
            title: 'CERTIFIED INSTRUCTORS',
            image: "http://howtodrive.lk/images/2019/01/11/IMG_3265.jpg",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, suscipit.',
            route: '/basic-course'
        },
        {
            title: 'MODERN SIMULATORS',
            image: "http://howtodrive.lk/images/2018/09/14/AC0I9686.JPG",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, suscipit.',
            route: '/basic-course'
        }
    ]

    const numbers = [
        {
            number:20,
            title: 'SIMULATOR LESSONS'
        },
        {
            number:20,
            title: 'DRIVING HOURS'
        },
        {
            number:10,
            title: 'THEORY LESSONS'
        },
        {
            number:100,
            title: 'PERCENT PASS RATE'
        },
    ]

  return (
    <div className='flex flex-col'>
      <ImageSlider />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-5 p-10 gap-5 justify-between">
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

      <div className="relative flex flex-col items-center my-5 w-full">
        <img
            src="https://static.vecteezy.com/system/resources/thumbnails/007/278/150/small_2x/dark-background-abstract-with-light-effect-vector.jpg"
            alt="background"
            className="w-full h-40 md:h-60 lg:h-72 object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-12">
            <h1 className="text-primary font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2">WELCOME TO HOWTODRIVE DRIVING SCHOOL</h1>
            <p className="text-white font-thin text-sm sm:text-base md:text-lg max-w-4xl">
                <span className="font-semibold">
                    <span className="uppercase">howtodrive</span> driving school
                </span>
                will introduce you to driving and the responsibilities that go along with it. This is a program that emphasis on Driver Safety. You will learn how to be a disciplined driver which can help you become a responsible, low-risk driver.
            </p>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-20 p-10 my-5 gap-6'>
        {
            numbers.map((item, index) => (
                <BoxCard
                    key={index}
                    number={item.number}
                    title={item.title}
                />
            ))
        }
      </div>

      <div className="relative flex flex-col items-center my-10 w-full">
        <img
            src="https://static.vecteezy.com/system/resources/thumbnails/007/278/150/small_2x/dark-background-abstract-with-light-effect-vector.jpg"
            alt="Background"
            className="w-full h-40 md:h-60 lg:h-72 object-cover rounded-lg"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-primary font-bold uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
                Searching for driving lessons? <br/> Join now and become a new student
            </h2>
            <button
                onClick={() => {navigate('/application'); window.scrollTo(0,0);}}
                className="border rounded-xl px-4 sm:px-6 py-2 sm:py-3 bg-primary hover:bg-primary-dull text-black font-semibold text-sm sm:text-base">Apply Now</button>
        </div>
      </div>

    </div>
  )
}

export default Home
