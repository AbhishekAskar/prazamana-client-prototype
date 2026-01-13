import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Products', path: '/products' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
            ? 'bg-[#FDFBF7]/90 backdrop-blur-md shadow-sm border-b border-neutral-200/50'
            : 'bg-[#FDFBF7]/90 backdrop-blur-md border-b border-transparent'
            }`}>
            <div className="max-w-[1400px] mx-auto px-6 md:pl-12 md:pr-0">
                <div className="flex items-center justify-between h-24">
                    {/* Logo */}
                    <NavLink to="/" className="flex items-center gap-0 group">
                        <span className="text-2xl font-black tracking-tight text-black">
                            PRAZAMANA
                        </span>
                    </NavLink>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {/* Products Dropdown */}
                        <div className="relative group">
                            <NavLink
                                to="/products"
                                className={({ isActive }) => `text-base font-bold tracking-wide uppercase transition-colors duration-200 hover:text-[#d19a06] flex items-center gap-1 py-4 ${isActive ? 'text-[#d19a06] underline decoration-2 underline-offset-4 decoration-[#d19a06]' : 'text-black'}`}
                            >
                                Products
                            </NavLink>
                            <div className="absolute top-full left-0 w-64 bg-white border border-neutral-100 shadow-lg rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <div className="flex flex-col py-2">
                                    <NavLink
                                        to="/products/digital-smart-loto-solution"
                                        className={({ isActive }) => `px-6 py-3 text-sm font-medium hover:bg-neutral-50 hover:text-[#d19a06] transition-colors ${isActive ? 'text-[#d19a06] font-bold' : 'text-neutral-600'}`}
                                    >
                                        Digital Smart LOTO
                                    </NavLink>
                                    <NavLink
                                        to="/products/advanced-3d-radar-sensor"
                                        className={({ isActive }) => `px-6 py-3 text-sm font-medium hover:bg-neutral-50 hover:text-[#d19a06] transition-colors ${isActive ? 'text-[#d19a06] font-bold' : 'text-neutral-600'}`}
                                    >
                                        Advanced 3D Radar Sensor
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <NavLink
                                to="/services"
                                className={({ isActive }) => `text-base font-bold tracking-wide uppercase transition-colors duration-200 hover:text-[#d19a06] flex items-center gap-1 py-4 ${isActive ? 'text-[#d19a06] underline decoration-2 underline-offset-4 decoration-[#d19a06]' : 'text-black'}`}
                            >
                                Services
                            </NavLink>
                            <div className="absolute top-full left-0 w-64 bg-white border border-neutral-100 shadow-lg rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <div className="flex flex-col py-2">
                                    <NavLink
                                        to="/services/ce-marking"
                                        className={({ isActive }) => `px-6 py-3 text-sm font-medium hover:bg-neutral-50 hover:text-[#d19a06] transition-colors ${isActive ? 'text-[#d19a06] font-bold' : 'text-neutral-600'}`}
                                    >
                                        CE Marking
                                    </NavLink>
                                    <NavLink
                                        to="/services/risk-assessment"
                                        className={({ isActive }) => `px-6 py-3 text-sm font-medium hover:bg-neutral-50 hover:text-[#d19a06] transition-colors ${isActive ? 'text-[#d19a06] font-bold' : 'text-neutral-600'}`}
                                    >
                                        Machine Risk Assessment
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <NavLink to="/about" className={({ isActive }) => `text-base font-bold tracking-wide uppercase transition-colors duration-200 hover:text-[#d19a06] ${isActive ? 'text-[#d19a06] underline decoration-2 underline-offset-4 decoration-[#d19a06]' : 'text-black'}`}>
                            About
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => `text-base font-bold tracking-wide uppercase transition-colors duration-200 hover:text-[#d19a06] ${isActive ? 'text-[#d19a06] underline decoration-2 underline-offset-4 decoration-[#d19a06]' : 'text-black'}`}>
                            Contact Us
                        </NavLink>

                        <NavLink to="/free-consultation" className="bg-[#eab308] text-black px-6 py-2.5 text-base font-bold tracking-wide uppercase hover:bg-[#ca8a04] transition-all rounded-full">
                            free consultation
                        </NavLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-black transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#FDFBF7] border-b border-gray-100 overflow-hidden absolute top-24 left-0 w-full"
                    >
                        <div className="flex flex-col p-8 space-y-6">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) => `text-2xl font-bold hover:text-[#d19a06] uppercase tracking-tight ${isActive ? 'text-[#d19a06]' : 'text-black'}`}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <button className="w-full bg-[#eab308] text-black py-4 font-bold uppercase tracking-wide rounded-full hover:bg-[#ca8a04] transition-colors">
                                Shop Systems
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
