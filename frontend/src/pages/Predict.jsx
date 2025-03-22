import React, { useState } from "react";
import axios from "axios";

const PredictionForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/predict", formData);
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error sending data to backend", error);
    }
  };

  return (
    <div className="bg-[#001f3f] text-[#20c997] p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Heart Attack Prediction Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(formData).map((key) => (
          <div key={key} className="flex flex-col">
            <label className="font-semibold" htmlFor={key}>{key.toUpperCase()}</label>
            <input
              type="text"
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="p-2 rounded bg-[#20c997] text-[#001f3f]"
              required
            />
          </div>
        ))}
        <button type="submit" className="bg-[#20c997] text-[#001f3f] px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-[#14b8a6]">
          Predict
        </button>
      </form>
      {prediction !== null && (
        <div className="mt-4 p-4 bg-[#14b8a6] text-[#001f3f] rounded-lg">
          <h3 className="text-lg font-bold">Prediction Result:</h3>
          <p className="text-lg">{prediction === 1 ? "High risk of heart attack" : "Low risk of heart attack"}</p>
        </div>
      )}
    </div>
  );
};

export default PredictionForm;
