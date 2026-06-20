import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="px-4 py-16 md:py-24 max-w-7xl mx-auto w-full relative">
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#FFD23F] rounded-full opacity-50 blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#2DE2E2] rounded-full opacity-30 blur-3xl -z-10"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1 bg-black text-white text-xs font-bold rounded-full mb-6 uppercase tracking-widest shadow-sm">Top Rated Agency</span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6 uppercase italic text-black">
          Hire <span className="text-[#FF3B5C]">Influencer</span><br/>Marketing <span className="text-[#2DE2E2]">Agency</span>
        </h1>
        <h2 className="text-xl md:text-3xl font-black mb-8 text-black tracking-tight uppercase">Find the Perfect Influencer for Your Brand</h2>
        <p className="text-gray-800 mb-8 max-w-4xl text-base md:text-xl font-medium leading-relaxed">
          Among today's leading influencer marketing agencies, <strong className="font-black">Active Frame</strong> is trusted by brands looking for real growth through influencer marketing. With a network of 100+ exclusive influencers across various niches, we connect brands with creators who genuinely fit their audience and goals. From influencer selection to campaign execution, we manage the entire process to ensure smooth collaborations and authentic content.
        </p>
      </motion.div>
    </section>
  );
}
