import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { TrendingUp, Users, FileText, DollarSign, BarChart3, Clock } from "lucide-react";
import SectionLabel from "./SectionLabel";
import AnimatedHeading from "./AnimatedHeading";

const useCountUp = (target: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(!startOnView);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!started) return;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration]);

  return { count, ref };
};

const kpis = [
  { icon: <Users className="w-6 h-6" />, label: "Leads este mês", value: 1247, suffix: "", prefix: "" },
  { icon: <TrendingUp className="w-6 h-6" />, label: "Taxa de conversão", value: 34, suffix: "%", prefix: "" },
  { icon: <FileText className="w-6 h-6" />, label: "Contratos fechados", value: 423, suffix: "", prefix: "" },
  { icon: <DollarSign className="w-6 h-6" />, label: "Receita gerada", value: 890, suffix: "K", prefix: "R$" },
  { icon: <Clock className="w-6 h-6" />, label: "Tempo médio resposta", value: 8, suffix: "s", prefix: "" },
  { icon: <BarChart3 className="w-6 h-6" />, label: "ROI médio", value: 12, suffix: "x", prefix: "" },
];

const DashboardSection = () => {
  return (
    <section className="py-28 px-6 md:px-8 bg-card border-y border-primary/10">
      <div className="max-w-6xl mx-auto">
        <SectionLabel text="Dashboard em tempo real" center />
        <AnimatedHeading className="text-center mb-3">
          Controle total.<br /><span className="text-primary">Decisões com dados.</span>
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground max-w-xl mx-auto mb-16"
        >
          Acompanhe cada métrica do seu escritório em tempo real. Sem achismo, sem surpresa.
        </motion.p>

        {/* KPI Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {kpis.map((kpi, i) => (
            <KPICard key={i} kpi={kpi} delay={i * 0.1} />
          ))}
        </div>

        {/* Mini chart mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-background border border-border rounded-lg p-6 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-syne font-bold text-white-off">Performance Semanal</h3>
            <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full font-syne">Atualizado agora</span>
          </div>
          <div className="flex items-end gap-2 h-32">
            {[35, 52, 45, 68, 58, 78, 92].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 bg-gradient-to-t from-primary/30 to-primary rounded-t-sm relative group"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute -top-6 left-1/2 -translate-x-1/2 text-[0.65rem] text-primary bg-primary/10 px-1.5 py-0.5 rounded whitespace-nowrap"
                >
                  {h} leads
                </motion.div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[0.65rem] text-muted-foreground">
            {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const KPICard = ({ kpi, delay }: { kpi: typeof kpis[0]; delay: number }) => {
  const { count, ref } = useCountUp(kpi.value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, borderColor: "hsl(43 55% 53% / 0.4)" }}
      className="bg-background border border-border rounded-lg p-6 text-center transition-colors"
    >
      <div className="flex justify-center mb-3 text-primary">{kpi.icon}</div>
      <div className="font-display text-4xl md:text-5xl text-primary leading-none mb-1">
        {kpi.prefix}{count}{kpi.suffix}
      </div>
      <div className="text-xs text-muted-foreground tracking-widest uppercase">{kpi.label}</div>
    </motion.div>
  );
};

export default DashboardSection;
