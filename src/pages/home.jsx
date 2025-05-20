// import React from 'react';
// import { NavLink } from 'react-router';
// import "../index.css";


// import Navbar from '../../src/components/navbar';
// import Footer from '../../src/components/footer';

// import Image1 from "../assets/images/image1.jpg";
// import Image2 from "../assets/images/image2.jpg";
// import Image3 from "../assets/images/image3.jpg";
// import Image4 from "../assets/images/image4.jpg";
// import Image5 from "../assets/images/image5.jpg";
// import Image6 from "../assets/images/image6.jpg";
// import Image7 from "../assets/images/image7.jpg";
// import Image8 from "../assets/images/image8.jpg";
// import Image9 from "../assets/images/image9.png";

// const Home = () => {
//   return (
//     <div>
//       <Navbar/>

    
//       <section className="hero-section">
//         <div className="hero-content">
//           <h1>Track Your Medical Journey with Ease</h1>
//           <p>Secure, user-friendly, and accessible. Manage your health records like never before.</p>
//           <NavLink to="/login" className="btn-primary">Get Started</NavLink>
//         </div>
//       </section>

      
//       <section className="services-section">
//         <div className="container">
//           <h1>Services We Offer</h1>
//           <div className="services-grid">
//             <div className="service-card">
//               <img src={Image1} alt="Service 1" />
//               <h3>Personalized Dashboards</h3>
//               <p>Access and manage all your health records in one place.</p>
//             </div>
//             <div className="service-card">
//               <img src={Image8} alt="Service 2" />
//               <h3>Doctor Collaboration</h3>
//               <p>Allow doctors to securely view and update your records.</p>
//             </div>
//             <div className="service-card">
//               <img src={Image2} alt="Service 3" />
//               <h3>Encrypted Reports</h3>
//               <p>Store and retrieve your medical reports with complete privacy.</p>
//             </div>
//             <div className="service-card">
//               <img src={Image3} alt="Service 4" />
//               <h3>Appointment Scheduling</h3>
//               <p>Seamlessly book, track, and manage your medical appointments.</p>
//             </div>
//             <div className="service-card">
//               <img src={Image9} alt="Service 5" />
//               <h3>Medication Reminders</h3>
//               <p>Stay on top of your health with personalized medication reminders.</p>
//             </div>
//             <div className="service-card">
//               <img src={Image4} alt="Service 6" />
//               <h3>Health Analytics</h3>
//               <p>Get insights into your health with detailed analytics and reports.</p>
//             </div>
//           </div>
//         </div>
//       </section>

      
//     <section className="about-section">
//         <div className="container">
//             <h2>About Our Platform</h2>
//             <p>We are dedicated to bridging gaps in healthcare by providing a seamless and secure platform for patients and healthcare providers. Our platform offers centralized access to all your medical records, prescriptions, and reports, ensuring that your sensitive information is protected through advanced encryption. With a user-friendly interface, it empowers patients to take control of their health data while facilitating better collaboration with doctors. Key features include role-based access control, detailed analytics for valuable health insights, convenient appointment scheduling, and personalized medication reminders. Our mission is to streamline medical workflows and enhance the overall healthcare experience for everyone involved.</p>
//         </div>
//     </section>

//     <section className="testimonials-section">
//         <div className="container">
//             <h1>Reviews</h1>
//             <h2>Lovely people talk about us</h2>
//             <div className="testimonials-grid">
//                 <div className="testimonial-card">
//                     <p>"This platform has made managing my health so much easier. I love the dashboard!"</p>
//                     <h3>- Sarah J.</h3>
//                 </div>
//                 <div className="testimonial-card">
//                     <p>"The collaboration feature helped my doctor catch an issue early. Highly recommended!"</p>
//                     <h3>- James R.</h3>
//                 </div>
//                 <div className="testimonial-card">
//                     <p>"I feel so much more in control of my medical history. All Thanks to the website!"</p>
//                     <h3>- Emily T.</h3>
//                 </div>
//             </div>
//         </div>
//     </section>

