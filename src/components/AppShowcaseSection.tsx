import { motion } from "motion/react";
import { Smartphone, MessageSquare, BarChart3, Calendar, Bell, ArrowRight } from "lucide-react";
import SectionLabel from "./SectionLabel";
import AnimatedHeading from "./AnimatedHeading";

const screens = [
  { icon: <MessageSquare className="w-5 h-5" />, label: "Chat com LIA", color: "from-primary/20 to-primary/5" },
  { icon: <BarChart3 className="w-5 h-5" />, label: "Dashboard", color: "from-primary/15 to-primary/5" },
  { icon: <Calendar className="w-5 h-5" />, label: "Agenda", color: "from-primary/20 to-primary/5" },
  { icon: <Bell className="w-5 h-5" />, label: "Notificações", color: "from-primary/15 to-primary/5" },
];

const features = [
  "Pipeline de leads na palma da mão",
  "Notificações em tempo real de novos leads",
  "Agenda integrada com confirmação automática",
  "Métricas e KPIs acessíveis de qualquer lugar",
];

const AppShowcaseSection = () => (
  <section className="py-28 px-6 md:px-8 bg-card border-y border-primary/10 overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Phone frame */}
            <div className="w-[280px] h-[560px] bg-background border-2 border-border rounded-[3rem] p-3 shadow-[0_0_80px_rgba(191,163,90,0.08)] relative overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-background rounded-b-2xl z-20" />
              
              {/* Screen content */}
              <div className="w-full h-full bg-secondary rounded-[2.3rem] overflow-hidden relative">
                {/* Status bar */}
                <div className="h-10 flex items-end justify-center pb-1">
                  <div className="text-[0.6rem] text-muted-foreground font-medium">9:41</div>
                </div>

                {/* App header */}
                <div className="px-5 pt-3 pb-4">
                  <div className="font-display text-lg text-primary tracking-wider">AdvFull</div>
                  <div className="text-[0.65rem] text-muted-foreground mt-0.5">Bom dia, Dr. Silva 👋</div>
                </div>

                {/* Stats row */}
                <div className="px-5 flex gap-2 mb-4">
                  {[
                    { val: "12", label: "Leads" },
                    { val: "3", label: "Reuniões" },
                    { val: "89%", label: "Conv." },
                  ].map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + i * 0.15 }}
                      className="flex-1 bg-card border border-border rounded-xl p-2.5 text-center"
                    >
                      <div className="font-display text-lg text-primary leading-none">{s.val}</div>
                      <div className="text-[0.55rem] text-muted-foreground mt-0.5">{s.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Notifications */}
                <div className="px-5 space-y-2">
                  {[
                    { title: "Novo lead capturado", time: "Agora", highlight: true },
                    { title: "Reunião confirmada 14h", time: "2min", highlight: false },
                    { title: "Contrato assinado!", time: "15min", highlight: true },
                  ].map((notif, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2 + i * 0.2 }}
                      className={`flex items-center gap-3 p-3 rounded-xl border ${
                        notif.highlight
                          ? "bg-primary/5 border-primary/20"
                          : "bg-card border-border"
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full shrink-0 ${notif.highlight ? "bg-primary" : "bg-muted-foreground/30"}`} />
                      <div className="flex-1 min-w-0">
                        <div className="text-[0.7rem] text-white-off truncate">{notif.title}</div>
                      </div>
                      <div className="text-[0.55rem] text-muted-foreground shrink-0">{notif.time}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom nav */}
                <div className="absolute bottom-0 left-0 right-0 h-14 bg-card/80 backdrop-blur-sm border-t border-border flex items-center justify-around px-6">
                  {screens.map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.5 + i * 0.1 }}
                      className={`flex flex-col items-center gap-0.5 ${i === 0 ? "text-primary" : "text-muted-foreground"}`}
                    >
                      {s.icon}
                      <span className="text-[0.5rem]">{s.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
              className="absolute -right-6 top-20 bg-primary text-primary-foreground px-4 py-2 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                <span className="text-xs font-syne font-bold">iOS & Android</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Text content */}
        <div>
          <SectionLabel text="App AdvFull" />
          <AnimatedHeading className="mb-6">
            Seu escritório no<br /><span className="text-primary">seu bolso</span>
          </AnimatedHeading>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-[0.95rem] leading-relaxed mb-8 max-w-md"
          >
            Acompanhe leads, reuniões, contratos e métricas em tempo real.
            Receba notificações instantâneas sempre que a LIA capturar um novo lead
            ou fechar um contrato.
          </motion.p>

          <ul className="space-y-4 mb-10">
            {features.map((f, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-3 text-[0.9rem] text-white-off"
              >
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                {f}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex gap-3"
          >
            <div className="bg-card border border-border px-5 py-3 rounded-xl flex items-center gap-2 text-[0.8rem] text-muted-foreground">
              <span className="text-lg"> </span> App Store
            </div>
            <div className="bg-card border border-border px-5 py-3 rounded-xl flex items-center gap-2 text-[0.8rem] text-muted-foreground">
              <span className="text-lg"> </span> Google Play
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default AppShowcaseSection;
