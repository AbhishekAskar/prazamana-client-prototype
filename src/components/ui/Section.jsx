import React from 'react';
import { FadeIn } from '../utils/Reveal';

const Section = ({ children, className = '', id = '' }) => {
    return (
        <section id={id} className={`py-16 md:py-24 px-4 md:px-8 ${className}`}>
            <div className="max-w-7xl mx-auto">
                <FadeIn delay={0.1}>
                    {children}
                </FadeIn>
            </div>
        </section>
    );
};

export default Section;
