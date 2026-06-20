import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion } from "motion/react";

const faqs = [
  { q: "How much do brands pay for influencer marketing? Do you accept barter Collaboration?", a: "Costs Vary Depending On The Influencer's Reach, Engagement Rate, And Platform. Yes, We Also Offer Barter Collaborations Depending On Brand Alignment." },
  { q: "Which types of influencers do you work with?", a: "We Work With A Diverse Range Of Over 300+ Influencers Like Finance, Tech, Lifestyle, and Many More, From Nano to Macro Tiers." },
  { q: "On which platforms can brands run campaigns with you?", a: "We Primarily Run Campaigns Across Instagram And YouTube, Depending On Where Your Target Audience lives." },
  { q: "How long does it take to get a campaign live?", a: "Once The Brand is approved, We Can Typically Have A Campaign Live Within 1 To 2 weeks, Depending On Content Equirements." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section id="faq" className="px-4 py-16 md:py-24 max-w-4xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-black tracking-tighter uppercase italic">Frequently Asked <span className="text-[#FF3B5C]">Questions</span></h2>
          <p className="text-gray-600 font-bold uppercase tracking-widest text-xs md:text-sm">Everything you need to know before we get started.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-sm">
              <button 
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors"
              >
                <span className="font-black text-black text-base md:text-lg uppercase tracking-tight pr-4">{faq.q}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === i ? 'bg-[#FF3B5C] text-white' : 'bg-[#2DE2E2] text-black'}`}>
                  {openIndex === i ? (
                    <Minus className="w-5 h-5" strokeWidth={3} />
                  ) : (
                    <Plus className="w-5 h-5" strokeWidth={3} />
                  )}
                </div>
              </button>
              <div 
                className={`px-6 text-sm font-medium text-gray-700 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                }`}
              >
                <div className="pt-2 border-t-2 border-dashed border-gray-200 mt-2">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
