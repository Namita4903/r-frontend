// import React, { useEffect, useState } from 'react';
// import { LockOutlined, UserOutlined } from '@ant-design/icons';
// import { Button, Checkbox, Form, Input, Spin, notification } from 'antd';
// import {useNavigate } from 'react-router';
// import Illustration from '../assets/images/login6.jpg';
// import axiosInstance from "../../src/axiosinstance";
// import "../register.css";
// import { apiUrl } from "../../config";
// import "../index.css";

// import Navbar from "../../src/components/navbar";
// import Footer from "../../src/components/footer";


// const Login = () => {
//   const [api, contextHolder] = notification.useNotification();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [isNavigating, setIsNavigating] = useState(false);

//   const openNotificationWithIcon = (type, title, description) => {
//     api[type]({
//       message: title,
//       description: description,
//     });
//   };

//   useEffect(() => {
//     console.log("Login component mounted.");
//   }, []);

//   const onFinish = async (values) => {
//     setLoading(true);
//     try {
//       const response = await axiosInstance.post(`${apiUrl}/api/auth/login`, values);
//       console.log("API Resdsdsdsddsponse:", response.data);

//       if (response) {
//       console.log("API Resdsdsdsddsponse:", response.data);

//         openNotificationWithIcon('success', 'Login Successful', 'Welcome back! 🎉');
//         localStorage.setItem('Username', response.data.userName);
//         localStorage.setItem('userId', response.data.userId);
//         localStorage.setItem('jwtToken',response.data.jwtToken)
//         localStorage.setItem('userEmail',response.data.email)
//         localStorage.setItem('userRole',response.data.role)
//         window.dispatchEvent(new Event("authChange"));
//         sessionStorage.setItem('email', response.data.email);

//         setTimeout(() => {
//           setLoading(false);
//           navigate(response.data.redirectTo || '/dashboard');
//         }, 1500);
//       } else {
//         setLoading(false);
//         openNotificationWithIcon('error', 'Login Failed', response.data.message || 'Invalid credentials.');
//       }
//     } catch (error) {
//       setLoading(false);
//       console.error('Login error:', error);

//       if (error.response && error.response.data) {
//         openNotificationWithIcon('error', 'Login Failed', error.response.data.message || 'User not registered.');
//       } else if (error.code === 'ECONNABORTED') {
//         openNotificationWithIcon('error', 'Request Timeout', 'The request took too long — please try again.');
//       } else {
//         openNotificationWithIcon('error', 'Network Error', 'Check your internet connection or server.');
//       }
//     }
//   };

//   const handleNavigateToRegister = () => {
//     setIsNavigating(true);
//     setTimeout(() => {
//       navigate("/register");
//     }, 1500);
//   };

//   return (
//     <>
//       {contextHolder}

//       {isNavigating && (
//         <div className="full-page-loader">
//           <Spin size="large" tip="Redirecting to Register..." />
//         </div>
//       )}

//       {!isNavigating && (
//         <>
//         <Navbar/>

//           <div className="login-page">
//             <div className="login-container">
//               <div className="login-left">
//                 <div className="login-header">
//                   <h2>Holla, Welcome Back</h2>
//                   <p>Hey, welcome back to your special place</p>
//                 </div>

//                 <Spin spinning={loading} tip="Logging in...">
//                   <Form
//                     name="login"
//                     initialValues={{ remember: true }}
//                     className="login-form"
//                     onFinish={onFinish}
//                   >
//                     <Form.Item
//                       name="email"
//                       rules={[{ required: true, message: 'Please input your email!' }]}
//                     >
//                       <Input prefix={<UserOutlined />} placeholder="Email" />
//                     </Form.Item>

//                     <Form.Item
//                       name="password"
//                       rules={[{ required: true, message: 'Please input your Password!' }]}
//                     >
//                       <Input.Password prefix={<LockOutlined />} placeholder="Password" />
//                     </Form.Item>

//                     <Form.Item className="login-options">
//                       <Checkbox>Remember me</Checkbox>
//                       <a href="#" className="forgot-password">Forgot Password?</a>
//                     </Form.Item>

//                     <Form.Item>
//                       <Button className='button' block type="primary" htmlType="submit">Sign In</Button>
//                     </Form.Item>

//                     <p className="register-text">
//                       Don't have an account? <Button type="link" onClick={handleNavigateToRegister}>Sign Up</Button>
//                     </p>
//                   </Form>
//                 </Spin>
//               </div>

//               <div className="login-right">
//                 <img src={Illustration} alt="Login Illustration" className="login-illustration" />
//               </div>
//             </div>
//           </div>
//           <Footer/>
//         </>
//       )}
//     </>
//   );
// };

// export default Login;




import React, { useEffect, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Spin, notification,Modal } from 'antd';
import { useNavigate } from 'react-router';
import Illustration from '../assets/images/login6.jpg';
import axiosInstance from "../../src/axiosinstance";
import "../register.css";
import { apiUrl } from "../../config";
import "../index.css";

import Navbar from "../../src/components/navbar";
import Footer from "../../src/components/footer";

