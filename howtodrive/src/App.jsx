import React from "react"
import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Services from "./pages/Services"
import KidsDriving from "./pages/KidsDriving"
import Resources from "./pages/Resources"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import MoreDetails from "./pages/MoreDetails"
import Group1 from "./pages/kidsPages/Group1"
import Group2 from "./pages/kidsPages/Group2"
import Group3 from "./pages/kidsPages/Group3"
import ApplicationForm from "./pages/ApplicationForm"
import BasicCourse from "./pages/BasicCourse"
import ManualAuto from "./pages/Services/ManualAuto"
import DualPurpose from "./pages/Services/DualPurpose"
import MotorCycle from "./pages/Services/MotorCycle"
import AllInOne from "./pages/Services/AllInOne"
import MotorCoach from "./pages/Services/MotorCoach"
import SpecialCourse from "./pages/Services/SpecialCourse"

function App() {

  return (
    <div className="flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/kids-driving" element={<KidsDriving/>} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/more-details" element={<MoreDetails/>} />
        <Route path="/group1" element={<Group1/>} />
        <Route path="/group2" element={<Group2/>} />
        <Route path="/group3" element={<Group3/>} />
        <Route path="/application" element={<ApplicationForm/>} />
        <Route path="/basic-course" element={<BasicCourse/>} />
        <Route path="/manual-auto" element={<ManualAuto/>} />
        <Route path="/dual-purpose" element={<DualPurpose/>} />
        <Route path="/motor-cycle" element={<MotorCycle/>} />
        <Route path="/allinone" element={<AllInOne/>} />
        <Route path="/motor-coach" element={<MotorCoach/>} />
        <Route path="/special-course" element={<SpecialCourse/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
