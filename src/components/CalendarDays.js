import React from 'react';

const days = [
    { id: 'lu', label: 'L' },
    { id: 'ma', label: 'M' },
    { id: 'mi', label: 'M' },
    { id: 'ju', label: 'J' },
    { id: 'vi', label: 'V' },
    { id: 'sa', label: 'S' },
    { id: 'do', label: 'D' },
];

const CalendarDays = ({ availableDays = [] }) => {
    if (!Array.isArray(availableDays)) {
        return (<div
            className={'text-sm text-secondary '}
        >
            {availableDays}
        </div>)
    }
    return (
        <div className="flex items-center space-x-1">
            {days.map((day) => {
                const isAvailable = availableDays.includes(day.id);
                return (
                    <div
                        key={day.id}
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-xs leading-5
                                ${isAvailable
                                ? 'bg-primary text-background font-medium'
                                : 'bg-muted/30 text-secondary/50'}`}
                    >
                        {day.label}
                    </div>
                );
            })}
        </div>
    );
};

export default CalendarDays;
