import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LiquidNewButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const LiquidNewButton: React.FC<LiquidNewButtonProps> = ({ 
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
        transform: 'none',
      }}
    >
      {/* 1. GLASSMORPHISM BACKGROUND */}
      <div className="absolute inset-0 bg-black/5 backdrop-blur-md rounded-md border border-red-accent/10 z-0 transition-colors duration-500 group-hover:bg-black/20" />

      {/* 2. DEFAULT STATIC BORDER */}
      <div className="absolute inset-0 rounded-md box-border ring-1 ring-text-primary/20 z-10 transition-colors duration-500 group-hover:ring-transparent pointer-events-none" />

      {/* 3. LIQUID SHINNING METALLIC BORDER (HOVER ONLY) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 z-20 pointer-events-none rounded-md overflow-hidden"
            style={{
              padding: '1px',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
            }}
          >
            <div 
              className="absolute -inset-full w-[300%] h-[300%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_2.5s_linear_infinite]"
              style={{
                background: 'conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 25%, #FF3B3B 50%, transparent 75%, transparent 100%)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. LIQUID GLOW FOLLOWING THE SHINE */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 z-20 pointer-events-none rounded-md overflow-hidden"
            style={{
              padding: '1px',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
            }}
          >
            <div 
              className="absolute -inset-full w-[300%] h-[300%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_2.5s_linear_infinite]"
              style={{
                background: 'conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 35%, #FF3B3B 50%, transparent 65%, transparent 100%)',
                filter: 'blur(8px)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. TOP INSET HIGHLIGHT */}
      <div className="absolute inset-0 shadow-[inset_0_1px_1px_rgba(248,247,244,0.15)] rounded-md z-30 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

      {/* 6. BUTTON CONTENT */}
      <span className="relative z-40 block text-text-primary font-medium tracking-wide">
        {children}
      </span>
    </motion.button>
  );
};