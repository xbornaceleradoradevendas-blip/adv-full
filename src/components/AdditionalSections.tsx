import { motion } from "motion/react";
import { BarChart3, Zap, Users, TrendingUp, Target, Link as LinkIcon, MessageSquare, PenTool, Smartphone, Palette, Scale, Lock, FileText, FolderOpen } from "lucide-react";
import SectionLabel from "./SectionLabel";
import AnimatedHeading from "./AnimatedHeading";

const modules = [
  { icon: <BarChart3 className="w-7 h-7" />, name: "CRM Jurídico", desc: "Toda jornada do lead até o contrato assinado." },
  { icon: <Zap className="w-7 h-7" />, name: "Automação Multicanal", desc: "WhatsApp, e-mail e SMS integrados." },
  { icon: <Users className="w-7 h-7" />, name: "Pipeline Kanban", desc: "LIA move os cards automaticamente." },
  { icon: <TrendingUp className="w-7 h-7" />, name: "Dashboard Gerencial", desc: "Métricas de leads, conversão e faturamento." },
  { icon: <Target className="w-7 h-7" />, name: "Funis de Alta Conversão", desc: "Páginas desenvolvidas para converter." },
  { icon: <LinkIcon className="w-7 h-7" />, name: "Integração com Anúncios", desc: "Google e Meta Ads conectados ao CRM." },
];

const squad = [
  { icon: <Target className="w-7 h-7" />, role: "CMO Estratégico", desc: "Define posicionamento e estratégia de aquisição." },
  { icon: <MessageSquare className="w-7 h-7" />, role: "Gestor de Tráfego", desc: "Gerencia campanhas, otimiza CPA e escala." },
  { icon: <PenTool className="w-7 h-7" />, role: "Copywriter", desc: "Anúncios e scripts que convertem." },
  { icon: <Smartphone className="w-7 h-7" />, role: "Social Media", desc: "Conteúdo estratégico que gera autoridade." },
  { icon: <Zap className="w-7 h-7" />, role: "Engenheiro de IA", desc: "Configura e aprimora a LIA continuamente." },
  { icon: <Palette className="w-7 h-7" />, role: "Web Designer", desc: "Páginas de alta conversão otimizadas." },
];

const compliance = [
  { icon: <Scale className="w-6 h-6" />, title: "100% dentro das regras da OAB", text: "Zero risco de sanção." },
  { icon: <Lock className="w-6 h-6" />, title: "WhatsApp API Oficial", text: "Sem risco de bloqueio." },
  { icon: <FileText className="w-6 h-6" />, title: "ZapSign integrada", text: "Assinatura digital com validade jurídica." },
  { icon: <FolderOpen className="w-6 h-6" />, title: "Integração AdvBox", text: "LIA consulta processos em tempo real." },
];

