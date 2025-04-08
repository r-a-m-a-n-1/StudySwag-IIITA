import React from "react";
import { Link } from "react-router-dom";

const Sem5_ece_VedioPlaylist = () => {
  return (
    <div className="fixed inset-0 bg-black text-white overflow-auto">
      {/* Custom Header */}
      <div className="pt-24 pb-8 max-w-screen-xl mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">Semester 5 ECE - Subject Playlists</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 - Engineering Physics */}
          <Link
            to="/sem2/engineering-physics"
            className="cursor-pointer bg-gradient-to-br from-green-400 to-green-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img
              src="/en_py.png"
              alt="Engineering Physics"
              className="w-16 h-16 mb-4 animate-bounce"
            />
            <h2 className="text-xl font-bold text-center px-2">Engineering Physics</h2>
          </Link>

          {/* Card 2 - Fundamental Electrical & Electronics Engineering */}
          <Link
            to="/sem2/fundamental-electrical"
            className="cursor-pointer bg-gradient-to-br from-red-400 to-red-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img
              src="/fee.png"
              alt="Fundamental Electrical & Electronics"
              className="w-16 h-16 mb-4 animate-bounce"
            />
            <h2 className="text-xl font-bold text-center px-2">
              Fundamental Electrical &amp; Electronics Engineering
            </h2>
          </Link>

          {/* Card 3 - Linear Algebra */}
          <Link
            to="/sem2/linear-algebra"
            className="cursor-pointer bg-gradient-to-br from-blue-400 to-blue-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img
              src="/linear_algebra.png"
              alt="Linear Algebra"
              className="w-16 h-16 mb-4 animate-bounce"
            />
            <h2 className="text-xl font-bold text-center px-2">Linear Algebra</h2>
          </Link>

          {/* Card 4 - Problem Solving with Programming */}
          <Link
            to="/sem2/problem-solving"
            className="cursor-pointer bg-gradient-to-br from-purple-400 to-purple-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img
              src="/psp.png"
              alt="Problem Solving"
              className="w-16 h-16 mb-4 animate-bounce"
            />
            <h2 className="text-xl font-bold text-center px-2">
              Problem Solving with Programming
            </h2>
          </Link>

          {/* Card 5 - Technical Communication Skills */}
          <Link
            to="/sem2/technical-communication"
            className="cursor-pointer bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img
              src="/com_skill.png"
              alt="Technical Communication"
              className="w-16 h-16 mb-4 animate-bounce"
            />
            <h2 className="text-xl font-bold text-center px-2">
              Technical Communication Skills
            </h2>
          </Link>

          {/* Card 6 - Professional Ethics */}
          <Link
            to="/sem2/professional-ethics"
            className="cursor-pointer bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img
              src="/ethics.png"
              alt="Professional Ethics"
              className="w-16 h-16 mb-4 animate-bounce"
            />
            <h2 className="text-xl font-bold text-center px-2">Professional Ethics</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sem5_ece_VedioPlaylist;
