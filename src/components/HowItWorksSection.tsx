import { motion } from "motion/react";
import SectionLabel from "./SectionLabel";
import AnimatedHeading from "./AnimatedHeading";

const steps = [
  { num: "01", title: "Lead entra pelo anúncio ou indicação", desc: "Tráfego gerenciado, landing pages otimizadas e copy feita para converter." },
  { num: "02", title: "LIA atende em segundos no WhatsApp", desc: "IA responde instantaneamente, qualifica e identifica o potencial do caso." },
  { num: "03", title: "Contrato enviado e consulta agendada", desc: "Contrato via ZapSign, agenda verificada, confirmação automática." },
  { num: "04", title: "Pipeline se move sozinho", desc: "LIA move o card no Kanban, registra tudo no CRM automaticamente." },
  { num: "05", title: "Cliente recebe atualização automática", desc: "LIA responde sobre andamentos, reduzindo carga operacional." },
  { num: "06", title: "Squad otimiza continuamente", desc: "CMO analisa, Gestor otimiza, Engenheiro aprimora. Cada semana melhor." },
];

const HowItWorksSection = () => (
  <section id="how" className="py-28 px-6 md:px-8 bg-background">
    <div className="max-w-6xl mx-auto">
      <SectionLabel text="O processo" />
      <AnimatedHeading className="mb-16">
        Do lead ao contrato<br /><span className="text-primary">sem você tocar em nada</span>
      </AnimatedHeading>

      <div className="relative space-y-0">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/10 origin-top"
        />
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="flex gap-8 items-start pb-12 relative"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-14 h-14 shrink-0 bg-card border-2 border-primary flex items-center justify-center font-display text-2xl text-primary relative z-10 clip-path-nav"
            >
              {step.num}
            </motion.div>
            <div className="pt-2">
              <h3 className="font-syne text-[1.05rem] font-bold text-white-off mb-1.5">{step.title}</h3>
              <p className="text-[0.9rem] text-muted-foreground max-w-lg leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
