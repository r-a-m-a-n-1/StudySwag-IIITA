import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./logo_learn.png";
import axios from "axios";

const AdminNavbar = () => {
  const navigate = useNavigate();
  // For demonstration, check for a token in localStorage or any auth flag.
  // Replace this with your auth store or context.
  const isAuthenticated = localStorage.getItem("isAdmin") === "true";

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/admin/logout", {}, { withCredentials: true });
      localStorage.removeItem("isAdmin");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 px-6 py-2 flex justify-between items-center shadow-md z-50">
      <div className="flex items-center">
        <img src={logo} alt="Admin Logo" className="h-10 w-10 object-cover mr-3" />
        <span className="text-white text-lg font-bold">Admin Dashboard</span>
      </div>
      <ul className="flex space-x-6 text-lg font-medium">
        <li>
          <Link
            to="/admin/upload"
            className="text-gray-200 hover:text-blue-500 transition-colors duration-300"
          >
            Upload Papers
          </Link>
        </li>
        <li>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="text-gray-200 hover:text-blue-500 transition-colors duration-300"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="text-gray-200 hover:text-blue-500 transition-colors duration-300"
            >
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
