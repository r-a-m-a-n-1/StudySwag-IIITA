import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo_learn.png';

const fullText = "Learn Better, Score Higher";

function Navbar() {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 75;
    const deletingSpeed = 100;
    const delayBetweenCycles = 1500;

    if (isTyping) {
      if (textIndex < fullText.length) {
        const timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, textIndex + 1));
          setTextIndex(textIndex + 1);
        }, typingSpeed);
        return () => clearTimeout(timer);
      } else {
        setTimeout(() => setIsTyping(false), delayBetweenCycles);
      }
    } else {
      if (textIndex > 0) {
        const timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, textIndex - 1));
          setTextIndex(textIndex - 1);
        }, deletingSpeed);
        return () => clearTimeout(timer);
      } else {
        setTimeout(() => setIsTyping(true), delayBetweenCycles);
      }
    }
  }, [textIndex, isTyping]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 px-6 py-2 flex justify-between items-center shadow-md z-50">
      {/* Logo and animated text */}
      <div className="flex items-center">
        <img src={logo} alt="Website Logo" className="h-10 w-10 object-cover mr-3" /> {/* Small logo */}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-lg font-semibold border-r-2 border-yellow-500 pr-2 animate-typing">
          {displayedText}
        </span>
      </div>
      {/* Navigation links */}
      <ul className="flex space-x-6 text-lg font-medium">
        <li>
          <Link
            to="/"
            className="text-gray-200 hover:text-blue-500 transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-gray-200 hover:text-blue-500 transition-colors duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="text-gray-200 hover:text-blue-500 transition-colors duration-300"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            className="text-gray-200 hover:text-blue-500 transition-colors duration-300"
          >
            Signup
          </Link>
        </li>
        <li>
          <Link
            to="/admin"
            className="text-gray-200 hover:text-blue-500 transition-colors duration-300"
          >
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
