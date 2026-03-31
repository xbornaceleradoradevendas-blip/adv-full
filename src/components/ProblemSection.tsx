import { motion } from "motion/react";
import SectionLabel from "./SectionLabel";
import AnimatedHeading from "./AnimatedHeading";

const problems = [
  { icon: "⏱️", title: "Lead entra e ninguém responde a tempo", desc: "78% dos leads fecham com quem responde primeiro." },
  { icon: "🔩", title: "Operacional engole o estratégico", desc: "Advogado bom demais sendo usado para tarefas mecânicas." },
  { icon: "📉", title: "Sem dados, sem previsibilidade", desc: "Sem métricas de leads, consultas e contratos fechados." },
  { icon: "🔧", title: "Ferramentas soltas", desc: "CRM aqui, IA ali, anúncio em outro lugar. Caos operacional." },
];

const ProblemSection = () => (
  <section className="py-28 px-6 md:px-8 bg-background">
    <div className="max-w-6xl mx-auto">
      <SectionLabel text="O diagnóstico real" />
      <AnimatedHeading className="mb-5">
        Por que seu escritório<br /><span className="text-primary">não cresce mais rápido</span>
      </AnimatedHeading>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-base text-muted-foreground max-w-lg leading-relaxed mb-14"
      >
        Não falta talento jurídico. Falta infraestrutura de negócios.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-6">
        {problems.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4, borderColor: "hsl(43 55% 53% / 0.3)" }}
            className="bg-card border border-border p-7 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-destructive transition-colors"
          >
            <div className="text-2xl mb-3">{card.icon}</div>
            <h3 className="font-syne text-[0.95rem] font-bold text-white-off mb-2">{card.title}</h3>
            <p className="text-[0.88rem] text-muted-foreground leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
