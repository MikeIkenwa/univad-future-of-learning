import React from 'react';
import { TESTIMONIALS, EXTERNAL_LINKS } from './testimonial-data.ts';
import { TestimonialCard } from './TestimonialCard.tsx';
import { ArrowRight } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#050505] text-white py-20 px-6 sm:px-8 lg:px-12 overflow-hidden selection:bg-white selection:text-black border-t border-neutral-900">
      
      {/* Background Texture - Subtle White Dot Grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
      }}></div>

      {/* Decorative large stroke text (watermark) */}
      <div className="absolute top-20 right-0 translate-x-1/4 select-none pointer-events-none opacity-[0.05]">
        <span className="text-[12rem] md:text-[20rem] font-serif font-black leading-none text-white">Voices</span>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        
        {/* Header - Dark Mode Editorial Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-neutral-800 pb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-white"></span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400">Student Success</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] text-white">
              Transforming careers, <br />
              <span className="italic text-neutral-500">one story at a time.</span>
            </h2>
          </div>

          <div className="md:mb-4 shrink-0">
             <a 
              href={EXTERNAL_LINKS.MORE_TESTIMONIALS}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-16 h-16 rounded-full bg-white text-black transition-transform duration-300 hover:scale-110 hover:bg-neutral-200"
              aria-label="View more testimonials"
            >
              <ArrowRight size={24} className="group-hover:-rotate-45 transition-transform duration-300" />
            </a>
            <span className="block mt-2 text-xs font-medium text-center text-neutral-500 group-hover:text-white transition-colors">View All</span>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
              key={testimonial.id}
              className={`flex flex-col ${idx % 2 === 1 ? 'xl:translate-y-12' : ''}`} // Stagger effect
            >
              <TestimonialCard data={testimonial} index={idx} />
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="mt-24 lg:mt-32 text-center border-t border-neutral-800 pt-12">
          <p className="font-serif text-2xl md:text-3xl text-neutral-500 italic">
            "Join thousands of students shaping the future."
          </p>
          <div className="mt-8">
            <a 
              href="https://www.univad.org" 
              target="_blank"
              className="inline-block px-8 py-3 border border-white text-white font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-colors duration-300"
            >
              Start Learning Today
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;