import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface Transaction {
  id: string;
  description: string;
  category: string;
  amount: number;
  type: "income" | "expense";
  date: string;
}

const transactions: Transaction[] = [
  { id: "1", description: "Pagamento - Cliente Silva", category: "Serviço", amount: 2500, type: "income", date: "28 Fev" },
  { id: "2", description: "Material de escritório", category: "Despesa", amount: 189.90, type: "expense", date: "27 Fev" },
  { id: "3", description: "Venda produto digital", category: "Venda", amount: 450, type: "income", date: "26 Fev" },
  { id: "4", description: "Conta de internet", category: "Fixa", amount: 119.90, type: "expense", date: "25 Fev" },
  { id: "5", description: "Consultoria - Empresa ABC", category: "Serviço", amount: 3200, type: "income", date: "24 Fev" },
  { id: "6", description: "Software assinatura", category: "Fixa", amount: 49.90, type: "expense", date: "23 Fev" },
  { id: "7", description: "Freelance - Projeto Web", category: "Serviço", amount: 1800, type: "income", date: "22 Fev" },
];

export function RecentTransactions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="rounded-xl border bg-card shadow-sm"
    >
      <div className="flex items-center justify-between p-5 pb-3">
        <h3 className="font-semibold text-card-foreground">Transações Recentes</h3>
        <button className="text-xs font-medium text-primary hover:underline">
          Ver todas
        </button>
      </div>
      <div className="divide-y">
        {transactions.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
            className="flex items-center justify-between px-5 py-3 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                  t.type === "income" ? "bg-income/10" : "bg-expense/10"
                }`}
              >
                {t.type === "income" ? (
                  <ArrowUpRight className="h-4 w-4 text-income" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-expense" />
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-card-foreground">{t.description}</p>
                <p className="text-xs text-muted-foreground">{t.category} • {t.date}</p>
              </div>
            </div>
            <span
              className={`text-sm font-semibold ${
                t.type === "income" ? "text-income" : "text-expense"
              }`}
            >
              {t.type === "income" ? "+" : "-"} R$ {t.amount.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
