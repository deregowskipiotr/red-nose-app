import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wine } from 'lucide-react';

interface LiquidGlassCardProps {
  className?: string;
  title?: string;
  description?: string;
}

export const LiquidGlassCard: React.FC<LiquidGlassCardProps> = ({ 
  className = '',
  title = "Nebula Design",
  description = "Experience the next generation of glassmorphism. Fluid, ambient, and beautifully rendered without heavy impact."
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`
        relative group overflow-hidden
        rounded-xl w-80 h-96 p-8 flex flex-col justify-between
        transition-all duration-500 ease-out
        ${className}
      `}
      style={{
        transform: 'none'
      }}
    >
      {/* 1. GLASSMORPHISM BASE - now with red accent border */}
      <div className="absolute inset-0 bg-text-primary/5 backdrop-blur-xl rounded-xl border border-red-accent/10 z-0 transition-colors duration-500 group-hover:bg-text-primary/15 group-hover:border-red-accent/20" />

      {/* 2. GLOWING AURORA/LIQUID BACKGROUND ON HOVER - RED NOSE EDITION */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute inset-0 z-10 pointer-events-none rounded-xl overflow-hidden mix-blend-screen"
          >
            <div className="absolute -inset-1">
               {/* Pulsing RED blobs for that signature color */}
               <div className="absolute w-[200%] h-[200%] left-[-50%] top-[-50%] animate-[pulse_4s_ease-in-out_infinite_alternate]"
                 style={{
                    background: 'radial-gradient(circle at 20% 80%, rgba(255, 59, 59, 0.45), transparent 60%), radial-gradient(circle at 80% 20%, rgba(200, 40, 40, 0.45), transparent 60%)',
                    filter: 'blur(20px)',
                 }}
               />
               {/* Slower spinning ambient white highlight */}
               <div className="absolute w-[200%] h-[200%] left-[-50%] top-[-50%] animate-[spin_10s_linear_infinite]"
                 style={{
                    background: 'conic-gradient(from 0deg at 50% 50%, transparent 0%, rgba(248, 247, 244, 0.2) 25%, transparent 50%, rgba(248, 247, 244, 0.2) 75%, transparent 100%)',
                    filter: 'blur(15px)',
                 }}
               />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. PREMIUM TOP INSET HIGHLIGHT */}
      <div className="absolute inset-0 shadow-[inset_0_1px_1px_rgba(248,247,244,0.15)] rounded-xl z-20 pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-100" />

      {/* 4. CARD CONTENT */}
      <div className="relative z-30 flex flex-col h-full text-text-primary">
        {/* Top Section */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide mb-3">{title}</h2>
          <p className="text-sm text-text-primary/70 leading-relaxed max-w-[90%]">
            {description}
          </p>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto flex items-center justify-between">
          {/* Left Icons */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-red-accent/5 border border-red-accent/20 group-hover:bg-red-accent/10 transition-colors duration-300">
              <Sparkles className="w-4 h-4 text-red-accent/80" />
            </div>
            <div className="p-2 rounded-full bg-red-accent/5 border border-red-accent/20 group-hover:bg-red-accent/10 transition-colors duration-300">
              <Wine className="w-4 h-4 text-red-accent/80" />
            </div>
          </div>

          {/* Right Link */}
          <motion.a 
            href="#" 
            className="text-sm font-medium text-text-primary flex items-center gap-1 group/link"
            whileHover={{ x: 2 }}
          >
            discover more
            <motion.span 
              className="inline-block text-red-accent"
              initial={{ x: 0 }}
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};