// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AthirstButton } from "./ui/AthirstButton";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "../data";


const CHAOTIC_ORDER = [2, 0, 3, 1];
const getChaoticDelay = (originalIndex: number) => {
  const chaoticIndex = CHAOTIC_ORDER.indexOf(originalIndex);
  return chaoticIndex * 0.25;
};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 120; // Slightly increased offset

      // Check if we're at the top of the page (home)
      if (scrollPosition < 200) {
        setActiveSection("home");
        return;
      }

      // Check other sections
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount to set initial state
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to handle smooth scroll
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Glassmorphism background - appears first */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-bg-primary/80 backdrop-blur-md border-b border-red-accent/20"
      />
      
      {/* Subtle red glow at the top - appears second */}
      <motion.div 
        initial={{ opacity: 0, scaleX: 0.5 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-red-accent/50 to-transparent origin-center"
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - appears LAST with TADAM! effect - now links to home */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.2,
              delay: 1.0,
              type: "spring",
              bounce: 0.4
            }}
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <div className="relative">
              <div className="w-8 h-8 bg-text-primary group-hover:bg-red-accent transition-colors duration-700" style={{ maskImage: 'url(/assets/nose.png)', maskSize: 'contain', maskRepeat: 'no-repeat' }} />
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-text-primary group-hover:bg-red-accent animate-pulse-slow transition-colors duration-700" />
            </div>
            <span className="text-2xl font-serif text-text-primary tracking-wide transition-colors duration-700 group-hover:text-red-accent">
              Red Nose<span className="text-red-accent transition-opacity duration-700 group-hover:opacity-80">.</span>
            </span>
          </motion.div>

          {/* Desktop Navigation - CENTERED with ACTIVE STATE */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-8">
            {/* Home link - now visible in navbar */}
            <motion.a
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0, ease: "easeOut" }}
              className={`relative text-sm tracking-wider uppercase group cursor-pointer transition-colors duration-700 ${
                activeSection === "home" 
                  ? 'text-text-primary' 
                  : 'text-text-primary/80 hover:text-text-primary'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
              {/* Active indicator - red line */}
              <span className={`absolute -bottom-1 left-0 h-px bg-red-accent/40 transition-all duration-700 ease-out ${
                activeSection === "home" ? 'w-full' : 'w-0'
              }`} />
              {/* Hover effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-accent/50 transition-all duration-700 ease-out group-hover:w-full" />
              {/* Glow effect */}
              <span className="absolute inset-0 blur-md bg-red-accent/0 group-hover:bg-red-accent/10 transition-all duration-700 -z-10" />
            </motion.a>

            {navItems.map((item, index) => {
              const delay = getChaoticDelay(index);
              const isActive = activeSection === item.id;
              
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1.0,
                    delay: delay,
                    ease: "easeOut"
                  }}
                  className={`relative text-sm tracking-wider uppercase group cursor-pointer transition-colors duration-700 ${
                    isActive ? 'text-text-primary' : 'text-text-primary/80 hover:text-text-primary'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.name}
                  {/* Active indicator - red line */}
                  <span className={`absolute -bottom-1 left-0 h-px bg-red-accent transition-all duration-700 ease-out ${
                    isActive ? 'w-full' : 'w-0'
                  }`} />
                  {/* Hover effect */}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-accent/50 transition-all duration-700 ease-out group-hover:w-full" />
                  {/* Glow effect */}
                  <span className="absolute inset-0 blur-md bg-red-accent/0 group-hover:bg-red-accent/10 transition-all duration-700 -z-10" />
                </motion.a>
              );
            })}
          </div>

          {/* Desktop Athirst Button - appears with links */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.9 }}
          >
            <AthirstButton>Athirst ?</AthirstButton>
          </motion.div>

          {/* Mobile menu button - appears last too */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 rounded-sm border border-red-accent/30 hover:border-red-accent transition-colors duration-700 group"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-text-primary group-hover:text-red-accent transition-colors duration-700" />
            ) : (
              <Menu className="w-5 h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-text-primary group-hover:text-red-accent transition-colors duration-700" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:hidden fixed inset-x-0 top-20"
          >
            <div className="mx-4 rounded-sm overflow-hidden">
              <div className="absolute inset-0 bg-bg-primary/95 backdrop-blur-md border border-red-accent/20" />
              
              <div className="relative py-4">
                {/* Home link for mobile */}
                <motion.a
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
                  className={`block px-6 py-3 transition-colors duration-500 text-sm tracking-wider uppercase cursor-pointer ${
                    activeSection === "home" 
                      ? 'text-red-accent bg-red-accent/10' 
                      : 'text-text-primary/80 hover:text-text-primary hover:bg-red-accent/10'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                    setIsMenuOpen(false);
                  }}
                >
                  <span className="relative">
                    Home
                    {activeSection === "home" && (
                      <span className="absolute -bottom-1 left-0 w-full h-px bg-red-accent" />
                    )}
                  </span>
                </motion.a>

                {/* Mobile links with chaotic order */}
                {CHAOTIC_ORDER.map((chaoticIndex, i) => {
                  const item = navItems[chaoticIndex];
                  const isActive = activeSection === item.id;
                  
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.7,
                        delay: (i + 1) * 0.15, // +1 because Home is now index 0
                        ease: "easeOut"
                      }}
                      className={`block px-6 py-3 transition-colors duration-500 text-sm tracking-wider uppercase cursor-pointer ${
                        isActive 
                          ? 'text-red-accent bg-red-accent/10' 
                          : 'text-text-primary/80 hover:text-text-primary hover:bg-red-accent/10'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                        setIsMenuOpen(false);
                      }}
                    >
                      <span className="relative">
                        {item.name}
                        {isActive && (
                          <span className="absolute -bottom-1 left-0 w-full h-px bg-red-accent" />
                        )}
                      </span>
                    </motion.a>
                  );
                })}
                
                <motion.div 
                  className="px-6 pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <button 
                    type="button"
                    className="w-full px-6 py-2 bg-red-accent/30 backdrop-blur-md rounded-md border border-text-primary/10 hover:border-text-primary/20 text-text-primary/80 hover:text-text-primary/90 shadow-lg hover:shadow-text-primary/20 transition-colors duration-500 cursor-pointer"
                  >
                    Collection Privée
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}