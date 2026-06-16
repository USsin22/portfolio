import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Index",
            links: ["Home", "Work", "Services", "About Us", "Store"]
        },
        {
            title: "Terms & Policies",
            links: ["License Agreement", "Privacy Policy", "Cookie Settings"]
        },
        {
            title: "Digital Store",
            links: ["Mockups", "Framer Templates", "Freebies"]
        }
    ];

    const socials = [
        { name: "Instagram", url: "#" },
        { name: "LinkedIn", url: "#" },
        { name: "Youtube", url: "#" },
        { name: "TikTok", url: "#" },
        { name: "Behance", url: "#" },
    ];

    return (
        <footer className="mx-4 md:mx-6 my-4  h-[95vh] relative border border-white/5 shadow-2xl rounded-[16px] flex flex-col justify-between overflow-hidden bg-black text-white">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/footer.gif"
                    alt="Background Detail"
                    className="w-full h-[95vh] object-cover duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80" />
            </div>

            {/* Top Section: Branding & Links */}
            <div className="relative z-10 grid grid-cols-12 gap-8 p-5 md:p-10">
                {/* Company Info */}
                <div className="col-span-12 lg:col-span-4 space-y-4">
                    <h2 className="text-4xl font-medium tracking-tight">Stōkt Creative Co.</h2>
                    <div className="text-zinc-400 text-sm space-y-1">
                        <p>Saint-Sauveur — Canada</p>
                        <p className="hover:text-white transition-colors cursor-pointer">hello@wearestokt.com</p>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="col-span-12 lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link} className="text-sm text-zinc-300 hover:text-white transition-colors cursor-pointer">
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Social Links */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">Socials</h4>
                        <ul className="space-y-3">
                            {socials.map((social) => (
                                <li key={social.name} className="flex items-center gap-1 text-sm text-zinc-300 hover:text-white transition-colors cursor-pointer group">
                                    {social.name}
                                    <span className="text-[10px] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">↗</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 p-10 flex flex-col md:flex-row justify-between items-end border-t border-white/10 backdrop-blur-sm">
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest">
                    © {currentYear} Stōkt Creative Co. All rights reserved.
                </p>

                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="group flex items-center gap-2 text-[10px] text-zinc-300 uppercase tracking-widest hover:text-white transition-all"
                >
                    Back to the top
                    <span className="bg-zinc-800 p-2 rounded-full group-hover:bg-zinc-700 transition-colors">↑</span>
                </button>
            </div>
        </footer>
    );
};

export default Footer;