import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import SectionLabel from "./SectionLabel";
import AnimatedHeading from "./AnimatedHeading";
import xfullApp from "@/assets/xfull-connect-app.png";
import appStoreBadges from "@/assets/app-store-badges.png";

const features = [
  { emoji: "📊", text: "Dashboard com métricas em tempo real" },
  { emoji: "👥", text: "Pipeline de leads e contratos no Kanban" },
  { emoji: "💬", text: "Conversas e histórico de atendimentos" },
  { emoji: "📅", text: "Agenda e reunião marcadas" },
  { emoji: "🔔", text: "Notificações instantâneas de novos leads e fechamentos" },
  { emoji: "📈", text: "Relatórios de performance do seu escritório" },
];

const AppShowcaseSection = () => (
  <section className="py-28 px-6 md:px-8 bg-card border-y border-primary/10 overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text content */}
        <div className="order-2 md:order-1">
          <SectionLabel text="XFull Connect — Aplicativo" />
          <AnimatedHeading className="mb-4">
            Seu escritório no bolso.<br />
            <span className="text-primary">Controle total,</span> de onde<br className="hidden md:block" /> você estiver.
          </AnimatedHeading>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-[0.95rem] leading-relaxed mb-10 max-w-lg"
          >
            Enquanto a AdvFull opera tudo por você, você acompanha tudo em tempo real.
            O XFull Connect tem aplicativo nativo — e com ele você visualiza leads entrando,
            contratos sendo fechados, pipeline se movendo e o desempenho do seu escritório,
            direto do celular, a qualquer hora.
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
                <span className="text-base shrink-0">{f.emoji}</span>
                {f.text}
              </motion.li>
            ))}
          </ul>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="text-primary/80 italic text-sm mb-10 max-w-md"
          >
            Você não precisa operar. Mas pode — e vai querer — acompanhar cada contrato que fecha.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
            className="flex gap-3"
          >
            <div className="bg-background border border-border px-5 py-3 rounded-xl flex items-center gap-2 text-[0.8rem] text-muted-foreground">
              <span className="text-lg">🍎</span> App Store
              <span className="text-[0.65rem] text-primary font-syne font-bold ml-1">EM BREVE</span>
            </div>
            <div className="bg-background border border-border px-5 py-3 rounded-xl flex items-center gap-2 text-[0.8rem] text-muted-foreground">
              <span className="text-lg">🤖</span> Google Play
              <span className="text-[0.65rem] text-primary font-syne font-bold ml-1">EM BREVE</span>
            </div>
          </motion.div>
        </div>

        {/* Phone mockup with real screenshot */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center order-1 md:order-2"
        >
          <div className="relative">
            {/* Phone frame */}
            <div className="w-[280px] md:w-[320px] bg-background border-2 border-border rounded-[3rem] p-3 shadow-[0_0_80px_rgba(191,163,90,0.08)] relative overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-background rounded-b-2xl z-20" />

              {/* Screen with real app screenshot */}
              <div className="w-full rounded-[2.3rem] overflow-hidden">
                <img
                  src={xfullApp}
                  alt="XFull Connect — Tela do aplicativo com dashboard, pipeline e notificações"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Floating glow */}
            <div className="absolute -inset-10 bg-primary/5 rounded-full blur-3xl -z-10" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AppShowcaseSection;
