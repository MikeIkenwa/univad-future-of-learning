import React from 'react';
import { motion } from 'framer-motion';
import { StatCard } from './StatCard.tsx';
import { statsData } from './analytics-data.ts';

const AnalyticsSection: React.FC = () => {
    return (
        <section className="relative w-full bg-[#030303] text-white overflow-hidden py-24 border-t border-white/10">
            
            {/* Background Grid Pattern */}
            <div 
                className="absolute inset-0 opacity-[0.15] z-0 pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            />
            
            {/* Ambient Lighting Spots - Positioned Absolute to container */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_70%)] pointer-events-none z-0" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(65,105,225,0.08)_0%,rgba(0,0,0,0)_70%)] pointer-events-none z-0" />

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-16 md:gap-24">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
                            <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase">System Operational</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
                            Univad <span className="text-white/40">Analytics</span>
                        </h2>
                    </motion.div>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-sm md:text-base text-white/50 max-w-sm leading-relaxed"
                    >
                        Real-time visualization of our global educational infrastructure. 
                        Tracking engagement, reach, and performance across all active nodes.
                    </motion.p>
                </div>

                {/* Glassmorphic Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {statsData.map((stat, index) => (
                        <StatCard key={stat.id} stat={stat} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AnalyticsSection;