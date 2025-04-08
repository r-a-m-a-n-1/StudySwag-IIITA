import React from "react";
import { Link } from "react-router-dom";

const Sem8_IT_HomePage = () => {
  return (
    <div className="fixed inset-0 bg-black text-white overflow-auto">
      {/* Logo at Top-Left */}
      <div className="absolute top-4 left-4 z-[99999] flex items-center space-x-3">
        <img
          src="/vedio_lecture.png" // Path to your logo
          alt="Logo"
          className="w-12 h-12 rounded-full"
        />
        <h2 className="text-3xl font-bold text-indigo-400">Video Lecture</h2>
      </div>

      {/* Custom Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 p-4 shadow-lg z-[99999]">
        <div className="max-w-screen-xl mx-auto flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white animate-pulse">
            Sem8 IT Study Material
          </h1>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-8 max-w-screen-xl mx-auto px-4 flex justify-center items-center min-h-[calc(100vh-6rem)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1 - Video Lecture */}
          <Link
            to="/sem8/it/vedioplaylist"
            className="cursor-pointer bg-gradient-to-br from-green-400 to-green-500 text-white shadow-xl rounded-xl w-60 h-60 md:w-64 md:h-64 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img
              src="/vedio_lecture.png"
              alt="Video Lecture"
              className="w-16 h-16 mb-4 animate-bounce"
            />
            <h2 className="text-xl md:text-2xl font-bold">Video Lecture</h2>
          </Link>

          {/* Card 2 - Study Material / Lecture Notes */}
          <Link
            to="/sem8/it/lecturenotes"
            className="cursor-pointer bg-gradient-to-br from-red-400 to-red-500 text-white shadow-xl rounded-xl w-60 h-60 md:w-64 md:h-64 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img
              src="/lec_notes.png"
              alt="Study Material"
              className="w-16 h-16 mb-4 animate-bounce"
            />
            <h2 className="text-xl md:text-2xl font-bold">Study Material</h2>
          </Link>

          {/* Card 3 - Previous Year Paper */}
          <Link
            to="/sem8/it/previouspapers"
            className="cursor-pointer bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-xl rounded-xl w-60 h-60 md:w-64 md:h-64 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img
              src="/paper_logo.png"
              alt="Previous Year Paper"
              className="w-16 h-16 mb-4 animate-bounce"
            />
            <h2 className="text-xl md:text-2xl font-bold">Previous Year Paper</h2>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Sem8_IT_HomePage;
