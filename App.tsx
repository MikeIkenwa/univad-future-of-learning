import React from 'react';
import AnimatedBackground from './components/AnimatedBackground.tsx';
import Hero from './components/Hero.tsx';
import ProjectSection from './components/ProjectSection.tsx';
import ProgramExplorerSection from './components/ProgramExplorerSection.tsx';
import AnalyticsSection from './components/AnalyticsSection.tsx';
import CommunitySection from './components/CommunitySection.tsx';
import TestimonialSection from './components/TestimonialSection.tsx';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-slate-900 selection:bg-blue-600 selection:text-white">
      <AnimatedBackground />
      
      <div className="relative z-10 flex flex-col w-full">
        {/* Section 1: Univad Hero */}
        <section className="flex min-h-screen flex-col items-center justify-center pt-2 pb-8 sm:pt-8 sm:pb-10">
          <Hero />
        </section>

        {/* Section 2: UnivadGo Mobile App */}
        <ProjectSection />

        {/* Section 3: Univad Program Explorer */}
        <ProgramExplorerSection />

        {/* Section 4: Univad Analytics */}
        <AnalyticsSection />

        {/* Section 5: The UCamp Community */}
        <CommunitySection />

        {/* Section 6: Student Testimonials */}
        <TestimonialSection />
      </div>
    </div>
  );
};

export default App;