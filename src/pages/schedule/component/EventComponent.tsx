import React from 'react';

interface EventType {
    start: string | Date;
    end: string | Date;
    className?: string;
    title: string;
    taskCount?: number;
    duration?: string;
}

interface EventComponentProps {
    event: EventType;
}

const EventComponent: React.FC<EventComponentProps> = ({ event }) => {
    const { title, taskCount = 0, duration = '', className = '' } = event;

    return (
        <div className={`fc-event ${className}`}>
            <span className="event-name">{title}</span>
            <div className="task-details">
                <span className="count">{taskCount} {taskCount === 1 ? 'Task' : 'Tasks'}</span>
                <span className="duration">{duration}</span>
            </div>
        </div>
    );
};

export default EventComponent;