//       <Footer/>
//     </div>
//   );
// };

// export default Home;






// import React, { useState } from 'react';
// import { useNavigate } from 'react-router';
// import "../index.css";

// import Navbar from '../../src/components/navbar';
// import Footer from '../../src/components/footer';

// import Image1 from "../assets/images/image1.jpg";
// import Image2 from "../assets/images/image2.jpg";
// import Image3 from "../assets/images/image3.jpg";
// import Image4 from "../assets/images/image4.jpg";
// import Image5 from "../assets/images/image5.jpg";
// import Image6 from "../assets/images/image6.jpg";
// import Image7 from "../assets/images/image7.jpg";
// import Image8 from "../assets/images/image8.jpg";
// import Image9 from "../assets/images/image9.png";

// const Home = () => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       navigate('/login');
//     }, 1500); // Simulated loading delay
//   };

//   return (
//     <div>
//       <Navbar/>

//       <section className="hero-section">
//         <div className="hero-content">
//           <h1>Track Your Medical Journey with Ease</h1>
//           <p>Secure, user-friendly, and accessible. Manage your health records like never before.</p>
//           {
//             loading ? (
//               <div className="loader"></div>
//             ) : (
//               <button onClick={handleGetStarted} className="btn-primary">Get Started</button>
//             )
//           }
//         </div>
//       </section>

//       <section className="services-section">
//         <div className="container">
//           <h1>Services We Offer</h1>
//           <div className="services-grid">
//             <div className="service-card">
//               <img src={Image1} alt="Service 1" />
//               <h3>Personalized Dashboards</h3>
//               <p>Access and manage all your health records in one place.</p>
//             </div>
//             <div className="service-card">
//               <img src={Image8} alt="Service 2" />
//               <h3>Doctor Collaboration</h3>
//               <p>Allow doctors to securely view and update your records.</p>
//             </div>
//             <div className="service-card">
//               <img src={Image2} alt="Service 3" />
//               <h3>Encrypted Reports</h3>
//               <p>Store and retrieve your medical reports with complete privacy.</p>
//             </div>
//             <div className="service-card">
//               <img src={Image3} alt="Service 4" />
//               <h3>Appointment Scheduling</h3>
//               <p>Seamlessly book, track, and manage your medical appointments.</p>
//             </div>
//             <div className="service-card">
//               <img src={Image9} alt="Service 5" />
//               <h3>Medication Reminders</h3>
//               <p>Stay on top of your health with personalized medication reminders.</p>
//             </div>
//             <div className="service-card">
//               <img src={Image4} alt="Service 6" />
//               <h3>Health Analytics</h3>
//               <p>Get insights into your health with detailed analytics and reports.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="about-section">
//         <div className="container">
//           <h2>About Our Platform</h2>
//           <p>We are dedicated to bridging gaps in healthcare by providing a seamless and secure platform for patients and healthcare providers. Our platform offers centralized access to all your medical records, prescriptions, and reports, ensuring that your sensitive information is protected through advanced encryption. With a user-friendly interface, it empowers patients to take control of their health data while facilitating better collaboration with doctors. Key features include role-based access control, detailed analytics for valuable health insights, convenient appointment scheduling, and personalized medication reminders. Our mission is to streamline medical workflows and enhance the overall healthcare experience for everyone involved.</p>
//         </div>
//       </section>

//       <section className="testimonials-section">
//         <div className="container">
//           <h1>Reviews</h1>
//           <h2>Lovely people talk about us</h2>
//           <div className="testimonials-grid">
//             <div className="testimonial-card">
//               <p>"This platform has made managing my health so much easier. I love the dashboard!"</p>
//               <h3>- Sarah J.</h3>
//             </div>
//             <div className="testimonial-card">
//               <p>"The collaboration feature helped my doctor catch an issue early. Highly recommended!"</p>
//               <h3>- James R.</h3>
//             </div>
//             <div className="testimonial-card">
//               <p>"I feel so much more in control of my medical history. All Thanks to the website!"</p>
//               <h3>- Emily T.</h3>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer/>
//     </div>
//   );
// };

