"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "moments",
    title: "Atlas Moments",
    subtitle: "Photography & Videography",
    description: "Capture life's most meaningful moments with premium photography and cinematic videography.",
    href: "/moments",
    bgClass: "bg-slate-900", // Placeholder until we have actual images
  },
  {
    id: "growth",
    title: "Atlas Growth",
    subtitle: "Business Growth & Marketing",
    description: "Helping businesses grow through strategic content, brand strategy, and high-impact marketing.",
    href: "/growth",
    bgClass: "bg-slate-800",
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your Service
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Two distinct paths, one premium standard. Select the service that aligns with your current needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
            >
              <Link href={service.href} className="group relative block aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] lg:aspect-square overflow-hidden rounded-[2rem]">
                {/* Background (Replace with next/image later) */}
                <div className={`absolute inset-0 w-full h-full ${service.bgClass} transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105`} />
                
                {/* Dark Overlay that fades in */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
                    <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/80 font-medium mb-6 font-sans">
                      {service.subtitle}
                    </p>
                    
                    {/* Description fades in */}
                    <p className="text-white/90 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-sans mb-8">
                      {service.description}
                    </p>
                    
                    {/* Button */}
                    <div className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full active:scale-95 transition-transform">
                      Explore <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
