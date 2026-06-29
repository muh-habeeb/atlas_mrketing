"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={container} className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Scroll-Driven SVG Graphics */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" className="opacity-10 stroke-primary/30">
          <motion.circle 
            cx="500" cy="500" r="300" fill="none" strokeWidth="2"
            initial={{ strokeDasharray: "0 2000" }}
            animate={{ strokeDasharray: "2000 0" }}
            transition={{ duration: 4, ease: "easeInOut" }}
          />
          <motion.circle 
            cx="500" cy="500" r="400" fill="none" strokeWidth="1"
            initial={{ strokeDasharray: "0 3000" }}
            animate={{ strokeDasharray: "3000 0" }}
            transition={{ duration: 5, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.path 
            d="M200,800 Q500,200 800,800" fill="none" strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 1 }}
          />
        </svg>
      </motion.div>

      <motion.div style={{ scale, y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }} className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-4xl"
        >
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Elevating Brands Through Strategy & Design
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-2xl mb-12"
        >
          <p className="text-lg md:text-xl text-muted-foreground font-sans">
            Atlas Marketing Consulting is a premium creative agency dedicated to transforming your vision into compelling digital experiences and measurable growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link
            href="#services"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all duration-300 active:scale-95"
          >
            Explore Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/#contact"
            className="flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-medium rounded-full hover:bg-secondary/80 transition-all duration-300 active:scale-95 border border-border"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
