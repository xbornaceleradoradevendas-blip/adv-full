import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import SectionLabel from "./SectionLabel";
import AnimatedHeading from "./AnimatedHeading";

const ContrastSection = () => (
  <section className="bg-secondary border-y border-border py-20 px-6 md:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <SectionLabel text="A diferença que muda tudo" center />
        <AnimatedHeading className="mb-5">
          Ferramenta vs <span className="text-primary">Máquina Completa</span>
        </AnimatedHeading>
      </div>

      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="opacity-90"
        >
          <div className="font-syne text-[0.7rem] font-bold tracking-[0.2em] uppercase text-text-dim mb-5">O que você tem hoje</div>
          <ul className="space-y-3">
            {[
              "Uma ferramenta isolada de IA",
              "Você precisa configurar tudo sozinho",
              "Sem estratégia de tráfego integrada",
              "Sem CRM com pipeline jurídico",
              "Sem time de execução",
              "Crescimento imprevisível",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-2.5 text-[0.92rem] text-muted-foreground line-through opacity-80"
              >
                <X className="w-3.5 h-3.5 mt-1 shrink-0 text-destructive" /> {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <div className="flex md:flex-col items-center gap-2 font-display text-xl text-text-dim tracking-widest">
          <div className="hidden md:block w-px h-10 bg-gradient-to-b from-transparent via-muted-foreground/30 to-transparent" />
          VS
          <div className="hidden md:block w-px h-10 bg-gradient-to-b from-transparent via-muted-foreground/30 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-syne text-[0.7rem] font-bold tracking-[0.2em] uppercase text-primary mb-5">O que a AdvFull entrega</div>
          <ul className="space-y-3">
            {[
              "Squad completo de marketing executando",
              "XFull Connect — CRM, automações e funis prontos",
              "Tráfego pago gerenciado e otimizado",
              "IA Multiagêntica fechando contratos 24/7",
              "WhatsApp API oficial — 100% compliance",
              "Consultoria estratégica dedicada",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-2.5 text-[0.92rem] text-white-off"
              >
                <Check className="w-3.5 h-3.5 mt-1 shrink-0 text-primary" /> {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContrastSection;
