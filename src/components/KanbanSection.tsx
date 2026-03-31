import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionLabel from "./SectionLabel";
import AnimatedHeading from "./AnimatedHeading";

interface Lead {
  id: number;
  name: string;
  phone: string;
  area: string;
  desc: string;
  stage: number; // 0-3
}

const stages = [
  { name: "Novo Lead", emoji: "📥", color: "border-destructive/40" },
  { name: "Qualificado", emoji: "✨", color: "border-primary/40" },
  { name: "Contrato Enviado", emoji: "📄", color: "border-blue-500/40" },
  { name: "Fechado", emoji: "🎉", color: "border-green-500/40" },
];

const initialLeads: Lead[] = [
  { id: 1, name: "Maria Santos", phone: "(11) 99999-1234", area: "Trabalhista", desc: "Demissão sem justa causa", stage: 0 },
  { id: 2, name: "Pedro Alves", phone: "(21) 98888-5678", area: "Civil", desc: "Revisão contratual", stage: 0 },
  { id: 3, name: "Ana Costa", phone: "(31) 97777-9012", area: "Tributário", desc: "Planejamento fiscal", stage: 0 },
];

const KanbanSection = () => {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [movedCount, setMovedCount] = useState(0);
  const [movingId, setMovingId] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setLeads((prev) => {
        const movable = prev.filter((l) => l.stage < 3);
        if (movable.length === 0) {
          // Reset all to stage 0 after a pause
          return prev.map((l) => ({ ...l, stage: 0 }));
        }
        const toMove = movable[Math.floor(Math.random() * movable.length)];
        setMovingId(toMove.id);
        setTimeout(() => setMovingId(null), 800);
        setMovedCount((c) => c + 1);
        return prev.map((l) =>
          l.id === toMove.id ? { ...l, stage: l.stage + 1 } : l
        );
      });
    }, 2500);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="py-28 px-6 md:px-8 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <SectionLabel text="Funil Automatizado" center />
        </div>
        <AnimatedHeading className="text-center mb-3">
          Status que se atualiza<br />
          <span className="text-primary">sozinho</span>
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground max-w-xl mx-auto mb-6"
        >
          A IA move seus contatos automaticamente pelo funil conforme a conversa evolui
        </motion.p>

        {/* Moving indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 text-sm text-primary font-syne">
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="inline-block"
            >
              ✦
            </motion.span>
            IA movendo: Lead qualificado pela conversa
          </div>
        </motion.div>

        {/* Progress bar */}
        <div className="grid grid-cols-4 gap-1 mb-2">
          {stages.map((s, i) => (
            <div key={i} className="h-1 rounded-full overflow-hidden bg-border">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: "0%" }}
                animate={{
                  width: leads.some(l => l.stage >= i) ? "100%" : "0%",
                }}
                transition={{ duration: 0.5 }}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-1 mb-4">
          {stages.map((s, i) => (
            <div key={i} className="text-center text-[0.6rem] md:text-xs text-muted-foreground">{s.name}</div>
          ))}
        </div>

        {/* Kanban board */}
        <div className="grid grid-cols-4 gap-4">
          {stages.map((stage, si) => {
            const stageLeads = leads.filter((l) => l.stage === si);
            return (
              <motion.div
                key={si}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: si * 0.1 }}
                className={`bg-card border ${stage.color} rounded-lg p-4 min-h-[220px]`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 font-syne font-bold text-sm text-white-off">
                    <span>{stage.emoji}</span>
                    {stage.name}
                  </div>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    {stageLeads.length}
                  </span>
                </div>

                <AnimatePresence mode="popLayout">
                  {stageLeads.map((lead) => (
                    <motion.div
                      key={lead.id}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: 1,
                        scale: movingId === lead.id ? 1.05 : 1,
                        boxShadow: movingId === lead.id ? "0 0 20px hsl(43 55% 53% / 0.3)" : "none",
                      }}
                      exit={{ opacity: 0, scale: 0.8, x: 50 }}
                      transition={{ duration: 0.4, layout: { duration: 0.4 } }}
                      className="bg-background border border-border rounded-lg p-3 mb-2"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-[0.6rem]">👤</div>
                        <div>
                          <div className="text-xs font-syne font-bold text-white-off">{lead.name}</div>
                          <div className="text-[0.65rem] text-muted-foreground">{lead.phone}</div>
                        </div>
                      </div>
                      <span className="inline-block text-[0.6rem] bg-primary/10 text-primary px-1.5 py-0.5 rounded mt-1">{lead.area}</span>
                      <div className="text-[0.65rem] text-muted-foreground mt-1">{lead.desc}</div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom labels */}
        <div className="grid grid-cols-4 gap-4 mt-3">
          {["Lead entra pelo WhatsApp", "IA qualifica automaticamente", "Contrato enviado via ZapSign", "Negócio fechado! 🎉"].map((t, i) => (
            <div key={i} className="text-center text-xs text-muted-foreground">{t}</div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <span className="text-primary font-syne font-bold text-lg">+{2847 + movedCount}</span>
          <span className="text-muted-foreground text-sm ml-2">contatos movidos automaticamente essa semana</span>
        </motion.div>
      </div>
    </section>
  );
};

export default KanbanSection;
