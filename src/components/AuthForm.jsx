// src/components/AuthForm.jsx
import React, { useState } from 'react';
import api from '../api';

const AuthForm = ({ isLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    otp: '',
    qualification: '',
    role: 'student', // or employer
    company: ''
  });

  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendOtp = async () => {
    try {
      await api.post('/send-otp', { email: formData.email });
      setOtpSent(true);
      setMessage("OTP sent to your email.");
    } catch (err) {
      console.error(err);
      setMessage("Failed to send OTP.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        // LOGIN
        const res = await api.post('/login', {
          email: formData.email,
          otp: formData.otp
        });
        setMessage(res.data.message || "Login successful");
      } else {
        // SIGNUP
        const res = await api.post('/signup', {
          name: formData.name,
          email: formData.email,
          otp: formData.otp,
          qualification: formData.qualification,
          role: formData.role,
          company: formData.company
        });
        setMessage(res.data.message || "Signup successful");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error: " + err?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4 w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold">{isLogin ? "Login" : "Signup"} Form</h2>

      {!isLogin && (
        <>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full border p-2"
          />
          <input
            type="text"
            name="qualification"
            placeholder="Qualification"
            onChange={handleChange}
            className="w-full border p-2"
          />
          <select
            name="role"
            onChange={handleChange}
            className="w-full border p-2"
          >
            <option value="student">Student</option>
            <option value="employer">Employer</option>
          </select>

          {formData.role === "employer" && (
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              onChange={handleChange}
              className="w-full border p-2"
            />
          )}
        </>
      )}

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
        className="w-full border p-2"
      />

      {!otpSent ? (
        <button
          type="button"
          onClick={sendOtp}
          className="bg-blue-500 text-white py-2 px-4 rounded w-full"
        >
          Send OTP
        </button>
      ) : (
        <>
          <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            onChange={handleChange}
            required
            className="w-full border p-2"
          />
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded w-full"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </>
      )}

      {message && <p className="text-sm text-center text-gray-700 mt-2">{message}</p>}
    </form>
  );
};

export default AuthForm;
