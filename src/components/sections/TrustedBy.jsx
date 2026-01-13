import React from 'react';
import { BadgeCheck } from 'lucide-react';

// Client Logos
import logo1 from '../../assets/images/1.jpg';
import logo2 from '../../assets/images/2.png';
import logo3 from '../../assets/images/3.png';
import logo4 from '../../assets/images/4.jpg';
import logo5 from '../../assets/images/5.png';
import logo6 from '../../assets/images/6.jpg';
import logo7 from '../../assets/images/7.png';
import logo8 from '../../assets/images/8.jpg';
import logo9 from '../../assets/images/9.jpg';
import logo10 from '../../assets/images/10.png';
import logo11 from '../../assets/images/11.png';
import logo12 from '../../assets/images/12.png';
import logo13 from '../../assets/images/13.png';
import logo14 from '../../assets/images/14.jpg';
import logo15 from '../../assets/images/15.png';
import logo16 from '../../assets/images/16.png';
import logo17 from '../../assets/images/17.png';
import logo18 from '../../assets/images/18.png';

const clientLogos = [
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12,
    logo13, logo14, logo15, logo16, logo17, logo18
];

const TrustedBy = () => {
    return (
        <section className="w-full pt-8 pb-12 bg-white border-t border-neutral-100 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-10">
                <div className="text-center max-w-4xl mx-auto">
                    <BadgeCheck className="w-12 h-12 text-[#d19a06] mx-auto mb-6" />
                    <h2 className="text-2xl font-bold text-neutral-900 mb-8 uppercase tracking-widest">
                        Trusted by Industry Leaders
                    </h2>
                </div>
            </div>

            <div className="relative w-full overflow-hidden group">
                <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
                    {/* Real Client Logos - Two Sets for Loop */}
                    {[0, 1].map((setIndex) => (
                        <div key={setIndex} className="flex gap-16 md:gap-24 items-center mx-8 shrink-0">
                            {clientLogos.map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo}
                                    alt={`Client logo ${index + 1}`}
                                    className="h-10 md:h-14 w-auto max-w-[120px] md:max-w-[180px] object-contain opacity-70 hover:opacity-100 transition-all duration-500 hover:scale-105 grayscale-0 cursor-pointer"
                                />
                            ))}
                        </div>
                    ))}
                </div>

                {/* Fade Gradients */}
                <div className="absolute top-0 left-0 h-full w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 h-full w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 60s linear infinite;
                    width: fit-content;
                }
            `}</style>
        </section>
    );
};

export default TrustedBy;
