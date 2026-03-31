import { motion } from "motion/react";
import { FileCheck, Send, PenTool, Database, ListChecks } from "lucide-react";
import SectionLabel from "./SectionLabel";
import AnimatedHeading from "./AnimatedHeading";

const listItems = [
  "Contrato enviado pela LIA para todas as partes simultaneamente",
  "Assinatura digital com validade jurídica via ZapSign",
  "Dados do cliente enviados automaticamente para o AdvBox",
  "Processo criado e tarefas da equipe geradas sem intervenção humana",
];

const flowSteps = [
  { icon: <FileCheck className="w-5 h-5" />, label: "Cliente aceitou", status: "✓ Aceito" },
  { icon: <Send className="w-5 h-5" />, label: "Contrato enviado via ZapSign", status: "Enviado" },
  { icon: <PenTool className="w-5 h-5" />, label: "Assinaturas concluídas", status: "Assinado" },
  { icon: <Database className="w-5 h-5" />, label: "Dados enviados ao AdvBox", status: "Sincronizado" },
  { icon: <ListChecks className="w-5 h-5" />, label: "Processo criado + tarefas geradas", status: "Criado" },
];

const ZapSignAdvBoxSection = () => (
  <section className="py-28 px-6 md:px-8 bg-secondary overflow-hidden">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      {/* Left column — text */}
      <div>
        <SectionLabel text="LIA + ZapSign + AdvBox" />
        <AnimatedHeading className="mb-5">
          Contrato assinado.<br />
          Escritório atualizado.<br />
          <span className="text-primary">Automaticamente.</span>
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base text-muted-foreground max-w-lg leading-relaxed mb-10"
        >
          No momento em que o cliente aceita, a LIA envia o contrato via ZapSign para todas as partes — cliente, advogado e testemunhas — com um clique que você não precisou dar. Assinado? O AdvBox já recebe as informações, o processo é aberto e as tarefas para a equipe são criadas automaticamente.
        </motion.p>

        <div className="space-y-4 mb-10">
          {listItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
              className="flex items-start gap-3"
            >
              <span className="text-primary text-sm mt-0.5 shrink-0">✦</span>
              <span className="text-white-off text-[0.95rem] leading-relaxed">{item}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-primary font-syne font-bold italic text-lg"
        >
          Do "quero contratar" ao escritório operando o caso — sem você tocar em nada.
        </motion.p>
      </div>

      {/* Right column — animated flow */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <div className="relative space-y-0">
          {/* Vertical connecting line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
            className="absolute left-6 md:left-7 top-4 bottom-4 w-px bg-gradient-to-b from-primary via-primary/40 to-primary/10 origin-top"
          />

          {flowSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.2 }}
              className="relative pb-5 last:pb-0"
            >
              <motion.div
                whileHover={{ y: -2, borderColor: "hsl(43 55% 53% / 0.4)" }}
                className="flex items-center gap-4 bg-card border border-border p-4 rounded-lg transition-all relative overflow-hidden group"
              >
                {/* Shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />

                {/* Icon node */}
                <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center text-primary relative z-10">
                  {step.icon}
                </div>

                <div className="flex-1 min-w-0 relative z-10">
                  <span className="text-white-off text-sm font-medium block">{step.label}</span>
                </div>

                {/* Status badge */}
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.7 + i * 0.2 }}
                  className="text-[0.7rem] bg-primary/15 text-primary px-2.5 py-1 rounded-full font-syne font-bold shrink-0 relative z-10"
                >
                  {step.status}
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Pulse glow at bottom */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-primary/10 blur-2xl rounded-full pointer-events-none"
        />
      </motion.div>
    </div>
  </section>
);

export default ZapSignAdvBoxSection;
