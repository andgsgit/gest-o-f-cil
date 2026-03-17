import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, TrendingDown, Wallet } from "lucide-react";

const Caixa = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Caixa</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Saldo Atual</CardTitle>
              <Wallet className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-foreground">R$ 12.450,00</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Entradas Hoje</CardTitle>
              <TrendingUp className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-emerald-600">R$ 2.300,00</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Saídas Hoje</CardTitle>
              <TrendingDown className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">R$ 850,00</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Movimentações do Dia</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Nenhuma movimentação registrada ainda.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Caixa;
