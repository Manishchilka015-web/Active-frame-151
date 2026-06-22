import { UserSearch, LineChart, Mail, CheckCircle2 } from 'lucide-react';
import { motion } from "motion/react";

export default function Features() {
  return (
    <section id="about" className="px-4 py-16 md:py-24 max-w-7xl mx-auto w-full relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-16 text-black tracking-tighter uppercase leading-[0.9] max-w-4xl italic">
          Why choose <span className="text-[#2DE2E2]">Active Frame</span> for influencer marketing?
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Card 1 */}
          <div className="lg:col-span-12 bg-white rounded-[40px] border border-gray-200 p-8 md:p-12 flex flex-col hover:-translate-y-1 transition-transform">
            <div className="flex flex-col md:flex-row gap-8 items-start h-full">
              <div className="flex-1">
                <div className="bg-[#FFD23F] w-14 h-14 flex items-center justify-center rounded-full mb-8 text-black">
                  <UserSearch className="w-7 h-7" strokeWidth={2.5}/>
                </div>
                <h3 className="font-black text-3xl mb-4 text-black uppercase tracking-tight">Find the right creators.</h3>
                <p className="text-gray-700 font-bold text-base leading-relaxed max-w-sm mb-8">We help you find the best people to promote your brand. We match you with creators whose followers are your ideal customers.</p>
              </div>
              
              <div className="flex-1 bg-[#F8F9FA] rounded-[24px] p-6 border border-gray-200 w-full h-full flex flex-col justify-center space-y-4">
                <div className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-gray-200">
                  <CheckCircle2 className="w-6 h-6 text-[#FF3B5C] flex-shrink-0" strokeWidth={3} />
                  <div>
                    <h4 className="font-black text-sm text-black mb-1 uppercase tracking-wide">Target the right people.</h4>
                    <p className="text-xs text-gray-600 font-medium leading-relaxed">Make sure your message reaches the exact people you want to sell to.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-gray-200">
                  <CheckCircle2 className="w-6 h-6 text-[#FF3B5C] flex-shrink-0" strokeWidth={3} />
                  <div>
                    <h4 className="font-black text-sm text-black mb-1 uppercase tracking-wide">Work with experts.</h4>
                    <p className="text-xs text-gray-600 font-medium leading-relaxed">Team up with famous creators who know your business and their fans well.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="lg:col-span-12 bg-white rounded-[40px] border border-gray-200 p-8 md:p-12 flex flex-col hover:-translate-y-1 transition-transform">
            <div className="flex flex-col md:flex-row gap-8 items-start h-full">
              <div className="flex-1">
                <div className="bg-[#FF3B5C] w-14 h-14 flex items-center justify-center rounded-full mb-8 text-white">
                  <LineChart className="w-7 h-7" strokeWidth={2.5}/>
                </div>
                <h3 className="font-black text-3xl mb-4 text-black uppercase tracking-tight">See how it's going.</h3>
                <p className="text-gray-700 font-bold text-base leading-relaxed max-w-sm mb-8">See how well your ads are doing in real time. We make it easy to understand what's working and what's not.</p>
              </div>
              
              <div className="flex-1 bg-[#F8F9FA] rounded-[24px] p-6 border border-gray-200 w-full h-full flex flex-col justify-center space-y-4">
                <div className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-gray-200">
                  <CheckCircle2 className="w-6 h-6 text-[#2DE2E2] flex-shrink-0" strokeWidth={3} />
                  <div>
                    <h4 className="font-black text-sm text-black mb-1 uppercase tracking-wide">Fix things fast.</h4>
                    <p className="text-xs text-gray-600 font-medium leading-relaxed">Notice if fewer people are looking, so you can change the plan right away.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-gray-200">
                  <CheckCircle2 className="w-6 h-6 text-[#2DE2E2] flex-shrink-0" strokeWidth={3} />
                  <div>
                    <h4 className="font-black text-sm text-black mb-1 uppercase tracking-wide">Do better next time.</h4>
                    <p className="text-xs text-gray-600 font-medium leading-relaxed">Learn from what happened so your next ad is even more successful.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="lg:col-span-12 bg-white rounded-[40px] border border-gray-200 p-8 md:p-12 flex flex-col hover:-translate-y-1 transition-transform">
            <div className="flex flex-col md:flex-row gap-8 items-start h-full">
              <div className="flex-1">
                <div className="bg-[#2DE2E2] w-14 h-14 flex items-center justify-center rounded-full mb-8 text-black">
                  <Mail className="w-7 h-7" strokeWidth={2.5}/>
                </div>
                <h3 className="font-black text-3xl mb-4 text-black uppercase tracking-tight">Get easy updates.</h3>
                <p className="text-gray-700 font-bold text-base leading-relaxed max-w-sm mb-8">We send you simple reports so you don't have to guess. See the numbers that matter most, delivered straight to you.</p>
              </div>
              
              <div className="flex-1 bg-[#F8F9FA] rounded-[24px] p-6 border border-gray-200 w-full h-full flex flex-col justify-center space-y-4">
                <div className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-gray-200">
                  <CheckCircle2 className="w-6 h-6 text-[#FFD23F] flex-shrink-0" strokeWidth={3} />
                  <div>
                    <h4 className="font-black text-sm text-black mb-1 uppercase tracking-wide">Save time.</h4>
                    <p className="text-xs text-gray-600 font-medium leading-relaxed">Stop doing boring math and let us send you the final numbers instead.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-gray-200">
                  <CheckCircle2 className="w-6 h-6 text-[#FFD23F] flex-shrink-0" strokeWidth={3} />
                  <div>
                    <h4 className="font-black text-sm text-black mb-1 uppercase tracking-wide">Make smart choices.</h4>
                    <p className="text-xs text-gray-600 font-medium leading-relaxed">Use our clear updates to always know what your next steps should be.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
            className="bg-black hover:bg-gray-800 text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-black uppercase tracking-widest text-sm md:text-base inline-block hover:-translate-y-1 focus:outline-none transition-all"
          >
            Talk to our marketing experts
          </button>
        </div>
      </motion.div>
    </section>
  );
}
