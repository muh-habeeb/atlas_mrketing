"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Home, User, Briefcase, Camera, Mail, Menu, X, Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

// Helper component for navigation links
const NavLink = ({
  href,
  icon: Icon,
  label
}) => (
  <Link
    href={href}
    className="group flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors whitespace-nowrap">
    <Icon className="w-4 h-4 opacity-70 group-hover:opacity-100" />
    <span>{label}</span>
  </Link>
)

const atlasGroups = [
  { name: "Atlas Business Group", url: "https://portal.atlasbusinessgroup.com.au/i/atlas-business-group", img: "https://portal.atlasbusinessgroup.com.au/file/ee57ac7c6c08630aec7fa259b3ef8785/d0b70ffc-4e3f-4658-8c3e-11b6bae68fdb/Atlas+Group+LOGO+%281%29.png" },
  { name: "Atlas Lawyers", url: "https://atlaslawyers.com.au/", img: "https://portal.atlasbusinessgroup.com.au/file/219588e4d1b13257fa0f3c6e8a488e18/bb24d51c-46ec-48d2-a245-3fd2a5abada0/Atlas_Lawyers_LOGO__1_-removebg-preview.png" },
  { name: "Atlas Lawyers Migration", url: "https://atlaslawyersmigration.com.au/", img: "https://portal.atlasbusinessgroup.com.au/file/6eddcdacfb42af4a96c7678fde1d3f60/7081efe4-f7a6-4835-bffd-0bdd6cb73d81/Atlas-Lawyers-Migration-LOGO-2-scaled-e1768989136309.png" },
  { name: "Atlas Lawyers Employment", url: "https://atlaslawyersemployment.com.au/", img: "https://portal.atlasbusinessgroup.com.au/file/fdbcced6489eef8b5d2ab7abfc3bb926/4a10acab-ccb8-4ec7-9c54-327d62706753/Atlas_Lawyers_Employment_LOGO-removebg-preview.png" },
  { name: "Atlas Lawyers Conveyancing", url: "https://portal.atlasbusinessgroup.com.au/i/conveyancing", img: "https://portal.atlasbusinessgroup.com.au/file/48f8a24b41d5751e1d2654a21240cb50/a0d0917b-d91e-48e7-945a-22e1ade1cf3a/Atlas_Lawyers_Conveyancing_LOGO__1_-removebg-preview+%281%29.png" },
  { name: "Atlas Lawyers Personal Injury", url: "https://atlaslawyers.com.au/services/personal-injury/", img: "https://portal.atlasbusinessgroup.com.au/file/c96e5ff1478088561055d8b43752d481/70d00227-a409-42e4-8e47-abcf7f2c3bbe/Atlas_Personal_Injury_LOGO-removebg-preview.png" },
  { name: "Atlas Lawyers Wills & Estates", url: "https://atlaslawyers.com.au/services/wills-estates-elder-law/", img: "https://portal.atlasbusinessgroup.com.au/file/f11cb65eda5559ca681924f69f2d68a9/b7446566-df66-4fce-b6b4-0c03b0d4d710/Atlas_Wills___Estates_LOGO-removebg-preview.png" },
  { name: "Atlas Lawyers Family", url: "https://portal.atlasbusinessgroup.com.au/i/family-law-services", img: "https://portal.atlasbusinessgroup.com.au/file/f37ab5f41e6c0a8817a1663144f3f536/da1d1bdc-ff54-44e9-bdf2-ca175c08554d/Atlas+Family+LOGO.png" },
  { name: "Atlas Lawyers Commercial", url: "https://portal.atlasbusinessgroup.com.au/i/commercial-law", img: "https://portal.atlasbusinessgroup.com.au/file/01acbe25b18ca97e431d1a65c9c763ad/a2ac23b3-bc57-4beb-94b1-a9e38acfa509/Atlas_Commercial_LOGO__1_-removebg-preview.png" },
  { name: "Atlas Real Estate", url: "https://atlasrealestate.com.au/", img: "https://portal.atlasbusinessgroup.com.au/file/6853db468fe6ef6250a6a8f234fddfc2/55fc212d-a88f-4e9f-869a-a904612b4ba5/Atlas_Real_Estate_LOGO__2_-removebg-preview.png" },
  { name: "Atlas Marketing Consulting", url: "https://atlasmarketingconsulting.com.au/", img: "https://portal.atlasbusinessgroup.com.au/file/34ef0fdaac893d563abbffec3efc82d9/570ce2f2-16a4-4ff3-891c-d41c792e5d85/Atlas_Marketing_Consulting_LOGO-removebg-preview.png" },
];

