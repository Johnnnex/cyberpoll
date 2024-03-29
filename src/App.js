import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import DashboardVote from "./pages/dashboardVote";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import Home from "./pages/home";
import Results from "./pages/results";

function App() {
  return (
    <ThirdwebProvider activeChain="mumbai">
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/vote" element={<DashboardVote />} />
            <Route path="/results" element={<Results />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThirdwebProvider>
  );
}

export default App;
