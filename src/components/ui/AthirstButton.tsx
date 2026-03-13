// src/components/ui/AthirstButton.tsx
import { motion } from "framer-motion";

interface AthirstButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const AthirstButton = ({ children, className = '', onClick }: AthirstButtonProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        px-6 py-2 bg-text-primary/5 backdrop-blur-md 
        rounded-md border border-text-primary/10 
        hover:border-text-primary/20 text-text-primary/80 
        hover:text-text-primary/90 shadow-lg 
        hover:shadow-text-primary/20 transition-all 
        duration-500 cursor-pointer
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};