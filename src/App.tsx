import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Security from "./pages/Security";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main Landing Page */}
        <Route path="/" element={<HomePage />} />

        {/* Legal Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/security" element={<Security />} />

      </Routes>
    </BrowserRouter>
  );
}
