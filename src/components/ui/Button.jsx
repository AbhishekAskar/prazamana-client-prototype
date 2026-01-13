import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, className = '', variant = 'primary', ...props }) => {
    const baseStyles = "px-6 py-3 font-semibold transition-all duration-300 rounded-sm";
    const variants = {
        primary: "bg-[#d19a06] text-white hover:bg-[#ca8a04]",
        secondary: "bg-praz-dark text-white hover:bg-gray-700",
        outline: "border-2 border-praz-dark text-praz-dark hover:bg-praz-dark hover:text-white"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02, y: -1, boxShadow: "0 10px 30px -10px rgba(209, 154, 6, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
