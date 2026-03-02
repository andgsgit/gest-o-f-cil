import { DashboardLayout } from "@/components/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { CashFlowChart } from "@/components/CashFlowChart";
import { RecentTransactions } from "@/components/RecentTransactions";
import { QuickActions } from "@/components/QuickActions";
import { AlertsPanel } from "@/components/AlertsPanel";
import { Wallet, TrendingUp, TrendingDown, Target } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout title="Painel">
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <StatCard
            title="Saldo Atual"
            value="R$ 18.750,00"
            change="+12,5%"
            changeType="positive"
            icon={Wallet}
            delay={0}
          />
          <StatCard
            title="Receita Mensal"
            value="R$ 11.500,00"
            change="+6,5%"
            changeType="positive"
            icon={TrendingUp}
            delay={0.05}
          />
          <StatCard
            title="Despesas Mensal"
            value="R$ 4.100,00"
            change="-8,2%"
            changeType="positive"
            icon={TrendingDown}
            delay={0.1}
          />
          <StatCard
            title="Meta do Mês"
            value="76%"
            change="R$ 3.500 restante"
            changeType="neutral"
            icon={Target}
            delay={0.15}
          />
        </div>

        {/* Chart + Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <CashFlowChart />
          </div>
          <QuickActions />
        </div>

        {/* Transactions + Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <RecentTransactions />
          </div>
          <AlertsPanel />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
