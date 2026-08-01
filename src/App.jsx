import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import HomeHtml from './pages/HomeHtml';
import ResumeHtml from './pages/ResumeHtml';
import EmberquitHtml from './pages/projects/EmberquitHtml';
import F1DashboardHtml from './pages/projects/F1DashboardHtml';
import HoneeHtml from './pages/projects/HoneeHtml';
import ResteaseHtml from './pages/projects/ResteaseHtml';
import ResteaseTemp from './pages/temp/ResteaseTemp';
import ResponsivePreview from './pages/ResponsivePreview';
import useOriginalAnimations from './hooks/useOriginalAnimations';

import ScrollToTop from './components/ScrollToTop';

function App() {
  const location = useLocation();
  
  // Re-run GSAP logic on route change
  useOriginalAnimations(location.pathname);

  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<HomeHtml />} />
        <Route path="/responsive-preview" element={<ResponsivePreview />} />
        <Route path="/temp-preview" element={<ResteaseTemp />} />
        <Route path="/resume" element={<ResumeHtml />} />
        <Route path="/resume.html" element={<ResumeHtml />} />
        <Route path="/index.html" element={<HomeHtml />} />

        {/* Project Case Study Routes */}
        <Route path="/project-details/emberquit.html" element={<EmberquitHtml />} />
        <Route path="/project-details/emberquit" element={<EmberquitHtml />} />

        <Route path="/project-details/f1_dashboard.html" element={<F1DashboardHtml />} />
        <Route path="/project-details/f1_dashboard" element={<F1DashboardHtml />} />

        <Route path="/project-details/honee.html" element={<HoneeHtml />} />
        <Route path="/project-details/honee" element={<HoneeHtml />} />

        <Route path="/project-details/restease.html" element={<ResteaseHtml />} />
        <Route path="/project-details/restease" element={<ResteaseHtml />} />
      </Routes>
    </>
  );
}

export default App;
