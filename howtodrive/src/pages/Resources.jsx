import React from "react"
import DriverCard from "../components/DriverCard"
import Card from "../components/Card"

const Resources = () => {
  const simulators = [
    {
      title: 'Simulator 1 - Driving Simulator',
      image: 'http://www.howtodrive.lk/images/2018/06/08/advanced-car-driving-simulator-500x500.jpg',
      description: 'These simulators are not just video games. These are result of long term research and experience of worldwide driving institutions. These simulators are specially designed to train students by providing on the road experience for them before starting actual road training. Intelligent program will monitor your driving response and eye movements assessing your entire driving practice programmatically. Simulator training will cover Express Way Driving, Night Driving, Driving with various weather conditions.'
    },
    {
      title: 'Simulator 2 - Air Bag Impact Simulator',
      image: 'http://www.howtodrive.lk/images/2018/06/08/DSC_0162.JPG',
      description: 'Did you ever experience a car impact? But we have facilities to give you a vehicle impact experience and air bag operation experience without getting you into an accident. This training will help you to control yourself in an emergency situation without panicking yourself. Stay in control is the most important thing when an accident happens. If you panic you will not be able to manage the situation.'
    },
    {
      title: 'Simulator 3 - Engine Cut Section',
      image: 'http://www.howtodrive.lk/images/2018/06/08/DSC_0206.jpg',
      description: 'Specially made actual Car cut model for easy understanding of vehicle major components/units working systems. Engine – How the pistons, Valves, Crank and Cam, Timing Chain works. How the Gear Box and Drive Shafts work. Steering system, Fuel Tank, Petrol evaporation collecting system ( Canister ), Suspension, Radiator, AC condenser, Starter motor, alternator, Sensors, Oil Filter cut sections etc'
    },
  ]

  const instructors = [
    {
      name: "Mr M.N Jayampathi",
      role: "A Class Driving Instructor",
      img: "http://www.howtodrive.lk/images/2018/12/24/Mr.jayampathi.jpeg",
    },
    {
      name: "Mrs. Darshana Perera",
      role: "Lady Trainer",
      img: "http://www.howtodrive.lk/images/2018/12/24/Mrs.-Darshana.jpeg",
    },
    {
      name: "Mr. M.D Dushmantha",
      role: "Technical Trainer",
      img: "http://www.howtodrive.lk/images/2019/01/14/WhatsApp-Image-2019-01-14-at-12.53.25-PM.jpeg",
    },
  ]

  const data = [
    {
      title: 'Vehicles',
      image: 'http://www.howtodrive.lk/images/IMG_7926_500.jpg',
      description: 'We use modern vehicles with high protection features and driver training equipment to train our learner drivers. We ensure your protection while helping you to learn and control vehicle much smoothly while providing higher degree of protection to you. Our vehicle fleet consists of almost new vehicles which are most suitable for trainee drivers with dual pedal controls.'
    },
    {
      title: 'Commercial Vehicles',
      image: 'http://www.howtodrive.lk/images/2018/09/14/IMG_9101.JPG',
      description: 'We use higher grade commercial vehicles to train you. We ensure you a successfull learining cycle with our modern vehicle fleet. Experince that you get here will be a life long experience that will help you to steer your vehicle in any kind of teran. Join with us and experince the quality of our commercial vehicle trainings.'
    },
    {
      title: 'Class room',
      image: 'http://www.howtodrive.lk/images/2018/09/14/Classroom_L.jpg',
      description: 'Our modern class rooms consist of multimedia technologies to give good experience for the students. Class rooms are well designed to provide better experince with hands on trainings and active interactions. Our trained instructors will give you a good learning experince for you.'
    },
  ]

  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-10 uppercase">
          Technological - Simulators
        </h2>
        <hr className='text-primary'/>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {simulators.map((simulator, index) => (
            <Card
              key={index}
              image={simulator.image}
              title={simulator.title}
              description={simulator.description}
              showButton={false}
            />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-10 uppercase">
          Meet Our Instructors
        </h2>
        <hr className='text-primary'/>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <DriverCard
              key={index}
              name={instructor.name}
              role={instructor.role}
              img={instructor.img}
            />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-10 uppercase">
          Vehicles/Teaching locations
        </h2>
        <hr className='text-primary'/>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((data, index) => (
            <Card
              key={index}
              image={data.image}
              title={data.title}
              description={data.description}
              showButton={false}
            />
          ))}
        </div>
      </section>
      
    </div>
  )
}

export default Resources
