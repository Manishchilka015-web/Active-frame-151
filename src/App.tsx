/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ContactForm />
      <Features />
      <FAQ />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col selection:bg-[#2DE2E2] selection:text-black">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
