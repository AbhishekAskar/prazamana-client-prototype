import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Section from '../components/ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/ui/Button';
import { Check, ShieldAlert, BadgeCheck, MoveRight, Lock, LockOpen } from 'lucide-react';
import Input from '../components/ui/Input';
import lotoImage from '../assets/images/loto-solution.jpg';

const DigitalSmartLoto = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [isUnlocked, setIsUnlocked] = useState(false);

    useEffect(() => {
        if (searchParams.get('unlocked') === 'true') {
            setIsUnlocked(true);
            setTimeout(() => {
                document.getElementById('key-features')?.scrollIntoView({ behavior: 'smooth' });
            }, 500);
        }
    }, [searchParams]);



    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* HERO SECTION */}
            {/* HERO SECTION */}
            {/* HERO SECTION */}
            <section className="relative px-6 md:px-12 py-16 md:py-20 bg-[#FDFBF7] border-b border-neutral-100">
                <div className="max-w-[1400px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full"
                    >
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-black mb-4 leading-tight">
                            DIGITAL SMART <span className="text-[#eab308]">LOTO SOLUTION.</span>
                        </h1>
                        <p className="text-sm md:text-base font-medium text-neutral-400 mb-6">
                            Fully compliant with OSHA guidelines
                        </p>
                        <p className="text-lg text-black leading-relaxed max-w-xl">
                            Digital Smart LOTO provides a connected energy isolation system to digitize lockout procedures. By replacing manual logging with Bluetooth-enabled smart hardware and cloud tracking, the solution eliminates human error and ensures auditable safety integrity across complex industrial workflows.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CHALLENGES SECTION */}
            <Section className="bg-white !py-16 !md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <ShieldAlert className="text-[#d19a06]" size={28} />
                            <h2 className="text-sm font-bold tracking-[0.2em] text-neutral-400 uppercase">
                                The Challenge
                            </h2>
                        </div>
                        <h3 className="text-3xl font-black text-black mb-6">
                            Challenges with Traditional LOTO
                        </h3>
                        <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                            Traditional LOTO practices rely heavily on manual processes and physical systems, which often result in recurring operational and safety issues:
                        </p>
                    </div>
                    <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100">
                        <ul className="space-y-4">
                            {[
                                "Managing a large number of physical locks and tags",
                                "Paper-based permits and logbooks prone to errors",
                                "No real-time tracking or visibility of LOTO activities",
                                "Time-consuming audits and compliance checks",
                                "Human errors such as lost keys or incorrect isolation"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-red-500" />
                                    <span className="text-neutral-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            {/* SOLUTION SECTION - WITH IMAGE */}
            <Section className="bg-neutral-900 text-white !py-16 !md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="flex items-center gap-3 mb-6">
                            <Lock className="text-[#d19a06]" size={28} />
                            <h2 className="text-sm font-bold tracking-[0.2em] text-neutral-400 uppercase">
                                Our Solution
                            </h2>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
                            Digital Smart LOTO
                        </h3>
                        <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                            Digital Smart LOTO combines Bluetooth-enabled smart hardware with a secure cloud platform, mobile application, and desktop interface to deliver a connected, auditable, and highly secure energy isolation management system.
                        </p>
                        <Button
                            onClick={() => navigate('/unlock-details?returnUrl=/products/digital-smart-loto-solution')}
                            className={`bg-[#d19a06] text-black border-none hover:bg-white hover:text-black transition-all ${isUnlocked ? 'hidden' : ''}`}
                        >
                            Explore More
                        </Button>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="rounded-2xl overflow-hidden bg-white p-2">
                            <img
                                src={lotoImage}
                                alt="Digital Smart LOTO System Diagram"
                                className="w-full h-auto rounded-xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Section>


            {/* UNLOCKED CONTENT */}
            {isUnlocked && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {/* KEY FEATURES */}
                    {/* KEY FEATURES & BENEFITS MERGED */}
                    <Section id="key-features" className="bg-[#FDFBF7] !py-16 !md:py-24">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                            {/* LEFT COLUMN: Key Features (Yellow Background) */}
                            <div className="bg-[#EAB308] p-8 md:p-10 rounded-2xl h-full flex flex-col justify-center shadow-sm">
                                <h2 className="text-2xl font-black text-black mb-4">Key Features</h2>
                                <p className="text-neutral-900 mb-8 leading-relaxed font-medium">
                                    Built for enterprise-grade safety and compliance management.
                                </p>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={{
                                        hidden: {},
                                        visible: { transition: { staggerChildren: 0.1 } }
                                    }}
                                    className="flex-1 flex flex-col justify-between gap-4"
                                >
                                    {[
                                        "Cloud-based secure data storage",
                                        "Real-time activity tracking",
                                        "Digital audit trails & reports",
                                        "Remote access for supervisors",
                                        "Automated lockout workflows",
                                        "Seamless EHS integration",
                                        "Face-scan verification",
                                        "Try-out verification docs"
                                    ].map((feature, i) => (
                                        <motion.div
                                            key={i}
                                            variants={{
                                                hidden: { opacity: 0, x: -10 },
                                                visible: { opacity: 1, x: 0 }
                                            }}
                                            whileHover={{ scale: 1.02, x: 5 }}
                                            className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-sm flex gap-4 items-start cursor-pointer transition-all"
                                        >
                                            <div className="mt-1 bg-black/5 p-1.5 rounded-full">
                                                <Check className="text-black" size={16} />
                                            </div>
                                            <p className="text-sm text-neutral-900 font-bold leading-tight">{feature}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* RIGHT COLUMN: Benefits (List Style) */}
                            <div className="flex flex-col h-full">
                                <h2 className="text-2xl font-black text-black mb-4">Benefits at a Glance</h2>
                                <p className="text-neutral-600 mb-8 leading-relaxed">
                                    Switching to a digital LOTO system provides immediate operational advantages.
                                </p>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={{
                                        hidden: {},
                                        visible: { transition: { staggerChildren: 0.1 } }
                                    }}
                                    className="bg-white p-8 rounded-xl border border-neutral-100 shadow-sm flex-1 flex flex-col justify-between"
                                >
                                    {[
                                        { title: "Improved Safety", desc: "Reduced human error through digital safeguards" },
                                        { title: "Faster Process", desc: "Reduced downtime with streamlined workflows" },
                                        { title: "Paperless", desc: "Elimination of physical logbooks and permits" },
                                        { title: "Real-time Monitoring", desc: "Instant status updates from anywhere" },
                                        { title: "Simplified Audits", desc: "Compliance-ready data at your fingertips" },
                                        { title: "Enhanced Control", desc: "Better accountability and authorization" },
                                        { title: "Fail-Safe Engineering", desc: "Proprietary technology ensuring error-free isolation" },
                                        { title: "Process Industry Ready", desc: "Advanced platform designed for complex industrial needs" },
                                        { title: "Integrated Ecosystem", desc: "Seamless sync between cloud, mobile, and hardware" }
                                    ].map((benefit, i) => (
                                        <motion.div
                                            key={i}
                                            variants={{
                                                hidden: { opacity: 0, x: 10 },
                                                visible: { opacity: 1, x: 0 }
                                            }}
                                            whileHover={{ x: 5 }}
                                            className="flex items-start gap-4 cursor-pointer mb-2"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-[#d19a06] font-bold text-sm shrink-0 mt-0.5">
                                                0{i + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-neutral-900 text-base">{benefit.title}</h4>
                                                <p className="text-xs text-neutral-500 font-medium">{benefit.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </Section>

                    {/* CAPSULE CTA (UNLOCKED ONLY) */}
                    <div className="py-12 md:py-16 px-6">
                        <div className="bg-neutral-900 rounded-[3rem] px-6 py-10 md:px-8 md:py-12 text-center shadow-2xl mx-auto w-fit flex flex-col gap-6 items-center">
                            <h2 className="text-2xl md:text-4xl font-black text-white leading-tight whitespace-nowrap">
                                Identify risks before incidents happen.
                            </h2>
                            <Button
                                onClick={() => navigate('/free-consultation')}
                                className="bg-[#d19a06] text-black text-base px-10 py-3.5 rounded-full hover:bg-white hover:text-black transition-all font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                            >
                                Request Consultation
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}




            {/* SPACER */}
            <div className="h-10 md:h-12 bg-white"></div>


        </div>
    );
};

export default DigitalSmartLoto;
