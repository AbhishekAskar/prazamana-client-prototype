import React from 'react';
import Section from '../components/ui/Section';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';

const Products = () => {
    return (
        <div className="pt-24 min-h-screen bg-[#FDFBF7]">
            {/* Page Hero */}
            <section className="relative px-6 md:px-12 py-16 md:py-24 bg-white border-b border-neutral-100">
                <div className="max-w-[1400px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-6xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-black mb-6">
                            OUR <span className="text-[#eab308]">SAFETY</span><br />
                            SOLUTIONS.
                        </h1>
                        <p className="text-xl text-neutral-600 font-medium leading-relaxed">
                            Engineered for compliance, designed for productivity. Explore our range of cutting-edge machine safety systems.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Products Grid */}
            <Section className="bg-[#FDFBF7] !py-16 !md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Product Card 1: Digital Smart LOTO */}
                    <motion.div
                        whileHover={{ y: -4, scale: 1.01, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm"
                    >
                        <div className="p-8 md:p-12 flex flex-col h-full items-start">
                            <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                                OSHA Compliant
                            </span>
                            <h2 className="text-2xl font-black text-black mb-4 group-hover:text-[#d19a06] transition-colors">
                                DIGITAL SMART LOTO
                            </h2>
                            <p className="text-neutral-600 leading-relaxed mb-8">
                                A modern, fail-safe solution designed to digitize traditional energy isolation procedures.
                            </p>
                            <div className="mt-auto">
                                <Link to="/products/digital-smart-loto-solution">
                                    <Button variant="outline" className="flex items-center gap-2 group-hover:bg-[#d19a06] group-hover:text-black group-hover:border-[#d19a06]">
                                        View Product <MoveRight size={18} />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Product Card 2: Advanced 3D Radar Sensor */}
                    <motion.div
                        whileHover={{ y: -4, scale: 1.01, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm"
                    >
                        <div className="p-8 md:p-12 flex flex-col h-full items-start">
                            <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                                3D Presence Detection
                            </span>
                            <h2 className="text-2xl font-black text-black mb-4 group-hover:text-[#d19a06] transition-colors">
                                ADVANCED 3D RADAR SENSOR
                            </h2>
                            <p className="text-neutral-600 leading-relaxed mb-8">
                                A safety-focused sensing solution designed to detect human presence, movement, and objects in industrial environments.
                            </p>
                            <div className="mt-auto">
                                <Link to="/products/advanced-3d-radar-sensor">
                                    <Button variant="outline" className="flex items-center gap-2 group-hover:bg-[#d19a06] group-hover:text-black group-hover:border-[#d19a06]">
                                        View Product <MoveRight size={18} />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
};

export default Products;
