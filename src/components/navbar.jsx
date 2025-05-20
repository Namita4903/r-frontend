// import React, { useState, useEffect } from 'react';
// import { useNavigate, NavLink } from 'react-router'; 
// import { Popconfirm, message } from 'antd';
// import Logo from "../assets/images/logo.jpg";
// import "../index.css";

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("jwtToken"));
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleAuthChange = () => {
//       setIsLoggedIn(!!localStorage.getItem("jwtToken"));
//     };

//     window.addEventListener("authChange", handleAuthChange);
//     return () => {
//       window.removeEventListener("authChange", handleAuthChange);
//     };
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("jwtToken");
//     localStorage.removeItem("Username");
//     localStorage.removeItem("userId");
//     localStorage.removeItem("clientSecret");
//     localStorage.removeItem("userEmail");
//     localStorage.removeItem("userRole");

//     setIsLoggedIn(false);
//     window.dispatchEvent(new Event("authChange")); 

//     message.success("You have been logged out.");
//     navigate("/login");
//   };

//   return (
//     <header className="main-header">
//       <div className="container">
//         <div className="logo-container">
//           <img src={Logo} alt="Medical Tracker Logo" className="logo" />
//           <h1 className="site-name">Medical History Tracker</h1>
//         </div>
//         <nav className="navbar">
//           <ul>
//             <li><NavLink to="/" exact="true" activeclassname="active">Home</NavLink></li>
//             <li><NavLink to="/dashboard" activeclassname="active">Dashboard</NavLink></li>
//             <li><NavLink to="/doctor" activeclassname="active">Doctors</NavLink></li>
//             <li><NavLink to="/report" activeclassname="active">Report</NavLink></li>
//             <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>

//             {isLoggedIn ? (
//               <li>
//                 <Popconfirm
//                   title="Are you sure you want to logout?"
//                   onConfirm={handleLogout}
//                   okText="Yes"
//                   cancelText="No"
//                 >
//                   <button className="logout-button">Logout</button>
//                 </Popconfirm>
//               </li>
//             ) : (
//               <li><NavLink to="/login" activeclassname="active">Login</NavLink></li>
//             )}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;









import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router';
import { Popconfirm, message } from 'antd';
import Logo from "../assets/images/logo.jpg";
import "../index.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("jwtToken"));
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole") || null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthChange = () => {
      setIsLoggedIn(!!localStorage.getItem("jwtToken"));
      setUserRole(localStorage.getItem("userRole"));
    };

    window.addEventListener("authChange", handleAuthChange);
    return () => {
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("Username");
    localStorage.removeItem("userId");
    localStorage.removeItem("clientSecret");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userRole");

    setIsLoggedIn(false);
    setUserRole(null);
    window.dispatchEvent(new Event("authChange"));

    message.success("You have been logged out.");
    navigate("/login");
  };

  return (
    <header className="main-header">
      <div className="container">
        <div className="logo-container">
          <img src={Logo} alt="Medical Tracker Logo" className="logo" />
          <h1 className="site-name">Medical History Tracker</h1>
        </div>
        <nav className="navbar">
          <ul>
            <li><NavLink to="/" exact="true" activeclassname="active">Home</NavLink></li>

            {/* Show Dashboard only to patient */}
            {isLoggedIn && userRole === "patient" && (
              <li><NavLink to="/dashboard" activeclassname="active">Dashboard</NavLink></li>
            )}

            {/* Show Doctor page only to doctor */}
            {isLoggedIn && userRole === "doctor" && (
              <li><NavLink to="/doctor" activeclassname="active">Doctor</NavLink></li>
            )}

            {/* Common links */}
            {/* <li><NavLink to="/report" activeclassname="active">Report</NavLink></li> */}
            <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>

            {isLoggedIn ? (
              <li>
                <Popconfirm
                  title="Are you sure you want to logout?"
                  onConfirm={handleLogout}
                  okText="Yes"
                  cancelText="No"
                >
                  <button className="logout-button">Logout</button>
                </Popconfirm>
              </li>
            ) : (
              <li><NavLink to="/login" activeclassname="active">Login</NavLink></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
