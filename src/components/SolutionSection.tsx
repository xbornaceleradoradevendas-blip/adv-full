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

      {/* Orbital animation - XFull Connect ecosystem */}
      <div className="relative min-h-[450px] hidden md:flex items-center justify-center">
        {/* Outer orbit ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute w-[420px] h-[420px] rounded-full border border-primary/10"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        />
        {/* Middle orbit ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[300px] h-[300px] rounded-full border border-primary/15 border-dashed"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        />
        {/* Inner glow ring */}
        <div className="absolute w-[180px] h-[180px] rounded-full border border-primary/20 bg-primary/5" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />

        {/* Center - XFull Connect */}
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[130px] h-[130px] bg-gradient-to-br from-primary/90 to-primary rounded-full flex flex-col items-center justify-center shadow-[0_0_80px_hsl(var(--primary)/0.45)] z-10"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        >
          <span className="font-display text-[0.7rem] tracking-[0.3em] text-primary-foreground uppercase leading-none">XFull</span>
          <span className="font-display text-[1.1rem] tracking-widest text-primary-foreground uppercase leading-none mt-0.5">Connect</span>
        </motion.div>

        {/* Orbiting elements */}
        {[
          { label: "ADVbox", icon: "⚖️" },
          { label: "Google", icon: "🔍" },
          { label: "Google Ads", icon: "📢" },
          { label: "Meta Ads", icon: "📣" },
          { label: "Sites", icon: "🌐" },
          { label: "WhatsApp", icon: "💬" },
          { label: "Dashboard", icon: "📊" },
          { label: "Links", icon: "🔗" },
          { label: "Integrações", icon: "⚡" },
        ].map((item, i) => {
          const total = 9;
          const angle = (i * (360 / total)) * (Math.PI / 180);
          const radius = 195;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              animate={{ y: [0, -6, 0] }}
              className="absolute flex flex-col items-center gap-1 -translate-x-1/2 -translate-y-1/2 z-20"
              style={{ top: `calc(50% + ${y}px)`, left: `calc(50% + ${x}px)` }}
            >
              <div className="w-[52px] h-[52px] bg-card border border-primary/25 rounded-xl flex items-center justify-center text-xl shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-all duration-300">
                {item.icon}
              </div>
              <span className="text-[0.6rem] text-muted-foreground font-syne font-bold tracking-wider uppercase whitespace-nowrap">{item.label}</span>
            </motion.div>
          );
        })}

        {/* Connecting lines (subtle) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 500">
          {[...Array(9)].map((_, i) => {
            const angle = (i * (360 / 9)) * (Math.PI / 180);
            const x = 250 + Math.cos(angle) * 195;
            const y = 250 + Math.sin(angle) * 195;
            return (
              <motion.line
                key={i}
                x1="250" y1="250" x2={x} y2={y}
                stroke="hsl(43 55% 53% / 0.08)"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.08 }}
              />
            );
          })}
        </svg>
      </div>
    </div>
  </section>
);

export default SolutionSection;
