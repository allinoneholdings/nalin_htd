import React from "react";
import { useNavigate } from "react-router";

const Resources = () => {

  const navigate = useNavigate();

  const simulators = [
    {
      title: "Simulator 1 - Driving Simulator",
      image: "http://www.howtodrive.lk/images/2018/06/08/advanced-car-driving-simulator-500x500.jpg",
      description: "These simulators are not just video games. These are result of long term research and experience of worldwide driving institutions. These simulators are specially designed to train students by providing on the road experience for them before starting actual road training. Intelligent program will monitor your driving response and eye movements assessing your entire driving practice programmatically. Simulator training will cover Express Way Driving, Night Driving, Driving with various weather conditions.",
    },
    {
      title: "Simulator 2 - Air Bag Impact Simulator",
      image: "http://www.howtodrive.lk/images/2018/06/08/DSC_0162.JPG",
      description: "Did you ever experience a car impact? But we have facilities to give you a vehicle impact experience and air bag operation experience without getting you into an accident. This training will help you to control yourself in an emergency situation without panicking yourself. Stay in control is the most important thing when an accident happens. If you panic you will not be able to manage the situation.",
    },
    {
      title: "Simulator 3 - Engine Cut Section",
      image: "http://www.howtodrive.lk/images/2018/06/08/DSC_0206.jpg",
      description: "Specially made actual Car cut model for easy understanding of vehicle major components/units working systems. Engine – How the pistons, Valves, Crank and Cam, Timing Chain works. How the Gear Box and Drive Shafts work. Steering system, Fuel Tank, Petrol evaporation collecting system ( Canister ), Suspension, Radiator, AC condenser, Starter motor, alternator, Sensors, Oil Filter cut sections etc",
    },
  ];

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
  ];

  const data = [
    {
      title: "Vehicles",
      image: "http://www.howtodrive.lk/images/IMG_7926_500.jpg",
      description: "We use modern vehicles with high protection features and driver training equipment to train our learner drivers. We ensure your protection while helping you to learn and control vehicle much smoothly while providing higher degree of protection to you. Our vehicle fleet consists of almost new vehicles which are most suitable for trainee drivers with dual pedal controls.",
    },
    {
      title: "Commercial Vehicles",
      image: "http://www.howtodrive.lk/images/2018/09/14/IMG_9101.JPG",
      description: "We use higher grade commercial vehicles to train you. We ensure you a successful learning cycle with our modern vehicle fleet. Experience that you get here will be a life long experience that will help you to steer your vehicle in any kind of terrain. Join with us and experience the quality of our commercial vehicle trainings.",
    },
    {
      title: "Classroom",
      image: "http://www.howtodrive.lk/images/2018/09/14/Classroom_L.jpg",
      description: "Our modern class rooms consist of multimedia technologies to give good experience for the students. Class rooms are well designed to provide better experience with hands on trainings and active interactions. Our trained instructors will give you a good learning experience for you.",
    },
  ];

  return (
    <div className="bg-secondary text-white">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-4xl font-semibold text-primary text-center mb-10 uppercase">
          Technological - Simulators
        </h2>
        <hr className="border-primary w-24 mx-auto mb-10" />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {simulators.map((simulator, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-md p-4 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col h-full"
            >
              <img
                src={simulator.image}
                alt={simulator.title}
                className="h-48 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="font-bold text-lg text-primary mb-2">
                {simulator.title}
              </h3>
              <p className="text-gray-300 text-sm flex-1 text-justify">{simulator.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-900 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-10 uppercase">
          Meet Our Instructors
        </h2>
        <hr className="border-primary w-24 mx-auto mb-10" />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 px-20 gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-black/40 p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105"
            >
              <img
                src={instructor.img}
                alt={instructor.name}
                className="w-28 h-28 rounded-full object-cover border-4 border-primary mb-4"
              />
              <h3 className="text-lg font-bold text-primary">{instructor.name}</h3>
              <p className="text-gray-300">{instructor.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-10 uppercase">
          Vehicles / Teaching Locations
        </h2>
        <hr className="border-primary w-24 mx-auto mb-10" />

        <div className="space-y-12">
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-8`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-lg"
              />
              <div className="md:w-1/2">
                <h3 className="font-bold text-xl text-primary mb-3">{item.title}</h3>
                <p className="text-gray-300 text-justify">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center py-12 bg-blue-950/40">
        <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
          Ready to experience our world-class training?
        </h3>
        <button 
          onClick={() => {navigate('/application'); window.scrollTo(0,0);}}
          className="px-6 py-3 bg-primary hover:bg-primary-dull/80 text-black font-semibold rounded-xl shadow-lg transition duration-300"
        >
          Contact Us Today
        </button>
      </div>
    </div>
  );
};

export default Resources;
