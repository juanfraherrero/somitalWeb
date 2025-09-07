'use client';

import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { ACTIVITIES_CAROUSEL } from '@/sections/Activities.section';

export default function ButtonCTA() {
    const handleScroll = () => {
        const element = document.getElementById(ACTIVITIES_CAROUSEL);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            window.scrollBy({
                top: window.innerHeight * 0.8,
                behavior: 'smooth'
            });
        }
    };

    return (
        <button
            onClick={handleScroll}
            className="px-8 py-3 bg-primary hover:bg-primary/80 text-background font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
        >
            <span>¡Explorá tu aventura!</span>
            <ArrowDownIcon className="w-5 h-5 ml-2 animate-bounce" />
        </button>
    );
}
