import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../../public/image/logo JPEG.jpg";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Submit form data to backend for login
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/v1/users/login", formData);
      console.log("Response:", response.data);
      // Handle successful login (e.g., redirect or store JWT)
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Login to NewsApp</h2>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md mt-1"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md mt-1"
              required
            />
          </div>

          {/* Social Media Buttons */}
          <div className="mb-4">
            <p>Or login with:</p>
            <div className="w-full h-10 bg-blue-600 flex items-center justify-center rounded-lg mb-2 cursor-pointer">
              <p className="text-white">Facebook</p>
            </div>
            <div className="w-full h-10 bg-red-600 flex items-center justify-center rounded-lg mb-4 cursor-pointer">
              <p className="text-white">Google</p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Login
            </button>
          </div>

          {/* Signup Link */}
          <p className="text-center">
            Don't have an account? <Link to="/signup" className="text-blue-600">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
