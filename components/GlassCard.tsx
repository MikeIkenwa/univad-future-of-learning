import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { GlassCardProps } from './community-data.ts';

const GlassCard: React.FC<GlassCardProps> = ({ data, reverse = false }) => {
  return (
    <div className="w-full max-w-6xl mx-auto mb-16 last:mb-0">
      
      {/* Main Card Container */}
      <div className="group relative flex flex-col md:flex-row bg-white border border-gray-200 rounded-[2.5rem] overflow-hidden hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-500">
        
        {/* Image Section */}
        <div className={`w-full md:w-[45%] h-72 md:h-auto overflow-hidden relative ${reverse ? 'md:order-2' : 'md:order-1'}`}>
          <img 
            src={data.imageUrl} 
            alt={data.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>

        {/* Content Section */}
        <div className={`w-full md:w-[55%] p-8 md:p-12 lg:p-16 flex flex-col justify-center ${reverse ? 'md:order-1' : 'md:order-2'} bg-white`}>
          <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight leading-tight">
                {data.title}
              </h2>
              <div className="w-12 h-1 bg-black rounded-full mb-6 opacity-10"></div>
              <p className="text-gray-500 text-lg leading-relaxed font-light">
                {data.description}
              </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-10">
            {data.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-black" strokeWidth={3} />
                </div>
                <span className="text-sm font-medium text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <div>
              <a 
                href={data.ctaLink} 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all duration-300 group-hover:pl-10 group-hover:pr-6"
              >
                {data.ctaText}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;