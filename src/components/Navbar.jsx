import React, { useState } from 'react';
import { Globe, ArrowRight, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [language, setLanguage] = useState('EN');

    const toggleLanguage = () => {
        setLanguage(language === 'EN' ? 'FR' : 'EN');
    };

    const navItems = ['WORK', 'SERVICES', 'ABOUT US', 'MOTION INDEX', 'STORE'];

    return (
        <nav className="relative z-50 px-6 py-3 md:px-12 border border-white/10 rounded-2xl transition-all duration-300 backdrop-blur-xl bg-white/5 shadow-lg">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center"
                    >
                        <div className="text-2xl font-bold tracking-tighter text-brandIvory font-sans">
                            ST<span className="text-brandAccent">Ö</span>KT
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden lg:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2"
                    >
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href="#"
                                className="text-[10px] font-bold tracking-[0.2em] uppercase text-brandIvory/60 hover:text-brandAccent transition-all duration-300"
                            >
                                {item}
                            </a>
                        ))}
                    </motion.div>

                    {/* Right Actions */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center space-x-8"
                    >
                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            className="hidden md:flex items-center space-x-2 text-[10px] font-mono tracking-widest text-brandIvory/40 hover:text-brandIvory transition-colors duration-300"
                        >
                            <Globe className="w-4 h-4 text-brandAccent/60" />
                            <span>{language}</span>
                        </button>

                        {/* Contact Button */}
                        <button className="hidden md:flex items-center space-x-3 bg-brandIvory text-brandDark px-8 py-4 rounded-full hover:bg-brandAccent hover:text-white transition-all duration-500 group">
                            <span className="text-xs font-bold tracking-widest uppercase">CONTACT US</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden text-brandIvory hover:text-brandAccent transition-colors"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </motion.div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="lg:hidden absolute top-full left-6 right-6 mt-4 bg-brandDark/95 backdrop-blur-xl rounded-2xl p-8 border border-white/5 shadow-2xl z-50"
                    >
                        <div className="flex flex-col space-y-6">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="text-lg font-bold tracking-widest uppercase text-brandIvory/80 hover:text-brandAccent transition-colors py-2 border-b border-white/5"
                                >
                                    {item}
                                </a>
                            ))}
                            <div className="flex items-center justify-between pt-6">
                                <button
                                    onClick={toggleLanguage}
                                    className="flex items-center space-x-2 text-xs font-mono tracking-wider text-brandIvory/40"
                                >
                                    <Globe className="w-4 h-4 text-brandAccent/60" />
                                    <span>{language}</span>
                                </button>
                                <button className="flex items-center space-x-3 bg-brandIvory text-brandDark px-8 py-4 rounded-full">
                                    <span className="text-sm font-bold tracking-wider uppercase">CONTACT</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;