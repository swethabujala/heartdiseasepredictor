import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { prediction } = location.state || {};

  return (
    <div className="bg-[#001f3f] text-[#20c997] p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Prediction Results</h2>

      {prediction ? (
        <div className="mt-4 p-4 bg-[#14b8a6] text-[#001f3f] rounded-lg text-center">
          <h3 className="text-lg font-bold">Prediction:</h3>
          <p className="text-lg">
            {prediction === "High Risk" ? "High risk of heart attack" : "Low risk of heart attack"}
          </p>
        </div>
      ) : (
        <p className="text-center text-xl">No prediction available.</p>
      )}

      <button
        onClick={() => navigate("/predict")}
        className="bg-[#20c997] text-[#001f3f] px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-[#14b8a6] w-full mt-4"
      >
        Go Back to Prediction
      </button>
    </div>
  );
};

export default Results;
