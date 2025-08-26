import React from "react";
import { Users, Car, ShieldCheck, Award, Clock, MapPin } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Car className="w-12 h-12 text-primary mb-3" />,
      title: "Modern Vehicles",
      description:
        "Learn on well-maintained, dual-controlled cars for a safe experience.",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-primary mb-3" />,
      title: "Safety First",
      description:
        "Defensive driving techniques to make you a low-risk, confident driver.",
    },
    {
      icon: <Users className="w-12 h-12 text-primary mb-3" />,
      title: "Expert Instructors",
      description:
        "Friendly, certified professionals who guide you every step of the way.",
    },
    {
      icon: <Award className="w-12 h-12 text-primary mb-3" />,
      title: "Proven Success",
      description:
        "Hundreds of successful students have earned their license with us.",
    },
    {
      icon: <Clock className="w-12 h-12 text-primary mb-3" />,
      title: "Flexible Schedules",
      description:
        "Choose lessons that fit your availability, including weekends.",
    },
    {
      icon: <MapPin className="w-12 h-12 text-primary mb-3" />,
      title: "Multiple Locations",
      description:
        "Access training centers across the city with fully-equipped facilities.",
    },
  ];

  const values = [
    {
      title: "To promote a safe and courteous driving environment in our community.",
      image: "http://www.howtodrive.lk/images/2018/09/14/IMG_9114.JPG"
    },
    {
      title: "To observe unsafe driving practices and correct them.",
      image: "http://www.howtodrive.lk/images/2018/09/14/AC0I9928.JPG"
    },
    {
      title: "To develop effective learning processes for every task we undertake.",
      image: "http://www.howtodrive.lk/images/2018/09/14/AC0I9763.JPG"
    },
    {
      title: "To accomplish Quality Driver Tutoring through up to date audio and visual techniques.",
      image: "http://www.howtodrive.lk/images/2018/09/14/AC0I9686.JPG"
    },
    {
      title: "To respect the dignity and protect the integrity of every student.",
      image: "http://www.howtodrive.lk/images/2018/09/14/IMG_9122.JPG"
    },  
  ];

  return (
    <div className="w-full text-white bg-secondary">
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
            Helping learners become confident, safe, and responsible drivers
            since our beginning.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4 uppercase">
            Our Mission
          </h2>
          <p className="text-gray-300">
            At <span className="font-semibold uppercase">HowToDrive</span>, our
            mission is to provide comprehensive and safe driving lessons that
            empower every student with the skills, confidence, and discipline
            to become responsible drivers. We emphasize safety, road awareness,
            and defensive driving techniques.
          </p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4 uppercase">
            Our Vision
          </h2>
          <p className="text-gray-300">
            We envision a community where every driver on the road prioritizes
            safety, respect, and responsibility. By providing quality training
            and instilling lifelong safe driving habits, we aim to make our
            roads safer for everyone.
          </p>
        </div>
      </div>

      <div className="bg-black/50 backdrop-blur py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-10 uppercase">
            Why Choose Us
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-secondary p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105"
              >
                {feature.icon}
                <h3 className="font-semibold text-lg text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-10 max-w-6xl mx-auto px-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-6 uppercase">
          Our Values
        </h1>
        <hr className="border-primary mb-10 w-24 mx-auto" />

        {values.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 mb-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={item.image}
              alt="image"
              className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-lg"
            />
            <p className="text-gray-300 md:w-1/2 text-lg">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
