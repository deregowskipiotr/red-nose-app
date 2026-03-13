import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LiquidGlassButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const LiquidGlassButton: React.FC<LiquidGlassButtonProps> = ({ 
  children, 
  className = '', 
  onClick 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className={`
        relative group overflow-hidden
        rounded-md px-8 py-3
        transition-all duration-500 ease-out cursor-pointer
        ${className}
      `}
      style={{
        transform: 'none'
      }}
    >
      {/* 1. GLASSMORPHISM BASE - now with red accent */}
      <div className="absolute inset-0 bg-text-primary/5 backdrop-blur-md rounded-md border border-red-accent/10 z-0 transition-colors duration-500 group-hover:bg-text-primary/20 group-hover:border-red-accent/30" />

      {/* 2. GLOWING AURORA/LIQUID BACKGROUND ON HOVER - RED NOSE EDITION */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 z-10 pointer-events-none rounded-md overflow-hidden mix-blend-screen"
          >
            <div className="absolute -inset-1">
              {/* Pulsing RED blobs for that signature color */}
              <div className="absolute w-[200%] h-[200%] left-[-50%] top-[-50%] animate-[pulse_3s_ease-in-out_infinite_alternate]"
                style={{
                  background: 'radial-gradient(circle at 30% 50%, rgba(255, 59, 59, 0.4), transparent 50%), radial-gradient(circle at 70% 50%, rgba(200, 40, 40, 0.3), transparent 50%)',
                  filter: 'blur(12px)',
                }}
              />
              {/* Slower spinning ambient highlight - keeping it white/cream for contrast */}
              <div className="absolute w-[200%] h-[200%] left-[-50%] top-[-50%] animate-[spin_8s_linear_infinite]"
                style={{
                  background: 'conic-gradient(from 0deg at 50% 50%, transparent 0%, rgba(248, 247, 244, 0.3) 25%, transparent 50%, rgba(248, 247, 244, 0.3) 75%, transparent 100%)',
                  filter: 'blur(10px)',
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. PREMIUM TOP INSET HIGHLIGHT */}
      <div className="absolute inset-0 shadow-[inset_0_1px_1px_rgba(248,247,244,0.15)] rounded-md z-30 pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-100" />

      {/* 4. BUTTON TEXT */}
      <span className="relative z-40 block text-text-primary font-medium tracking-wide">
        {children}
      </span>
    </motion.button>
  );
};