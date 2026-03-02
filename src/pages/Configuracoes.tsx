import { DashboardLayout } from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import { User, Building, Bell, Shield, Palette } from "lucide-react";

const sections = [
  {
    icon: User,
    title: "Perfil",
    description: "Nome, e-mail e dados do MEI",
    fields: [
      { label: "Nome Completo", value: "Maria Empreendedora", type: "text" },
      { label: "CNPJ", value: "12.345.678/0001-90", type: "text" },
      { label: "E-mail", value: "maria@email.com", type: "email" },
    ],
  },
  {
    icon: Building,
    title: "Empresa",
    description: "Dados do seu negócio",
    fields: [
      { label: "Nome Fantasia", value: "ME Soluções", type: "text" },
      { label: "Ramo de Atividade", value: "Prestação de Serviços", type: "text" },
    ],
  },
];

const ConfiguracoesPage = () => {
  return (
    <DashboardLayout title="Configurações">
      <div className="max-w-2xl space-y-6">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border bg-card p-6 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                <section.icon className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">{section.title}</h3>
                <p className="text-xs text-muted-foreground">{section.description}</p>
              </div>
            </div>
            <div className="space-y-4">
              {section.fields.map((field) => (
                <div key={field.label}>
                  <label className="text-sm font-medium text-card-foreground mb-1 block">{field.label}</label>
                  <input
                    type={field.type}
                    defaultValue={field.value}
                    className="w-full rounded-lg border bg-background px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <button className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
            Salvar Alterações
          </button>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default ConfiguracoesPage;
