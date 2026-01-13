import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, MessageSquare, Clock } from 'lucide-react';
import Section from '../components/ui/Section';

const Contact = () => {
    return (
        <div className="min-h-screen bg-[#FDFBF7] pt-20">
            {/* Header Section */}
            <Section className="!pb-12 pt-12 md:pt-20">
                <div className="max-w-[1400px] mx-auto text-center">
                    <div className="max-w-4xl mx-auto">

                        <h1 className="text-5xl md:text-7xl font-black text-black mb-6 tracking-tight leading-tight">
                            Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d19a06] to-amber-600">Conversation.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-16">
                            Ready to upgrade your safety standards? Our engineers are ready to provide a tailored assessment.
                        </p>
                    </div>
                </div>
            </Section>

            <Section className="!pt-0 !pb-24">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                        {/* Contact Info Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-5 space-y-8"
                        >
                            {/* Contact Cards */}
                            <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-all group">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center text-[#d19a06] group-hover:bg-[#d19a06] group-hover:text-white transition-all shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-black mb-2">Visit Our HQ</h3>
                                        <p className="text-neutral-600 leading-relaxed">
                                            7A, Survey No. 11/18, Bhumkar Industrial,<br />
                                            Behind Swami Narayan Back Gate,<br />
                                            Narhe, Pune, 411041, India.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-all group">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center text-[#d19a06] group-hover:bg-[#d19a06] group-hover:text-white transition-all shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-black mb-2">Call Us</h3>
                                        <p className="text-neutral-600 mb-2">Mon-Sat from 9am to 6pm.</p>
                                        <a href="tel:+919421697027" className="text-lg font-bold text-black hover:text-[#d19a06] transition-colors inline-flex items-center gap-2">
                                            +91 9421697027 <ArrowRight size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-all group">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center text-[#d19a06] group-hover:bg-[#d19a06] group-hover:text-white transition-all shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-black mb-2">Email Us</h3>
                                        <p className="text-neutral-600 mb-2">We typically reply within 24 hours.</p>
                                        <a href="mailto:sales@prazamana.in" className="text-lg font-bold text-black hover:text-[#d19a06] transition-colors inline-flex items-center gap-2">
                                            sales@prazamana.in <ArrowRight size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>


                        </motion.div>

                        {/* Contact Form Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="lg:col-span-7"
                        >
                            <div className="bg-white rounded-3xl shadow-xl border border-neutral-100 p-8 md:p-12 relative overflow-hidden">
                                {/* Decorative Top Line */}
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#d19a06] to-amber-500"></div>

                                <h3 className="text-3xl font-black text-black mb-2">Send a Message</h3>
                                <p className="text-neutral-500 mb-8">Tell us about your project or safety needs.</p>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-neutral-700 uppercase tracking-wide">Name</label>
                                            <input
                                                type="text"
                                                className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3.5 outline-none focus:border-[#d19a06] focus:bg-white focus:ring-4 focus:ring-[#d19a06]/10 transition-all font-medium"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-neutral-700 uppercase tracking-wide">Company</label>
                                            <input
                                                type="text"
                                                className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3.5 outline-none focus:border-[#d19a06] focus:bg-white focus:ring-4 focus:ring-[#d19a06]/10 transition-all font-medium"
                                                placeholder="Company Ltd."
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-neutral-700 uppercase tracking-wide">Email</label>
                                            <input
                                                type="email"
                                                className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3.5 outline-none focus:border-[#d19a06] focus:bg-white focus:ring-4 focus:ring-[#d19a06]/10 transition-all font-medium"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-neutral-700 uppercase tracking-wide">Phone</label>
                                            <input
                                                type="tel"
                                                className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3.5 outline-none focus:border-[#d19a06] focus:bg-white focus:ring-4 focus:ring-[#d19a06]/10 transition-all font-medium"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                    </div>



                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-neutral-700 uppercase tracking-wide">Message</label>
                                        <textarea
                                            rows="5"
                                            className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3.5 outline-none focus:border-[#d19a06] focus:bg-white focus:ring-4 focus:ring-[#d19a06]/10 transition-all font-medium resize-none"
                                            placeholder="Tell us more about your requirements..."
                                        ></textarea>
                                    </div>

                                    <button className="w-full bg-[#d19a06] text-black font-black uppercase tracking-widest py-4 rounded-xl hover:bg-[#b88605] transform hover:scale-[1.01] transition-all shadow-lg hover:shadow-xl shadow-[#d19a06]/20 flex items-center justify-center gap-3 group">
                                        Send Inquiry
                                        <SendIcon />
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

const SendIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
        <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default Contact;
