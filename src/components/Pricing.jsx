import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const PricingWidget = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "ESSENTIAL",
      price: isAnnual ? "2,500" : "2,900",
      description:
        "Perfect for startups looking to establish a high-end digital presence with speed.",
      features: [
        "Brand Identity System",
        "UI/UX Design (5 Pages)",
        "Framer/React Development",
        "Standard SEO",
        "Basic Motion Graphics",
      ],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "PRO STUDIO",
      price: isAnnual ? "4,900" : "5,500",
      description:
        "Our signature plan for scaling brands that need continuous motion and dev support.",
      features: [
        "Everything in Essential",
        "Advanced Motion Systems",
        "Full E-commerce Setup",
        "AI Workflow Integration",
        "Priority Support",
        "Performance Optimization",
      ],
      cta: "Book a Discovery",
      highlight: true,
    },
    {
      name: "ENTERPRISE",
      price: "Custom",
      description:
        "Tailored creative partnerships for complex ecosystems and global product launches.",
      features: [
        "Unlimited Pages",
        "Custom Web Application",
        "VFX & 3D Motion",
        "Dedicated Art Director",
        "Quarterly Strategy Audits",
        "White-label Rights",
      ],
      cta: "Contact Us",
      highlight: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  return (
    <section className="bg-black text-white px-6 md:px-10 py-24 rounded-[32px] overflow-hidden mx-4 md:mx-6 my-4 border border-white/5 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] mb-4">
              [ Flexible Pricing ] ↓
            </div>
            <h2 className="text-5xl font-medium tracking-tight mb-4">
              Investment Tiers
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
              Transparent creative partnerships. Choose a plan that aligns with
              your current scale and future ambitions.
            </p>
          </div>

          {/* Annual Toggle */}
          <div className="flex items-center gap-3 bg-zinc-900/50 p-1.5 rounded-full border border-white/10 self-start lg:self-auto">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-widest transition-all ${!isAnnual ? "bg-brandIvory text-brandDark shadow-lg" : "text-zinc-500 hover:text-white"}`}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-widest transition-all ${isAnnual ? "bg-brandAccent text-white shadow-lg" : "text-zinc-500 hover:text-white"}`}
            >
              ANNUAL (-15%)
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col p-10 rounded-[2.5rem] border transition-all duration-500 ${
                plan.highlight
                  ? "bg-zinc-900/80 border-brandAccent/30 shadow-[0_0_50px_rgba(255,87,34,0.05)]"
                  : "bg-[#0a0a0a] border-white/5 hover:border-white/10"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brandAccent text-white text-[9px] font-bold px-4 py-1.5 rounded-full tracking-[0.2em] uppercase">
                  Popular Choice
                </div>
              )}

              <div className="mb-10">
                <h3 className="text-[10px] font-mono tracking-[0.3em] text-zinc-500 uppercase mb-6">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tighter">
                    {plan.price !== "Custom" ? `$${plan.price}` : plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-zinc-500 text-xs font-mono uppercase">
                      /mo
                    </span>
                  )}
                </div>
                <p className="mt-6 text-zinc-400 text-[13px] leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="flex-1 space-y-4 mb-12">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div
                      className={`p-1 rounded-full transition-colors ${plan.highlight ? "bg-brandAccent/10 text-brandAccent" : "bg-white/5 text-zinc-500"}`}
                    >
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-zinc-300 text-[13px] tracking-tight group-hover:text-white transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-5 rounded-2xl flex items-center justify-center gap-3 font-bold text-[10px] tracking-[0.2em] uppercase transition-all group ${
                  plan.highlight
                    ? "bg-brandAccent text-white hover:bg-orange-600 shadow-xl shadow-brandAccent/10"
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {plan.cta}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingWidget;
