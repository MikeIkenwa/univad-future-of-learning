import React from 'react';
import { ArrowUpRight, Users, Clock } from 'lucide-react';
import { Course, ThemeMap } from './program-data.ts';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  // We extract just the text color from the map, ignoring the background classes to keep the design clean/glassy
  const theme = ThemeMap[course.colorTheme];
  const Icon = course.icon;

  return (
    <a
      href={course.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col h-full bg-white/60 backdrop-blur-md rounded-[2rem] border border-gray-200 p-6 transition-all duration-500 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-gray-300 hover:-translate-y-1"
    >
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
            <div className={`p-3 rounded-2xl bg-white border border-gray-100 shadow-sm transition-transform duration-500 group-hover:scale-105 ${theme.text}`}>
                <Icon size={24} strokeWidth={1.5} />
            </div>
            <div className={`px-3 py-1 rounded-full border border-gray-100 bg-white/50 text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:border-gray-200 transition-colors`}>
                {course.category}
            </div>
        </div>

        {/* Content */}
        <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-black transition-colors">
                {course.title}
            </h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                {course.desc}
            </p>
        </div>

        {/* Meta & Footer */}
        <div className="pt-6 border-t border-gray-100/50 mt-auto">
            <div className="flex items-center justify-between text-xs text-gray-400 font-medium mb-5">
                <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-gray-300" />
                    {course.duration}
                </div>
                <div className="flex items-center gap-1.5">
                    <Users size={14} className="text-gray-300" />
                    {course.students.toLocaleString()} enrolled
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex -space-x-1">
                   {/* Minimal feature dots instead of text tags for a cleaner look */}
                   {course.features.map((_, i) => (
                       <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300 ring-2 ring-white" />
                   ))}
                </div>
                <div className={`flex items-center gap-2 text-sm font-bold ${theme.text} opacity-80 group-hover:opacity-100 transition-opacity`}>
                    View Details <ArrowUpRight size={16} />
                </div>
            </div>
        </div>
    </a>
  );
};

export default CourseCard;