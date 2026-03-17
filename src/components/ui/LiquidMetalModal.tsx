import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface LiquidMetalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export const LiquidMetalModal: React.FC<LiquidMetalModalProps> = ({
  isOpen,
  onClose,
  title,
  description
}) => {
  // Prevent scrolling when modal is open
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
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Card - 80vw 80vh */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ 
              duration: 0.5, 
              type: "spring", 
              damping: 25, 
              stiffness: 200 
            }}
            className="relative w-full md:w-[60vw] h-[80vh] bg-black/40 rounded-2xl overflow-hidden border border-red-accent/20 shadow-2xl flex items-center justify-center group"
          >
            {/* The Image (Full surface) */}
            <div className="absolute inset-0 z-0">
               {/* Empty img element as requested, with a subtle fallback gradient */}
               <div className="absolute inset-0 bg-linear-to-br from-black/80 to-red-accent/10 z-10 mix-blend-overlay" />
               <img src="/assets/hero-image.png" alt="Metal Feature" className="w-full h-full object-cover bg-gray-900/50" />
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close Modal"
              className="absolute top-6 right-6 z-50 p-2 rounded-full bg-black/20 hover:bg-red-accent/20 border border-text-primary/10 hover:border-red-accent/40 text-text-primary/70 hover:text-red-accent transition-colors duration-300 backdrop-blur-md cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Animated precision border effect wrapper just for that premium feel */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none border border-text-primary/10 z-20" />

            {/* Inset Frosted Glass Box inside the image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative z-30 bg-black/40 backdrop-blur-md border border-text-primary/10 rounded-xl p-8 max-w-md w-[80%] md:w-auto shadow-2xl mt-[30vh]"
            >
              <h2 className="text-3xl font-bold tracking-wide text-text-primary mb-4">{title}</h2>
              <p className="text-text-primary/80 leading-relaxed">
                {description}
                <br/><br/>
                This is a detailed view. It features advanced material design principles, seamlessly blending extreme minimalism with rich, deep, dark aesthetics. You can showcase the product imagery across the entire expansive canvas.
              </p>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};
