"use client";
import { motion } from "framer-motion"; // not "motion/react" — it's "framer-motion"

interface HorizontalGlassProps {
  className?: string;
  duration?: number;
}

export const HorizontalGlass = ({ className, duration }: HorizontalGlassProps) => {
  return (
    <motion.div
      className={`absolute left-0 w-full h-8 z-50 rounded-md bg-transparent backdrop-blur-[3px] pointer-events-none ${className}`}
      initial={{ top: 0 }}
      animate={{ top: ["0%", "100%", "0%"] }}
      transition={{
        duration: duration || 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.1 }}
    ></motion.div>
  );
};
