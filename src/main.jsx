import * as React from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home.jsx";
import Signup from "./pages/auth/signup.jsx";
import Login from "./pages/auth/Login.jsx";
import Profile from "./pages/profile.jsx";
import Dashboard from "./pages/Admin/Dashboard.jsx";
import PostNews from "./pages/Admin/PostNews.jsx";
import AdminLayout from "./pages/Admin/AdminLayout.jsx";
import AdminList from "./pages/Admin/AdminList.jsx"
import AddManagement from "./pages/Admin/AddManagement.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "/profile", element: <Profile /> },
    ],

  }, {
    // for authorization page 
    path: "/",
    // element: <App />,
    children: [

      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
    ]
  }, {
    // for admin  page 
        path: "/admin", 
        element: <AdminLayout />, 
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "adminlist", element: <AdminList /> },
          { path: "postnews", element: <PostNews /> },
          { path: "addmanagement", element: <AddManagement /> },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
