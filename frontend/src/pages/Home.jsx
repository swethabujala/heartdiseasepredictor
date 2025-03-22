import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#001f3f] min-h-screen flex flex-col items-center justify-center text-[#20c997] p-10">
      <h1 className="text-5xl font-bold text-[#2dd4bf] mb-6">Welcome to Heart Attack Predictor</h1>
      <p className="text-xl text-center max-w-3xl">
        Our AI-powered system helps predict heart attack risks based on your health parameters. 
        Enter your details and get instant insights into your cardiovascular health.
      </p>
      <button 
        onClick={() => navigate("/prediction")}
        className="mt-6 bg-[#20c997] text-[#001f3f] px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-[#14b8a6]"
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
