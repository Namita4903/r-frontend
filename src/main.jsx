import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
 import Home from "./pages/home";
  import Login from "./pages/login";
  import Register from "./pages/register";
 import Dashboard from "./pages/dashboard";
//  import DoctorDashboard from "./pages/doctorDashboard";
  import Contact from "./pages/contact";
  import Doctor from "./pages/doctor";
  import Report from "./pages/report";
import './index.css';
// import Doctor from "./assets/images/doctor.png";
import History from "./assets/images/history.png";
import Facebook from "./assets/images/facebook.png";
import Instagram from "./assets/images/instagram.png";
import Linkedin from "./assets/images/linkedin.png";
import Logo from "./assets/images/logo.jpg";
 import Twitter from "./assets/images/twitter.png";
 import Image1 from "./assets/images/image1.jpg";
 import Image2 from "./assets/images/image2.jpg";
 import Image3 from "./assets/images/image3.jpg";
 import Image4 from "./assets/images/image4.jpg";
 import Image5 from "./assets/images/image5.jpg";
 import Image6 from "./assets/images/image6.jpg";
 import Image7 from "./assets/images/image7.jpg";
 import Image8 from "./assets/images/image8.jpg";
 import Image9 from "./assets/images/image9.png";
 import Profile from './assets/images/profile.png'
//  import Doctor from "./assets/images/doctor.png";
import {GoogleOAuthProvider} from "@react-oauth/google";
import ConfirmDoctorAccess from "./pages/ConfirmDoctorAccess";

const GoogleWrapper=()=>(
  <GoogleOAuthProvider clientId="841901412797-av03el1c3novg5j0mckvdmmcijhcdb7p.apps.googleusercontent.com">
    <Register/>
  </GoogleOAuthProvider>
)

// Get root element
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctor/confirm-access" element={<ConfirmDoctorAccess />} />
      <Route path="/doctor" element={<Doctor />} />
      <Route path="/facebook" element={<Facebook />} />
      <Route path="/history" element={<History />} />
      <Route path="/linkedin" element={<Linkedin />} />
      <Route path="/instagram" element={<Instagram />} />
      <Route path="/logo" element={<Logo />} />
      <Route path="/twitter" element={<Twitter />} />
    <Route path="/image1" element={<Image1 />} />
     <Route path="/image2" element={<Image2 />} />
     <Route path="/image3" element={<Image3 />} />
    <Route path="/image4" element={<Image4 />} />
    <Route path="/image5" element={<Image5 />} />
    <Route path="/image6" element={<Image6 />} />
    <Route path="/image7" element={<Image7 />} />
    <Route path="/image8" element={<Image8 />} />
    <Route path="/image9" element={<Image9 />} />
   <Route path="/login" element={<Login />} /> 
   <Route path="/register" element={<GoogleWrapper />} /> 
       <Route path="/dashboard" element={<Dashboard />} />  
       {/* <Route path="/doctorDashboard" element={<DoctorDashboard />} />   */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/report" element={<Report />} /> 
      <Route path="/profile" element={<Profile/>}/>

    </Routes>
  </BrowserRouter>
);
