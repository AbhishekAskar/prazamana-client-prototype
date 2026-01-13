import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Loader from './components/ui/Loader';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import DigitalSmartLoto from './pages/DigitalSmartLoto';
import AdvancedRadarSensor from './pages/AdvancedRadarSensor';
import Services from './pages/Services';
import ServiceCeMarking from './pages/ServiceCeMarking';
import ServiceRiskAssessment from './pages/ServiceRiskAssessment';
import Contact from './pages/Contact';
import UnlockPage from './pages/UnlockPage';
import FreeConsultation from './pages/FreeConsultation';

import ScrollToTop from './components/utils/ScrollToTop';
import Chatbot from './components/chat/Chatbot';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="font-sans text-praz-dark bg-white min-h-screen">
      <AnimatePresence mode="wait">
        {loading && (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="products" element={<Products />} />
              <Route path="products/digital-smart-loto-solution" element={<DigitalSmartLoto />} />
              <Route path="products/advanced-3d-radar-sensor" element={<AdvancedRadarSensor />} />
              <Route path="services" element={<Services />} />
              <Route path="services/ce-marking" element={<ServiceCeMarking />} />
              <Route path="services/risk-assessment" element={<ServiceRiskAssessment />} />
              <Route path="contact" element={<Contact />} />
              <Route path="unlock-details" element={<UnlockPage />} />
              <Route path="free-consultation" element={<FreeConsultation />} />
            </Route>
          </Routes>
          <Chatbot />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
