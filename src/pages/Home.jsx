import React from 'react';

const Home = ({ onLoginClick }) => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold mb-6">Welcome to HireZon</h1>
      <div className="space-x-4">
        <button onClick={() => onLoginClick("student")} className="bg-purple-600 text-white px-6 py-2 rounded">Student Login</button>
        <button onClick={() => onLoginClick("employer")} className="bg-green-600 text-white px-6 py-2 rounded">Employer Login</button>
        <button onClick={() => onLoginClick("signup")} className="bg-yellow-500 text-black px-6 py-2 rounded">Sign Up</button>
      </div>
    </div>
  );
};

export default Home;
