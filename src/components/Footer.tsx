import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-12 md:px-12 w-full z-10 text-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="max-w-2xl">
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Active Frame is India's Fastest-Growing Influencer Marketplace, Helping Brands Discover, Connect, And Collaborate With Creators, To Get Best Results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg text-gray-400 mb-2">Help</h3>
            <a href="/#faq" className="hover:text-black transition-colors text-lg">FAQ</a>
            <a href="/#contact" className="hover:text-black transition-colors text-lg">Contact Us</a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg text-gray-400 mb-2">About</h3>
            <Link to="/terms" className="hover:text-black transition-colors text-lg">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-black transition-colors text-lg">Privacy Policy</Link>
          </div>
        </div>

        <div className="text-sm text-gray-400 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-center items-center gap-4 relative">
          <span className="md:absolute md:left-0">© {currentYear} Active Frame Agency. All rights reserved.</span>
          <span className="font-medium text-black text-base">Made In India ❤️</span>
        </div>
      </div>
    </footer>
  );
}
