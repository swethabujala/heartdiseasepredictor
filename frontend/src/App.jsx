import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Prediction from "./pages/Predict";
import Results from "./pages/Result";
import Help from "./pages/Help";

import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return <Home navigate={navigate} />;
};

const App = () => {
  return (
    <Router>
      <div className="bg-[#001f3f] min-h-screen text-[#20c997]">
        <Navbar />
        <div className="pt-24"> {/* Adjust for fixed navbar spacing */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/predict" element={<Prediction />} />
            <Route path="/results" element={<Results />} />
            <Route path="/help" element={<Help/>}/> 
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
