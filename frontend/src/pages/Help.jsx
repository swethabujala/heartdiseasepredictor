import React from "react";

const Help = () => {
  // Define help instructions for each field
  const instructions = [
    {
      title: "Age",
      description:
        "Enter your age in whole years (e.g., 40). This should be your current age."
    },
    {
      title: "Sex",
      description:
        "Select your biological sex: 'M' for Male and 'F' for Female."
    },
    {
      title: "ChestPainType",
      description:
        "Choose the type of chest pain you experience:\n• TA: Typical Angina\n• ATA: Atypical Angina\n• NAP: Non-Anginal Pain\n• ASY: Asymptomatic"
    },
    {
      title: "RestingBP",
      description:
        "Enter your resting blood pressure in mmHg (e.g., 130, 140)."
    },
    {
      title: "Cholesterol",
      description:
        "Enter your serum cholesterol in mg/dL (e.g., 200, 289)."
    },
    {
      title: "FastingBS",
      description:
        "Enter your fasting blood sugar level. Use '0' if it's below 120 mg/dL and '1' if it's 120 mg/dL or above."
    },
    {
      title: "RestingECG",
      description:
        "Select your resting ECG results:\n• Normal\n• ST: ST-T Wave Abnormality\n• LVH: Left Ventricular Hypertrophy"
    },
    {
      title: "MaxHR",
      description:
        "Enter your maximum heart rate achieved during exercise (e.g., 150, 172)."
    },
    {
      title: "ExerciseAngina",
      description:
        "Select whether you experience angina (chest pain) during exercise:\n• Y: Yes\n• N: No"
    },
    {
      title: "Oldpeak",
      description:
        "Enter the ST depression induced by exercise relative to rest (e.g., 0.0, 1.5)."
    },
    {
      title: "ST_Slope",
      description:
        "Select the slope of the peak exercise ST segment:\n• Up\n• Flat\n• Down"
    }
  ];

  return (
    <div className="bg-[#001f3f] text-[#20c997] min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Help & Instructions
      </h1>
      <div className="max-w-5xl mx-auto grid grid-cols-2 gap-6">
        {instructions.map((item, index) => (
          <div key={index} className="p-4 border border-[#20c997] rounded">
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-base whitespace-pre-line">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
