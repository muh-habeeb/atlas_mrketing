"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });

  // Parallax effects
  const textY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const svgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <footer ref={container} className="relative min-h-[90vh] bg-black text-white overflow-hidden flex flex-col justify-between pt-16 px-6 md:px-12">
      
      {/* Top Footer Links */}
      <div className="relative z-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-7xl mx-auto mb-8">
        <div className="flex flex-col gap-3">
          <h4 className="font-heading text-lg md:text-xl font-bold mb-2">Our Services</h4>
          <Link href="/moments" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Atlas Moments</Link>
          <Link href="/growth" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Atlas Growth</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-heading text-lg md:text-xl font-bold mb-2">Quick Links</h4>
          <Link href="/#about" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">About Us</Link>
          <Link href="/#services" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Our Services</Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Our Blogs</Link>
          <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Contact Us</Link>
        </div>
        <div className="flex flex-col gap-3 col-span-2 md:col-span-2 md:text-right">
          <h4 className="font-heading text-lg md:text-xl font-bold mb-2">Atlas Marketing Consulting</h4>
          <p className="text-gray-400 text-sm md:text-base max-w-xs md:ml-auto">Strategic marketing for ambitious Australian businesses across every sector.</p>
          <p className="text-gray-400 text-sm md:text-base mt-2">1305 Level 3/56 Scarborough St, Office 9<br/>Southport QLD 4215, Australia</p>
          <p className="text-gray-400 text-sm md:text-base">07 3543 1199</p>
          <p className="text-gray-400 text-sm md:text-base break-all">marketing@atlasmarketingconsulting.com.au</p>
        </div>
      </div>

      {/* SVG Graphics overlapping text */}
      <motion.div 
        style={{ y: svgY }}
        className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center opacity-30"
      >
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-white" />
          <path d="M0,60 Q25,30 50,60 T100,60" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-white" />
          <path d="M0,70 Q25,40 50,70 T100,70" fill="none" stroke="currentColor" strokeWidth="0.05" className="text-white" />
        </svg>
      </motion.div>

      {/* Giant Slide-up Text */}
      <div className="relative z-0 w-full flex justify-center items-end flex-grow pb-8 min-h-[30vh] overflow-hidden">
        <motion.div 
          style={{ y: textY, opacity }}
          className="w-full flex justify-center h-full items-end"
        >
          <h1 className="font-heading text-[20vw] md:text-[15vw] leading-[0.75] font-bold text-center tracking-tighter text-white mix-blend-overlay">
            ATLAS
          </h1>
        </motion.div>
      </div>
      
      {/* Bottom Bar */}
      <div className="relative z-20 flex flex-col sm:flex-row justify-between items-center w-full max-w-7xl mx-auto pb-8 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Atlas Marketing Consulting. All rights reserved.</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
