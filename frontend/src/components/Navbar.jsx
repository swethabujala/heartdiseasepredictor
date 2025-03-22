import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#001f3f] text-[#20c997] py-6 px-8 flex justify-between items-center shadow-lg fixed top-0 left-0 w-full z-50 font-mono text-2xl">
      {/* Left Side - Logo */}
      <div className="text-3xl font-bold text-[#2dd4bf] font-serif">HeartAttackPredictor</div>
      
      {/* Right Side - Navigation Links */}
      <ul className="flex space-x-8 font-mono text-xl">
        <li><a href="#home" className="hover:text-[#14b8a6]">Home</a></li>
        <li><a href="#prediction" className="hover:text-[#14b8a6]">Prediction</a></li>
        <li><a href="#results" className="hover:text-[#14b8a6]">Results</a></li>
        <li><a href="#help" className="hover:text-[#14b8a6]">Help</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;