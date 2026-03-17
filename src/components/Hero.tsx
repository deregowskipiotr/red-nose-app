// src/components/Hero.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { LiquidNewButton } from "./ui/LiquidNewButton";
import { LiquidGlassButton } from "./ui/LiquidGlassButton";

export function Hero() {
  const [particles] = useState(() => 
    Array.from({ length: 5 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      xOffset: Math.random() * 20 - 10,
      duration: 3 + Math.random() * 2
    }))
  );
  return (
    <section className="relative min-h-screen mt-15 md:mt-0 flex items-center justify-center overflow-hidden">
      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE - TEXT CONTENT */}
          <div className="text-center lg:text-left">
            {/* Main title with chaotic entrance */}
            <motion.div
              initial={{ opacity: 0, x: -100, rotate: -10 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.2, 0.9, 0.3, 1.1],
                type: "spring",
                stiffness: 100,
                damping: 12
              }}
            >
              <h1 className="text-5xl md:text-6xl font-serif text-text-primary">
                La Cappella Sistina
                <span className="block text-2xl md:text-3xl text-red-accent mt-2">
                  del Vino Questionabile
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <p className="text-text-secondary mt-4 italic text-lg">
                "Every bottle is a masterpiece... of disappointment"
              </p>
            </motion.div>

            {/* Taglines */}
            <motion.div 
              className="space-y-3 mt-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.5
                  }
                }
              }}
            >
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -50, rotate: -5 },
                  visible: { 
                    opacity: 1, x: 0, rotate: 0,
                    transition: { type: "spring", stiffness: 200, damping: 15 }
                  }
                }}
                className="text-text-secondary text-lg italic"
              >
                "Aging in plastic since Tuesday • 4.99 PLN • No refunds, only memories"
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: -30, rotate: 10 },
                  visible: { 
                    opacity: 1, y: 0, rotate: 0,
                    transition: { type: "spring", stiffness: 150, damping: 12 }
                  }
                }}
                className="text-text-secondary/80 text-base italic"
              >
                "Contains 12% alcohol and 88% regret • May cause dancing"
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 50, rotate: 15 },
                  visible: { 
                    opacity: 1, x: 0, rotate: 0,
                    transition: { type: "spring", stiffness: 100, damping: 10 }
                  }
                }}
                className="border-t border-red-accent/20 pt-3 mt-3"
              >
                <p className="text-red-accent text-sm italic">
                  "Best consumed in darkness • or with eyes closed • or not at all"
                </p>
              </motion.div>
            </motion.div>

            {/* CTA Buttons - OUR MASTERPIECE COLLECTION */}
            <motion.div 
              className="flex flex-col sm:flex-row w-full gap-4 justify-center lg:justify-start mt-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              {/* Liquid New Button - full width on mobile */}
              <LiquidNewButton className="w-full sm:w-[calc(50%-0.5rem)] sm:max-w-[280px]">
                Collection Privée
              </LiquidNewButton>

              {/* Liquid Glass Button */}
              <LiquidGlassButton className="w-full sm:w-[calc(50%-0.5rem)] sm:max-w-[280px]">
                Learn More
              </LiquidGlassButton>
            </motion.div> 
          </div>

          {/* RIGHT SIDE - IMAGE (unchanged, it's perfect) */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 80,
              damping: 12
            }}
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02, rotate: 2 }}
                className="relative z-10"
              >
                <img 
                  src="/assets/hero-image.png" 
                  alt="Luxury wine... or is it?" 
                  className="w-full max-w-md rounded-lg shadow-2xl"
                />
              </motion.div>

              <motion.div 
                className="absolute -inset-4 bg-red-accent/20 blur-2xl -z-10 rounded-full"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {particles.map((particle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-red-accent/30 rounded-full"
                  style={{ top: particle.top, left: particle.left }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, particle.xOffset, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                />
              ))}

              <motion.div
                className="absolute -top-6 -right-6 w-16 h-16 bg-red-accent/10 rounded-full border border-red-accent/30 flex items-center justify-center backdrop-blur-sm"
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ rotate: { duration: 20, repeat: Infinity }, scale: { duration: 3, repeat: Infinity } }}
              >
                <span className="text-red-accent text-2xl">🍷</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-bg-primary to-transparent pointer-events-none" />
    </section>
  );
}