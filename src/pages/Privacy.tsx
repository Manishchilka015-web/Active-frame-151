import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white text-black pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-12 uppercase tracking-tighter">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <ul className="list-disc pl-6 space-y-4">
              <li>Active Frame Agency respects and protects the privacy of all website visitors, clients, and partners.</li>
              <li>We may collect information such as your name, email address, phone number, company details, social media profiles, and campaign requirements.</li>
              <li>The information collected is used to provide our services, manage influencer marketing campaigns, communicate with clients, and improve user experience.</li>
              <li>We do not sell, rent, or share your personal information with third parties for marketing purposes.</li>
              <li>Information may be shared with influencers, partners, or service providers only when necessary to execute campaign activities.</li>
              <li>We implement reasonable security measures to safeguard your personal information from unauthorized access or misuse.</li>
              <li>Our website may use cookies and similar technologies to improve website functionality and user experience.</li>
              <li>We are not responsible for the privacy practices of third-party websites linked from our website.</li>
              <li>Users may request access to, correction of, or deletion of their personal information by contacting us.</li>
              <li>We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page.</li>
              <li>By using our website and services, you agree to the terms outlined in this Privacy Policy.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
