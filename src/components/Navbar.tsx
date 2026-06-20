import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 w-full border-b border-gray-200 bg-white sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-3">
          <svg 
            width="48"
            height="48"
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <rect x="10" y="10" width="80" height="80" fill="white" stroke="#1A1A1A" strokeWidth="5" />
            <circle cx="80" cy="22" r="5" fill="#1A1A1A" />
            <text x="15" y="46" fill="#1A1A1A" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="24" letterSpacing="-1">Active</text>
            <text x="15" y="74" fill="#1A1A1A" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="24" letterSpacing="-1">Frame</text>
          </svg>
          <span className="font-black text-xl tracking-tighter uppercase">ACTIVE FRAME</span>
        </Link>
        <button 
          className="p-2 md:hidden bg-white rounded-lg transition-transform"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
        </button>
        <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-black">
          <a href="/#contact" className="hover:text-[#FF3B5C] transition-colors">Contact Us</a>
          <Link to="/terms" className="hover:text-[#FF3B5C] transition-colors">Terms & Conditions</Link>
          <Link to="/privacy" className="hover:text-[#FF3B5C] transition-colors">Privacy Policy</Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[82px] bg-white z-40 border-b border-gray-200 md:hidden flex flex-col p-6 shadow-2xl">
          <div className="flex flex-col gap-6 text-xl font-black uppercase tracking-widest text-black">
            <a href="/#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FF3B5C] transition-colors pb-4 border-b border-gray-100">Contact Us</a>
            <Link to="/terms" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FF3B5C] transition-colors pb-4 border-b border-gray-100">Terms & Conditions</Link>
            <Link to="/privacy" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FF3B5C] transition-colors pb-4 border-b border-gray-100">Privacy Policy</Link>
            <a href="/#faq" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FF3B5C] transition-colors pb-4 border-b border-gray-100">FAQ</a>
          </div>
        </div>
      )}
    </>
  );
}
