import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Clock, CheckCircle } from "lucide-react";

const Compras = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Compras</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total de Compras</CardTitle>
              <ShoppingCart className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-foreground">47</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pendentes</CardTitle>
              <Clock className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-amber-600">3</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Concluídas</CardTitle>
              <CheckCircle className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-emerald-600">44</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Histórico de Compras</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Nenhuma compra registrada ainda.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Compras;
