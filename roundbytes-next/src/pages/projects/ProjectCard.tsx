import React, { useState, useRef, useEffect } from 'react';
import throttle from 'lodash.throttle';

type Props = {
    title: string;
    subtitle: string;
    cardImage: string;
    className?: string;
    onClick: () => void;
};

const ProjectCard = ({ title, subtitle, cardImage, className = '', onClick }: Props) => {
    const [hovered, setHovered] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        return () => {
            if (hoverTimeout.current) {
                clearTimeout(hoverTimeout.current);
            }
        };
    }, []);

    const handleMouseEnter = () => {
        if (hoverTimeout.current) {
            clearTimeout(hoverTimeout.current);
        }
        setHovered(true);
    };

    const handleMouseLeave = () => {
        hoverTimeout.current = setTimeout(() => {
            setHovered(false);
        }, 100);
    };

    const throttledMouseMove = throttle((e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        if (containerRef.current) {
            const rect = (containerRef.current as any).getBoundingClientRect();
            setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top - 10 });
        }
    }, 16);

    return (
        <div className={`${className}`}>
            <div className='relative' ref={containerRef} style={{ cursor: 'none' }}>
                <img
                    className='w-full transition-transform duration-300 ease-in-out hover:scale-105 cursor-none'
                    src={cardImage}
                    alt={title}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={throttledMouseMove}
                />
                {hovered && (
                    <div
                        className='absolute text-white bg-black px-12 py-4 rounded whitespace-nowrap pointer-events-none'
                        style={{ left: `${position.x}px`, top: `${position.y}px`, transform: 'translate(-50%, -100%)' }}
                    >
                        View Project
                    </div>
                )}
            </div>
            <h3 className='text-web-h3 font-normal mt-24 mb-12'>
                {title}
            </h3>
            <p className='text-[16px]'>
                {subtitle}
            </p>
        </div>
    );
};

export default ProjectCard;
