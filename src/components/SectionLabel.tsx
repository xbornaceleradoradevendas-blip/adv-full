import { motion } from "motion/react";

interface SectionLabelProps {
  text: string;
  center?: boolean;
}

const SectionLabel = ({ text, center = false }: SectionLabelProps) => (
  <motion.div
    initial={{ opacity: 0, x: center ? 0 : -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`font-syne text-[0.72rem] font-bold tracking-[0.25em] uppercase text-primary mb-3 flex items-center gap-2.5 ${center ? 'justify-center' : ''}`}
  >
    <span className="w-5 h-0.5 bg-primary" />
    {text}
  </motion.div>
);

export default SectionLabel;
