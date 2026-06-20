import { useState } from 'react';
import { motion } from "motion/react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      e.currentTarget.reset();
      setTimeout(() => setSubmitted(false), 4000);
    }, 1000);
  };

  return (
    <section className="px-4 py-16 md:py-24 max-w-7xl mx-auto w-full relative z-10" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-100 rounded-[40px] p-6 md:p-12 border border-gray-200 relative"
      >
        <div className="bg-white rounded-[32px] p-8 md:p-10 border border-gray-200 shadow-sm mt-8 md:mt-0">
          <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tight text-black">Fill Your Campaign Form</h2>

          {submitted ? (
            <div className="p-8 bg-[#2DE2E2] border border-transparent text-black rounded-2xl text-center font-black uppercase tracking-widest animate-in fade-in zoom-in duration-300">
              Thanks! We've received your request and our team will get in touch shortly to plan your campaign.
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-black uppercase mb-1 ml-2 text-black">Your Name</label>
                  <input required name="name" type="text" placeholder="Your Name" className="w-full border border-gray-200 rounded-2xl px-5 py-3.5 text-sm font-bold bg-[#FFF9F2] focus:bg-white outline-none placeholder-gray-400 focus:ring-0 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase mb-1 ml-2 text-black">Brand Name</label>
                  <input required name="brandName" type="text" placeholder="Brand Name" className="w-full border border-gray-200 rounded-2xl px-5 py-3.5 text-sm font-bold bg-[#FFF9F2] focus:bg-white outline-none placeholder-gray-400 focus:ring-0 transition-colors" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-black uppercase mb-1 ml-2 text-black">Your Contact No.</label>
                  <input required name="contactNo" type="tel" placeholder="Your Contact No." className="w-full border border-gray-200 rounded-2xl px-5 py-3.5 text-sm font-bold bg-[#FFF9F2] focus:bg-white outline-none placeholder-gray-400 focus:ring-0 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase mb-1 ml-2 text-black">Business Email Address</label>
                  <input required name="email" type="email" placeholder="Business Email Address" className="w-full border border-gray-200 rounded-2xl px-5 py-3.5 text-sm font-bold bg-[#FFF9F2] focus:bg-white outline-none placeholder-gray-400 focus:ring-0 transition-colors" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-black uppercase mb-1 ml-2 text-black">Brand Website Link</label>
                <input required name="website" type="url" placeholder="Your Brand Website Link (e.g. https://...)" className="w-full border border-gray-200 rounded-2xl px-5 py-3.5 text-sm font-bold bg-[#FFF9F2] focus:bg-white outline-none placeholder-gray-400 focus:ring-0 transition-colors" />
              </div>
              
              <div>
                <label className="block text-xs font-black uppercase mb-1 ml-2 text-black">Campaign Details</label>
                <textarea required name="details" placeholder="Tell us about your campaign details..." rows={4} className="w-full border border-gray-200 rounded-2xl px-5 py-3.5 text-sm font-bold bg-[#FFF9F2] focus:bg-white outline-none placeholder-gray-400 focus:ring-0 transition-colors resize-none"></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-[#FFD23F] border border-transparent rounded-2xl font-black text-lg uppercase tracking-wider hover:-translate-y-1 transition-all text-black mt-4 disabled:opacity-50 disabled:hover:translate-y-0 relative">
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Get Your Campaign Plan"
                )}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}
