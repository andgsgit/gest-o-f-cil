import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Set", receita: 8200, despesa: 3100 },
  { month: "Out", receita: 9500, despesa: 3800 },
  { month: "Nov", receita: 7800, despesa: 4200 },
  { month: "Dez", receita: 12000, despesa: 5100 },
  { month: "Jan", receita: 10800, despesa: 3900 },
  { month: "Fev", receita: 11500, despesa: 4100 },
];

export function CashFlowChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="rounded-xl border bg-card p-5 shadow-sm"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold text-card-foreground">Fluxo de Caixa</h3>
        <span className="text-xs text-muted-foreground">Últimos 6 meses</span>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 90%)" vertical={false} />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "hsl(220 10% 50%)" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "hsl(220 10% 50%)" }}
            tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "0.75rem",
              border: "1px solid hsl(220 15% 90%)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              fontSize: "13px",
            }}
            formatter={(value: number) =>
              `R$ ${value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
            }
          />
          <Legend
            wrapperStyle={{ fontSize: "12px", paddingTop: "8px" }}
          />
          <Bar
            dataKey="receita"
            name="Receita"
            fill="hsl(160 60% 40%)"
            radius={[6, 6, 0, 0]}
            maxBarSize={32}
          />
          <Bar
            dataKey="despesa"
            name="Despesa"
            fill="hsl(0 72% 55%)"
            radius={[6, 6, 0, 0]}
            maxBarSize={32}
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
