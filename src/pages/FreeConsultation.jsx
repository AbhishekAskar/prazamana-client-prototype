import React from 'react';
import Section from '../components/ui/Section';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Clock, Award, ArrowRight } from 'lucide-react';

const FreeConsultation = () => {
    return (
        <div className="pt-24 min-h-screen bg-[#FDFBF7]">
            {/* HERO SECTION */}
            <Section className="!pb-12 pt-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <span className="text-[#d19a06] font-bold tracking-widest uppercase mb-4 block text-sm md:text-base">
                            Safety First
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tight leading-tight">
                            Get a Free <span className="text-[#d19a06]">Safety Consultation</span>
                        </h1>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                            Talk to our certified safety experts and identify risks before incidents happen. No obligations, just expert advice.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* FORM SECTION */}
            <Section className="!pt-0 !pb-24">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-3xl shadow-xl border border-neutral-100 p-8 md:p-12 relative overflow-hidden"
                    >
                        {/* Decorative Top Line */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#d19a06] to-amber-500"></div>

                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            {/* Personal Info */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-black border-b border-neutral-100 pb-2">01. Contact Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input label="Full Name" placeholder="John Doe" />
                                    <Input label="Work Email" type="email" placeholder="john@company.com" />
                                    <Input label="Phone Number" type="tel" placeholder="+91 98765 43210" />
                                    <Input label="Company Name" placeholder="Company Ltd." />
                                </div>
                            </div>

                            {/* Requirements */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-black border-b border-neutral-100 pb-2">02. Requirements</h3>

                                <div className="space-y-4">
                                    <label className="block text-sm font-bold text-gray-700">Industry</label>
                                    <select className="w-full bg-neutral-50 border border-neutral-200 p-3.5 rounded-sm focus:border-[#d19a06] focus:ring-0 outline-none transition-colors font-medium text-neutral-700 appearance-none">
                                        <option value="" disabled selected>Select Industry</option>
                                        <option value="manufacturing">Manufacturing</option>
                                        <option value="automotive">Automotive</option>
                                        <option value="warehousing">Warehousing / Logistics</option>
                                        <option value="pharma">Pharma / FMCG</option>
                                        <option value="heavy-engineering">Heavy Engineering</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-4">
                                    <label className="block text-sm font-bold text-gray-700">Consultation Type</label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {['Product', 'Service', 'Compliance / Certification', 'Unsure (Need Guidance)'].map((type) => (
                                            <label key={type} className="flex items-center gap-3 p-3 border border-neutral-200 rounded-lg cursor-pointer hover:border-[#d19a06] hover:bg-neutral-50 transition-all group">
                                                <input type="radio" name="consultation_type" className="w-5 h-5 text-[#d19a06] focus:ring-[#d19a06] border-gray-300" />
                                                <span className="text-sm font-medium text-neutral-700 group-hover:text-black">{type}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="block text-sm font-bold text-gray-700">Interested Products</label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {['Advanced 3D Radar Sensor', 'Digital Smart LOTO', 'Machine Safety Fences', 'Not Sure Yet'].map((product) => (
                                            <label key={product} className="flex items-center gap-3 p-3 border border-neutral-200 rounded-lg cursor-pointer hover:border-[#d19a06] hover:bg-neutral-50 transition-all group">
                                                <input type="checkbox" className="w-5 h-5 text-[#d19a06] rounded focus:ring-[#d19a06] border-gray-300" />
                                                <span className="text-sm font-medium text-neutral-700 group-hover:text-black">{product}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="block text-sm font-bold text-gray-700">Interested Services</label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {['CE / UKCA Certification', 'Machine Risk Assessment', 'Safety Training', 'Old Machine Safety Upgrade'].map((service) => (
                                            <label key={service} className="flex items-center gap-3 p-3 border border-neutral-200 rounded-lg cursor-pointer hover:border-[#d19a06] hover:bg-neutral-50 transition-all group">
                                                <input type="checkbox" className="w-5 h-5 text-[#d19a06] rounded focus:ring-[#d19a06] border-gray-300" />
                                                <span className="text-sm font-medium text-neutral-700 group-hover:text-black">{service}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-gray-700">Message / Requirements</label>
                                    <textarea
                                        rows="4"
                                        className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3.5 outline-none focus:border-[#d19a06] focus:bg-white focus:ring-4 focus:ring-[#d19a06]/10 transition-all font-medium resize-none placeholder:text-neutral-400"
                                        placeholder="Briefly describe your requirement, machine type, or safety concern…"
                                    ></textarea>
                                </div>
                            </div>

                            <Button className="w-full bg-[#d19a06] text-black font-black uppercase tracking-widest py-4 rounded-xl hover:bg-[#b88605] hover:text-white transform transition-all shadow-lg hover:shadow-xl shadow-[#d19a06]/20 flex items-center justify-center gap-3 h-auto text-sm md:text-base">
                                Request Free Consultation
                                <ArrowRight size={20} />
                            </Button>
                        </form>

                        {/* Trust Signals */}
                        <div className="mt-8 pt-8 border-t border-neutral-100 flex flex-wrap justify-center gap-6 md:gap-12">
                            <div className="flex items-center gap-2 text-neutral-500 font-medium text-sm md:text-base">
                                <ShieldCheck size={20} className="text-[#d19a06]" />
                                Certified Functional Safety Engineers
                            </div>
                            <div className="flex items-center gap-2 text-neutral-500 font-medium text-sm md:text-base">
                                <Award size={20} className="text-[#d19a06]" />
                                Trusted by Industrial Leaders
                            </div>
                            <div className="flex items-center gap-2 text-neutral-500 font-medium text-sm md:text-base">
                                <Clock size={20} className="text-[#d19a06]" />
                                Response within 24–48 hours
                            </div>
                        </div>

                    </motion.div>
                </div>
            </Section>
        </div>
    );
};

export default FreeConsultation;
