import React from "react";
import { Link } from "react-router-dom";
import ProfilePic from  "../../public/image/profile.jpg";

function Profile() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
    <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-xl">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-semibold text-gray-800">Profile</h2>
        <Link
          to="/auth/login"
          className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
        >
          Logout
        </Link>
      </div>
      
      {/* Profile Info */}
      <div className="flex items-center space-x-8 mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300">
          <img
            src={ProfilePic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <h3 className="text-2xl font-semibold text-gray-800">Jane Doe</h3>
          <p className="text-gray-600 text-lg">Investigative Journalist</p>
          <p className="text-gray-500">Email: jane.doe@news.com</p>
        </div>
      </div>

      {/* Edit Profile Button */}
      <div className="mt-8 mb-8">
        <Link
          to="/profile/edit"
          className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Edit Profile
        </Link>
      </div>

      {/* Post News Section */}
      <div>
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Post News</h4>
        <Link
          to="/post-news"
          className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Post New Article
        </Link>
      </div>

      {/* Recent News Section */}
      <div className="mt-10 space-y-4">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Recent News</h4>
        <ul className="space-y-2 text-gray-600">
          <li>
            <Link to="/article/1" className="text-blue-600 hover:text-blue-800">
              "Breaking News: Political Changes in Nepal"
            </Link>
          </li>
          <li>
            <Link to="/article/2" className="text-blue-600 hover:text-blue-800">
              "Economic Forecast for 2024"
            </Link>
          </li>
          <li>
            <Link to="/article/3" className="text-blue-600 hover:text-blue-800">
              "Social Media's Role in Modern Journalism"
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
}

export default Profile;
