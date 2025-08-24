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

function App() {

  return (
    <div className="flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/kids-driving" element={<KidsDriving/>} />
        <Route path="/resoutces" element={<Resources/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/more-details" element={<MoreDetails/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
