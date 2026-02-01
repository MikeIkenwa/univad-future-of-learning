import React from 'react';
import { 
  Chrome, Boxes, Cloud, Cpu, Server, Smartphone, Monitor, Globe 
} from 'lucide-react';

const logos = [
  { name: 'Google', icon: Chrome },
  { name: 'Microsoft', icon: Boxes },
  { name: 'Amazon', icon: Cloud },
  { name: 'Intel', icon: Cpu },
  { name: 'Oracle', icon: Server },
  { name: 'Apple', icon: Smartphone },
  { name: 'IBM', icon: Monitor },
  { name: 'Meta', icon: Globe },
];

const TrustedLogos: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Side Masks */}
      <div className="absolute left-0 top-0 z-10 h-full w-8 sm:w-12 bg-gradient-to-r from-white to-transparent"></div>
      <div className="absolute right-0 top-0 z-10 h-full w-8 sm:w-12 bg-gradient-to-l from-white to-transparent"></div>
      
      <div className="flex w-[200%] animate-scroll gap-8 sm:gap-16 md:gap-24">
        {[...logos, ...logos, ...logos].map((Logo, index) => (
          <div 
            key={index} 
            className="group flex flex-shrink-0 items-center gap-2 sm:gap-3 transition-all duration-300"
          >
            <Logo.icon className="text-slate-600 group-hover:text-[#4169E1] transition-colors w-6 h-6 sm:w-7 sm:h-7" />
            <span className="text-lg sm:text-xl font-bold text-slate-600 group-hover:text-[#0f172a] transition-colors">{Logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedLogos;