import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { StatItem } from './analytics-data.ts';

interface StatCardProps {
    stat: StatItem;
    index: number;
}

export const StatCard: React.FC<StatCardProps> = ({ stat, index }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const controls = animate(count, stat.value, { duration: 2.5, delay: 0.5, ease: "circOut" });
        return controls.stop;
    }, [stat.value]);

    useEffect(() => {
        const unsubscribe = rounded.on("change", (latest) => {
            setDisplayValue(latest);
        });
        return unsubscribe;
    }, [rounded]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20"
        >
            <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-white/5 text-white/80 group-hover:text-white group-hover:bg-white/10 transition-colors">
                    <stat.icon size={24} />
                </div>
                {index === 0 && (
                     <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse" />
                )}
            </div>
            
            <div className="space-y-1">
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    {displayValue.toLocaleString()}{stat.suffix}
                </h3>
                <p className="text-sm font-medium text-white/40 uppercase tracking-wider">
                    {stat.title}
                </p>
            </div>

            {/* Decorator Gradient */}
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl group-hover:bg-white/10 transition-colors pointer-events-none" />
        </motion.div>
    );
};