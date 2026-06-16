import React, { useState } from 'react';
import About from './About';


const ServicesPowerhouse = () => {
    // We'll track which card is expanded. null means all are equal.
    const [expandedIndex, setExpandedIndex] = useState(1); // Defaulting to middle card like your screenshot

    const services = [
        {
            id: 0,
            title: "Branding Identity",
            desc: "We craft unique visual identities that resonate with your audience and stand the test of time.",
            image: "https://images.unsplash.com/photo-1635405074683-96d6921a2a2c?auto=format&fit=crop&q=80&w=800",
            skills: ["Brand Strategy", "Logo Design", "Visual Language", "Guidelines", "Print Media", "Social Assets"]
        },
        {
            id: 1,
            title: "Web Design & Dev",
            desc: "We build fast, responsive, and future-ready digital products using modern tools and frameworks.",
            image: "https://images.unsplash.com/photo-1558444479-c84851727ec6?auto=format&fit=crop&q=80&w=800",
            skills: ["Creative Development", "CMS Building", "E-Commerce", "Website Responsiveness", "Web Application", "AI Workflow Integration"]
        },
        {
            id: 2,
            title: "Motion Systems",
            desc: "Dynamic motion design that adds life to your digital interfaces and brand storytelling.",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
            skills: ["UI Animation", "Lottie Files", "3D Motion", "Product Explainer", "Interaction Design", "VFX"]
        }
    ];

    return (
        <div className="bg-black text-white px-10 py-2 font-sans rounded-[16px] overflow-hidden mx-4 md:mx-6 my-4 ">
            {/* Top Header Section */}
            <div className="max-w-7xl mx-4 py-12">
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] mb-4">
                    [ Services & Expertise ] ↓
                </div>
                <h1 className="text-5xl font-medium mb-4">Digital Design Powerhouse</h1>
                <p className="text-gray-400 max-w-xl text-sm leading-relaxed">
                    Over the last decade, we've refined a wide range of skills in digital design,
                    offering services mastered to perfection and always driven by the purpose of motion.
                </p>
            </div>
<br />
            {/* Interactive Accordion Grid */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 h-[600px]">
                {services.map((service, index) => {
                    const isExpanded = expandedIndex === index;

                    return (
                        <div
                            key={service.id}
                            onClick={() => setExpandedIndex(index)}
                            className={`relative cursor-pointer rounded-2xl border border-white/10 transition-all duration-700 ease-in-out overflow-hidden
                ${isExpanded ? 'flex-[5] bg-[#050505]' : 'flex-[0.4] bg-[#0a0a0a] hover:bg-[#111]'}`}
                        >
                            {/* COLLAPSED STATE: Vertical Title */}
                            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                                <h3 className="whitespace-nowrap -rotate-90 text-xl font-medium tracking-tight text-white">
                                    {service.title}
                                </h3>
                                {/* Small indicator dot found in your screenshot */}
                                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/30" />
                            </div>

                            {/* EXPANDED STATE: Full Content */}
                            <div className={`h-full flex flex-col md:flex-row items-center p-12 transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>

                                {/* Left: Text Content */}
                                <div className="flex-1 space-y-8">
                                    <div className="space-y-4">
                                        <h2 className="text-3xl font-medium">{service.title}</h2>
                                        <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                                            {service.desc}
                                        </p>
                                    </div>

                                    {/* Skills Grid */}
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-12">
                                        {service.skills.map((skill) => (
                                            <div key={skill} className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-gray-400">
                                                <span className="text-gray-600 text-[14px]">→</span>
                                                {skill}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right: Asset/Image */}
                                <div className="flex-1 h-full flex items-center justify-center">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="max-h-[85%] object-contain filter grayscale brightness-125 contrast-125"
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <About />

        </div>
    );
};

export default ServicesPowerhouse;