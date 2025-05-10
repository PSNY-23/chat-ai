import { motion } from "motion/react";

interface HorizontalGlassProps {
  className?: string;
  duration?: number;
}

const VerticalGlass = ({ className, duration }: HorizontalGlassProps) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full pointer-events-none">
      <motion.div
        className={`z-100 h-full w-4 bg-blue-400 backdrop-blur-[3px] ${className}`}
        initial={{ x: "0vw" }}
        animate={{
          x: ["0vw", "100vw", "0vw"],
        }}
        whileHover={{ scale: 2 }} // Zoom in on hover
        transition={{
          duration: duration || 5, // Time it takes to go from top to bottom
          repeat: Infinity, // Repeats forever
          repeatType: "loop", // Loops the animation
          ease: "easeInOut", // Smooth transition
        }}
      ></motion.div>
    </div>
  );
};

export default VerticalGlass;
