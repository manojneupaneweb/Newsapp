import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold text-center mb-6"><Link to="/">Admin Panel</Link> </h1>
        <ul className="space-y-4">
          <li>
            <Link to="/admin/dashboard" className="text-white hover:bg-gray-600 p-2 block rounded-md">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/adminlist" className="text-white hover:bg-gray-600 p-2 block rounded-md">Admin List</Link>
          </li>
          <li>
            <Link to="/admin/postnews" className="text-white hover:bg-gray-600 p-2 block rounded-md">Post News</Link>
          </li>
          <li>
            <Link to="/admin/addmanagement" className="text-white hover:bg-gray-600 p-2 block rounded-md">Add Management</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        {/* Top Navigation Bar */}
        <div className="bg-gray-800 text-white p-4 mb-6 flex justify-between items-center">
          <div className="font-bold text-lg">Admin Dashboard</div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Logout</button>
        </div>

        {/* Page Content */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
