import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  DatePicker,
  Select,
  Spin,
  notification,
} from "antd";
import { NavLink, useNavigate } from "react-router";
import axios from "axios";
import Logo from "../assets/images/logo.jpg";
import RegisterIllustration from "../assets/images/register4.png";
import "../register.css";
import "../index.css";
import { useGoogleLogin } from "@react-oauth/google";

import Navbar from "../../src/components/navbar";
import Footer from "../../src/components/footer";

const { Option } = Select;

const Register = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  const [googleRole, setGoogleRole] = useState(null); // state for role selection

  const openNotificationWithIcon = (type, title, description) => {
    api[type]({
      message: title,
      description,
    });
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://r-backend-2.onrender.com/api/auth/register",
        values
      );

      if (response.data.success) {
        openNotificationWithIcon(
          "success",
          "Registration Successful",
          "You have registered successfully! 🎉"
        );
        setTimeout(() => {
          setLoading(false);
          navigate(response.data.redirectTo || "/login");
        }, 1500);
      } else {
        setLoading(false);
        openNotificationWithIcon(
          "error",
          "Registration Failed",
          response.data.message || "Something went wrong."
        );
      }
    } catch (error) {
      setLoading(false);
      openNotificationWithIcon(
        "error",
        "Registration Failed",
        error.response?.data?.message || "Server error, please try again later."
      );
    }
  };

  // actual Google Login logic after auth code is received
  const responseGoogle = async (authResult) => {
    try {
      if (authResult.code) {
        const response = await axios.post(
          `https://r-backend-2.onrender.com/api/auth/google?code=${authResult.code}`,
          { role: googleRole } // send selected role to backend
        );
        console.log(response)
        localStorage.setItem('Username', response.data.userInfo.name);
        localStorage.setItem('userId', response.data.userInfo.id);
        localStorage.setItem('jwtToken', response.data.token);
        localStorage.setItem('userEmail', response.data.userInfo.email);
        localStorage.setItem('userRole', response.data.role);
        // navigate("/dashboard");
        if (response.data.role === 'doctor') {
          navigate('/doctor');
        } else {
          navigate('/dashboard');
        }
      } else {
        throw new Error("Google authentication failed");
      }
    } catch (e) {
      console.log("Error while Google Login...", e);
      openNotificationWithIcon(
        "error",
        "Google Login Failed",
        e.response?.data?.message || "Google login failed. Please try again."
      );
    }
  };

  // wrapper to validate role before triggering Google login
  const handleGoogleLogin = () => {
    if (!googleRole) {
      openNotificationWithIcon(
        "warning",
        "Select Role Required",
        "Please select a role (Doctor or Patient) before continuing with Google login."
      );
      return;
    }
    googleLogin(); // trigger Google auth
  };

  // hook from @react-oauth/google
  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  return (
    <>
      {contextHolder}
      <Navbar />

      <div className="login-page">
        <div className="login-container">
          <div className="login-left">
            <div className="login-header">
              <h2>Create Your Account</h2>
              <p>Sign up to track your medical history easily.</p>
            </div>

            <Spin spinning={loading} tip="Registering...">
              <Form
                form={form}
                name="register"
                onFinish={handleSubmit}
                className="login-form"
              >
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      required: true,
                      message: "Enter a valid email!",
                    },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[{ required: true, message: "Enter your password!" }]}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item
                  name="confirmPassword"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    { required: true, message: "Confirm your password!" },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        return value === getFieldValue("password")
                          ? Promise.resolve()
                          : Promise.reject("Passwords do not match!");
                      },
                    }),
                  ]}
                >
                  <Input.Password placeholder="Confirm Password" />
                </Form.Item>

                <Form.Item
                  name="username"
                  rules={[{ required: true, message: "Enter your name!" }]}
                >
                  <Input placeholder="Full Name" />
                </Form.Item>

                <Form.Item
                  name="phone"
                  rules={[
                    { required: true, message: "Enter your phone number!" },
                  ]}
                >
                  <Input placeholder="Phone Number" />
                </Form.Item>

                <Form.Item
                  name="dob"
                  rules={[
                    { required: true, message: "Enter your date of birth!" },
                  ]}
                >
                  <DatePicker
                    format="YYYY-MM-DD"
                    placeholder="Select Date of Birth"
                  />
                </Form.Item>

                <Form.Item
                  name="gender"
                  rules={[{ required: true, message: "Select your gender!" }]}
                >
                  <Select placeholder="Select your gender">
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="role"
                  label="Register As"
                  initialValue="patient"
                  rules={[{ required: true, message: "Please select a role!" }]}
                >
                  <Select>
                    <Option value="user">User</Option>
                    <Option value="patient">Patient</Option>
                    <Option value="doctor">Doctor</Option>
                    <Option value="admin">Admin</Option>
                  </Select>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    className="button"
                  >
                    Register
                  </Button>
                </Form.Item>

                <p className="register-text">
                  Already have an account?{" "}
                  <NavLink to="/login">Login now!</NavLink>
                </p>
              </Form>

              <div className="flex items-center my-4">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-3 text-gray-700 text-sm">or</span>
                <hr className="flex-grow border-gray-300" />
              </div>

              {/* Role Select for Google Login */}
              <Form.Item label="Continue with Google as" required>
                <Select
                  placeholder="Select Role"
                  onChange={(value) => setGoogleRole(value)}
                  value={googleRole}
                >
                  <Option value="patient">Patient</Option>
                  <Option value="doctor">Doctor</Option>
                </Select>
              </Form.Item>

              {/* Google Login Button */}
              <button
                onClick={handleGoogleLogin}
                className="flex items-center justify-center gap-2 w-full text-[#000] bg-white border border-gray-300 rounded-md py-2 font-medium hover:bg-gray-100 transition mb-4"
              >
                <img
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="G"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>
            </Spin>
          </div>

          <div className="login-right">
            <img
              src={RegisterIllustration}
              alt="Register Illustration"
              className="register-illustration "
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;
