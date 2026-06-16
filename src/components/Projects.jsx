import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import image from "/kU69a30lBXFe2oy2R21PCoNv9vU.avif";
import image2 from "/MINIMAL-001-STATIC.jpg";
import phone from "/Beige Minimalist Hand Holding Phone Mockup Instagram Post.svg";

/**
 * Projects (FeaturedWork) Component
 * A responsive grid showcasing projects with a high-end dark aesthetic.
 */
const FeaturedWork = () => {
    const projects = [
        {
            id: 1,
            title: "AI CONCIERGE SYSTEM",
            tags: ["AI", "PRODUCT DESIGN"],
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600",
            featured: true,
        },
        {
            id: 2,
            title: "LORRAINE COX",
            tags: ["BRANDING", "UI/UX"],
            image: phone,
        },
        {
            id: 3,
            title: "WE SCALE IT",
            tags: ["WEB DEV", "DESIGN"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        },
        {
            id: 4,
            title: "JER IDENTITY",
            tags: ["VISUAL IDENTITY"],
            image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
        },
        {
            id: 5,
            title: "JER IDENTITY",
            tags: ["VISUAL IDENTITY"],
            image: image2,
        },
        {
            id: 6,
            title: "FINTECH AI CORE",
            tags: ["AI", "FINTECH"],
            image: image,
            featured: true,
        },
        {
            id: 7,
            title: "PHASES OF MADNESS",
            tags: ["MOTION", "ART"],
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
        },
    ];

    const fadeInUp = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    };

    const staggerContainer = {
        initial: {},
        whileInView: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const ProjectCard = ({ project }) => (
        <motion.div
            variants={fadeInUp}
            className={`group relative overflow-hidden rounded-[24px] bg-[#0a0a0a] border border-white/10 hover:border-brandAccent/40 transition-all duration-500 flex flex-col h-full ${project.featured ? "md:col-span-2" : "col-span-1"
                }`}
        >
            <div className="relative aspect-[16/10] overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="object-cover w-full h-full scale-105 group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out grayscale-[0.2] group-hover:grayscale-0"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-brandDark/40 opacity-40 group-hover:opacity-20 transition-opacity duration-500" />

                {/* Floating Tags (Overlay) */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
                    {project.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-brandDark/80 backdrop-blur-md text-brandIvory text-[9px] font-bold tracking-widest rounded-full border border-white/10" >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* View Icon */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 z-10">
                    <div className="w-10 h-10 bg-brandAccent rounded-full flex items-center justify-center text-white shadow-xl">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                </div>
            </div>

            <div className="p-8 bg-[#0a0a0a] flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-brandIvory tracking-tight group-hover:text-brandAccent transition-colors duration-300 mb-2 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
                        {project.title}
                    </h3>
                    <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-500">
                        Case Study — {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </motion.div>
    );

    return (
        <section className="py-2 relative overflow-hidden  mx-4 md:mx-6 my-4  ">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-full h-full bg-brandAccent/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-white/2 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto py-2 max-w-[1400px] relative z-10">
                <motion.header
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
                >
                    <div className="max-w-2xl">
                        <span className="font-mono text-[18px] tracking-[0.4em] text-brandAccent uppercase mb-4 block">
                            [ OUR PORTFOLIO ]↓
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-brandIvory tracking-tighter uppercase leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>
                            SELECTED  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandAccent to-brandAccent/60">WORKS</span>
                        </h2>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group flex items-center gap-4 px-10 py-5 bg-brandIvory text-brandDark rounded-full hover:bg-brandAccent hover:text-white transition-all duration-500 font-bold text-[10px] tracking-[0.2em] uppercase"
                    >
                        EXPLORE ALL
                        <div className="w-8 h-[1px] bg-current transition-all duration-500 group-hover:w-12" />
                    </motion.button>
                </motion.header>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10"
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedWork;