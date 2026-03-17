import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Star, Users } from "lucide-react";

const Fornecedores = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Fornecedores</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total de Fornecedores</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-foreground">18</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Ativos</CardTitle>
              <Truck className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-emerald-600">15</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Favoritos</CardTitle>
              <Star className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-amber-600">5</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Lista de Fornecedores</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Nenhum fornecedor cadastrado ainda.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Fornecedores;
