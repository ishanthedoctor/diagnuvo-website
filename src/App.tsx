/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlatformTour from './components/PlatformTour';
import PlatformPipeline from './components/PlatformPipeline';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Problem from './components/Problem';
import Solution from './components/Solution';
import WorkflowStory from './components/WorkflowStory';
import ProductDemo from './components/ProductDemo';
import FeaturesBento from './components/FeaturesBento';
import DiagnuvoAISection from './components/DiagnuvoAISection';
import TrustSecurity from './components/TrustSecurity';
import About from './components/About';
import FooterCTA from './components/FooterCTA';

export default function App() {
  return (
   <div className="min-h-screen bg-[#020617] text-white font-sans">
      <Navbar />
      <main>
        <Hero />
<Problem />
<PlatformTour />
<PlatformPipeline />
        <Solution />
        <WorkflowStory />
        <ProductDemo />
        <FeaturesBento />
        <DiagnuvoAISection />
        <TrustSecurity />
        <About />
      </main>
<FooterCTA />
</div>
  );
}
