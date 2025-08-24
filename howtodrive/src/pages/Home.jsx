import React from 'react'
import ImageSlider from '../components/ImageSlider'
import Card from '../components/Card'
import BlurCircle from '../components/BlurCircle'
import BoxCard from '../components/BoxCard'

const Home = () => {
    const data = [
        {
            title: 'EXPERIENCE YOURSELF',
            image: "http://howtodrive.lk/images/2018/06/16/IMG_7999_274.jpg",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, suscipit.'
        },
        {
            title: 'INDIVIDUAL ATTENTION',
            image: "http://howtodrive.lk/images/2018/09/14/AC0I9763.JPG",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, suscipit.'
        },
        {
            title: 'CERTIFIED INSTRUCTORS',
            image: "http://howtodrive.lk/images/2019/01/11/IMG_3265.jpg",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, suscipit.'
        },
        {
            title: 'MODERN SIMULATORS',
            image: "http://howtodrive.lk/images/2018/09/14/AC0I9686.JPG",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, suscipit.'
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10 gap-5 justify-between">
        {
            data.map((item, index) => (
                <Card
                    key={index}
                    title={item.title}
                    image={item.image}
                    description={item.description}
                />
            ))
        }
      </div>

      <div className='relative flex flex-col border-0 items-center'>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/007/278/150/small_2x/dark-background-abstract-with-light-effect-vector.jpg" alt="" className='w-full h-40' />
        <label className='absolute text-primary font-bold text-3xl pt-7 justify-center'>WELCOME TO HOWTODRIVE DRIVING SCHOOL</label>
        <p className='absolute text-white text-center font-thin justify-center pt-18 px-20'><span className='font-semibold'><span className='uppercase'>howtodrive</span> driving school</span> will introduce you to driving and the responsibilities that go along with it. This is a program that emphasis on Driver Safety. You will learn how to be a disciplined driver which can help you become a responsible, low-risk driver.</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-20 p-10 gap-6'>
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

      <div className='relative flex flex-col border-0 items-center py-5'>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/007/278/150/small_2x/dark-background-abstract-with-light-effect-vector.jpg" alt="" className='w-full h-40' />
        <label className='absolute text-primary font-bold text-3xl pt-7 pb-4 justify-center uppercase'>Searching for a driving lessons? Join now and become a new student </label>
        <button className='absolute border rounded-xl px-4 py-3 mt-20 bg-primary hover:bg-primary-dull text-black font-semibold'>Apply Now</button>
      </div>
    </div>
  )
}

export default Home
