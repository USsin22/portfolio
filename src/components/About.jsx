import React from 'react';
import { motion } from 'framer-motion';
const About = () => {
    return (
        <div className="min-h-screen   bg-brandDark text-white py-10 font-sans">
            {/* Container for the whole section */}
            <div className="max-w-7xl mx-auto space-y-4">

                {/* Top Header Label */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div className="text-[18px] font-mono text-gray-500 uppercase tracking-[0.2em]">
                        [ About Us ]↓
                    </div>
                    <div className="flex items-center gap-3 bg-brandDark border border-zinc-800/50 px-4 py-1.5 rounded-full">
                        <img src="https://cdn.simpleicons.org/javascript/f7df1e" className="w-4 h-4" alt="JS" />
                        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Code Implementation</span>
                    </div>
                </div>

                {/* TOP SECTION: Stats, Framer Box, and Map */}
                <div className="grid grid-cols-12 gap-4">

                    {/* Left: Stats Column */}
                    <div className="col-span-12 md:col-span-2 space-y-4 ">
                        {[
                            { label: '13+', sub: 'Years of experience' },
                            { label: '15+', sub: 'Awards & Recognition' },
                            { label: '350+', sub: 'Satisfied Clients' }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ rotateX: -90, opacity: 0 }}
                                whileInView={{ rotateX: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
                                className=" border border-zinc-800/50 rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center text-center h-[170px] bg-zinc-900/20 backdrop-blur-sm"
                            >
                                <h3 className="text-4xl font-bold">{stat.label}</h3>
                                <p className="text-[13px] text-zinc-500 uppercase mt-1 tracking-tight">{stat.sub}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Middle: Software Development Card */}
                    <motion.div
                        initial={{ rotateY: -30, opacity: 0 }}
                        whileInView={{ rotateY: 0, opacity: 1 }}
                        whileHover={{ rotateY: 10, rotateX: -5, scale: 1.02 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
                        className="col-span-12 md:col-span-3 border border-zinc-800/50 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group bg-gradient-to-br from-zinc-900/50 to-brandDark perspective-1000"
                    >
                        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                            <img src="/dev-visual.png" alt="" className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-1000" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold tracking-tight mb-2">Technical Mastery</h3>
                            <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed">System Architecture & <br />High-End Development</p>
                            <div className="   flex items-center justify-center mb-4">
                                <img src="./y.png" alt="Framer" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="mt-8 relative z-10 flex items-center justify-between">
                            <span className="text-[10px] text-white/40 font-mono tracking-tighter">0x_DEV_CORE</span>
                            <button className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                            </button>
                        </div>
                    </motion.div>

                    {/* Right: Globe/Location Box */}
                    <div className="col-span-12 md:col-span-7  border border-zinc-800/50 rounded-3xl p-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
                        <div className="absolute top-8 text-center z-10">
                            <h2 className="text-xl font-medium">Based in Quebec, Canada</h2>
                            <div className="flex items-center justify-center gap-2 mt-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="text-[10px] text-zinc-400 uppercase tracking-widest">Available Worldwide</span>
                            </div>
                        </div>
                        {/* Simple Wireframe Globe Placeholder */}
                        <img src="./map.svg" alt="" className="w-full h-full flex items-center justify-center" />

                    </div>
                </div>

                {/* BOTTOM SECTION: The Founder & Unicorn Box */}
                <div className="grid grid-cols-12 gap-4">

                    {/* Founder Profile Card */}
                    <div className="col-span-12 md:col-span-8  border border-zinc-800/50 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
                        <div className="h-full min-h-[300px]  to-zinc-900 relative">
                            {/* Profile Image Placeholder */}
                            <img
                                src="./image-pf.avif"
                                className="w-full h-full object-cover p-6 border border-black rounded-[50px_0px_0px_40px]"
                                alt="Jay Nadeau"
                            />
                            <div className="absolute bottom-6 left-6 p-2">
                                <h4 className="font-bold text-lg leading-tight">Jay Nadeau</h4>
                                <p className="text-[10px] text-orange-400 uppercase">Founder & Creative Director of Stkt</p>
                            </div>
                        </div>
                        <div className="p-2 flex flex-col justify-center">
                            <h3 className="text-2xl font-semibold mb-4">The Founder</h3>
                            <p className="text-zinc-400  text-[10px] leading-relaxed mb-4">Jay founded Stōkt in 2019 after spending the early part of his career in agencies. His ambition has always been to bring movement into traditionally static brand systems, a vision now fully aligned with today’s digital landscape.
                                <br />
                                <br />

                                His work blends art direction, motion, and web development, with a focus on cohesive, motion-driven brand systems. Working from concept to execution, Jay designs experiences guided by clarity, intent, and precision, believing aesthetics only matter when they serve a clear purpose.
                                <br />
                                <br />

                                From small to large-scale projects, Jay leads independently or assembles tailored teams as needed. Through Stōkt, he partners closely with brands seeking meaningful growth, remaining deeply involved to ensure every decision is intentional and built to last.
                            </p>
                            <button className="text-xs text-zinc-300 hover:text-white transition-all flex items-center gap-2">
                                Work with Jay <span className="text-lg">→</span>
                            </button>
                        </div>
                    </div>

                    {/* Right: AI Solutions Card */}
                    <motion.div
                        initial={{ rotateY: 30, opacity: 0 }}
                        whileInView={{ rotateY: 0, opacity: 1 }}
                        whileHover={{ rotateY: -10, rotateX: 5, scale: 1.02 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
                        className="col-span-12 md:col-span-4 border border-zinc-800/50 rounded-3xl p-8 flex flex-col justify-between items-center text-center relative overflow-hidden group bg-gradient-to-tr from-zinc-900/50 to-brandDark perspective-1000"
                    >
                        <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-700">
                            <img src="/ai-visual.png" alt="" className="w-full h-full object-cover scale-150 rotate-12 group-hover:scale-175 transition-transform duration-1000" />
                        </div>

                        <div className="relative z-10 w-full flex flex-col items-center">
                            <div className="w-16 h-16 rounded-3xl bg-orange-500/10 backdrop-blur-2xl border border-orange-500/20 flex items-center justify-center mb-6 shadow-2xl shadow-orange-500/10">
                                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(249,115,22,1)]" />
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight mb-3">AI Intelligence</h3>
                            <p className="text-zinc-500 text-[11px] leading-relaxed max-w-[200px] mb-6">
                                Integrating advanced neural networks and predictive logic into seamless digital interfaces.
                            </p>
                            <div className="flex gap-2">
                                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] uppercase tracking-widest text-zinc-400">GPT-4o</div>
                                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] uppercase tracking-widest text-zinc-400">DeepSeek</div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button className="text-[10px] text-zinc-500 hover:text-white mt-1 underline transition-colors">Explore Integration Logic</button>
                        </div>
                    </motion.div>
                </div>

                {/* TOOLBOX STRIP - Marquee Effect */}
                <div className=" border border-zinc-800/50  rounded-2xl p-4 flex items-center overflow-hidden relative group">
                    <span className="text-[10px] uppercase text-white whitespace-nowrap mr-6 bg-brandDark px-4 py-1 z-10 border-r border-zinc-800/50">
                        Everyday's Toolbox:<br /><span className="text-zinc-500">Mastered for every project.</span>
                    </span>

                    <div className="flex overflow-hidden w-full relative p-5">
                        {/* Gradient Fades for Smooth Loop Transitions */}
                        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#080808] to-transparent z-10" />
                        <div className="absolute inset-y-0 right-0 w-24  bg-gradient-to-l from-[#080808] to-transparent z-10" />

                        <motion.div
                            className="flex gap-8 whitespace-nowrap"
                            animate={{
                                x: ["0%", "-50%"],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 40, // Increased duration for more tools
                                    ease: "linear",
                                },
                            }}
                        >
                            {/* Combined Tool Set */}
                            {[
                                { name: 'JavaScript', slug: 'javascript', color: 'f7df1e', type: 'simple' },
                                { name: 'React', slug: 'react', color: '61dafb', type: 'simple' },
                                { name: 'TypeScript', slug: 'typescript', color: '3178c6', type: 'simple' },
                                { name: 'Figma', slug: 'figma', color: 'f24e1e', type: 'simple' },
                                { name: 'Framer', slug: 'framer', color: 'ffffff', type: 'simple' },
                                { name: 'Tailwind', slug: 'tailwindcss', color: '06b6d4', type: 'simple' },
                                { name: 'GSAP', slug: 'greensock', color: '88ce02', type: 'simple' },
                                { name: 'OpenAI', url: 'https://cdn.jsdelivr.net/gh/callback-io/allogo@main/public/logos/openai/icon.svg', type: 'custom', class: "bg-white  rounded-[12px]" },
                                { name: 'Gemini', slug: 'googlegemini', color: '4285f4', type: 'simple' },
                                { name: 'Claude', slug: 'claude', color: 'ffffff', type: 'simple' },
                                { name: 'Make', slug: 'make', color: 'ea1d22', type: 'simple' },
                                { name: 'Zapier', slug: 'zapier', color: 'ff4a00', type: 'simple' },
                                { name: 'n8n', slug: 'n8n', color: 'ff6d5b', type: 'simple' },
                                { name: 'Canva', url: 'https://logo.svgcdn.com/devicon/canva-original.svg', type: 'custom' },
                                { name: 'Perplexity', slug: 'perplexity', color: '20b2aa', type: 'simple' },
                                { name: 'Hugging Face', slug: 'huggingface', color: 'ffcc00', type: 'simple' },
                                { name: 'Mistral AI', slug: 'mistralai', color: 'ffffff', type: 'simple' },
                            ].map((tool, i) => (
                                <div key={i} className="flex items-center justify-center p-4 rounded-2xl border border-white/5 backdrop-blur-md group transition-colors w-16 h-16">
                                    <img
                                        src={tool.type === 'simple' ? `https://cdn.simpleicons.org/${tool.slug}/${tool.color}` : tool.url}
                                        alt={tool.name}
                                        className={`w-8 h-8 object-contain transition-all duration-300 group-hover:scale-110 ${tool.class}`}
                                    />
                                </div>
                            ))}
                            {/* Duplicate Set for Seamless Loop */}
                            {[
                                { name: 'JavaScript', slug: 'javascript', color: 'f7df1e', type: 'simple' },
                                { name: 'React', slug: 'react', color: '61dafb', type: 'simple' },
                                { name: 'TypeScript', slug: 'typescript', color: '3178c6', type: 'simple' },
                                { name: 'Figma', slug: 'figma', color: 'f24e1e', type: 'simple' },
                                { name: 'Framer', slug: 'framer', color: 'ffffff', type: 'simple' },
                                { name: 'Tailwind', slug: 'tailwindcss', color: '06b6d4', type: 'simple' },
                                { name: 'GSAP', slug: 'greensock', color: '88ce02', type: 'simple' },
                                { name: 'OpenAI', url: 'https://www.vectorlogo.zone/logos/openai/openai-icon.svg', type: 'custom' },
                                { name: 'Gemini', slug: 'googlegemini', color: '4285f4', type: 'simple' },
                                { name: 'Claude', slug: 'claude', color: 'ffffff', type: 'simple' },
                                { name: 'Make', slug: 'make', color: 'ea1d22', type: 'simple' },
                                { name: 'Zapier', slug: 'zapier', color: 'ff4a00', type: 'simple' },
                                { name: 'n8n', slug: 'n8n', color: 'ff6d5b', type: 'simple' },
                                { name: 'Canva', url: 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg', type: 'custom' },
                                { name: 'Perplexity', slug: 'perplexity', color: '20b2aa', type: 'simple' },
                                { name: 'Hugging Face', slug: 'huggingface', color: 'ffcc00', type: 'simple' },
                                { name: 'Mistral AI', slug: 'mistralai', color: 'ffffff', type: 'simple' },
                            ].map((tool, i) => (
                                <div key={`dup-${i}`} className="flex items-center justify-center p-4 rounded-2xl border border-white/5 backdrop-blur-md transition-colors w-16 h-16">
                                    <img
                                        src={tool.type === 'simple' ? `https://cdn.simpleicons.org/${tool.slug}/${tool.color}` : tool.url}
                                        alt={tool.name}
                                        className="w-8 h-8 object-contain transition-all duration-300"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;