import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Menu, User, BookOpen, BarChart3, Search } from 'lucide-react';

const PhoneMockup: React.FC = () => {
  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl flex flex-col overflow-hidden">
      {/* Notch / Camera */}
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      <div className="relative rounded-[2rem] overflow-hidden w-full h-full bg-slate-950 flex flex-col">
        
        {/* Status Bar */}
        <div className="absolute top-0 w-full h-8 bg-slate-950 z-20 flex justify-between items-center px-6 pt-2">
            <span className="text-[10px] text-white font-bold">9:41</span>
            <div className="flex gap-1.5">
                <div className="w-4 h-2.5 bg-white rounded-[2px]" />
                <div className="w-0.5 h-2.5 bg-white/30 rounded-[1px]" />
            </div>
        </div>

        {/* Dynamic Island Area */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20"></div>

        {/* App UI Header */}
        <div className="pt-12 pb-4 px-5 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-white/5">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">U</div>
                    <span className="text-white font-bold text-lg">UnivadGo</span>
                </div>
                <Bell size={18} className="text-gray-400" />
            </div>
            <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input disabled className="w-full bg-slate-800/50 rounded-xl py-2 pl-9 pr-4 text-xs text-gray-300 border border-white/5" placeholder="Search resources..." />
            </div>
        </div>

        {/* App Content */}
        <div className="flex-1 overflow-hidden relative p-4 space-y-4">
            {/* Greeting Card */}
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-blue-600 rounded-2xl p-4 text-white shadow-lg shadow-blue-900/20"
            >
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h4 className="font-bold text-sm">Next Class</h4>
                        <p className="text-[10px] opacity-80">Starting in 15 mins</p>
                    </div>
                    <div className="bg-white/20 p-1.5 rounded-lg">
                        <BarChart3 size={14} />
                    </div>
                </div>
                <div className="h-1 w-full bg-black/20 rounded-full mt-2">
                    <div className="h-full w-3/4 bg-white rounded-full"></div>
                </div>
            </motion.div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/50 p-3 rounded-2xl border border-white/5">
                    <BookOpen size={16} className="text-purple-400 mb-2" />
                    <div className="text-xs font-medium text-gray-200">Library</div>
                    <div className="text-[9px] text-gray-500">24 new papers</div>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-2xl border border-white/5">
                    <User size={16} className="text-emerald-400 mb-2" />
                    <div className="text-xs font-medium text-gray-200">Mentor</div>
                    <div className="text-[9px] text-gray-500">Online now</div>
                </div>
            </div>

            {/* Recent Activity List */}
            <div className="space-y-3 pt-2">
                <h5 className="text-xs font-semibold text-gray-400 pl-1">Recent</h5>
                {[1, 2, 3].map((i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5"
                    >
                        <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-[10px] text-gray-400 font-mono">
                            PDF
                        </div>
                        <div className="flex-1">
                            <div className="h-2 w-24 bg-slate-800 rounded mb-1.5"></div>
                            <div className="h-1.5 w-12 bg-slate-800/50 rounded"></div>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
        </div>

        {/* Navigation Bar */}
        <div className="h-16 bg-slate-900 border-t border-white/5 flex justify-around items-center px-2">
            <div className="p-2 text-blue-500"><Menu size={20} /></div>
            <div className="p-2 text-gray-600"><Search size={20} /></div>
            <div className="p-2 text-gray-600"><User size={20} /></div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-white rounded-full z-30"></div>
      </div>
    </div>
  );
};

export default PhoneMockup;