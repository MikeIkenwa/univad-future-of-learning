import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronRight, Rocket, Download } from 'lucide-react';
import TrustedLogos from './TrustedLogos.tsx';
import VisualAnimation from './VisualAnimation.tsx';

const Hero: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 relative z-30">
      <div className="grid min-h-[auto] sm:min-h-[80vh] grid-cols-1 items-center gap-6 lg:gap-8 lg:grid-cols-2">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left pt-2 lg:pt-0">
           
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group mb-3 sm:mb-8 inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#4169E1]/30 bg-white px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-sm font-semibold text-[#4169E1] shadow-sm transition-all hover:bg-[#4169E1]/5 hover:border-[#4169E1]"
           >
             <span className="flex items-center gap-1.5">
                <Sparkles size={12} fill="currentColor" className="sm:w-[14px] sm:h-[14px]" />
                <span className="font-bold">New</span>
             </span>
             <span className="h-3 w-[1px] bg-slate-300 sm:h-4"></span>
             <span className="text-slate-600 group-hover:text-[#4169E1] transition-colors truncate max-w-[180px] sm:max-w-none">Admissions Open for 2026</span>
             <ChevronRight size={12} className="text-slate-400 transition-transform group-hover:translate-x-0.5 sm:w-[14px] sm:h-[14px]" />
           </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-2 sm:mb-6 text-3xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 lg:text-7xl"
          >
            Shape Your <br className="hidden sm:block" />
            <span className="font-times italic text-slate-400">Future</span> with <span className="text-[#4169E1]">Univad</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-5 sm:mb-10 max-w-lg text-sm sm:text-lg leading-relaxed text-slate-600 lg:text-xl px-4 sm:px-0"
          >
          ​Univad offers In-demand Diplomas, taught by experts from leading institutions,<span className="font-bold text-slate-900"> powered by AI—</span> welcome to the next generation of learning..
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex w-full flex-col gap-3 sm:gap-4 sm:flex-row sm:justify-center lg:justify-start px-2 sm:px-0"
          >
            <a 
              href="https://www.univad.org/admissions/programs" 
              target="_top"
              className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#4169E1] px-5 py-2.5 sm:px-7 sm:py-3.5 text-xs sm:text-base font-bold text-white shadow-lg shadow-blue-900/10 transition-all hover:bg-[#3658b5] hover:scale-[1.02] active:scale-95 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Rocket size={14} className="sm:w-5 sm:h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                Start Application 
              </span>
            </a>

            <a 
              href="https://www.univad.org/go" 
              target="_top"
              className="group relative flex items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-5 py-2.5 sm:px-7 sm:py-3.5 text-xs sm:text-base font-bold text-slate-700 transition-all hover:border-[#4169E1] hover:text-[#4169E1] active:scale-95 w-full sm:w-auto"
            >
               <Download size={14} className="sm:w-5 sm:h-5 text-slate-400 transition-colors group-hover:text-[#4169E1]" />
               Download App
            </a>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 0.6 }}
             className="mt-6 sm:mt-16 w-full max-w-2xl border-t border-slate-200 pt-4 sm:pt-8"
          >
            <p className="mb-3 sm:mb-6 text-center text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 lg:text-left">
              Partnered with Global Leaders
            </p>
            <TrustedLogos />
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end pb-8 sm:pb-12 lg:pb-0 overflow-visible">
          <VisualAnimation />
        </div>
      </div>
    </div>
  );
};

export default Hero;