export function NotchNavbar({
  className,
  ...props
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isGroupsOpen, setIsGroupsOpen] = useState(false)
  const groupsRef = useRef(null)

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (groupsRef.current && !groupsRef.current.contains(event.target)) {
        setIsGroupsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Navigation items configuration
  const items = {
    left: [
      { label: "Home", href: "/", icon: Home },
      { label: "About", href: "/#about", icon: User },
      { label: "Growth", href: "/growth", icon: Briefcase }
    ],
    right: [
      { label: "Moments", href: "/moments", icon: Camera },
      { label: "Contact", href: "/#contact", icon: Mail }
    ]
  }

  return (
    <>
      <header
        className={cn("fixed top-0 inset-x-0 z-50 h-16 flex px-0", className)}
        {...props}>
        
        {/* Left Side Bar - Flexible width */}
        <div className="flex-1 h-10 bg-zinc-50 dark:bg-black z-20 relative min-w-0">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="39.5"
              x2="100%"
              y2="39.5"
              stroke="currentColor"
              strokeOpacity={0.05}
              strokeWidth={0.5}
              className="text-foreground" />
            <line
              x1="0"
              y1="36.5"
              x2="100%"
              y2="36.5"
              stroke="currentColor"
              strokeOpacity={0.05}
              strokeWidth={0.5}
              className="text-foreground" />
          </svg>
        </div>

        {/* Responsive Notch Container - 3 Slices */}
        <div className="flex h-16 relative z-10 shrink-0 -ml-px">
          
          {/* Left Slice (Corner) */}
          <div className="w-[50px] h-full relative shrink-0">
            {/* Glass Background */}
            <div
              className="absolute inset-0 bg-zinc-50 dark:bg-black"
              style={{ clipPath: "path('M0 0 H50 V64 C25 64 25 40 0 40 Z')" }} />
            {/* Outlines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 50 64">
              <path
                d="M0 39.5 C25 39.5 25 63.5 50 63.5"
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.05}
                strokeWidth={0.5}
                className="text-foreground" />
              <path
                d="M0 36.5 C25 36.5 25 60.5 50 60.5"
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.05}
                strokeWidth={0.5}
                className="text-foreground" />
            </svg>
          </div>

          {/* Center Slice (Flexible Content Area) */}
          <div className="flex-1 h-full relative min-w-0 -ml-px">
             {/* Background & Lines Layer */}
             <div className="absolute inset-0 bg-zinc-50 dark:bg-black">
                 <svg
                   className="absolute inset-0 w-full h-full pointer-events-none"
                   preserveAspectRatio="none">
                   <line
                     x1="0"
                     y1="63.5"
                     x2="100%"
                     y2="63.5"
                     stroke="currentColor"
                     strokeOpacity={0.05}
                     strokeWidth={0.5}
                     className="text-foreground" />
                   <line
                     x1="0"
                     y1="60.5"
                     x2="100%"
                     y2="60.5"
                     stroke="currentColor"
                     strokeOpacity={0.05}
                     strokeWidth={0.5}
                     className="text-foreground" />
                 </svg>
             </div>

             {/* Content Layer */}
             <div
               className="relative w-full h-full flex items-end justify-between pb-2 px-4 md:px-8">
               
               {/* Desktop Left Nav */}
               <nav className="hidden md:flex gap-8 mb-1 shrink-0">
                {items.left.map(item => (
                  <NavLink key={item.label} {...item} />
                ))}
              </nav>

              {/* Mobile Menu Button (Left) */}
              <button
                className="md:hidden mb-1 p-1 text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu">
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              {/* Logo (Center) */}
              <div className="flex justify-center shrink-0 mx-2 md:mx-4 mt-1">
                {props.logo || (
                  <Link href="/" className="flex items-center justify-center relative group text-lg font-bold font-heading text-foreground">
                    ATLAS
                  </Link>
                )}
              </div>

              {/* Desktop Right Nav */}
              <nav className="hidden md:flex gap-6 items-center shrink-0">
                {items.right.map(item => (
                  <NavLink key={item.label} {...item} />
                ))}
                
                <div
                  className="flex gap-4 pl-4 border-l border-foreground/10 shrink-0 items-center relative" ref={groupsRef}>
                  <button
                    onClick={() => setIsGroupsOpen(!isGroupsOpen)}
                    className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-background bg-foreground rounded-full hover:bg-foreground/90 transition-colors shadow-sm shadow-foreground/10 whitespace-nowrap">
                    <Globe className="w-4 h-4 opacity-80" />
                    Atlas Groups
                    <ChevronDown className={cn("w-4 h-4 transition-transform", isGroupsOpen && "rotate-180")} />
                  </button>
                  
                  <AnimatePresence>
                    {isGroupsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full right-0 mt-4 bg-white border border-black/10 rounded-xl shadow-2xl overflow-hidden w-[240px] p-4"
                      >
                        <div className="text-[10px] tracking-[0.15em] uppercase text-gray-400 font-sans font-medium mb-3 pb-2 border-b border-black/5">
                          Atlas Business Group Entities
                        </div>
                        <div className="grid grid-cols-1 gap-1 max-h-[380px] overflow-y-auto">
                          {atlasGroups.map((group) => (
                            <a
                              key={group.name}
                              href={group.url}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group/item"
                            >
                              <img src={group.img} alt={group.name} className="w-8 h-8 object-contain rounded" />
                              <span className="text-[12px] font-bold text-gray-900 font-sans leading-snug group-hover/item:text-primary transition-colors">
                                {group.name}
                              </span>
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </nav>


             </div>
          </div>

          {/* Right Slice (Corner) */}
          <div className="w-[50px] h-full relative shrink-0 -ml-px">
            {/* Glass Background */}
            <div
              className="absolute inset-0 bg-zinc-50 dark:bg-black"
              style={{ clipPath: "path('M0 0 H50 V40 C25 40 25 64 0 64 Z')" }} />
            {/* Outlines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 50 64">
              <path
                d="M0 63.5 C25 63.5 25 39.5 50 39.5"
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.05}
                strokeWidth={0.5}
                className="text-foreground" />
              <path
                d="M0 60.5 C25 60.5 25 36.5 50 36.5"
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.05}
                strokeWidth={0.5}
                className="text-foreground" />
            </svg>
          </div>

        </div>

        {/* Right Side Bar - Flexible width */}
        <div
          className="flex-1 h-10 bg-zinc-50 dark:bg-black z-20 relative min-w-0 -ml-px">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="39.5"
              x2="100%"
              y2="39.5"
              stroke="currentColor"
              strokeOpacity={0.05}
              strokeWidth={0.5}
              className="text-foreground" />
            <line
              x1="0"
              y1="36.5"
              x2="100%"
              y2="36.5"
              stroke="currentColor"
              strokeOpacity={0.05}
              strokeWidth={0.5}
              className="text-foreground" />
          </svg>
        </div>

      </header>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-zinc-50 dark:bg-black border-b border-foreground/5 p-4 md:hidden shadow-lg">
             <nav className="flex flex-col gap-2">
               {/* Combine all items */}
               {[...items.left, ...items.right].map(item => (
                 <Link
                   key={item.label}
                   href={item.href}
                   className="flex items-center gap-3 p-3 rounded-lg hover:bg-foreground/5 transition-colors"
                   onClick={() => setIsMobileMenuOpen(false)}>
                   <item.icon className="w-5 h-5 opacity-70" />
                   <span className="font-medium text-foreground/90">{item.label}</span>
                 </Link>
               ))}
               <div className="h-px bg-foreground/10 my-2" />
               <div className="flex flex-col gap-2">
                 <button
                   onClick={() => setIsGroupsOpen(!isGroupsOpen)}
                   className="flex items-center justify-between w-full p-3 rounded-lg bg-foreground text-background font-medium mt-2">
                   <div className="flex items-center gap-2">
                     <Globe className="w-5 h-5 opacity-80" />
                     Atlas Groups
                   </div>
                   <ChevronDown className={cn("w-4 h-4 transition-transform", isGroupsOpen && "rotate-180")} />
                 </button>
                 <AnimatePresence>
                   {isGroupsOpen && (
                     <motion.div
                       initial={{ opacity: 0, height: 0 }}
                       animate={{ opacity: 1, height: "auto" }}
                       exit={{ opacity: 0, height: 0 }}
                       className="flex flex-col gap-2 pl-4 overflow-y-auto max-h-[40vh] overscroll-contain"
                       data-lenis-prevent="true"
                     >
                       {atlasGroups.map(group => (
                         <a
                           key={group.name}
                           href={group.url}
                           target="_blank"
                           rel="noreferrer"
                           className="flex items-center gap-3 p-2 rounded-lg hover:bg-foreground/5 text-foreground/80 font-medium text-sm transition-colors shrink-0"
                         >
                           <img src={group.img} alt={group.name} className="w-6 h-6 object-contain rounded" />
                           {group.name}
                         </a>
                       ))}
                     </motion.div>
                   )}
                 </AnimatePresence>
               </div>
             </nav>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
