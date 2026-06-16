import React, { useEffect, useState } from 'react';
import { Globe, ArrowRight, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const Hero = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    return (
        <div className="relative h-[95vh] bg-brandDark rounded-[16px] overflow-hidden mx-4 md:mx-6 my-4 border border-white/5 shadow-2xl">
            {/* Navbar Wrapper - Absolute for overlay */}
            <div className="absolute top-0 left-0 right-0 z-50 p-6 md:p-8">
                <Navbar />
            </div>

            {/* Background Image / SVG - Responsive positioning */}
            <div
                className="absolute inset-0 z-0 pointer-events-none duration-1000 bg-center bg-cover md:bg-right-bottom lg:bg-right"
                style={{
                    backgroundImage: 'url("/kU69a30lBXFe2oy2R21PCoNv9vU.avif")',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            {/* Premium Wandering Background Element */}
            <motion.div
                className="absolute -right-20 -bottom-20 z-99 pointer-events-none"
                animate={{
                    x: [0, -120, 40, -80, 0],
                    y: [0, -100, 60, -40, 0],
                    rotate: 360,
                    scale: [1, 1.1, 0.95, 1.05, 1]
                }}
                transition={{
                    x: { duration: 18, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 14, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                    scale: { duration: 20, repeat: Infinity, ease: "easeInOut" }
                }}
            >
                <img
                    src="/WLlehktco1TfNksSpRJQdyFeN5M.avif"
                    alt=""
                    className="h-[500px] w-[500px] md:h-[800px] md:w-[800px] object-contain"
                />
            </motion.div>

            {/* Subtle Overlay Gradients for readability with small text */}
            <div className="absolute inset-0 bg-gradient-to-r from-brandDark via-brandDark/40 to-transparent z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-t from-brandDark/40 via-transparent to-transparent z-[1]" />

            {/* Hero Content - Kept SMALL as requested, with responsive centering */}
            <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="relative z-10 px-2 md:px-16 lg:px-12 h-full flex items-center md:items-center pt-24 md:pt-0"
            >
                <div className="max-w-7xl w-full">
                    <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                        {/* Left Content */}
                        <div className="lg:col-span-3 text-center md:text-left">
                            {/* Tag */}
                            <motion.div variants={fadeInUp} className="mb-4 md:mb-6">
                                <span className="font-mono text-[12px] md:text-sm tracking-[0.3em] text-brandAccent/80 uppercase">
                                    [ WE ARE STÖKT ]
                                </span>
                            </motion.div>

                            {/* Main Heading - Small Size, Responsive scale */}
                            <motion.h1
                                variants={staggerContainer}
                                initial="initial"
                                animate="animate"
                                className="text-3xl md:text-5xl lg:text-4xl font-bold uppercase tracking-tight leading-[1] md:leading-[0.9] text-brandIvory mb-6 md:mb-8"
                                style={{ fontFamily: "'Oswald', sans-serif" }}
                            >
                                <div className="flex flex-wrap justify-center md:justify-start gap-x-[0.2em] overflow-hidden">
                                    {"MOVING".split("").map((char, i) => (
                                        <motion.span
                                            key={i}
                                            variants={{
                                                initial: { rotateX: -90, opacity: 0, y: 20 },
                                                animate: { rotateX: 0, opacity: 1, y: 0 }
                                            }}
                                            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
                                            className="inline-block origin-bottom"
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                    <div className="w-full md:hidden" /> {/* Break for mobile */}
                                    <motion.span
                                        variants={{
                                            initial: { opacity: 0, scale: 0.8 },
                                            animate: { opacity: 1, scale: 1 }
                                        }}
                                        className="text-brandAccent"
                                    >
                                        {"BRANDS".split("").map((char, i) => (
                                            <motion.span
                                                key={i}
                                                variants={{
                                                    initial: { rotateX: -90, opacity: 0, y: 20 },
                                                    animate: { rotateX: 0, opacity: 1, y: 0 }
                                                }}
                                                transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
                                                className="inline-block origin-bottom"
                                            >
                                                {char}
                                            </motion.span>
                                        ))}
                                    </motion.span>
                                </div>
                                <div className="flex flex-wrap justify-center md:justify-start gap-x-[0.2em] overflow-hidden">
                                    {"FORWARD".split("").map((char, i) => (
                                        <motion.span
                                            key={i}
                                            variants={{
                                                initial: { rotateX: -90, opacity: 0, y: 20 },
                                                animate: { rotateX: 0, opacity: 1, y: 0 }
                                            }}
                                            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
                                            className="inline-block origin-bottom"
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.h1>

                            {/* Paragraph - Small Size */}
                            <motion.p
                                variants={fadeInUp}
                                className="text-sm md:text-[13px] text-brandIvory/60 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed font-sans"
                            >
                                Stokt builds motion-driven brand systems, unifying branding, web, and motion into a single evolving execution.
                            </motion.p>

                            {/* CTA Buttons - Balanced size */}
                            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center md:justify-start gap-4">
                                <button className="flex items-center space-x-3 bg-brandIvory text-brandDark px-8 py-4 rounded-full hover:bg-brandAccent hover:text-white transition-all duration-500 group overflow-hidden relative">
                                    <span className="text-xs font-bold tracking-widest uppercase relative z-10">VIEW PROJECTS</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                                </button>
                                <button className="flex items-center space-x-3 bg-transparent border border-brandIvory/20 text-brandIvory px-8 py-4 rounded-full hover:border-brandAccent hover:text-brandAccent transition-all duration-500 group">
                                    <span className="text-xs font-bold tracking-widest uppercase">REACH OUT</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Floating Bottom Info */}
            <motion.div
                variants={fadeInUp}
                className="absolute bottom-10 left-6 md:left-16 lg:left-24 right-6 md:right-16 lg:right-24 z-20"
            >
                <div className="flex justify-between items-end border-t border-brandIvory/10 pt-6">
                    <div className="flex flex-col gap-2">
                        <span className="font-mono text-[9px] tracking-[0.2em] text-brandIvory/30 uppercase">Scroll to explore</span>
                        <div className="w-10 h-[1px] bg-brandAccent/40 animate-pulse" />
                    </div>
                    <div className="text-right">
                        <span className="font-mono text-[9px] tracking-[0.2em] text-brandIvory/30 uppercase block mb-1">Established</span>
                        <span className="text-brandIvory/60 font-bold tracking-widest text-[11px]">2019 — LONDON</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;