import { motion } from "motion/react";
import { ReactNode } from "react";

interface AnimatedHeadingProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedHeading = ({ children, className = "", delay = 0 }: AnimatedHeadingProps) => (
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={`font-display text-4xl md:text-7xl text-white-off leading-[0.95] tracking-tight ${className}`}
  >
    {children}
  </motion.h2>
);

export default AnimatedHeading;
