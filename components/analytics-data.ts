import { BookOpen, Users, Globe, Clock, LucideIcon } from 'lucide-react';

export interface StatItem {
    id: string;
    title: string;
    value: number;
    suffix: string;
    icon: LucideIcon;
}

export const statsData: StatItem[] = [
    {
        id: '1',
        title: 'Active Modules',
        value: 200,
        suffix: '+',
        icon: BookOpen,
    },
    {
        id: '2',
        title: 'Total Learners',
        value: 14500,
        suffix: '',
        icon: Users,
    },
    {
        id: '3',
        title: 'Global Regions',
        value: 32,
        suffix: '',
        icon: Globe,
    },
    {
        id: '4',
        title: 'Stream Hours',
        value: 250000,
        suffix: '+',
        icon: Clock,
    },
];