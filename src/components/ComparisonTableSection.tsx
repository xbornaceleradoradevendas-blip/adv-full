import { motion } from "motion/react";
import { Check, X, Minus } from "lucide-react";
import SectionLabel from "./SectionLabel";
import AnimatedHeading from "./AnimatedHeading";

type CellValue = true | false | "partial" | string;

interface Row {
  feature: string;
  advfull: CellValue;
  tools: CellValue;
  agencies: CellValue;
}

const rows: Row[] = [
  { feature: "IA atendendo 24/7 no WhatsApp", advfull: true, tools: "partial", agencies: false },
  { feature: "CRM jurídico com pipeline Kanban", advfull: true, tools: false, agencies: "partial" },
  { feature: "Squad completo de marketing", advfull: true, tools: false, agencies: true },
  { feature: "Tráfego pago gerenciado", advfull: true, tools: false, agencies: true },
  { feature: "Automação multicanal integrada", advfull: true, tools: "partial", agencies: false },
  { feature: "Compliance OAB garantido", advfull: true, tools: false, agencies: "partial" },
  { feature: "Dashboard com KPIs em tempo real", advfull: true, tools: "partial", agencies: false },
  { feature: "Funis de alta conversão", advfull: true, tools: false, agencies: "partial" },
  { feature: "Assinatura digital (ZapSign)", advfull: true, tools: false, agencies: false },
  { feature: "Integração AdvBox", advfull: true, tools: false, agencies: false },
];

const renderCell = (value: CellValue) => {
  if (value === true) return <Check className="w-4 h-4 md:w-5 md:h-5 text-primary" />;
  if (value === false) return <X className="w-4 h-4 md:w-5 md:h-5 text-destructive/60" />;
  if (value === "partial") return <Minus className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />;
  return <span className="text-xs md:text-sm text-muted-foreground">{value}</span>;
};

const ComparisonTableSection = () => (
  <section className="py-28 px-4 md:px-8 bg-secondary overflow-x-hidden">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <SectionLabel text="Comparativo" center />
        <AnimatedHeading className="mb-4">
          Por que a AdvFull é<br /><span className="text-primary">diferente de tudo</span>
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground text-sm max-w-lg mx-auto"
        >
          Veja lado a lado o que cada solução realmente entrega.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0"
      >
        <table className="w-full border-collapse min-w-[480px]">
          <thead>
            <tr>
              <th className="text-left py-3 md:py-4 px-2 md:px-5 text-[0.6rem] md:text-xs font-syne font-bold tracking-[0.1em] md:tracking-[0.15em] uppercase text-muted-foreground">
                Funcionalidade
              </th>
              <th className="py-3 md:py-4 px-1.5 md:px-5 text-center">
                <div className="font-display text-base md:text-xl text-primary tracking-wider">AdvFull</div>
                <div className="text-[0.5rem] md:text-[0.65rem] text-muted-foreground uppercase tracking-widest mt-0.5">Solução completa</div>
              </th>
              <th className="py-3 md:py-4 px-1.5 md:px-5 text-center">
                <div className="font-syne text-[0.65rem] md:text-sm font-bold text-muted-foreground">Ferramentas de IA</div>
                <div className="text-[0.5rem] md:text-[0.65rem] text-muted-foreground uppercase tracking-widest mt-0.5">Isoladas</div>
              </th>
              <th className="py-3 md:py-4 px-1.5 md:px-5 text-center">
                <div className="font-syne text-[0.65rem] md:text-sm font-bold text-muted-foreground">Agências Comuns</div>
                <div className="text-[0.5rem] md:text-[0.65rem] text-muted-foreground uppercase tracking-widest mt-0.5">Genéricas</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="border-t border-border group hover:bg-card/50 transition-colors"
              >
                <td className="py-3 md:py-4 px-2 md:px-5 text-[0.7rem] md:text-[0.88rem] text-white-off font-medium">{row.feature}</td>
                <td className="py-3 md:py-4 px-1.5 md:px-5">
                  <div className="flex justify-center">{renderCell(row.advfull)}</div>
                </td>
                <td className="py-3 md:py-4 px-1.5 md:px-5">
                  <div className="flex justify-center">{renderCell(row.tools)}</div>
                </td>
                <td className="py-3 md:py-4 px-1.5 md:px-5">
                  <div className="flex justify-center">{renderCell(row.agencies)}</div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-6 text-center text-[0.72rem] text-text-dim tracking-widest uppercase"
      >
        <Minus className="w-3 h-3 inline mr-1.5" /> = Parcial ou limitado
      </motion.div>
    </div>
  </section>
);

export default ComparisonTableSection;
