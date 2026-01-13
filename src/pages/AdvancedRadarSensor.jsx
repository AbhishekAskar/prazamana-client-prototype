import React from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../components/ui/Section';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { Check, ShieldAlert, BadgeCheck, MoveRight, Radar, Scan } from 'lucide-react';
import radarImage from '../assets/images/radar-sensor.jpg';

const AdvancedRadarSensor = () => {
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
                        className="w-full"
                    >
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-black mb-4 leading-tight">
                            ADVANCED 3D <span className="text-[#eab308]">RADAR SENSOR.</span>
                        </h1>
                        <p className="text-sm md:text-base font-medium text-neutral-400 mb-6">
                            Authorized Distribution & Integration by Prazamana
                        </p>
                        <p className="text-lg text-black leading-relaxed max-w-xl">
                            The Advanced 3D Radar Sensor provides volumetric monitoring to detect human presence and objects. Its radar technology maintains reliable performance in harsh industrial environments, ensuring safety integrity even where dust, smoke, or lighting variances would compromise traditional optical sensors.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CHALLENGES SECTION */}
            <Section className="bg-white !py-16 !md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <ShieldAlert className="text-[#d19a06]" size={28} />
                            <h2 className="text-sm font-bold tracking-[0.2em] text-neutral-400 uppercase">
                                The Limitations
                            </h2>
                        </div>
                        <h3 className="text-3xl font-black text-black mb-6">
                            Challenges with Conventional Safety Sensors
                        </h3>
                        <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                            Traditional safety sensing technologies such as light curtains, pressure mats, or vision systems often face limitations in real-world industrial environments:
                        </p>
                    </div>
                    <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100">
                        <ul className="space-y-4">
                            {[
                                "Limited performance in dust, smoke, steam, or poor lighting",
                                "Blind spots caused by fixed detection planes",
                                "Frequent false triggers or missed detections",
                                "Sensitivity to environmental changes",
                                "High maintenance and alignment requirements"
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
            <Section className="bg-neutral-900 text-white !py-10 !md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="flex items-center gap-3 mb-4">
                            <Radar className="text-[#d19a06]" size={28} />
                            <h2 className="text-sm font-bold tracking-[0.2em] text-neutral-400 uppercase">
                                Our Solution
                            </h2>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                            Advanced 3D Radar Sensor
                        </h3>
                        <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                            The Advanced 3D Radar Sensor uses radar-based sensing technology to continuously monitor defined safety zones in three dimensions. It detects human presence, movement, and objects regardless of lighting conditions or environmental interference, ensuring reliable and consistent safety monitoring.
                        </p>
                        <Button className="bg-[#d19a06] text-black border-none hover:bg-white hover:text-black">
                            Technical Specs
                        </Button>
                    </div>
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="rounded-2xl overflow-hidden bg-white p-2 max-w-[80%] lg:max-w-[350px] w-full">
                            <img
                                src={radarImage}
                                alt="Advanced 3D Radar Sensor"
                                className="w-full h-auto object-contain rounded-xl bg-white"
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* FEATURES & BENEFITS COMBINED */}
            <Section className="bg-[#FDFBF7] !py-16 !md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

                    {/* LEFT: KEY FEATURES (Yellow Background) */}
                    <div className="bg-[#EAB308] p-8 md:p-10 rounded-2xl h-full flex flex-col justify-center shadow-sm">
                        <h2 className="text-2xl font-black text-black mb-4">Key Features</h2>
                        <p className="text-neutral-900 mb-8 leading-relaxed font-medium">
                            Next-generation sensing for proactive accident prevention.
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
                                "3D radar-based detection accuracy",
                                "Reliable in dust, smoke, fog, rain",
                                "Wide coverage with configurable zones",
                                "Continuous personnel & object monitoring",
                                "High resistance to interference",
                                "Fast response for real-time safety"
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
                                        <Scan className="text-black" size={16} />
                                    </div>
                                    <p className="text-sm text-neutral-900 font-bold leading-tight">{feature}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT: BENEFITS (List Style) */}
                    <div className="flex flex-col h-full">
                        <h2 className="text-2xl font-black text-black mb-4">Benefits at a Glance</h2>
                        <p className="text-neutral-600 mb-8 leading-relaxed">
                            Why leading industries trust our radar technology.
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
                                { title: "Enhanced Workplace Safety", desc: "Reliable human/object detection reduces accident risks" },
                                { title: "Reduced False Alarms", desc: "Minimizes false triggers from dust or smoke" },
                                { title: "Consistent Performance", desc: "Operates reliably where optical sensors fail" },
                                { title: "Real-Time Detection", desc: "Continuous monitoring for immediate response" },
                                { title: "Lower Maintenance", desc: "Fewer alignment and cleaning requirements" },
                                { title: "Flexible Integration", desc: "Easily integrates with existing safety architectures" }
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

            {/* CTA */}
            {/* CAPSULE CTA */}
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
        </div>
    );
};

export default AdvancedRadarSensor;
