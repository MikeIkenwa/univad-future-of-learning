import React from 'react';
import { Quote } from 'lucide-react';
import { Spotlight } from './community-data.ts';

interface SpotlightCardProps {
  data: Spotlight;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ data }) => {
  return (
    <div className="h-full flex flex-col bg-white border border-gray-200 rounded-[2rem] p-8 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 group">
        
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-100 bg-gray-50">
                    <img 
                    src={data.imageUrl} 
                    alt={data.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    />
                </div>
                <div>
                    <h3 className="text-black font-bold text-lg leading-tight">{data.name}</h3>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">{data.role}</p>
                </div>
            </div>
            <Quote className="text-gray-200 fill-gray-50 w-8 h-8 transform scale-x-[-1]" />
        </div>

        {/* Quote */}
        <div className="flex-grow mb-8">
            <p className="text-lg text-gray-800 font-serif italic leading-relaxed">
                "{data.quote}"
            </p>
        </div>

        {/* Footer Info */}
        <div className="pt-6 border-t border-gray-100 mt-auto">
            <p className="text-sm text-gray-500 leading-relaxed font-light">
                {data.about}
            </p>
        </div>
    </div>
  );
};

export default SpotlightCard;