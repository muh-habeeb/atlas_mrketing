"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function WhoWeAre() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const svgY = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);
  const svgRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } },
  };

  return (
    <section id="about" ref={container} className="py-24 md:py-32 bg-background relative z-10 overflow-hidden">
      
      {/* Scroll-Driven SVG Graphics */}
      <motion.div 
        style={{ y: svgY, rotate: svgRotate }}
        className="absolute top-10 -right-20 z-0 pointer-events-none opacity-20 text-primary/40"
      >
        <svg width="400" height="400" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
              Who We Are
            </h2>
            <div className="h-px w-full bg-border mb-8" />
            <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-6 font-sans">
              Atlas Marketing Consulting is driven by a singular mission: to help businesses scale through intentional design, strategic marketing, and high-end content creation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-sans">
              We approach every project not just as marketers, but as business partners. Our philosophy is rooted in authenticity and measurable results. We believe that true growth happens when a brand's narrative perfectly aligns with its audience's desires.
            </p>
          </motion.div>

          <div className="flex flex-col gap-12 justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="pl-0 lg:pl-12 border-l-0 lg:border-l border-border"
            >
              <h3 className="font-heading text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <span className="w-8 h-px bg-primary inline-block"></span>
                Our Experience
              </h3>
              <p className="text-muted-foreground font-sans">
                Years of industry expertise combined with a passion for modern aesthetics. We've helped countless brands elevate their digital presence and capture their most important moments.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="pl-0 lg:pl-12 border-l-0 lg:border-l border-border"
            >
              <h3 className="font-heading text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <span className="w-8 h-px bg-primary inline-block"></span>
                Our Approach
              </h3>
              <p className="text-muted-foreground font-sans">
                Minimalist, premium, and focused. We strip away the noise to deliver solutions that are both visually stunning and highly effective.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