export const ConnectSection = () => (
  <section className="py-28 px-6 md:px-8 bg-background">
    <div className="max-w-6xl mx-auto">
      <SectionLabel text="XFull Connect" />
      <AnimatedHeading className="mb-14">
        O sistema que<br /><span className="text-primary">coloca tudo junto</span>
      </AnimatedHeading>

      <div className="grid md:grid-cols-3 gap-5">
        {modules.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -5, borderColor: "hsl(43 55% 53% / 0.3)" }}
            className="group bg-card border border-border p-7 relative overflow-hidden transition-all after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-primary after:to-transparent after:opacity-0 hover:after:opacity-100 after:transition-opacity"
          >
            <div className="text-primary mb-3.5 group-hover:scale-110 transition-transform duration-300">{m.icon}</div>
            <h3 className="font-syne text-[0.95rem] font-bold text-white-off mb-1.5">{m.name}</h3>
            <p className="text-[0.82rem] text-muted-foreground leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const SquadSection = () => (
  <section className="py-28 px-6 md:px-8 bg-card border-y border-primary/10">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <SectionLabel text="O diferencial" center />
        <AnimatedHeading className="mb-5">
          Você contrata um<br /><span className="text-primary">time completo.</span>
        </AnimatedHeading>
      </div>

      <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {squad.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ scale: 1.03 }}
            className="bg-background border border-border p-7 text-center relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-14 before:h-0.5 before:bg-primary"
          >
            <div className="text-primary flex justify-center my-3">{m.icon}</div>
            <div className="font-syne text-[0.8rem] font-bold text-primary tracking-widest uppercase mb-2">{m.role}</div>
            <p className="text-[0.8rem] text-muted-foreground leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const ComplianceSection = () => (
  <section className="py-28 px-6 md:px-8 bg-background">
    <div className="max-w-6xl mx-auto">
      <SectionLabel text="Segurança e compliance" />
      <AnimatedHeading className="mb-14">
        Construído para o<br /><span className="text-primary">universo jurídico</span>
      </AnimatedHeading>

      <div className="grid md:grid-cols-2 gap-6">
        {compliance.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -3 }}
            className="bg-card border border-border p-8 flex gap-5 items-start transition-transform"
          >
            <div className="w-12 h-12 shrink-0 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary rounded-lg">
              {item.icon}
            </div>
            <div>
              <h3 className="font-syne text-[0.95rem] font-bold text-white-off mb-1.5">{item.title}</h3>
              <p className="text-[0.85rem] text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const ResultsSection = () => (
  <section className="py-28 px-6 md:px-8 bg-card">
    <div className="max-w-6xl mx-auto">
      <SectionLabel text="O que muda" />
      <AnimatedHeading className="mb-14">
        Números que<br /><span className="text-primary">transformam negócios</span>
      </AnimatedHeading>

      <div className="grid md:grid-cols-4 gap-6">
        {[
          { num: "+10×", label: "Mais contratos", sub: "Com a mesma estrutura" },
          { num: "-90%", label: "Carga operacional", sub: "Advogado foca no que importa" },
          { num: "24/7", label: "Atendimento ativo", sub: "Sem custo de plantão" },
          { num: "∞", label: "Capacidade", sub: "LIA escala sem limite" },
        ].map((res, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-background border border-primary/15 p-8 text-center transition-transform"
          >
            <div className="font-display text-6xl text-primary leading-none">{res.num}</div>
            <div className="text-[0.8rem] text-muted-foreground mt-1.5 uppercase tracking-widest">{res.label}</div>
            <div className="text-[0.72rem] text-text-dim mt-1">{res.sub}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const CTASection = () => (
  <section className="py-32 px-6 md:px-8 bg-background text-center relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,_hsl(43_55%_53%_/_0.08)_0%,_transparent_60%)]" />
    <div className="max-w-6xl mx-auto relative z-10">
      <SectionLabel text="Próximo passo" center />
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-display text-5xl md:text-8xl leading-[0.95] text-white-off mb-6"
      >
        Pronto para transformar<br />seu escritório em uma<br /><span className="text-primary">máquina de contratos?</span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a
          href="https://wa.me/5511977276044"
          className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-background font-syne font-extrabold text-base tracking-widest uppercase px-10 py-5 transition-all hover:-translate-y-1 shadow-[0_0_50px_rgba(37,211,102,0.3)] hover:shadow-[0_0_70px_rgba(37,211,102,0.5)] clip-path-polygon"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          Quero minha máquina de crescimento
        </a>
        <div className="mt-8 text-[0.8rem] text-text-dim tracking-widest uppercase">
          Diagnóstico gratuito · Sem compromisso · Resposta em minutos
        </div>
      </motion.div>
    </div>
  </section>
);

export const FooterSection = () => (
  <footer className="py-10 px-6 md:px-8 bg-background border-t border-border flex flex-wrap items-center justify-between gap-4">
    <div className="font-display text-2xl tracking-widest text-primary">
      Adv<span className="text-white-off">Full</span>
    </div>
    <div className="text-[0.75rem] text-text-dim">
      Uma empresa XFull Aceleradora de Negócios · © 2026 AdvFull.
    </div>
  </footer>
);
