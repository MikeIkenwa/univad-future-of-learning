import React, { useState } from 'react';
import { GraduationCap, Zap, Search, ChevronRight } from 'lucide-react';
import CourseCard from './CourseCard.tsx';
import { DIPLOMAS, SHORT_COURSES } from './program-data.ts';

const ProgramExplorerSection: React.FC = () => {
  const activeTabClass = "bg-black text-white shadow-lg";
  const inactiveTabClass = "text-gray-500 hover:text-gray-900 hover:bg-gray-100/50";

  const [activeTab, setActiveTab] = useState<'diplomas' | 'short-courses'>('diplomas');
  const activeCourses = activeTab === 'diplomas' ? DIPLOMAS : SHORT_COURSES;

  return (
    <section className="w-full bg-[#f4f4f5] text-gray-900 font-sans py-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section - Modern Minimalist */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-600">Academic Faculties</span>
             </div>
             
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-4">
               Future-Ready <span className="text-gray-400">Skills</span>
             </h2>
             <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
               Explore our curated catalog of accredited diplomas and professional short courses.
             </p>
          </div>

          {/* Tab Switcher - Floating Glass Pill */}
          <div className="bg-white/80 backdrop-blur-xl p-1.5 rounded-full border border-gray-200 shadow-sm flex items-center gap-1">
             <button
               onClick={() => setActiveTab('diplomas')}
               className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${activeTab === 'diplomas' ? activeTabClass : inactiveTabClass}`}
             >
               <GraduationCap size={16} /> Diplomas
             </button>
             <button
               onClick={() => setActiveTab('short-courses')}
               className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${activeTab === 'short-courses' ? activeTabClass : inactiveTabClass}`}
             >
               <Zap size={16} /> Short Courses
             </button>
          </div>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {activeCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
            
            {/* "View More" Card - Minimalist Wireframe Style */}
            <a 
              href="https://univad.org/programs" 
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center justify-center min-h-[320px] rounded-[2rem] border border-dashed border-gray-300 bg-transparent hover:bg-gray-100/50 transition-all duration-300 cursor-pointer p-6"
            >
              <div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-gray-300 transition-all duration-300 shadow-sm">
                <Search className="w-6 h-6 text-gray-400 group-hover:text-black" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Explore Catalog</h3>
              <p className="text-gray-400 text-sm font-medium mb-6">150+ Additional Programs</p>
              
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                View All <ChevronRight size={14} />
              </div>
            </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramExplorerSection;