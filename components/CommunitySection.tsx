import React from 'react';
import GlassCard from './GlassCard.tsx';
import SpotlightCard from './SpotlightCard.tsx';
import { cardData, spotlightData } from './community-data.ts';
import { Network } from 'lucide-react';

const CommunitySection: React.FC = () => {
  return (
    <section className="relative w-full bg-white text-black font-sans py-24 border-t border-gray-100">
      
      {/* Background - Clean, no blobs */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <header className="mb-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 mb-6">
            <Network className="w-6 h-6 text-black" strokeWidth={1.5} />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-black">
            The Univad Community
          </h2>
          <p className="text-gray-500 max-w-2xl text-lg font-light leading-relaxed">
            Empowering the next generation of innovators. <br className="hidden md:block"/> Join a global network to lead, learn, and grow.
          </p>
        </header>

        {/* Main Content Cards */}
        <div className="mb-32">
          {cardData.map((card, index) => (
            <GlassCard 
              key={card.id} 
              data={card} 
              reverse={index % 2 !== 0} 
            />
          ))}
        </div>

        {/* Ambassador Spotlights Section */}
        <div className="relative">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Global Impact</span>
                <h3 className="text-3xl md:text-4xl font-bold text-black">Ambassador Spotlights</h3>
            </div>
            <p className="text-gray-500 max-w-md text-sm md:text-base text-left md:text-right leading-relaxed">
              Meet the student leaders shaping the future of tech on campuses around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spotlightData.map((spotlight) => (
              <SpotlightCard key={spotlight.id} data={spotlight} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CommunitySection;