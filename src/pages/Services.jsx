import React from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, ShieldAlert } from 'lucide-react';

const Services = () => {
    return (
        <div className="pt-24 min-h-screen bg-[#FDFBF7]">
            <section className="px-6 md:px-12 py-16 md:py-24 bg-white border-b border-neutral-100">
                <div className="max-w-[1400px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-6xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-black mb-6">
                            OUR <span className="text-[#eab308]">SAFETY</span><br />
                            SERVICES.
                        </h1>
                        <p className="text-xl text-neutral-600 font-medium leading-relaxed">
                            Expert-led compliance and risk solutions designed for industrial safety and global standards.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Section className="bg-[#FDFBF7] !py-16 !md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Service 1: CE Marking */}
                    <motion.div
                        whileHover={{ y: -4, scale: 1.01, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm"
                    >
                        <div className="p-8 md:p-12 flex flex-col h-full items-start">
                            <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                                Global Compliance
                            </span>
                            <h3 className="text-2xl font-black text-black mb-4 group-hover:text-[#d19a06] transition-colors">
                                CE MARKING
                            </h3>
                            <p className="text-neutral-600 leading-relaxed mb-8">
                                Comprehensive support for EU market access, including directive alignment, technical file preparation, and conformity assessment.
                            </p>
                            <div className="mt-auto">
                                <Link to="/services/ce-marking">
                                    <Button variant="outline" className="flex items-center gap-2 group-hover:bg-[#d19a06] group-hover:text-black group-hover:border-[#d19a06]">
                                        View Service <ArrowRight size={18} />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Service 2: Machine Risk Assessment */}
                    <motion.div
                        whileHover={{ y: -4, scale: 1.01, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm"
                    >
                        <div className="p-8 md:p-12 flex flex-col h-full items-start">
                            <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                                Safety Audit
                            </span>
                            <h3 className="text-2xl font-black text-black mb-4 group-hover:text-[#d19a06] transition-colors">
                                MACHINE RISK ASSESSMENT
                            </h3>
                            <p className="text-neutral-600 leading-relaxed mb-8">
                                Systematic hazard identification and risk reduction strategies aligned with ISO 12100 to ensure workplace safety and legal compliance.
                            </p>
                            <div className="mt-auto">
                                <Link to="/services/risk-assessment">
                                    <Button variant="outline" className="flex items-center gap-2 group-hover:bg-[#d19a06] group-hover:text-black group-hover:border-[#d19a06]">
                                        View Service <ArrowRight size={18} />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* SPACER FOR FOOTER */}
            <div className="h-12 bg-[#FDFBF7]"></div>
        </div>
    );
};

export default Services;