const Login = () => {
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');

  
  const [isOTPModalVisible, setIsOTPModalVisible] = useState(false);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const openNotificationWithIcon = (type, title, description) => {
    api[type]({
      message: title,
      description: description,
    });
  };

  useEffect(() => {
    console.log("Login component mounted.");
  }, []);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post(`${apiUrl}/api/auth/login`, values);
      console.log("API Response:", response.data);

      if (response) {
        openNotificationWithIcon('success', 'Login Successful', 'Welcome back! 🎉');
        localStorage.setItem('Username', response.data.userName);
        localStorage.setItem('userId', response.data.userId);
        localStorage.setItem('jwtToken', response.data.jwtToken);
        localStorage.setItem('userEmail', response.data.userEmail);
        localStorage.setItem('userPhone', response.data.userPhone);
        localStorage.setItem('userRole', response.data.role);
        window.dispatchEvent(new Event("authChange"));
        // sessionStorage.setItem('email', response.data.userEmail);

        setTimeout(() => {
          setLoading(false);
          // Redirect based on role
          if (response.data.role === 'doctor') {
            navigate('/doctor');
          } else {
            navigate('/dashboard');
          }
        }, 1500);
      } else {
        setLoading(false);
        openNotificationWithIcon('error', 'Login Failed', response.data.message || 'Invalid credentials.');
      }
    } catch (error) {
      setLoading(false);
      console.error('Login error:', error);

      if (error.response && error.response.data) {
        openNotificationWithIcon('error', 'Login Failed', error.response.data.message || 'User not registered.');
      } else if (error.code === 'ECONNABORTED') {
        openNotificationWithIcon('error', 'Request Timeout', 'The request took too long — please try again.');
      } else {
        openNotificationWithIcon('error', 'Network Error', 'Check your internet connection or server.');
      }
    }
  };

  const handleNavigateToRegister = () => {
    setIsNavigating(true);
    setTimeout(() => {
      navigate("/register");
    }, 1500);
  };


  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => {
    setIsModalVisible(false);
    
  };

  const handleSendResetLink = async () => {
    if (!forgotEmail) {
      return openNotificationWithIcon("warning", "Missing Email", "Please enter your email.");
    }

    try {
      await axiosInstance.post(`${apiUrl}/api/auth/forgotPassword`, { email: forgotEmail });
      setIsModalVisible(false);
      setIsOTPModalVisible(true); 
    } catch (error) {
      openNotificationWithIcon("error", "Error", "Failed to send OTP. Try again.");
    }
  };

  
  const handleOTPSubmit = async () => {
    if (!otp || !newPassword || !confirmPassword) {
      return openNotificationWithIcon("warning", "Missing Fields", "Please fill all fields.");
    }

    if (newPassword !== confirmPassword) {
      return openNotificationWithIcon("error", "Password Mismatch", "New and confirm passwords must match.");
    }

    try {
      await axiosInstance.post(`${apiUrl}/api/auth/verifyPassword`, {
        email: forgotEmail,
        otp,
        newPassword,
        confirmPassword
      });
      openNotificationWithIcon("success", "Password Reset", "Password changed successfully.");
      setIsOTPModalVisible(false);
      
    } catch (error) {
      openNotificationWithIcon("error", "Reset Failed", error.response?.data?.message || "Invalid OTP or expired.");
    }
  };

  return (
    <>
      {contextHolder}

      {isNavigating && (
        <div className="full-page-loader">
          <Spin size="large" tip="Redirecting to Register..." />
        </div>
      )}

      {!isNavigating && (
        <>
          <Navbar />

          <div className="login-page">
            <div className="login-container">
              <div className="login-left">
                <div className="login-header">
                  <h2>Holla, Welcome Back</h2>
                  <p>Hey, welcome back to your special place</p>
                </div>

                <Spin spinning={loading} tip="Logging in...">
                  <Form
                    name="login"
                    initialValues={{ remember: true }}
                    className="login-form"
                    onFinish={onFinish}
                  >
                    <Form.Item
                      name="email"
                      rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                      <Input prefix={<UserOutlined />} placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                      name="password"
                      rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                      <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                    </Form.Item>

                    <Form.Item className="login-options">
                      <Checkbox>Remember me</Checkbox>
                      <Button type="link" onClick={showModal}>Forgot password?</Button>
                      {/* <a href="#" className="forgot-password">Forgot Password?</a> */}
                    </Form.Item>

                    <Form.Item>
                      <Button className='button' block type="primary" htmlType="submit">Sign In</Button>
                    </Form.Item>

                    <p className="register-text">
                      Don't have an account? <Button type="link" onClick={handleNavigateToRegister}>Sign Up</Button>
                    </p>
                  </Form>
                </Spin>
              </div>

              <div className="login-right">
                <img src={Illustration} alt="Login Illustration" className="login-illustration" />
              </div>
            </div>
          </div>
          <Footer />

          <Modal
        title="Reset Your Password"
        visible={isModalVisible}
        onOk={handleSendResetLink}
        onCancel={handleCancel}
        okText="Send OTP"
      >
        <Input
          placeholder="Enter your email"
          value={forgotEmail}
          onChange={(e) => setForgotEmail(e.target.value)}
        />
      </Modal>

      
      <Modal
        title="Verify OTP & Reset Password"
        visible={isOTPModalVisible}
        onOk={handleOTPSubmit}
        onCancel={() => setIsOTPModalVisible(false)}
        okText="Reset Password"
      >
        <Input
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <Input.Password
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <Input.Password
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Modal>
        </>
      )}
    </>
  );
};

export default Login;
