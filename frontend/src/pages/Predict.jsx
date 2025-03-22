import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PredictionForm = () => {
  const [formData, setFormData] = useState({
    Age: "",
    Sex: "",
    ChestPainType: "",
    RestingBP: "",
    Cholesterol: "",
    FastingBS: "",
    RestingECG: "",
    MaxHR: "",
    ExerciseAngina: "",
    Oldpeak: "",
    ST_Slope: "",
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/predict", formData);
      const { prediction, risk_factors } = response.data;

      // Navigate to results page with prediction data
      navigate("/results", { state: { prediction, riskFactors: risk_factors || [] } });
    } catch (error) {
      console.error("Error sending data to backend", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#001f3f] text-[#20c997] p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Heart Attack Prediction Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {Object.keys(formData).map((key) => (
            <div className="flex flex-col" key={key}>
              <label className="font-semibold" htmlFor={key}>{key}</label>
              {key === "Sex" || key === "ChestPainType" || key === "RestingECG" || key === "ExerciseAngina" || key === "ST_Slope" ? (
                <select 
                  id={key} 
                  name={key} 
                  value={formData[key]} 
                  onChange={handleChange} 
                  className="p-2 rounded bg-[#001f3f] text-[#20c997] border border-[#20c997] focus:outline-none focus:ring-2 focus:ring-[#20c997] focus:bg-[#001f3f]"
                  required
                >
                  <option value="">Select</option>
                  {key === "Sex" && <><option value="M">Male</option><option value="F">Female</option></>}
                  {key === "ChestPainType" && <><option value="TA">Typical Angina</option><option value="ATA">Atypical Angina</option><option value="NAP">Non-Anginal Pain</option><option value="ASY">Asymptomatic</option></>}
                  {key === "RestingECG" && <><option value="Normal">Normal</option><option value="ST">ST-T Wave Abnormality</option><option value="LVH">Left Ventricular Hypertrophy</option></>}
                  {key === "ExerciseAngina" && <><option value="Y">Yes</option><option value="N">No</option></>}
                  {key === "ST_Slope" && <><option value="Up">Up</option><option value="Flat">Flat</option><option value="Down">Down</option></>}
                </select>
              ) : (
                <input 
                  type="number"
                  id={key} 
                  name={key} 
                  value={formData[key]} 
                  onChange={handleChange} 
                  className="p-2 rounded bg-[#001f3f] text-[#20c997] border border-[#20c997] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#20c997] focus:bg-[#001f3f]"
                  required 
                />
              )}
            </div>
          ))}
        </div>
        <button 
          type="submit" 
          className="bg-[#20c997] text-[#001f3f] px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-[#14b8a6] w-full"
          disabled={loading}
        >
          {loading ? "Predicting..." : "Predict"}
        </button>
      </form>
    </div>
  );
};

export default PredictionForm;
