import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Section from '../components/ui/Section';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { Lock } from 'lucide-react';

const UnlockPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const returnUrl = searchParams.get('returnUrl') || '/products/digital-smart-loto-solution';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: ''
    });

    const handleUnlock = (e) => {
        e.preventDefault();
        // Mock submission logic
        if (formData.name && formData.email) {
            // Redirect back to the product page with unlocked=true
            navigate(`${returnUrl}?unlocked=true`);
        }
    };

    return (
        <div className="pt-24 min-h-screen bg-white flex items-center justify-center">
            <Section className="w-full max-w-lg">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-neutral-200 text-center">
                    <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Lock className="text-[#d19a06]" size={32} />
                    </div>
                    <h1 className="text-3xl font-black text-black mb-4">
                        Unlock Full Specifications
                    </h1>
                    <p className="text-neutral-600 mb-8">
                        Please provide your details to access the complete technical documentation and feature breakdown.
                    </p>

                    <form onSubmit={handleUnlock} className="space-y-4 text-left">
                        <Input
                            label="Full Name"
                            placeholder="John Doe"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <Input
                            label="Work Email"
                            type="email"
                            placeholder="john@company.com"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <Input
                            label="Mobile Number"
                            type="tel"
                            placeholder="+91 98765 43210"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                        <Input
                            label="Company Name"
                            placeholder="Company Pvt Ltd"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />

                        <div className="pt-4">
                            <Button type="submit" className="w-full bg-[#d19a06] text-black font-bold py-3 hover:bg-black hover:text-[#d19a06] transition-all">
                                Unlock Access
                            </Button>
                            <button
                                type="button"
                                onClick={() => navigate(returnUrl)}
                                className="w-full text-neutral-500 text-sm font-medium mt-4 hover:text-black"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </Section>
        </div>
    );
};

export default UnlockPage;
