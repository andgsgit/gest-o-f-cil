import { motion } from "framer-motion";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  delay?: number;
}

export function StatCard({ title, value, change, changeType = "neutral", icon: Icon, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="rounded-xl border bg-card p-5 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold tracking-tight text-card-foreground">{value}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
          <Icon className="h-5 w-5 text-accent-foreground" />
        </div>
      </div>
      {change && (
        <div className="mt-3 flex items-center gap-1.5">
          {changeType === "positive" ? (
            <TrendingUp className="h-3.5 w-3.5 text-income" />
          ) : changeType === "negative" ? (
            <TrendingDown className="h-3.5 w-3.5 text-expense" />
          ) : null}
          <span
            className={`text-xs font-medium ${
              changeType === "positive"
                ? "text-income"
                : changeType === "negative"
                ? "text-expense"
                : "text-muted-foreground"
            }`}
          >
            {change}
          </span>
          <span className="text-xs text-muted-foreground">vs mês anterior</span>
        </div>
      )}
    </motion.div>
  );
}
