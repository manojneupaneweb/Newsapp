import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "/image/logo JPEG.jpg";
import NepaliDate from 'nepali-date-converter';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Assuming you have a NepaliDate library installed
  const dateBS = new NepaliDate(today); // Pass the Date object

  return (
    <>
      <header>
        {/* Top Bar */}
        <div className="flex flex-wrap bg-red-600 px-4 sm:px-10 justify-between items-center h-7 text-white text-sm">
          <div className="left flex items-center gap-4">
            <span>
              <i className="fa-solid fa-phone"></i> 9805748392839
            </span>
            <span>
              <i className="fa-solid fa-envelope"></i> newsapp@gmail.com
            </span>
          </div>
          <div className="right flex gap-3">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-facebook-messenger"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-tiktok"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>

        {/* Logo and Time Section */}
        <div className="flex flex-wrap justify-between items-center px-4 sm:px-10 py-3">
          <div className="logo">
            <img src={logo} alt="News Logo" className="h-16" />
          </div>
          <div className="add hidden sm:block">
            <p>Advertisement</p>
          </div>
          <div className="time text-sm font-Kantipur">
            <span className="font-bold">{time}</span> <br />
            <span>{dateBS.format("YYYY-MM-DD")}</span>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="h-10 bg-blue-500 px-4 sm:px-10 flex items-center justify-between flex-wrap">
        {/* Navigation Links */}
        <ul className="flex flex-wrap items-center gap-4 text-white font-bold text-sm sm:text-base">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/world">World</Link></li>
          <li><Link to="/sports">Sports</Link></li>
          <li><Link to="/technology">Technology</Link></li>
          <li><Link to="/business">Business</Link></li>
          <li><Link to="/entertainment">Entertainment</Link></li>
          <li><Link to="/health">Health</Link></li>
          <li><Link to="/science">Science</Link></li>
          <li><Link to="/travel">Travel</Link></li>
          <li><Link to="/opinion">Opinion</Link></li>
        </ul>

        {/* Search and Account Dropdown */}
        <div className="flex items-center gap-4">
          <input
            className="mx-2 px-2 py-1 bg-slate-100 rounded-lg select-none focus:outline-none w-32 sm:w-48"
            type="text"
            placeholder="Search news..."
          />
          <div className="relative">
            {/* Account Dropdown Button */}
            <button
              onClick={toggleDropdown}
              className="bg-white rounded-full px-2 py-1 shadow-md hover:shadow-lg focus:outline-none"
            >
              <i className="fa-regular fa-user text-lg"></i>
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-sm text-gray-700 font-bold hover:bg-gray-100"
                >
                  Signup
                </Link>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-sm text-gray-700 font-bold hover:bg-gray-100"
                >
                  Login
                </Link>
                <Link
                  to="/admin/dashboard"
                  className="block px-4 py-2 text-sm text-gray-700 font-bold hover:bg-gray-100"
                >
                  Dashboard
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
