// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold mb-4">Find Your Dream Job</h1>
      <p className="text-xl mb-8">Join thousands of students and employers today</p>
      <button className="bg-white text-blue-700 px-6 py-2 rounded font-semibold shadow hover:bg-gray-200">
        Get Started
      </button>
    </motion.div>
  );
};

export default Hero;
