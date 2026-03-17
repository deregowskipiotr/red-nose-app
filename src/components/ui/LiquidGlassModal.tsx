import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface LiquidGlassModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export const LiquidGlassModal: React.FC<LiquidGlassModalProps> = ({
  isOpen,
  onClose,
  title,
  description
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (typeof document === 'undefined') return null;

  const placeholderText = "This extraordinary item redefines the boundaries of modern elegance and functional artistry. Crafted with meticulous precision, it captures light and imagination in unexpected ways. The blurred backdrop creates a sense of infinite depth, drawing the eye directly to the refined details above. Every angle offers a new perspective, revealing subtle nuances that only reveal themselves over time. Perfect for those who appreciate the delicate balance between bold innovation and timeless sophistication.";

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Card - 80vw 80vh */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full md:w-[60vw] h-[80vh] bg-black/40 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,59,59,0.15)] border border-text-primary/10 flex flex-col items-center pt-20 px-8 md:px-20 text-center"
          >
            {/* The Image (Blurred background) */}
            <div className="absolute inset-0 z-0 overflow-hidden">
               <div className="absolute inset-0 bg-black/40 z-10" />
               <img 
                 src="/assets/hero-image.png" 
                 alt="Glass Feature" 
                 className="w-[110%] h-[110%] -ml-[5%] -mt-[5%] object-cover blur-xl bg-gray-900/40 opacity-70" 
               />
               {/* Ambient Glow */}
               <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-red-accent/20 blur-[100px] z-10 mix-blend-screen" />
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close Modal"
              className="absolute top-6 right-6 z-50 p-2 rounded-full bg-text-primary/5 hover:bg-red-accent/20 border border-text-primary/10 hover:border-red-accent/40 text-text-primary/70 hover:text-red-accent transition-colors duration-300 backdrop-blur-xl cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content (Top-Center) */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative z-30 max-w-2xl mx-auto flex flex-col items-center overflow-y-auto pb-10"
            >
              <div className="w-16 h-px bg-red-accent/50 mb-6" />
              <h2 className="text-4xl md:text-5xl font-serif tracking-widest text-text-primary mb-8 uppercase">
                {title}
              </h2>
              
              <div className="bg-black/20 backdrop-blur-md border border-text-primary/5 p-6 rounded-2xl shadow-xl w-full">
                <p className="text-text-primary/80 leading-relaxed text-lg font-light tracking-wide text-justify sm:text-center">
                  {description} {placeholderText}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};
