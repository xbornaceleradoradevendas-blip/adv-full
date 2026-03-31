import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Check, Bell, X } from "lucide-react";
import SectionLabel from "./SectionLabel";
import AnimatedHeading from "./AnimatedHeading";

const appointments = [
  { time: "09:00", name: "Reunião — Maria S.", done: true },
  { time: "10:30", name: "Reunião — João P.", done: true },
  { time: "14:00", name: "Reunião — Ana L.", scheduling: true },
  { time: "16:00", name: "Retorno — Carlos M.", done: false },
];

const features = [
  { icon: <Calendar className="w-5 h-5" />, text: "Verifica sua agenda em tempo real" },
  { icon: <Check className="w-5 h-5" />, text: "Confirma o horário automaticamente" },
  { icon: <Bell className="w-5 h-5" />, text: "Envia lembrete antes da reunião" },
  { icon: <X className="w-5 h-5" />, text: "Gerencia cancelamentos sem intervenção" },
];

const LiaSchedulingSection = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [schedulingActive, setSchedulingActive] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setSchedulingActive(true), 1500);
    const t2 = setTimeout(() => setShowWhatsApp(true), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section className="py-28 px-6 md:px-8 bg-card overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <SectionLabel text="LIA — Agendamento Automático" center />
        </div>
        <AnimatedHeading className="text-center mb-3">
          Sua agenda preenchida.<br />
          <span className="text-primary">Sem você mover um dedo.</span>
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-16"
        >
          A LIA verifica sua disponibilidade em tempo real, encontra o melhor horário e confirma direto com o cliente pelo WhatsApp — tudo automaticamente.
        </motion.p>

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-start">
          {/* Calendar mock */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-background border border-border rounded-lg overflow-hidden relative"
          >
            <div className="flex items-center justify-between p-5 border-b border-border">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="font-syne font-bold text-white-off">Março 2026</span>
              </div>
              <span className="text-sm text-muted-foreground">Terça-feira, 31</span>
            </div>

            <div className="p-5 space-y-3">
              {appointments.map((apt, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                  className={`flex items-center gap-4 p-3 rounded-lg border transition-all duration-500 ${
                    apt.scheduling
                      ? "border-primary/40 bg-primary/5 shadow-[0_0_20px_hsl(43_55%_53%_/_0.1)]"
                      : "border-border bg-background"
                  }`}
                >
                  <span className="text-sm text-muted-foreground font-mono w-12">{apt.time}</span>
                  <span className="text-sm text-white-off flex-1">{apt.name}</span>
                  {apt.done && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.6 + i * 0.15 }}
                    >
                      <Check className="w-4 h-4 text-primary" />
                    </motion.div>
                  )}
                  {apt.scheduling && (
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-syne font-bold"
                    >
                      Agendando...
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* WhatsApp popup */}
            <AnimatePresence>
              {showWhatsApp && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-4 left-4 right-4 bg-background border border-border rounded-lg p-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center text-[0.6rem] font-bold text-background">LIA</div>
                    <span className="text-xs font-syne font-bold text-white-off">LIA via WhatsApp</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Olá Ana! Sua reunião com o Dr. Silva foi confirmada para <strong className="text-primary">terça, 14h</strong>. Até lá! ✅
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Feature list */}
          <div className="space-y-6">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 shrink-0 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center text-primary">
                  {feat.icon}
                </div>
                <span className="text-white-off text-[0.95rem]">{feat.text}</span>
              </motion.div>
            ))}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-primary font-syne font-bold italic text-lg mt-8"
            >
              Você chega na reunião. A LIA fez todo o resto.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiaSchedulingSection;
