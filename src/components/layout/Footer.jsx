import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-praz-dark text-gray-300 py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Column 1: Brand & Contact */}
                    <div className="flex flex-col items-start">
                        <h3 className="text-2xl font-bold tracking-widest text-white uppercase mb-2">Prazamana</h3>
                        <p className="text-sm text-gray-500 font-medium mb-8">
                            Industrial Machine Safety Solutions
                        </p>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-2 mb-8">
                            <a href="mailto:sales@prazamana.in" className="text-[15px] font-medium text-gray-300 hover:text-[#eab308] transition-colors">
                                sales@prazamana.in
                            </a>
                            <a href="tel:+919421697027" className="text-[15px] font-medium text-gray-300 hover:text-[#eab308] transition-colors">
                                +91 9421697027
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/5 hover:bg-[#eab308] hover:text-black transition-all rounded-md group">
                                <Linkedin size={18} className="text-gray-400 group-hover:text-black transition-colors" />
                            </a>
                            <a href="mailto:sales@prazamana.in" className="p-2 bg-white/5 hover:bg-[#eab308] hover:text-black transition-all rounded-md group">
                                <Mail size={18} className="text-gray-400 group-hover:text-black transition-colors" />
                            </a>
                            <a href="https://wa.me/919421697027" className="p-2 bg-white/5 hover:bg-[#eab308] hover:text-black transition-all rounded-md group">
                                <MessageCircle size={18} className="text-gray-400 group-hover:text-black transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col items-start md:pl-12">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6 border-b border-gray-800 pb-2">Quick Links</h4>
                        <ul className="space-y-4 text-[15px]">
                            <li><Link to="/products" className="hover:text-[#eab308] transition-colors">Products</Link></li>
                            <li><Link to="/services" className="hover:text-[#eab308] transition-colors">Services</Link></li>
                            <li><Link to="/about" className="hover:text-[#eab308] transition-colors">About</Link></li>
                            <li><Link to="/contact" className="hover:text-[#eab308] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Office & Works */}
                    <div className="flex flex-col items-start">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6 border-b border-gray-800 pb-2">Office & Works</h4>
                        <div className="text-[15px] leading-relaxed text-gray-300">
                            <p>
                                7A, Survey No. 11/18, Bhumkar Industrial,<br />
                                Behind Swami Narayan Back Gate,<br />
                                Narhe, Pune, 411041, India.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom: Copyright */}
                <div className="border-t border-white/5 pt-8 text-center">
                    <p className="text-sm text-gray-600">
                        &copy; 2026 Prazamana Industrial Safety. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
