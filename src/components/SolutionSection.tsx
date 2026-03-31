import { motion } from "motion/react";
import { Check } from "lucide-react";
import SectionLabel from "./SectionLabel";
import AnimatedHeading from "./AnimatedHeading";

const items = [
  "IA Multiagêntica (LIA) atendendo, qualificando e fechando 24/7",
  "XFull Connect: CRM + funis + automações + tracking completo",
  "Squad dedicado executando marketing por você",
  "Integração nativa com AdvBox, ZapSign e WhatsApp API",
  "Dashboard em tempo real com controle total",
];

const SolutionSection = () => (
  <section className="py-28 px-6 md:px-8 bg-card border-y border-primary/10">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
      <div>
        <SectionLabel text="A solução" />
        <AnimatedHeading className="mb-5">
          Uma infraestrutura<br /><span className="text-primary">completa de crescimento</span>
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base text-muted-foreground max-w-lg leading-relaxed mb-8"
        >
          Não é uma ferramenta. É um ecossistema inteiro funcionando integrado.
        </motion.p>

        <ul className="space-y-4">
          {items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="flex items-start gap-3 text-[0.95rem] text-white-off"
            >
              <div className="w-[22px] h-[22px] shrink-0 bg-primary/15 border border-primary/40 rounded flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-primary" />
              </div>
              {item}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Orbital animation */}
      <div className="relative min-h-[400px] hidden md:block">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[360px] h-[360px] rounded-full border border-primary/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[260px] h-[260px] rounded-full border border-primary/15 border-dashed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute w-[160px] h-[160px] rounded-full border border-primary/15 bg-primary/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-primary rounded-full flex items-center justify-center font-display text-xl text-primary-foreground text-center tracking-wider leading-none shadow-[0_0_60px_hsl(43_55%_53%_/_0.4)]"
        >
          ADV<br />FULL
        </motion.div>

        {/* Orbiting elements */}
        {["🤖", "📊", "⚖️", "📣", "👥", "🔗"].map((emoji, i) => {
          const angle = (i * 60) * (Math.PI / 180);
          const radius = 180;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              animate={{ y: [0, -8, 0] }}
              style={{ top: `calc(50% + ${y}px)`, left: `calc(50% + ${x}px)` }}
              className="absolute w-14 h-14 -translate-x-1/2 -translate-y-1/2 bg-card border border-primary/30 rounded-full flex items-center justify-center text-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
            >
              {emoji}
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default SolutionSection;
