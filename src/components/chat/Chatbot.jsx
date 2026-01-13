import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, ChevronRight, Send, RefreshCw, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [currentStep, setCurrentStep] = useState('START');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const navigate = useNavigate();

    // Scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    // Initialize chat when opened
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            handleStep('START');
        }
    }, [isOpen]);

    const handleStep = (stepId, userResponse = null) => {
        // If there's a user response, add it to chat
        if (userResponse) {
            setMessages(prev => [...prev, { type: 'user', text: userResponse }]);
        }

        setIsTyping(true);
        const stepData = flows[stepId];

        // Simulate typing delay
        setTimeout(() => {
            setIsTyping(false);
            if (stepData) {
                setMessages(prev => [...prev, {
                    type: 'bot',
                    text: stepData.message,
                    options: stepData.options
                }]);
                setCurrentStep(stepId);
            }
        }, 600);
    };

    const handleOptionClick = (option) => {
        if (option.action) {
            // Handle external actions like navigation or mailto
            if (option.action === 'email') {
                window.location.href = 'mailto:sales@prazamana.in';
            } else if (option.action === 'navigate') {
                navigate(option.url);
                setIsOpen(false);
            }
            return;
        }

        if (option.nextId) {
            handleStep(option.nextId, option.label);
        }
    };

    return (
        <>
            {/* Trigger Button */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#d19a06] text-black rounded-full shadow-lg flex items-center justify-center transition-all ${isOpen ? 'hidden' : 'flex'}`}
            >
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[#d19a06] rounded-full"
                ></motion.div>
                <MessageSquare className="relative z-10" />
            </motion.button>

            {/* Chat Interface */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-6 right-6 z-50 w-[380px] md:w-[400px] h-[600px] max-h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-100 flex flex-col font-sans"
                    >
                        {/* Header */}
                        <div className="bg-neutral-900 p-4 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d19a06] to-amber-600 flex items-center justify-center text-white font-bold text-lg">
                                        P
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-neutral-900 rounded-full"></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">PRAZAMANA Safety Expert</h3>
                                    <span className="text-xs text-neutral-400">Online &bull; Level-2 AI Assistant</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={() => {
                                        setMessages([]);
                                        handleStep('START');
                                    }}
                                    className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition-colors"
                                    title="Reset Chat"
                                >
                                    <RefreshCw size={18} />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition-colors"
                                >
                                    <Minus size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 bg-neutral-50 scrollbar-thin scrollbar-thumb-neutral-200">
                            <div className="space-y-4">
                                {messages.map((msg, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div className={`max-w-[85%] rounded-2xl p-3.5 text-sm leading-relaxed ${msg.type === 'user'
                                            ? 'bg-neutral-900 text-white rounded-br-none'
                                            : 'bg-white text-neutral-800 border border-neutral-100 shadow-sm rounded-tl-none'
                                            }`}>
                                            {msg.text}
                                        </div>
                                    </motion.div>
                                ))}
                                {isTyping && (
                                    <div className="flex justify-start">
                                        <div className="bg-white border border-neutral-100 rounded-2xl rounded-tl-none p-4 shadow-sm flex gap-1.5 items-center">
                                            <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                            <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                            <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                        {/* Options / Input Area */}
                        <div className="p-4 bg-white border-t border-neutral-100 shrink-0 min-h-[80px]">
                            {!isTyping && messages.length > 0 && messages[messages.length - 1].type === 'bot' && messages[messages.length - 1].options && (
                                <div className="flex flex-wrap gap-2 justify-end">
                                    {messages[messages.length - 1].options.map((option, idx) => (
                                        <motion.button
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: idx * 0.05 }}
                                            onClick={() => handleOptionClick(option)}
                                            className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${option.primary
                                                ? 'bg-[#d19a06] text-black hover:bg-[#b88605] shadow-sm hover:shadow-md'
                                                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
                                                }`}
                                        >
                                            {option.label}
                                        </motion.button>
                                    ))}
                                </div>
                            )}
                            {(!messages.length || (messages.length > 0 && messages[messages.length - 1].type === 'bot' && !messages[messages.length - 1].options)) && !isTyping && (
                                <div className="text-center text-xs text-neutral-400 italic mt-2">
                                    Select an option above to continue
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

// --------------------------------------------------
// DATA: CONVERSATION FLOWS
// --------------------------------------------------
const flows = {
    START: {
        message: "Hi! I’m PRAZAMANA’s Safety Expert. 🚀 Ready to make your machines accident-proof? What brings you here today?",
        options: [
            { label: "CE / UKCA Certification", nextId: "FLOW_CE_1" },
            { label: "Safety Fencing Solutions", nextId: "FLOW_FENCE_1" },
            { label: "Digital LOTO (LOTOTO)", nextId: "FLOW_LOTO_1" },
            { label: "Upgrade Old Machines", nextId: "FLOW_UPGRADE_1" },
            { label: "Safety Trainings", nextId: "FLOW_TRAINING_1" },
            { label: "Explore All Services", action: "navigate", url: "/services" }
        ]
    },

    // --------------------------------------------------
    // FLOW 1: CE / UKCA CERTIFICATION
    // --------------------------------------------------
    FLOW_CE_1: {
        message: "Great choice. Are you facing delays, audit pressure, or first-time CE/UKCA compliance?",
        options: [
            { label: "1–5 Machines", nextId: "FLOW_CE_2" },
            { label: "6–20 Machines", nextId: "FLOW_CE_2" },
            { label: "20+ Machines", nextId: "FLOW_CE_2" },
            { label: "First-time Certification", nextId: "FLOW_CE_2" }
        ]
    },
    FLOW_CE_2: {
        message: "Thanks. We help manufacturers achieve structured, audit-ready CE/UKCA compliance with clear documentation and safety validation.",
        options: [
            { label: "Request CE Consultation", action: "navigate", url: "/contact", primary: true },
            { label: "Speak to an Expert", action: "email", primary: true },
            { label: "Back to Menu", nextId: "START" }
        ]
    },

    // --------------------------------------------------
    // FLOW 2: SAFETY FENCING SOLUTIONS
    // --------------------------------------------------
    FLOW_FENCE_1: {
        message: "Excellent. Our certified safety fencing systems are custom-built for industrial layouts. 🚧 Which area needs protection?",
        options: [
            { label: "ASRS", nextId: "FLOW_FENCE_2" },
            { label: "Palletizer", nextId: "FLOW_FENCE_2" },
            { label: "Robotics", nextId: "FLOW_FENCE_2" },
            { label: "Conveyors", nextId: "FLOW_FENCE_2" },
            { label: "Press Machines", nextId: "FLOW_FENCE_2" },
            { label: "Perimeter Area", nextId: "FLOW_FENCE_2" }
        ]
    },
    FLOW_FENCE_2: {
        message: "What type of paneling do you prefer?",
        options: [
            { label: "Mesh / Visibility Panels", nextId: "FLOW_FENCE_3" },
            { label: "Polycarbonate", nextId: "FLOW_FENCE_3" },
            { label: "Solid Panels", nextId: "FLOW_FENCE_3" },
            { label: "Not Sure", nextId: "FLOW_FENCE_3" }
        ]
    },
    FLOW_FENCE_3: {
        message: "Our fences are in-house fabricated, 20–30% more cost-effective than imports, and compatible with interlocks, PLCs, and light curtains.",
        options: [
            { label: "Request Site Assessment", action: "navigate", url: "/contact", primary: true },
            { label: "Get RFQ", action: "email", primary: true },
            { label: "Back to Menu", nextId: "START" }
        ]
    },

    // --------------------------------------------------
    // FLOW 3: DIGITAL LOTO (LOTOTO)
    // --------------------------------------------------
    FLOW_LOTO_1: {
        message: "Smart choice. 🔒 Digital LOTO eliminates paperwork errors and improves safety accountability. What’s your biggest challenge today?",
        options: [
            { label: "Paper tracking issues", nextId: "FLOW_LOTO_2" },
            { label: "Human errors", nextId: "FLOW_LOTO_2" },
            { label: "Slow approvals", nextId: "FLOW_LOTO_2" },
            { label: "Compliance audits", nextId: "FLOW_LOTO_2" }
        ]
    },
    FLOW_LOTO_2: {
        message: "How many machines or isolation points need LOTO coverage?",
        options: [
            { label: "1–10", nextId: "FLOW_LOTO_3" },
            { label: "11–50", nextId: "FLOW_LOTO_3" },
            { label: "50+ (Enterprise)", nextId: "FLOW_LOTO_3" }
        ]
    },
    FLOW_LOTO_3: {
        message: "Our Digital LOTOTO solution scales across sites with barcodes/NFC and centralized tracking.",
        options: [
            { label: "View Case Study", action: "navigate", url: "/products/digital-smart-loto-solution", primary: true },
            { label: "Request Demo", action: "navigate", url: "/contact", primary: true },
            { label: "Back to Menu", nextId: "START" }
        ]
    },

    // --------------------------------------------------
    // FLOW 4: UPGRADE OLD MACHINES
    // --------------------------------------------------
    FLOW_UPGRADE_1: {
        message: "Great move. 🛠️ We retrofit old machines to modern safety standards—without full replacement. Which machines need upgrades?",
        options: [
            { label: "CNC / Machining", nextId: "FLOW_UPGRADE_2" },
            { label: "Press / Stamping", nextId: "FLOW_UPGRADE_2" },
            { label: "Conveyors", nextId: "FLOW_UPGRADE_2" },
            { label: "Assembly Lines", nextId: "FLOW_UPGRADE_2" }
        ]
    },
    FLOW_UPGRADE_2: {
        message: "What issues are you facing?",
        options: [
            { label: "Guards bypassed", nextId: "FLOW_UPGRADE_3" },
            { label: "Slow stopping", nextId: "FLOW_UPGRADE_3" },
            { label: "No interlocks", nextId: "FLOW_UPGRADE_3" },
            { label: "Machines >10 years", nextId: "FLOW_UPGRADE_3" }
        ]
    },
    FLOW_UPGRADE_3: {
        message: "We typically upgrade safety at 40–60% lower cost than new machines, with minimal downtime.",
        options: [
            { label: "Free Safety Assessment", action: "navigate", url: "/services/risk-assessment", primary: true },
            { label: "Contact Sales", action: "email", primary: true },
            { label: "Back to Menu", nextId: "START" }
        ]
    },

    // --------------------------------------------------
    // FLOW 5: SAFETY TRAININGS
    // --------------------------------------------------
    FLOW_TRAINING_1: {
        message: "Excellent. 🎓 Our expert-led trainings focus on real-world machine safety. Who needs training?",
        options: [
            { label: "Operators", nextId: "FLOW_TRAINING_2" },
            { label: "Engineers", nextId: "FLOW_TRAINING_2" },
            { label: "Managers", nextId: "FLOW_TRAINING_2" },
            { label: "Full Team", nextId: "FLOW_TRAINING_2" }
        ]
    },
    FLOW_TRAINING_2: {
        message: "What is the focus area?",
        options: [
            { label: "Machine Guarding", nextId: "FLOW_TRAINING_3" },
            { label: "Risk Assessment", nextId: "FLOW_TRAINING_3" },
            { label: "ISO 13849 / PLC", nextId: "FLOW_TRAINING_3" },
            { label: "CE Compliance", nextId: "FLOW_TRAINING_3" }
        ]
    },
    FLOW_TRAINING_3: {
        message: "We offer on-site and remote training, from awareness sessions to deep technical workshops.",
        options: [
            { label: "Schedule Training", action: "navigate", url: "/contact", primary: true },
            { label: "Contact Sales", action: "email", primary: true },
            { label: "Back to Menu", nextId: "START" }
        ]
    }
};

export default Chatbot;
