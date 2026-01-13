import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Check, Globe, ShieldCheck, FileText, Briefcase, Award } from 'lucide-react';
import ceImage from '../assets/images/ce-compliance.jpg';

const ServiceCeMarking = () => {
    const navigate = useNavigate();
    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* HERO SECTION */}
            <section className="relative px-6 md:px-12 py-16 md:py-20 bg-[#FDFBF7] border-b border-neutral-100">
                <div className="max-w-[1400px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >

                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-black mb-4 leading-tight">
                            CE MARKING <span className="text-[#eab308]">SERVICES.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-600 font-medium mb-8">
                            Your passport to the European Market with guaranteed compliance.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* WHAT IS CE MARKING + IMAGE */}
            <Section className="bg-white !py-16 !md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Globe className="text-[#d19a06]" size={28} />
                            <h2 className="text-sm font-bold tracking-[0.2em] text-neutral-400 uppercase">
                                Overview
                            </h2>
                        </div>
                        <h3 className="text-3xl font-black text-black mb-4">
                            What is CE Marking?
                        </h3>
                        <p className="text-base md:text-lg text-neutral-600 mb-4 leading-relaxed">
                            CE Marking is a mandatory conformity marking for certain products sold within the European Economic Area (EEA). It acts as a declaration that the product complies with all applicable EU regulations regarding safety, health, and environmental protection.
                        </p>
                        <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                            Without this certification, machinery and industrial equipment cannot be legally imported or sold in the EU market. Prazamana simplifies this complex process, ensuring your products meet all necessary directives.
                        </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg mx-auto max-w-md w-full">
                        <img
                            src={ceImage}
                            alt="Industrial machine with CE marking compliance"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </Section>

            {/* SIDE-BY-SIDE: WHY CRITICAL + HOW WE SUPPORT */}
            <Section className="bg-[#FDFBF7] !py-16 !md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* LEFT COLUMN: Why is it Critical */}
                    <div className="bg-[#EAB308] p-8 md:p-10 rounded-2xl h-full flex flex-col justify-center shadow-sm">
                        <h2 className="text-2xl font-black text-black mb-4">Why is CE Marking Critical?</h2>
                        <p className="text-neutral-900 mb-8 leading-relaxed font-medium">
                            Securing CE marking is not just about meeting regulations—it is a strategic advantage. It demonstrates that your machinery meets the highest safety standards, building trust with international partners and minimizing liability risks.
                        </p>
                        <div className="flex-1 flex flex-col justify-between gap-4">
                            {[
                                { title: "Legal Requirement", desc: "Mandatory for selling machinery in the EU/EEA." },
                                { title: "Market Access", desc: "Unlocks trade opportunities with European partners." },
                                { title: "Safety Assurance", desc: "Proves equipment meets rigorous safety standards." },
                                { title: "Global Credibility", desc: "Enhances brand reputation worldwide." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02, rotate: 1 }}
                                    className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-sm flex gap-4 items-start cursor-pointer transition-all"
                                >
                                    <div className="mt-1 bg-black/5 p-1.5 rounded-full">
                                        <ShieldCheck className="text-black" size={16} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-black text-base mb-0.5">{item.title}</h4>
                                        <p className="text-sm text-neutral-800 leading-tight font-medium">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: How We Support You */}
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-black text-black mb-4">How We Support You</h2>
                        <p className="text-neutral-600 mb-8 leading-relaxed">
                            Our team of TÜV-certified functional safety experts guides you through every step of the CE marking journey, from initial assessment to final declaration.
                        </p>
                        <div className="bg-white p-8 rounded-xl border border-neutral-100 shadow-sm flex-1 flex flex-col justify-between">
                            {[
                                "Comprehensive Risk Assessments (ISO 12100)",
                                "Identification of applicable EU Directives",
                                "Conformity assessment procedures",
                                "Technical File preparation & review",
                                "Preparation of Declaration of Conformity (DoC)",
                                "Tailored support for all machinery, from individual units to integrated systems",
                                "Trusted consultants with a proven track record in CE compliance"
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-3 cursor-pointer"
                                >
                                    <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center text-[#d19a06] font-bold text-xs shrink-0">
                                        {i + 1}
                                    </div>
                                    <span className="text-neutral-800 font-medium text-sm">{step}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* SIDE-BY-SIDE: BENEFITS + WHO IS THIS FOR */}
            <Section className="bg-white !py-16 !md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* LEFT COLUMN: Benefits */}
                    <div>
                        <h2 className="text-2xl font-black text-black mb-4">Benefits at a Glance</h2>
                        <p className="text-neutral-600 mb-8 leading-relaxed">
                            Partnering with Prazamana for your CE compliance accelerates your timeline and reduces technical complexity. Our end-to-end management allows you to focus on production while we handle the regulatory heavy lifting.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { title: "Faster Market Entry", icon: Award },
                                { title: "Reduced Risk", icon: ShieldCheck },
                                { title: "Expert Guidance", icon: Briefcase },
                                { title: "End-to-End Handling", icon: FileText }
                            ].map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-gray-50 p-6 rounded-xl border border-neutral-100 text-center hover:shadow-md transition-shadow cursor-pointer"
                                >
                                    <benefit.icon className="w-8 h-8 text-[#d19a06] mx-auto mb-3" />
                                    <h4 className="font-bold text-neutral-900 text-sm">{benefit.title}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Who is this for */}
                    <div className="bg-neutral-900 text-white p-8 md:p-10 rounded-2xl h-full flex flex-col justify-center">
                        <h4 className="text-2xl font-bold mb-4 text-[#d19a06]">Who is this for?</h4>
                        <p className="text-neutral-300 mb-8 leading-relaxed text-sm">
                            Our services are tailored for businesses looking to expand their reach into the European market without getting bogged down by compliance hurdles.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Machinery Manufacturers exporting to EU",
                                "Importers & Exporters of industrial equipment",
                                "System Integrators building complex assembly lines",
                                "Original Equipment Manufacturers (OEMs)"
                            ].map((target, i) => (
                                <motion.li
                                    key={i}
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-4 cursor-pointer"
                                >
                                    <Check className="text-[#d19a06] shrink-0 mt-1" size={18} />
                                    <span className="text-neutral-200 text-base">{target}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            {/* CAPSULE CTA */}
            {/* CAPSULE CTA */}
            <div className="py-12 md:py-16 px-6">
                <div className="bg-[#EAB308] rounded-[3rem] px-6 py-10 md:px-8 md:py-12 text-center shadow-2xl mx-auto w-fit flex flex-col gap-6 items-center">
                    <h2 className="text-2xl md:text-4xl font-black text-white leading-tight whitespace-nowrap">
                        Ensure CE compliance with confidence.
                    </h2>
                    <Button
                        onClick={() => navigate('/free-consultation')}
                        className="bg-black text-white text-base px-10 py-3.5 rounded-full hover:bg-neutral-800 transition-all font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                    >
                        Request Consultation
                    </Button>
                </div>
            </div>

            {/* SPACER FOR FOOTER */}
            <div className="h-12 bg-white"></div>
        </div>
    );
};

export default ServiceCeMarking;
