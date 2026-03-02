import { DashboardLayout } from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import { Search, Plus, Package, MoreHorizontal } from "lucide-react";
import { useState } from "react";

const products = [
  { id: "1", name: "Consultoria Empresarial", price: 250, unit: "hora", sold: 48, revenue: 12000 },
  { id: "2", name: "Desenvolvimento Web", price: 3500, unit: "projeto", sold: 5, revenue: 17500 },
  { id: "3", name: "E-book Marketing Digital", price: 49.90, unit: "unidade", sold: 120, revenue: 5988 },
  { id: "4", name: "Curso Online", price: 197, unit: "acesso", sold: 34, revenue: 6698 },
  { id: "5", name: "Design de Logo", price: 800, unit: "projeto", sold: 8, revenue: 6400 },
  { id: "6", name: "Manutenção Mensal", price: 600, unit: "mês", sold: 6, revenue: 3600 },
];

const ProdutosPage = () => {
  const [search, setSearch] = useState("");
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout title="Produtos & Serviços">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar produto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border bg-card pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity">
            <Plus className="h-3.5 w-3.5" />
            Novo Produto
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-xl border bg-card shadow-sm overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/30">
                  <th className="text-left px-5 py-3 font-medium text-muted-foreground">Produto/Serviço</th>
                  <th className="text-left px-5 py-3 font-medium text-muted-foreground hidden sm:table-cell">Preço</th>
                  <th className="text-left px-5 py-3 font-medium text-muted-foreground hidden md:table-cell">Vendidos</th>
                  <th className="text-right px-5 py-3 font-medium text-muted-foreground">Receita</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filtered.map((p, i) => (
                  <motion.tr
                    key={p.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="hover:bg-muted/30 transition-colors"
                  >
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                          <Package className="h-4 w-4 text-accent-foreground" />
                        </div>
                        <span className="font-medium text-card-foreground">{p.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-muted-foreground hidden sm:table-cell">
                      R$ {p.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}/{p.unit}
                    </td>
                    <td className="px-5 py-3.5 text-muted-foreground hidden md:table-cell">{p.sold}</td>
                    <td className="px-5 py-3.5 text-right font-semibold text-income">
                      R$ {p.revenue.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
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

export default ProdutosPage;
