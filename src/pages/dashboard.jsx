import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Navbar from '../../src/components/navbar';
import Footer from '../../src/components/footer';

import "../dashboard.css";
import Profile from "../assets/images/profile.png";

const Dashboard = () => {
  const [enter, setEnter] = useState();
  const [doctorData, setDoctorData] = useState([]);
  const [reportData, setReportData] = useState([]);
  console.log(reportData,"reportData")
  const [showDoctorsTable, setShowDoctorsTable] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem("Username");
    const email = localStorage.getItem("userEmail");

    setEnter(username);

    const fetchAllowedDoctors = async () => {
      try {
        const response = await axios.post("https://r-backend-2.onrender.com/api/auth/getAllowedDoctors", {
          email: email,
        });
        setDoctorData(response.data); // Should be an array of doctor objects
      } catch (error) {
        console.error("Error fetching allowed doctors:", error);
      }
    };

    if (email) {
      fetchAllowedDoctors();
    }
  }, []);

  const cart = [
    {
      id: "premium-plan",
      name: "Premium Subscription",
      price: 5,
      quantity: 1,
    }
  ];

  const handleCheckout = async () => {
    try {
      const response = await axios.post("https://r-backend-2.onrender.com/api/auth/getPayment", {
        amount: 100,
      });

      console.log("Checkout session response:", response);
      window.location.href = response.data.url;
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  const handleMedicalRecordsClick = () => {
    navigate("/report");
  };

  const handleDoctorsClick = () => {
    setShowDoctorsTable((prev) => !prev);
  };



  // New: Opens WhatsApp chat with doctor phone number
const handleBookAppointment = async (doc) => {
console.log(doc)
setReportData(doc)

  let formattedPhone = String(doc?.phone).replace(/\D/g, '');

  if (!formattedPhone.startsWith("91") && formattedPhone.length === 10) {
    formattedPhone = "91" + formattedPhone;
  }

  // Get user details from localStorage
  const username = localStorage.getItem("Username");
  const email = localStorage.getItem("userEmail");
  const userId = localStorage.getItem("userId"); // Make sure this is set in localStorage after login/signup

  try {
    // API call to log or send appointment data
    const response = await axios.post("https://r-backend-2.onrender.com/api/auth/bookAppointment", {
      username,
      email,
      userId,
      doctorPhone: formattedPhone,
      doctorEmail: reportData.email,
    });

    console.log("Appointment API response:", response.data);

    const whatsappUrl = `https://wa.me/${formattedPhone}`;

    const userConfirmed = window.confirm(
      "You will now be redirected to WhatsApp to book your appointment. Make sure WhatsApp is installed or accessible on your device. Proceed?"
    );

    if (userConfirmed) {
      window.open(whatsappUrl, "_blank");
    }
  } catch (error) {
    console.error("Error booking appointment:", error);
    alert("Failed to book appointment. Please try again.");
  }
};


  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <aside className="sidebar">
          <h2>User Dashboard</h2>
          <ul>
          
          </ul>

          <div className="subscription-box">
            <h2>Subscription Plans</h2>
            <div className="subscription-plan">
              <h3>Basic</h3>
              <p>Free | Limited Access</p>
              <button>Select</button>
            </div>
            <div className="subscription-plan">
              <h3>Premium</h3>
              <p>$5/month | Advanced Features</p>
              <button onClick={handleCheckout}>Select</button>
            </div>
          </div>
        </aside>

        <main className="dashboard-content">
          <div className="welcome-section">
            <img src={Profile} alt="User Icon" className="user-icon" />
            <h1>Welcome, {enter}!</h1>
          </div>
          <p>
            Track your medical history, appointments, and prescriptions with ease.
          </p>

          <div className="dashboard-cards">
            <div
              className="card"
              onClick={handleMedicalRecordsClick}
              style={{ cursor: "pointer" }}
            >
              <h3>📂 Medical Records</h3>
              <p>View and manage all your medical documents.</p>
            </div>

            <div
              className="card"
              onClick={handleDoctorsClick}
              style={{ cursor: "pointer" }}
            >
              <h3>🩺 Doctors</h3>
              <p>Connect with healthcare professionals.</p>

              {showDoctorsTable && (
                <div className="doctor-table-wrapper open">
                  <table className="doctor-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {doctorData.length > 0 ? (
                        doctorData.map((doc, index) => (
                          <tr key={index}>
                            <td>{doc.email}</td>
                            <td>{doc.phone}</td>
                            <td>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleBookAppointment(doc);
                                }}
                              >
                                Book Appointment
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="3">No allowed doctors found.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
