import React, { forwardRef } from 'react';

const Input = forwardRef(({ label, error, className = '', ...props }, ref) => {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-bold text-gray-700 mb-1">
                    {label}
                </label>
            )}
            <input
                ref={ref}
                className={`w-full bg-gray-50 border border-gray-200 p-3 rounded-sm focus:border-[#d19a06] focus:ring-0 outline-none transition-colors ${error ? 'border-red-500' : ''
                    } ${className}`}
                {...props}
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
});

Input.displayName = "Input";

export default Input;
