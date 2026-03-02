import { DashboardLayout } from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, Filter, Plus, Search } from "lucide-react";
import { useState } from "react";

type TransactionType = "all" | "income" | "expense";

const allTransactions = [
  { id: "1", description: "Pagamento - Cliente Silva", category: "Serviço", amount: 2500, type: "income" as const, date: "28/02/2026" },
  { id: "2", description: "Material de escritório", category: "Despesa operacional", amount: 189.90, type: "expense" as const, date: "27/02/2026" },
  { id: "3", description: "Venda produto digital", category: "Venda", amount: 450, type: "income" as const, date: "26/02/2026" },
  { id: "4", description: "Conta de internet", category: "Despesa fixa", amount: 119.90, type: "expense" as const, date: "25/02/2026" },
  { id: "5", description: "Consultoria - Empresa ABC", category: "Serviço", amount: 3200, type: "income" as const, date: "24/02/2026" },
  { id: "6", description: "Software assinatura", category: "Despesa fixa", amount: 49.90, type: "expense" as const, date: "23/02/2026" },
  { id: "7", description: "Freelance - Projeto Web", category: "Serviço", amount: 1800, type: "income" as const, date: "22/02/2026" },
  { id: "8", description: "Almoço de negócios", category: "Despesa variável", amount: 85.00, type: "expense" as const, date: "21/02/2026" },
  { id: "9", description: "Manutenção do site", category: "Serviço", amount: 600, type: "income" as const, date: "20/02/2026" },
  { id: "10", description: "Energia elétrica", category: "Despesa fixa", amount: 210.50, type: "expense" as const, date: "19/02/2026" },
];

const TransacoesPage = () => {
  const [filter, setFilter] = useState<TransactionType>("all");
  const [search, setSearch] = useState("");

  const filtered = allTransactions.filter((t) => {
    if (filter !== "all" && t.type !== filter) return false;
    if (search && !t.description.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <DashboardLayout title="Transações">
      <div className="space-y-4">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar transação..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border bg-card pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex rounded-lg border bg-card p-0.5">
              {(["all", "income", "expense"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    filter === type
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {type === "all" ? "Todas" : type === "income" ? "Receitas" : "Despesas"}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity">
              <Plus className="h-3.5 w-3.5" />
              Nova
            </button>
          </div>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-xl border bg-card shadow-sm overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/30">
                  <th className="text-left px-5 py-3 font-medium text-muted-foreground">Descrição</th>
                  <th className="text-left px-5 py-3 font-medium text-muted-foreground hidden sm:table-cell">Categoria</th>
                  <th className="text-left px-5 py-3 font-medium text-muted-foreground hidden md:table-cell">Data</th>
                  <th className="text-right px-5 py-3 font-medium text-muted-foreground">Valor</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filtered.map((t, i) => (
                  <motion.tr
                    key={t.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="hover:bg-muted/30 transition-colors cursor-pointer"
                  >
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-7 w-7 items-center justify-center rounded-md ${
                          t.type === "income" ? "bg-income/10" : "bg-expense/10"
                        }`}>
                          {t.type === "income" ? (
                            <ArrowUpRight className="h-3.5 w-3.5 text-income" />
                          ) : (
                            <ArrowDownRight className="h-3.5 w-3.5 text-expense" />
                          )}
                        </div>
                        <span className="font-medium text-card-foreground">{t.description}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-muted-foreground hidden sm:table-cell">{t.category}</td>
                    <td className="px-5 py-3.5 text-muted-foreground hidden md:table-cell">{t.date}</td>
                    <td className={`px-5 py-3.5 text-right font-semibold ${
                      t.type === "income" ? "text-income" : "text-expense"
                    }`}>
                      {t.type === "income" ? "+" : "-"} R$ {t.amount.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default TransacoesPage;
