import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from './Signup';
import Login from './Login'
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Team from "./Team";
import OtherServices from "./OtherServices";
import BusStand from "./BusStand";
import Horray from "./Horray";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/login" element={<Login/>} />
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<Team />} />
      <Route path="/BusStand" element={<BusStand/>} />
      <Route path="/Horray" element={<Horray/>} />
      <Route path="/other-services" element={<OtherServices />} />
      
    </Routes>
  );
}

export default App;
