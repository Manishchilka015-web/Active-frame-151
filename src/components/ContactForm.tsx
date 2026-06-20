import { useState, useEffect } from 'react';
import { motion } from "motion/react";
import { initAuth, googleSignIn, logout } from '../lib/googleAuth';
import { createSpreadsheet, appendRow } from '../lib/sheetsApi';
import { User } from 'firebase/auth';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [spreadsheetId, setSpreadsheetId] = useState<string | null>(
    localStorage.getItem('contact_spreadsheet_id')
  );

  useEffect(() => {
    const unsubscribe = initAuth(
      (user, token) => {
        setUser(user);
        setToken(token);
      },
      () => {
        setUser(null);
        setToken(null);
      }
    );
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      const result = await googleSignIn();
      if (result) {
        setUser(result.user);
        setToken(result.accessToken);
        
        if (!spreadsheetId) {
          const newSheetId = await createSpreadsheet(result.accessToken, 'Active Frame - Campaign Submissions');
          setSpreadsheetId(newSheetId);
          localStorage.setItem('contact_spreadsheet_id', newSheetId);
        }
      }
    } catch (error: any) {
      console.error('Error signing in:', error);
      alert('Error connecting to Google Sheets: ' + (error.message || error));
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!token || !spreadsheetId) {
      alert("Please sign in to Google to submit the form directly to your Sheet.");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const data = [
      new Date().toLocaleString(),
      formData.get('name') as string,
      formData.get('brandName') as string,
      formData.get('contactNo') as string,
      formData.get('email') as string,
      formData.get('website') as string,
      formData.get('details') as string,
    ];

    try {
      setIsSubmitting(true);
      await appendRow(token, spreadsheetId, data);
      setSubmitted(true);
      e.currentTarget.reset();
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      alert('Error submitting to Google Sheets: ' + (error.message || error));
    } finally {
      setIsSubmitting(false);
    }
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
        <div className="absolute top-8 right-8 md:top-14 md:right-14 z-20 flex flex-col items-end">
          {!user ? (
            <button type="button" onClick={handleSignIn} className="gsi-material-button bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 flex items-center px-3 py-2 transition-colors">
              <div className="gsi-material-button-icon mr-2">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18" style={{display: "block"}}>
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">Connect Google Sheets</span>
            </button>
          ) : (
             <div className="flex flex-col items-end gap-1">
               <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full flex items-center">
                 <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                 Connected to Sheets
               </span>
               <button onClick={handleLogout} className="text-xs text-gray-500 hover:text-gray-800 underline">Disconnect Admin</button>
             </div>
          )}
        </div>

        <div className="bg-white rounded-[32px] p-8 md:p-10 border border-gray-200 shadow-sm mt-8 md:mt-0">
          <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tight text-black">Fill Your Campaign Form</h2>

          {submitted ? (
            <div className="p-8 bg-[#2DE2E2] border border-transparent text-black rounded-2xl text-center font-black uppercase tracking-widest animate-in fade-in zoom-in duration-300">
              Thanks! We've received your request and our team will get in touch shortly to plan your campaign.
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              {!user && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                  <p className="text-sm text-amber-800 font-medium">To receive form bounds directly to your Google Sheets, click "Connect Google Sheets" in the top right corner.</p>
                </div>
              )}
              
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
