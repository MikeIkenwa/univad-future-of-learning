import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Search, 
  PenTool, 
  BarChart, 
  Video 
} from 'lucide-react';
import PhoneMockup from './PhoneMockup.tsx';

const ProjectSection: React.FC = () => {
  const features = [
    {
      icon: <FileText className="w-5 h-5 text-white" />,
      title: "AI Report Gen",
      description: "Generate comprehensive academic reports in seconds."
    },
    {
      icon: <Search className="w-5 h-5 text-white" />,
      title: "Deep Research",
      description: "Access a vast database of academic resources instantly."
    },
    {
      icon: <PenTool className="w-5 h-5 text-white" />,
      title: "Smart Notes",
      description: "Organize thoughts with AI-enhanced note-taking."
    },
    {
      icon: <BarChart className="w-5 h-5 text-white" />,
      title: "Data Analysis",
      description: "Visualize complex data sets effortlessly."
    },
    {
      icon: <Video className="w-5 h-5 text-white" />,
      title: "Virtual Class",
      description: "Connect with peers in your virtual environment."
    }
  ];

  return (
    <section className="relative w-full bg-black text-gray-200 selection:bg-white/20 selection:text-white overflow-hidden font-sans border-t border-slate-900">
      {/* Background Ambience - Changed from fixed to absolute to stay within section */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/[0.04] rounded-full blur-[80px] sm:blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-white/[0.03] rounded-full blur-[60px] sm:blur-[100px]" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-16 pb-8 sm:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Hero Text */}
            <div className="flex-1 text-left lg:text-left max-w-xl mx-auto lg:mx-0 z-20 w-full order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                <Sparkles size={12} className="text-yellow-200" />
                <span className="text-[10px] sm:text-xs font-medium text-gray-300 uppercase tracking-wider">AI-Powered Education</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-4 sm:mb-6">
                Your Campus <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-500">
                  In Your Pocket
                </span>
              </h1>
              
              <p className="text-sm sm:text-lg text-gray-400 mb-6 sm:mb-10 max-w-sm sm:max-w-md leading-relaxed">
                UnivadGo empowers students with cutting-edge AI tools for research, 
                analysis, and classroom collaboration.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a 
                  href="https://www.univad.org/go" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 sm:px-8 sm:py-3.5 bg-white text-black rounded-full text-sm sm:text-base font-bold hover:bg-gray-200 transition-all active:scale-95 flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  Download UnivadGo <ArrowRight size={16} />
                </a>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0">
                  <span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md"><CheckCircle2 size={12} /> iOS</span>
                  <span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md"><CheckCircle2 size={12} /> Android</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="flex-1 relative w-full flex justify-center lg:justify-end z-10 order-1 lg:order-2">
                {/* Decorative glow behind phone */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] h-[300px] sm:h-[500px] bg-white/5 blur-[40px] sm:blur-[80px] rounded-full pointer-events-none" />
                {/* Scale wrapper: smaller on mobile to fix vertical height issues */}
                <div className="transform scale-[0.8] sm:scale-90 lg:scale-100 origin-center">
                  <PhoneMockup />
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div id="features" className="relative z-10 py-16 sm:py-24 bg-neutral-900/30 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3">Everything you need</h2>
            <p className="text-gray-400 max-w-xl text-sm sm:text-base leading-relaxed">
              From reports to virtual classes, UnivadGo unifies your academic toolkit.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-sm sm:text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
            
            {/* CTA Card in Grid */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex flex-col justify-center items-center text-center col-span-1">
                <h3 className="text-sm sm:text-lg font-bold text-white mb-2">Ready?</h3>
                <p className="text-gray-400 mb-4 text-xs sm:text-sm">Join students on UnivadGo.</p>
                <a 
                  href="https://www.univad.org/go" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-white text-black rounded-full text-xs sm:text-sm font-bold hover:bg-gray-200 transition-colors w-full sm:w-auto"
                >
                  Get Started
                </a>
            </div>
          </div>
        </div>
      </div>

      {/* Integration/App Showcase Section */}
      <div className="py-16 sm:py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-r from-gray-900 to-black border border-white/10 rounded-3xl p-8 sm:p-12 overflow-hidden relative">
                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                        Seamlessly integrated with Virtual Classroom
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed max-w-lg">
                        Access your classroom feed, materials, and discussion boards instantly.
                    </p>
                    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                        <li className="flex items-center gap-3 text-gray-300 text-sm">
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0"><CheckCircle2 size={12} /></div>
                            Real-time notifications
                        </li>
                        <li className="flex items-center gap-3 text-gray-300 text-sm">
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0"><CheckCircle2 size={12} /></div>
                            Offline access to study materials
                        </li>
                        <li className="flex items-center gap-3 text-gray-300 text-sm">
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0"><CheckCircle2 size={12} /></div>
                            Integrated AI tutor assistance
                        </li>
                    </ul>
                </div>
                
                {/* Abstract decorative circles */}
                <div className="absolute top-0 right-0 w-[200px] sm:w-[500px] h-[200px] sm:h-[500px] bg-white/[0.02] rounded-full translate-x-1/3 -translate-y-1/4 blur-2xl sm:blur-3xl pointer-events-none" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;