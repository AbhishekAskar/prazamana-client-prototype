import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import { Check, Calendar, Globe, Award, Shield, Factory, Users, Zap } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-20 min-h-screen bg-[#FDFBF7]">
            {/* 1. Hero / Intro Section */}
            <Section className="!pb-24 pt-0">
                <div className="max-w-[1400px] mx-auto">
                    <div className="max-w-6xl">
                        {/* Header Block */}
                        <div className="mb-16">
                            <h1 className="text-5xl md:text-7xl font-black text-black mb-6 tracking-tight">
                                About Us
                            </h1>
                            <h2 className="text-2xl md:text-4xl font-bold text-neutral-800">
                                Your Safety is Our Priority.
                            </h2>
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                            {/* Mission Block - Visual Break */}
                            <div className="lg:col-span-5 bg-[#d19a06]/5 border-l-4 border-[#d19a06] p-8 md:p-10 rounded-r-2xl">
                                <span className="block text-[#d19a06] font-bold tracking-wider uppercase text-sm mb-4">Our Core Mission</span>
                                <p className="text-xl md:text-2xl font-medium text-neutral-800 leading-relaxed mb-4">
                                    "PRAZAMANA" defines our ultimate goal.
                                </p>
                                <p className="text-neutral-600 leading-relaxed">
                                    It is a Sanskrit word which embodies our core mission: <span className="text-black font-bold">keeping safe</span>.
                                </p>
                            </div>

                            {/* Narrative Block - Story */}
                            <div className="lg:col-span-7 prose prose-lg text-neutral-600 leading-relaxed max-w-none pt-2">
                                <p className="mb-8">
                                    We're more than just a machine safety company; we're a dedicated partner committed to protecting
                                    your workforce and optimizing your operations. Headquartered in <strong className="text-black">Pune, India</strong>,
                                    PRAZAMANA began as a safety consultancy company, leveraging years of industry expertise to provide
                                    insightful safety solutions.
                                </p>

                                <div className="">
                                    <p className="mb-0">
                                        Today, we've expanded our capabilities to include the manufacturing of high-quality machine guards and
                                        perimeter fencing, offering comprehensive, end-to-end safety solutions. As a proud
                                        <span className="text-black font-bold mx-1">"Make in India"</span> initiative, we're dedicated
                                        in contributing to India's manufacturing process while prioritizing the safety of its workforce.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 2. Our Journey (Timeline) */}
            <Section className="bg-white !py-20 md:!py-32 border-y border-neutral-100">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-[#d19a06] font-bold tracking-widest uppercase mb-3 block">Milestones</span>
                        <h2 className="text-4xl md:text-5xl font-black text-black">Our Journey</h2>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        {/* Vertical Line Gradient */}
                        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neutral-100 via-[#d19a06] to-neutral-100 transform md:-translate-x-1/2"></div>

                        {/* 2019 */}
                        <TimelineItem
                            year="2019"
                            title="Machine Safety Services"
                            description="PRAZAMANA was founded in 2019 at Pune (India), with an aim to deliver its customers a safer work environment. A team of Functional Safety Engineers (FSE) certified from TUV focusing on machinery safety for different industries verticals."
                            side="left"
                            icon={<Users size={20} />}
                        />

                        {/* 2020 */}
                        <TimelineItem
                            year="2020"
                            title="Machine Certification & Design Solutions"
                            description="Supporting OEM to comply their machines as per international standards along with all required technical documentations. Expertise in Designing (Electrical & Mechanical), providing concept drawings for complex machines complying to International Safety Standards."
                            side="right"
                            icon={<Shield size={20} />}
                        />

                        {/* 2021 */}
                        <TimelineItem
                            year="2021"
                            title="Manufacturing of Safety Fences & Panels"
                            description="With increase in customer requirement for complete machine safety solutions, started manufacturing setup for fences, guards, and electrical panels, specifically focusing on machine safety."
                            side="left"
                            icon={<Factory size={20} />}
                        />

                        {/* 2022 */}
                        <TimelineItem
                            year="2022"
                            title="TUV Certified Safety Fences"
                            description="With state-of-the-art test equipment, we extended our services for safety testing of electrical panels. Fences for perimeter guarding are certified by TUV for impact test complying to International Standard (EN 14120)."
                            side="right"
                            icon={<Award size={20} />}
                        />

                        {/* 2023 */}
                        <TimelineItem
                            year="2023"
                            title="Global Projects Executed"
                            description="Successfully executed global projects for major clients including FORD Turkey and MICHELIN SPAIN."
                            side="left"
                            icon={<Globe size={20} />}
                        />

                        {/* 2024 */}
                        <TimelineItem
                            year="2024"
                            title="CE Marking of Safety Fences"
                            description="Achieved CE marking compliance for our Safety Fences product line."
                            side="right"
                            icon={<Check size={20} />}
                        />

                        {/* 2025 */}
                        <TimelineItem
                            year="2025"
                            title="Digital Smart LOTO Solution"
                            description="Introduced the cutting-edge DIGITAL SMART LOTO Solution to revolutionize energy isolation procedures."
                            side="left"
                            icon={<Zap size={20} />}
                        />
                    </div>
                </div>
            </Section>

            {/* 3. Expertise / Services Summary */}
            <Section className="!py-20 md:!py-32">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-black text-black mb-8">
                                Specialized in Plant & Machinery Safety
                            </h2>
                            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                Prazamana specializes in overall plant and machinery safety, offering a wide range of services tailored to meet international compliance standards.
                            </p>
                            <div className="bg-gradient-to-br from-neutral-50 to-white p-8 rounded-2xl border border-neutral-100 shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d19a06]/5 rounded-full blur-[50px] transition-all group-hover:bg-[#d19a06]/10"></div>
                                <h3 className="font-bold text-xl mb-4 text-black relative z-10">Expertise You Can Trust</h3>
                                <p className="text-neutral-600 relative z-10">
                                    Prazamana boasts a team of <strong className="text-black">TUV Certified Functional Safety Engineers</strong>,
                                    specializing in tailored safety solutions. We also provide comprehensive safety training to production and maintenance
                                    engineers. Prazamana's machine guards and fences adhere to rigorous safety standards.
                                </p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Machine Risk Assessment",
                                "CE Marking",
                                "Machine Safety Design",
                                "Training on Safety",
                                "Machine Guard Design",
                                "Machine Validation",
                                "Safety Implementation",
                                "3D Radar Sensor",
                                "Safety Fences",
                                "Electrical Panels"
                            ].map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-neutral-100 shadow-sm hover:shadow-md hover:border-[#d19a06]/30 transition-all group"
                                >
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-50 to-amber-100 flex items-center justify-center text-[#d19a06] group-hover:from-[#d19a06] group-hover:to-amber-500 group-hover:text-black transition-all shadow-inner">
                                        <Check size={16} strokeWidth={3} />
                                    </div>
                                    <span className="font-bold text-neutral-800 group-hover:text-black">{service}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

// Helper Component for Timeline
const TimelineItem = ({ year, title, description, side, icon }) => {
    const isRight = side === 'right';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative flex items-center justify-between mb-16 md:mb-24 ${isRight ? 'flex-row-reverse' : ''}`}
        >
            {/* Content Side */}
            <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isRight ? 'md:pl-16 text-left py-4' : 'md:pr-16 md:text-right py-4'}`}>
                <div className="flex flex-col gap-2">
                    <span className={`text-5xl md:text-7xl font-black text-neutral-100 select-none absolute -top-10 md:-top-16 ${isRight ? 'right-auto md:left-16' : 'left-auto md:right-16 left-12'} -z-10`}>
                        {year}
                    </span>
                    <span className="text-[#d19a06] font-bold text-xl md:text-2xl mb-2 block tracking-tight">
                        {year}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-3 leading-tight">{title}</h3>
                    <p className="text-neutral-600 leading-relaxed text-sm md:text-base">{description}</p>
                </div>
            </div>

            {/* Center Dot */}
            <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-white border-4 border-[#d19a06] rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(209,154,6,0.3)] ring-4 ring-yellow-50">
                <div className="text-[#d19a06]">
                    {icon}
                </div>
            </div>

            {/* Empty Side (for layout balance on desktop) */}
            <div className="hidden md:block w-[45%]"></div>
        </motion.div>
    );
};

export default About;
