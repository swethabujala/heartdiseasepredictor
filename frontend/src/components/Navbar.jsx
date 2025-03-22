import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#001f3f] text-[#20c997] py-6 px-8 flex justify-between items-center shadow-lg fixed top-0 left-0 w-full z-50 font-mono text-2xl">
      {/* Left Side - Logo */}
      <div className="text-3xl font-bold text-[#2dd4bf] font-serif">
        <Link to="/">HeartAttackPredictor</Link>
      </div>
      
      {/* Right Side - Navigation Links */}
      <ul className="flex space-x-8 font-mono text-xl">
        <li><Link to="/" className="hover:text-[#14b8a6]">Home</Link></li>
        <li><Link to="/predict" className="hover:text-[#14b8a6]">Prediction</Link></li>
        <li><Link to="/results" className="hover:text-[#14b8a6]">Results</Link></li>
        <li><Link to="/help" className="hover:text-[#14b8a6]">Help</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
