import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Clock } from "lucide-react";

const alerts = [
  {
    icon: AlertTriangle,
    title: "DAS-MEI vence em 5 dias",
    description: "Boleto de R$ 71,60 referente a Fev/2026",
    type: "warning" as const,
  },
  {
    icon: CheckCircle2,
    title: "Declaração Anual enviada",
    description: "DASN-SIMEI 2025 confirmada pela Receita",
    type: "success" as const,
  },
  {
    icon: Clock,
    title: "3 faturas pendentes",
    description: "Total de R$ 4.250,00 a receber",
    type: "info" as const,
  },
];

const typeStyles = {
  warning: "bg-warning/10 text-warning",
  success: "bg-income/10 text-income",
  info: "bg-primary/10 text-primary",
};

export function AlertsPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="rounded-xl border bg-card p-5 shadow-sm"
    >
      <h3 className="mb-4 font-semibold text-card-foreground">Lembretes</h3>
      <div className="space-y-3">
        {alerts.map((alert, i) => (
          <div
            key={i}
            className="flex items-start gap-3 rounded-lg p-3 bg-muted/30"
          >
            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${typeStyles[alert.type]}`}>
              <alert.icon className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-medium text-card-foreground">{alert.title}</p>
              <p className="text-xs text-muted-foreground">{alert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
