import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { motion } from 'framer-motion';
import { AiFillHeart } from 'react-icons/ai'; // Heart icon
import { FaCopyright } from 'react-icons/fa'; // Copyright icon
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa'; // Social media icons

const AboutPage = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div
      className="min-h-screen flex flex-col justify-between"
      style={{
        backgroundColor: '#000000', // Updated to solid black
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl p-8 rounded-xl shadow-xl mx-auto my-12 max-h-[80vh] overflow-auto"
      >
        {/* About Us Content */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text"
        >
          About Our Platform
        </motion.h1>

        <div className="text-left text-lg text-white leading-relaxed space-y-4">
          <p>
            Our platform is specifically designed to support students by providing essential academic resources. We understand that when you start your academic journey, knowing where to begin and how to prepare can be challenging.
          </p>
          <p>
            To ease your transition, we offer a curated collection of high-quality video lectures, detailed course practice sheets, and comprehensive question papers from previous years. In addition, you can access well-organized notes prepared by both faculty and seniors, ensuring you have a complete resource to study from.
          </p>
          <p>
            Our mission is to empower you with the right materials to excel academically—no live sessions or interactive classes, just reliable and straightforward study resources available at your fingertips.
          </p>
          <p>
            Whether you are revising for exams or trying to grasp new concepts, our platform is your one-stop destination for all the essential study materials you need.
          </p>
          <p className="mt-6 text-center">
            <span className="text-2xl font-bold text-yellow-400">
              Empowering Your Academic Journey
            </span>
          </p>
        </div>
      </motion.div>

      {/* Full-Width Footer */}
      <footer className="w-screen bg-gray-900 py-6">
        <div className="w-full flex flex-col items-center">
          <div className="flex items-center text-white space-x-2 mb-4">
            <p className="text-lg">Made with</p>
            <AiFillHeart className="text-red-600 text-2xl" /> {/* Heart icon */}
            <p
              className="text-lg cursor-pointer hover:underline"
              onClick={() => navigate('/techtitanium-team')} // Navigate to TechTitanium team page on click
            >
              by Platinum Team
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://www.instagram.com/campusbazariiitasupportteam/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-600"
            >
              <FaInstagram className="text-3xl" /> {/* Instagram icon */}
            </a>
            <a
              href="https://chat.whatsapp.com/Jr8oe7VB3xe4miVsqYmcHo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500"
            >
              <FaWhatsapp className="text-3xl" /> {/* WhatsApp icon */}
            </a>
            <a
              href="https://www.facebook.com/campusbazarsupportteam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600"
            >
              <FaFacebook className="text-3xl" /> {/* Facebook icon */}
            </a>
          </div>

          {/* Copyright Info */}
          <div className="flex items-center text-white space-x-2 mt-4">
            <FaCopyright className="text-white text-md" /> {/* Copyright icon */}
            <p className="text-sm">2024 TechTitanium. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
