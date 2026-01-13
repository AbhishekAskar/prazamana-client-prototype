import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Check, ShieldAlert, FileSearch, Factory, ClipboardCheck, Activity } from 'lucide-react';
import assessmentImage from '../assets/images/service-assessment.png';

const ServiceRiskAssessment = () => {
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
                        className="max-w-6xl"
                    >

                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-black mb-6 leading-tight md:whitespace-nowrap">
                            MACHINE RISK <span className="text-[#eab308]">ASSESSMENT.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-600 font-medium mb-0">
                            Systematic hazard identification aligned with ISO 12100.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* WHAT IS RISK ASSESSMENT + IMAGE */}
            <Section className="bg-white !py-16 !md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Activity className="text-[#d19a06]" size={28} />
                            <h2 className="text-sm font-bold tracking-[0.2em] text-neutral-400 uppercase">
                                Overview
                            </h2>
                        </div>
                        <h3 className="text-3xl font-black text-black mb-4">
                            What is Machine Risk Assessment?
                        </h3>
                        <p className="text-lg text-neutral-600 mb-4 leading-relaxed">
                            Machine Risk Assessment is the foundation of machine safety. It is a systematic process of identifying hazards, evaluating the risks associated with them, and determining appropriate risk reduction measures.
                        </p>
                        <p className="text-lg text-neutral-600 leading-relaxed">
                            Our process is strictly aligned with <strong>ISO 12100</strong> (Safety of machinery – General principles for design – Risk assessment and risk reduction), ensuring that every potential danger zone is identified and mitigated effectively.
                        </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg bg-neutral-50 p-4 mx-auto max-w-md w-full">
                        <img
                            src={assessmentImage}
                            alt="Safety engineer conducting machine risk assessment"
                            className="w-full h-auto object-contain rounded-lg"
                        />
                    </div>
                </div>
            </Section>

            {/* SIDE-BY-SIDE: WHY CRITICAL + METHODOLOGY */}
            <Section className="bg-[#FDFBF7] !py-16 !md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* LEFT COLUMN: Why is it Critical */}
                    <div className="bg-[#EAB308] p-8 md:p-10 rounded-2xl h-full flex flex-col justify-center shadow-sm">
                        <h2 className="text-2xl font-black text-black mb-4">Why is it Critical?</h2>
                        <p className="text-neutral-900 mb-8 leading-relaxed font-medium">
                            Machine safety is not just a regulatory checklist—it’s a fundamental operational baseline. Ignoring risks leads to severe legal penalties, financial losses, and endangered lives.
                        </p>
                        <div className="flex-1 flex flex-col justify-between gap-4">
                            {[
                                { title: "Worker Safety", desc: "Prevent injuries and fatalities by eliminating hazards." },
                                { title: "Legal Compliance", desc: "Meet national and international safety regulations." },
                                { title: "Accident Prevention", desc: "Proactively address risks before incidents occur." },
                                { title: "Operational Efficiency", desc: "Reduce downtime caused by accidents or stoppages." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02, rotate: 1 }}
                                    className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-sm flex gap-4 items-start cursor-pointer transition-all"
                                >
                                    <div className="mt-1 bg-black/5 p-1.5 rounded-full">
                                        <ShieldAlert className="text-black" size={16} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-black text-base mb-0.5">{item.title}</h4>
                                        <p className="text-sm text-neutral-800 leading-tight font-medium">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Methodology */}
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-black text-black mb-4">How We Conduct Assessments</h2>
                        <p className="text-neutral-600 mb-8 leading-relaxed">
                            We follow a rigorous, data-driven approach to identify and mitigate risks. Our assessments provide actionable intelligence, not just generic observations.
                        </p>
                        <div className="bg-white p-8 rounded-xl border border-neutral-100 shadow-sm flex-1 flex flex-col justify-between">
                            {[
                                { title: "On-site Inspection", desc: "Physical examination of machinery and operations." },
                                { title: "Hazard Identification", desc: "Detecting mechanical, electrical, thermal, and noise hazards." },
                                { title: "Risk Scoring", desc: "Evaluating the severity and probability of harm." },
                                { title: "Safety Recommendations", desc: "Proposing engineering controls and safeguards." },
                                { title: "Documentation", desc: "Detailed reports for audit and compliance." }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-4 cursor-pointer"
                                >
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FDFBF7] border border-neutral-200 flex items-center justify-center text-[#d19a06] font-bold text-sm mt-0.5">
                                        {i + 1}
                                    </span>
                                    <div>
                                        <h4 className="font-bold text-neutral-900 text-sm mb-0.5">{step.title}</h4>
                                        <p className="text-xs text-neutral-600 leading-snug">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* SIDE-BY-SIDE: BENEFITS + WHO NEEDS THIS */}
            <Section className="bg-white !py-16 !md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* LEFT COLUMN: Benefits */}
                    <div>
                        <h2 className="text-2xl font-black text-black mb-4">Benefits at a Glance</h2>
                        <p className="text-neutral-600 mb-8 leading-relaxed">
                            Investing in professional risk assessment delivers immediate return on investment by safeguarding your most valuable assets—your people and your reputation.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { title: "Reduced Accidents", icon: ShieldAlert },
                                { title: "Improved Compliance", icon: ClipboardCheck },
                                { title: "Clear Documentation", icon: FileSearch },
                                { title: "Safer Workplace", icon: Factory }
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

                    {/* RIGHT COLUMN: Who Needs This */}
                    <div className="bg-neutral-900 text-white p-8 md:p-10 rounded-2xl h-full flex flex-col justify-center">
                        <h4 className="text-2xl font-bold mb-4 text-[#eab308]">Who Needs This?</h4>
                        <p className="text-neutral-300 mb-8 leading-relaxed text-sm">
                            Our assessment services are essential for any facility operating heavy machinery, automated lines, or robotic cells.
                        </p>
                        <ul className="space-y-6">
                            {[
                                "New machinery installations requiring safety validation",
                                "Old or refurbished machines being upgraded",
                                "Relocation or modification of existing production lines",
                                "Plants updating safety standards to meet new regulations"
                            ].map((target, i) => (
                                <motion.li
                                    key={i}
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-4 cursor-pointer"
                                >
                                    <Factory className="text-[#d19a06] shrink-0 mt-1" size={18} />
                                    <span className="text-neutral-200 text-base">{target}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            {/* CAPSULE CTA */}
            <div className="py-12 md:py-16 px-6">
                <div className="bg-[#EAB308] rounded-[3rem] px-6 py-10 md:px-8 md:py-12 text-center shadow-2xl mx-auto w-fit flex flex-col gap-6 items-center">
                    <h2 className="text-2xl md:text-4xl font-black text-white leading-tight whitespace-nowrap">
                        Identify risks before incidents happen.
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

export default ServiceRiskAssessment;
