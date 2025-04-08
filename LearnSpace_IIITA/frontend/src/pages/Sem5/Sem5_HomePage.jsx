import React from "react";
import { Link } from "react-router-dom";

const Sem5_HomePage = () => {
  return (
    <div className="fixed inset-0 bg-black text-white overflow-auto">
      {/* Logo at Top-Left */}
      <div className="absolute top-4 left-4 z-[99999] flex items-center space-x-3">
        <img
          src="/vedio_lecture.png" // Path to your logo
          alt="Logo"
          className="w-12 h-12 rounded-full"
        />
        <h2 className="text-3xl font-bold text-gray-300">Video Lecture</h2>
      </div>

      {/* Custom Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-800 via-black to-black p-4 shadow-lg z-[99999]">
        <div className="max-w-screen-xl mx-auto flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-200">
            Choose your Branch
          </h1>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-8 max-w-screen-xl mx-auto px-4 flex justify-center items-center min-h-[calc(100vh-6rem)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1 - IT */}
          <Link
            to="/sem5/it"
            className="cursor-pointer bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white shadow-xl rounded-xl w-60 h-60 md:w-64 md:h-64 flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:from-gray-600 hover:via-gray-700 hover:to-gray-800"
          >
            <img
              src="/IT_logo.png"
              alt="IT"
              className="w-16 h-16 mb-4"
            />
            <h2 className="text-xl md:text-2xl font-bold tracking-wide">
              IT
            </h2>
          </Link>

          {/* Card 2 - IT-BI */}
          <Link
            to="/sem5/itbi"
            className="cursor-pointer bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white shadow-xl rounded-xl w-60 h-60 md:w-64 md:h-64 flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:from-gray-600 hover:via-gray-700 hover:to-gray-800"
          >
            <img
              src="/BI_logo.png"
              alt="IT-BI"
              className="w-16 h-16 mb-4"
            />
            <h2 className="text-xl md:text-2xl font-bold tracking-wide">
              IT-BI
            </h2>
          </Link>

          {/* Card 3 - ECE */}
          <Link
            to="/sem5/ece"
            className="cursor-pointer bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white shadow-xl rounded-xl w-60 h-60 md:w-64 md:h-64 flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:from-gray-600 hover:via-gray-700 hover:to-gray-800"
          >
            <img
              src="/Ece_logo.png"
              alt="ECE"
              className="w-16 h-16 mb-4"
            />
            <h2 className="text-xl md:text-2xl font-bold tracking-wide">
              ECE
            </h2>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Sem5_HomePage;