// export default Home;









import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import "../index.css";

import Navbar from '../../src/components/navbar';
import Footer from '../../src/components/footer';

import Image1 from "../assets/images/image1.jpg";
import Image2 from "../assets/images/image2.jpg";
import Image3 from "../assets/images/image3.jpg";
import Image4 from "../assets/images/image4.jpg";
import Image5 from "../assets/images/image5.jpg";
import Image6 from "../assets/images/image6.jpg";
import Image7 from "../assets/images/image7.jpg";
import Image8 from "../assets/images/image8.jpg";
import Image9 from "../assets/images/image9.png";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      const token = localStorage.getItem("jwtToken");
      const role = localStorage.getItem("userRole");

      if (!token) {
        navigate('/login');
      } else if (role === "patient") {
        navigate('/dashboard');
      } else if (role === "doctor") {
        navigate('/doctor');
      } else {
        // fallback - if role unknown or missing, send to login
        navigate('/login');
      }

    }, 1500); // Simulated loading delay
  };

  return (
    <div>
      <Navbar/>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Track Your Medical Journey with Ease</h1>
          <p>Secure, user-friendly, and accessible. Manage your health records like never before.</p>
          {
            loading ? (
              <div className="loader"></div>
            ) : (
              <button onClick={handleGetStarted} className="btn-primary">Get Started</button>
            )
          }
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h1>Services We Offer</h1>
          <div className="services-grid">
            <div className="service-card">
              <img src={Image1} alt="Service 1" />
              <h3>Personalized Dashboards</h3>
              <p>Access and manage all your health records in one place.</p>
            </div>
            <div className="service-card">
              <img src={Image8} alt="Service 2" />
              <h3>Doctor Collaboration</h3>
              <p>Allow doctors to securely view and update your records.</p>
            </div>
            <div className="service-card">
              <img src={Image2} alt="Service 3" />
              <h3>Encrypted Reports</h3>
              <p>Store and retrieve your medical reports with complete privacy.</p>
            </div>
            <div className="service-card">
              <img src={Image3} alt="Service 4" />
              <h3>Appointment Scheduling</h3>
              <p>Seamlessly book, track, and manage your medical appointments.</p>
            </div>
            <div className="service-card">
              <img src={Image9} alt="Service 5" />
              <h3>Medication Reminders</h3>
              <p>Stay on top of your health with personalized medication reminders.</p>
            </div>
            <div className="service-card">
              <img src={Image4} alt="Service 6" />
              <h3>Health Analytics</h3>
              <p>Get insights into your health with detailed analytics and reports.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2>About Our Platform</h2>
          <p>We are dedicated to bridging gaps in healthcare by providing a seamless and secure platform for patients and healthcare providers. Our platform offers centralized access to all your medical records, prescriptions, and reports, ensuring that your sensitive information is protected through advanced encryption. With a user-friendly interface, it empowers patients to take control of their health data while facilitating better collaboration with doctors. Key features include role-based access control, detailed analytics for valuable health insights, convenient appointment scheduling, and personalized medication reminders. Our mission is to streamline medical workflows and enhance the overall healthcare experience for everyone involved.</p>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h1>Reviews</h1>
          <h2>Lovely people talk about us</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"This platform has made managing my health so much easier. I love the dashboard!"</p>
              <h3>- Sarah J.</h3>
            </div>
            <div className="testimonial-card">
              <p>"The collaboration feature helped my doctor catch an issue early. Highly recommended!"</p>
              <h3>- James R.</h3>
            </div>
            <div className="testimonial-card">
              <p>"I feel so much more in control of my medical history. All Thanks to the website!"</p>
              <h3>- Emily T.</h3>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Home;
