import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const HeroSection = () => {
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const headlines = [
    { line1: "Seu escritório", accent: "crescendo", stroke: "sozinho." },
    { line1: "Prospect, atenda, qualifique", accent: "e feche contratos", stroke: "automaticamente." },
  ];

  const h = headlines[headlineIndex];

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 md:px-8 overflow-hidden bg-background">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.18, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,_hsl(43_55%_53%_/_0.15)_0%,_transparent_70%)] -top-[200px] -right-[200px]"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[45%] left-0 right-0 w-full h-px bg-[linear-gradient(90deg,_transparent,_hsl(43_55%_53%_/_0.4),_transparent)]"
        />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-syne text-[0.72rem] font-bold tracking-[0.25em] uppercase text-primary mb-6 flex items-center gap-3"
        >
          <span className="w-8 h-0.5 bg-primary" />
          AdvFull — uma empresa XFull Aceleradora de Negócios
        </motion.div>

        <div className="min-h-[180px] md:min-h-[280px] lg:min-h-[380px] flex items-end">
          <AnimatePresence mode="wait">
            <motion.h1
              key={headlineIndex}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-[7rem] leading-[0.95] tracking-tight text-white-off mb-6"
            >
              {h.line1}<br />
              <span className="text-primary">{h.accent}</span><br />
              <span className="text-stroke-gold text-transparent">{h.stroke}</span>
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-10"
        >
          <strong className="text-white-off font-medium">Infraestrutura especializada no mundo jurídico</strong> — time de marketing, plataforma completa e <strong className="text-white-off font-medium">IA Multiagêntica</strong> que atende e executa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap gap-4 items-center mb-16"
        >
          <a
            href="https://wa.me/5500000000000"
            className="inline-flex items-center gap-2.5 bg-primary hover:bg-gold-light text-primary-foreground font-syne font-extrabold text-sm tracking-widest uppercase px-9 py-4 transition-all hover:-translate-y-0.5 shadow-[0_0_40px_hsl(43_55%_53%_/_0.3)] hover:shadow-[0_0_60px_hsl(43_55%_53%_/_0.5)] clip-path-polygon"
          >
            ⚡ Quero minha máquina de crescimento
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm font-syne font-medium tracking-wider border-b border-muted-foreground/30 hover:border-primary pb-0.5 transition-colors"
          >
            Ver como funciona ↓
          </a>
        </motion.div>

        {/* Animated stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap gap-10 mb-16"
        >
          {[
            { num: "24/7", label: "Operação ativa" },
            { num: "+6", label: "Especialistas" },
            { num: "100%", label: "Compliance OAB" },
            { num: "∞", label: "Leads simultâneos" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
            >
              <div className="font-display text-5xl text-primary leading-none">{stat.num}</div>
              <div className="text-[0.75rem] text-muted-foreground tracking-widest uppercase mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="pt-10 border-t border-border"
        >
          <div className="font-syne text-[0.6rem] font-bold tracking-[0.2em] uppercase text-text-dim mb-6">
            Parceiros Estratégicos
          </div>
          <div className="overflow-hidden">
            <div className="flex items-center gap-12 opacity-60 hover:opacity-100 transition-all duration-500 animate-scroll w-max">
              {[1, 2].map((set) => (
                <div key={set} className="flex items-center gap-12 pr-12">
                  <img src="https://assets.cdn.filesafe.space/7FnfmdGobxEZclzXQ77Y/media/69cad389a853020be543799f.png" alt="OAB" className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                  <img src="https://assets.cdn.filesafe.space/7FnfmdGobxEZclzXQ77Y/media/69cad327e388c13be09d93c9.png" alt="WhatsApp API Meta" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                  <img src="https://assets.cdn.filesafe.space/7FnfmdGobxEZclzXQ77Y/media/69cad55ed831b23a038b2aed.png" alt="ZapSign" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                  <img src="https://assets.cdn.filesafe.space/7FnfmdGobxEZclzXQ77Y/media/69cad27e6e7844088122b3fa.png" alt="AdvBox" className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
