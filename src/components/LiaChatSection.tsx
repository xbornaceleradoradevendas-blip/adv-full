import { motion } from "motion/react";
import { Zap, Target, FileText, Clock, TrendingUp, Scale } from "lucide-react";
import SectionLabel from "./SectionLabel";
import AnimatedHeading from "./AnimatedHeading";

const capabilities = [
  { icon: <Zap className="w-4.5 h-4.5" />, title: "Resposta instantânea", text: "Atende em segundos, 24/7" },
  { icon: <Target className="w-4.5 h-4.5" />, title: "Qualificação inteligente", text: "Identifica potencial do caso" },
  { icon: <FileText className="w-4.5 h-4.5" />, title: "Envio de contratos", text: "Via ZapSign automático" },
  { icon: <Clock className="w-4.5 h-4.5" />, title: "Agendamento automático", text: "Verifica e confirma consultas" },
  { icon: <TrendingUp className="w-4.5 h-4.5" />, title: "Follow-up ativo", text: "Nunca deixa lead sem resposta" },
  { icon: <Scale className="w-4.5 h-4.5" />, title: "Atualização processual", text: "Responde sobre processos" },
];

const messages = [
  { from: "user", text: "Boa noite, fui demitido sem justa causa. O que faço?", time: "23:14" },
  { from: "lia", text: "Boa noite! Você tem o direito de acionar a empresa. Quanto tempo trabalhou lá?", time: "23:14" },
  { from: "user", text: "Trabalhei 4 anos, tenho tudo guardado.", time: "23:15" },
  { from: "lia", text: "Perfeito — caso bastante sólido. Posso enviar o contrato e agendar consulta amanhã?", time: "23:15" },
  { from: "user", text: "Pode sim!", time: "23:16" },
  { from: "lia", text: "✅ Contrato enviado. Temos disponibilidade amanhã às 9h ou 11h. Qual prefere?", time: "23:16" },
];

const LiaChatSection = () => (
  <section className="py-28 px-6 md:px-8 bg-secondary overflow-hidden">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div>
        <SectionLabel text="LIA — IA Multiagêntica" />
        <AnimatedHeading className="mb-5">
          A IA que<br /><span className="text-primary">fecha contratos</span><br />enquanto você dorme
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-base text-muted-foreground max-w-lg leading-relaxed mb-10"
        >
          LIA não é um chatbot. É uma inteligência multiagêntica treinada para o universo jurídico.
        </motion.p>

        <div className="grid grid-cols-2 gap-3">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className="bg-card border border-border p-3 flex items-start gap-2"
            >
              <div className="text-primary shrink-0">{cap.icon}</div>
              <div className="text-[0.8rem] text-muted-foreground leading-snug">
                <strong className="text-white-off block font-medium text-[0.82rem]">{cap.title}</strong>
                {cap.text}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Chat simulation */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-card border border-primary/15 rounded-lg overflow-hidden"
      >
        <div className="bg-background p-4 flex items-center gap-3 border-b border-border">
          <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center text-[0.8rem] font-syne font-extrabold text-primary-foreground">LIA</div>
          <div>
            <div className="font-syne text-[0.85rem] font-bold text-white-off">LIA — Assistente Jurídica</div>
            <div className="text-[0.72rem] text-green-500 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Online agora
            </div>
          </div>
        </div>
        <div className="p-5 flex flex-col gap-3 max-h-[400px] overflow-y-auto">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.15 }}
              className={`max-w-[80%] p-2.5 px-3.5 text-[0.82rem] leading-relaxed rounded-lg ${
                msg.from === "user"
                  ? "bg-background border border-border text-muted-foreground self-end"
                  : "bg-primary/10 border border-primary/20 text-white-off self-start"
              }`}
            >
              {msg.text}
              <div className="text-[0.65rem] text-text-dim mt-1">{msg.time}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default LiaChatSection;
