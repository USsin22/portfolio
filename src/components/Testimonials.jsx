import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const reviews = [
        {
            name: "Elena Rossi",
            role: "Marketing Head",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
            text: "The speed of execution was honestly mind-blowing. We went from a rough concept to a high-fidelity interactive site in less than a week. Absolute wizardry that changed our launch timeline entirely."
        },
        {
            name: "Marcus Thorne",
            role: "Product Designer",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
            text: "Finally, a developer who actually understands typography. Pure bliss."
        },
        {
            name: "Sarah Jenkins",
            role: "Startup Founder",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
            text: "Most designers just build what you ask for. Jay challenges your ideas and makes them 10x better. That strategic input is worth more than the code itself. Our brand feels alive for the first time."
        },
        {
            name: "Liam O'Shea",
            role: "Creative Lead",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
            text: "He turned our static guidelines into a living digital experience. Motion design is the key."
        },
        {
            name: "Yuki Tanaka",
            role: "E-commerce Manager",
            avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop",
            text: "Our conversion rate jumped 25% after the redesign. The user flow is seamless, and the Framer animations keep users engaged on the page longer than ever before. It's a masterpiece of UX."
        },
        {
            name: "David Chen",
            role: "Studio Director",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
            text: "Working with Jay feels like having a secret weapon. Exceptional technical mastery."
        }
    ];

    return (
        <section className="bg-[#f2eee3] py-24  px-3
        overflow-hidden">
            {/* Header */}
            <div className="text-center mb-16">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em] border border-zinc-200 px-3 py-1 rounded-full">
                    ( Testimonials )
                </span>
                <h2 className="text-5xl font-medium text-black mt-6 tracking-tight">
                    Dont' take our word for it<span className="text-orange-600">*</span>
                </h2>
                <p className="text-orange-600 text-[10px] font-bold uppercase tracking-widest mt-2">*Take theirs</p>
            </div>

            {/* Marquee Container */}
            <div className="relative py-10">
                {/* Shadow Overlays */}
                <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-[#f2eee3] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-3 bg-gradient-to-l from-[#f2eee3] to-transparent z-10 pointer-events-none" />

                <div className="flex flex-nowrap overflow-hidden">
                    <motion.div
                        className="flex gap-6 flex-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        whileHover={{ animationPlayState: "paused" }} // Pauses marquee on hover
                    >
                        {[...reviews, ...reviews].map((rev, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: (i % reviews.length) * 0.1 }}
                                className={`w-[380px] flex-shrink-0 bg-[#111] border border-white/5 text-white p-10 rounded-[2.5rem] flex flex-col justify-between transition-all hover:scale-[1.02] hover:border-orange-600/50 hover:shadow-[0_0_40px_rgba(234,88,12,0.1)] duration-500 group
                                ${i % 3 === 0 ? 'mt-20' : i % 3 === 1 ? 'mt-4' : 'mb-16'}`}
                            >
                                {/* Review Text - Handles both long and short content */}
                                <div className="flex items-center">
                                    <p className={`leading-relaxed text-zinc-300 italic tracking-tight transition-colors group-hover:text-white ${rev.text.length > 80 ? 'text-lg h-[200px] overflow-hidden' : 'text-2xl font-medium h-[200px] overflow-hidden'}`}>
                                        "{rev.text}"
                                    </p>
                                </div>

                                {/* User Info Section */}
                                <div className="flex items-center gap-4 mt-10 pt-6 border-t border-zinc-800/50">
                                    <img
                                        src={rev.avatar}
                                        alt={rev.name}
                                        className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all border border-zinc-700 group-hover:border-orange-600/50"
                                    />
                                    <div className="flex-1">
                                        <h4 className="text-sm font-bold uppercase tracking-wide text-white group-hover:text-orange-500 transition-colors">{rev.name}</h4>
                                        <p className="text-[10px] text-zinc-500 uppercase tracking-tighter">{rev.role}</p>
                                    </div>
                                    <div className="opacity-20 text-orange-500 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H15.017C13.3503 14 12.017 12.6667 12.017 11V5H22.017V14C22.017 17.866 18.883 21 15.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697V14H3.01697C1.3503 14 0.0169678 12.6667 0.0169678 11V5H10.017V14C10.017 17.866 6.883 21 3.01697 21H2.01697Z" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Bottom Label */}
            <div className="flex justify-center mt-12">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest cursor-pointer hover:text-black transition-colors group">
                    ( Awards & Recognitions ) <span className="inline-block group-hover:translate-y-1 transition-transform">↓</span>
                </span>
            </div>
        </section>
    );
};

export default Testimonials;