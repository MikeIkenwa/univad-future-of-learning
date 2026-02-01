import React from 'react';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, MoreHorizontal, Play, PieChart, User, GraduationCap, CheckCircle 
} from 'lucide-react';

const VisualAnimation: React.FC = () => {
  return (
    <div className="relative h-[280px] w-full max-w-[320px] sm:h-[500px] sm:max-w-[550px] lg:h-[650px] flex items-center justify-center transition-all duration-500">
      
      {/* Background Circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[220px] h-[220px] sm:w-[450px] sm:h-[450px] rounded-full border border-dashed border-[#4169E1]/20"
      />

      {/* Main Glass Dashboard Card */}
      <motion.div
        initial={{ y: 30, opacity: 0, rotateX: 10 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        className="relative z-20 w-[95%] sm:w-[90%] rounded-[1.5rem] sm:rounded-[2rem] border border-white bg-white/70 p-4 sm:p-6 backdrop-blur-xl shadow-2xl shadow-slate-200/50"
        style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
      >
        {/* Header */}
        <div className="mb-3 sm:mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-[#4169E1] text-white shadow-md shadow-blue-900/10">
                <BrainCircuit className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-sm sm:text-lg font-bold text-slate-800">AI Masterclass</h3>
                <p className="text-[10px] sm:text-xs font-medium text-slate-500">Professional Certificate</p>
              </div>
            </div>
            <button className="rounded-full p-2 text-slate-400 hover:bg-slate-100 transition-colors">
                <MoreHorizontal className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
        </div>
        
        <div className="space-y-3 sm:space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-2xl bg-[#4169E1]/5 p-2.5 sm:p-4 border border-[#4169E1]/10">
                    <p className="text-[9px] sm:text-xs font-semibold text-[#4169E1] mb-0.5">Progress</p>
                    <p className="text-base sm:text-2xl font-bold text-slate-800">82%</p>
                </div>
                 <div className="rounded-2xl bg-slate-50 p-2.5 sm:p-4 border border-slate-100">
                    <p className="text-[9px] sm:text-xs font-semibold text-slate-500 mb-0.5">Grade</p>
                    <p className="text-base sm:text-2xl font-bold text-slate-800">A+</p>
                </div>
            </div>

            {/* Active Module */}
            <div className="relative overflow-hidden rounded-2xl bg-[#0f172a] p-3.5 sm:p-5 text-white shadow-xl shadow-slate-900/10">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                    <PieChart size={60} />
                </div>
                <div className="flex items-start justify-between mb-2 sm:mb-4">
                     <div className="rounded-lg bg-white/10 p-1.5 sm:p-2 backdrop-blur-sm">
                        <Play size={12} fill="currentColor" className="sm:w-4 sm:h-4" />
                    </div>
                    <span className="text-[9px] sm:text-xs font-medium text-slate-400">Continuing</span>
                </div>
                <h4 className="text-sm sm:text-lg font-bold mb-0.5 sm:mb-1">Neural Networks</h4>
                <p className="text-[10px] sm:text-sm text-slate-400">Lesson 4 • 12 mins left</p>
                
                {/* Progress bar */}
                <div className="mt-3 sm:mt-4 h-1 sm:h-1.5 w-full rounded-full bg-white/10">
                    <div className="h-full w-2/3 rounded-full bg-[#4169E1]"></div>
                </div>
            </div>
        </div>

        {/* Floating Decorator */}
         <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-3 -right-2 sm:-top-6 sm:-right-6 z-30 rounded-2xl bg-white p-2 sm:p-3 shadow-xl shadow-slate-200/50 border border-slate-100 scale-[0.8] sm:scale-100"
         >
             <div className="flex items-center gap-2">
                 <div className="relative">
                    <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center">
                        <User size={14} className="text-slate-400 sm:w-5 sm:h-5" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 h-2.5 w-2.5 sm:h-4 sm:w-4 rounded-full bg-[#4169E1] border-2 border-white"></div>
                 </div>
                 <div className="pr-2">
                     <div className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase">Mentor</div>
                     <div className="text-[10px] sm:text-xs font-bold text-slate-800">Dr. Sarah</div>
                 </div>
             </div>
         </motion.div>
      </motion.div>

      {/* Floating 3D Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-1 top-4 sm:top-8 z-30 rounded-xl sm:rounded-2xl border border-white/50 bg-white/80 p-2.5 sm:p-4 backdrop-blur-xl shadow-lg shadow-slate-200/50 scale-[0.75] sm:scale-100 sm:-left-8 sm:top-16 origin-right"
      >
        <div className="flex items-center gap-3 sm:gap-4">
             <div className="flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-500/20">
                <GraduationCap className="w-4 h-4 sm:w-6 sm:h-6" />
             </div>
             <div>
                 <div className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide">Diploma</div>
                 <div className="font-extrabold text-slate-800 text-xs sm:text-lg">Accredited</div>
             </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-1 bottom-4 sm:bottom-8 z-10 rounded-xl sm:rounded-2xl border border-white/50 bg-white/80 p-2.5 sm:p-4 backdrop-blur-xl shadow-lg shadow-slate-200/50 scale-[0.75] sm:scale-100 sm:-right-4 sm:bottom-12 origin-left"
      >
        <div className="flex items-center gap-2 sm:gap-3">
             <div className="rounded-full bg-green-100 p-1 sm:p-1.5 ring-2 sm:ring-4 ring-green-50">
               <CheckCircle size={14} className="text-green-600 sm:w-5 sm:h-5" />
             </div>
             <div>
               <div className="text-[9px] sm:text-xs font-medium text-slate-500">Students</div>
               <div className="flex -space-x-1.5 sm:-space-x-2 mt-1">
                   {[1,2,3,4].map(i => (
                       <div key={i} className={`h-4 w-4 sm:h-6 sm:w-6 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[7px] sm:text-[8px] font-bold text-slate-500 overflow-hidden`}>
                           {i === 4 ? '+2k' : <User size={10} className="mt-0.5 sm:mt-1 sm:w-4 sm:h-4" />}
                       </div>
                   ))}
               </div>
             </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VisualAnimation;