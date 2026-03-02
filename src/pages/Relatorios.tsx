import { DashboardLayout } from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const monthlyData = [
  { month: "Set", receita: 8200, despesa: 3100, lucro: 5100 },
  { month: "Out", receita: 9500, despesa: 3800, lucro: 5700 },
  { month: "Nov", receita: 7800, despesa: 4200, lucro: 3600 },
  { month: "Dez", receita: 12000, despesa: 5100, lucro: 6900 },
  { month: "Jan", receita: 10800, despesa: 3900, lucro: 6900 },
  { month: "Fev", receita: 11500, despesa: 4100, lucro: 7400 },
];

const categoryData = [
  { name: "Serviços", value: 65, color: "hsl(220 60% 50%)" },
  { name: "Vendas", value: 20, color: "hsl(160 60% 40%)" },
  { name: "Freelance", value: 15, color: "hsl(35 90% 55%)" },
];

const RelatoriosPage = () => {
  return (
    <DashboardLayout title="Relatórios">
      <div className="space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Receita Total (6 meses)", value: "R$ 59.800,00", sub: "Média: R$ 9.966,67/mês" },
            { label: "Despesa Total (6 meses)", value: "R$ 24.200,00", sub: "Média: R$ 4.033,33/mês" },
            { label: "Lucro Líquido (6 meses)", value: "R$ 35.600,00", sub: "Margem: 59,5%" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border bg-card p-5 shadow-sm"
            >
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="text-2xl font-bold text-card-foreground mt-1">{item.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 rounded-xl border bg-card p-5 shadow-sm"
          >
            <h3 className="mb-4 font-semibold text-card-foreground">Lucro Mensal</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 90%)" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(220 10% 50%)" }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(220 10% 50%)" }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
                <Tooltip
                  contentStyle={{ borderRadius: "0.75rem", border: "1px solid hsl(220 15% 90%)", fontSize: "13px" }}
                  formatter={(value: number) => `R$ ${value.toLocaleString("pt-BR")}`}
                />
                <Bar dataKey="lucro" name="Lucro" fill="hsl(220 60% 50%)" radius={[6, 6, 0, 0]} maxBarSize={36} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="rounded-xl border bg-card p-5 shadow-sm"
          >
            <h3 className="mb-4 font-semibold text-card-foreground">Receita por Categoria</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={categoryData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={4} dataKey="value">
                  {categoryData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-2">
              {categoryData.map((cat) => (
                <div key={cat.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: cat.color }} />
                    <span className="text-card-foreground">{cat.name}</span>
                  </div>
                  <span className="font-medium text-card-foreground">{cat.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RelatoriosPage;
