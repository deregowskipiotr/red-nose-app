import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { storyItems } from "../data";

export function Story() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const leftSideRef = useRef<HTMLDivElement>(null);
  const [leftHeight, setLeftHeight] = useState(0);

  // Measure left side height to match right side
  useEffect(() => {
    if (leftSideRef.current) {
      setLeftHeight(leftSideRef.current.offsetHeight);
    }
  }, []);

  

  return (
    <section id="story" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* TOP: Title and Description animated top-to-bottom */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-text-primary tracking-wide">
              La Nostra Storia
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-text-secondary mt-6 max-w-4xl mx-auto text-lg italic leading-relaxed">
              They said it couldn't be done • They were probably right • 
              La Nostra Storia isn't just a story—it's a collection of moments best forgotten • 
              From the legendary 'Flood of '25' (a broken pipe and 12 cases of cheap rosé) to the infamous 'Incident with the goat' • 
              We didn't choose the garbage life • The garbage life chose us • And honestly? It's fine.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
            className="w-24 h-px bg-red-accent/50 mx-auto mt-8 origin-center"
          />
        </div>

        {/* BOTTOM: Split layout with Left Links and Right Image Field */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* LEFT SIDE: Inputs/Links sliding from left to right */}
          <div ref={leftSideRef} className="flex flex-col space-y-4">
            {storyItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3 + (index * 0.15), 
                  ease: "easeOut" 
                }}
                onClick={() => setActiveImageIndex(index)}
                className={`
                  w-full text-left p-6 rounded-md border backdrop-blur-md transition-colors duration-700 cursor-pointer
                  ${activeImageIndex === index 
                    ? 'bg-red-accent/10 border-red-accent text-text-primary shadow-[0_0_15px_rgba(255,59,59,0.1)]' 
                    : 'bg-black/20 border-text-primary/10 text-text-primary/60 hover:border-red-accent/40 hover:text-text-primary hover:bg-black/40'
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                    <p className={`text-sm tracking-wide ${activeImageIndex === index ? 'text-text-primary/80' : 'text-text-primary/50'}`}>
                      {item.description}
                    </p>
                  </div>
                  {/* Subtle indicator arrow */}
                  <span className={`text-2xl transition-all duration-700 ${activeImageIndex === index ? 'text-red-accent opacity-100 translate-x-0' : 'text-transparent opacity-0 -translate-x-4'}`}>
                    →
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* RIGHT SIDE: Image Field sliding from right to left - now matches left side height */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            style={{ height: leftHeight ? `${leftHeight}px` : 'auto' }}
            className="relative rounded-md overflow-hidden bg-bg-secondary border border-text-primary/10 shadow-[0_20px_50px_rgba(255,59,59,0.05)]"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImageIndex}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(10px)' }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                src="" /* Empty img as requested */
                alt={storyItems[activeImageIndex].imgAlt}
                className="absolute inset-0 w-full h-full object-cover bg-gray-900/50 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </AnimatePresence>
            
            {/* Ambient inner glow to keep the glassmorphism dark aesthetic */}
            <div className="absolute inset-0 rounded-md box-border ring-1 ring-inset ring-text-primary/5 pointer-events-none z-10" />
            <div className="absolute inset-0 bg-linear-to-tr from-black/60 via-transparent to-red-accent/10 pointer-events-none z-10 mix-blend-overlay" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}