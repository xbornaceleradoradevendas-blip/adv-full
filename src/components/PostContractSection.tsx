import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Activity, MessageCircle, CheckCircle2, RefreshCw } from "lucide-react";
import SectionLabel from "./SectionLabel";
import AnimatedHeading from "./AnimatedHeading";

const listItems = [
  "Consulta automática ao AdvBox em tempo real",
  "Atualizações proativas enviadas ao cliente pelo WhatsApp",
  "Linguagem simples, clara e sem juridiquês",
  "Advogado não é interrompido para informações de andamento",
];

const chatMessages = [
  { type: "status", text: "Seu processo teve uma nova movimentação." },
  { type: "lia", text: "Já consultei o andamento no sistema." },
  { type: "lia", text: "Te explico de forma simples o que mudou." },
  { type: "confirm", text: "Nenhuma ação sua é necessária agora." },
];

const PostContractSection = () => {
  const [visibleMessages, setVisibleMessages] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages((prev) => {
        if (prev >= chatMessages.length) return prev;
        return prev + 1;
      });
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-28 px-6 md:px-8 bg-card overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left column — text */}
        <div>
          <SectionLabel text="LIA + AdvBox — Pós-contrato" />
          <AnimatedHeading className="mb-5">
            Seu cliente sempre informado.<br />
            <span className="text-primary">Seu tempo sempre preservado.</span>
          </AnimatedHeading>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base text-muted-foreground max-w-lg leading-relaxed mb-10"
          >
            Depois que o contrato é assinado, começa outro problema clássico: o cliente que manda mensagem todo dia perguntando "como está meu processo?". A LIA resolve isso. Ela consulta o AdvBox em tempo real, busca o andamento do processo e responde o cliente com linguagem clara, humana e sem juridiquês — antes mesmo de ele precisar perguntar.
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
            Cliente informado é cliente satisfeito. E advogado livre é advogado produtivo.
          </motion.p>
        </div>

        {/* Right column — animated assistant scene */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          {/* AdvBox process card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -2 }}
            className="bg-background border border-border rounded-lg p-5 group transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center">
                <Activity className="w-4 h-4 text-primary" />
              </div>
              <div>
                <span className="text-white-off text-sm font-syne font-bold block">AdvBox — Andamento</span>
                <span className="text-[0.7rem] text-muted-foreground">Processo nº 0012345-67.2026</span>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="ml-auto"
              >
                <RefreshCw className="w-3.5 h-3.5 text-primary/50" />
              </motion.div>
            </div>

            <div className="space-y-2">
              {["Petição inicial protocolada", "Audiência designada — 15/04", "Nova movimentação detectada"].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.15 }}
                  className="flex items-center gap-2 text-[0.8rem]"
                >
                  <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${i === 2 ? "text-primary" : "text-muted-foreground/50"}`} />
                  <span className={i === 2 ? "text-primary font-medium" : "text-muted-foreground"}>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* LIA processing card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -2 }}
            className="bg-background border border-primary/15 rounded-lg p-4 flex items-center gap-3 group transition-all"
          >
            <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center text-[0.7rem] font-syne font-extrabold text-primary-foreground shrink-0">LIA</div>
            <div className="flex-1 min-w-0">
              <span className="text-white-off text-sm font-medium block">Interpretando movimentação...</span>
              <span className="text-[0.7rem] text-muted-foreground">Traduzindo para linguagem simples</span>
            </div>
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-primary rounded-full shrink-0"
            />
          </motion.div>

          {/* Chat messages */}
          <div className="bg-background border border-border rounded-lg overflow-hidden">
            <div className="p-3 border-b border-border flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-muted-foreground" />
              <span className="text-[0.75rem] font-syne font-bold text-white-off">Mensagem enviada ao cliente</span>
              <span className="text-[0.65rem] text-muted-foreground ml-auto">via WhatsApp</span>
            </div>
            <div className="p-4 space-y-2.5 min-h-[160px]">
              <AnimatePresence>
                {chatMessages.slice(0, visibleMessages).map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className={`text-[0.82rem] leading-relaxed p-2.5 px-3.5 rounded-lg max-w-[90%] ${
                      msg.type === "status"
                        ? "bg-primary/10 border border-primary/20 text-primary"
                        : msg.type === "confirm"
                        ? "bg-primary/5 border border-primary/10 text-white-off"
                        : "bg-card border border-border text-white-off"
                    }`}
                  >
                    {msg.text}
                    {msg.type === "confirm" && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="inline-block ml-2 text-primary"
                      >
                        ✓
                      </motion.span>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PostContractSection;
