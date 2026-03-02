import { DashboardLayout } from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import { Search, Plus, Mail, Phone, MoreHorizontal } from "lucide-react";
import { useState } from "react";

const clients = [
  { id: "1", name: "João Silva", email: "joao@email.com", phone: "(11) 98765-4321", totalSpent: 12500, lastPurchase: "28/02/2026" },
  { id: "2", name: "Maria Santos", email: "maria@email.com", phone: "(11) 91234-5678", totalSpent: 8900, lastPurchase: "25/02/2026" },
  { id: "3", name: "Empresa ABC Ltda", email: "contato@abc.com", phone: "(11) 3456-7890", totalSpent: 32000, lastPurchase: "24/02/2026" },
  { id: "4", name: "Pedro Oliveira", email: "pedro@email.com", phone: "(21) 99876-5432", totalSpent: 4200, lastPurchase: "20/02/2026" },
  { id: "5", name: "Ana Costa", email: "ana@email.com", phone: "(31) 98765-1234", totalSpent: 6800, lastPurchase: "18/02/2026" },
  { id: "6", name: "Tech Solutions", email: "contato@tech.com", phone: "(11) 2345-6789", totalSpent: 15600, lastPurchase: "15/02/2026" },
];

const ClientesPage = () => {
  const [search, setSearch] = useState("");
  const filtered = clients.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout title="Clientes">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar cliente..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border bg-card pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity">
            <Plus className="h-3.5 w-3.5" />
            Novo Cliente
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((client, i) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border bg-card p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    {client.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">{client.name}</p>
                    <p className="text-xs text-muted-foreground">{client.email}</p>
                  </div>
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1"><Phone className="h-3 w-3" />{client.phone}</span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t">
                <div>
                  <p className="text-xs text-muted-foreground">Total gasto</p>
                  <p className="text-sm font-semibold text-card-foreground">
                    R$ {client.totalSpent.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Última compra</p>
                  <p className="text-sm font-medium text-card-foreground">{client.lastPurchase}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ClientesPage;
