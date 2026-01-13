import React from 'react';
import Section from '../components/ui/Section';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MoveRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

import TrustedBy from '../components/sections/TrustedBy';



const Card = ({ title, items, image, link }) => (
    <Link to={link || "#"}>
        <motion.div
            whileHover={{ y: -4, scale: 1.01, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative bg-neutral-100 rounded-2xl overflow-hidden cursor-pointer border border-neutral-200"
        >
            {/* Image - Secondary & Contained */}
            <div className="p-6 pb-0">
                <div className="aspect-[16/9] overflow-hidden rounded-lg bg-white shadow-sm">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                </div>
            </div>

            <div className="p-8">
                <h3 className="text-2xl font-black text-black mb-6 leading-tight uppercase">{title}</h3>

                {/* Technical Spec List - High Readability */}
                <ul className="flex flex-col gap-1.5 mb-8">
                    {items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                            <span className="text-[#d19a06] font-bold text-lg leading-none pt-[1px] select-none">+</span>
                            <span className="text-sm md:text-base text-neutral-950 font-sans font-medium leading-snug tracking-tight">{item}</span>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-black group-hover:text-[#d19a06] transition-colors">
                    Explore <MoveRight size={14} />
                </div>
            </div>
        </motion.div>
    </Link>
);

const Home = () => {
    return (
        <div className="bg-[#FDFBF7] min-h-screen pt-24 overflow-hidden selection:bg-[#d19a06] selection:text-white">

            {/* HERO SECTION - BRIGHT INDUSTRIAL THEME */}
            <section
                className="relative w-full min-h-[90vh] flex items-center px-6 md:px-12 overflow-hidden bg-white"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 40%, rgba(255, 255, 255, 0) 100%), url('/src/assets/images/hero-factory-bright.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="relative z-20 w-full max-w-[1400px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-4xl flex flex-col items-start text-left"
                    >


                        <h1 className="text-[11vw] md:text-[7.5rem] leading-[0.85] font-black tracking-tighter text-neutral-950 mb-8 -ml-1 md:-ml-2 pl-0 drop-shadow-sm">
                            <span className="text-[#eab308]">SAFETY.</span><br />
                            <span className="text-neutral-950">REINVENTED.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-neutral-950 max-w-xl font-sans font-medium leading-snug tracking-tight mb-10 mt-4 ml-0 pl-0">
                            <span className="uppercase font-bold block mb-2 text-xl md:text-2xl">End to end machine safety solutions.</span>
                            Built for safety. Approved for compliance.
                        </p>

                        {/* Trust Badge */}
                        <div className="relative inline-flex items-center gap-3 px-5 py-2.5 rounded-full overflow-hidden
  bg-white/10
  backdrop-blur-[14px]
  border border-white/30
  shadow-[0_8px_30px_rgba(0,0,0,0.12)]
">

                            {/* glass highlight */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent opacity-60 pointer-events-none" />

                            {/* subtle noise layer for real glass feel */}
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] pointer-events-none" />

                            <ShieldCheck
                                className="text-[#d19a06] w-5 h-5 relative z-10"
                                strokeWidth={2.5}
                            />

                            <span className="text-sm font-medium text-neutral-900 relative z-10">
                                Engineered by Certified Functional Safety Engineers
                            </span>
                        </div>

                    </motion.div>
                </div>
            </section>

            {/* KEY PRODUCTS & SERVICES SECTION */}
            <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-24 pb-16">
                <div className="flex items-end justify-end mb-6">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-black max-w-2xl leading-[0.9] text-right">
                        KEY PRODUCTS & SERVICES
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">

                    {/* LEFT COLUMN: ENGINEERING SERVICES */}
                    <div className="flex flex-col gap-12">
                        <div className="sticky top-28 z-10 bg-[#FDFBF7]/90 backdrop-blur-sm py-4 border-b border-black mb-4">
                            <span className="text-[20px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
                                Engineering Services
                            </span>
                        </div>

                        <Card
                            title="Machine Safety Assessment"
                            items={[
                                "Risk Assessment Audits",
                                "Validation Reports",
                                "Sistema Calculation Reports",
                                "CAT 3 Certificate Generation"
                            ]}
                            image="/src/assets/images/service-assessment.png"
                            link="/services/risk-assessment"
                        />

                        <Card
                            title="Machine Certification"
                            items={[
                                "CE Marking Compliance",
                                "UKCA Regulatory Support",
                                "AS/NZ Standards Compliance"
                            ]}
                            image="/src/assets/images/service-certification.png"
                            link="/services/ce-marking"
                        />

                        <Card
                            title="Training"
                            items={[
                                "CE & UKCA Regulatory Requirements",
                                "EN ISO 12100 Standards",
                                "EN 13489 Safety Protocols"
                            ]}
                            image="/src/assets/images/service-training.png"
                            link="#"
                        />
                    </div>

                    {/* RIGHT COLUMN: SAFETY SYSTEMS */}
                    <div className="flex flex-col gap-12 lg:mt-32">
                        <div className="sticky top-28 z-10 bg-[#FDFBF7]/90 backdrop-blur-sm py-4 border-b border-black mb-4">
                            <span className="text-[20px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
                                Safety Systems
                            </span>
                        </div>

                        <Card
                            title="Advanced 3D Radar Sensor"
                            items={[
                                "Volumetric Detection",
                                "SIL 2 / PL d Certified",
                                "Dust & Smoke Resistant"
                            ]}
                            image="/src/assets/images/product-guarding.png"
                            link="/products/advanced-3d-radar-sensor"
                        />

                        <Card
                            title="Turnkey Projects"
                            items={[
                                "Control Panel Design & Mfg",
                                "Safety Device Integration",
                                "Assembly Line Safety Fitouts"
                            ]}
                            image="/src/assets/images/product-turnkey.png"
                            link="#"
                        />

                        <Card
                            title="Digital Smart LOTO"
                            items={[
                                "Patented Safety Solution",
                                "OSHA Compliant Architecture",
                                "Eliminates Lockout Challenges"
                            ]}
                            image="/src/assets/images/product-loto.png"
                            link="/products/digital-smart-loto-solution"
                        />
                    </div>
                </div>
            </section>

            {/* KEY CUSTOMERS SECTION - INFINITE MARQUEE */}
            <TrustedBy />
        </div>
    );
};

export default Home;
