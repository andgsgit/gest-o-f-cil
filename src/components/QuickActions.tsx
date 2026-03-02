import { motion } from "framer-motion";
import { Plus, FileText, Users, ArrowUpDown } from "lucide-react";

const actions = [
  { label: "Nova Transação", icon: ArrowUpDown, color: "bg-primary text-primary-foreground" },
  { label: "Novo Cliente", icon: Users, color: "bg-success text-success-foreground" },
  { label: "Gerar Relatório", icon: FileText, color: "bg-warning text-warning-foreground" },
  { label: "Novo Produto", icon: Plus, color: "bg-accent text-accent-foreground" },
];

export function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.35 }}
      className="rounded-xl border bg-card p-5 shadow-sm"
    >
      <h3 className="mb-4 font-semibold text-card-foreground">Ações Rápidas</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, i) => (
          <button
            key={action.label}
            className="flex flex-col items-center gap-2 rounded-xl border border-border/50 p-4 hover:bg-muted/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${action.color}`}>
              <action.icon className="h-5 w-5" />
            </div>
            <span className="text-xs font-medium text-card-foreground">{action.label}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
