import { UserCheck, Search, Pen, Zap, TrendingUp } from 'lucide-react';
import { motion } from "motion/react";

const services = [
  { icon: UserCheck, title: 'DEDICATED CAMPAIGN SPECIALIST', desc: 'A single point of contact managing influencer collaborations, communication, and campaign execution from start to finish.' },
  { icon: Search, title: 'FIND THE RIGHT INFLUENCERS', desc: 'We discover and shortlist creators who align with your brand, target audience, and campaign goals for maximum impact.' },
  { icon: Pen, title: 'CONTENT STRATEGY & SCRIPT DEVELOPMENT', desc: 'We craft campaign concepts and creator-ready scripts designed to boost engagement, reach, and brand awareness.' },
  { icon: Zap, title: 'END-TO-END CAMPAIGN EXECUTION', desc: 'We handle the entire campaign process, ensuring smooth coordination, timely approvals, and successful delivery.' },
  { icon: TrendingUp, title: 'PERFORMANCE REPORTING & OPTIMIZATION', desc: 'Track performance with detailed reports and valuable insights that drive smarter marketing decisions.' },
];

export default function Services() {
  return (
    <section id="services" className="px-4 py-12 md:py-16 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-10 text-black tracking-tighter uppercase italic">What we <span className="text-[#FFD23F]">provide?</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-16">
          {services.map((s, i) => {
            const Icon = s.icon;
            
            let gridClass = '';
            let bgClass = '';
            let iconBg = '';
            let iconFocus = '';
            let shadowClass = '';
            
            if (i === 0) {
              gridClass = 'md:col-span-12 lg:col-span-5';
              bgClass = 'bg-white text-black';
              iconBg = 'bg-[#FF3B5C] text-white';
              iconFocus = 'group-hover:bg-[#FFD23F] group-hover:text-black';
            } else if (i === 1) {
              gridClass = 'md:col-span-12 lg:col-span-7';
              bgClass = 'bg-white text-black';
              iconBg = 'bg-[#FFD23F] text-black';
              iconFocus = 'group-hover:bg-[#FF3B5C] group-hover:text-white';
            } else if (i === 2) {
              gridClass = 'md:col-span-12 lg:col-span-4';
              bgClass = 'bg-white text-black';
              iconBg = 'bg-[#FF3B5C] text-white';
              iconFocus = 'group-hover:bg-[#2DE2E2] group-hover:text-black';
            } else if (i === 3) {
              gridClass = 'md:col-span-12 lg:col-span-4';
              bgClass = 'bg-white text-black';
              iconBg = 'bg-[#2DE2E2] text-black';
              iconFocus = 'group-hover:bg-[#FFD23F] group-hover:text-black';
            } else if (i === 4) {
              gridClass = 'md:col-span-12 lg:col-span-4';
              bgClass = 'bg-white text-black';
              iconBg = 'bg-black text-white';
              iconFocus = 'group-hover:bg-[#FF3B5C] group-hover:text-white';
            }
            
            return (
              <div key={i} className={`flex flex-col ${bgClass} hover:-translate-y-1 transition-transform p-8 md:p-10 rounded-[40px] border border-gray-200 ${shadowClass} group gap-6 md:gap-8 ${gridClass}`}>
                <div className={`w-14 h-14 rounded-full border border-gray-200 ${iconBg} flex items-center justify-center ${iconFocus} transition-colors flex-shrink-0`}>
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className={`font-black text-2xl mb-4 uppercase tracking-tight ${bgClass.includes('text-white') ? 'text-white' : 'text-black'}`}>{s.title}</h3>
                  <p className={`text-sm font-bold leading-relaxed ${bgClass.includes('text-white') ? 'text-white/90' : 'text-gray-800'}`}>{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 text-center">
          <div className="bg-[#FF3B5C] p-8 md:p-10 rounded-[40px] border-2 border-transparent text-white hover:-translate-y-1 transition-transform">
            <div className="text-5xl md:text-7xl font-black mb-3">300+</div>
            <div className="font-bold text-sm md:text-lg uppercase tracking-wider">Creators We Have</div>
          </div>
          <div className="bg-[#2DE2E2] p-8 md:p-10 rounded-[40px] border-2 border-transparent text-black hover:-translate-y-1 transition-transform">
            <div className="text-5xl md:text-7xl font-black mb-3">100+</div>
            <div className="font-bold text-sm md:text-lg uppercase tracking-wider">Brands We Have Worked</div>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
            className="bg-black hover:bg-gray-800 text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-black uppercase tracking-widest text-sm md:text-base inline-block border-2 border-transparent hover:-translate-y-1 focus:outline-none transition-all"
          >
            GET ACCESS TO 300+ INFLUENCERS FOR YOUR UPCOMING CAMPAIGN
          </button>
        </div>
      </motion.div>
    </section>
  );
}
