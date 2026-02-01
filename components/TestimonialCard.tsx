import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from './testimonial-data.ts';

interface TestimonialCardProps {
  data: Testimonial;
  index: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ data }) => {
  const paragraphs = data.quote.split('\n\n').filter(p => p.trim() !== '');

  return (
    <div className="group h-full flex flex-col bg-[#0a0a0a] p-8 border border-neutral-800 transition-all duration-300 hover:border-white hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 relative">
      
      {/* Decorative Corner Accent (Top Right) */}
      {/* Default: Dark Gray. Hover: White to match border */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-neutral-900 group-hover:border-r-white transition-colors duration-300"></div>

      {/* Header: Role & Icon */}
      <div className="flex items-center justify-between mb-8 relative z-10">
        <span className="inline-block py-1.5 px-3 border border-neutral-800 rounded text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-400 bg-neutral-900 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
          {data.role}
        </span>
        <Quote size={24} className="text-neutral-800 fill-neutral-900 group-hover:text-neutral-500 transition-colors" />
      </div>

      {/* Content: Editorial Typography */}
      <div className="flex-1 mb-8">
        {paragraphs.map((paragraph, i) => (
          <p 
            key={i} 
            className={`font-serif text-[1.125rem] leading-relaxed text-neutral-300 italic group-hover:text-white transition-colors duration-300 ${i > 0 ? 'mt-4' : ''}`}
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Footer: User Profile */}
      <div className="mt-auto flex items-center gap-4 pt-6 border-t border-neutral-900 group-hover:border-neutral-700 transition-colors">
        <div className="relative shrink-0">
          <div className="w-12 h-12 rounded-full bg-neutral-800 overflow-hidden ring-1 ring-neutral-800 group-hover:ring-white transition-all">
             <img 
              src={`https://picsum.photos/seed/${data.imageSeed}/150/150`} 
              alt={data.name} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            />
          </div>
        </div>
        
        <div className="flex flex-col">
          <h4 className="font-sans font-bold text-white text-sm">{data.name}</h4>
          <span className="font-sans text-xs font-medium text-neutral-500 uppercase tracking-wide group-hover:text-neutral-400 transition-colors">
            Univad Student
          </span>
        </div>
      </div>

    </div>
  );
};