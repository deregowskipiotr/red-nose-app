import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Zap } from 'lucide-react';
import { LiquidMetalModal } from './LiquidMetalModal';

interface LiquidMetalCardProps {
  className?: string;
  title?: string;
  description?: string;
}

export const LiquidMetalCard: React.FC<LiquidMetalCardProps> = ({ 
  className = '',
  title = "Quantum Core",
  description = "Precision engineering wrapped in a continuous liquid metal stream. Designed for focus and zero layout shift."
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`
        relative group overflow-hidden
        rounded-md w-80 h-96 p-8 flex flex-col justify-between
        transition-all duration-500 ease-out
        ${className}
      `}
      style={{
        transform: 'none'
      }}
    >
      {/* 1. GLASSMORPHISM BACKGROUND - with red accent */}
      <div className="absolute inset-0 bg-black/5 backdrop-blur-xl rounded-md border border-red-accent/10 z-0 transition-colors duration-500 group-hover:bg-black/20" />

      {/* 2. DEFAULT STATIC BORDER */}
      <div className="absolute inset-0 rounded-md box-border ring-1 ring-text-primary/20 z-10 transition-colors duration-500 group-hover:ring-transparent pointer-events-none" />

      {/* 3. LIQUID SHINNING METALLIC BORDER (HOVER ONLY) - RED EDITION */}
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
              className="absolute -inset-full w-[300%] h-[300%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite]"
              style={{
                background: 'conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 25%, #FF3B3B 50%, transparent 75%, transparent 100%)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. LIQUID GLOW FOLLOWING THE SHINE - RED GLOW */}
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
              className="absolute -inset-full w-[300%] h-[300%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite]"
              style={{
                background: 'conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 35%, #FF3B3B 50%, transparent 65%, transparent 100%)',
                filter: 'blur(12px)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. TOP INSET HIGHLIGHT */}
      <div className="absolute inset-0 shadow-[inset_0_1px_1px_rgba(248,247,244,0.15)] rounded-md z-30 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

      {/* 6. CARD CONTENT */}
      <div className="relative z-40 flex flex-col h-full text-text-primary">
        {/* Top Section */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide mb-3">{title}</h2>
          <p className="text-sm text-text-primary/70 leading-relaxed max-w-[90%]">
            {description}
          </p>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto flex items-center justify-between">
          {/* Left Icons - now with red accent theme */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-red-accent/5 border border-red-accent/20 group-hover:bg-red-accent/10 transition-colors duration-300">
              <Cpu className="w-4 h-4 text-red-accent/80" />
            </div>
            <div className="p-2 rounded-full bg-red-accent/5 border border-red-accent/20 group-hover:bg-red-accent/10 transition-colors duration-300">
              <Zap className="w-4 h-4 text-red-accent/80" />
            </div>
          </div>

          {/* Right Link */}
          <motion.button 
            type="button"
            className="text-sm font-medium text-text-primary flex items-center gap-1 group/link cursor-pointer"
            whileHover={{ x: 2 }}
            onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(true);
            }}
          >
            explore
            <motion.span 
              className="inline-block text-red-accent"
              initial={{ x: 0 }}
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </motion.button>
        </div>
      </div>
      <LiquidMetalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
      />
    </motion.div>
  );
};